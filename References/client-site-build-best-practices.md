# Client dental site — build & IA best practices

**Purpose:** Internal playbook for how we build **practice-facing** dental websites (and how to think about information architecture and technical SEO). It consolidates the actionable technical layer from `groundwork-dental-playbook.md` plus IA patterns that help crawlers and users—not a replacement for the full operator playbook (business, sales, pricing, pipelines).

**Audience:** Builders and reviewers. For business philosophy, pricing, onboarding, and automation, see **`References/groundwork-dental-playbook.md`**.

**Last updated:** 2026-04-04

---

## How this relates to the main playbook

| Topic | In this doc | Full detail in playbook |
|--------|-------------|-------------------------|
| Authority pages, hubs, content strategy | Summarized | §3, §11 |
| Page templates, components, checklist | Summarized | §10 |
| On-page SEO, schema, sitemap, robots | Summarized | §12 |
| Forms, CAPTCHA, lead flow | Summarized | §14 |
| Blog/content collections | Summarized | §15 |
| Photos, WebP | Summarized | §16 |
| Stack, deploy, ownership | Summarized | §17–§20 |
| QA & launch | Summarized | §21 |
| GBP | Summarized | §13 |

---

## 1. Site structure and navigation

### 1.1 Primary navigation

- Use a normal HTML **`<nav>`** (landmark) with **stable, first-class paths**—not only hash links or JS-only menus. Predictable URLs help users and help search engines infer main site sections.
- Typical top-level buckets: **About**, **Services** (often with a **mega-menu** or grouped subpages), and paths for **conversion** (e.g. financing, consultation, FAQ, blog) under a clear group such as **Get Started** or **Patients**.
- Drive structure from **`src/config/navigation.ts`** (or equivalent) so every page shares the same nav.

### 1.2 URL and IA principles (from playbook baseline SEO)

- **Baseline site shape** should include: homepage, **service pages** (by treatment/category), **contact** (or an unambiguous primary contact/schedule path), **location** page(s) when relevant.
- Prefer **clean paths** over opaque query strings for main sections.
- **Internal links** between related services and from informational content to **money pages** (core services, schedule/contact).

### 1.3 Authority and hub architecture (playbook §11)

- Build toward **authority pages** and **topic clusters** (e.g. implant hub + cost, recovery, vs dentures—not random one-off posts).
- **Content hubs:** hub page + supporting articles that interlink; reinforces topical expertise.

---

## 2. Homepage internal linking

- The homepage should **not** only push booking. It should link into:
  - **About**
  - **Service category hubs** and/or **All services**
  - Important **money** URLs (e.g. flagship treatments)
  - **Gallery** or proof sections when present
- Goal: the homepage signals which URLs are **central** to the practice, not only which CTA is primary.

---

## 3. Footer as a secondary site map

- Footer should **repeat and deepen** navigation: service categories, key **About** / **quick links**, legal if needed, NAP.
- Use **consistent anchor text** to important URLs so internal linking isn’t only in the header.
- Include **NAP** (name, address, phone) aligned with **Google Business Profile** (playbook §13).

---

## 4. Crawl signals

### 4.1 `robots.txt`

- **Allow** crawling of public marketing pages.
- **Reference the sitemap** (typically `sitemap-index.xml` or `/sitemap.xml` depending on generator).
- **Disallow** only what should not be indexed (e.g. **`/thank-you`**, **`/referral`**, staging or internal paths). Adjust per site; match **Search Console** expectations.

### 4.2 XML sitemap (`@astrojs/sitemap`)

- Enable **`@astrojs/sitemap`** with a **`site`** origin set in `astro.config`.
- Assign **priorities** and **changefreq** in a way that reflects business value, for example (playbook §12.5):

| Page category | Typical priority | Changefreq |
|---------------|------------------|------------|
| Homepage | 1.0 | weekly |
| High-value hubs (e.g. schedule, about, flagship services) | 0.9 | weekly |
| Service subpages | 0.8 | monthly |
| Blog index | 0.7 | weekly |
| Blog posts | 0.6 | monthly |

- **Exclude** non-indexable or thin utility routes (thank-you, referral, etc.) via sitemap **filter** or equivalent.

### 4.3 Post-deploy

- Submit sitemap in **Google Search Console**; verify property (playbook §19–§21).

---

## 5. Structured data (JSON-LD)

### 5.1 Every page (playbook §12.2)

- **`LocalBusiness`** with **`Dentist`** (or appropriate subtype) where accurate.
- **`BreadcrumbList`** on **non-home** URLs for hierarchy clarity.

### 5.2 By page type (extend as needed)

| Page type | Common types |
|-----------|----------------|
| Homepage | + **`AggregateRating`** when using real review data (see compliance policies) |
| About | + **`Physician`** (credentials, specialties) |
| Treatment / service | + **`MedicalProcedure`** where appropriate |
| FAQ-heavy | + **`FAQPage`** |
| Blog | + **`BlogPosting`** |
| Appointment / contact | + **`ContactPoint`** / hours as applicable |

### 5.3 Entity clarity (playbook §12.4)

- Use **`sameAs`** for GBP, Yelp, Healthgrades, Zocdoc, etc., when those profiles exist and match **NAP**.
- Prefer **unambiguous specialty** language where true (e.g. prosthodontist vs generic “dentist”).

### 5.4 Optional: `WebSite` schema

- Adding a **`WebSite`** block with **`url`**, **`name`**, and (if appropriate) **`publisher`** pointing at the practice entity can reinforce site-level entity signals. It does **not** force **sitelinks** in Google.

---

## 6. On-page SEO (every page) (playbook §12.1)

| Element | Standard |
|--------|------------|
| Title | ~30–60 characters; keyword + practice name |
| Meta description | ~120–160 characters; keyword + CTA |
| H1 | One per page; keyword; not a duplicate of title |
| Canonical | Correct absolute URL per page |
| Open Graph / Twitter | For sharing |

**Body:** sensible **H2/H3** hierarchy, keyword in **H1** and early body copy where natural, **internal links** to related services, **CTA** block where the template provides it.

---

## 7. `/schedule` (or primary on-domain booking) vs external booking

### 7.1 Internal links (your on-domain form)

- **Many** treatment and content pages should link to **`/schedule`** (or the canonical on-domain request path) so that URL is **not orphaned**—it receives internal signals from across the site.

### 7.2 Global chrome (header/footer)

- **Gap to watch:** If almost all prominent “Book” actions point to **external** software (e.g. Dentrix, Zocdoc) via `bookingUrl` in **`site.ts`**, while **`/schedule`** exists only in body copy, search engines and users may underweight the on-domain URL relative to the vendor link.
- **Refinement:** If a strong association between the **practice domain** and “schedule / contact / book” matters, add **`/schedule`** to **footer quick links** and/or the **Get Started** (or equivalent) dropdown **alongside** the external booker—not necessarily replacing it.

---

## 8. Optional: dedicated `/contact` page

- **NAP** in the footer may be enough for UX and local SEO.
- If you want a clear **“Contact”** URL for brand queries and consistent internal anchors, add a **thin** page: NAP, map embed, hours, link to **`/schedule`**, optional form—avoid duplicate thin content across many URLs.

---

## 9. Google Search Console and sitelinks

- There is **no** setting that forces or labels **sitelinks** under the main result; technical hygiene (clear IA, internal links, structured data) puts you in a **good** bucket; the rest is **query type**, **brand strength**, and **Google’s choice** over time.

---

## 10. Technical performance & stack (playbook §12.3, §17)

- **HTTPS** (e.g. Cloudflare).
- **Images:** WebP, reasonable file sizes, **lazy** load where appropriate.
- **Targets:** strong **PageSpeed** and **Core Web Vitals** (playbook lists 90+ desktop / 85+ mobile as targets; validate per project).
- **Stack reference:** Astro, Tailwind, Cloudflare Pages, static-first delivery—see playbook §17.

---

## 11. Forms, CAPTCHA, leads (playbook §14)

- Typical pattern: **Formspree** (or agreed handler) + **Cloudflare Turnstile**, success redirect to **`/thank-you`** (disallow from index).
- Fields and requiredness should match compliance and practice preference; document **`FORMSPREE_ENDPOINT`** and env for deploys.

---

## 12. Blog & content quality (playbook §15)

- Frontmatter: title, description, dates, **target keyword**, category, **draft**, optional FAQs for **FAQPage** schema.
- Posts should link to **2–3 related service pages**, include **embedded FAQs** when strategy calls for it, and end with a clear **CTA**.

---

## 13. Photos (playbook §16)

- Real practice photography over stock; brief covers team, office, treatment areas; process to **WebP** and organized **`/public/images`** paths.

---

## 14. Migration and redirects (playbook §20)

- **301** map from old URLs; preserve equity; update **GBP** website link after cutover.

---

## 15. QA & launch (condensed from playbook §21)

**Technical**

- [ ] `npm run build` clean
- [ ] PageSpeed / CWV acceptable for launch
- [ ] HTTPS
- [ ] Sitemap reachable; **robots.txt** correct
- [ ] Forms + CAPTCHA tested
- [ ] GA4 / GSC as scoped
- [ ] No critical console errors on key templates

**Content**

- [ ] Unique title + meta + single **H1** per page
- [ ] No placeholder copy
- [ ] NAP matches GBP
- [ ] Alts on meaningful images
- [ ] No broken internal links

**Schema**

- [ ] Validate with Rich Results / schema tools where used
- [ ] **LocalBusiness** + **BreadcrumbList** baseline; extras per page type

---

## 16. Groundwork **agency** repo vs client sites

- This repository (**groundworkdental.com**) follows **`CLAUDE.md`** and **`src/config/site.ts`** for the **agency** brand. **Client** sites use the same **patterns** (Astro, `site.ts`, `navigation.ts`, `BaseLayout`, schema) with **practice-specific** nav, sitemap priorities, and `robots` rules—tune per domain.

---

## Quick alignment checklist (IA + SEO)

Use this as a final pass on a client build:

1. [ ] Semantic **`<nav>`** with stable paths for About, Services/hubs, and patient journey links
2. [ ] Homepage links to **hubs**, About, key services, gallery/proof—not only external book
3. [ ] Footer **deep links** + NAP + review CTA as appropriate
4. [ ] **robots.txt** allows crawl + sitemap; disallows thank-you/referral (and similar)
5. [ ] **Sitemap** priorities reflect home + hubs + schedule/about
6. [ ] **JSON-LD:** LocalBusiness + BreadcrumbList; **sameAs** where profiles exist; optional **WebSite**
7. [ ] **`/schedule`** (or equivalent) linked from **many** internal pages; consider header/footer if on-domain scheduling is a priority
8. [ ] Optional **`/contact`** if “Contact” as a first-class URL matters
9. [ ] **GSC:** sitemap submitted; expectations set on sitelinks (no toggle)

---

*For sales, onboarding, pricing, GBP scripts, and AI pipeline details, see **`References/groundwork-dental-playbook.md`**.*
