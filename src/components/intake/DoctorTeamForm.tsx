'use client';

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

interface Doctor {
  full_name: string;
  credentials: string;
  dental_school: string;
  graduation_year: string;
  specialty_residency: string;
  board_certifications: string;
  memberships: string;
  bio_notes: string;
}

function emptyDoctor(): Doctor {
  return {
    full_name: '',
    credentials: '',
    dental_school: '',
    graduation_year: '',
    specialty_residency: '',
    board_certifications: '',
    memberships: '',
    bio_notes: '',
  };
}

export default function DoctorTeamForm({
  clientId,
  sectionId,
  initialData,
  isComplete,
  supabaseUrl,
  supabaseAnonKey,
}: FormProps) {
  const { status, debouncedSave } = useAutoSave(clientId, sectionId, supabaseUrl, supabaseAnonKey);

  const [doctors, setDoctors] = useState<Doctor[]>(
    (initialData.doctors as Doctor[])?.length
      ? (initialData.doctors as Doctor[])
      : [emptyDoctor()],
  );
  const [staffNotes, setStaffNotes] = useState(initialData.staff_notes ?? '');

  function save(nextDoctors: Doctor[], nextStaffNotes: string) {
    debouncedSave({ doctors: nextDoctors, staff_notes: nextStaffNotes });
  }

  function updateDoctor(index: number, field: keyof Doctor, value: string) {
    const next = doctors.map((d, i) =>
      i === index ? { ...d, [field]: value } : d,
    );
    setDoctors(next);
    save(next, staffNotes);
  }

  function addDoctor() {
    const next = [...doctors, emptyDoctor()];
    setDoctors(next);
    save(next, staffNotes);
  }

  function removeDoctor(index: number) {
    const next = doctors.filter((_, i) => i !== index);
    setDoctors(next);
    save(next, staffNotes);
  }

  function updateStaffNotes(value: string) {
    setStaffNotes(value);
    save(doctors, value);
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-serif text-2xl text-charcoal">Doctors &amp; Team</h2>
          <p className="font-sans text-sm text-mid-gray mt-1">
            Tell us about the providers at your practice. We&rsquo;ll craft their bios.
          </p>
        </div>
        <AutoSaveIndicator status={status} />
      </div>

      {/* Doctor Cards */}
      {doctors.map((doc, i) => (
        <div key={i} className="card space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg text-charcoal">
              {doc.full_name || `Doctor ${i + 1}`}
            </h3>
            {doctors.length > 1 && (
              <button
                type="button"
                className="font-sans text-xs text-mid-gray hover:text-red-600 transition-colors"
                onClick={() => removeDoctor(i)}
              >
                Remove
              </button>
            )}
          </div>

          {/* Name + Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input w-full"
                placeholder="Dr. Jane Smith"
                value={doc.full_name}
                onChange={(e) => updateDoctor(i, 'full_name', e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Credentials</label>
              <input
                type="text"
                className="form-input w-full"
                placeholder="DDS, MS"
                value={doc.credentials}
                onChange={(e) => updateDoctor(i, 'credentials', e.target.value)}
              />
            </div>
          </div>

          {/* School + Year */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-2">
              <label className="form-label">Dental School</label>
              <input
                type="text"
                className="form-input w-full"
                value={doc.dental_school}
                onChange={(e) => updateDoctor(i, 'dental_school', e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Graduation Year</label>
              <input
                type="text"
                className="form-input w-full"
                placeholder="2015"
                value={doc.graduation_year}
                onChange={(e) => updateDoctor(i, 'graduation_year', e.target.value)}
              />
            </div>
          </div>

          {/* Specialty Residency */}
          <div>
            <label className="form-label">Specialty / Residency</label>
            <input
              type="text"
              className="form-input w-full"
              placeholder="e.g. Prosthodontics residency at NYU"
              value={doc.specialty_residency}
              onChange={(e) => updateDoctor(i, 'specialty_residency', e.target.value)}
            />
          </div>

          {/* Certifications + Memberships */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="form-label">Board Certifications</label>
              <input
                type="text"
                className="form-input w-full"
                placeholder="Comma-separated"
                value={doc.board_certifications}
                onChange={(e) => updateDoctor(i, 'board_certifications', e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Memberships</label>
              <input
                type="text"
                className="form-input w-full"
                placeholder="ADA, AGD, etc."
                value={doc.memberships}
                onChange={(e) => updateDoctor(i, 'memberships', e.target.value)}
              />
            </div>
          </div>

          {/* Bio Notes */}
          <div>
            <label className="form-label">Bio Notes</label>
            <p className="font-sans text-xs text-mid-gray mb-2">
              Rough notes, fun facts, personal interests &mdash; we&rsquo;ll write the polished bio.
            </p>
            <textarea
              className="form-textarea w-full"
              rows={4}
              value={doc.bio_notes}
              onChange={(e) => updateDoctor(i, 'bio_notes', e.target.value)}
            />
          </div>
        </div>
      ))}

      {/* Add Doctor */}
      <button type="button" className="btn-primary" onClick={addDoctor}>
        + Add Doctor
      </button>

      {/* Staff Notes */}
      <div>
        <label className="form-label">General Staff Notes</label>
        <p className="font-sans text-xs text-mid-gray mb-2">
          Anything about your team &mdash; hygienists, front desk, office manager, etc.
        </p>
        <textarea
          className="form-textarea w-full"
          rows={4}
          value={staffNotes}
          onChange={(e) => updateStaffNotes(e.target.value)}
        />
      </div>
    </div>
  );
}
