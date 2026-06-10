<script lang="ts">
  import { page } from '$app/stores';

  const routes = [
    { href: '/',         label: 'Início' },
    { href: '/projects', label: 'Projetos' },
    { href: '/about',    label: 'Sobre' },
    { href: '/blog',     label: 'Diário' },
    { href: '/contact',  label: 'Contato' },
  ];

  let open = $state(false);
  let menuBtn: HTMLButtonElement | undefined = $state();
  let closeBtn: HTMLButtonElement | undefined = $state();

  function close() { open = false; menuBtn?.focus(); }

  $effect(() => {
    if (open) closeBtn?.focus();
  });
</script>

<nav class="nav">
  <a class="nav-brand" href="/" onclick={close}>
    <img src="/assets/img/terminal.svg" alt="" />
    <span>gcrepho<span class="dot">.</span><span class="blink">_</span></span>
  </a>

  <div class="nav-links">
    {#each routes as r}
      <a
        class="nav-link"
        class:active={$page.url.pathname === r.href}
        href={r.href}
      >{r.label}</a>
    {/each}
  </div>

  <button class="menu-btn" bind:this={menuBtn} onclick={() => open = true} aria-label="Abrir menu">☰</button>
</nav>

{#if open}
  <div
  class="drawer-overlay"
  onclick={close}
  onkeydown={(e) => e.key === 'Escape' && close()}
  role="dialog"
  aria-modal="true"
  aria-label="Menu de navegação"
>
    <div class="drawer" onclick={(e) => e.stopPropagation()}>
      <button class="drawer-close" bind:this={closeBtn} onclick={close} aria-label="Fechar menu">✕</button>
      {#each routes as r}
        <a
          class="drawer-link"
          class:active={$page.url.pathname === r.href}
          href={r.href}
          onclick={close}
        >{r.label}</a>
      {/each}
    </div>
  </div>
{/if}

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-4) var(--space-6);
    background: color-mix(in srgb, var(--gcr-void) 85%, transparent);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-bottom: var(--border-2);
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    font-family: var(--font-display);
    font-size: var(--fs-tiny);
    color: var(--gcr-paper);
    text-decoration: none;
    text-shadow: var(--text-shadow-pixel-sm);
    letter-spacing: 0.06em;
  }

  .nav-brand img {
    width: var(--space-6);
    height: var(--space-6);
  }

  .dot { color: var(--gcr-coral); }

  .blink {
    animation: blink 1.2s var(--ease-step) infinite;
  }
  @keyframes blink {
    50% { opacity: 0; }
  }

  .nav-links {
    display: flex;
    gap: var(--space-6);
    align-items: center;
  }

  .nav-link {
    font-family: var(--font-body);
    font-size: var(--fs-small);
    font-weight: 500;
    color: var(--fg-2);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    letter-spacing: 0.04em;
    transition: color var(--t-fast) var(--ease-step);
  }

  .nav-link::before {
    content: '';
    width: var(--space-2);
    height: var(--space-2);
    background: var(--gcr-coral);
    opacity: 0;
    transition: opacity var(--t-fast) var(--ease-step);
  }

  .nav-link:hover { color: var(--gcr-paper); }
  .nav-link.active { color: var(--gcr-paper); }
  .nav-link.active::before { opacity: 1; }

  /* Hamburguer — só visível em mobile */
  .menu-btn {
    display: none;
    font-size: 20px;
    color: var(--gcr-paper);
    cursor: pointer;
    padding: var(--space-2);
    line-height: 1;
  }

  /* Drawer overlay */
  .drawer-overlay {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: flex-end;
  }

  .drawer {
    width: 260px;
    height: 100%;
    background: var(--gcr-void);
    border-left: var(--border-2);
    display: flex;
    flex-direction: column;
    padding: var(--space-6) var(--space-5);
    gap: var(--space-5);
  }

  .drawer-close {
    align-self: flex-end;
    font-size: 18px;
    color: var(--gcr-paper);
    cursor: pointer;
    padding: var(--space-2);
    line-height: 1;
  }

  .drawer-link {
    font-family: var(--font-body);
    font-size: var(--fs-body);
    font-weight: 500;
    color: var(--fg-2);
    text-decoration: none;
    padding: var(--space-3) 0;
    border-bottom: var(--border-1);
    letter-spacing: 0.04em;
    transition: color var(--t-fast) var(--ease-step);
  }

  .drawer-link:hover  { color: var(--gcr-paper); }
  .drawer-link.active { color: var(--gcr-coral); }

  /* Mobile: esconde links, mostra hamburguer */
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .menu-btn  { display: block; }
  }
</style>
