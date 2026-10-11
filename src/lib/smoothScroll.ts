import { replaceState } from '$app/navigation';

const MAX_DURATION_MS = 900;

/**
 * Rola até a âncora do link animando via requestAnimationFrame, sem depender do
 * smooth scroll nativo — que o Firefox ignora quando a rolagem suave está desligada.
 */
export function smoothScrollToHash(event: MouseEvent & { currentTarget: HTMLAnchorElement }): void {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const link = event.currentTarget;
  const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
  if (!target) return;

  event.preventDefault();
  replaceState(link.href, {});
  animateScrollTo(target.getBoundingClientRect().top + window.scrollY);
}

function animateScrollTo(top: number): void {
  const from = window.scrollY;
  const distance = top - from;
  const duration = Math.min(MAX_DURATION_MS, 300 + Math.abs(distance) / 4);
  let start: number | undefined;

  const step = (now: number) => {
    start ??= now;
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    // 'instant' evita que o scroll-behavior: smooth do CSS brigue com a animação
    window.scrollTo({ top: from + distance * eased, behavior: 'instant' });
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
