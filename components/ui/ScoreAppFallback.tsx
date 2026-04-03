'use client';

import React from 'react';

interface ScoreAppFallbackProps {
  onRetry: () => void;
}

export function ScoreAppFallback({ onRetry }: ScoreAppFallbackProps) {
  return (
    <div className="bg-white w-full py-16 px-8 flex flex-col items-center text-center gap-6">
      <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E8743B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <div className="max-w-md">
        <h3
          className="font-bold text-navy mb-2"
          style={{ fontSize: 'clamp(17px, 2vw, 22px)', fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          The scorecard is temporarily unavailable
        </h3>
        <p className="text-[14px] text-mid-grey leading-relaxed">
          Our AI Readiness Scorecard is hosted by a third-party service that appears to be
          temporarily unreachable. This is usually resolved within a few minutes.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 border border-orange text-orange font-semibold text-[14px] py-3 px-6 rounded-[8px] hover:bg-orange/5 transition-all duration-150"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
          Try again
        </button>

        <a
          href="#contact"
          className="inline-block bg-orange hover:bg-orange/90 text-white font-semibold text-[14px] py-3 px-6 rounded-[8px] transition-all duration-150"
        >
          Talk to us directly
        </a>
      </div>

      <p className="text-[12px] text-mid-grey">
        Or take the scorecard later at{' '}
        <a
          href="https://ai-rpigbkp1.scoreapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange underline underline-offset-2"
        >
          ai-rpigbkp1.scoreapp.com
        </a>
      </p>
    </div>
  );
}
