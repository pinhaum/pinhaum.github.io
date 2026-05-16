---
name: gcrepho-design
description: Use this skill to generate well-branded interfaces and assets for gcrepho (Gabriel Ramos, a Brazilian software developer with a Super-Metroid / pixel-art aesthetic), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `css/`, `assets/`, `ui_kits/`, `preview/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/img/` and create static HTML files for the user to view. Link to `colors_and_type.css` for the design tokens, or to the per-component CSS files in `css/components/` if you want the original implementation.

If working on production code, you can copy the icons, fonts (Google Fonts: Press Start 2P + Fira Code), and tokens, and read the rules in `README.md` to become an expert in designing with this brand.

Key rules you must internalize before designing:
- **No rounded corners. Ever.** Pixel art has no curves.
- **No soft shadows.** Always hard `box-shadow: Npx Npx 0 #000` offsets.
- **Two fonts only:** Press Start 2P (display) + Fira Code (body).
- **Five hero colors:** deep teal `#0e3746`, red `#be2623`, cream `#f4f2ec`, neon teal `#00e8dc`, hard black.
- **No emoji** except ❤️ in footer-tier copy.
- **Pixel-art icons only** — no Lucide/Heroicons. Use Pixelarticons CDN if you must, and flag it.
- **Tone:** short, casual, slightly nerdy, mixed pt-BR / English. "made 4 fun with ❤️" is the canonical voice.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask 4–10 focused questions (audience, output type, surfaces, copy needs, variation count, etc.), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
