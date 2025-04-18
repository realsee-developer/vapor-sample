interface Listener<T extends any[]> {
  on(fn: (...args: T) => void): () => void;
  emit(...args: T): void;
}

function createListener<T extends any[]>(): Listener<T> {
  const callbacks: ((...args: T) => void)[] = [];

  return {
    on(fn) {
      callbacks.push(fn);
      return () => {
        const index = callbacks.indexOf(fn);
        if (index >= 0) {
          callbacks.splice(index, 1);
        }
      };
    },
    emit(...args) {
      for (const callback of callbacks) {
        callback(...args);
      }
    },
  };
}

export { createListener, Listener };
