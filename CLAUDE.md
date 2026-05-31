# Groundwork Dental — Agency Website

## What This Is
The marketing website for Groundwork Dental, a productized dental website agency. Built with Astro v5 + Tailwind CSS, hosted on Cloudflare Pages.

## Commands
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build

## Project Structure
- `src/config/site.ts` — agency info, Organization schema (single source of truth)
- `src/config/navigation.ts` — 7-page flat nav
- `src/layouts/BaseLayout.astro` — master layout (SEO head, OG, schema, GA4, fonts)
- `src/components/` — shared components (Header, Footer, CTABlock, FAQBlock, FeatureCard, PricingTable, ComparisonTable)
- `src/pages/` — all pages (7 core + blog)
- `src/content/blog/` — markdown blog posts
- `src/styles/global.css` — Tailwind utilities and component classes
- `References/` — internal operator docs (not deployed); see `groundwork-dental-playbook.md` (full playbook) and `client-site-build-best-practices.md` (client site IA + technical SEO)

## Design System
- **Palette:** charcoal `#334155`, sage green `#5F7F6B` (brand-warm), cream `#F8F8F3`, mid-gray `#64748B`
- **Typography:** Georgia (serif, body + headings), Figtree (sans, buttons/nav/labels), JetBrains Mono (pricing numbers only)
- **NOT dental blue.** Warm, honest, tech-forward.
- **No stock photos.** Real screenshots, PageSpeed scores, founder photos only.
- **Buttons:** `.btn-primary` (sage green), `.btn-secondary` (outlined), `.btn-dark` (charcoal)
- **Cards:** `.card` class for bordered surface-2 cards
- **Full design reference:** `DESIGN.md`

## Brand Voice
Conversational, self-aware, honest. "The honest dental website guy." Not an agency. Not a marketing firm. Write like you're talking to a busy dentist over coffee. No corporate fluff.

## Key Reference
- Full playbook: `References/groundwork-dental-playbook.md`
- Client build standards (IA, SEO, schema, crawl): `References/client-site-build-best-practices.md`
- Reference client site: `/Users/garrettgunther/Projects/hbimplants/`
