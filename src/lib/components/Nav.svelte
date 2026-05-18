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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-4) var(--space-6);
    border-bottom: var(--border-4);
    font-family: var(--font-mono);
    font-size: var(--fs-small);
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    color: var(--fg-1);
    text-decoration: none;
    font-family: var(--font-display);
    font-size: var(--fs-small);
  }

  .nav-brand img {
    width: 32px;
    height: 32px;
  }

  .dot { color: var(--accent); }

  .blink {
    animation: blink 1s steps(1, end) infinite;
  }
  @keyframes blink {
    50% { opacity: 0; }
  }

  .nav-links {
    display: flex;
    gap: var(--space-5);
  }

  .nav-link {
    color: var(--fg-2);
    text-decoration: none;
    transition: color var(--t-fast) var(--ease-step);
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--accent);
  }
</style>
