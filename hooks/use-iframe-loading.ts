import { useEffect, useRef, useState } from 'react';

/**
 * Detects when an iframe appears inside a container element and resolves
 * loading state once the iframe fires its load event. Works with third-party
 * scripts (e.g. ScoreApp) that inject iframes dynamically into a container div.
 */
export function useIframeLoading(containerRef: React.RefObject<HTMLElement | null>) {
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function attachLoadListener(iframe: HTMLIFrameElement) {
      const handleLoad = () => setIsLoading(false);

      // If already loaded (cached / fast connection)
      if (iframe.contentDocument?.readyState === 'complete') {
        setIsLoading(false);
        return;
      }

      iframe.addEventListener('load', handleLoad, { once: true });
    }

    // Check if an iframe already exists in the container
    const existing = container.querySelector('iframe');
    if (existing) {
      attachLoadListener(existing as HTMLIFrameElement);
      return;
    }

    // Watch for the script to inject the iframe
    observerRef.current = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          if (node instanceof HTMLIFrameElement) {
            attachLoadListener(node);
            observerRef.current?.disconnect();
            return;
          }
          // iframe may be nested inside a wrapper div
          if (node instanceof HTMLElement) {
            const nested = node.querySelector('iframe');
            if (nested) {
              attachLoadListener(nested as HTMLIFrameElement);
              observerRef.current?.disconnect();
              return;
            }
          }
        }
      }
    });

    observerRef.current.observe(container, { childList: true, subtree: true });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [containerRef]);

  return { isLoading };
}
