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

export default function PhotosForm({
  clientId,
  sectionId,
  initialData,
  isComplete,
  supabaseUrl,
  supabaseAnonKey,
}: FormProps) {
  const [formData, setFormData] = useState({
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
        <h2 className="font-serif text-2xl text-charcoal">Photos &amp; Images</h2>
        <AutoSaveIndicator status={status} />
      </div>

      {/* Office photos */}
      <div>
        <label className="form-label">Office Photos</label>
        <p className="font-sans text-xs text-mid-gray mb-3">
          Reception area, treatment rooms, exterior, waiting room, etc.
        </p>
        <FileUploader
          clientId={clientId}
          section="photos/office"
          supabaseUrl={supabaseUrl}
          supabaseAnonKey={supabaseAnonKey}
          existingFiles={initialData.office_files}
        />
      </div>

      {/* Team photos */}
      <div>
        <label className="form-label">Team Photos</label>
        <p className="font-sans text-xs text-mid-gray mb-3">
          Headshots, group photos, candid shots of your team at work.
        </p>
        <FileUploader
          clientId={clientId}
          section="photos/team"
          supabaseUrl={supabaseUrl}
          supabaseAnonKey={supabaseAnonKey}
          existingFiles={initialData.team_files}
        />
      </div>

      {/* Before/after cases */}
      <div>
        <label className="form-label">Before &amp; After Cases</label>
        <p className="font-sans text-xs text-mid-gray mb-3">
          Clinical before/after photos you have permission to share.
        </p>
        <FileUploader
          clientId={clientId}
          section="photos/cases"
          supabaseUrl={supabaseUrl}
          supabaseAnonKey={supabaseAnonKey}
          existingFiles={initialData.cases_files}
        />
      </div>

      {/* Notes */}
      <div>
        <label className="form-label">Photo Notes</label>
        <textarea
          className="form-textarea w-full"
          placeholder="Any notes about the photos, who's in them, etc."
          value={formData.notes}
          onChange={(e) => update('notes', e.target.value)}
        />
      </div>
    </div>
  );
}
