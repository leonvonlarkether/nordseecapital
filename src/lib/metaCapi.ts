import crypto from 'crypto';

/**
 * Meta Conversions API (CAPI) — Direct Native Integration
 * Dataset ID: process.env.META_DATASET_ID
 * API Version: v26.0
 */

const API_VERSION = 'v26.0';

export function hashSha256(val: string | null | undefined): string | null {
  if (!val) return null;
  const cleaned = val.trim().toLowerCase();
  if (!cleaned) return null;
  return crypto.createHash('sha256').update(cleaned).digest('hex');
}

export function hashPhone(phone: string | null | undefined): string | null {
  if (!phone) return null;
  let digits = phone.replace(/[^\d]/g, '');
  if (digits.length === 9 && digits.startsWith('9')) {
    digits = `56${digits}`;
  }
  if (!digits) return null;
  return crypto.createHash('sha256').update(digits).digest('hex');
}

export function formatFbc(
  fbclid: string | null | undefined,
  createdAt?: string | Date
): string | null {
  if (!fbclid) return null;
  if (fbclid.startsWith('fb.1.')) return fbclid;
  const timeSec = createdAt
    ? Math.floor(new Date(createdAt).getTime() / 1000)
    : Math.floor(Date.now() / 1000);
  return `fb.1.${timeSec}.${fbclid.trim()}`;
}

export type MetaCapiChannel = 'WEB_CAPI' | 'CRM_CAPI';

export function getMetaTestEventCode(channel: MetaCapiChannel): string | undefined {
  const isTestMode = process.env.META_TEST_MODE === 'true';
  if (!isTestMode) return undefined;

  const envVar =
    channel === 'WEB_CAPI'
      ? 'META_TEST_EVENT_CODE_WEB'
      : 'META_TEST_EVENT_CODE_CRM';
  const code = process.env[envVar]?.trim();

  if (!code && process.env.NODE_ENV !== 'production') {
    console.warn(
      `[Meta ${channel}] META_TEST_MODE=true pero ${envVar} no está configurado.`
    );
  }

  return code;
}

export interface SendMetaLeadParams {
  eventId: string;
  lead: {
    nombre: string;
    email: string;
    telefono: string;
    ciudad?: string | null;
    fbp?: string | null;
    fbc?: string | null;
    fbclid?: string | null;
  };
  clientIp?: string;
  userAgent?: string;
  eventSourceUrl?: string;
}

/**
 * Sends a Lead event to Meta Conversions API from server
 */
export async function sendMetaLeadEvent(params: SendMetaLeadParams) {
  const datasetId = process.env.META_DATASET_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!datasetId || !accessToken) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        '[Meta CAPI] Skipping sendMetaLeadEvent: META_DATASET_ID or META_CAPI_ACCESS_TOKEN not set.'
      );
    }
    return { ok: false, skipped: true, reason: 'Missing credentials' };
  }

  const { eventId, lead, clientIp, userAgent, eventSourceUrl } = params;

  const userData: Record<string, any> = {};

  if (lead.email) {
    const hashed = hashSha256(lead.email);
    if (hashed) userData.em = [hashed];
  }

  if (lead.telefono) {
    const hashed = hashPhone(lead.telefono);
    if (hashed) userData.ph = [hashed];
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

  const resolvedFbc = lead.fbc || formatFbc(lead.fbclid);
  if (resolvedFbc) userData.fbc = resolvedFbc;
  if (lead.fbp) userData.fbp = lead.fbp.trim();
  if (clientIp) userData.client_ip_address = clientIp;
  if (userAgent) userData.client_user_agent = userAgent;

  const eventPayload: Record<string, any> = {
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: 'website',
    event_source_url: eventSourceUrl || 'https://nordseecapital.com/contacto',
    user_data: userData,
    custom_data: {
      content_name: 'Contacto Nordsee Capital',
    },
  };

  const bodyPayload: Record<string, any> = {
    data: [eventPayload],
  };

  const testCode = getMetaTestEventCode('WEB_CAPI');
  if (testCode) {
    bodyPayload.test_event_code = testCode;
  }

  try {
    const endpoint = `https://graph.facebook.com/${API_VERSION}/${datasetId}/events?access_token=${accessToken}`;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyPayload),
    });

    const result = await res.json();
    return {
      ok: res.ok,
      httpStatus: res.status,
      result,
    };
  } catch (err: any) {
    console.error('[Meta CAPI Web Lead Error]', err);
    return { ok: false, error: err.message };
  }
}
