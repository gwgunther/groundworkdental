import { createClient } from '@supabase/supabase-js';

/**
 * Browser-side Supabase client for React components.
 * Uses the anon key — all operations go through RLS.
 */
let client: ReturnType<typeof createClient> | null = null;

export function getSupabaseClient() {
  if (client) return client;

  client = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        flowType: 'pkce',
        persistSession: true,
        detectSessionInUrl: true,
      },
    }
  );

  return client;
}
