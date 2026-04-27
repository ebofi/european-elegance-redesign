-- Create leads table
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  inquiry_type TEXT NOT NULL DEFAULT 'general',
  subject TEXT,
  message TEXT NOT NULL,
  destination_country TEXT,
  field_of_study TEXT,
  delivered_to TEXT NOT NULL DEFAULT 'stalinstephen@candone.net',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (submit a lead)
CREATE POLICY "Anyone can submit leads"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No public read/update/delete (owner views via backend dashboard)
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_inquiry_type ON public.leads(inquiry_type);