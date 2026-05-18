# Roadmap — svelte-playground

Passos de implementação em ordem de dependência, tendo a branch `ui-design` como referência visual.

---

- [x] **1. App shell** — Sky (gradiente fixo), starfield animado, overlay de scanlines e grain de dithering, aurora fog. Vai no `+layout.svelte`. Fundação visual de tudo.
- [x] **2. Primitivos compartilhados** — Botões (`.btn`, `.primary`, `.ghost`), cards, tags/badges e utilitários de layout (`.container`, `.page`, `.page-title`). CSS global antes de qualquer página.
- [ ] **3. Nav completo** — Indicador de active (bolinha coral), estilos finais. Depende dos primitivos.
- [ ] **4. Hero** — `MoonSprite.svelte` (lua + estrelas em CSS) + layout em duas colunas texto/arte.
- [ ] **5. Projects** — Grid de cards com covers em CSS (gradientes por projeto) e tags coloridas.
- [ ] **6. About** — Portrait `GR`, bio em parágrafos, grid de favoritos (games / música / leitura).
- [ ] **7. Contact** — Form com `$state` + sidebar de canais sociais. Requer toast (passo 9).
- [ ] **8. Blog** — Tipografia de artigo: blockquote, `<pre>`, `<code>`, post header com kicker e meta.
- [ ] **9. Toast** — Store Svelte global + componente overlay.
- [ ] **10. Error page** — Ghost sprite em CSS puro + número hexadecimal `0x404`.
- [ ] **11. Responsive** — Mínimo necessário, desktop-first.
- [ ] **12. GitHub Actions** — Workflow `build → deploy` para GitHub Pages.
