export type LeadPriority = 'HOT' | 'WARM' | 'COLD';

export type LeadStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'MEETING'
  | 'OPPORTUNITY'
  | 'INVESTED'
  | 'DISQUALIFIED';

export interface LeadAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  fbp?: string;
  fbc?: string;
  landing_page?: string;
  referrer?: string;
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  project_interest?: string;
}

export interface LeadRecord {
  id: string;
  created_at: string;
  nombre: string;
  organizacion?: string | null;
  email: string;
  telefono: string;
  ciudad?: string | null;
  modalidad?: string | null;
  mensaje?: string | null;
  servicio?: string | null;
  autorizacion: boolean;
  estado: string;
  lead_status?: string;
  lead_score?: number;
  lead_priority?: LeadPriority;
  scoring_reason?: string | null;
  notas?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  fbclid?: string | null;
  fbp?: string | null;
  fbc?: string | null;
  landing_page?: string | null;
  referrer?: string | null;
  source?: string | null;
  medium?: string | null;
  campaign?: string | null;
  content?: string | null;
  term?: string | null;
  meta_lead_id?: string | null;
  meta_crm_last_status?: string | null;
  meta_crm_last_event_name?: string | null;
  meta_crm_last_sent_at?: string | null;
  meta_crm_last_event_id?: string | null;
  meta_crm_last_error?: string | null;
  qualified_lead_sent_at?: string | null;
  qualified_lead_event_id?: string | null;
}

export interface ContactLeadSubmission {
  nombre: string;
  organizacion?: string;
  email: string;
  telefono?: string;
  modalidad?: string;
  mensaje: string;
  honeypot?: string;
  attribution?: LeadAttribution;
  eventId?: string;
}

export interface LeadScoringResult {
  score: number;
  priority: LeadPriority;
  reason: string;
}
