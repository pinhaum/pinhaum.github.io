<script lang="ts">
  import { resolve } from '$app/paths';
  import { smoothScrollToHash } from '$lib/smoothScroll';

  // Ícones pixel-art em grade 16×16, desenhados com retângulos (fill-rule evenodd recorta os vazados)
  const sections = [
    { id: 'inicio',   label: 'Início',   icon: 'M7 2h2v2H7zM5 4h6v2H5zM3 6h10v2H3zM4 8h8v6H4zM7 10h2v4H7z' },
    { id: 'projetos', label: 'Projetos', icon: 'M2 3h5v2H2zM2 5h12v8H2zM4 7h8v4H4z' },
    { id: 'sobre',    label: 'Sobre',    icon: 'M6 2h4v4H6zM4 8h8v2H4zM3 10h10v4H3z' },
    { id: 'contato',  label: 'Contato',  icon: 'M1 3h14v10H1zM3 5h10v6H3zM3 5h2v2H3zM5 7h2v2H5zM7 9h2v2H7zM9 7h2v2H9zM11 5h2v2h-2z' },
  ];

  let current = $state('inicio');
  let scrollY = $state(0);
  const atTop = $derived(scrollY < 8);

  $effect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) current = entry.target.id;
        }
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
</script>

<svelte:window bind:scrollY />

<nav class={['nav', { 'at-top': atTop }]} aria-label="Seções">
  <div class="nav-item nav-brand">
    <img src="/assets/img/terminal.svg" alt="" />
    <span class="label">gcrepho<span class="dot">.</span><span class="blink">_</span></span>
  </div>

  <ul class="nav-links">
    {#each sections as s (s.id)}
      <li>
        <a
          class={['nav-item', { active: current === s.id }]}
          aria-current={current === s.id ? 'location' : undefined}
          href={resolve(`/#${s.id}`)}
          onclick={smoothScrollToHash}
        >
          <svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
            <path d={s.icon} fill="currentColor" fill-rule="evenodd" />
          </svg>
          <span class="label">{s.label}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .nav {
    position: fixed;
    inset-block: 0;
    right: 0;
    z-index: 100;
    width: var(--nav-rail);
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    padding-block: var(--space-4);
    overflow: hidden;
    background: color-mix(in srgb, var(--gcr-void) 85%, transparent);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-left: var(--border-2);
    transition: width var(--t-base) var(--ease-out);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* row-reverse mantém o ícone colado à borda direita enquanto o menu expande para a esquerda */
  .nav-item {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: var(--space-4);
    /* centraliza o ícone de 24px no trilho recolhido (descontando a borda de 4px) */
    padding: var(--space-3) calc((var(--nav-rail) - 24px - 4px) / 2);
    color: var(--fg-2);
    text-decoration: none;
    white-space: nowrap;
    transition: color var(--t-fast) var(--ease-step), background var(--t-fast) var(--ease-step);
  }

  .nav-item img,
  .nav-item svg {
    flex: none;
    width: 24px;
    height: 24px;
  }

  .label {
    font-family: var(--font-body);
    font-size: var(--fs-small);
    font-weight: 500;
    letter-spacing: 0.04em;
    opacity: 0;
    transition: opacity var(--t-fast) var(--ease-step);
  }

  .nav-brand .label {
    font-family: var(--font-display);
    font-size: var(--fs-tiny);
    color: var(--gcr-paper);
    text-shadow: var(--text-shadow-pixel-sm);
    letter-spacing: 0.06em;
  }

  .dot { color: var(--gcr-coral); }

  .blink {
    animation: blink 1.2s var(--ease-step) infinite;
  }
  @keyframes blink {
    50% { opacity: 0; }
  }

  .nav-links .nav-item:hover {
    color: var(--gcr-paper);
    background: var(--gcr-dawn);
  }

  .nav-item.active {
    color: var(--gcr-coral);
    box-shadow: inset -4px 0 0 var(--gcr-coral);
  }

  .nav-item:focus-visible {
    outline: 2px solid var(--gcr-aurora);
    outline-offset: -2px;
  }

  /* Aberto no topo da página; depois de rolar, recolhe e só expande no hover/foco. No touch fica só com ícones */
  @media (hover: hover) and (pointer: fine) {
    .nav.at-top,
    .nav:hover,
    .nav:focus-within {
      width: var(--nav-expanded);
    }

    .nav.at-top .label,
    .nav:hover .label,
    .nav:focus-within .label {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nav,
    .nav-item,
    .label {
      transition: none;
    }
  }
</style>
