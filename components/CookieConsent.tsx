'use client';

import { useState, useEffect } from 'react';
import posthog from 'posthog-js';

const CONSENT_KEY = 'ainavi_cookie_consent';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setShowBanner(false);
    // PostHog is already initialized, opt in to ensure tracking
    posthog.opt_in_capturing();
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setShowBanner(false);
    // Opt out of PostHog tracking
    posthog.opt_out_capturing();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-border shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-[14px] text-navy">
            We use cookies to analyse site usage and improve your experience.{' '}
            <a href="/cookie-policy" className="text-orange hover:underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-5 py-2 text-[14px] font-medium text-mid-grey hover:text-navy border border-border rounded-lg transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-[14px] font-medium text-white bg-orange hover:bg-orange/90 rounded-lg transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
