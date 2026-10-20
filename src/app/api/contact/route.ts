import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import { sendMetaLeadEvent } from "@/lib/metaCapi";
import type { LeadAttribution } from "@/types/crm";

interface ContactRequestBody {
  nombre?: string;
  organizacion?: string;
  email?: string;
  telefono?: string;
  modalidad?: string;
  mensaje?: string;
  honeypot?: string;
  eventId?: string;
  attribution?: LeadAttribution;
}

function getClientIp(req: NextRequest): string {
  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  const xRealIp = req.headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();

  const xVercelIp = req.headers.get("x-vercel-forwarded-for");
  if (xVercelIp) return xVercelIp.split(",")[0].trim();

  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded.split(",").map((s) => s.trim()).filter(Boolean);
    if (parts.length > 0) return parts[parts.length - 1];
  }

  return "127.0.0.1";
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequestBody = await request.json().catch(() => ({}));

    // 1. Antispam silencioso (honeypot)
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: "OK" });
    }

    // 2. Validación obligatoria de campos
    if (!body.nombre?.trim() || !body.email?.trim() || !body.mensaje?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Nombre, correo y mensaje son obligatorios.",
        },
        { status: 400 }
      );
    }

    // 3. Normalización y validación de correo
    const email = body.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "El formato de correo electrónico no es válido.",
        },
        { status: 400 }
      );
    }

    // 4. Límite de longitud de mensaje
    if (body.mensaje.length > 3000) {
      return NextResponse.json(
        {
          success: false,
          message: "El mensaje excede la longitud máxima permitida.",
        },
        { status: 400 }
      );
    }

    const cleanNombre = body.nombre.trim();
    const cleanTelefono = body.telefono?.trim() || "";
    const cleanOrganizacion = body.organizacion?.trim() || null;
    const cleanModalidad = body.modalidad?.trim() || "santiago";
    const cleanMensaje = body.mensaje.trim();

    // 5. Atribución de marketing (UTMs y cookies Meta)
    const attr = body.attribution || {};
    const utm_source = attr.utm_source || null;
    const utm_medium = attr.utm_medium || null;
    const utm_campaign = attr.utm_campaign || null;
    const utm_content = attr.utm_content || null;
    const utm_term = attr.utm_term || null;
    const fbclid = attr.fbclid || null;
    const fbp = attr.fbp || null;
    const fbc = attr.fbc || null;
    const landing_page = attr.landing_page || "/contacto";
    const referrer = attr.referrer || null;
    const source = attr.source || utm_source || "direct";
    const medium = attr.medium || utm_medium || "none";
    const campaign = attr.campaign || utm_campaign || "none";
    const content = attr.content || utm_content || null;
    const term = attr.term || utm_term || null;

    // 6. Persistencia directa en Supabase (Fuente de Verdad del CRM)
    const supabase = getSupabaseServerClient();
    const { data: insertedLead, error: dbError } = await supabase
      .from("evaluacion_leads")
      .insert({
        nombre: cleanNombre,
        organizacion: cleanOrganizacion,
        email,
        telefono: cleanTelefono,
        modalidad: cleanModalidad,
        mensaje: cleanMensaje,
        capital_disponible: "Formulario Contacto",
        objetivo_inversion: "Consulta General",
        horizonte: "No especificado",
        experiencia_inversion: "No especificado",
        plazo_inversion: "No especificado",
        autorizacion: true,
        estado: "new",
        lead_status: "NEW",
        lead_score: 0,
        lead_priority: "HOT",
        scoring_reason: "Ingreso directo vía Formulario de Contacto",
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        fbclid,
        fbp,
        fbc,
        landing_page,
        referrer,
        source,
        medium,
        campaign,
        content,
        term,
      })
      .select()
      .single();

    if (dbError) {
      console.error("[Supabase Contact Insert Error]", dbError);
      return NextResponse.json(
        {
          success: false,
          message:
            "No fue posible registrar su solicitud. Por favor intente más tarde o contáctenos por correo.",
        },
        { status: 500 }
      );
    }

    // 7. Disparo no bloqueante de Meta Conversions API (Web Lead Event)
    const eventId =
      body.eventId ||
      `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    const clientIp = getClientIp(request);
    const userAgent = request.headers.get("user-agent") || undefined;

    sendMetaLeadEvent({
      eventId,
      lead: {
        nombre: cleanNombre,
        email,
        telefono: cleanTelefono,
        fbp,
        fbc,
        fbclid,
      },
      clientIp,
      userAgent,
      eventSourceUrl: "https://nordseecapital.com/contacto",
    }).catch((capiErr) => {
      console.error("[Meta CAPI Lead Dispatch Error]", capiErr);
    });

    return NextResponse.json({
      success: true,
      message: "Consulta recibida correctamente.",
      leadId: insertedLead?.id,
    });
  } catch (err: unknown) {
    console.error("[Contact API Exception]", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "Error interno al procesar su solicitud. Por favor intente más tarde o contáctenos por correo.",
      },
      { status: 500 }
    );
  }
}
