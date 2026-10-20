import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminAccess } from '@/lib/adminAuth';
import { getSupabaseServerClient } from '@/lib/supabase';
import {
  sendMetaCrmStageEvent,
  CRM_STATUS_TO_META_EVENT,
} from '@/lib/metaCrmCapi';

export async function GET() {
  const { authenticated, authorized } = await verifyAdminAccess();

  if (!authenticated) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }

  if (!authorized) {
    return NextResponse.json(
      { error: 'Acceso denegado: rol de administrador requerido' },
      { status: 403 }
    );
  }

  try {
    const supabase = getSupabaseServerClient();
    const { data: leads, error } = await supabase
      .from('evaluacion_leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error obteniendo leads:', error);
      return NextResponse.json(
        { error: 'Error al consultar leads en la base de datos' },
        { status: 500 }
      );
    }

    return NextResponse.json({ leads: leads || [] });
  } catch (err) {
    console.error('Excepción obteniendo leads:', err);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const { authenticated, authorized } = await verifyAdminAccess();

  if (!authenticated) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }

  if (!authorized) {
    return NextResponse.json(
      { error: 'Acceso denegado: rol de administrador requerido' },
      { status: 403 }
    );
  }

  try {
    const { id, estado, lead_status, lead_priority, notas } = await req.json();

    if (!id || typeof id !== 'string') {
      return NextResponse.json(
        { error: 'El ID del lead es obligatorio.' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();

    // 1. Obtener estado previo del lead
    const { data: previousLead, error: fetchErr } = await supabase
      .from('evaluacion_leads')
      .select(
        'id, lead_status, estado, meta_crm_last_status, qualified_lead_sent_at, qualified_lead_event_id, fbp, fbc, fbclid, meta_lead_id, email, telefono, nombre, ciudad'
      )
      .eq('id', id)
      .single();

    if (fetchErr || !previousLead) {
      return NextResponse.json(
        { error: 'Lead no encontrado en la base de datos.' },
        { status: 404 }
      );
    }

    const previousStatus = (
      previousLead.lead_status ||
      previousLead.estado ||
      'NEW'
    ).toUpperCase();
    const newStatus = lead_status
      ? String(lead_status).trim().toUpperCase()
      : undefined;
    const statusChanged = Boolean(newStatus && newStatus !== previousStatus);

    // 2. Construir objeto de actualización
    const updates: Record<string, any> = {};
    if (estado !== undefined) updates.estado = estado;
    if (newStatus !== undefined) {
      updates.lead_status = newStatus;
      updates.estado = newStatus.toLowerCase();
    }
    if (lead_priority !== undefined) updates.lead_priority = lead_priority;
    if (notas !== undefined) updates.notas = notas;

    // 3. Persistir actualización en Supabase
    const { data: updatedLead, error: updateError } = await supabase
      .from('evaluacion_leads')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (updateError || !updatedLead) {
      console.error('Error actualizando lead en Supabase:', updateError);
      return NextResponse.json(
        { error: 'Error al actualizar el lead en la base de datos.' },
        { status: 500 }
      );
    }

    // 4. Disparar Meta Conversions API (CRM)
    const isQualifiedTransition = newStatus === 'QUALIFIED';
    const alreadySentQualified = Boolean(previousLead.qualified_lead_sent_at);
    const shouldSkipQualifiedDueToDuplicate =
      isQualifiedTransition && alreadySentQualified;

    if (
      statusChanged &&
      newStatus &&
      CRM_STATUS_TO_META_EVENT[newStatus] &&
      !shouldSkipQualifiedDueToDuplicate
    ) {
      try {
        const crmResult = await sendMetaCrmStageEvent(updatedLead, newStatus);
        const sentAt = crmResult.sentAt || new Date().toISOString();

        if (crmResult.ok && !crmResult.skipped) {
          const leadMetaUpdates: Record<string, any> = {
            meta_crm_last_status: newStatus,
            meta_crm_last_event_name: crmResult.eventName,
            meta_crm_last_sent_at: sentAt,
            meta_crm_last_event_id: crmResult.eventId,
            meta_crm_last_error: null,
          };

          if (newStatus === 'QUALIFIED') {
            leadMetaUpdates.qualified_lead_sent_at = sentAt;
            leadMetaUpdates.qualified_lead_event_id = crmResult.eventId;
            updatedLead.qualified_lead_sent_at = sentAt;
            updatedLead.qualified_lead_event_id = crmResult.eventId;
          }

          await supabase
            .from('evaluacion_leads')
            .update(leadMetaUpdates)
            .eq('id', id);

          updatedLead.meta_crm_last_status = newStatus;
          updatedLead.meta_crm_last_event_name = crmResult.eventName;
          updatedLead.meta_crm_last_sent_at = sentAt;
          updatedLead.meta_crm_last_event_id = crmResult.eventId;
          updatedLead.meta_crm_last_error = null;
        } else if (!crmResult.ok && !crmResult.skipped) {
          await supabase
            .from('evaluacion_leads')
            .update({
              meta_crm_last_error:
                crmResult.error || 'Error en respuesta de Meta CAPI',
              meta_crm_last_event_id: crmResult.eventId || null,
            })
            .eq('id', id);

          updatedLead.meta_crm_last_error = crmResult.error;
          updatedLead.meta_crm_last_event_id = crmResult.eventId;
        }

        // 5. Registrar en tabla de auditoría crm_meta_events
        if (!crmResult.skipped && crmResult.eventId) {
          const { error: auditError } = await supabase
            .from('crm_meta_events')
            .insert({
              lead_id: id,
              event_name:
                crmResult.eventName || CRM_STATUS_TO_META_EVENT[newStatus],
              previous_status: previousStatus,
              new_status: newStatus,
              event_id: crmResult.eventId,
              meta_lead_id: updatedLead.meta_lead_id || null,
              event_time: new Date().toISOString(),
              sent_at: crmResult.ok ? sentAt : null,
              success: Boolean(crmResult.ok),
              http_status: crmResult.httpStatus || null,
              events_received: crmResult.eventsReceived ?? null,
              fbtrace_id: crmResult.fbtraceId || null,
              error_message: crmResult.ok
                ? null
                : crmResult.error || 'Error en respuesta de Meta CAPI',
            });

          if (auditError) {
            console.error('[CRM Meta Events Audit Insert Error]', auditError);
          }
        }
      } catch (metaErr: unknown) {
        const errMsg =
          metaErr instanceof Error
            ? metaErr.message
            : 'Excepción al despachar evento CRM';
        console.error('[Meta CRM Dispatch Caught Exception]', errMsg);
        await supabase
          .from('evaluacion_leads')
          .update({
            meta_crm_last_error: errMsg,
          })
          .eq('id', id);

        updatedLead.meta_crm_last_error = errMsg;
      }
    }

    return NextResponse.json({ ok: true, lead: updatedLead });
  } catch (err) {
    console.error('Excepción actualizando lead:', err);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { authenticated, authorized } = await verifyAdminAccess();

  if (!authenticated) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }

  if (!authorized) {
    return NextResponse.json(
      { error: 'Acceso denegado: rol de administrador requerido' },
      { status: 403 }
    );
  }

  try {
    const { id } = await req.json();

    if (!id || typeof id !== 'string') {
      return NextResponse.json(
        { error: 'El ID del lead es obligatorio.' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();
    const { error } = await supabase
      .from('evaluacion_leads')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error eliminando lead:', error);
      return NextResponse.json(
        { error: 'Error al eliminar el lead en la base de datos.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Excepción eliminando lead:', err);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
