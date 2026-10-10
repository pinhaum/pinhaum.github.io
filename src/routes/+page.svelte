<script lang="ts">
  import Hero from '$lib/sections/Hero.svelte';
  import Projects from '$lib/sections/Projects.svelte';
  import About from '$lib/sections/About.svelte';
  import Contact from '$lib/sections/Contact.svelte';
</script>

<svelte:head>
  <title>gcrepho — Gabriel Ramos · Software Developer</title>
  <meta name="description" content="Portfólio de Gabriel Ramos — desenvolvedor de software que mistura código limpo com video-games, música e leitura." />
  <meta property="og:title" content="gcrepho — Gabriel Ramos · Software Developer" />
  <meta property="og:description" content="Portfólio de Gabriel Ramos — desenvolvedor de software que mistura código limpo com video-games, música e leitura." />
  <meta property="og:url" content="https://pinhaum.github.io/" />
</svelte:head>

<Hero />
<Projects />
<About />
<Contact />
