import { useEffect, useRef, useState } from 'react';

export function useEffectOnce(f: () => Promise<void | (() => void)>) {
  const ignore = useRef(false)
  const cleanup = useRef<void | (() => void)>()

  useEffect(() => {
    const process = async () => {
      if (ignore.current) {
        return;
      }
      ignore.current = true;
      cleanup.current = await f();
    }

    process()
    return () => {
      if (typeof cleanup.current === 'function') {
        cleanup.current();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
