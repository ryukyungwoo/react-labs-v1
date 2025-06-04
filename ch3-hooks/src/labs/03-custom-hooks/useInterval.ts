export function useInterval(callback: () => void, init: number) {
  return setTimeout(() => {
    callback();
  }, init);
}
