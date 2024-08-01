import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line
type ArrowFunction = (...args: any[]) => any;

export function useThrottle<T extends ArrowFunction = ArrowFunction>(
  value: T,
  interval = 500,
): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastExecuted = useRef<number>(Date.now());

  useEffect(() => {
    if (Date.now() >= lastExecuted.current + interval) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, interval);

      return () => clearTimeout(timerId);
    }
  }, [value, interval]);

  return throttledValue;
}
