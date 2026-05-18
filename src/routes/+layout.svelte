<script lang="ts">
  import '../app.css';
  import Sky from '$lib/components/Sky.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Toast from '$lib/components/Toast.svelte';

  let { children } = $props();
</script>

<div class="app">
  <Sky />
  <Nav />
  <main>{@render children()}</main>
  <Footer />
  <Toast />
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-x: hidden;
  }

  main {
    flex: 1;
  }

  .app::before {
    content: '';
    position: fixed; inset: 0;
    pointer-events: none;
    z-index: 999;
    background: repeating-linear-gradient(
      0deg,
      rgba(0,0,0,0) 0,
      rgba(0,0,0,0) 2px,
      rgba(255,255,255,0.018) 2px,
      rgba(255,255,255,0.018) 3px
    );
  }

  .app::after {
    content: '';
    position: fixed; inset: 0;
    pointer-events: none;
    z-index: 998;
    opacity: 0.05;
    background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 0.5px, transparent 1px);
    background-size: 3px 3px;
  }
</style>
