export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  fn: F,
  wait: number,
) {
  let timeout: NodeJS.Timeout;

  function debounced(...args: Parameters<F>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  }

  return debounced;
}
