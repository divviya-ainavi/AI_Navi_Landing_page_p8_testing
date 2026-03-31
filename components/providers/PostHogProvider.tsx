'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect, useState } from 'react';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY && !isInitialized) {
      // Bot detection - don't track bots
      const isBot =
        navigator.webdriver ||
        (screen.width === 800 && screen.height === 600) ||
        /bot|crawler|spider|crawling/i.test(navigator.userAgent);

      if (!isBot) {
        // Check if user has already given consent
        const consent = localStorage.getItem('ainavi_cookie_consent');
        const hasConsent = consent === 'accepted';

        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.posthog.com',
          capture_pageview: hasConsent,
          capture_pageleave: hasConsent,
          autocapture: hasConsent,
          cross_subdomain_cookie: true,
          persistence: hasConsent ? 'localStorage+cookie' : 'memory',
          opt_out_capturing_by_default: !hasConsent,
          loaded: (posthog) => {
            // Capture initial UTM parameters on person
            const urlParams = new URLSearchParams(window.location.search);
            const utmSource = urlParams.get('utm_source');
            const utmMedium = urlParams.get('utm_medium');
            const utmCampaign = urlParams.get('utm_campaign');
            const utmContent = urlParams.get('utm_content');
            const utmTerm = urlParams.get('utm_term');

            if (utmSource || utmMedium || utmCampaign || utmContent || utmTerm) {
              posthog.register({
                initial_utm_source: utmSource,
                initial_utm_medium: utmMedium,
                initial_utm_campaign: utmCampaign,
                initial_utm_content: utmContent,
                initial_utm_term: utmTerm,
              });
            }
          },
        });
        setIsInitialized(true);
      }
    }
  }, [isInitialized]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
