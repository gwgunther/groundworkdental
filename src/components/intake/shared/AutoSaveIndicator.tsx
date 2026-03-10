import type { SaveStatus } from './useAutoSave';

interface Props {
  status: SaveStatus;
}

export default function AutoSaveIndicator({ status }: Props) {
  const config: Record<SaveStatus, { text: string; color: string }> = {
    saved: { text: 'Saved', color: 'text-brand-warm' },
    saving: { text: 'Saving...', color: 'text-mid-gray' },
    unsaved: { text: 'Unsaved changes', color: 'text-amber-600' },
    error: { text: 'Save failed', color: 'text-red-600' },
  };

  const { text, color } = config[status];

  return (
    <span className={`font-sans text-xs ${color} transition-colors`}>
      {status === 'saved' && (
        <svg className="w-3 h-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
      {text}
    </span>
  );
}
