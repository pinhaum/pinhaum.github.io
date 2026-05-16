/* global React, MoonSprite */
const { useState, useRef } = React;

/* =================================================================
   HERO
================================================================= */
function Hero({ onGo }) {
  return (
    <section className="hero" data-screen-label="01 Home">
      <div className="hero-text">
        <div className="hero-greeting">// olá, mundo</div>
        <h1 className="hero-name">
          Gabriel <span className="accent">Ramos</span>
        </h1>
        <h2 className="hero-role">Software Developer</h2>
        <p className="hero-bio">
          Crio softwares simples e robustos misturando o que aprendo no
          dia-a-dia com o que eu amo fora dele — <em style={{color:'var(--gcr-aurora)'}}>video-games</em>,
          {' '}<em style={{color:'var(--gcr-moon)'}}>música</em> e
          {' '}<em style={{color:'var(--gcr-nebula)'}}>leitura</em>.
          Acredito que isso me ajuda a gerar conexão e valor em todo lugar onde atuo.
        </p>
        <div className="hero-cta">
          <button className="btn primary" onClick={() => onGo('projects')}>
            Ver projetos <span className="arrow">▶</span>
          </button>
          <button className="btn ghost" onClick={() => onGo('contact')}>
            Mandar mensagem
          </button>
        </div>
      </div>
      <div className="hero-art">
        <MoonSprite />
      </div>
    </section>
  );
}

/* =================================================================
   PROJECTS
================================================================= */
const PROJECTS = [
  {
    id: 'pinhaum',
    cover: 'cover-1',
    year: '2024',
    name: 'pinhaum.github.io',
    desc: 'Meu portfólio pessoal. HTML/CSS na unha, ícones pixel-art desenhados à mão, Super Metroid como espírito.',
    tags: ['HTML', 'CSS', 'Pixel Art'],
  },
  {
    id: 'samus-cli',
    cover: 'cover-2',
    year: '2025',
    name: 'samus-cli',
    desc: 'Ferramenta de terminal que transforma stack traces em mapas de Metroid scrolláveis. Pra rir e debugar.',
    tags: ['Node', 'CLI', 'TTY'],
  },
  {
    id: 'fira-music',
    cover: 'cover-3',
    year: '2025',
    name: 'fira-music',
    desc: 'Biblioteca pequena pra escrever cifras de música em monoespaçado. Imprime bonito, lê melhor ainda.',
    tags: ['Ruby', 'Música'],
  },
  {
    id: 'rest-quest',
    cover: 'cover-4',
    year: '2026',
    name: 'rest-quest',
    desc: 'Um explorador de API REST em estilo 16-bit. Digita uma URL, vê o resultado como se fosse uma batalha de RPG.',
    tags: ['React', 'REST', 'Game'],
  },
];

function Projects({ flash }) {
  return (
    <section className="page container" data-screen-label="02 Projects">
      <header className="page-title">
        <span className="num">02 //</span>
        <span className="label">PROJETOS</span>
      </header>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <article key={p.id} className="card project" onClick={() => flash(`Abrindo ${p.name}…`)}>
            <div className={'project-cover ' + p.cover}></div>
            <div className="project-body">
              <div className="project-meta">{p.year} · em destaque</div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =================================================================
   ABOUT
================================================================= */
function About() {
  return (
    <section className="page container" data-screen-label="03 About">
      <header className="page-title">
        <span className="num">03 //</span>
        <span className="label">SOBRE</span>
      </header>
      <div className="about-grid">
        <div className="portrait">
          <span className="portrait-letters">GR</span>
        </div>
        <div className="about-bio">
          <p>
            Sou um desenvolvedor de softwares que busca gerar códigos <em>simples</em> e <em>robustos</em>,
            utilizando-se dos seus gostos pessoais para resolver os problemas do cliente.
          </p>
          <p>
            Adoro <strong>video-games</strong>, <strong>música</strong> e <strong>leitura</strong> —
            acredito que isso me ajuda a gerar conexões e valor para todos os produtos e lugares onde atuo.
          </p>
          <p>
            Trabalho principalmente com <em>HTML, CSS, JavaScript, Ruby e Node</em>.
            Curto código que parece artesanato: linhas que cabem na cabeça,
            arquitetura que dá pra contar pra alguém no almoço.
          </p>

          <div className="favorites">
            <div className="fav">
              <span className="fav-cat c-game">▶ GAMES</span>
              <div className="fav-list">
                Super Metroid<br/>
                Sea of Stars<br/>
                Chrono Trigger<br/>
                Moonring
              </div>
            </div>
            <div className="fav">
              <span className="fav-cat c-music">♪ MÚSICA</span>
              <div className="fav-list">
                Lo-fi & chiptune<br/>
                Yasunori Mitsuda<br/>
                Hideki Naganuma<br/>
                MPB clássica
              </div>
            </div>
            <div className="fav">
              <span className="fav-cat c-book">▣ LEITURA</span>
              <div className="fav-list">
                Sci-fi clássico<br/>
                Borges<br/>
                The Pragmatic Programmer<br/>
                Quadrinhos brasileiros
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   CONTACT
================================================================= */
function Contact({ flash }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  function submit(e) {
    e.preventDefault();
    if (!name || !email || !msg) return flash('faltam campos!');
    flash('mensagem enviada · obrigado');
    setName(''); setEmail(''); setMsg('');
  }
  return (
    <section className="page container" data-screen-label="05 Contact">
      <header className="page-title">
        <span className="num">05 //</span>
        <span className="label">CONTATO</span>
      </header>
      <div className="contact-grid">
        <div className="contact-intro">
          <p>
            Manda um oi. Pode ser sobre um projeto, uma vaga, uma música que você
            tá curtindo, ou só pra trocar ideia sobre Super Metroid.
            Respondo em até 2 dias.
          </p>
          <div className="contact-channels">
            <a className="channel gh"   href="#"><span className="ico">G</span><span>github.com/<b>pinhaum</b></span></a>
            <a className="channel li"   href="#"><span className="ico">in</span><span>linkedin.com/in/<b>gabrielramos</b></span></a>
            <a className="channel mail" href="#"><span className="ico">@</span><span>gabriel<span className="at">[at]</span>gcrepho.dev</span></a>
            <a className="channel tw"   href="#"><span className="ico">t</span><span>twitch.tv/<b>gcrepho</b></span></a>
          </div>
        </div>
        <form className="form" onSubmit={submit}>
          <div className="field">
            <label>NOME</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="seu nome" />
          </div>
          <div className="field">
            <label>EMAIL</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="voce@email.com" />
          </div>
          <div className="field">
            <label>MENSAGEM</label>
            <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="diz aí…"></textarea>
          </div>
          <button type="submit" className="btn primary">Enviar mensagem <span className="arrow">▶</span></button>
        </form>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Projects, About, Contact });
