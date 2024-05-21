import { useEffect, useRef, useLayoutEffect, useCallback } from 'react';

export interface useIntervalProps {
  fn: () => void;
  time: number;
  autoPlay?: boolean;
}

export function useInterval({ fn, time, autoPlay = true }: useIntervalProps) {
  const autoPlayRef = useRef(autoPlay);
  const run = useCallback(() => (autoPlayRef.current = true), []);
  const stop = useCallback(() => (autoPlayRef.current = false), []);

  const ref = useRef(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  });

  const cleanUpFnRef = useRef<() => void>();

  const clean = useCallback(() => {
    cleanUpFnRef.current?.();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!autoPlayRef.current) return;
      ref.current();
    }, time);

    cleanUpFnRef.current = () => {
      clearInterval(timer);
    };

    return clean;
  }, []);

  return {
    run,
    stop,
    clean
  };
}

export function useFetchInterval(fn, time) {
  const isPendingRef = useRef(false);
  useInterval({
    fn: () => {
      if (isPendingRef.current) return;
      isPendingRef.current = true;
      fn().finally(() => (isPendingRef.current = false));
    },
    time
  });
}
