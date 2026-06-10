<svelte:head>
  <title>Diário · gcrepho</title>
  <meta name="description" content="Devlog e notas de desenvolvimento por Gabriel Ramos — sobre código, design pixel-art e o que acontece entre as linhas." />
  <meta property="og:title" content="Diário · gcrepho" />
  <meta property="og:description" content="Devlog e notas de desenvolvimento por Gabriel Ramos — sobre código, design pixel-art e o que acontece entre as linhas." />
  <meta property="og:url" content="https://pinhaum.github.io/blog" />
</svelte:head>

<section class="page container">
  <header class="page-title">
    <span class="num">04 //</span>
    <span class="label">DIÁRIO</span>
  </header>
  <article class="post">
    <header class="post-header">
      <div class="post-kicker">DEV · APRENDIZADO · 2026</div>
      <h1 class="post-title">Por que estou reescrevendo<br/>meu portfólio do zero</h1>
      <div class="post-meta">
        <span>14 Mai 2026</span><span>·</span>
        <span>~6 min de leitura</span><span>·</span>
        <span class="post-tags">#dev #pixelart</span>
      </div>
    </header>
    <div class="post-body">
      <p>A primeira versão do meu site era um exercício de orgulho mal disfarçado: eu queria provar que dava pra construir tudo com HTML e CSS puros, sem framework, sem build, sem ajuda. Funcionou. Eu aprendi muito. Mas hoje, dois anos depois, ela parece um cartão de visita de uma pessoa que eu não sou mais.</p>
      <p>Quando comecei a pensar na reescrita, anotei três coisas num caderno:</p>
      <ul>
        <li>O site precisa parecer com os jogos que eu jogo, não com os jogos que estavam na moda em 2010.</li>
        <li>Cada decisão de design tem que ter uma razão maior do que "achei bonitinho".</li>
        <li>Eu quero conseguir escrever no meu próprio site sem brigar com ele.</li>
      </ul>
      <h2>// A virada do 16-bit pro 32-bit</h2>
      <p>O Super Metroid (1994) é 16-bit. Sea of Stars (2023) é pixel-art moderno, mas ele rouba a vibe do <em>32-bit</em> — a era de Chrono Cross, Castlevania: Symphony of the Night, Final Fantasy IX. Mais cores, mais camadas, mais atmosfera, sem perder a grade.</p>
      <p>Foi essa a fronteira que eu fui buscar. O fundo agora tem três camadas de paralaxe, neblina aurora, e um starfield que se move devagar. As capas dos projetos misturam gradientes, mas as bordas continuam duras. É pixel — mas pixel com alma de pintura.</p>
      <blockquote>"Pixel-art não é uma limitação técnica, é uma decisão estética."<br/>— alguém na internet, provavelmente</blockquote>
      <h2>// O stack mudou pouco</h2>
      <p>Continuo escrevendo HTML/CSS/JS como se fosse 2014, mas com Svelte só onde ele agrega — basicamente, navegação e estado de formulário. O resto é CSS antigo e bom:</p>
      <pre>{`.moon-sprite .moon {
  background: var(--gcr-moon);
  border: 6px solid #000;
  box-shadow: 0 0 12px var(--gcr-moon),
              0 0 24px rgba(255, 209, 102, 0.4);
}`}</pre>
      <p>Continuo achando que <code>box-shadow</code> resolve 80% dos problemas de design de interface. O outro 20% é coragem pra escolher uma cor errada de propósito.</p>
      <h2>// O que vem depois</h2>
      <p>Quero escrever mais. Quero publicar um devlog do <em>rest-quest</em>, falar sobre música, postar algumas das minhas playlists no Spotify transformadas em capas pixel. Talvez fazer um stream na Twitch mostrando como o site foi montado.</p>
      <p>Por enquanto, é isso. Se você leu até aqui: <a href="/contact">me manda um oi</a>. Curto saber quem tá do outro lado.</p>
    </div>
  </article>
</section>

<style>
  .post {
    max-width: 720px;
    margin: 0 auto;
  }

  .post-header {
    margin-bottom: var(--space-7);
    padding-bottom: var(--space-6);
    border-bottom: var(--border-3);
  }

  .post-kicker {
    font-family: var(--font-display);
    font-size: var(--fs-nano);
    letter-spacing: 0.1em;
    color: var(--gcr-aurora);
    margin-bottom: 18px;
  }

  .post-title {
    font-family: var(--font-display);
    font-size: var(--fs-h1);
    line-height: 1.3;
    color: var(--gcr-paper);
    text-shadow: var(--text-shadow-pixel);
    margin: 0 0 var(--space-5);
  }

  .post-meta {
    font-family: var(--font-mono);
    font-size: var(--fs-tiny);
    color: var(--fg-muted);
    display: flex;
    gap: 20px;
  }

  .post-tags { color: var(--gcr-aurora); }

  .post-body {
    font-family: var(--font-body);
    font-size: 20px;
    line-height: 1.65;
    color: var(--fg-1);
  }

  .post-body p { margin: 0 0 22px; }

  .post-body p:first-of-type::first-letter {
    float: left;
    font-family: var(--font-display);
    font-size: 42px;
    color: var(--gcr-coral);
    text-shadow: var(--text-shadow-pixel-sm);
    line-height: 1;
    padding: 6px 14px 0 0;
  }

  .post-body h2 {
    font-family: var(--font-display);
    font-size: 18px;
    color: var(--gcr-moon);
    text-shadow: var(--text-shadow-pixel-sm);
    margin: var(--space-7) 0 20px;
  }

  .post-body em { color: var(--gcr-coral); font-style: normal; }

  .post-body blockquote {
    margin: var(--space-6) 0;
    padding: 20px var(--space-5);
    background: var(--bg-elevated);
    border-left: 6px solid var(--gcr-coral);
    font-family: var(--font-mono);
    font-size: var(--fs-small);
    color: var(--fg-1);
    font-style: italic;
  }

  .post-body pre {
    background: var(--bg-inset);
    border: var(--border-2);
    padding: var(--space-4) 18px;
    overflow-x: auto;
    font-family: var(--font-code);
    font-size: var(--fs-small);
    color: var(--gcr-spark);
    margin: 28px 0;
  }

  .post-body code {
    font-family: var(--font-code);
    font-size: var(--fs-small);
  }

  .post-body ul {
    padding-left: var(--space-5);
    margin: 0 0 22px;
  }

  .post-body ul li { margin-bottom: 10px; }
  .post-body ul li::marker { color: var(--gcr-coral); content: '▸ '; }

  @media (max-width: 820px) {
    .post-meta {
      flex-wrap: wrap;
      gap: var(--space-2);
    }

    .post-body p:first-of-type::first-letter {
      font-size: 28px;
    }
  }
</style>
