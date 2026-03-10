import { useState, useCallback, useRef, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export type SaveStatus = 'saved' | 'saving' | 'unsaved' | 'error';

export function useAutoSave(
  clientId: string,
  sectionId: string,
  supabaseUrl: string,
  supabaseAnonKey: string,
) {
  const [status, setStatus] = useState<SaveStatus>('saved');
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const supabaseRef = useRef(createClient(supabaseUrl, supabaseAnonKey));

  const save = useCallback(async (data: Record<string, any>) => {
    setStatus('saving');
    try {
      const { error } = await supabaseRef.current.rpc('update_intake_section', {
        p_client_id: clientId,
        p_section: sectionId,
        p_data: data,
      });
      setStatus(error ? 'error' : 'saved');
    } catch {
      setStatus('error');
    }
  }, [clientId, sectionId]);

  const debouncedSave = useCallback((data: Record<string, any>) => {
    setStatus('unsaved');
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => save(data), 1500);
  }, [save]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { status, debouncedSave, saveNow: save };
}
