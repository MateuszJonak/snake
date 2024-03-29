import { useEffect, useRef } from 'react';

export const useInterval = (callback: Function, delay: number) => {
  const savedCallback = useRef<Function>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const tick = () => savedCallback.current && savedCallback.current();
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};
