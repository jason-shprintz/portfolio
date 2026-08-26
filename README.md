# Portfolio

The source for **[jasonshprintz.com](https://jasonshprintz.com)** — a static
personal site built with Astro, deployed to Cloudflare Pages on every push to
`main`.

[![CI](https://github.com/jason-shprintz/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/jason-shprintz/portfolio/actions/workflows/ci.yml)

## Stack

| Concern    | Choice                                                  |
| ---------- | ------------------------------------------------------- |
| Framework  | [Astro](https://astro.build) with the React integration |
| Language   | TypeScript                                              |
| Styling    | Scoped `<style>` blocks + CSS custom properties         |
| Hosting    | Cloudflare Pages, built from `main` on every push       |
| Formatting | Prettier + ESLint, both enforced in CI                  |

Astro ships zero JavaScript by default, so most of the site is static HTML.
React is pulled in only where a component genuinely needs interactivity.

## Getting started

Requires **Node 22** (matching CI).

```bash
npm ci        # install exactly what the lockfile pins
npm run dev   # http://localhost:4321
```

## Scripts

| Script                 | What it does                                    |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Start the dev server with HMR                   |
| `npm run build`        | Type-check (`astro check`) then build to `dist` |
| `npm run preview`      | Serve the production build locally              |
| `npm run lint`         | ESLint across the project                       |
| `npm run lint:fix`     | ESLint with autofix                             |
| `npm run typecheck`    | `astro check` on its own                        |
| `npm run format`       | Rewrite files with Prettier                     |
| `npm run format:check` | Fail if anything is unformatted                 |
| `npm run cleanup`      | Format, autofix, then type-check in one pass    |

Run `npm run cleanup` before pushing — it covers everything CI checks except
the build itself.

## Layout

```
src/
├── Components/     # One folder per section (Hero, Projects, Experience, ...)
├── data/           # Site content as typed arrays — edit these, not the markup
├── layouts/        # Shared page shell
├── pages/          # Astro file-based routes
├── styles/         # Global CSS and design tokens
└── constants.ts    # Breakpoints, outbound links, feature flags
public/
└── assets/images/  # Static assets, copied verbatim into the build
```

### Editing content

Most updates don't require touching a component. The typed arrays in `src/data`
drive the rendered sections:

- `projects.ts` — project cards (name, blurb, tech tags, image, link)
- `experience.ts` — work history
- `skills.ts` — skill groupings

Project artwork lives in `public/assets/images` and is referenced by a path
relative to the site root, so `assets/images/gitall.svg` rather than
`/public/...`. Prefer SVG for logos and marks; use WebP for photographic
images, which compresses noticeably better than JPEG on the dark gradients
these cards tend to use.

### Theming

Light and dark are driven by a `data-theme` attribute on `<html>`, with colors
defined as CSS custom properties in `src/styles/global.css`. The visitor's
choice persists under the `THEME_STORAGE_KEY` defined in `src/constants.ts`.

One gotcha worth knowing: images tagged `data-lightmat` get a light backdrop
painted behind them in dark mode, which is meant for logos with transparency.
Fully opaque artwork is unaffected.

## Contributing

The repo follows the workflow conventions shared across
[Toastbyte Studios](https://github.com/Toastbyte-Studios):

1. Branch off `main`.
2. **Bump `version` in `package.json`.** A PR whose version matches `main` is
   rejected by the `require-version-bump` check.
3. Open a PR. CI runs lint, format check, and build.
4. On merge, `main` is tagged `v<version>` and a draft release is generated.
   Cloudflare Pages rebuilds from `main` on its own, through Cloudflare's Git
   integration rather than through Actions.

Deployment is fully automated — there is no manual publish step.

## Contact

- [LinkedIn](https://www.linkedin.com/in/jasonshprintz)
- [GitHub](https://github.com/jason-shprintz)
- <jshprintz@gmail.com>

[![GitAll contributions](https://gitall.app/embed/u/jason-shprintz.svg)](https://gitall.app/u/jason-shprintz?utm_source=embed&utm_medium=referral&utm_campaign=heatmap)
