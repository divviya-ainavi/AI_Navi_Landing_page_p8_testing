'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

export function useIframeError(timeoutMs = 8000) {
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleScriptError = useCallback(() => {
    setHasError(true);
  }, []);

  const retry = useCallback(() => {
    setHasError(false);
    setRetryKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new MutationObserver(() => {
      if (container.querySelector('iframe')) {
        clearTimeout(timerRef.current);
        observer.disconnect();
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    timerRef.current = setTimeout(() => {
      if (!container.querySelector('iframe')) {
        setHasError(true);
      }
      observer.disconnect();
    }, timeoutMs);

    return () => {
      clearTimeout(timerRef.current);
      observer.disconnect();
    };
  }, [retryKey, timeoutMs]);

  return { hasError, retryKey, containerRef, handleScriptError, retry };
}
