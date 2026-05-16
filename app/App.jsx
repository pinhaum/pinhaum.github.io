/* global React, ReactDOM, Nav, Footer, Sky, Hero, Projects, About, Contact, Blog, ReadmeHero, NotFound */
const { useState, useEffect, useRef } = React;

function App() {
  // Hash-based router — funciona com refresh e back/forward
  const [route, setRoute] = useState(() => {
    const h = (window.location.hash || '#home').replace('#', '');
    return h || 'home';
  });
  const [toast, setToast] = useState('');
  const tRef = useRef(null);

  useEffect(() => {
    function onHash() {
      const h = (window.location.hash || '#home').replace('#', '');
      setRoute(h || 'home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  function go(r) {
    window.location.hash = '#' + r;
  }

  function flash(msg) {
    setToast(msg);
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setToast(''), 2000);
  }

  // Para o tab de design: também responde ao postMessage de slide
  useEffect(() => {
    // mantém scroll de volta ao topo em troca de rota é tratado acima
  }, []);

  let page;
  switch (route) {
    case 'home':     page = <Hero onGo={go} />; break;
    case 'projects': page = <Projects flash={flash} />; break;
    case 'about':    page = <About />; break;
    case 'contact':  page = <Contact flash={flash} />; break;
    case 'blog':     page = <Blog onGo={go} />; break;
    case 'readme':   page = <ReadmeHero />; break;
    case 'notfound': page = <NotFound onGo={go} flash={flash} />; break;
    default:         page = <NotFound onGo={go} flash={flash} />;
  }

  return (
    <div className="app">
      <Sky />
      <Nav route={route} onGo={go} />
      <main>{page}</main>
      <Footer />
      <div className={'toast ' + (toast ? 'show' : '')}>{toast || '·'}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
