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

interface HoursEntry {
  day: string;
  time: string;
}

const DEFAULT_HOURS: HoursEntry[] = [
  { day: 'Monday', time: '8:00 AM – 5:00 PM' },
  { day: 'Tuesday', time: '8:00 AM – 5:00 PM' },
  { day: 'Wednesday', time: '8:00 AM – 5:00 PM' },
  { day: 'Thursday', time: '8:00 AM – 5:00 PM' },
  { day: 'Friday', time: '8:00 AM – 5:00 PM' },
];

export default function PracticeInfoForm({
  clientId,
  sectionId,
  initialData,
  isComplete,
  supabaseUrl,
  supabaseAnonKey,
}: FormProps) {
  const { status, debouncedSave } = useAutoSave(clientId, sectionId, supabaseUrl, supabaseAnonKey);

  const [formData, setFormData] = useState({
    practice_name: initialData.practice_name ?? '',
    phone: initialData.phone ?? '',
    email: initialData.email ?? '',
    website_url: initialData.website_url ?? '',
    address_street: initialData.address_street ?? '',
    address_city: initialData.address_city ?? '',
    address_state: initialData.address_state ?? '',
    address_zip: initialData.address_zip ?? '',
    hours: (initialData.hours as HoursEntry[]) ?? DEFAULT_HOURS,
  });

  function update(field: string, value: any) {
    const next = { ...formData, [field]: value };
    setFormData(next);
    debouncedSave(next);
  }

  function updateHour(index: number, field: keyof HoursEntry, value: string) {
    const next = formData.hours.map((h, i) =>
      i === index ? { ...h, [field]: value } : h,
    );
    update('hours', next);
  }

  function addHour() {
    update('hours', [...formData.hours, { day: '', time: '' }]);
  }

  function removeHour(index: number) {
    update('hours', formData.hours.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-serif text-2xl text-charcoal">Practice Information</h2>
          <p className="font-sans text-sm text-mid-gray mt-1">
            Basic details about your dental practice.
          </p>
        </div>
        <AutoSaveIndicator status={status} />
      </div>

      {/* Practice Name */}
      <div>
        <label className="form-label" htmlFor="practice_name">Practice Name</label>
        <input
          id="practice_name"
          type="text"
          className="form-input w-full"
          value={formData.practice_name}
          onChange={(e) => update('practice_name', e.target.value)}
        />
      </div>

      {/* Contact Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="form-label" htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            className="form-input w-full"
            value={formData.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="form-input w-full"
            value={formData.email}
            onChange={(e) => update('email', e.target.value)}
          />
        </div>
      </div>

      {/* Website */}
      <div>
        <label className="form-label" htmlFor="website_url">Website</label>
        <input
          id="website_url"
          type="url"
          className="form-input w-full"
          placeholder="https://yourcurrentsite.com"
          value={formData.website_url}
          onChange={(e) => update('website_url', e.target.value)}
        />
      </div>

      {/* Address */}
      <div>
        <label className="form-label">Address</label>
        <div className="space-y-3">
          <input
            type="text"
            className="form-input w-full"
            placeholder="Street address"
            value={formData.address_street}
            onChange={(e) => update('address_street', e.target.value)}
          />
          <div className="grid grid-cols-6 gap-3">
            <input
              type="text"
              className="form-input col-span-3"
              placeholder="City"
              value={formData.address_city}
              onChange={(e) => update('address_city', e.target.value)}
            />
            <input
              type="text"
              className="form-input col-span-1"
              placeholder="State"
              value={formData.address_state}
              onChange={(e) => update('address_state', e.target.value)}
            />
            <input
              type="text"
              className="form-input col-span-2"
              placeholder="ZIP"
              value={formData.address_zip}
              onChange={(e) => update('address_zip', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Hours */}
      <div>
        <label className="form-label">Office Hours</label>
        <div className="space-y-2">
          {formData.hours.map((entry, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 items-center">
              <input
                type="text"
                className="form-input col-span-4"
                placeholder="Day"
                value={entry.day}
                onChange={(e) => updateHour(i, 'day', e.target.value)}
              />
              <input
                type="text"
                className="form-input col-span-6"
                placeholder="Hours (e.g. 8:00 AM – 5:00 PM)"
                value={entry.time}
                onChange={(e) => updateHour(i, 'time', e.target.value)}
              />
              <button
                type="button"
                className="col-span-2 font-sans text-xs text-mid-gray hover:text-red-600 transition-colors"
                onClick={() => removeHour(i)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="font-sans text-sm text-brand-warm hover:text-brand-warm-dark mt-3 transition-colors"
          onClick={addHour}
        >
          + Add hours
        </button>
      </div>
    </div>
  );
}
