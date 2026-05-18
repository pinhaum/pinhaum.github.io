<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status} · gcrepho</title>
</svelte:head>

<section class="notfound">
  <h1 class="code">0x{$page.status}</h1>
  <p class="msg">PÁGINA NÃO ENCONTRADA</p>
  <p class="sub">esse caminho não existe (ainda)</p>
  <a class="btn primary" href="/">Voltar pro início <span class="arrow">▶</span></a>
</section>

<style>
  .notfound {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: var(--space-4);
  }

  .code {
    font-family: var(--font-display);
    font-size: var(--fs-display);
    color: var(--accent);
    text-shadow: var(--text-shadow-pixel);
    margin: 0;
  }

  .msg {
    font-family: var(--font-display);
    font-size: var(--fs-h3);
    text-shadow: var(--text-shadow-pixel-sm);
    margin: 0;
  }

  .sub {
    font-family: var(--font-mono);
    font-size: var(--fs-small);
    color: var(--fg-muted);
    margin: 0;
  }

  .btn {
    font-family: var(--font-display);
    font-size: var(--fs-tiny);
    padding: var(--space-3) var(--space-5);
    border: var(--border-2);
    text-decoration: none;
    background: var(--accent);
    color: var(--gcr-ink);
    box-shadow: var(--shadow-hard);
    margin-top: var(--space-5);
  }

  .btn:hover {
    background: var(--accent-hover);
  }
</style>
