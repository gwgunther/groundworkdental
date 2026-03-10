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

const SERVICE_OPTIONS = [
  'General Dentistry',
  'Dental Implants',
  'Veneers',
  'Invisalign/Clear Aligners',
  'Crowns & Bridges',
  'Dentures',
  'Root Canals',
  'Teeth Whitening',
  'Dental Bonding',
  'Gum Treatment',
  'Wisdom Teeth',
  'Pediatric Dentistry',
  'Emergency Dentistry',
  'Sedation Dentistry',
  'Full Mouth Reconstruction',
  'All-on-4/All-on-X',
];

export default function ServicesForm({
  clientId,
  sectionId,
  initialData,
  isComplete,
  supabaseUrl,
  supabaseAnonKey,
}: FormProps) {
  const { status, debouncedSave } = useAutoSave(clientId, sectionId, supabaseUrl, supabaseAnonKey);

  const [formData, setFormData] = useState({
    offered: (initialData.offered as string[]) ?? [],
    specialties: initialData.specialties ?? '',
    notes: initialData.notes ?? '',
  });

  function update(field: string, value: any) {
    const next = { ...formData, [field]: value };
    setFormData(next);
    debouncedSave(next);
  }

  function toggleService(service: string) {
    const current = formData.offered;
    const next = current.includes(service)
      ? current.filter((s: string) => s !== service)
      : [...current, service];
    update('offered', next);
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-serif text-2xl text-charcoal">Services Offered</h2>
          <p className="font-sans text-sm text-mid-gray mt-1">
            Select everything you offer. We&rsquo;ll build dedicated pages for each.
          </p>
        </div>
        <AutoSaveIndicator status={status} />
      </div>

      {/* Service Checkboxes */}
      <div>
        <label className="form-label">Services</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1">
          {SERVICE_OPTIONS.map((service) => (
            <label
              key={service}
              className="flex items-center gap-3 font-sans text-sm text-charcoal cursor-pointer select-none group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border-light accent-brand-warm cursor-pointer"
                checked={formData.offered.includes(service)}
                onChange={() => toggleService(service)}
              />
              <span className="group-hover:text-brand-warm transition-colors">
                {service}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Specialties */}
      <div>
        <label className="form-label" htmlFor="specialties">
          Highlighted Specialties
        </label>
        <p className="font-sans text-xs text-mid-gray mb-2">
          Which services should we feature most prominently? Comma-separated.
        </p>
        <input
          id="specialties"
          type="text"
          className="form-input w-full"
          placeholder="e.g. Dental Implants, Invisalign, Cosmetic Dentistry"
          value={formData.specialties}
          onChange={(e) => update('specialties', e.target.value)}
        />
      </div>

      {/* Notes */}
      <div>
        <label className="form-label" htmlFor="services_notes">
          Additional Details
        </label>
        <p className="font-sans text-xs text-mid-gray mb-2">
          Anything else about your services &mdash; technology used, unique approaches, etc.
        </p>
        <textarea
          id="services_notes"
          className="form-textarea w-full"
          rows={4}
          value={formData.notes}
          onChange={(e) => update('notes', e.target.value)}
        />
      </div>
    </div>
  );
}
