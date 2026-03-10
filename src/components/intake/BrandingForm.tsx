import { useState } from 'react';
import { useAutoSave } from './shared/useAutoSave';
import AutoSaveIndicator from './shared/AutoSaveIndicator';
import FileUploader from './shared/FileUploader';

interface FormProps {
  clientId: string;
  sectionId: string;
  initialData: Record<string, any>;
  isComplete: boolean;
  supabaseUrl: string;
  supabaseAnonKey: string;
}

const STYLE_OPTIONS = [
  'Modern & Clean',
  'Warm & Welcoming',
  'Luxury & Premium',
  'Clinical & Professional',
] as const;

export default function BrandingForm({
  clientId,
  sectionId,
  initialData,
  isComplete,
  supabaseUrl,
  supabaseAnonKey,
}: FormProps) {
  const [formData, setFormData] = useState({
    color_preferences: initialData.color_preferences ?? '',
    style_mood: initialData.style_mood ?? '',
    competitor_sites: initialData.competitor_sites ?? '',
    things_to_avoid: initialData.things_to_avoid ?? '',
    notes: initialData.notes ?? '',
  });

  const { status, debouncedSave } = useAutoSave(clientId, sectionId, supabaseUrl, supabaseAnonKey);

  function update(field: string, value: string) {
    const next = { ...formData, [field]: value };
    setFormData(next);
    debouncedSave(next);
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl text-charcoal">Branding & Style</h2>
        <AutoSaveIndicator status={status} />
      </div>

      {/* Logo upload */}
      <div>
        <label className="form-label">Logo</label>
        <FileUploader
          clientId={clientId}
          section="branding"
          supabaseUrl={supabaseUrl}
          supabaseAnonKey={supabaseAnonKey}
          existingFiles={initialData.logo_files}
          accept="image/*,.svg,.pdf"
        />
      </div>

      {/* Color preferences */}
      <div>
        <label className="form-label">Color Preferences</label>
        <textarea
          className="form-textarea w-full"
          placeholder="Describe colors you like or want to avoid"
          value={formData.color_preferences}
          onChange={(e) => update('color_preferences', e.target.value)}
        />
      </div>

      {/* Style / Mood */}
      <div>
        <label className="form-label">Style &amp; Mood</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
          {STYLE_OPTIONS.map((option) => (
            <label
              key={option}
              className={`card flex items-center gap-3 cursor-pointer transition-colors ${
                formData.style_mood === option
                  ? 'border-brand-warm bg-brand-sage-light/30'
                  : 'hover:border-neutral-300'
              }`}
            >
              <input
                type="radio"
                name="style_mood"
                value={option}
                checked={formData.style_mood === option}
                onChange={(e) => update('style_mood', e.target.value)}
                className="accent-brand-warm"
              />
              <span className="font-sans text-sm text-charcoal">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Competitor sites */}
      <div>
        <label className="form-label">Dental Sites You Like</label>
        <textarea
          className="form-textarea w-full"
          placeholder="Paste URLs of dental sites you like, one per line"
          value={formData.competitor_sites}
          onChange={(e) => update('competitor_sites', e.target.value)}
        />
      </div>

      {/* Things to avoid */}
      <div>
        <label className="form-label">Things to Avoid</label>
        <textarea
          className="form-textarea w-full"
          placeholder="Anything you definitely don't want on your site"
          value={formData.things_to_avoid}
          onChange={(e) => update('things_to_avoid', e.target.value)}
        />
      </div>

      {/* Notes */}
      <div>
        <label className="form-label">Additional Notes</label>
        <textarea
          className="form-textarea w-full"
          placeholder="Any other branding thoughts or references"
          value={formData.notes}
          onChange={(e) => update('notes', e.target.value)}
        />
      </div>
    </div>
  );
}
