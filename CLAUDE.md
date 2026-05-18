# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site for Gabriel Ramos (gcrepho). SvelteKit 2 + Svelte 5 + adapter-static, deployed as a fully pre-rendered static site on GitHub Pages (`pinhaum.github.io`). Package manager: **bun**.

## Commands

```sh
bun run dev      # dev server with HMR
bun run build    # production build → build/
bun run preview  # serve the build/ folder locally
```

No test runner or linter configured yet.

## Architecture

**Routing:** SvelteKit file-based. Every route is pre-rendered — `export const prerender = true` is set globally in `src/routes/+layout.ts`, so all pages become static HTML files at build time. No SPA fallback needed.

**Deployment:** `bun run build` writes to `build/`. GitHub Pages serves that folder. `static/.nojekyll` prevents Jekyll from processing `_app/`.

**Design tokens:** `src/lib/tokens.css` — all CSS custom properties (palette, typography, spacing, shadows, motion). Imported in `src/app.css`, which is the global stylesheet imported in `src/routes/+layout.svelte`. Never use raw hex values in component `<style>` blocks — always reference a token.

**Chrome components** (`src/lib/components/`): `Nav.svelte` uses `$app/stores`'s `page` store to derive the active route. `Footer.svelte` is static markup.

**Svelte version:** Svelte 5. Use runes syntax (`$props()`, `$state()`, `$derived()`) in new components.

## Design system rules (non-negotiable)

- **Zero border-radius** — pixel art has no curves
- **Hard black shadows only** — `box-shadow: Npx Npx 0 #000`, never blurred
- **Three font roles:** `var(--font-display)` = Press Start 2P (headings), `var(--font-body)` = Pixelify Sans (body), `var(--font-mono)` = Fira Code (labels/code)
- **Pixel text needs `text-shadow: var(--text-shadow-pixel)`** when using `--font-display`
- **No emoji** except `❤` in footer-tier copy
- **Pixel-art icons only** — no Lucide/Heroicons; use `static/assets/img/ico_*.svg`
- All `<img>`: `image-rendering: pixelated`

**Palette (Twilight theme) — use semantic aliases in code:**

| Semantic token | Raw | Role |
|---|---|---|
| `--bg-base` | `#0d0c25` | page background |
| `--bg-elevated` | `#1a1742` | cards |
| `--accent` | `#ff5577` | CTA / buttons |
| `--energy` | `#5beaff` | links / progress / active |
| `--energy-warm` | `#ffd166` | warm highlight |
| `--fg-1` | `#f5ead0` | primary text |
| `--fg-2` | `#d9cfb3` | secondary text |
| `--fg-muted` | `#8b8474` | meta / captions |
| `--border-hard` | `#000000` | all borders and shadows |

## Copy tone

Mixed pt-BR / English. Section labels and nav in English (Title Case). Body copy in Portuguese. Casual lowercase for footer (`made 4 fun with ❤`). Max ~30 words per section. No exclamation points.
