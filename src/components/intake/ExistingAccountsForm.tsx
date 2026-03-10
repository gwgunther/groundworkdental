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

const DEFAULT_PLATFORMS = ['Facebook', 'Instagram', 'YouTube', 'Yelp', 'Healthgrades'];

interface SocialEntry {
  platform: string;
  url: string;
}

function getInitialSocial(data: Record<string, any>): SocialEntry[] {
  if (Array.isArray(data.social_media) && data.social_media.length > 0) {
    return data.social_media;
  }
  return DEFAULT_PLATFORMS.map((platform) => ({ platform, url: '' }));
}

export default function ExistingAccountsForm({
  clientId,
  sectionId,
  initialData,
  isComplete,
  supabaseUrl,
  supabaseAnonKey,
}: FormProps) {
  const [formData, setFormData] = useState({
    domain_registrar: initialData.domain_registrar ?? '',
    domain_login: initialData.domain_login ?? '',
    google_account: initialData.google_account ?? '',
    google_business_profile: initialData.google_business_profile ?? '',
    google_analytics: initialData.google_analytics ?? '',
    booking_software: initialData.booking_software ?? '',
    notes: initialData.notes ?? '',
  });

  const [socialMedia, setSocialMedia] = useState<SocialEntry[]>(getInitialSocial(initialData));

  const { status, debouncedSave } = useAutoSave(clientId, sectionId, supabaseUrl, supabaseAnonKey);

  function saveAll(fields: typeof formData, social: SocialEntry[]) {
    debouncedSave({ ...fields, social_media: social });
  }

  function updateField(field: string, value: string) {
    const next = { ...formData, [field]: value };
    setFormData(next);
    saveAll(next, socialMedia);
  }

  function updateSocialUrl(index: number, url: string) {
    const next = socialMedia.map((entry, i) => (i === index ? { ...entry, url } : entry));
    setSocialMedia(next);
    saveAll(formData, next);
  }

  function addSocialEntry() {
    const next = [...socialMedia, { platform: '', url: '' }];
    setSocialMedia(next);
    saveAll(formData, next);
  }

  function updateSocialPlatform(index: number, platform: string) {
    const next = socialMedia.map((entry, i) => (i === index ? { ...entry, platform } : entry));
    setSocialMedia(next);
    saveAll(formData, next);
  }

  function removeSocialEntry(index: number) {
    const next = socialMedia.filter((_, i) => i !== index);
    setSocialMedia(next);
    saveAll(formData, next);
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl text-charcoal">Existing Accounts</h2>
        <AutoSaveIndicator status={status} />
      </div>

      {/* Domain */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="form-label">Domain Registrar</label>
          <input
            type="text"
            className="form-input w-full"
            placeholder="e.g. GoDaddy, Namecheap"
            value={formData.domain_registrar}
            onChange={(e) => updateField('domain_registrar', e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Domain Login Email</label>
          <input
            type="text"
            className="form-input w-full"
            placeholder="Login email for your domain registrar"
            value={formData.domain_login}
            onChange={(e) => updateField('domain_login', e.target.value)}
          />
        </div>
      </div>

      {/* Google */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="form-label">Google Account Email</label>
          <input
            type="text"
            className="form-input w-full"
            placeholder="Google account used for business"
            value={formData.google_account}
            onChange={(e) => updateField('google_account', e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Google Business Profile</label>
          <input
            type="text"
            className="form-input w-full"
            placeholder="URL or status"
            value={formData.google_business_profile}
            onChange={(e) => updateField('google_business_profile', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="form-label">Google Analytics Property ID</label>
        <input
          type="text"
          className="form-input w-full"
          placeholder="e.g. G-XXXXXXXXXX"
          value={formData.google_analytics}
          onChange={(e) => updateField('google_analytics', e.target.value)}
        />
      </div>

      {/* Social Media */}
      <div>
        <label className="form-label">Social Media Profiles</label>
        <div className="space-y-3">
          {socialMedia.map((entry, index) => (
            <div key={index} className="flex items-center gap-3">
              <input
                type="text"
                className="form-input w-36 shrink-0"
                placeholder="Platform"
                value={entry.platform}
                onChange={(e) => updateSocialPlatform(index, e.target.value)}
              />
              <input
                type="text"
                className="form-input flex-1"
                placeholder="Profile URL"
                value={entry.url}
                onChange={(e) => updateSocialUrl(index, e.target.value)}
              />
              {socialMedia.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSocialEntry(index)}
                  className="font-sans text-xs text-mid-gray hover:text-red-600 transition-colors shrink-0"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addSocialEntry}
          className="font-sans text-xs text-brand-warm hover:text-brand-warm-dark transition-colors mt-3"
        >
          + Add another profile
        </button>
      </div>

      {/* Booking software */}
      <div>
        <label className="form-label">Booking / Patient Management Software</label>
        <input
          type="text"
          className="form-input w-full"
          placeholder="What booking or patient management software do you use?"
          value={formData.booking_software}
          onChange={(e) => updateField('booking_software', e.target.value)}
        />
      </div>

      {/* Notes */}
      <div>
        <label className="form-label">Additional Notes</label>
        <textarea
          className="form-textarea w-full"
          placeholder="Any other account details or login info we should know about"
          value={formData.notes}
          onChange={(e) => updateField('notes', e.target.value)}
        />
      </div>
    </div>
  );
}
