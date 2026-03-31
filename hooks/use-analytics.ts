'use client';

import posthog from 'posthog-js';

// Helper to push to GTM dataLayer
function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer = (window as any).dataLayer || [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer.push(data);
  }
}

export function useAnalytics() {
  const trackCTAClick = (buttonName: string, section: string, destination?: string) => {
    // PostHog event
    posthog.capture('cta_clicked', {
      button_name: buttonName,
      cta_section: section,
      page_url: window.location.href,
      cta_destination: destination,
    });

    // GTM dataLayer for GA4
    pushToDataLayer({
      event: 'cta_clicked',
      button_name: buttonName,
      cta_section: section,
      cta_destination: destination,
    });
  };

  const trackFormStart = () => {
    posthog.capture('contact_form_started', {
      page_url: window.location.href,
    });

    pushToDataLayer({
      event: 'contact_form_started',
    });
  };

  const trackFormSubmit = (formData: { revenue?: string; hearAbout?: string }) => {
    posthog.capture('contact_form_submitted', {
      page_url: window.location.href,
      revenue_range: formData.revenue,
      source: formData.hearAbout,
    });

    pushToDataLayer({
      event: 'contact_form_submitted',
      revenue_range: formData.revenue,
      source: formData.hearAbout,
    });
  };

  const trackFormError = (errorType: string, errorMessage: string) => {
    posthog.capture('contact_form_error', {
      page_url: window.location.href,
      error_type: errorType,
      error_message: errorMessage,
    });
  };

  const trackScrollDepth = (depthPercent: number) => {
    posthog.capture('scroll_depth_reached', {
      depth_percent: depthPercent,
      page_url: window.location.href,
    });

    pushToDataLayer({
      event: 'scroll_depth_reached',
      depth_percent: depthPercent,
    });
  };

  const trackScorecardClick = (buttonName: string) => {
    posthog.capture('scorecard_cta_clicked', {
      button_name: buttonName,
      page_url: window.location.href,
      destination: 'https://ai-rpigbkp1.scoreapp.com',
    });

    pushToDataLayer({
      event: 'scorecard_cta_clicked',
      button_name: buttonName,
      destination: 'https://ai-rpigbkp1.scoreapp.com',
    });
  };

  const trackExternalLink = (linkName: string, destination: string) => {
    posthog.capture('external_link_clicked', {
      link_name: linkName,
      page_url: window.location.href,
      destination: destination,
    });
  };

  const trackFundingKitFormStart = () => {
    posthog.capture('funding_kit_form_started', {
      page_url: window.location.href,
    });

    pushToDataLayer({
      event: 'funding_kit_form_started',
    });
  };

  const trackFundingKitDownload = (formData: { email: string; name: string }) => {
    posthog.capture('funding_kit_downloaded', {
      page_url: window.location.href,
      email_domain: formData.email.split('@')[1] || '',
    });

    pushToDataLayer({
      event: 'funding_kit_downloaded',
      email_domain: formData.email.split('@')[1] || '',
    });
  };

  const trackFundingKitError = (errorType: string, errorMessage: string) => {
    posthog.capture('funding_kit_form_error', {
      page_url: window.location.href,
      error_type: errorType,
      error_message: errorMessage,
    });

    pushToDataLayer({
      event: 'funding_kit_form_error',
      error_type: errorType,
      error_message: errorMessage,
    });
  };

  const trackTabChange = (tabName: string, section: string) => {
    posthog.capture('tab_changed', {
      tab_name: tabName,
      section: section,
      page_url: window.location.href,
    });

    pushToDataLayer({
      event: 'tab_changed',
      tab_name: tabName,
      section: section,
    });
  };

  return {
    trackCTAClick,
    trackFormStart,
    trackFormSubmit,
    trackFormError,
    trackScrollDepth,
    trackScorecardClick,
    trackExternalLink,
    trackFundingKitFormStart,
    trackFundingKitDownload,
    trackFundingKitError,
    trackTabChange,
  };
}
