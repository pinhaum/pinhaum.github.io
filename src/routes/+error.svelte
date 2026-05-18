<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status} · gcrepho</title>
</svelte:head>

<section class="notfound">
  <div class="ghost">
    <div class="body"></div>
  </div>
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

  /* Ghost em box-shadow CSS — grade 14×14px */
  .ghost {
    animation: float-y 3s var(--ease-step-4) infinite;
    margin-bottom: var(--space-4);
  }

  .body {
    width: 14px;
    height: 14px;
    background: var(--gcr-paper);
    box-shadow:
      /* cabeça — topo arredondado */
      14px 0   0 var(--gcr-paper),
      28px 0   0 var(--gcr-paper),
      42px 0   0 var(--gcr-paper),
      56px 0   0 var(--gcr-paper),
      0    14px 0 var(--gcr-paper),
      14px 14px 0 var(--gcr-paper),
      28px 14px 0 var(--gcr-paper),
      42px 14px 0 var(--gcr-paper),
      56px 14px 0 var(--gcr-paper),
      70px 14px 0 var(--gcr-paper),
      /* olhos */
      0    28px 0 var(--gcr-paper),
      14px 28px 0 var(--gcr-aurora),
      28px 28px 0 var(--gcr-paper),
      42px 28px 0 var(--gcr-paper),
      56px 28px 0 var(--gcr-aurora),
      70px 28px 0 var(--gcr-paper),
      /* corpo */
      0    42px 0 var(--gcr-paper),
      14px 42px 0 var(--gcr-paper),
      28px 42px 0 var(--gcr-paper),
      42px 42px 0 var(--gcr-paper),
      56px 42px 0 var(--gcr-paper),
      70px 42px 0 var(--gcr-paper),
      0    56px 0 var(--gcr-paper),
      14px 56px 0 var(--gcr-paper),
      28px 56px 0 var(--gcr-paper),
      42px 56px 0 var(--gcr-paper),
      56px 56px 0 var(--gcr-paper),
      70px 56px 0 var(--gcr-paper),
      /* base ondulada */
      0    70px 0 var(--gcr-paper),
      28px 70px 0 var(--gcr-paper),
      42px 70px 0 var(--gcr-paper),
      70px 70px 0 var(--gcr-paper),
      14px 84px 0 var(--gcr-paper),
      56px 84px 0 var(--gcr-paper);
  }

  .code {
    font-family: var(--font-display);
    font-size: var(--fs-display);
    color: var(--gcr-coral);
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
</style>
