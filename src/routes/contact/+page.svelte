<script lang="ts">
  import { flash } from '$lib/stores/toast';

  let name = $state('');
  let email = $state('');
  let msg = $state('');

  function submit(e: Event) {
    e.preventDefault();
    if (!name || !email || !msg) return flash('faltam campos!');
    flash('mensagem enviada · obrigado');
    name = '';
    email = '';
    msg = '';
  }
</script>

<svelte:head><title>Contato · gcrepho</title></svelte:head>

<section class="page container">
  <header class="page-title">
    <span class="num">05 //</span>
    <span class="label">CONTATO</span>
  </header>
  <div class="contact-grid">
    <div class="contact-intro">
      <p>Manda um oi. Pode ser sobre um projeto, uma vaga, uma música que você tá curtindo, ou só pra trocar ideia sobre Super Metroid. Respondo em até 2 dias.</p>
      <div class="contact-channels">
        <a class="channel gh" href="https://github.com/pinhaum">
          <span class="ico">G</span>
          <span>github.com/<b>pinhaum</b></span>
        </a>
        <a class="channel li" href="https://linkedin.com/in/gabrielramos">
          <span class="ico">in</span>
          <span>linkedin.com/in/<b>gabrielramos</b></span>
        </a>
        <a class="channel mail" href="mailto:gabriel@gcrepho.dev">
          <span class="ico">@</span>
          <span>gabriel<span class="at">[at]</span>gcrepho.dev</span>
        </a>
        <a class="channel tw" href="https://twitch.tv/gcrepho">
          <span class="ico">t</span>
          <span>twitch.tv/<b>gcrepho</b></span>
        </a>
      </div>
    </div>
    <form class="form" onsubmit={submit}>
      <div class="field">
        <label for="f-name">NOME</label>
        <input id="f-name" bind:value={name} placeholder="seu nome" />
      </div>
      <div class="field">
        <label for="f-email">EMAIL</label>
        <input id="f-email" type="email" bind:value={email} placeholder="voce@email.com" />
      </div>
      <div class="field">
        <label for="f-msg">MENSAGEM</label>
        <textarea id="f-msg" bind:value={msg} placeholder="diz aí…"></textarea>
      </div>
      <button type="submit" class="btn primary">
        Enviar mensagem <span class="arrow">▶</span>
      </button>
    </form>
  </div>
</section>

<style>
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: start;
  }

  .contact-intro p {
    font-family: var(--font-body);
    font-size: var(--fs-body);
    line-height: 1.6;
    color: var(--fg-2);
    margin: 0 0 28px;
  }

  .contact-channels {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .channel {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: 14px 18px;
    background: var(--bg-elevated);
    border: var(--border-3);
    font-family: var(--font-mono);
    font-size: var(--fs-tiny);
    color: var(--fg-2);
    text-decoration: none;
    transition: transform var(--t-fast) var(--ease-step);
  }

  .channel:hover {
    transform: translateX(4px);
    color: var(--gcr-paper);
  }

  .channel .ico {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: 14px;
    border: var(--border-1);
    flex-shrink: 0;
  }

  .channel.gh   .ico { background: var(--gcr-paper);  color: var(--gcr-ink); }
  .channel.li   .ico { background: var(--gcr-aurora); color: var(--gcr-ink); }
  .channel.mail .ico { background: var(--gcr-coral);  color: var(--gcr-paper); }
  .channel.tw   .ico { background: var(--gcr-nebula); color: var(--gcr-ink); }

  .channel .at { color: var(--fg-muted); }

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .field label {
    font-family: var(--font-display);
    font-size: 10px;
    letter-spacing: 0.08em;
    color: var(--gcr-aurora);
  }

  .field input,
  .field textarea {
    background: var(--bg-inset);
    border: var(--border-3);
    padding: var(--space-3) 14px;
    font-family: var(--font-mono);
    font-size: 14px;
    color: var(--gcr-paper);
    outline: none;
    transition: border-color var(--t-fast) var(--ease-step),
                box-shadow var(--t-fast) var(--ease-step);
  }

  .field input:focus,
  .field textarea:focus {
    border-color: var(--gcr-aurora);
    box-shadow: var(--shadow-hard);
  }

  .field textarea {
    min-height: 140px;
    resize: vertical;
  }
</style>
