<svelte:head>
  <title>Diário · gcrepho</title>
</svelte:head>

<section class="page">
  <header class="page-title">
    <span class="num">04 //</span>
    <span class="label">DIÁRIO</span>
  </header>
  <!-- TODO: lista de posts -->
</section>

<style>
  .page { padding: var(--space-8); }

  .page-title {
    display: flex;
    align-items: baseline;
    gap: var(--space-3);
    margin-bottom: var(--space-7);
    font-family: var(--font-display);
  }

  .num { font-size: var(--fs-tiny); color: var(--energy); }
  .label { font-size: var(--fs-h1); text-shadow: var(--text-shadow-pixel); }
</style>
