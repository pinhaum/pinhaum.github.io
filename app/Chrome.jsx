/* global React */
const { useState } = React;

const ROUTES = [
  { id: 'home',     label: 'Início',    short: '01' },
  { id: 'projects', label: 'Projetos',  short: '02' },
  { id: 'about',    label: 'Sobre',     short: '03' },
  { id: 'blog',     label: 'Diário',    short: '04' },
  { id: 'contact',  label: 'Contato',   short: '05' },
  { id: 'readme',   label: 'Readme',    short: '06' },
  { id: 'notfound', label: '404',       short: '??' },
];

function Nav({ route, onGo }) {
  return (
    <nav className="nav">
      <button className="nav-brand" onClick={() => onGo('home')}>
        <img src="assets/img/terminal.svg" alt="" />
        <span>gcrepho<span className="dot">.</span><span className="blink">_</span></span>
      </button>
      <div className="nav-links">
        {ROUTES.filter(r => r.id !== 'notfound').map(r => (
          <button
            key={r.id}
            className={'nav-link ' + (route === r.id ? 'active' : '')}
            onClick={() => onGo(r.id)}
          >
            <span>{r.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>made 4 fun with <span className="heart">❤</span> · 2026</p>
      <p>gabriel ramos · software developer · pixel-art enthusiast</p>
    </footer>
  );
}

function Sky() {
  return (
    <>
      <div className="sky"></div>
      <div className="sky-stars"></div>
      <div className="aurora-fog"></div>
    </>
  );
}

function MoonSprite() {
  return (
    <div className="moon-sprite">
      <img className="moon-img" src="assets/img/moon.svg" alt="lua pixel-art" />
      <span className="star big s1"></span>
      <span className="star warm s2"></span>
      <span className="star s3"></span>
      <span className="star big s4"></span>
      <span className="star warm s5"></span>
      <span className="star s6"></span>
    </div>
  );
}

Object.assign(window, { Nav, Footer, Sky, MoonSprite, ROUTES });
