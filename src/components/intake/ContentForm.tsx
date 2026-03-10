import { useState } from 'react';
import { useAutoSave } from './shared/useAutoSave';
import AutoSaveIndicator from './shared/AutoSaveIndicator';

interface FormProps {
  clientId: string;
  sectionId: string;
  initialData: Record<string, any>;
  isComplete: boolean;
  supabaseUrl: string;
  supabaseAnonKey: string;
}

export default function ContentForm({
  clientId,
  sectionId,
  initialData,
  isComplete,
  supabaseUrl,
  supabaseAnonKey,
}: FormProps) {
  const [formData, setFormData] = useState({
    existing_copy_to_keep: initialData.existing_copy_to_keep ?? '',
    unique_selling_points: initialData.unique_selling_points ?? '',
    patient_testimonials: initialData.patient_testimonials ?? '',
    awards_press: initialData.awards_press ?? '',
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
        <h2 className="font-serif text-2xl text-charcoal">Content &amp; Copy</h2>
        <AutoSaveIndicator status={status} />
      </div>

      {/* Existing copy */}
      <div>
        <label className="form-label">Existing Copy to Keep</label>
        <textarea
          className="form-textarea w-full"
          placeholder="Any text from your current website you want to keep"
          value={formData.existing_copy_to_keep}
          onChange={(e) => update('existing_copy_to_keep', e.target.value)}
        />
      </div>

      {/* Unique selling points */}
      <div>
        <label className="form-label">Unique Selling Points</label>
        <textarea
          className="form-textarea w-full"
          placeholder="What makes your practice different? One point per line"
          value={formData.unique_selling_points}
          onChange={(e) => update('unique_selling_points', e.target.value)}
        />
      </div>

      {/* Patient testimonials */}
      <div>
        <label className="form-label">Patient Testimonials</label>
        <textarea
          className="form-textarea w-full"
          placeholder="Paste any patient testimonials or reviews you'd like featured"
          value={formData.patient_testimonials}
          onChange={(e) => update('patient_testimonials', e.target.value)}
        />
      </div>

      {/* Awards & press */}
      <div>
        <label className="form-label">Awards &amp; Press</label>
        <textarea
          className="form-textarea w-full"
          placeholder="Awards, press mentions, affiliations worth highlighting"
          value={formData.awards_press}
          onChange={(e) => update('awards_press', e.target.value)}
        />
      </div>

      {/* Notes */}
      <div>
        <label className="form-label">Anything Else</label>
        <textarea
          className="form-textarea w-full"
          placeholder="Anything else we should know"
          value={formData.notes}
          onChange={(e) => update('notes', e.target.value)}
        />
      </div>
    </div>
  );
}
