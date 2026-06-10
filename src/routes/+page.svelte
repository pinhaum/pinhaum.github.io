<script lang="ts">
  import MoonSprite from '$lib/components/MoonSprite.svelte';
</script>

<svelte:head>
  <title>gcrepho — Gabriel Ramos · Software Developer</title>
  <meta name="description" content="Portfólio de Gabriel Ramos — desenvolvedor de software que mistura código limpo com video-games, música e leitura." />
  <meta property="og:title" content="gcrepho — Gabriel Ramos · Software Developer" />
  <meta property="og:description" content="Portfólio de Gabriel Ramos — desenvolvedor de software que mistura código limpo com video-games, música e leitura." />
  <meta property="og:url" content="https://pinhaum.github.io/" />
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
      com o que amo fora dele —
      <em class="c-aurora">video-games</em>,
      <em class="c-moon">música</em> e
      <em class="c-nebula">leitura</em>.
      Acredito que isso me ajuda a gerar conexão e valor em todo lugar onde atuo.
    </p>
    <div class="hero-cta">
      <a class="btn primary" href="/projects">Ver projetos <span class="arrow">▶</span></a>
      <a class="btn ghost" href="/contact">Mandar mensagem</a>
    </div>
  </div>
  <div class="hero-art">
    <MoonSprite />
  </div>
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 40px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px var(--space-6) 140px;
  }

  .hero-greeting {
    font-family: var(--font-mono);
    font-size: var(--fs-tiny);
    color: var(--gcr-aurora);
    letter-spacing: 0.08em;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .hero-greeting::before {
    content: '';
    width: 24px;
    height: 2px;
    background: var(--gcr-aurora);
  }

  .hero-name {
    font-family: var(--font-display);
    font-size: 56px;
    line-height: 1.15;
    color: var(--gcr-paper);
    text-shadow: var(--text-shadow-pixel);
    margin: 0 0 var(--space-3);
  }

  .accent   { color: var(--gcr-coral);  }
  .c-aurora { color: var(--gcr-aurora); font-style: normal; }
  .c-moon   { color: var(--gcr-moon);   font-style: normal; }
  .c-nebula { color: var(--gcr-nebula); font-style: normal; }

  .hero-role {
    font-family: var(--font-display);
    font-size: var(--fs-h2);
    color: var(--gcr-moon);
    text-shadow: var(--text-shadow-pixel-sm);
    margin: 0 0 30px;
    letter-spacing: 0.02em;
  }

  .hero-bio {
    font-size: var(--fs-body);
    line-height: var(--lh-body);
    color: var(--fg-2);
    max-width: 460px;
    margin: 0 0 40px;
  }

  .hero-cta {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
  }

  .hero-art {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 340px;
  }

  @media (max-width: 820px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 60px var(--space-5) 80px;
    }

    .hero-art {
      order: -1;
    }

    .hero-name {
      font-size: 40px;
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 40px var(--space-4) 60px;
    }

    .hero-name {
      font-size: 28px;
    }
  }
</style>
