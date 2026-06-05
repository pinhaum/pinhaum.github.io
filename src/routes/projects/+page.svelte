<script lang="ts">
  import { url } from "node:inspector";

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
      url: "https://github.com/pinhaum/samus-cli"
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
    {
      id: 'wallpaper-slider',
      cover: 'cover-5',
      year: '2025',
      name: 'wallpaper-slider',
      desc: 'Galeria de wallpapers com transições pixel-art. Compartilho aqui os wallpapers que uso no meu desktop.',
      tags: ['ReactJs', 'CSS', 'Galeria'],
      url: 'https://pinhaum.github.io/wallpaper-slider',
    },
  ];
</script>

<svelte:head>
  <title>Projetos · gcrepho</title>
  <meta name="description" content="Projetos de software desenvolvidos por Gabriel Ramos — portfólio, ferramentas de terminal, bibliotecas e exploradores de API." />
  <meta property="og:title" content="Projetos · gcrepho" />
  <meta property="og:description" content="Projetos de software desenvolvidos por Gabriel Ramos — portfólio, ferramentas de terminal, bibliotecas e exploradores de API." />
  <meta property="og:url" content="https://pinhaum.github.io/projects" />
</svelte:head>

<section class="page container">
  <header class="page-title">
    <span class="num">02 //</span>
    <span class="label">PROJETOS</span>
  </header>
  <div class="projects-grid">
    {#each PROJECTS as p (p.id)}
      <svelte:element
        this={p.url ? 'a' : 'article'}
        class="card project"
        href={p.url ?? undefined}
        target={p.url ? '_blank' : undefined}
        rel={p.url ? 'noopener noreferrer' : undefined}
      >
        <div class="project-cover {p.cover}"></div>
        <div class="project-body">
          <div class="project-meta">{p.year} · em destaque</div>
          <h3 class="project-name">{p.name}</h3>
          <p class="project-desc">{p.desc}</p>
          <div class="project-tags">
            {#each p.tags as t}<span class="tag">{t}</span>{/each}
          </div>
        </div>
      </svelte:element>
    {/each}
  </div>
</section>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
  }

  .project {
    padding: 0;
    overflow: hidden;
  }

  .project-cover {
    height: 180px;
    border-bottom: var(--border-2);
    image-rendering: pixelated;
  }

  .project-cover.cover-1 {
    background:
      radial-gradient(circle at 30% 40%, var(--gcr-coral) 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, var(--gcr-moon) 0%, transparent 50%),
      var(--gcr-dusk);
  }

  .project-cover.cover-2 {
    background:
      linear-gradient(135deg, var(--gcr-aurora) 0%, transparent 60%),
      linear-gradient(225deg, var(--gcr-nebula) 0%, transparent 60%),
      var(--gcr-night);
  }

  .project-cover.cover-3 {
    background:
      repeating-linear-gradient(45deg, var(--gcr-coral) 0 8px, transparent 8px 24px),
      var(--gcr-dusk);
  }

  .project-cover.cover-4 {
    background:
      radial-gradient(circle at 50% 50%, var(--gcr-spark) 0%, transparent 40%),
      var(--gcr-night);
  }

  .project-cover.cover-5 {
    background:
      repeating-linear-gradient(0deg, transparent 0 20px, rgba(91, 234, 255, 0.07) 20px 22px),
      linear-gradient(160deg, var(--gcr-nebula) 0%, var(--gcr-deep) 50%, var(--gcr-aurora-dim) 100%);
  }

  a.project {
    display: block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  a.project:hover {
    background: var(--bg-hover);
  }

  .project-body {
    padding: 22px var(--space-5) 26px;
  }

  .project-meta {
    font-family: var(--font-mono);
    font-size: var(--fs-nano);
    color: var(--fg-muted);
    letter-spacing: 0.06em;
    margin-bottom: var(--space-2);
  }

  .project-name {
    font-family: var(--font-display);
    font-size: 18px;
    color: var(--gcr-paper);
    margin: 0 0 var(--space-3);
  }

  .project-desc {
    font-family: var(--font-body);
    font-size: var(--fs-small);
    line-height: 1.5;
    color: var(--fg-2);
    margin: 0 0 var(--space-4);
  }

  .project-tags {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
  }

  @media (max-width: 820px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
