# gcrepho Design System

A retro / pixel-art design system inspired by **Super Metroid** and the SNES 16-bit era, built around the personal site of **Gabriel Ramos (gcrepho)** — a software developer who likes video games, music, and reading and wants those passions to show in everything he ships.

> *"Sou um desenvolvedor de softwares que busca gerar códigos simples e robustos, utilizando-se de seus gostos pessoais para resolver os problemas do cliente."*

The system is small on purpose: one developer, one portfolio, one strong aesthetic point of view. Use it for personal-brand surfaces, dev blogs, project showcases, README hero images, twitch overlays — anywhere a high-contrast pixel feel makes sense.

---

## Sources

This system was reverse-engineered from a single attached source. If you have access, browse it directly to find any assets or rules not codified here:

- **GitHub:** [`pinhaum/pinhaum.github.io`](https://github.com/pinhaum/pinhaum.github.io) — the live personal portfolio. Plain HTML/CSS, one page, component-style CSS split into `css/components/*.css`. The hero uses a Super Metroid Samus-ship key art image; all skill icons are hand-made pixel-art SVGs.

There is no Figma file, no codebase beyond this one static site, and no slide template. The repo is small enough that you can read every component CSS file in under a minute — recommended if you intend to ship anything large with this brand.

---

## Index — what's in this folder

| File / folder | What it is |
|---|---|
| `README.md` | This file. Context, tone, visual & content rules. |
| `colors_and_type.css` | All design tokens as CSS custom properties (colors, type, spacing, borders, shadows). The single source of truth — import this. |
| `SKILL.md` | Agent-skill manifest so this folder can be dropped into Claude Code / Skills. |
| `assets/img/` | Pixel-art SVG tech icons (HTML, CSS, JS, Node, React, REST, Ruby), the Samus terminal logo, and the Super Metroid Samus-ship hero photo. |
| `css/` | Verbatim component CSS from the source site (`reset.css` + `components/*.css`). Read these to see how the original implemented buttons, headers, the banner, etc. |
| `preview/` | Small HTML cards that populate the Design System tab in the editor. |
| `ui_kits/portfolio/` | Pixel-perfect recreation of the gcrepho portfolio — JSX components + an interactive `index.html`. |

---

## CONTENT FUNDAMENTALS

**Language.** Mixed Portuguese (pt-BR) and English. The persona is *brazilian dev who works in English code/comments*. Headings and CTAs are English (`Skills`, `Projects`, `About`, `Contact`, `Download CV`). Long-form / about-me copy is Portuguese.

**Tone.** Casual, sincere, slightly nerdy. Not corporate, not ironic. The author signs off the homepage with two lines:

> `this is a Work In Progress`
> `made 4 fun with ❤️`

Lowercase, abbreviated (`4` for `for`), one emoji, no period. That's the whole tone in three lines: *this is a hobby, I'm having fun, please be nice.*

**Voice.** First-person but understated. The about-me uses "Sou um desenvolvedor…" and "Adoro video-games, música e leitura" — *I am, I love* — but the rest of the site is impersonal labels (Skills, Projects). Don't write paragraphs of "I" copy; one or two sentences max.

**Casing & punctuation.**
- Display headings: Title Case (`Software Developer`, `Gabriel Ramos`).
- Nav / actions / buttons: Title Case (`Download CV`, `Contact`).
- Body / footnotes: lowercase OK (`this is a Work In Progress`).
- No trailing periods on UI strings. Periods only in real sentences.

**Vibe checklist for new copy.**
- Keep it short. The original homepage has maybe 30 words of copy total.
- Reference games / music / books when natural; never force it.
- "Work in progress" energy is on-brand — admit when something isn't done.
- One emoji per page, max. ❤️ is canon. Avoid emoji elsewhere.
- Don't use exclamation points or marketing language ("revolutionary", "blazing fast", "10x").

**Example copy that fits the brand:**

| ✅ Use | ❌ Avoid |
|---|---|
| `Download CV` | `📥 Download my CV now!` |
| `Skills` | `What I Bring to the Table` |
| `made 4 fun with ❤️` | `Built with ❤️ by Gabriel Ramos. All rights reserved.` |
| `Sou um desenvolvedor…` | `I am a passionate, results-driven engineer…` |

---

## VISUAL FOUNDATIONS

The whole system is one strong aesthetic note: **16-bit SNES UI aesthetic, specifically Super Metroid.** Every choice flows from there.

### Colors

Five hero colors do almost all the work:

| Token | Hex | Role |
|---|---|---|
| `--gcr-bg-deep` | `#0e3746` | Primary surface — the deep teal of Zebes' caves. |
| `--gcr-red` | `#be2623` | Action color. Buttons, links, the dot before nav items. Samus's helmet red. |
| `--gcr-cream-light` | `#f4f2ec` | Body text on dark surfaces; also fills `Download CV` buttons. |
| `--gcr-neon` | `#00e8dc` | Neon teal — energy, progress bars, the cube on Samus's ship. Always on dark. |
| `--gcr-ink` | `#000000` | Hard borders + drop shadows. Used **everywhere**, never softened. |

Secondary palette (used sparingly, on icons mostly): `--gcr-blue #008dcc`, `--gcr-magenta #a500cc`, `--gcr-orange #cc3f00`, `--gcr-green #27cc00`, `--gcr-sand #ead295`.

Gradients exist but are limited to **two specific moments**:
1. **Section background** — vertical gradient from `--gcr-bg-deep` at top to `--gcr-red` at bottom (`linear-gradient(0deg, #be2623, #0e3746)`). Evokes a sunset / lava room.
2. **Box surface** — diagonal `to right bottom` from `--gcr-neon` to `--gcr-bg-deep`. The hero name plate uses this.

No purple-blue SaaS gradients. No soft pastels. No light mode.

### Type

Two families, no exceptions:

- **`Press Start 2P`** — display font. The pixelated 8-bit face you see in arcade games. Used for headings, subtitles, skill names, button labels. **Always paired with a hard `text-shadow` in black at 2–4px offset** — never floating, never gradient.
- **`Fira Code`** — everything else. Monospaced, developer-friendly, slightly humanist. Used for body, nav, footer, code.

Sizes track to the source: 40px display, 30px subtitle, 25px skill names, 20px buttons/nav, 16px body. Don't go below 14px — pixel fonts become illegible.

Letter-spacing left at default. Line-height ~1.2 for display, ~1.6 for body.

### Spacing & layout

- The site is **left-aligned and confident**, not centered for centering's sake. The hero box sits at `padding: 115px 0 40px 90px` — biased to the upper-left, like an NES title screen.
- Sections are full-bleed; content inside is capped at `max-width: 960px`.
- Skills lay out in a 2-column grid (`width: 430px`, `margin-right: 100px` on odd children).
- Vertical rhythm: 40–60px gaps between major blocks, 28–40px inside a card.

### Borders, shadows, radii

The **single most important visual rule**: **everything has a hard black border or a hard black drop-shadow, and nothing is rounded.**

- Header & banner: `border-bottom: 10px solid #000`. Heavy.
- Sections: `border-bottom: 10px solid var(--energy)` (neon) — the one place neon is structural.
- Progress bars: `border: 5px solid #000`.
- Buttons: `box-shadow: 5px 5px 0 black` (offset, no blur).
- Boxes / hero plate: `box-shadow: 8px 8px 0 #000`.
- Pixel text: `text-shadow: 4px 4px 0 #000`.
- **Border-radius: 0.** Always. Pixel art doesn't have curves.

### Backgrounds

- Full-bleed pixel-art **photographic** backgrounds (the Samus ship JPG) used for hero areas.
- Solid color or two-stop linear gradient for everything else.
- No noise textures, no grain, no glassmorphism, no blur.

### Animation

- Almost none. The source uses `transition: transform 100ms linear` on buttons, full stop.
- Hover on buttons: `transform: scale(1.05)` + lighter cream background.
- Hover on nav links: color flips to `--gcr-red`.
- When you do animate, prefer **stepped easing** (`steps(2, end)`) to mimic frame-by-frame sprites. No spring physics, no smooth cubic-bezier.
- No fades, no parallax, no scroll-triggered reveals.

### Hover & press states

| State | Buttons | Nav links | Cards |
|---|---|---|---|
| Hover | `scale(1.05)` + cream → cream-light | text → red | — |
| Active / press | drop shadow halves (`5px → 2px`), nudge `translate(3px, 3px)` | — | — |
| Disabled | desaturate, no shadow | — | — |

### Transparency, blur, glass

**None.** Surfaces are flat fills or hard pixel imagery. The closest thing to transparency is the two-stop gradient on `.box`.

### Imagery

- Pixel art only. Sprites, key art, or pixelated photography (`image-rendering: pixelated` is welcome).
- Cool palette: greens, teals, deep blues, with hot red/orange accents. Never warm-washed, never sepia, never b&w.
- All current icons are hand-drawn pixel-art SVGs at 90px display size.

### Cards

A "card" in this system is a **box with a hard offset shadow and no border-radius**. Two flavors:

1. **Hero plate** (`.box`) — diagonal neon→deep-teal gradient, `8px 8px 0 black` shadow.
2. **Skill row** (`.skill-tec`) — no background, no shadow, just an icon + pixel-text title + pixel progress bar. Cards by composition, not by container.

Don't add a third flavor unless you have a real reason.

### Fixed elements

The source has no sticky header or floating CTA. The page is a single scroll from hero → skills → (planned) projects/about/contact → footer.

---

## ICONOGRAPHY

**The brand is its own icon set.** Gabriel hand-drew pixel-art SVGs for every tech logo on the site — HTML5, CSS3, JavaScript, Node, React, REST API, plus a Ruby PNG. They're stored in `assets/img/` with the prefix `ico_`. Each one is a chunky 16×16-ish pixel rendering of the canonical brand mark, rendered at 90px in the UI.

**Rules for adding new icons:**

1. **Prefer hand-drawn pixel-art SVG** in the same style — 12–24px grid, 4–6 chunky colors per icon, hard pixel edges (`shape-rendering: crispEdges` if needed), no anti-aliasing, no gradients.
2. If you can't draw one, **use a placeholder square** in `--gcr-bg-deeper` with the first letter of the concept in `Press Start 2P` cream. Document the substitution.
3. **Do NOT pull from Lucide / Heroicons / Feather** — their thin strokes break the aesthetic. If you absolutely must use a vector icon library, use [Pixelarticons](https://pixelarticons.com/) (`https://cdn.jsdelivr.net/gh/halfmage/pixelarticons/svg/`) which matches the pixel grid. **Flagged substitution** — note it in the artifact.
4. **No emoji as functional icons.** ❤️ in the footer is OK as decoration; emoji nav items are not OK.
5. **Avoid icon fonts.** SVG only, sized in px, rendered with `image-rendering: pixelated` when scaled.

Logos shipping with the system:

- `assets/img/terminal.svg` — Samus's helmet visor stylized as a terminal prompt; the homepage uses this as the masthead logo.
- `assets/img/super-metroid-samus-ship.jpg` — hero key-art photo (fair-use from Nintendo's *Super Metroid*, used personally — replace with original art before commercial use).

---

## FONT SUBSTITUTIONS

No font files were attached. Both fonts in use are free Google Fonts and are imported via `@import` in `colors_and_type.css`:

- **Press Start 2P** — Google Fonts, original (no substitution).
- **Fira Code** — Google Fonts, original (no substitution).

If you intend to ship offline, download the WOFF2 versions into `fonts/` and switch the import to a local `@font-face`. *Asking the user to provide font files or confirm CDN use is fine — no proprietary fonts were specified.*

---

## How to use these tokens

```html
<link rel="stylesheet" href="colors_and_type.css">

<button style="
  background: var(--gcr-cream);
  color: var(--accent);
  box-shadow: var(--shadow-hard);
  border: none;
  padding: 12px 20px;
  font-family: var(--font-body);
  font-size: var(--fs-body);
">Download CV</button>
```

Or import the verbatim source-site CSS:

```html
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/components/button.css">
<link rel="stylesheet" href="css/components/main-title.css">
<!-- ...etc -->
```

---

## Caveats

- The source site is a one-page work-in-progress. Sections for **Projects**, **About**, and **Contact** are linked in the nav but **not yet built**. The UI kit in this system invents reasonable extrapolations for those sections — flagged in the kit's own README. They are *not* canonical brand.
- The Samus key-art image is third-party (Nintendo). Replace before commercial use.
- No dark/light theming exists — the system is dark-only by design.
