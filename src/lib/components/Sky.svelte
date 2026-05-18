<div class="sky"></div>
<div class="sky-stars"></div>
<div class="aurora-fog"></div>

<style>
  .sky {
    position: fixed; inset: 0;
    z-index: -2;
    background: linear-gradient(180deg, var(--gcr-void) 0%, var(--gcr-night) 50%, var(--gcr-deep) 100%);
  }

  .sky-stars {
    position: fixed; inset: 0;
    z-index: -1;
    pointer-events: none;
    background-image:
      radial-gradient(1px 1px at 5% 10%,  var(--gcr-paper) 100%, transparent 100%),
      radial-gradient(1px 1px at 14% 65%, var(--gcr-paper-soft) 100%, transparent 100%),
      radial-gradient(2px 2px at 22% 28%, var(--gcr-aurora) 100%, transparent 100%),
      radial-gradient(1px 1px at 31% 88%, var(--gcr-paper) 100%, transparent 100%),
      radial-gradient(1px 1px at 39% 41%, var(--gcr-paper-soft) 100%, transparent 100%),
      radial-gradient(2px 2px at 47% 71%, var(--gcr-moon) 100%, transparent 100%),
      radial-gradient(1px 1px at 56% 14%, var(--gcr-paper) 100%, transparent 100%),
      radial-gradient(1px 1px at 64% 56%, var(--gcr-paper-soft) 100%, transparent 100%),
      radial-gradient(2px 2px at 71% 33%, var(--gcr-nebula) 100%, transparent 100%),
      radial-gradient(1px 1px at 79% 79%, var(--gcr-paper) 100%, transparent 100%),
      radial-gradient(1px 1px at 87% 21%, var(--gcr-paper-soft) 100%, transparent 100%),
      radial-gradient(1px 1px at 94% 60%, var(--gcr-paper) 100%, transparent 100%),
      radial-gradient(2px 2px at 9% 45%,  var(--gcr-aurora-dim) 100%, transparent 100%),
      radial-gradient(1px 1px at 42% 92%, var(--gcr-paper) 100%, transparent 100%),
      radial-gradient(1px 1px at 67% 8%,  var(--gcr-moon) 100%, transparent 100%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    animation: starfield-pan 60s linear infinite;
  }

  @keyframes starfield-pan {
    0%   { background-position: 0% 0%; }
    100% { background-position: -50px -30px; }
  }

  .aurora-fog {
    position: fixed; inset: 0;
    pointer-events: none;
    z-index: -1;
    background:
      radial-gradient(ellipse 800px 400px at 80% 20%, rgba(255, 209, 102, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse 600px 300px at 15% 80%, rgba(183, 148, 255, 0.10) 0%, transparent 50%),
      radial-gradient(ellipse 700px 350px at 50% 50%, rgba(91, 234, 255, 0.06) 0%, transparent 60%);
  }
</style>
