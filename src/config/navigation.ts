// Navigation link structure for Header.astro
// Lean nav — core customer journey only.
// SEO Guide is intentionally in the nav: the gimmick is "don't hire us, just do this yourself"
// — the catch is it would cost more than $2,000 in time to implement.

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Example', href: '/example' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'SEO Guide', href: '/dental-seo-foundation' },
];
