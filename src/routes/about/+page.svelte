<svelte:head>
  <title>Sobre · gcrepho</title>
  <meta name="description" content="Gabriel Ramos é desenvolvedor de software apaixonado por código simples, robusto e bem artesanado." />
  <meta property="og:title" content="Sobre · gcrepho" />
  <meta property="og:description" content="Gabriel Ramos é desenvolvedor de software apaixonado por código simples, robusto e bem artesanado." />
  <meta property="og:url" content="https://pinhaum.github.io/about" />
</svelte:head>

<section class="page container">
  <header class="page-title">
    <span class="num">03 //</span>
    <span class="label">SOBRE</span>
  </header>
  <div class="about-grid">
    <div class="portrait">
      <span class="portrait-letters">GR</span>
    </div>
    <div class="about-bio">
      <p>Sou um desenvolvedor de softwares que busca gerar códigos <em>simples</em> e <em>robustos</em>, utilizando-se dos seus gostos pessoais para resolver os problemas pelo caminho.</p>
      <p>Adoro <strong>video-games</strong>, <strong>música</strong> e variados tipos de <strong>leitura</strong> — acredito que isso me ajuda a gerar conexões e valor para todos os produtos e lugares onde atuo.</p>
      <p>Trabalho principalmente com <em>CSS, JavaScript, TypeScript, Ruby e Node</em>. Curto código que parece artesanato: linhas que cabem na cabeça, arquitetura que dá pra contar pra alguém no almoço.</p>
      <div class="favorites">
        <div class="fav">
          <span class="fav-cat c-game">▶ GAMES</span>
          <div class="fav-list">Super Metroid<br/>Sea of Stars<br/>Chrono Trigger<br/>Moonring</div>
        </div>
        <div class="fav">
          <span class="fav-cat c-music">♪ MÚSICA</span>
          <div class="fav-list">Lo-fi & chiptune<br/>Yasunori Mitsuda<br/>Hideki Naganuma<br/>Neanderdogs</div>
        </div>
        <div class="fav">
          <span class="fav-cat c-book">▣ LEITURA</span>
          <div class="fav-list">Sci-fi clássico<br/>Borges<br/>The Pragmatic Programmer<br/>Quadrinhos brasileiros</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about-grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 56px;
    align-items: start;
  }

  .portrait {
    width: 280px;
    height: 280px;
    background: linear-gradient(135deg, var(--gcr-coral) 0%, var(--gcr-nebula) 100%);
    border: var(--border-3);
    box-shadow: 10px 10px 0 var(--gcr-ink);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .portrait-letters {
    font-family: var(--font-display);
    font-size: 80px;
    color: var(--gcr-paper);
    text-shadow: 6px 6px 0 var(--gcr-ink);
    z-index: 2;
  }

  .portrait::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0 3px,
      rgba(0, 0, 0, 0.18) 3px 4px
    );
    z-index: 1;
  }

  .about-bio {
    font-family: var(--font-body);
    font-size: var(--fs-body);
    line-height: 1.6;
    color: var(--fg-1);
  }

  .about-bio p { margin: 0 0 22px; }
  .about-bio em { color: var(--gcr-aurora); font-style: normal; }
  .about-bio strong { color: var(--gcr-moon); font-weight: 500; }

  .favorites {
    margin-top: var(--space-7);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .fav {
    background: var(--bg-elevated);
    border: var(--border-3);
    box-shadow: var(--shadow-hard);
    padding: var(--space-4);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .fav-cat {
    font-family: var(--font-display);
    font-size: var(--fs-nano);
    letter-spacing: 0.06em;
  }

  .fav-cat.c-game  { color: var(--gcr-coral); }
  .fav-cat.c-music { color: var(--gcr-aurora); }
  .fav-cat.c-book  { color: var(--gcr-moon); }

  .fav-list {
    font-family: var(--font-mono);
    font-size: var(--fs-tiny);
    color: var(--fg-2);
    line-height: 1.7;
  }

  @media (max-width: 820px) {
    .about-grid {
      grid-template-columns: 1fr;
    }

    .portrait {
      width: 100%;
      max-width: 280px;
      height: auto;
      aspect-ratio: 1 / 1;
    }

    .favorites {
      grid-template-columns: 1fr;
    }
  }
</style>
