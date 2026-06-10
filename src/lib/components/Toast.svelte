<script lang="ts">
  import { toastMessage } from '$lib/stores/toast';
</script>

<div class="toast" class:show={$toastMessage} role="alert" aria-live="polite">
  {$toastMessage}
</div>

<style>
  .toast {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: var(--gcr-spark);
    color: var(--gcr-ink);
    font-family: var(--font-display);
    font-size: var(--fs-nano);
    padding: 14px 18px;
    box-shadow: var(--shadow-hard);
    border: var(--border-2);
    z-index: 200;
    letter-spacing: 0.05em;
    opacity: 0;
    pointer-events: none;
    transform: translateY(var(--space-2));
    transition: opacity var(--t-base) var(--ease-step),
                transform var(--t-base) var(--ease-step);
  }

  .toast.show {
    opacity: 1;
    transform: translateY(0);
  }
</style>
