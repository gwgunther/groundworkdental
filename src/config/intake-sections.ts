export interface IntakeSection {
  id: string;
  slug: string;
  title: string;
  description: string;
  required: boolean;
}

export const intakeSections: IntakeSection[] = [
  {
    id: 'practice_info',
    slug: 'practice-info',
    title: 'Practice Information',
    description: 'Name, phone, email, address, hours of operation.',
    required: true,
  },
  {
    id: 'doctor_team',
    slug: 'doctor-team',
    title: 'Doctor & Team',
    description: 'Names, credentials, bios, and headshots.',
    required: false,
  },
  {
    id: 'services',
    slug: 'services',
    title: 'Services Offered',
    description: 'Dental services you provide, specialties to highlight.',
    required: false,
  },
  {
    id: 'insurance_financing',
    slug: 'insurance-financing',
    title: 'Insurance & Financing',
    description: 'Accepted insurance plans, financing options.',
    required: false,
  },
  {
    id: 'branding',
    slug: 'branding',
    title: 'Branding & Style',
    description: 'Logo, colors, mood, competitor sites you admire.',
    required: false,
  },
  {
    id: 'existing_accounts',
    slug: 'existing-accounts',
    title: 'Existing Accounts',
    description: 'Domain, Google Business, Analytics, social media.',
    required: false,
  },
  {
    id: 'photos',
    slug: 'photos',
    title: 'Photos & Images',
    description: 'Office photos, team photos, before/after cases.',
    required: false,
  },
  {
    id: 'content',
    slug: 'content',
    title: 'Content & Copy',
    description: 'Existing copy to keep, selling points, testimonials.',
    required: false,
  },
];

export function getSectionBySlug(slug: string) {
  return intakeSections.find(s => s.slug === slug);
}

export function getSectionById(id: string) {
  return intakeSections.find(s => s.id === id);
}
