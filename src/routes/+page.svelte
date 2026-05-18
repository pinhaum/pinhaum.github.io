<svelte:head>
  <title>gcrepho — Gabriel Ramos · Software Developer</title>
</svelte:head>

<section class="hero">
  <div class="hero-text">
    <div class="hero-greeting">// olá, mundo</div>
    <h1 class="hero-name">
      Gabriel <span class="accent">Ramos</span>
    </h1>
    <h2 class="hero-role">Software Developer</h2>
    <p class="hero-bio">
      Crio softwares simples e robustos misturando o que aprendo no dia-a-dia
      com o que eu amo fora dele —
      <em style="color: var(--gcr-aurora)">video-games</em>,
      <em style="color: var(--gcr-moon)">música</em> e
      <em style="color: var(--gcr-nebula)">leitura</em>.
    </p>
    <div class="hero-cta">
      <a class="btn primary" href="/projects">Ver projetos <span class="arrow">▶</span></a>
      <a class="btn ghost" href="/contact">Mandar mensagem</a>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    padding: var(--space-9) var(--space-8);
  }

  .hero-greeting {
    font-family: var(--font-mono);
    font-size: var(--fs-small);
    color: var(--energy);
    margin-bottom: var(--space-4);
  }

  .hero-name {
    font-family: var(--font-display);
    font-size: var(--fs-display);
    text-shadow: var(--text-shadow-pixel);
    margin: 0 0 var(--space-3);
    line-height: var(--lh-display);
  }

  .accent { color: var(--accent); }

  .hero-role {
    font-family: var(--font-display);
    font-size: var(--fs-h2);
    color: var(--fg-2);
    text-shadow: var(--text-shadow-pixel-sm);
    margin: 0 0 var(--space-6);
  }

  .hero-bio {
    font-size: var(--fs-body);
    max-width: 540px;
    color: var(--fg-2);
    margin: 0 0 var(--space-7);
  }

  .hero-cta {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
  }

  .btn {
    font-family: var(--font-display);
    font-size: var(--fs-tiny);
    padding: var(--space-3) var(--space-5);
    border: var(--border-2);
    text-decoration: none;
    transition: transform var(--t-fast) var(--ease-step),
                box-shadow var(--t-fast) var(--ease-step);
  }

  .btn.primary {
    background: var(--accent);
    color: var(--gcr-ink);
    box-shadow: var(--shadow-hard);
  }

  .btn.primary:hover {
    transform: scale(1.05);
    background: var(--accent-hover);
  }

  .btn.ghost {
    background: transparent;
    color: var(--fg-1);
    box-shadow: var(--shadow-hard);
  }

  .btn.ghost:hover {
    color: var(--accent);
  }
</style>
