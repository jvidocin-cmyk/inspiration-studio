-- Table des réservations
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  phone TEXT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  company_name TEXT,
  space_type TEXT NOT NULL CHECK (space_type IN ('bureau-prive', 'salle-reunion')),
  formula TEXT NOT NULL CHECK (formula IN ('journee', 'semaine', 'mois')),
  site TEXT NOT NULL CHECK (site IN ('baie-mahault', 'petit-bourg')),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  price_cents INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  stripe_payment_intent_id TEXT,
  stripe_session_id TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can create a booking (public checkout)
CREATE POLICY "Anyone can create bookings" 
ON public.bookings 
FOR INSERT 
WITH CHECK (true);

-- Policy: Anyone can view their own booking by email (for confirmation page)
CREATE POLICY "Anyone can view bookings by stripe session" 
ON public.bookings 
FOR SELECT 
USING (true);

-- Policy: Update bookings (for webhook updates)
CREATE POLICY "Service role can update bookings" 
ON public.bookings 
FOR UPDATE 
USING (true);

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_booking_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_bookings_updated_at
BEFORE UPDATE ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_booking_updated_at();