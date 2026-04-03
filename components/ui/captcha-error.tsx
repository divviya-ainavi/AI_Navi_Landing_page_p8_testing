'use client';
import React from 'react';

interface CaptchaErrorProps {
  show: boolean;
  message?: string;
  className?: string;
}

export function CaptchaError({ show, message, className = '' }: CaptchaErrorProps) {
  if (!show) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      className={`flex items-start gap-2.5 rounded-[8px] border border-orange/30 bg-orange/5 px-4 py-3 ${className}`}
    >
      <svg
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 shrink-0 text-orange"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        />
      </svg>
      <p className="text-[13px] font-medium text-orange leading-snug">
        {message ?? 'Please complete the captcha verification below before resubmitting.'}
      </p>
    </div>
  );
}
