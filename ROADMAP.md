# Roadmap — svelte-playground

Passos de implementação em ordem de dependência, tendo a branch `ui-design` como referência visual.

---

- [x] **1. App shell** — Sky (gradiente fixo), starfield animado, overlay de scanlines e grain de dithering, aurora fog. Vai no `+layout.svelte`. Fundação visual de tudo.
- [x] **2. Primitivos compartilhados** — Botões (`.btn`, `.primary`, `.ghost`), cards, tags/badges e utilitários de layout (`.container`, `.page`, `.page-title`). CSS global antes de qualquer página.
- [x] **3. Nav completo** — Indicador de active (bolinha coral), estilos finais. Depende dos primitivos.
- [x] **4. Hero** — `MoonSprite.svelte` (lua + estrelas em CSS) + layout em duas colunas texto/arte.
- [x] **5. Projects** — Grid de cards com covers em CSS (gradientes por projeto) e tags coloridas.
- [x] **6. About** — Portrait `GR`, bio em parágrafos, grid de favoritos (games / música / leitura).
- [x] **7. Contact** — Form com `$state` + sidebar de canais sociais. Requer toast (passo 9).
- [x] **8. Blog** — Tipografia de artigo: blockquote, `<pre>`, `<code>`, post header com kicker e meta.
- [x] **9. Toast** — Store Svelte global + componente overlay.
- [x] **10. Error page** — Ghost sprite em CSS puro + número hexadecimal `0x404`.
- [x] **11. Responsive** — Mínimo necessário, desktop-first.
- [x] **12. GitHub Actions** — Workflow `build → deploy` para GitHub Pages.

---

## Executadas

### 1. App shell
`src/routes/+layout.svelte`, `src/lib/components/Sky.svelte`, `src/lib/tokens.css`

Criados os tokens de design (`tokens.css`) com a paleta Twilight completa — cores, tipografia, espaçamentos, sombras e animações (`twinkle`, `float-y`). O `Sky.svelte` compõe três camadas: gradiente radial fixo como fundo (`--bg-base`), campo estelar com `starfield-pan` em 15 estrelas geradas via `radial-gradient`, e aurora fog com três elipses radiais coloridas. O layout global injeta scanlines (`repeating-linear-gradient`) e grain de dithering (`radial-gradient` 3×3px) via `::before`/`::after` em z-index alto.

### 2. Primitivos compartilhados
`src/app.css`

Adicionadas quatro seções ao CSS global: **BUTTONS** (`.btn`, `.primary`, `.ghost` com offset shadow pixel-art e transições step), **CARDS** (`.card` com `box-shadow: 6px 6px 0 var(--gcr-ink)` e hover de 9px), **TAGS** (`.tag` com variantes `.aurora`, `.coral`, `.moon`, `.spark`, `.nebula`) e **LAYOUT** (`.container`, `.page`, `.page-title` com `.num` e `.label`). Todos os valores usam tokens onde possível; raw pixels só onde não há equivalente no sistema.

### 3. Nav completo
`src/lib/components/Nav.svelte`

Nav sticky com `backdrop-filter: blur(6px)` e fundo semi-transparente `rgba(7, 6, 26, 0.85)`. Indicador de rota ativa via `::before` (quadrado coral 8px, `opacity: 0 → 1`). Detecção de rota via store `$page` do SvelteKit. Cursor piscante `.blink` na brand com `@keyframes blink`.

### 4. Hero
`src/routes/+page.svelte`, `src/lib/components/MoonSprite.svelte`, `static/assets/img/moon.svg`

Layout em grid `1.4fr 1fr` com texto à esquerda e sprite à direita. `MoonSprite.svelte` compõe a lua (SVG extraído da branch `ui-design`) com animação `float-y` de 5s e seis estrelas posicionadas absolutamente com `twinkle` em delays escalonados (três variantes: `.big` aurora, `.warm` moon, padrão paper). Greeting com linha horizontal via `::before`, hero-name em 56px, role em `--gcr-moon`.

### 5. Projects
`src/routes/projects/+page.svelte`

Grid 2 colunas com quatro cards de projeto. Cada card tem uma capa em CSS puro (sem imagem): `cover-1` usa dois `radial-gradient` sobrepostos em coral e moon sobre dusk; `cover-2` usa dois `linear-gradient` diagonais em aurora e nebula; `cover-3` usa `repeating-linear-gradient` a 45° criando hachura pixel-art; `cover-4` usa `radial-gradient` radial em spark. Tags globais `.tag` reaproveitadas no rodapé de cada card.

### 6. About
`src/routes/about/+page.svelte`

Grid `280px 1fr`. O portrait é um div com gradiente `coral → nebula`, borda hard, shadow de 10px e overlay de scanlines via `::after`. Iniciais "GR" em 80px com `text-shadow` pixel. Bio em três parágrafos com `em` colorido em aurora e `strong` em moon. Grid de favoritos 3 colunas com cards de Games, Música e Leitura usando `--font-display` para categoria e `--font-mono` para os itens.

### 7. Contact
`src/routes/contact/+page.svelte`

Grid `1fr 1fr`. À esquerda, quatro canais sociais (GitHub, LinkedIn, e-mail, Twitch) como links com ícone em box colorido e `translateX(4px)` no hover. À direita, formulário com `$state` Svelte 5 para name/email/msg. Submit valida campos obrigatórios e chama `flash()` do store de toast — mensagem de erro ou confirmação. Labels associados via `for`/`id` para acessibilidade.

### 8. Blog
`src/routes/blog/+page.svelte`

Artigo de exemplo com tipografia editorial completa: **drop cap** no primeiro parágrafo via `::first-letter` (42px coral, float left), **`h2`** em moon com `text-shadow-pixel-sm`, **`blockquote`** com borda esquerda coral 6px e fundo elevado, **`pre`** com `--font-code` e cor `--gcr-spark`, **`code`** inline, **`ul`** com `::marker` customizado (`▸` coral). Post header com kicker, título, meta linha e tags.

### 9. Toast
`src/lib/stores/toast.ts`, `src/lib/components/Toast.svelte`

Store Svelte (`writable`) com função `flash(msg)` que seta a mensagem e agenda `setTimeout` de 2s para limpar. `Toast.svelte` é um overlay `position: fixed` bottom-right com `opacity: 0` + `translateY` por padrão e classe `.show` que revela via transição step. Importado e renderizado no `+layout.svelte` acima do `</div>` do `.app`.

### 10. Error page
`src/routes/+error.svelte`

Ghost sprite construído inteiramente com `box-shadow` a partir de um `div` de 14×14px — 34 sombras deslocadas formam a silhueta: cabeça, olhos em `--gcr-aurora`, corpo, base ondulada. Animado com `float-y` herdado dos tokens. Código de status exibido como hex `0x{status}` em `--gcr-coral`. Footer atualizado com `background: var(--gcr-void)` e `.heart` trocado para `--gcr-coral`.

### 11. Responsive
`src/app.css` — `@media (max-width: 820px)`

Breakpoint único desktop-first em 820px. Collapsa para coluna única: `.hero`, `.projects-grid`, `.about-grid`, `.favorites`, `.contact-grid`. Inverte ordem da arte no hero (`.hero-art { order: -1 }`). Reduz `.hero-name` de 56px para 40px. Comprime gap do nav.

### 12. GitHub Actions
`.github/workflows/deploy.yml`

Workflow ativado em push para `main`. Permissões mínimas (`pages: write`, `id-token: write`). Passos: `checkout@v4` → `setup-bun@v2` → `bun install --frozen-lockfile` → `bun run build` → `upload-pages-artifact@v3` (path: `build`) → `deploy-pages@v4`. Concorrência configurada para cancelar deploys anteriores em andamento.
