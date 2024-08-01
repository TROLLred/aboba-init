import { type MutableRefObject, useCallback, useRef } from 'react';

/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */

// eslint-disable-next-line
type ArrowFunction = (...args: any[]) => any;

export function useDebounce<T extends ArrowFunction = ArrowFunction>(
  callback: T,
  delay: number,
) {
  const timer = useRef() as MutableRefObject<number>;

  return useCallback(
    (...args: Parameters<T>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      // @ts-ignore
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
}
