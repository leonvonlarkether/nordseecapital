import crypto from 'crypto';
import {
  hashSha256,
  hashPhone,
  formatFbc,
  getMetaTestEventCode,
} from './metaCapi';
import type { LeadRecord } from '@/types/crm';

const API_VERSION = 'v26.0';

/**
 * Standard mapping of CRM stages to Meta Conversions API events
 */
export const CRM_STATUS_TO_META_EVENT: Record<string, string> = {
  QUALIFIED: 'QualifiedLead',
  MEETING: 'Meeting',
  OPPORTUNITY: 'Opportunity',
  INVESTED: 'Invested',
  DISQUALIFIED: 'Disqualified',
};

export interface SendCrmEventResult {
  ok: boolean;
  eventName?: string;
  eventId?: string;
  sentAt?: string;
  skipped?: boolean;
  skipReason?: string;
  error?: string;
  fbtraceId?: string;
  httpStatus?: number;
  eventsReceived?: number;
}

export function generateCrmEventId(
  leadId: string,
  status: string,
  timestampSec: number
): string {
  const raw = `crm_${leadId}_${status}_${timestampSec}`;
  return crypto.createHash('sha256').update(raw).digest('hex').substring(0, 32);
}

/**
 * Dispatches a CRM stage update event to Meta Conversions API (server-side only)
 */
export async function sendMetaCrmStageEvent(
  lead: Partial<LeadRecord> & { id: string },
  newStatus: string,
  eventTimeSec?: number
): Promise<SendCrmEventResult> {
  const upperStatus = newStatus.trim().toUpperCase();
  const eventName = CRM_STATUS_TO_META_EVENT[upperStatus];

  if (!eventName) {
    return {
      ok: true,
      skipped: true,
      skipReason: `Status "${newStatus}" is not mapped to a Meta CAPI event.`,
    };
  }

  const datasetId = process.env.META_DATASET_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!datasetId || !accessToken) {
    const errorMsg =
      'META_DATASET_ID or META_CAPI_ACCESS_TOKEN not set in environment.';
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[Meta CRM CAPI] ${errorMsg}`);
    }
    return { ok: false, error: errorMsg, eventName };
  }

  const changeTimeSec = eventTimeSec || Math.floor(Date.now() / 1000);
  const eventId = generateCrmEventId(lead.id, upperStatus, changeTimeSec);

  try {
    const userData: Record<string, any> = {};

    if (lead.email) {
      const hashedEm = hashSha256(lead.email);
      if (hashedEm) userData.em = [hashedEm];
    }

    if (lead.telefono) {
      const hashedPh = hashPhone(lead.telefono);
      if (hashedPh) userData.ph = [hashedPh];
    }

    if (lead.nombre) {
      const parts = lead.nombre.trim().split(/\s+/);
      const fn = hashSha256(parts[0]);
      const ln = hashSha256(parts.slice(1).join(' '));
      if (fn) userData.fn = [fn];
      if (ln) userData.ln = [ln];
    }

    if (lead.ciudad) {
      const ct = hashSha256(lead.ciudad);
      if (ct) userData.ct = [ct];
    }

    const resolvedFbc = lead.fbc || formatFbc(lead.fbclid, lead.created_at);
    if (resolvedFbc) {
      userData.fbc = resolvedFbc;
    }

    if (lead.fbp && String(lead.fbp).trim()) {
      userData.fbp = lead.fbp.trim();
    }

    if (lead.meta_lead_id && String(lead.meta_lead_id).trim()) {
      userData.lead_id = lead.meta_lead_id.trim();
    }

    if (Object.keys(userData).length === 0) {
      return {
        ok: false,
        error: 'Lead has no valid matching identifiers (email, phone, fbc).',
        eventName,
        eventId,
        httpStatus: 400,
      };
    }

    const eventPayload: Record<string, any> = {
      event_name: eventName,
      event_time: changeTimeSec,
      event_id: eventId,
      action_source: 'system_generated',
      user_data: userData,
      custom_data: {
        event_source: 'crm',
        lead_event_source: 'Nordsee Capital CRM',
      },
    };

    const bodyPayload: Record<string, any> = {
      data: [eventPayload],
    };

    const testCode = getMetaTestEventCode('CRM_CAPI');
    if (testCode) {
      bodyPayload.test_event_code = testCode;
    }

    const endpoint = `https://graph.facebook.com/${API_VERSION}/${datasetId}/events?access_token=${accessToken}`;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyPayload),
    });

    const result = await res.json();

    if (!res.ok) {
      const errorMsg = result?.error?.message || `HTTP error ${res.status}`;
      console.error('[Meta CRM CAPI Error]', {
        leadId: lead.id,
        status: res.status,
        event: eventName,
        message: errorMsg,
      });
      return {
        ok: false,
        eventName,
        eventId,
        error: errorMsg,
        fbtraceId: result?.error?.fbtrace_id,
        httpStatus: res.status,
      };
    }

    return {
      ok: true,
      eventName,
      eventId,
      sentAt: new Date(changeTimeSec * 1000).toISOString(),
      fbtraceId: result?.fbtrace_id,
      httpStatus: res.status,
      eventsReceived: result?.events_received,
    };
  } catch (err: unknown) {
    const errorMsg =
      err instanceof Error ? err.message : 'Network exception dispatching Meta CRM event';
    return {
      ok: false,
      eventName,
      eventId,
      error: errorMsg,
      httpStatus: 0,
    };
  }
}
