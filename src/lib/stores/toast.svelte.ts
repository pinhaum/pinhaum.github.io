export const toast = $state({ message: '' });

let timer: ReturnType<typeof setTimeout>;

export function flash(msg: string): void {
  toast.message = msg;
  clearTimeout(timer);
  timer = setTimeout(() => (toast.message = ''), 2000);
}
