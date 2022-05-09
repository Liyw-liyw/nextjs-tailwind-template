export function waitTime(timeMs: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, timeMs);
  });
}
