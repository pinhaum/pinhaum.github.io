<div class="moon-sprite">
  <img class="moon-img" src="/assets/img/moon.svg" alt="lua pixel-art" />
  <span class="star big s1"></span>
  <span class="star warm s2"></span>
  <span class="star s3"></span>
  <span class="star big s4"></span>
  <span class="star warm s5"></span>
  <span class="star s6"></span>
</div>

<style>
  .moon-sprite {
    position: relative;
    width: 280px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .moon-img {
    width: 220px;
    height: 220px;
    animation: float-y 5s var(--ease-step-4) infinite;
    filter:
      drop-shadow(0 0 18px rgba(255, 209, 102, 0.45))
      drop-shadow(0 0 36px rgba(255, 209, 102, 0.25));
  }

  .star {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--gcr-paper);
    box-shadow: 0 0 8px var(--gcr-paper);
  }

  .star.big  { width: 10px; height: 10px; background: var(--gcr-aurora); box-shadow: 0 0 12px var(--gcr-aurora); }
  .star.warm { background: var(--gcr-moon); box-shadow: 0 0 10px var(--gcr-moon); }

  .s1 { left: 20px;  top: 30px;  animation: twinkle 2.5s var(--ease-step) infinite; }
  .s2 { left: 240px; top: 50px;  animation: twinkle 3s   var(--ease-step) infinite 0.5s; }
  .s3 { left: 10px;  top: 240px; animation: twinkle 2s   var(--ease-step) infinite 1s; }
  .s4 { left: 250px; top: 250px; animation: twinkle 3.5s var(--ease-step) infinite 0.3s; }
  .s5 { left: 250px; top: 140px; animation: twinkle 4s   var(--ease-step) infinite 0.7s; }
  .s6 { left: 0;     top: 130px; animation: twinkle 2.8s var(--ease-step) infinite 1.4s; }
</style>
