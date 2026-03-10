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

const FINANCING_OPTIONS = [
  'CareCredit',
  'LendingClub/Proceed Finance',
  'Sunbit',
  'In-house Payment Plans',
  'None',
];

export default function InsuranceFinancingForm({
  clientId,
  sectionId,
  initialData,
  isComplete,
  supabaseUrl,
  supabaseAnonKey,
}: FormProps) {
  const { status, debouncedSave } = useAutoSave(clientId, sectionId, supabaseUrl, supabaseAnonKey);

  const [formData, setFormData] = useState({
    insurance_plans: initialData.insurance_plans ?? '',
    financing_options: (initialData.financing_options as string[]) ?? [],
    notes: initialData.notes ?? '',
  });

  function update(field: string, value: any) {
    const next = { ...formData, [field]: value };
    setFormData(next);
    debouncedSave(next);
  }

  function toggleFinancing(option: string) {
    const current = formData.financing_options;
    const next = current.includes(option)
      ? current.filter((o: string) => o !== option)
      : [...current, option];
    update('financing_options', next);
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-serif text-2xl text-charcoal">Insurance &amp; Financing</h2>
          <p className="font-sans text-sm text-mid-gray mt-1">
            Let patients know what you accept before they call.
          </p>
        </div>
        <AutoSaveIndicator status={status} />
      </div>

      {/* Insurance Plans */}
      <div>
        <label className="form-label" htmlFor="insurance_plans">
          Accepted Insurance Plans
        </label>
        <p className="font-sans text-xs text-mid-gray mb-2">
          One plan per line. Include as many as you accept.
        </p>
        <textarea
          id="insurance_plans"
          className="form-textarea w-full"
          rows={6}
          placeholder={
            'Delta Dental\nCigna\nAetna\nMetLife\nGuardian\nUnited Healthcare\nHumana\nBlue Cross Blue Shield'
          }
          value={formData.insurance_plans}
          onChange={(e) => update('insurance_plans', e.target.value)}
        />
      </div>

      {/* Financing Options */}
      <div>
        <label className="form-label">Financing Options</label>
        <div className="space-y-3 mt-1">
          {FINANCING_OPTIONS.map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 font-sans text-sm text-charcoal cursor-pointer select-none group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border-light accent-brand-warm cursor-pointer"
                checked={formData.financing_options.includes(option)}
                onChange={() => toggleFinancing(option)}
              />
              <span className="group-hover:text-brand-warm transition-colors">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="form-label" htmlFor="financing_notes">
          Additional Notes
        </label>
        <p className="font-sans text-xs text-mid-gray mb-2">
          Discounts, membership plans, or anything else about payment.
        </p>
        <textarea
          id="financing_notes"
          className="form-textarea w-full"
          rows={4}
          value={formData.notes}
          onChange={(e) => update('notes', e.target.value)}
        />
      </div>
    </div>
  );
}
