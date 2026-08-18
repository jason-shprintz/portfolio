# Handoff: jasonshprintz.com redesign (Classical, light + dark)

## Overview

A full visual redesign of the personal portfolio at jasonshprintz.com as a single scrolling page, plus a dark theme. Content is unchanged from the live site and comes from the repo's own `src/data/*.ts` files; the changes are visual system, hierarchy, section structure, and theming.

Suggested branch name: `redesign/classical-theme`.

## About the design files

The files in `source/` are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy. The task is to recreate them inside the existing `jason-shprintz/portfolio` app (Astro, with React islands for interactive pieces; CSS Modules and Astro scoped `<style>` blocks in `src/styles/global.css`) using its established patterns: keep `src/data/*.ts` as the content source, keep the existing component folders under `src/Components/`, and express the tokens below as CSS custom properties in `global.css`.

`portfolio-design-reference.html` opens in a browser and is the interactive reference — scroll it, toggle the theme, hover the links. (The GitAll heatmap image in it loads from the network; the project logos inside it are drawn from JS and may not render offline — the same images are in `assets/images/`.)

## Fidelity

**High-fidelity.** Colors, type, spacing, and states are final. Recreate pixel-for-pixel where the codebase allows.

## Design tokens

Base font stacks (Google Fonts): `"Cormorant Garamond", Georgia, serif` for headings (`--font-heading`), `"Lora", Georgia, serif` for body (`--font-body`). Weights 400 and 600 only — no bold display type. Radius 4px (`--radius-sm`).

### Light (default)

| Token | Value |
| --- | --- |
| `--color-bg` | `#f3f2f2` |
| `--color-surface` | `#eae9e9` |
| `--color-text` | `#201f1d` |
| `--color-accent` | `#b68235` |
| `--color-divider` | `color-mix(in srgb, #201f1d 16%, transparent)` |
| accent ramp 100→900 | `#fff3e4 #ffe3bf #facb8d #e1ad66 #c28d41 #a06f24 #7d5411 #5a3b0a #3a270d` |
| neutral ramp 100→900 | `#f8f4f4 #eae7e7 #d7d3d3 #bab6b6 #9b9797 #7d7979 #605d5d #444141 #2d2b2b` |

Links and small accent text use `--color-accent-700` (`#7d5411`) — the accent itself is only 3:1 on this ground, fine for icons and large text, not body copy.

### Dark (`html[data-theme="dark"]`)

| Token | Value |
| --- | --- |
| `--color-bg` | `#161513` |
| `--color-surface` | `#221f1d` |
| `--color-text` | `#ebe7e1` |
| `--color-accent` | `#d9a758` |
| `--color-divider` | `color-mix(in srgb, #ebe7e1 17%, transparent)` |
| accent ramp 100→900 | `#241d15 #33281a #4d3b23 #7a5c2e #c28d41 #e0ae68 #e9c58f #f3d9b1 #fbecd4` |
| neutral ramp 100→900 | `#201e1d #2d2b2a #3d3a39 #55514f #7d7977 #9d9895 #bab5b1 #d5d0cb #efeae5` |

The ramps are inverted, not recolored: step 700 stays "the readable accent" in both themes, so every rule that references `--color-accent-700`, `--color-accent-300`, etc. works unchanged. Only the `:root` block differs.

Logo images and the GitAll heatmap SVG keep a light mat in dark mode:
`html[data-theme="dark"] img[data-lightmat] { background: #f3f2f2; }`

### Spacing used

Page container `max-width: 1120px`, `padding: 0 40px 80px`. Section vertical rhythm `72px 0`. Two-column sections are `grid-template-columns: 1fr 1.9fr; gap: 64px`. Hero is `1.45fr 1fr; gap: 64px`. Below `900px` all of these collapse to one column.

## Type scale (as used)

| Role | Family | Size / weight / line-height |
| --- | --- | --- |
| Hero name (h1) | heading | 76px / 400 / 1.02 / `-0.02em` |
| Section heading (h2) | heading | 40px / 400 / 1.1 / `-0.01em` |
| Contact heading | heading | 52px / 400 / 1.08 / `-0.02em` |
| Project name (h3) | heading | 30px / 400 |
| Company name | heading | 21px / 400 |
| Hero lede | body | 20px / 1.6 |
| About prose | body | 18px / 1.75, `text-align: justify; hyphens: auto` |
| Body / bullets | body | 16–17px / 1.7 |
| Kicker (`.kick`) | heading | 12px / uppercase / `letter-spacing: 0.18em` / `font-feature-settings: 'tnum'` / text at 55% opacity |
| Footer | body | 14px, text at 62% |

All figures (dates, "3+ years", copyright) set tabular: `font-feature-settings: 'tnum'`. Running prose does **not** — Lora's tabular figures widen word-spacing.

## Page structure

Order, each part separated by a 1px `--color-divider` hairline:

1. **Header** — sticky-free bar: name left (links to `#top`), nav right (About / Skills / Work / Experience / Contact) as kickers, then the theme toggle button. Bottom hairline.
2. **Hero** — two columns. Left: kicker "Software Developer · Las Vegas, Nevada", the name on two lines, a 44ch lede, then `.btn-primary` "Download résumé" (links to the existing resume PDF) and `.btn-secondary` with the email address. Right: headshot in a `.plate` mat, with GitHub ↗ / LinkedIn ↗ kickers stacked beneath.
3. **01 — About** — narrow left column (kicker + "Where it started"), wide right column with the TI-83+ story **verbatim** (do not reword), then a three-cell definition list above a hairline: Experience / 3+ years, Focus / React · TS, Also / Founder.
4. **02 — Skills** — replaces the shields.io badge wall. Five hairline-separated rows, each a 200px kicker label plus a middot-joined list: Languages, Frameworks, Testing & quality, Data & services, Tooling. Content is the same set as `src/data/skills.ts`, regrouped; the badge images are dropped entirely.
5. **03 — Selected work** — heading row with a "Toastbyte Studios ↗" kicker link on the right. Three articles, hairline-topped, `1fr 1.6fr`: logo in a `.plate` (`height: 200px; object-fit: contain`, `data-lightmat`), then name + status kicker, justified blurb, `.tag.tag-outline` tech chips, and a `.btn-secondary` linking to the domain. Order: GitAll, Dynastiest League, Toastbyte Studios.
6. **04 — Experience** — five hairline-separated rows, `1fr 1.9fr`. Left: 32px logo (radius 4px, 1px divider outline) + company, italic title at 72% opacity, tabular date kicker. Right: bullets as an unstyled list, each with `padding-left: 20px; border-left: 1px solid var(--color-accent-300)` — the only place accent appears as a repeated mark.
7. **05 — Activity** (optional, on by default) — copy about GitAll on the left, the live heatmap embed (`https://gitall.app/embed/u/jason-shprintz.svg`) in a `.plate`, wrapped in a link to the GitAll profile.
8. **06 — Notes** (optional, **off** by default) — writing index. Rows are title + tabular date, hairline-topped, hover tints `--color-accent-100`. Ships with no entries; enable once real posts exist.
9. **07 — Contact** — centered. Kicker, 52px heading "Have something worth building?", a 50ch paragraph, then "Email me" (`.btn-primary`) and a copy-address button.
10. **Footer** — copyright left, GitHub / LinkedIn / Toastbyte Studios right, both at 62% text.

## Interactions & behavior

- **Theme toggle.** Sets `data-theme="light" | "dark"` on `document.documentElement`; button label shows the *other* theme ("Dark" while light). First load: read `localStorage['js-portfolio-theme']`, else `prefers-color-scheme: dark`, else light. Writes the choice back to localStorage on every toggle. Add the standard no-flash inline script in `index.html` `<head>` when you port this, so the attribute is set before first paint.
- **Copy address.** Writes `jshprintz@gmail.com` to the clipboard, button label becomes "Copied" for 2000ms, then reverts. Clear the timeout on unmount.
- **Nav** is plain in-page anchors (`#about`, `#skills`, `#work`, `#experience`, `#contact`).
- **States** come from the design system: `:hover` tints and pressed states one ramp step past base, `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px }`, disabled at 45% opacity. Buttons are outlined, never filled. The theme toggle's hover moves its border to `--color-accent` and its text to `--color-accent-700`.
- **Responsive:** single breakpoint at 900px collapsing every two-column grid to one; the container padding handles the rest.

## State

Three values only: `theme` (`'light' | 'dark'`), `copied` (boolean, 2s timer), and two build flags for the optional sections (`showHeatmap` default true, `showNotes` default false). No data fetching — all content is static and already in `src/data/`.

## Assets

Everything in `assets/images/` is copied unchanged from `public/assets/images/` in the repo (plus `toastbyte-logo.jpg`, a square crop of the studio mark used in place of the 2.4MB `toastbyte.png`). Consider replacing `toastbyte.png` in the repo with a compressed version — it is by far the heaviest asset on the site. Icons, where you add any, should be Lucide.

## Files

- `portfolio-design-reference.html` — the interactive reference, both themes.
- `source/portfolio.dc.html` — the design source (markup + the data and handlers it renders from).
- `source/classical-styles.css` — the full token sheet and component layer the design is built on (`.btn`, `.tag`, `.card`, `.table`, `.plate`, `.hr`). Port the tokens and the classes you use; do not vendor the whole file if only part is needed.
