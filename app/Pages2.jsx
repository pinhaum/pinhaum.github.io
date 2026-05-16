/* global React */

/* =================================================================
   BLOG POST
================================================================= */
function Blog({ onGo }) {
  return (
    <section className="page container" data-screen-label="04 Blog">
      <header className="page-title">
        <span className="num">04 //</span>
        <span className="label">DIÁRIO</span>
      </header>

      <article className="post">
        <header className="post-header">
          <div className="post-kicker">DEV · APRENDIZADO · 2026</div>
          <h1 className="post-title">
            Por que estou reescrevendo<br/>meu portfólio do zero
          </h1>
          <div className="post-meta">
            <span>14 Mai 2026</span>
            <span>·</span>
            <span>~6 min de leitura</span>
            <span>·</span>
            <span style={{color:'var(--gcr-aurora)'}}>#dev #pixelart</span>
          </div>
        </header>

        <div className="post-body">
          <p>
            A primeira versão do meu site era um exercício de orgulho mal disfarçado:
            eu queria provar que dava pra construir tudo com HTML e CSS puros,
            sem framework, sem build, sem ajuda. Funcionou. Eu aprendi muito.
            Mas hoje, dois anos depois, ela parece um cartão de visita de uma
            pessoa que eu não sou mais.
          </p>

          <p>
            Quando comecei a pensar na reescrita, anotei três coisas num caderno:
          </p>

          <ul>
            <li>O site precisa parecer com os jogos que eu jogo, não com os jogos que estavam na moda em 2010.</li>
            <li>Cada decisão de design tem que ter uma razão maior do que "achei bonitinho".</li>
            <li>Eu quero conseguir escrever no meu próprio site sem brigar com ele.</li>
          </ul>

          <h2>// A virada do 16-bit pro 32-bit</h2>

          <p>
            O Super Metroid (1994) é 16-bit. Sea of Stars (2023) é pixel-art moderno,
            mas ele rouba a vibe do <em style={{color:'var(--gcr-coral)'}}>32-bit</em> — a era de
            Chrono Cross, Castlevania: Symphony of the Night, Final Fantasy IX.
            Mais cores, mais camadas, mais atmosfera, sem perder a grade.
          </p>

          <p>
            Foi essa a fronteira que eu fui buscar. O fundo agora tem três camadas
            de paralaxe, neblina aurora, e um starfield que se move devagar.
            As capas dos projetos misturam gradientes, mas as bordas continuam duras.
            É pixel — mas pixel com alma de pintura.
          </p>

          <blockquote>
            "Pixel-art não é uma limitação técnica, é uma decisão estética."
            <br/>— alguém na internet, provavelmente
          </blockquote>

          <h2>// O stack mudou pouco</h2>

          <p>
            Continuo escrevendo HTML/CSS/JS como se fosse 2014, mas com React
            só onde ele agrega — basicamente, navegação e estado de formulário.
            O resto é CSS antigo e bom:
          </p>

          <pre>{`.moon-sprite .moon {
  background: var(--gcr-moon);
  border: 6px solid #000;
  box-shadow: 0 0 12px var(--gcr-moon),
              0 0 24px rgba(255, 209, 102, 0.4);
}`}</pre>

          <p>
            Continuo achando que <code>box-shadow</code> resolve 80% dos problemas
            de design de interface. O outro 20% é coragem pra escolher uma cor errada de propósito.
          </p>

          <h2>// O que vem depois</h2>

          <p>
            Quero escrever mais. Quero publicar um devlog do <em>rest-quest</em>,
            falar sobre música, postar algumas das minhas playlists no Spotify
            transformadas em capas pixel. Talvez fazer um stream na Twitch
            mostrando como o site foi montado.
          </p>

          <p>
            Por enquanto, é isso. Se você leu até aqui:{' '}
            <button onClick={() => onGo('contact')} style={{
              background: 'none', border: 'none', padding: 0,
              color: 'var(--gcr-coral)', textDecoration: 'underline',
              fontFamily: 'inherit', fontSize: 'inherit', cursor: 'pointer'
            }}>me manda um oi</button>. Curto saber quem tá do outro lado.
          </p>
        </div>
      </article>
    </section>
  );
}

/* =================================================================
   README HERO (GitHub banner mock)
================================================================= */
function ReadmeHero() {
  return (
    <section className="page container" data-screen-label="06 README">
      <header className="page-title">
        <span className="num">06 //</span>
        <span className="label">README HERO</span>
      </header>

      <p style={{textAlign:'center', maxWidth: 640, margin:'0 auto 36px', color:'var(--fg-muted)', fontFamily:'var(--font-mono)', fontSize: 13}}>
        Banner reutilizável pro topo de qualquer repo no GitHub.
        Cole o markdown ou screenshot abaixo de tudo o que eu escrevo.
      </p>

      <div className="readme-banner">
        <div className="readme-content">
          <h1 className="readme-title">
            <span className="at">~/</span>gcrepho
          </h1>
          <p className="readme-tag">
            // construindo software com a mesma vontade<br/>
            // de quem joga um JRPG no fim de semana
          </p>

          <div className="readme-shields">
            <span className="shield aurora"><span className="key">stack</span><span className="val">react · node · ruby</span></span>
            <span className="shield coral"><span className="key">aesthetic</span><span className="val">pixel · 32-bit</span></span>
            <span className="shield moon"><span className="key">based in</span><span className="val">brasil 🇧🇷</span></span>
            <span className="shield spark"><span className="key">status</span><span className="val">open to work</span></span>
          </div>

          <div className="readme-stats">
            <div className="stat">
              <span className="num">128</span>
              <span className="lbl">// repos públicos</span>
            </div>
            <div className="stat">
              <span className="num">42K</span>
              <span className="lbl">// commits em 5 anos</span>
            </div>
            <div className="stat">
              <span className="num">7</span>
              <span className="lbl">// linguagens favoritas</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{maxWidth: 720, margin:'40px auto 0', fontFamily:'var(--font-mono)', fontSize: 13, color:'var(--fg-2)', lineHeight: 1.8}}>
        <p style={{color:'var(--gcr-aurora)', marginBottom: 8}}># sobre</p>
        <p>
          Software developer que faz código simples e robusto.<br/>
          Adora video-games, música e leitura — usa isso como linguagem<br/>
          pra resolver problemas e criar conexão.
        </p>
        <p style={{color:'var(--gcr-aurora)', margin:'24px 0 8px'}}># onde me achar</p>
        <p>
          → <a href="#" style={{color:'var(--gcr-coral)'}}>github.com/pinhaum</a><br/>
          → <a href="#" style={{color:'var(--gcr-coral)'}}>twitch.tv/gcrepho</a><br/>
          → gabriel<span style={{color:'var(--fg-muted)'}}>[at]</span>gcrepho.dev
        </p>
      </div>
    </section>
  );
}

/* =================================================================
   404
================================================================= */
function NotFound({ onGo, flash }) {
  function poke() {
    flash('boo! voltando…');
    setTimeout(() => onGo('home'), 900);
  }
  return (
    <section className="page" data-screen-label="?? 404">
      <div className="notfound">
        <div className="ghost" onClick={poke} style={{cursor:'pointer'}} title="clica em mim">
          <div className="body"></div>
        </div>
        <h1 className="code">0x404</h1>
        <p className="msg">PÁGINA NÃO ENCONTRADA</p>
        <p className="sub">
          parece que esse caminho não existe (ainda) · clica no fantasminha pra voltar
        </p>
        <button className="btn primary" onClick={() => onGo('home')}>
          Voltar pro início <span className="arrow">▶</span>
        </button>
      </div>
    </section>
  );
}

Object.assign(window, { Blog, ReadmeHero, NotFound });
