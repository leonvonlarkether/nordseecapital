import type { LeadAttribution } from '@/types/crm';

const STORAGE_KEY = 'nordsee_lead_attribution_v1';

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(
    new RegExp('(^|;\\s*)(' + name + ')=([^;]*)')
  );
  return match ? decodeURIComponent(match[3]) : undefined;
}

export interface AttributionDefaults {
  defaultSource?: string;
  defaultMedium?: string;
  defaultCampaign?: string;
  project?: string;
}

export function captureAndStoreAttribution(
  defaults?: AttributionDefaults
): LeadAttribution {
  if (typeof window === 'undefined') return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const existingRaw = sessionStorage.getItem(STORAGE_KEY);
    const existing: LeadAttribution = existingRaw ? JSON.parse(existingRaw) : {};

    const utm_source =
      urlParams.get('utm_source') || existing.utm_source || undefined;
    const utm_medium =
      urlParams.get('utm_medium') || existing.utm_medium || undefined;
    const utm_campaign =
      urlParams.get('utm_campaign') || existing.utm_campaign || undefined;
    const utm_content =
      urlParams.get('utm_content') || existing.utm_content || undefined;
    const utm_term =
      urlParams.get('utm_term') || existing.utm_term || undefined;
    const fbclid = urlParams.get('fbclid') || existing.fbclid || undefined;
    const project_interest =
      urlParams.get('proyecto') ||
      urlParams.get('servicio') ||
      defaults?.project ||
      existing.project_interest ||
      undefined;

    const cookieFbp = getCookie('_fbp');
    const fbp = cookieFbp || existing.fbp || undefined;

    const cookieFbc = getCookie('_fbc');
    let fbc = cookieFbc || existing.fbc || undefined;

    if (!fbc && fbclid) {
      const creationTimeSec = Math.floor(Date.now() / 1000);
      fbc = `fb.1.${creationTimeSec}.${fbclid.trim()}`;
    }

    let source = utm_source;
    let medium = utm_medium;

    if (!source && defaults?.defaultSource) {
      source = defaults.defaultSource;
      medium = utm_medium || defaults.defaultMedium || 'social';
    } else if (!source && fbclid) {
      source = 'facebook';
      medium = 'paid_social';
    } else if (!source && document.referrer) {
      if (
        document.referrer.includes('facebook.com') ||
        document.referrer.includes('instagram.com')
      ) {
        source = 'meta';
        medium = 'social';
      } else if (document.referrer.includes('google.')) {
        source = 'google';
        medium = 'organic';
      } else {
        source = 'referral';
        medium = 'web';
      }
    }

    const campaign =
      utm_campaign || existing.campaign || defaults?.defaultCampaign || 'none';

    const attribution: LeadAttribution = {
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      fbclid,
      fbp,
      fbc,
      source: source || 'direct',
      medium: medium || 'none',
      campaign,
      content: utm_content || undefined,
      term: utm_term || undefined,
      project_interest,
      landing_page: existing.landing_page || window.location.pathname,
      referrer:
        existing.referrer ||
        (document.referrer ? document.referrer.slice(0, 255) : undefined),
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    return attribution;
  } catch (err) {
    console.error('Error capturando atribución:', err);
    return {};
  }
}

export function getStoredAttribution(): LeadAttribution {
  if (typeof window === 'undefined') return {};

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored: LeadAttribution = JSON.parse(raw);
      let updated = false;

      if (!stored.fbp) {
        const cookieFbp = getCookie('_fbp');
        if (cookieFbp) {
          stored.fbp = cookieFbp;
          updated = true;
        }
      }

      if (!stored.fbc) {
        const cookieFbc = getCookie('_fbc');
        if (cookieFbc) {
          stored.fbc = cookieFbc;
          updated = true;
        } else if (stored.fbclid) {
          const creationTimeSec = Math.floor(Date.now() / 1000);
          stored.fbc = `fb.1.${creationTimeSec}.${stored.fbclid.trim()}`;
          updated = true;
        }
      }

      if (updated) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      }

      return stored;
    }
    return captureAndStoreAttribution();
  } catch {
    return {};
  }
}
