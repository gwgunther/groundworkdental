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
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/blog' },
];
