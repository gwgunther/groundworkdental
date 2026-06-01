# Groundwork Dental — Design System

## Colors

### Brand Palette

| Token | Hex | Usage |
|---|---|---|
| `brand-warm` | `#5F7F6B` | Primary accent — buttons, icons, eyebrow tints, links |
| `brand-warm-dark` | `#4A6B55` | Hover state for brand-warm |
| `brand-cream` | `#F8F8F3` | Section backgrounds for emphasis moments |
| `brand-sage` | `#5F7F6B` | Same as brand-warm (alias) |
| `brand-sage-light` | `#EBF0EC` | Light tint for status badges |

### Neutrals

| Token | Hex | Usage |
|---|---|---|
| `charcoal` | `#334155` | Body text, headings, dark UI elements |
| `mid-gray` | `#64748B` | Secondary text, descriptions, captions |
| `border-light` | `#E0DDD5` | Card borders, dividers, input borders |

### Surfaces

| Token | Hex | Usage |
|---|---|---|
| `surface-1` / white | `#FFFFFF` | Default page background |
| `surface-2` | `#F8F8F3` | Card backgrounds, subtle section tints |
| `brand-cream` | `#F8F8F3` | Emphasis section backgrounds (same value as surface-2) |

### Section Background System

- **White** — default sections
- **`bg-brand-cream`** — emphasis moments (hero, Why Groundwork, What You Get, $12/year callout)
- **`bg-surface-2`** — secondary sections (AI search callout, FAQ backgrounds)
- **`bg-charcoal`** — reserved for the Ownership Guarantee section only

---

## Typography

### Fonts

| Role | Family | Weights | Source |
|---|---|---|---|
| Serif (body, headings) | Georgia | Regular | System |
| Sans (labels, nav, buttons) | Figtree | 400, 500, 600 | Google Fonts |
| Mono (numbers, code) | JetBrains Mono → Fira Code | Regular | System fallback |

**Rule:** Georgia for all reading text. Figtree for UI chrome (nav, buttons, eyebrows, labels). Monospace for pricing numbers only.

### Type Scale

| Class | Size | Weight | Usage |
|---|---|---|---|
| `.eyebrow` | 10px, tracking 0.14em, uppercase | Medium | Section labels above headings — use sparingly |
| `.section-heading` | 4xl / 5xl (responsive) | Normal | H1 on page heroes |
| `.section-subheading` | 2xl / 3xl (responsive) | Normal | H2 within sections |
| `.prose-article` | Base, relaxed leading | Normal | Long-form body text (About, blog) |
| `.nav-link` | 12px, tracking-widest, uppercase | Medium | Navigation items |

### Prose Hierarchy (`.prose-article`)

- `h2` — 2xl/3xl, mt-12, used to break long-form content into named sections
- `h3` — xl, mt-8, supporting sub-sections
- `p` — mb-5 spacing between paragraphs
- `blockquote` — top-bordered, brand-warm tint background, used for callout quotes
- `strong` — charcoal, semibold

---

## Components

### Buttons

| Class | Background | Text | Use |
|---|---|---|---|
| `.btn-primary` | `brand-warm` | White | Primary CTA |
| `.btn-secondary` | White | Charcoal | Secondary CTA, outlined |
| `.btn-dark` | Charcoal | White | CTAs on light backgrounds where primary would clash |

All buttons: `font-sans`, `text-sm`, `tracking-wide`, `rounded`, `px-6 py-3`.

### Cards (`.card`)

```
rounded p-6 border bg-surface-2 border-border-light
```

Used for feature cards, pricing line items, FAQ answer cards, comparison tables. Override padding to `p-8` for featured/larger cards.

### Eyebrow

```
font-sans uppercase text-neutral-400 font-medium
font-size: 10px; letter-spacing: 0.14em;
```

Tint variants: `text-brand-warm` (warm sections), `text-neutral-400` (default), `text-neutral-200` (on dark/charcoal backgrounds).

### Form Elements

- `.form-input` — serif text, white bg, border-light border, brand-warm focus ring
- `.form-label` — 11px, uppercase, tracking, sans
- `.form-textarea` — extends form-input, min-h-[120px], resize-y

### Status Badges

- `.status-badge-complete` — sage-light bg, brand-warm text
- `.status-badge-progress` — amber-50 bg, amber-700 text
- `.status-badge-pending` — neutral-100 bg, mid-gray text

---

## Layout

- **Max width:** `max-w-6xl` for full-width sections, `max-w-3xl` for prose/centered content
- **Page padding:** `px-4 sm:px-6 lg:px-8`
- **Section vertical padding:** `py-10` standard, `py-10 md:py-16` for hero/emphasis sections
- **Section dividers:** `border-b border-border-light` on bg-brand-cream sections

### Section Alignment

- **Left-aligned prose** — hero, editorial sections, callout copy on any background. Use `max-w-3xl` without `text-center`.
- **Centered** — reserved for: step/process grids (How It Works), comparison and FAQ section headings, CTA blocks, and **pricing focal blocks** (headline + price card on homepage).
- **Full width** — card grids, comparison tables, data-dense layouts within `max-w-6xl`.

---

## Spacing Conventions

- Section gaps: `gap-6` standard, `gap-12 lg:gap-20` for two-column editorial layouts
- Card grids: `gap-4` for uniform grids, `gap-6` for featured rows
- Eyebrow → heading gap: `mb-4` to `mb-6`
- Heading → body gap: `mb-4` to `mb-6`

---

## Icons

SVG inline only. No icon library. Use `w-5 h-5` for inline icons, `text-brand-warm` for accent icons (checkmarks, etc.), `flex-shrink-0 mt-1` when used alongside text in flex rows.

---

## Notes

- **No stock photos.** Real screenshots, PageSpeed scores, founder photos only.
- **Not dental blue.** Palette is warm and muted — sage green, cream, slate charcoal.
- CLAUDE.md contains outdated color/font references (`#1A1A1A`, `#C45D3E`, "DM Sans") — this file is the source of truth for design.
