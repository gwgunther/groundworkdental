# Dental Practice Website Build — Full Operations Playbook

> **Purpose:** This is the master reference for every aspect of the business — from first customer contact through launch, ongoing operations, and growth services. It serves as the operating manual for the operator and the scope document for every engagement.
>
> **Audience:** Internal / operator only. Sections marked *[Customer-Facing]* can be shared with clients. Everything else is backend operational knowledge.
>
> **Last Updated:** 2026-03-09

---

## Table of Contents

1. [Business Model & Value Proposition](#1-business-model--value-proposition)
2. [Service Catalog & Pricing](#2-service-catalog--pricing)
3. [Sales Process](#3-sales-process)
4. [Customer Onboarding](#4-customer-onboarding)
5. [Production Pipeline — Website Build](#5-production-pipeline--website-build)
6. [SEO & Schema Implementation](#6-seo--schema-implementation)
7. [Google Business Profile Setup & Optimization](#7-google-business-profile-setup--optimization)
8. [Forms, CAPTCHA & Lead Capture](#8-forms-captcha--lead-capture)
9. [Content System — Blog & Content Collections](#9-content-system--blog--content-collections)
10. [Deployment & Infrastructure](#10-deployment--infrastructure)
11. [Migration From Existing Website](#11-migration-from-existing-website)
12. [Quality Assurance & Launch Checklist](#12-quality-assurance--launch-checklist)
13. [Post-Launch Handoff](#13-post-launch-handoff)
14. [Ongoing Operations & Maintenance](#14-ongoing-operations--maintenance)
15. [Growth Services — Detailed Operations](#15-growth-services--detailed-operations)
16. [Tools, Accounts & Cost of Ownership](#16-tools-accounts--cost-of-ownership)
17. [Automation Scripts — Operator Reference](#17-automation-scripts--operator-reference)
18. [Customer Communication Templates](#18-customer-communication-templates)
19. [Timeline — Week-by-Week Delivery](#19-timeline--week-by-week-delivery)
20. [Scaling & Capacity Planning](#20-scaling--capacity-planning)

---

## 1. Business Model & Value Proposition

### What This Business Is

A productized website and digital presence service for dental practices — specifically targeting prosthodontists, implant specialists, and high-value cosmetic/restorative practices.

### Core Offering

A complete, production-grade website and digital infrastructure package delivered as a one-time build with optional ongoing services. The customer owns everything. No lock-in. No recurring agency fees unless they opt into growth services.

### Why It Wins

| Advantage | Traditional Agency | This Model |
|---|---|---|
| **Ownership** | Agency owns hosting, CMS, sometimes domain | Customer owns GitHub repo, Cloudflare account, domain, Google accounts — everything transfers instantly |
| **Ongoing cost** | $200-500/month hosting + maintenance fees | ~$12-15/year (domain renewal only) |
| **Performance** | WordPress/Wix average 40-70 PageSpeed | Static HTML, 90+ PageSpeed, zero JavaScript by default |
| **SEO** | Basic meta tags, maybe schema | Comprehensive JSON-LD schema on every page (LocalBusiness, FAQPage, MedicalProcedure, Physician, BreadcrumbList, BlogPosting, AggregateRating) |
| **AI/LLM visibility** | Not optimized | Content structured for AI citation — entity optimization, structured FAQs, authoritative formatting |
| **Lock-in** | Proprietary CMS, can't export | Open-source stack (Astro + Tailwind), standard Git repo, any developer can pick it up |
| **Vendor switching** | Weeks/months of migration, content loss | Hand the GitHub URL to any developer. Done. |

### Target Customer Profile

- **Primary:** Prosthodontists, implant specialists, oral surgeons — practices where average case value is $3,000-50,000+
- **Secondary:** High-end cosmetic dentistry practices (veneers, smile makeovers)
- **Tertiary:** General dentists who want to emphasize implants or cosmetic services
- **Geography:** Initially Southern California; model works nationwide
- **Current vendor pain:** Paying $200-500/month for PatientPop, Dex Knows, or a WordPress agency and getting mediocre results with no ownership

### Revenue Streams

1. **One-time website build** — primary revenue, quoted based on scope
2. **Growth services retainers** — recurring monthly revenue (content, SEO, GBP management, backlinks)
3. **One-time add-ons** — logo design, migration, content packages

---

## 2. Service Catalog & Pricing

### 2.1 — Baseline Website Build (One-Time)

Everything included in the standard engagement. Customer owns all deliverables.

#### What's Delivered

| Deliverable | Details |
|---|---|
| **Multi-page website** | 30-50+ static pages: homepage, about, service hubs, service sub-pages, blog, gallery, FAQ, financing, appointment form, location pages, services directory |
| **Design system** | Custom color palette, typography (serif headings + sans-serif body), component library (buttons, cards, CTAs, accordions), responsive mobile-first layout |
| **SEO optimization** | Keyword-optimized titles/descriptions, heading hierarchy, internal linking, canonical URLs, XML sitemap, robots.txt, Open Graph/Twitter cards |
| **Schema markup** | JSON-LD on every page: LocalBusiness, BreadcrumbList, FAQPage, MedicalProcedure, Physician, AggregateRating, BlogPosting |
| **AI/LLM SEO** | Entity optimization, structured content for AI citation, unambiguous specialty signals |
| **Google Business Profile optimization** | Complete profile audit, category corrections, services/photos/Q&A configuration |
| **Google Analytics 4** | Property created, tracking code installed, conversion events configured |
| **Google Search Console** | Property verified, sitemap submitted |
| **Appointment form** | Multi-field intake form with CAPTCHA protection, email notifications to practice |
| **Blog system** | Markdown-based content collection with frontmatter schema, dynamic routing, SEO tagging |
| **Before/after gallery** | Filterable grid with lightbox, lazy loading, procedure labels |
| **Automation scripts** | CLI tools for GBP reviews, GBP posts, GA4 reports, GSC reports, site audits — included in the codebase |
| **Infrastructure accounts** | GitHub (code), Cloudflare Pages (hosting), domain — all in customer's name |

#### Page Architecture (Standard Build)

The standard build produces the following page structure. Adjust per customer based on services offered:

```
Homepage
About (doctor bio, credentials, practice story)
Schedule (appointment request form)
Gallery (before/after + procedure photos)
FAQ (comprehensive, accordion-style)
Financing (insurance, payment options)
Why a Specialist (education page)
Services Directory (all services linked)
Blog Index + Dynamic Post Pages

Dental Implants/
  ├── Hub page
  ├── Single Tooth Implant
  ├── Bone Grafting
  ├── Implant Placement
  └── Free Consultation

All-on-X/
  ├── Hub page
  ├── All-on-4
  ├── All-on-6
  ├── Full Arch Restoration
  └── Full Mouth Reconstruction

Implant Restorations/
  ├── Hub page
  ├── Implant Crowns
  ├── Implant Bridges
  ├── Implant Dentures
  └── Snap-On Dentures

Veneers/
  ├── Hub page
  ├── Porcelain Veneers
  └── Smile Makeover

Cosmetic Dentistry/
  ├── Hub page
  ├── Teeth Whitening
  └── Dental Bonding

Restorative Dentistry/
  ├── Hub page
  ├── Dental Crowns
  └── Dental Bridges

Dentures/
  ├── Hub page
  ├── Full Dentures
  └── Partial Dentures

General Dentistry/
  ├── Hub page
  └── Cleanings & Exams

Clear Aligners/
  └── Hub page

Locations/ (geo-targeted landing pages)
  ├── Primary City
  └── 6-8 surrounding cities/neighborhoods

Blog/
  ├── Index (auto-sorted by date)
  └── [slug] (dynamic markdown posts)
```

**Total: ~48 pages** for a full prosthodontic practice. Scale down for simpler practices; scale up for multi-doctor or multi-location.

#### Pricing Framework

Pricing is quoted per engagement based on:
- Number of service categories and sub-pages
- Content creation scope (customer provides copy vs. we write everything)
- Photo/asset availability (existing vs. needs photography)
- Migration complexity (new site vs. moving from existing vendor)
- Location page count
- Logo design (if needed)

### 2.2 — Optional Add-Ons (One-Time)

| Add-On | What's Included | Notes |
|---|---|---|
| **Logo design** | Clean professional logo in SVG, PNG, reversed/white versions + basic brand guide | Only if no logo exists |
| **Favicon package** | Auto-generated from logo in all required sizes (browser, iOS, Android) | Included free with logo or existing logo |
| **Professional photography coordination** | Shot list, photographer recommendations, on-site direction | We don't shoot; we coordinate |
| **Extended location pages** | Additional geo-targeted pages beyond standard 6-8 | Per-page pricing |
| **Case study pages** | Detailed treatment narratives with timeline, photos, patient quotes | High-converting; recommend adding post-launch |

### 2.3 — Growth Services (Monthly Retainers)

See [Section 15](#15-growth-services--detailed-operations) for full operational details on each.

| Service | Deliverables | Cadence |
|---|---|---|
| **Video-to-Everything Content Pipeline** | Customer records 60-90 sec video → we produce: short-form video (TikTok/Reels/Shorts), blog post (800-1200 words), GBP post, social caption | 1-4 videos/month |
| **Blog Content** | Keyword-researched, SEO-optimized posts (800-1500 words) with schema, internal links | 1-4 posts/month |
| **GBP Management** | Weekly posts, review monitoring/responses, Q&A management, photo updates | Weekly |
| **Site Maintenance** | Monthly health check (broken links, 404s, speed), dependency updates, content updates, annual SEO audit | Monthly |
| **Backlink Building** | Directory submissions, guest articles, HARO pitching, competitor gap analysis | Monthly |
| **Email Newsletter** | Mailchimp/Klaviyo setup, welcome sequence, monthly template | Monthly after setup |

---

## 3. Sales Process

### 3.1 — Lead Qualification

Before investing time in a proposal, confirm:

- [ ] Practice type: prosthodontist, implant specialist, or high-value cosmetic? (ideal) General dentist wanting to emphasize implants? (acceptable)
- [ ] Current website situation: Has one and unhappy? Has one and it's fine but expensive? Has none?
- [ ] Budget alignment: Can they invest in a one-time build at our price point?
- [ ] Decision maker: Is the person we're talking to the owner/decision maker?
- [ ] Timeline: Do they have a reasonable timeline (6-8 weeks minimum)?
- [ ] Geographic fit: Where are they located? (doesn't affect delivery, but affects local SEO strategy)

### 3.2 — Discovery Call Flow

**Duration:** 30-45 minutes

**Objective:** Understand their practice, current pain, and what success looks like.

**Flow:**

1. **Their practice** (5 min)
   - How long have you been practicing?
   - What's your specialty / primary services?
   - Solo or multi-doctor? How many locations?

2. **Current digital presence** (10 min)
   - Do you have a website? Who built it? What platform?
   - What are you paying monthly? (PatientPop = $300-700/mo, Dex Knows = $200-400/mo)
   - What do you like about it? What frustrates you?
   - Do you own your domain? Your Google Business Profile?
   - Are you showing up in Google Maps? Getting reviews?

3. **Goals** (10 min)
   - What procedures do you most want to attract? (implants, All-on-4, veneers?)
   - Who is your ideal patient? (demographics, insurance, case value)
   - What geographic area do you serve?
   - Any specific competitors you're watching?

4. **Our approach** (10 min)
   - Walk through what we build and how it's different (own everything, no lock-in, static performance, comprehensive SEO)
   - Show a live example site (hbimplants.com or similar)
   - Explain the build process and timeline

5. **Next steps** (5 min)
   - Send the intake document
   - Quote based on scope discussed
   - Schedule follow-up if they need time

### 3.3 — Proposal & Closing

After discovery call:

1. Send the **intake document** (see Section 4) — this is both the customer-facing scope and their homework
2. Send a **custom quote** based on scope discussed — include:
   - One-time build price
   - What's included (reference intake doc sections)
   - What's optional (growth services, logo, etc.)
   - Timeline (6-8 weeks from intake submission)
   - Total cost of ownership after handoff ($12-15/year)
3. **Follow up** within 48 hours if no response
4. On agreement: collect signed contract + initial payment → kick off onboarding

---

## 4. Customer Onboarding

### 4.1 — What We Need From the Customer *[Customer-Facing]*

This section maps to the intake document. Everything is flexible — the only truly required info is practice basics (4.1.1).

#### 4.1.1 — Practice Basics (REQUIRED)

| Item | Notes |
|---|---|
| Practice name | Legal name + display name if different |
| Address | Street, suite, city, state, ZIP |
| Phone | Main patient-facing line; secondary/after-hours if applicable |
| Email | Patient-facing email + separate inbox for form submissions if preferred |
| Hours | Each day of the week including "Closed" days |
| Domain | Current domain, or flag that they need a new one |
| Languages spoken | At the practice — for website and local SEO |

#### 4.1.2 — Doctor & Team (Optional)

For each doctor:
- Full name + credentials (DDS, DMD, MS, etc.) and title
- Dental school + graduation year
- Specialty residency / post-doctoral training — where, what, when
- Board certifications and professional memberships (ACP, ADA, CDA, etc.)
- Awards, publications, recognition
- Personal details — hobbies, family, interests (builds trust)

For support staff (optional but adds warmth):
- Names, roles, notable details

> **Operator note:** Bullet points and rough notes are fine. We write the bios. If they don't have this ready, we build placeholder bios and fill in after launch.

#### 4.1.3 — Services & Treatments (Optional)

For each service:
- Service name as they want it displayed
- Any specifics worth calling out (unique approach, technology, outcomes, cost ranges)
- FAQs patients constantly ask
- Before/after photos (labeled with procedure, patient consent documented)

> **Operator note:** A list of service names is enough to start. We draft all copy and send for review. Default page architecture covers the major prosthodontic categories — customize based on what they actually offer.

#### 4.1.4 — Photos & Visual Assets (Optional)

- **Office:** Exterior/signage, reception, treatment rooms, technology/equipment
- **Team:** Headshots (professional preferred but not required at launch), candid/in-action shots, group photo
- **Before/after:** Photo pairs by treatment type, labeled with procedure, consent documented
- **Logo & brand:** Logo file (any format, even a phone photo), color/reversed versions, brand guidelines if they exist

> **Operator note:** Phone photos are acceptable for launch. We can swap in professional shots later. Images get converted to WebP (~150KB each) and organized into `/public/images/{heroes,team,branding,gallery}/`.

#### 4.1.5 — Look & Feel (Optional)

| Item | What We Need |
|---|---|
| Sites they like | URLs + quick note on what appeals |
| Colors | Describe the feeling — "clean and modern," "warm," "bold" |
| Tone | Formal / conversational / clinical / friendly |
| Things to avoid | Colors, styles, vibes they don't like |

> **Operator note:** This informs the Tailwind color token customization in `tailwind.config.mjs`. Default palette: navy headings, teal CTAs, gold accents, warm neutrals, serif headlines + sans body.

#### 4.1.6 — Existing Online Accounts (Optional)

| Account | Why We Need It |
|---|---|
| Google account login | Covers GBP, Analytics, Search Console — we set up anything that doesn't exist |
| Domain account login | To point DNS to new site. We only touch DNS records. |
| Current website login | To export content worth keeping before switching |
| Social & directory logins | Yelp, Facebook, Healthgrades, Zocdoc — for NAP consistency |

> **Operator note:** We need the Google account to configure GA4, GSC, and GBP. We need domain access only for DNS cutover. We need current site access only if migrating content.

#### 4.1.7 — Testimonials (Optional)

- Written testimonials (first name + city is enough)
- Video testimonials (file or YouTube link)

> **Operator note:** We pull Google reviews automatically via the Google Places API at build time. The homepage displays reviews with rating >= 4 stars and comment length > 40 chars. Fallback testimonials are hardcoded in `index.astro` in case API fails.

#### 4.1.8 — Goals & Target Audience (Optional)

| Item | Why It Matters |
|---|---|
| Ideal patient | Demographics, procedure type, insurance status |
| Top procedures to prioritize | What to rank for and optimize conversion on |
| Differentiators | Why a patient should choose them over competitors |
| Geographic focus | Cities/neighborhoods — drives location page strategy |
| Accepting new patients? | Yes / with restrictions / referral only |
| Anything coming soon? | New services, associates, expansions |

#### 4.1.9 — Additional Info (Optional)

- Insurance plans accepted
- Patient forms to embed or link
- Promotions, events, seasonal offers
- Awards, press mentions, "as seen in" media
- Appointment booking software (Zocdoc, Dentrix, Open Dental)
- Multi-language needs

### 4.2 — Onboarding Process (Backend)

**Step 1: Receive Intake (Day 1)**
- Customer submits intake document (filled sections)
- Operator reviews for completeness
- Flag any gaps that will block progress

**Step 2: Kickoff Call (Day 2-3)**
- Walk through submitted intake
- Clarify ambiguities
- Confirm service scope and page architecture
- Agree on timeline and review milestones
- Collect account credentials (Google, domain, current site)

**Step 3: Account Setup (Day 3-5)**
- Create GitHub repository (in customer's GitHub account or transfer later)
- Create Cloudflare Pages project (in customer's Cloudflare account)
- Set up or verify Google Analytics 4 property
- Set up or verify Google Search Console
- Audit and optimize Google Business Profile
- Register domain if needed (Cloudflare Registrar recommended)
- Set up Formspree form endpoint
- Configure Cloudflare Turnstile CAPTCHA

**Step 4: Content Gathering (Day 3-10)**
- Process submitted photos (convert to WebP, organize into directory structure)
- Draft doctor/team bios from bullet points provided
- Draft service page copy from notes provided
- Research and draft FAQ content per service
- Identify target keywords per page
- Send content drafts for customer review

---

## 5. Production Pipeline — Website Build

### 5.1 — Project Setup

```bash
# Initialize from template (or clone base repo)
# Customize for new customer:

# 1. Update site config
src/config/site.ts
  → Practice name, phone, email, address, hours
  → Doctor name, credentials
  → Google review link, GBP profile link
  → LocalBusiness schema fields

# 2. Update navigation
src/config/navigation.ts
  → Service categories and sub-pages based on what this practice offers
  → Dropdown structure and descriptions

# 3. Customize design tokens
tailwind.config.mjs
  → Brand colors (navy, teal, gold or custom palette)
  → Typography (keep Playfair Display + DM Sans default or customize)

# 4. Process and place images
public/images/branding/  → logo, favicon source, OG image
public/images/team/      → doctor/staff headshots (WebP)
public/images/heroes/    → hero section backgrounds (WebP)
public/images/gallery/   → before/after + procedure photos (WebP)
```

### 5.2 — Design System Configuration

The design system is defined in three files:

**`tailwind.config.mjs`** — Color tokens, fonts, spacing
```
brand-navy    → hero backgrounds, headings
brand-teal    → CTA buttons, accents
brand-gold    → heading highlights, accent details
charcoal      → primary body text (#111111)
mid-gray      → secondary text (#666666)
surface-2     → card backgrounds (#F7F6F3)
border-light  → dividers (#E5E4E0)

Fonts:
  serif: Playfair Display (h1, h2 headings)
  sans: DM Sans (body, UI, nav)
```

**`src/styles/global.css`** — Component utilities
```
.btn-primary      → black bg, white text, rounded-full
.btn-secondary    → white bg, black border
.btn-accent       → teal bg, white text
.section-heading  → 4xl-5xl, bold, serif
.section-subheading → 2xl-3xl, semibold, serif
.prose-dental     → body text styling for long-form content
.card             → rounded-xl, padded, surface-2 bg, border
.nav-link         → charcoal, hover navy, transition
```

**Fonts** — loaded via Google Fonts in `BaseLayout.astro`

### 5.3 — Page Development

Each page follows a consistent pattern:

```astro
---
// 1. Import layout and components
import BaseLayout from '../../layouts/BaseLayout.astro';
import CTABlock from '../../components/CTABlock.astro';
import FAQBlock from '../../components/FAQBlock.astro';
import { localBusinessSchema } from '../../config/site';

// 2. Define page-specific schema
const procedureSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Dental Implant',
  // ...
};

// 3. Define FAQs
const faqs = [
  { question: '...', answer: '...' },
];

// 4. Build FAQ schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer }
  }))
};
---

<!-- 5. Wrap in BaseLayout with SEO props -->
<BaseLayout
  title="Page Title (30-60 chars)"
  description="Meta description (120-160 chars)"
  schema={[localBusinessSchema, procedureSchema, faqSchema]}
>
  <!-- 6. Hero section -->
  <!-- 7. Content sections -->
  <!-- 8. FAQ accordion -->
  <FAQBlock faqs={faqs} />
  <!-- 9. CTA block -->
  <CTABlock variant="dark" />
</BaseLayout>
```

**Operator checklist per page:**
- [ ] Title tag: 30-60 characters, includes target keyword
- [ ] Meta description: 120-160 characters, includes target keyword, has call-to-action
- [ ] Single H1 tag, not a duplicate of the title tag
- [ ] Heading hierarchy: H1 → H2 → H3 (no skipped levels)
- [ ] Target keyword appears in H1, first paragraph, and at least one H2
- [ ] Internal links to related service pages
- [ ] CTA block at bottom of page
- [ ] FAQ section with 4-8 questions
- [ ] JSON-LD schema: LocalBusiness + page-specific (Procedure, FAQ, etc.)
- [ ] Images have descriptive alt text
- [ ] Mobile responsive (check at 375px width)

### 5.4 — Component Usage

**Header (`Header.astro`):**
- Automatically reads from `navigation.ts`
- Desktop: horizontal nav with dropdown hover groups
- Mobile: hamburger menu with nested dropdowns
- Sticky positioning (top-0, z-50)
- CTA buttons: phone link + "Book Appointment"
- Doctor avatar in About nav link (configurable)

**Footer (`Footer.astro`):**
- Imports practice info from `site.ts`
- 4-column layout: service categories + about/resources
- NAP block (name, address, phone, email, hours)
- Google review CTA link
- Auto-generated copyright year

**CTABlock (`CTABlock.astro`):**
- Three variants: `dark` (navy bg), `light` (light bg), `white`
- Default heading: "Ready to Restore Your Smile?"
- Phone number + appointment booking button
- Used at the bottom of every service/content page

**FAQBlock (`FAQBlock.astro`):**
- Accordion with click-to-expand
- Auto-generates FAQPage schema
- Keyboard accessible (aria-expanded)
- Customizable heading

**GalleryGrid (`GalleryGrid.astro`):**
- Filterable by procedure type
- Lightbox modal with prev/next navigation
- Keyboard support (arrow keys, Escape)
- Lazy loading, responsive grid (2-col mobile, 4-col desktop)

**BeforeAfter (`BeforeAfter.astro`):**
- Side-by-side before/after cards
- Optional procedure label and caption
- Hover scale effect

### 5.5 — Homepage Special Features

The homepage has unique functionality beyond standard pages:

**Google Reviews Integration:**
- Fetches live reviews from Google Places API at build time
- Uses `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` environment variables
- Filters: rating >= 4 stars, comment length > 40 characters
- Displays: reviewer name, rating, relative time, review text
- Fallback: hardcoded testimonials if API call fails
- AggregateRating schema with live rating value and review count

**Homepage schema:**
```javascript
{
  ...localBusinessSchema,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.9,    // from API
    reviewCount: 73,     // from API
    bestRating: 5,
    worstRating: 1
  }
}
```

### 5.6 — Location Pages

Geo-targeted landing pages for surrounding cities. Each page:
- Targets "[service] in [city]" keywords
- Includes city-specific content and local landmarks
- Links to main service pages
- Has LocalBusiness schema with service area
- Standard structure: hero, services overview, why choose us, FAQ, CTA

**Standard set:** primary city + 6-8 surrounding cities/neighborhoods. For a Huntington Beach practice:
```
/locations/huntington-beach    (primary)
/locations/fountain-valley
/locations/costa-mesa
/locations/long-beach
/locations/newport-beach
/locations/seal-beach
/locations/garden-grove
/locations/westminster
```

---

## 6. SEO & Schema Implementation

### 6.1 — On-Page SEO (Every Page)

| Element | Implementation | Standard |
|---|---|---|
| Title tag | `<title>` in BaseLayout | 30-60 chars, keyword + practice name |
| Meta description | `<meta name="description">` | 120-160 chars, keyword + CTA |
| H1 | Single per page | Not duplicate of title, contains keyword |
| Canonical URL | Auto-generated from Astro URL path | Prevents duplicate content |
| Open Graph tags | `og:title`, `og:description`, `og:image`, `og:type` | For social sharing |
| Twitter Card | `twitter:card`, `twitter:title`, `twitter:description` | For Twitter/X sharing |
| Robots | `noindex` option in BaseLayout props | Used only for thank-you/referral pages |

### 6.2 — Schema Markup (JSON-LD)

Every page gets LocalBusiness + BreadcrumbList at minimum. Additional schemas per page type:

| Page Type | Schema Types |
|---|---|
| All pages | `LocalBusiness` (Dentist subtype), `BreadcrumbList` |
| Homepage | + `AggregateRating` (live from Google Reviews API) |
| About | + `Physician` (with alumni, affiliations, specialties) |
| Service pages | + `MedicalProcedure` (with specialty, body location) |
| FAQ pages | + `FAQPage` (auto-generated from FAQ arrays) |
| Blog posts | + `BlogPosting` (with author, date, keywords) |
| Appointment | + `ContactPoint` (availability hours) |

**Schema source:** `localBusinessSchema` exported from `src/config/site.ts`. Imported and spread on every page. Page-specific schemas defined in the page's frontmatter section.

### 6.3 — Technical SEO

| Element | Implementation |
|---|---|
| XML Sitemap | Auto-generated by `@astrojs/sitemap`, submitted to GSC |
| Robots.txt | Standard allow-all with sitemap reference |
| 301 Redirects | Configured for migration (old URL → new URL mapping) |
| Image optimization | All images converted to WebP (~150KB), lazy loaded |
| Page speed | Target 90+ PageSpeed (desktop), 85+ (mobile) |
| Core Web Vitals | All green (LCP, FID, CLS) |
| HTTPS | Automatic via Cloudflare Pages |
| Internal linking | Contextual links in content, nav structure, footer |

### 6.4 — AI/LLM SEO

Optimizations for appearing in AI-generated answers (ChatGPT, Google AI Overviews, Perplexity, Claude):

- Authoritative, factually rich content written to be cited
- Structured FAQs in the format AI models excerpt and surface
- Entity optimization — practice clearly defined as a local specialty entity
- Schema `sameAs` links connecting site to Google, Yelp, Healthgrades, Zocdoc profiles
- Unambiguous specialty signals: "prosthodontist" not just "dentist"
- Clear, definitive answer formatting in content (definition → explanation → evidence)

### 6.5 — Sitemap Configuration

Managed in `astro.config.mjs`:

| Page Category | Priority | Change Frequency |
|---|---|---|
| Homepage `/` | 1.0 | weekly |
| High-value pages (implants hubs, schedule, about) | 0.9 | weekly |
| Service sub-pages | 0.8 | monthly |
| Blog index | 0.7 | weekly |
| Blog posts | 0.6 | monthly |
| All other pages | 0.8 | monthly |

**Excluded from sitemap:** `/thank-you`, `/referral`

---

## 7. Google Business Profile Setup & Optimization

### 7.1 — Initial Setup

- [ ] Verify GBP listing is claimed and verified
- [ ] Set primary category: "Prosthodontist" (not "Dentist")
- [ ] Set secondary categories: "Dentist," "Cosmetic Dentist," "Dental Implants Provider"
- [ ] Verify NAP matches website exactly (name, address, phone)
- [ ] Add complete business description with keywords
- [ ] Set hours to match `site.ts` configuration
- [ ] Add all service categories with descriptions
- [ ] Upload 10-20 photos: exterior, interior, team, procedures, before/after
- [ ] Set up Q&A with pre-populated common questions
- [ ] Add website URL, appointment URL
- [ ] Verify service area if applicable

### 7.2 — Ongoing GBP Management (if retainer)

**Weekly:**
- Create GBP post (promotion, tip, update) using `gbp-post.js`
- Check for and respond to new reviews using `gbp-reviews.js` + `gbp-respond.js`
- Monitor and answer Q&A questions

**Monthly:**
- Upload new photos (if available)
- Review and update business description
- Check for competitor listing changes
- Verify NAP consistency

### 7.3 — GBP Automation Scripts

All scripts require OAuth credentials in `.env`:
```
GBP_CLIENT_ID=
GBP_CLIENT_SECRET=
GBP_REFRESH_TOKEN=
GBP_ACCOUNT_ID=
GBP_LOCATION_ID=
```

**Find location ID:** `node scripts/gbp-list-locations.js`

**Fetch reviews:** `node scripts/gbp-reviews.js --limit 10 --stars 4 --unanswered`

**Reply to review:** `node scripts/gbp-respond.js --review-id <id> --reply "Thank you..."`

**Create post:** `node scripts/gbp-post.js --text "..." --cta-type BOOK --cta-url https://site.com/schedule`

CTA types: `LEARN_MORE`, `CALL`, `SIGN_UP`, `ORDER`, `BUY`, `GET_OFFER`, `BOOK`

---

## 8. Forms, CAPTCHA & Lead Capture

### 8.1 — Appointment Request Form

**Location:** `src/pages/schedule.astro`
**Backend:** Formspree (static form handler — no server needed)
**Endpoint:** Set via `FORMSPREE_ENDPOINT` environment variable

**Form Fields:**

| Field | Type | Required | Options |
|---|---|---|---|
| First Name | text | Yes | — |
| Last Name | text | Yes | — |
| Phone | tel | Yes | — |
| Email | email | Yes | — |
| Procedure of Interest | select | No | Dental Implants, All-on-4/All-on-6, Veneers, Crowns, Dentures, Cosmetic Dentistry, General Dentistry, Clear Aligners, Other |
| Preferred Day | select | No | Monday-Saturday, No Preference |
| Preferred Time | select | No | Morning (9am-12pm), Afternoon (12pm-5pm), No Preference |
| How Did You Hear | select | No | Google Search, Google Maps, Referral from Doctor, Friend/Family, Social Media, Other |
| Additional Notes | textarea | No | — |
| CAPTCHA | Turnstile | Yes | Invisible to user |

**Submission flow:**
1. User fills form → CAPTCHA validates → POST to Formspree endpoint
2. Formspree sends email notification to practice inbox
3. User redirected to `/thank-you` page
4. Practice follows up manually (or via scheduling software)

### 8.2 — CAPTCHA (Cloudflare Turnstile)

- Sitekey set via `PUBLIC_TURNSTILE_SITE_KEY` (public env var)
- Verification handled by Formspree backend automatically
- Script loaded async: `https://challenges.cloudflare.com/turnstile/v0/api.js`
- Invisible to most users (no puzzle to solve)

### 8.3 — Formspree Setup

1. Create Formspree account (free tier: 50 submissions/month)
2. Create new form → get endpoint URL
3. Set `FORMSPREE_ENDPOINT` in `.env` and GitHub Secrets
4. Configure email notification to practice inbox
5. Optional: set up Formspree integrations (Slack, Google Sheets, Zapier)

### 8.4 — Referral Form

**Location:** `src/pages/referral.astro`
- Separate form for doctor-to-doctor referrals
- Excluded from sitemap (noindex)
- Same Formspree backend

---

## 9. Content System — Blog & Content Collections

### 9.1 — Astro Content Collections

Blog posts use Astro's built-in content management system with a defined schema in `src/content/config.ts`:

```typescript
schema: {
  title: string                    // Post title
  description: string (max 160)   // Meta description
  publishDate: date               // Publication date
  updatedDate?: date              // Last update date
  targetKeyword: string           // Primary SEO keyword
  category: enum [                // Content category
    'dental-implants', 'all-on-x', 'dentures',
    'cosmetic', 'prosthodontics'
  ]
  author: string                  // Defaults to practice name
  draft: boolean                  // Draft = hidden from listing
  featuredImage?: string          // Hero image path
  featuredImageAlt?: string       // Image alt text
  faqs?: [{question, answer}]     // Embedded FAQs (auto-schema)
}
```

### 9.2 — Creating a Blog Post

1. Create file: `src/content/blog/your-slug.md`
2. Add frontmatter:
```yaml
---
title: "Post Title Here"
description: "Meta description 120-160 chars with keyword and CTA."
publishDate: 2026-03-15
targetKeyword: "primary keyword phrase"
category: "dental-implants"
author: "Dr. Favian Cheong"
draft: false
faqs:
  - question: "Common question?"
    answer: "Detailed answer with keyword naturally included."
---
```
3. Write markdown content below frontmatter
4. Set `draft: false` when ready to publish
5. Commit and deploy — blog index auto-pulls and sorts by date

### 9.3 — Blog Content Strategy

**Post types that perform best for dental practices:**

| Type | Example | Target Intent |
|---|---|---|
| Cost guides | "How Much Do Dental Implants Cost in Huntington Beach?" | Commercial — ready to buy, comparing options |
| Treatment comparisons | "Veneers vs. Composite Bonding: Which Is Right for You?" | Informational → commercial |
| Procedure walkthroughs | "What to Expect During All-on-4 Surgery" | Informational — reducing anxiety, building trust |
| Specialist education | "What Is a Prosthodontist?" | Informational — establishing authority |
| Local intent | "Best Prosthodontist in Huntington Beach" | Local — capturing geo searches |
| Patient FAQs | "Are Veneers Permanent? What You Need to Know" | Informational — answering real patient questions |

**Current blog posts (5 published):**
1. `what-is-a-prosthodontist.md` — specialty education
2. `are-veneers-permanent.md` — FAQ/informational
3. `porcelain-veneers-cost-huntington-beach.md` — cost guide + local
4. `veneers-vs-composite-bonding.md` — comparison
5. `dentures-cost-huntington-beach.md` — cost guide + local

### 9.4 — Content Quality Standards

Every blog post should:
- [ ] Target a specific keyword (confirmed via keyword research)
- [ ] Have a meta description with keyword + CTA (120-160 chars)
- [ ] Include the target keyword in H1 and first 100 words
- [ ] Be 800-1,500 words for standard posts
- [ ] Include 4-8 embedded FAQs (generates FAQPage schema)
- [ ] Link to at least 2-3 related service pages (internal linking)
- [ ] Include a CTA at the end (appointment booking)
- [ ] Be factually accurate (medical content reviewed by doctor if possible)
- [ ] Use natural language (not keyword-stuffed)

---

## 10. Deployment & Infrastructure

### 10.1 — Architecture Overview

```
Customer's GitHub Repo (source code)
         │
         ▼
GitHub Actions (CI/CD on push to main)
         │
         ├── npm ci (install dependencies)
         ├── npm run build (Astro SSG → /dist)
         └── Deploy to Cloudflare Pages
                  │
                  ▼
        Cloudflare CDN (global edge)
                  │
                  ▼
         hbimplants.com (live site)
```

### 10.2 — GitHub Actions Workflow

**File:** `.github/workflows/deploy.yml`
**Trigger:** Push to `main` branch (or manual dispatch)

**Steps:**
1. Checkout code (`actions/checkout@v4`)
2. Setup Node.js v20 (`actions/setup-node@v4` with npm caching)
3. `npm ci` — install dependencies
4. `npm run build` — build static site with environment variables:
   - `SITE_URL`
   - `PUBLIC_GA4_MEASUREMENT_ID`
   - `PUBLIC_TURNSTILE_SITE_KEY`
   - `PUBLIC_TURNSTILE_SECRET_KEY`
   - `GOOGLE_PLACES_API_KEY`
   - `GOOGLE_PLACE_ID`
5. Deploy to Cloudflare Pages (`cloudflare/wrangler-action@v3`)
   - Command: `pages deploy dist --project-name=hbimplants`

**Required GitHub Secrets:**
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `PUBLIC_GA4_MEASUREMENT_ID`
- `PUBLIC_TURNSTILE_SITE_KEY`
- `PUBLIC_TURNSTILE_SECRET_KEY`
- `GOOGLE_PLACES_API_KEY`
- `GOOGLE_PLACE_ID`

**Deployment time:** ~2-3 minutes from push to live.

### 10.3 — Git Workflow

```bash
# Feature branch (required — direct push to main returns 403)
git checkout -b claude/<feature-name>-<id>

# Make changes, commit
git add <specific files>
git commit -m "feat: description of change"

# Push to remote
git push origin claude/<feature-name>-<id>

# Create PR on GitHub → merge → auto-deploys
```

### 10.4 — Environment Variables Reference

**Build-time (required for site build):**

| Variable | Purpose | Where Set |
|---|---|---|
| `PUBLIC_GA4_MEASUREMENT_ID` | GA4 tracking on all pages | GitHub Secrets + `.env` |
| `PUBLIC_TURNSTILE_SITE_KEY` | CAPTCHA on appointment form | GitHub Secrets + `.env` |
| `PUBLIC_TURNSTILE_SECRET_KEY` | CAPTCHA verification | GitHub Secrets + `.env` |
| `GOOGLE_PLACES_API_KEY` | Live Google reviews on homepage | GitHub Secrets + `.env` |
| `GOOGLE_PLACE_ID` | Identifies which GBP listing to pull reviews from | GitHub Secrets + `.env` |
| `FORMSPREE_ENDPOINT` | Appointment form submission endpoint | `.env` |
| `SITE_URL` | Canonical URLs and sitemap | GitHub Secrets |

**Script-time (required for CLI automation tools):**

| Variable | Purpose | Scripts |
|---|---|---|
| `GOOGLE_SERVICE_ACCOUNT_PATH` | Service account JSON for Google APIs | ga4-report, gsc-report |
| `GA4_PROPERTY_ID` | GA4 property (format: `properties/XXXXXXXXX`) | ga4-report |
| `GSC_SITE_URL` | Site URL in Search Console | gsc-report |
| `GBP_CLIENT_ID` | OAuth client for GBP API | gbp-* scripts |
| `GBP_CLIENT_SECRET` | OAuth secret for GBP API | gbp-* scripts |
| `GBP_REFRESH_TOKEN` | OAuth refresh token for GBP | gbp-* scripts |
| `GBP_ACCOUNT_ID` | GBP account identifier | gbp-* scripts |
| `GBP_LOCATION_ID` | GBP location identifier | gbp-* scripts |

### 10.5 — Cloudflare Pages Setup

1. Create Cloudflare account (in customer's name)
2. Create Pages project: `huntington-beach-prosthodontics` (or customer-specific name)
3. Connect to GitHub repository
4. Build settings: Framework = Astro, Build command = `npm run build`, Output directory = `dist`
5. Add environment variables in Cloudflare dashboard (same as GitHub Secrets)
6. Configure custom domain: add CNAME or use Cloudflare DNS
7. SSL/HTTPS: automatic, managed by Cloudflare

---

## 11. Migration From Existing Website

### 11.1 — What We Handle

- [ ] Full content export and review — identify what's worth keeping
- [ ] URL mapping — every old URL gets a 301 redirect so SEO value is preserved
- [ ] Domain / DNS cutover — zero downtime
- [ ] Google Analytics migration — historical data preserved, new GA4 property if needed
- [ ] Google Search Console re-verification and sitemap submission
- [ ] NAP consistency check across all directories

### 11.2 — What We Need From Customer

| Item | Why |
|---|---|
| Current hosting/CMS login | To export existing content |
| Domain registrar login | To manage DNS cutover |
| Vendor contract status | Exit terms or active contracts to be aware of |

### 11.3 — Migration Process (Backend)

**Phase 1: Content Audit (Days 1-3)**
1. Log into current site admin
2. Export all pages, blog posts, images
3. Identify content worth keeping vs. rewriting
4. Document all current URLs for redirect mapping
5. Screenshot current site for reference

**Phase 2: URL Mapping (Days 3-5)**
1. List every URL on current site (crawl or sitemap)
2. Map each to its equivalent on the new site
3. Identify URLs with no equivalent (will 301 to nearest match or homepage)
4. Create redirect rules

**Phase 3: DNS Preparation (Day 5)**
1. Document current DNS records (all A, CNAME, MX, TXT records)
2. Prepare new DNS records for Cloudflare
3. Verify MX records won't be disrupted (email must continue working)
4. Plan cutover timing (low-traffic period, ideally Friday evening)

**Phase 4: Cutover (Launch Day)**
1. Final build and deploy to Cloudflare Pages
2. Update DNS records at registrar (or transfer to Cloudflare)
3. Verify SSL certificate issued
4. Test all redirects
5. Submit new sitemap to Google Search Console
6. Verify GA4 tracking on new site
7. Update GBP website URL
8. Monitor for 404s in Search Console over next 48 hours

### 11.4 — Common Migration Sources

| Platform | Export Method | Typical Issues |
|---|---|---|
| PatientPop | Limited export; may need to scrape content | Proprietary CMS, limited access, vendor may resist |
| WordPress | Full export via WP admin (XML) or direct DB access | Plugin bloat, messy HTML in content |
| Wix | No native export; copy content manually or use API | No URL-level redirects (Wix controls them) |
| Squarespace | Export via admin panel | Limited redirect control |
| Dex Knows | Very limited; scrape content | Often vendor-locked, poor content quality |

**Timeline:** Most migrations complete within 2-4 weeks of receiving credentials.

---

## 12. Quality Assurance & Launch Checklist

### 12.1 — Pre-Launch QA Checklist

**Technical:**
- [ ] `npm run build` completes with zero errors
- [ ] PageSpeed score: 90+ desktop, 85+ mobile
- [ ] All Core Web Vitals green
- [ ] HTTPS working (Cloudflare auto-SSL)
- [ ] XML sitemap generating correctly at `/sitemap.xml`
- [ ] `robots.txt` present and correct
- [ ] No `noindex` on pages that should be indexed
- [ ] 301 redirects working (if migration)
- [ ] All forms submit successfully (test with real data)
- [ ] CAPTCHA functioning
- [ ] GA4 tracking verified (check network tab for gtag requests)
- [ ] Search Console verified and sitemap submitted
- [ ] No console errors in browser

**Content:**
- [ ] Every page has unique title tag (30-60 chars)
- [ ] Every page has unique meta description (120-160 chars)
- [ ] Every page has single H1
- [ ] No placeholder text remaining (search for `{{`, `lorem`, `TBD`, `TODO`)
- [ ] Phone number correct and clickable on mobile
- [ ] Address correct and links to Google Maps
- [ ] Email correct and links to mailto:
- [ ] Hours correct and match GBP
- [ ] Doctor bio reviewed and approved by customer
- [ ] Service descriptions reviewed and approved
- [ ] All images have alt text
- [ ] No broken internal links
- [ ] Footer links all working

**Schema:**
- [ ] LocalBusiness schema on every page (validate with Google Rich Results Test)
- [ ] BreadcrumbList schema on every page
- [ ] FAQPage schema on pages with FAQs
- [ ] MedicalProcedure schema on treatment pages
- [ ] Physician schema on about page
- [ ] AggregateRating schema on homepage (verify live data from Places API)

**Mobile:**
- [ ] Navigation works (hamburger menu, dropdowns)
- [ ] Forms usable on mobile (fields not cut off, keyboard appropriate)
- [ ] Images don't overflow
- [ ] Text readable without zooming
- [ ] CTAs tappable (44px minimum touch target)
- [ ] Phone number click-to-call working

**Cross-browser:**
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] iOS Safari
- [ ] Android Chrome

### 12.2 — Site Audit Script

Run the automated audit before launch:

```bash
# Against staging/preview URL
node scripts/site-audit.js --url https://preview-url.pages.dev --limit 50

# Checks per page:
# - Title tag present and correct length
# - Meta description present and correct length
# - H1 present, single, not duplicate of title
# - Canonical link present
# - JSON-LD schema present
# - Internal links count
# - Images with missing alt text
# - Page load time
# - noindex flag
```

### 12.3 — Customer Review Process

1. Deploy to Cloudflare Pages preview URL (automatic on PR)
2. Send preview link to customer with review instructions
3. Customer reviews: content accuracy, photos, contact info, general look/feel
4. Collect feedback in a single round (consolidate notes)
5. Implement changes
6. Second review if significant changes; otherwise proceed to launch

---

## 13. Post-Launch Handoff

### 13.1 — What the Customer Receives

| Asset | Location | Notes |
|---|---|---|
| Website source code | GitHub repository (their account) | Full ownership, can hand to any developer |
| Hosting | Cloudflare Pages (their account) | Free tier, auto-HTTPS, global CDN |
| Domain | Their registrar account (or Cloudflare) | They own it outright |
| Google Analytics 4 | Their Google account | Full historical data access |
| Google Search Console | Their Google account | Search performance data |
| Google Business Profile | Their Google account | Already existed or we set up |
| Formspree | Their account (or shared) | Contact form submissions |
| Automation scripts | In the GitHub repo (`/scripts/`) | CLI tools for reviews, posts, reports, audits |

### 13.2 — Handoff Documentation

Provide to customer:

1. **Account credentials summary** — what accounts were created/configured, where to log in
2. **How to make simple changes** — editing content, adding blog posts, updating hours
3. **How to add a blog post** — create `.md` file, add frontmatter, commit, auto-deploys
4. **How to run automation scripts** — review responses, GBP posts, analytics reports
5. **Support options** — growth services available, how to reach us for help
6. **Cost of ownership summary** — domain renewal only (~$12-15/year), everything else free

### 13.3 — Upsell Opportunities at Handoff

Natural transition points to suggest growth services:

- "Now that your site is live, the most impactful next step is consistent content. Our video-to-everything pipeline turns a 60-second phone recording into a month of content."
- "Your Google reviews are strong. We can set up automated monitoring and response management to keep it that way."
- "We can write 2-4 blog posts per month targeting the keywords where you're close to page 1 but not there yet."
- "A monthly maintenance retainer ensures nothing breaks and keeps your SEO compounding."

---

## 14. Ongoing Operations & Maintenance

### 14.1 — If Customer Self-Manages

Provide them with:
- How to update `src/config/site.ts` for practice info changes
- How to add blog posts via markdown
- How to use the automation scripts
- Recommend Claude Pro ($20/month) for AI-assisted code changes

### 14.2 — If on Maintenance Retainer

**Weekly:**
- [ ] Monitor form submissions (Formspree dashboard)
- [ ] Check for unanswered reviews: `node scripts/gbp-reviews.js --unanswered`
- [ ] Reply to new reviews: `node scripts/gbp-respond.js --review-id <id> --reply "..."`
- [ ] Create GBP post if content available

**Monthly:**
- [ ] Run site audit: `node scripts/site-audit.js --url https://site.com --limit 50`
- [ ] GA4 report: `node scripts/ga4-report.js --days 30`
- [ ] GSC report: `node scripts/gsc-report.js --days 30`
- [ ] Check for broken links, 404s
- [ ] Apply any dependency updates (Astro, Tailwind)
- [ ] Implement content updates from customer
- [ ] Check PageSpeed for regressions

**Quarterly:**
- [ ] Full content audit — review all service pages for accuracy
- [ ] FAQ review — add new questions based on patient feedback
- [ ] Image audit — ensure all images have alt text, optimize new additions
- [ ] Competitor check — review top 3 competitor sites for new features/content
- [ ] Keyword ranking review — identify gains and opportunities

**Annually:**
- [ ] Full SEO audit — schema validation, Core Web Vitals, ranking trends
- [ ] Review and refresh homepage copy
- [ ] Update doctor bio if new credentials/awards
- [ ] Review and update hours, insurance info, services offered
- [ ] Renew domain

---

## 15. Growth Services — Detailed Operations

### 15.1 — Video-to-Everything Content Pipeline

**What the customer does:**
1. We send them a monthly prompt (specific question to answer on camera)
2. They record a 60-90 second video on their phone
3. They send us the video file (text, email, or shared folder)

**Example prompts:**
- "What's the difference between a prosthodontist and a general dentist?"
- "Walk me through what happens on the day someone gets an implant placed."
- "What are the 3 biggest myths patients believe about All-on-4?"
- "How long do veneers actually last?"
- "What should patients look for when choosing an implant specialist?"

**What we produce from each video:**

| Deliverable | Details | Effort |
|---|---|---|
| Short-form video | Edited with captions for TikTok/Reels/Shorts (15-60 sec) | Edit + caption + export |
| Blog post | 800-1,200 words, keyword-optimized, FAQs embedded, internal links | Transcribe → expand → SEO optimize → publish |
| GBP post | 100-300 words with CTA, created via `gbp-post.js` | Write + post via script |
| Social caption | Platform-appropriate caption for Instagram/Facebook | Write + deliver |

**Backend workflow:**
1. Receive video → transcribe (AI-assisted or manual)
2. Research target keyword for blog post topic
3. Expand transcription into full blog post with proper structure
4. Create blog post markdown file with frontmatter, commit, deploy
5. Edit video for short-form: trim, add captions, brand overlay
6. Export for each platform (9:16 for Reels/TikTok/Shorts)
7. Write GBP post, publish via `gbp-post.js`
8. Write social caption, deliver to customer (or post if we have access)

**Pricing model:** Monthly retainer based on volume (1-4 videos/month).

### 15.2 — Blog Content (Without Video)

**What the customer does:** Nothing. We research, write, and publish.

**Backend workflow:**
1. Monthly keyword research — identify highest-opportunity topics based on:
   - GSC data (`node scripts/gsc-report.js`) — high impressions, low CTR
   - Competitor content gaps
   - Seasonal trends
   - Customer's priority services
2. Write 800-1,500 word post:
   - Target keyword in title, H1, first 100 words
   - Structured with H2/H3 hierarchy
   - 4-8 embedded FAQs
   - Internal links to 2-3 service pages
   - CTA at bottom
3. Create markdown file in `src/content/blog/`
4. Commit and deploy
5. Share live URL with customer

**Content types by priority:**
1. Cost guides (highest commercial intent)
2. Treatment comparisons (decision-stage)
3. Procedure walkthroughs (trust-building)
4. Local intent posts (geo-targeting)
5. Patient education (authority-building)

**Pricing model:** Per-post rate or monthly package (typically 1-4 posts/month).

### 15.3 — Backlink Building & Digital Lead Generation

**What the customer does:** Provide their credentials/bio for directory submissions. Approve outreach content.

**Backend workflow:**

**Tier 1 — Directory Submissions (Low effort, high value):**
- Dental/medical directories: Healthgrades, Zocdoc, WebMD, RealSelf, Vitals
- Local directories: Chamber of Commerce, BBB, city business directories
- Professional directories: ACP, ADA, CDA member profiles
- Insurance directories: if applicable

**Tier 2 — Content-Based Link Building (Medium effort):**
- Guest article pitching to dental/health publications
- HARO (Help a Reporter Out) / journalist sourcing — respond to dental/health queries
- Unlinked mention outreach — find mentions of the practice without links, request link

**Tier 3 — Competitive Analysis (Ongoing):**
- Competitor backlink gap analysis — find sites linking to competitors but not to us
- Identify link opportunities from competitor profiles
- Monitor new competitor links monthly

**Pricing model:** Monthly retainer or one-time package.

### 15.4 — Site Maintenance & Management

See [Section 14.2](#142--if-on-maintenance-retainer) for the full operational checklist.

**What the customer does:** Send content updates as needed (new photos, hours changes, new services). We handle everything else.

**Pricing model:** Monthly retainer based on scope.

### 15.5 — Email Newsletter

**What the customer does:** Approve monthly newsletter content before send.

**Setup (one-time):**
1. Create Mailchimp or Klaviyo account (in customer's name)
2. Design branded email template matching website
3. Set up patient welcome sequence (3-email series):
   - Email 1: Welcome + what to expect at first visit
   - Email 2: Services overview + featured procedure
   - Email 3: Review request + referral offer
4. Add email capture to website footer or dedicated page
5. Import existing patient email list (if available, with consent)

**Monthly operation:**
1. Draft newsletter content:
   - Latest blog post summary + link
   - Practice news or seasonal update
   - Featured service or promotion
   - Patient testimonial or case highlight
2. Send draft to customer for approval
3. Schedule and send via email platform
4. Report: open rate, click rate, unsubscribes

**Pricing model:** One-time setup + optional monthly management retainer.

---

## 16. Tools, Accounts & Cost of Ownership

### 16.1 — Accounts We Create/Configure (Customer-Owned)

| Account | Purpose | Cost | Who Owns |
|---|---|---|---|
| GitHub | Website source code repository | Free | Customer |
| Cloudflare | Website hosting (Pages) + DNS + SSL | Free | Customer |
| Domain registrar | Domain name registration | ~$12-15/year | Customer |
| Google Analytics 4 | Website traffic and conversion tracking | Free | Customer |
| Google Search Console | Search performance and indexing | Free | Customer |
| Formspree | Contact form submissions | Free (50/mo) or $10/mo | Customer |
| Google Business Profile | Local search presence | Free | Customer |

**Total minimum ongoing cost: ~$12-15/year (domain only).**

### 16.2 — Accounts We Use (Operator-Owned)

| Tool | Purpose | Cost |
|---|---|---|
| Claude Pro / Claude Code | AI-assisted development and content | ~$20/month |
| GitHub (our account) | Development workflow, PRs | Free |
| Google Cloud Console | Service account for API access (GA4, GSC, GBP) | Free tier |
| Video editing software | Short-form video production (if offering content pipeline) | Varies |

### 16.3 — Technology Stack Costs

| Technology | Role | Cost |
|---|---|---|
| Astro v5 | Static site generator | Free (open source) |
| Tailwind CSS | Styling framework | Free (open source) |
| Node.js | Runtime for build and scripts | Free (open source) |
| Cloudflare Pages | Hosting + CDN + SSL | Free |
| Cloudflare Turnstile | CAPTCHA for forms | Free |
| Formspree | Form backend | Free tier (50 submissions/month) |
| Google APIs | Analytics, Search Console, Business Profile, Places | Free tier |

### 16.4 — Customer Cost Summary *[Customer-Facing]*

| Service | Cost | Notes |
|---|---|---|
| Domain renewal | ~$12-15/year | You own it outright |
| Cloudflare Pages hosting | Free | Free tier more than sufficient |
| GitHub | Free | Source code repository |
| Formspree (contact forms) | Free / $10/month | Free up to 50 submissions/month |
| Google Analytics | Free | — |
| Claude Pro (AI-assisted edits) | ~$20/month | Optional — only if making changes yourself |
| **Total minimum ongoing** | **~$12-15/year** | **Domain only** |

> You own your GitHub repo, your Cloudflare account, your domain, and your Google accounts. If you ever want to switch developers or agencies, everything transfers instantly — no lock-in, ever.

---

## 17. Automation Scripts — Operator Reference

All scripts live in `/scripts/` and run via Node.js CLI. They require environment variables in `.env`.

### 17.1 — Google Analytics Report

```bash
node scripts/ga4-report.js --days 28 --limit 20
```

**Output:** Sessions, users, new users, conversions, bounce rate, avg session duration. Top pages by sessions. Traffic by channel. Sessions by device.

**Setup required:**
1. Enable Google Analytics Data API in Google Cloud Console
2. Create service account with Viewer access to GA4 property
3. Download JSON credentials → set `GOOGLE_SERVICE_ACCOUNT_PATH`
4. Set `GA4_PROPERTY_ID` (format: `properties/XXXXXXXXX`)

### 17.2 — Google Search Console Report

```bash
node scripts/gsc-report.js --days 28 --limit 25
```

**Output:** Top queries (clicks, impressions, CTR, avg position). Top pages (same metrics). Total summary.

**Setup required:**
1. Enable Search Console API in Google Cloud Console
2. Add service account as user in GSC (Verified owner or Read access)
3. Set `GSC_SITE_URL`

### 17.3 — GBP Reviews

```bash
# All reviews
node scripts/gbp-reviews.js --limit 10

# Only 4+ stars
node scripts/gbp-reviews.js --stars 4

# Only unanswered
node scripts/gbp-reviews.js --unanswered

# Combined
node scripts/gbp-reviews.js --limit 20 --stars 4 --unanswered
```

**Output:** Reviewer name, date, rating, comment, reply (if exists). Stats: total count, avg rating, unanswered count.

### 17.4 — GBP Review Response

```bash
node scripts/gbp-respond.js --review-id <reviewId> --reply "Thank you for the kind words!"
```

**Workflow:** Run `gbp-reviews.js --unanswered` → get review IDs → craft reply → run `gbp-respond.js`.

**Validation:** Max 4,096 characters per reply.

### 17.5 — GBP Post

```bash
node scripts/gbp-post.js --text "Special offer this month!" --cta-type BOOK --cta-url https://hbimplants.com/schedule
```

**CTA types:** `LEARN_MORE`, `CALL`, `SIGN_UP`, `ORDER`, `BUY`, `GET_OFFER`, `BOOK`

### 17.6 — GBP Location Finder

```bash
node scripts/gbp-list-locations.js
```

**Purpose:** One-time setup helper to find `GBP_LOCATION_ID` for `.env`.

### 17.7 — Site Audit

```bash
# Live site
node scripts/site-audit.js --url https://hbimplants.com --limit 50

# Local dev
node scripts/site-audit.js --url http://localhost:4321 --limit 50
```

**Checks per page:** Title tag (length), meta description (length), H1 (present, single), canonical link, JSON-LD schema, internal links count, images missing alt text, page load time, noindex flag.

### 17.8 — Shared OAuth Library

`scripts/lib/gbp-auth.js` provides:
- `getAccessToken()` — generates access token from refresh token
- `getLocationName()` — builds location resource path
- `gbpFetch(url, token, options)` — authenticated API request

Used internally by all `gbp-*.js` scripts.

---

## 18. Customer Communication Templates

### 18.1 — Kickoff Email

> Subject: Your Website Build — Let's Get Started
>
> Hi [Name],
>
> Excited to get started on your new website. Attached is the intake document — it covers everything we'll need, but don't stress about completeness. The only must-haves right now are your practice basics (name, address, phone, hours).
>
> For everything else, bullet points and rough notes are totally fine. We'll turn them into polished copy for your review.
>
> **Next steps:**
> 1. Fill out what you can in the intake doc and send it back
> 2. Share any photos you have (phone photos work fine for now)
> 3. We'll schedule a brief kickoff call once we have your materials
>
> Timeline: 6-8 weeks from intake to live site.
>
> Let me know if any questions come up.

### 18.2 — Content Review Request

> Subject: Your Website — Ready for Review
>
> Hi [Name],
>
> Your site is built and ready for your review. Here's the preview link:
>
> [Preview URL]
>
> Please check:
> - Is all the contact info correct? (phone, address, hours, email)
> - Does the doctor bio read well? Anything to add or change?
> - Do the service descriptions accurately represent what you offer?
> - Any photos you'd like to swap or add?
> - General look and feel — does it match what you're going for?
>
> Don't worry about being too detailed — just flag anything that feels off and we'll fix it. One round of consolidated feedback is ideal.
>
> We'll implement your changes and move toward launch once you're happy with it.

### 18.3 — Launch Notification

> Subject: Your New Website Is Live
>
> Hi [Name],
>
> Your new website is live at [URL]. Here's what's been set up:
>
> - Website deployed and serving globally via Cloudflare CDN
> - Google Analytics tracking active
> - Google Search Console verified and sitemap submitted
> - Google Business Profile updated with new website URL
> - Contact form active — submissions go to [email]
>
> **What you own:**
> - GitHub repo: [link] (your website's source code)
> - Cloudflare account: [login details]
> - Domain: registered in your name
> - All Google accounts: yours
>
> **Ongoing cost: ~$12-15/year** (domain renewal only). Everything else is free.
>
> **Optional next steps:**
> - Monthly blog content to build organic traffic
> - Video-to-everything content pipeline (record 60 seconds, get a month of content)
> - GBP management (review responses, weekly posts)
>
> Congratulations on the new site. Let me know if anything comes up.

### 18.4 — Monthly Report (If on Retainer)

> Subject: Monthly Website Report — [Month Year]
>
> Hi [Name],
>
> Here's your monthly website performance summary:
>
> **Traffic:**
> - Sessions: [X] ([+/-X% vs last month])
> - New users: [X]
> - Top pages: [list top 3]
>
> **Search Performance:**
> - Google impressions: [X]
> - Clicks from search: [X]
> - Top queries: [list top 3]
>
> **Google Reviews:**
> - New reviews this month: [X]
> - Current rating: [X] ([X] total reviews)
> - All reviews responded to: [Yes/No]
>
> **Work Completed:**
> - [Blog post published: "Title"]
> - [GBP posts: X published]
> - [Site updates: list any]
> - [Technical: dependency updates, broken link fixes, etc.]
>
> **Recommendations for next month:**
> - [Specific action items]
>
> Let me know if you have any questions.

---

## 19. Timeline — Week-by-Week Delivery

### Standard Timeline: 6-8 Weeks

| Period | Phase | Customer Action | Operator Action |
|---|---|---|---|
| **Week 1** | Intake & Kickoff | Submit intake document, share credentials | Review intake, schedule kickoff call, clarify gaps |
| **Week 2** | Account Setup & Content Gathering | Provide any additional photos/info requested | Set up GitHub, Cloudflare, GA4, GSC, GBP. Process images. Begin content drafts. |
| **Week 3** | Content & Architecture | Review content drafts (bios, service descriptions) | Write all page copy. Define page architecture. Configure site.ts and navigation.ts. Build design system. |
| **Week 4** | Development | — | Build all pages. Implement components. Set up forms, CAPTCHA, blog system. |
| **Week 5** | Development & Internal QA | — | Complete all pages. Run site audit. Fix issues. PageSpeed optimization. Schema validation. |
| **Week 6** | Customer Review | Review preview site, provide consolidated feedback | Deploy to preview URL. Send review request. |
| **Week 7** | Revisions & Final QA | Review revisions, give final approval | Implement feedback. Final QA checklist. Migration prep (if applicable). |
| **Week 8** | Launch | Confirm go-live | DNS cutover. GSC sitemap submission. GBP update. Post-launch monitoring. Handoff documentation. |

### Accelerated Timeline (4-5 Weeks)

Possible when:
- Customer provides complete intake on Day 1
- Content is mostly ready (bios written, photos available)
- No migration needed (new site, not replacing existing)
- Minimal revision rounds

### Extended Timeline (8-10 Weeks)

Expected when:
- Complex migration from PatientPop/vendor-locked platform
- Customer slow to respond to review requests
- Multiple revision rounds needed
- Extended content creation (case studies, extensive blog backlog)
- Logo design needed

---

## 20. Scaling & Capacity Planning

### 20.1 — What Breaks at Scale

| Clients | Bottleneck | Solution |
|---|---|---|
| 1-3 | Nothing — single operator handles everything | — |
| 4-7 | Content writing becomes the bottleneck | Template content library (per procedure type), AI-assisted drafting, style guide for consistency |
| 8-12 | Project management overhead | Standardized intake → build pipeline, project tracking (Notion/Linear), templated communication |
| 12-20 | Development capacity | Astro component library becomes a "starter kit" — clone, customize config, build faster. Consider subcontracting development. |
| 20+ | Everything | Need dedicated roles: developer, content writer, account manager. Systemize everything. |

### 20.2 — What to Templatize First

1. **Site config** — `site.ts` and `navigation.ts` become a fill-in-the-blanks template
2. **Design tokens** — 3-4 preset color palettes to choose from (vs. custom every time)
3. **Page copy** — baseline service page copy per procedure type (customize 20-30%, not 100%)
4. **FAQ content** — standard FAQ sets per service category
5. **Schema** — already templatized via `localBusinessSchema` pattern
6. **Blog posts** — standard post templates per content type (cost guide, comparison, walkthrough)
7. **Communication** — email templates for every customer touchpoint (already in Section 18)

### 20.3 — What to Outsource vs. Keep In-House

| Task | Keep In-House | Outsource |
|---|---|---|
| Customer discovery/sales | Always | Never |
| Site architecture & config | Always | Never |
| SEO strategy & keyword research | Always | Never |
| Content writing | Initially, then consider writers | Freelance dental content writers |
| Development (page building) | Initially | Junior developers once templates exist |
| Photo processing | Initially | VA or batch processing tool |
| Video editing | If offering content pipeline | Freelance video editors |
| GBP management | Can do either | VA with scripts and templates |
| Backlink outreach | Initially | VA or link building service |

### 20.4 — Revenue Projections by Client Count

| Clients | One-Time Revenue | Monthly Recurring (if 50% on retainer) | Annual Recurring |
|---|---|---|---|
| 5 | 5 x build fee | ~2-3 retainers | 2-3 x retainer x 12 |
| 10 | 10 x build fee | ~5-6 retainers | 5-6 x retainer x 12 |
| 20 | 20 x build fee | ~10-12 retainers | 10-12 x retainer x 12 |

The business model compounds: one-time builds fund operations, retainers build recurring revenue. At 10+ clients with 50%+ on retainers, recurring revenue should sustain operations independent of new builds.

---

## Appendix A — File Structure Reference

```
hbimplants/
├── .github/workflows/deploy.yml     # CI/CD pipeline
├── .env.example                     # Environment variables reference
├── astro.config.mjs                 # Astro configuration (sitemap, tailwind)
├── tailwind.config.mjs              # Design tokens (colors, fonts, spacing)
├── tsconfig.json                    # TypeScript config
├── package.json                     # Dependencies and scripts
│
├── src/
│   ├── config/
│   │   ├── site.ts                  # Practice info, NAP, schema (single source of truth)
│   │   └── navigation.ts           # Nav menu structure
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro        # Master template (SEO, GA4, schema, header/footer)
│   │
│   ├── components/
│   │   ├── Header.astro            # Desktop + mobile navigation
│   │   ├── Footer.astro            # NAP, links, review CTA
│   │   ├── CTABlock.astro          # Reusable CTA (dark/light/white variants)
│   │   ├── FAQBlock.astro          # Accordion FAQ with auto-schema
│   │   ├── GalleryGrid.astro       # Filterable gallery with lightbox
│   │   └── BeforeAfter.astro       # Before/after photo cards
│   │
│   ├── styles/
│   │   └── global.css              # Tailwind utilities (buttons, headings, cards, prose)
│   │
│   ├── content/
│   │   ├── config.ts               # Blog collection schema
│   │   └── blog/                   # Markdown blog posts
│   │       ├── what-is-a-prosthodontist.md
│   │       ├── are-veneers-permanent.md
│   │       └── ...
│   │
│   └── pages/                      # All 48 pages (see Section 5.4)
│       ├── index.astro
│       ├── about.astro
│       ├── schedule.astro
│       ├── dental-implants/
│       ├── all-on-x/
│       ├── veneers/
│       ├── cosmetic-dentistry/
│       ├── restorative-dentistry/
│       ├── dentures/
│       ├── implant-restorations/
│       ├── general-dentistry/
│       ├── clear-aligners/
│       ├── locations/
│       └── blog/
│
├── public/
│   └── images/
│       ├── branding/               # Logo, favicon, OG images
│       ├── team/                   # Doctor/staff photos (WebP)
│       ├── heroes/                 # Hero backgrounds (WebP)
│       └── gallery/                # Before/after + procedure photos (WebP)
│
├── scripts/
│   ├── lib/gbp-auth.js            # Shared GBP OAuth utilities
│   ├── ga4-report.js              # GA4 analytics report
│   ├── gsc-report.js              # Google Search Console report
│   ├── gbp-reviews.js             # Fetch GBP reviews
│   ├── gbp-respond.js             # Reply to GBP reviews
│   ├── gbp-post.js                # Create GBP posts
│   ├── gbp-list-locations.js      # List GBP locations (setup helper)
│   └── site-audit.js              # SEO site audit crawler
│
└── marketing/
    ├── playbook.md                 # This document
    └── Dental-Practice-Website-Build-Intake.html  # Customer-facing intake doc
```

---

## Appendix B — Glossary

| Term | Definition |
|---|---|
| **Astro** | Static site generator that produces pure HTML with zero JavaScript by default |
| **Cloudflare Pages** | Free static site hosting with global CDN and automatic HTTPS |
| **Content Collection** | Astro's built-in system for managing typed content (blog posts) with frontmatter schemas |
| **Core Web Vitals** | Google's page experience metrics: LCP (loading), FID (interactivity), CLS (visual stability) |
| **Formspree** | Third-party form backend that receives form submissions and sends email notifications |
| **GBP** | Google Business Profile — the listing that appears in Google Maps and local search |
| **JSON-LD** | Structured data format embedded in HTML that helps search engines understand page content |
| **NAP** | Name, Address, Phone — must be consistent across website and all directories |
| **PageSpeed** | Google's tool for measuring page load performance (score 0-100) |
| **Schema** | Structured data markup (LocalBusiness, FAQPage, MedicalProcedure, etc.) |
| **SSG** | Static Site Generation — pages built at compile time, served as plain HTML |
| **Tailwind** | Utility-first CSS framework where styling is done with class names |
| **Turnstile** | Cloudflare's CAPTCHA alternative — invisible bot protection for forms |
| **WebP** | Modern image format with superior compression (10-50x smaller than PNG) |
