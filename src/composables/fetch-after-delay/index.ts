export default function fetchAfterDelay (callback = () => {}, delay: 1000) {
  let timer: number = 0;

  return (...args: unknown[]) => new Promise((resolve, reject) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      try {
        const output = callback(...args);
        resolve(output);
      } catch (err) {
        reject(err);
      }
    }, delay);
  })
}

