<script lang="ts">
  import { page } from '$app/stores';

  const routes = [
    { href: '/',         label: 'Início' },
    { href: '/projects', label: 'Projetos' },
    { href: '/about',    label: 'Sobre' },
    { href: '/blog',     label: 'Diário' },
    { href: '/contact',  label: 'Contato' },
  ];
</script>

<nav class="nav">
  <a class="nav-brand" href="/">
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
</nav>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-4) var(--space-6);
    background: rgba(7, 6, 26, 0.85);
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

  @media (max-width: 520px) {
    .nav {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-3);
      padding: var(--space-3) var(--space-5);
    }

    .nav-links {
      flex-wrap: wrap;
      gap: var(--space-3);
    }

    .nav-link {
      font-size: 12px;
    }
  }
</style>
