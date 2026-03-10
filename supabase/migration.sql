-- Groundwork Dental — Supabase Schema Migration
-- Run this in the Supabase SQL Editor after creating your project.

-- ============================================
-- Table: clients
-- ============================================
CREATE TABLE clients (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id    UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  practice_name   TEXT,
  contact_email   TEXT NOT NULL,
  contact_phone   TEXT,
  intake_data     JSONB NOT NULL DEFAULT '{}'::jsonb,
  sections_complete JSONB NOT NULL DEFAULT '{}'::jsonb,
  intake_status   TEXT NOT NULL DEFAULT 'not_started'
    CHECK (intake_status IN ('not_started','in_progress','submitted','reviewed')),
  stripe_payment_id TEXT,
  payment_status  TEXT DEFAULT 'unpaid'
    CHECK (payment_status IN ('unpaid','paid','refunded')),
  paid_at         TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Clients can view own data"
  ON clients FOR SELECT
  USING (auth.uid() = auth_user_id);

CREATE POLICY "Clients can update own data"
  ON clients FOR UPDATE
  USING (auth.uid() = auth_user_id)
  WITH CHECK (auth.uid() = auth_user_id);

CREATE POLICY "Clients can insert own data"
  ON clients FOR INSERT
  WITH CHECK (auth.uid() = auth_user_id);

-- ============================================
-- Table: client_files
-- ============================================
CREATE TABLE client_files (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id   UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  section     TEXT NOT NULL,
  file_name   TEXT NOT NULL,
  file_path   TEXT NOT NULL,
  file_size   INTEGER,
  mime_type   TEXT,
  label       TEXT,
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE client_files ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Clients can view own files"
  ON client_files FOR SELECT
  USING (client_id IN (SELECT id FROM clients WHERE auth_user_id = auth.uid()));

CREATE POLICY "Clients can insert own files"
  ON client_files FOR INSERT
  WITH CHECK (client_id IN (SELECT id FROM clients WHERE auth_user_id = auth.uid()));

CREATE POLICY "Clients can delete own files"
  ON client_files FOR DELETE
  USING (client_id IN (SELECT id FROM clients WHERE auth_user_id = auth.uid()));

-- ============================================
-- Table: admin_notes
-- ============================================
CREATE TABLE admin_notes (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id  UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  note       TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- No RLS on admin_notes — only accessed via service role key

-- ============================================
-- RPC: update_intake_section
-- Atomic JSONB partial update for a single section
-- ============================================
CREATE OR REPLACE FUNCTION update_intake_section(
  p_client_id UUID,
  p_section TEXT,
  p_data JSONB
) RETURNS VOID AS $$
BEGIN
  UPDATE clients
  SET
    intake_data = jsonb_set(COALESCE(intake_data, '{}'::jsonb), ARRAY[p_section], p_data),
    sections_complete = jsonb_set(
      COALESCE(sections_complete, '{}'::jsonb),
      ARRAY[p_section],
      to_jsonb(p_data IS NOT NULL AND p_data != '{}'::jsonb AND p_data != 'null'::jsonb)
    ),
    intake_status = CASE
      WHEN intake_status = 'not_started' THEN 'in_progress'
      ELSE intake_status
    END,
    updated_at = now()
  WHERE id = p_client_id AND auth_user_id = auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- Storage: client-uploads bucket
-- ============================================
-- Create this manually in Supabase Dashboard:
-- 1. Go to Storage → New Bucket
-- 2. Name: client-uploads
-- 3. Public: OFF (private)
-- 4. Add these policies:

-- Policy: Clients can upload to their own folder
-- CREATE POLICY "Client upload own files"
--   ON storage.objects FOR INSERT
--   WITH CHECK (
--     bucket_id = 'client-uploads' AND
--     (storage.foldername(name))[1] = (
--       SELECT id::text FROM clients WHERE auth_user_id = auth.uid()
--     )
--   );

-- Policy: Clients can view their own files
-- CREATE POLICY "Client view own files"
--   ON storage.objects FOR SELECT
--   USING (
--     bucket_id = 'client-uploads' AND
--     (storage.foldername(name))[1] = (
--       SELECT id::text FROM clients WHERE auth_user_id = auth.uid()
--     )
--   );

-- Policy: Clients can delete their own files
-- CREATE POLICY "Client delete own files"
--   ON storage.objects FOR DELETE
--   USING (
--     bucket_id = 'client-uploads' AND
--     (storage.foldername(name))[1] = (
--       SELECT id::text FROM clients WHERE auth_user_id = auth.uid()
--     )
--   );

-- ============================================
-- Table: leads
-- Stores get-started form submissions.
-- Anonymous users can insert (no auth required).
-- Only service role can read/update/delete.
-- ============================================
CREATE TABLE leads (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  website_url   TEXT NOT NULL,
  email         TEXT NOT NULL,
  practice_name TEXT,
  status        TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending','building','draft_sent','converted','declined')),
  submitted_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  draft_url     TEXT,
  notes         TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (no auth required — public form)
CREATE POLICY "Anyone can submit a lead"
  ON leads FOR INSERT
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE for anon — only accessible via service role key
-- This means the admin dashboard uses the service role key to read leads.
