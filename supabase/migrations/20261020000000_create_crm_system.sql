-- Migration: 20261020000000_create_crm_system.sql
-- Description: Core CRM schema for Nordsee Capital (Leads + Meta CAPI Synchronization)

-- 1. Create evaluacion_leads (primary table)
CREATE TABLE IF NOT EXISTS public.evaluacion_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    nombre TEXT NOT NULL,
    organizacion TEXT NULL,
    email TEXT NOT NULL,
    telefono TEXT NOT NULL,
    ciudad TEXT NULL,
    servicio TEXT NULL,
    modalidad TEXT NULL,
    rango_patrimonio TEXT NULL,
    mensaje TEXT NULL,
    capital_disponible TEXT DEFAULT 'No especificado' NOT NULL,
    capital_para_invertir TEXT NULL,
    objetivo_inversion TEXT DEFAULT 'No especificado' NOT NULL,
    horizonte TEXT DEFAULT 'No especificado' NOT NULL,
    experiencia_inversion TEXT DEFAULT 'No especificado' NOT NULL,
    tipo_experiencia TEXT NULL,
    instrumentos_inversion TEXT NULL,
    plazo_inversion TEXT DEFAULT 'No especificado' NOT NULL,
    plazo_decision TEXT NULL,
    project_interest TEXT NULL,
    autorizacion BOOLEAN DEFAULT true NOT NULL,
    estado TEXT DEFAULT 'new' NOT NULL,
    lead_status TEXT DEFAULT 'NEW' NOT NULL,
    lead_score INTEGER DEFAULT 0 NOT NULL,
    lead_priority TEXT DEFAULT 'COLD' NOT NULL,
    scoring_reason TEXT NULL,
    notas TEXT NULL,
    utm_source TEXT NULL,
    utm_medium TEXT NULL,
    utm_campaign TEXT NULL,
    utm_content TEXT NULL,
    utm_term TEXT NULL,
    fbclid TEXT NULL,
    fbp TEXT NULL,
    fbc TEXT NULL,
    landing_page TEXT NULL,
    referrer TEXT NULL,
    source TEXT NULL,
    medium TEXT NULL,
    campaign TEXT NULL,
    content TEXT NULL,
    term TEXT NULL,
    meta_lead_id TEXT NULL,
    meta_crm_last_status TEXT NULL,
    meta_crm_last_event_name TEXT NULL,
    meta_crm_last_sent_at TIMESTAMPTZ NULL,
    meta_crm_last_event_id TEXT NULL,
    meta_crm_last_error TEXT NULL,
    qualified_lead_sent_at TIMESTAMPTZ NULL,
    qualified_lead_event_id TEXT NULL
);

-- Performance and query indexes
CREATE INDEX IF NOT EXISTS idx_evaluacion_leads_created_at ON public.evaluacion_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_evaluacion_leads_email ON public.evaluacion_leads (email);
CREATE INDEX IF NOT EXISTS idx_evaluacion_leads_estado ON public.evaluacion_leads (estado);
CREATE INDEX IF NOT EXISTS idx_evaluacion_leads_priority ON public.evaluacion_leads (lead_priority);
CREATE INDEX IF NOT EXISTS idx_evaluacion_leads_lead_status ON public.evaluacion_leads (lead_status);
CREATE INDEX IF NOT EXISTS idx_evaluacion_leads_score ON public.evaluacion_leads (lead_score DESC);
CREATE INDEX IF NOT EXISTS idx_evaluacion_leads_utm_campaign ON public.evaluacion_leads (utm_campaign);

-- Enable RLS
ALTER TABLE public.evaluacion_leads ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DROP POLICY IF EXISTS "Service role full access on evaluacion_leads" ON public.evaluacion_leads;
CREATE POLICY "Service role full access on evaluacion_leads"
    ON public.evaluacion_leads
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can read evaluacion_leads" ON public.evaluacion_leads;
CREATE POLICY "Authenticated users can read evaluacion_leads"
    ON public.evaluacion_leads
    FOR SELECT
    TO authenticated
    USING (true);

DROP POLICY IF EXISTS "Authenticated users can update evaluacion_leads" ON public.evaluacion_leads;
CREATE POLICY "Authenticated users can update evaluacion_leads"
    ON public.evaluacion_leads
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 2. Create crm_meta_events table for CAPI historical audit
CREATE TABLE IF NOT EXISTS public.crm_meta_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID NOT NULL REFERENCES public.evaluacion_leads(id) ON DELETE CASCADE,
    event_name TEXT NOT NULL,
    previous_status TEXT NULL,
    new_status TEXT NOT NULL,
    event_id TEXT NOT NULL UNIQUE,
    meta_lead_id TEXT NULL,
    event_time TIMESTAMPTZ NOT NULL,
    sent_at TIMESTAMPTZ NULL,
    success BOOLEAN NOT NULL DEFAULT false,
    http_status INTEGER NULL,
    events_received INTEGER NULL,
    fbtrace_id TEXT NULL,
    error_message TEXT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_crm_meta_events_lead_id ON public.crm_meta_events (lead_id);
CREATE INDEX IF NOT EXISTS idx_crm_meta_events_event_name ON public.crm_meta_events (event_name);
CREATE INDEX IF NOT EXISTS idx_crm_meta_events_event_id ON public.crm_meta_events (event_id);
CREATE INDEX IF NOT EXISTS idx_crm_meta_events_created_at ON public.crm_meta_events (created_at DESC);

ALTER TABLE public.crm_meta_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role full access on crm_meta_events" ON public.crm_meta_events;
CREATE POLICY "Service role full access on crm_meta_events"
    ON public.crm_meta_events
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can read crm_meta_events" ON public.crm_meta_events;
CREATE POLICY "Authenticated users can read crm_meta_events"
    ON public.crm_meta_events
    FOR SELECT
    TO authenticated
    USING (true);

-- 3. Convenience View with Security Invoker (PostgreSQL 15+)
CREATE OR REPLACE VIEW public.leads WITH (security_invoker = true) AS
SELECT * FROM public.evaluacion_leads;
