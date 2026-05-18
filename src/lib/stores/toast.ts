import { writable } from 'svelte/store';

export const toastMessage = writable('');

let timer: ReturnType<typeof setTimeout>;

export function flash(msg: string) {
  toastMessage.set(msg);
  clearTimeout(timer);
  timer = setTimeout(() => toastMessage.set(''), 2000);
}
