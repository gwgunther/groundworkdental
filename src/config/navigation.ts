// Navigation link structure for Header.astro

export interface NavLink {
  label: string;
  href: string;
}

/** Top-level items: optional `dropdown` = hover menu on desktop, nested in mobile drawer. */
export interface NavEntry {
  label: string;
  href: string;
  dropdown?: NavLink[];
}

export const navMain: NavEntry[] = [
  {
    label: 'How It Works',
    href: '/how-it-works',
    dropdown: [
      { label: 'Example', href: '/example' },
      { label: 'Compare', href: '/compare' },
    ],
  },
  {
    label: 'Specialties',
    href: '/dental-websites',
    dropdown: [
      { label: 'Cosmetic Dentists', href: '/dental-websites/cosmetic-dentist' },
      { label: 'Orthodontists', href: '/dental-websites/orthodontist' },
      { label: 'Pediatric Dentists', href: '/dental-websites/pediatric-dentist' },
      { label: 'Oral Surgeons', href: '/dental-websites/oral-surgeon' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'About',
    href: '/about',
    dropdown: [{ label: 'Resources', href: '/blog' }],
  },
];

/** Flat list in header order (sitemaps, etc.). */
export const navLinks: NavLink[] = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Example', href: '/example' },
  { label: 'Compare', href: '/compare' },
  { label: 'Specialties', href: '/dental-websites' },
  { label: 'Cosmetic Dentists', href: '/dental-websites/cosmetic-dentist' },
  { label: 'Orthodontists', href: '/dental-websites/orthodontist' },
  { label: 'Pediatric Dentists', href: '/dental-websites/pediatric-dentist' },
  { label: 'Oral Surgeons', href: '/dental-websites/oral-surgeon' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/blog' },
];
