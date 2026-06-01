# Applying Groundwork Design System v2

How to migrate the codebase from the v1 tokens to v2. Pairs with **`DESIGN.md`** (the spec).
Nothing here changes the *look* of the site except one deliberate item (primary-button color — see Part C). Everything else is a rename / dedupe.

**Order matters.** Do Part A → B → C → D in sequence. Back up / branch first.

---

## Part A — Drop-in file replacements

Replace the entire contents of two files. (Identical copies also live in `migrated/` if you'd rather copy the files directly.)

### A1. `tailwind.config.mjs`

```js
/** @type {import('tailwindcss').Config} */
// Groundwork Dental — design tokens, v2. One value per name. See DESIGN.md.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand
        sage: {
          DEFAULT: '#5F7F6B', // non-text accent: icons, large numerals, progress, table highlight
          dark:    '#4A6B55', // sage text & links on light; primary button fill
          darker:  '#3D5A48', // primary button hover only
          tint:    '#EBF0EC', // soft fills / washes
        },
        // Neutrals
        charcoal:       '#334155',
        'mid-gray':     '#64748B',
        'border-light': '#E0DDD5',
        // Surfaces (surface-warm dropped)
        surface: { 1: '#FFFFFF', 2: '#F8F8F3' },
        // Text on dark
        'on-dark':       '#E7EBF0',
        'on-dark-muted': '#AAB4C2',
        // Semantic (AA on their own bg)
        success: { DEFAULT: '#4A6B55', bg: '#EBF0EC' },
        warning: { DEFAULT: '#92400E', bg: '#FCF4E8' },
        pending: { DEFAULT: '#475569', bg: '#F1F0EB' },
        danger:  { DEFAULT: '#B42318', bg: '#FDF0EE' },
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans:  ['Figtree', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono:  ['ui-monospace', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        eyebrow: ['11px', { lineHeight: '1.4', letterSpacing: '0.14em' }],
        label:   ['11px', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      transitionDuration: { DEFAULT: '200ms' },
    },
  },
};
```

### A2. `src/styles/global.css`

Replace the `@layer components { … }` block (and keep your `@layer base`) with the version in **`migrated/global.css`**. The meaningful diffs vs v1:

- `.btn-primary` → `bg-sage-dark … hover:bg-sage-darker` (was `bg-brand-warm … hover:bg-brand-warm-dark`).
- `.btn-secondary` border → `border-border-light` (was `border-neutral-300`).
- All `:disabled` buttons → `opacity-50 cursor-not-allowed`.
- `.eyebrow` → `text-mid-gray`, `font-size: 11px` (was `text-neutral-400`, `10px`).
- focus rings / `.form-input` / `.upload-zone` / blockquote → `sage*` (was `brand-warm*`).
- Status badges → semantic tokens, plus a new `.status-badge-error { @apply status-badge bg-danger-bg text-danger; }`.
- New `.card-hairline { @apply border-y border-border-light py-6; }`.

> **Font loading:** no change needed in `BaseLayout.astro`. You only ever loaded Figtree, and that stays. The mono token is now a system stack, so there's nothing new to import.

---

## Part B — Bulk find-replace across markup

Run these across `src/**` (`.astro`, `.ts`, `.tsx`). **Apply in this exact top-to-bottom order** — the compound names must go before the short ones.

| # | Find | Replace | Why |
|---|---|---|---|
| 1 | `hover:text-brand-warm-dark` | `hover:text-sage-dark` | link hover stays #4A6B55 |
| 2 | `text-brand-warm-dark` | `text-sage-dark` | |
| 3 | `bg-brand-warm-dark` | `bg-sage-darker` | button hover deepens (see C) |
| 4 | `border-brand-warm-dark` | `border-sage-dark` | |
| 5 | `text-brand-warm` | `text-sage-dark` | links/eyebrows need AA on light |
| 6 | `bg-brand-warm/` | `bg-sage/` | washes (e.g. `/5`, `/10`) |
| 7 | `border-brand-warm/` | `border-sage/` | borders (e.g. `/20`, `/40`) |
| 8 | `hover:border-brand-warm/` | `hover:border-sage/` | |
| 9 | `ring-brand-warm` | `ring-sage` | focus rings |
| 10 | `decoration-brand-warm` | `decoration-sage` | active-nav underline |
| 11 | `accent-brand-warm` | `accent-sage` | checkboxes |
| 12 | `bg-brand-warm` | `bg-sage-dark` | **inline button fills** (see C) |
| 13 | `text-brand-sage` | `text-sage` | wordmark "dental", check icons |
| 14 | `bg-brand-sage-light` | `bg-sage-tint` | |
| 15 | `brand-sage-light` | `sage-tint` | any stragglers |
| 16 | `bg-brand-cream` | `bg-surface-2` | emphasis sections |
| 17 | `brand-cream` | `surface-2` | layout body classes |
| 18 | `bg-surface-warm` | `bg-surface-2` | dropped token |
| 19 | `surface-warm` | `surface-2` | any stragglers |

After these, search for any remaining `brand-warm`, `brand-sage`, `brand-cream`, `surface-warm`, `neutral-light`, `neutral-dark`, `neutral-mid`, `neutral-border` and resolve by hand — there should be none.

**Ripgrep to confirm you're done:**

```bash
rg "brand-warm|brand-sage|brand-cream|surface-warm|neutral-(light|dark|mid|border)" src/
```

---

## Part C — Hand-check list (contrast-sensitive, do not blind-replace)

These need eyes, because a mechanical replace gets the value wrong.

### C1. The one visible change — primary buttons go a shade deeper
Resting primary fill moves `#5F7F6B → #4A6B55` for AA (white text was 4.4:1, now 5.95:1). This is handled by:
- `.btn-primary` in `global.css` (done in Part A), and
- inline button fills (replace #12 above) in **`PricingTable.astro`** (highlighted tier CTA) and **`CTABlock.astro`** (`dark` + `light` variants).

Confirm those two inline buttons read `bg-sage-dark … hover:bg-sage-darker`.

> **If you'd rather keep the original lighter green:** set `.btn-primary` back to `bg-sage hover:bg-sage-dark` and the inline buttons to `bg-sage`. You'll be at 4.4:1 (under AA) — a known, common tradeoff. Your call; the rest of v2 is unaffected.

### C2. CTABlock `warm` variant
The `warm` variant background should stay the brighter `sage` (it's a large fill with white text, 3:1 territory — fine). After Part B it may have become `bg-sage-dark`. Set the `warm.bg` back to **`bg-sage`**. (Only the `warm` variant; `dark` and `light` keep `bg-sage-dark` button fills.)

### C3. Dark-surface text → new tokens
In **`Footer.astro`** and **`PricingTable.astro`** (highlighted tier), swap the ad-hoc greys:
- `text-neutral-200` → `text-on-dark`
- `text-neutral-300` → `text-on-dark-muted`
- `border-neutral-700/800` (footer/tier hairlines) → keep, or `border-[#475569]` to match.

### C4. ComparisonTable + intake heads
- `ComparisonTable.astro`: column heads use `text-neutral-400` → change to **`text-mid-gray`** (the v1 eyebrow-contrast issue).
- Any other `text-neutral-400` used as a *label/eyebrow* → `text-mid-gray`. (Leave `text-neutral-400` where it's a true placeholder/disabled tint, e.g. `.form-input::placeholder`.)

### C5. AutoSaveIndicator.tsx → semantic tokens
```
saved:   text-brand-warm  → text-success
saving:  text-mid-gray    → (unchanged)
unsaved: text-amber-600   → text-warning
error:   text-red-600     → text-danger
```

---

## Part D — Verify

1. **Build:** `npm run build` — should compile with no missing-class warnings.
2. **Grep clean:** the ripgrep in Part B returns nothing; also `rg "amber-|red-600|JetBrains" src/` returns nothing.
3. **Spot-check pages:** home (cream sections + CTAs), `/pricing` (highlighted tier on charcoal), `/compare` (table highlight column), `/intake` (progress bar + status badges + autosave), footer (links readable).
4. **Contrast:** primary buttons, eyebrows, and all four status badges should pass AA — the ratios are tabulated in `DESIGN.md` › Accessibility.
5. **Mono:** pricing numbers now render in the system mono stack consistently (no silent JetBrains fallback).

---

*Spec: `DESIGN.md`. Visual reference: `Groundwork Design System.html`. Paste-ready config/CSS: `migrated/`.*
