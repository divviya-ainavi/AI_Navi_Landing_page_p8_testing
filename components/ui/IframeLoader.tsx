'use client';

import React, { useRef } from 'react';
import { useIframeLoading } from '@/hooks/use-iframe-loading';
import { Skeleton } from '@/components/ui/skeleton';

interface IframeLoaderProps {
  children: React.ReactNode;
  /** Approximate height to reserve for the skeleton while loading */
  skeletonHeight?: string;
  className?: string;
}

/**
 * Wraps a third-party iframe embed (e.g. ScoreApp) and displays a skeleton
 * loading overlay until the iframe fires its load event.
 */
export function IframeLoader({ children, skeletonHeight = '600px', className }: IframeLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useIframeLoading(containerRef);

  return (
    <div ref={containerRef} className={`relative w-full ${className ?? ''}`}>
      {/* Skeleton overlay — shown while iframe is loading */}
      {isLoading && (
        <div
          className="absolute inset-0 z-10 flex flex-col gap-3 p-6 bg-white"
          style={{ minHeight: skeletonHeight }}
          aria-label="Loading scorecard…"
          aria-live="polite"
        >
          {/* Spinner */}
          <div className="flex items-center justify-center mb-2">
            <span
              className="inline-block h-8 w-8 rounded-full border-4 border-orange/30 border-t-orange animate-spin"
              role="status"
              aria-hidden="true"
            />
          </div>

          {/* Skeleton lines that mimic a form/content block */}
          <Skeleton className="h-6 w-2/3 mx-auto rounded-md" />
          <Skeleton className="h-4 w-1/2 mx-auto rounded-md" />
          <div className="space-y-2 mt-4 px-4">
            <Skeleton className="h-10 w-full rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
            <Skeleton className="h-10 w-3/4 rounded-md" />
          </div>
          <Skeleton className="h-10 w-36 mx-auto rounded-md mt-4" />

          <p className="text-[12px] text-center text-navy/40 mt-2">Loading scorecard…</p>
        </div>
      )}

      {/* The actual embed — rendered immediately so the script can initialise */}
      <div
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden={isLoading}
      >
        {children}
      </div>
    </div>
  );
}
