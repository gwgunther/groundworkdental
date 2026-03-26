import { createClient } from '@supabase/supabase-js';
import type { AstroCookies } from 'astro';

/**
 * Create a Supabase client for server-side use (SSR pages, middleware).
 * Uses the anon key with the user's access token from cookies.
 */
export function createServerClient(cookies: AstroCookies) {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      flowType: 'pkce',
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    global: {
      headers: {
        Authorization: cookies.get('sb-access-token')?.value
          ? `Bearer ${cookies.get('sb-access-token')?.value}`
          : '',
      },
    },
  });
}

/**
 * Create a Supabase admin client (service role key).
 * Bypasses RLS — use only for admin operations.
 */
export function createAdminClient() {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const serviceRoleKey = import.meta.env.SUPABASE_SERVICE_KEY;

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
