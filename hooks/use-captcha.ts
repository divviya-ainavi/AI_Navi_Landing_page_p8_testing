'use client';
import { useState, useRef } from 'react';
import type ReCAPTCHA from 'react-google-recaptcha';

export interface UseCaptchaReturn {
  captchaToken: string;
  captchaNeeded: boolean;
  captchaRef: React.RefObject<ReCAPTCHA>;
  handleCaptchaChange: (token: string | null) => void;
  handleCaptchaExpired: () => void;
  resetCaptcha: () => void;
  validateCaptcha: () => string | null;
}

export function useCaptcha(): UseCaptchaReturn {
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaNeeded, setCaptchaNeeded] = useState(false);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token || '');
    if (token) {
      setCaptchaNeeded(false);
    }
  };

  const handleCaptchaExpired = () => {
    setCaptchaToken('');
    setCaptchaNeeded(true);
  };

  const resetCaptcha = () => {
    captchaRef.current?.reset();
    setCaptchaToken('');
    setCaptchaNeeded(true);
  };

  const validateCaptcha = (): string | null => {
    if (!captchaToken) {
      setCaptchaNeeded(true);
      return 'Please complete the captcha verification to continue.';
    }
    return null;
  };

  return {
    captchaToken,
    captchaNeeded,
    captchaRef,
    handleCaptchaChange,
    handleCaptchaExpired,
    resetCaptcha,
    validateCaptcha,
  };
}
