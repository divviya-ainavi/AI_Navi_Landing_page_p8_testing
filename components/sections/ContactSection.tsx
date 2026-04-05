'use client';
import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { useReveal } from '@/hooks/use-reveal';
import { useAnalytics } from '@/hooks/use-analytics';

const revenueOptions = [
  { value: '', label: 'Select revenue range' },
  { value: 'under-50m', label: 'Under £50M' },
  { value: '50m-250m', label: '£50M–£250M' },
  { value: '250m-500m', label: '£250M–£500M' },
  { value: 'over-500m', label: 'Over £500M' },
];

const hearAboutOptions = [
  { value: '', label: 'Select an option' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'google', label: 'Google Search' },
  { value: 'referral', label: 'Referral' },
  { value: 'event', label: 'Event' },
  { value: 'other', label: 'Other' },
];

const inputClass =
  'w-full border border-[#ddd8d2] rounded-[8px] px-4 py-3 text-[15px] text-navy placeholder:text-[#aaa] focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all bg-white';

const selectClass =
  'w-full border border-[#ddd8d2] rounded-[8px] px-4 py-3 text-[15px] text-navy focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all bg-white appearance-none cursor-pointer';

export function ContactSection() {
  const ref = useReveal(0.1);
  const { trackFormStart, trackFormSubmit, trackFormError } = useAnalytics();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const [charCounts, setCharCounts] = useState({
    fullName: 0,
    companyName: 0,
    jobTitle: 0,
    workEmail: 0,
  });
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    workEmail: '',
    revenue: '',
    message: '',
    hearAbout: '',
  });

  const CHAR_LIMITS: Record<string, number> = {
    fullName: 80,
    companyName: 80,
    jobTitle: 80,
    workEmail: 254,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name in charCounts) {
      setCharCounts((prev) => ({ ...prev, [name]: value.length }));
    }
  };

  const handleFirstInteraction = () => {
    if (!hasStartedForm) {
      trackFormStart();
      setHasStartedForm(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!captchaToken) {
      setError('Please complete the captcha');
      trackFormError('validation', 'Captcha not completed');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to send message');
        trackFormError('api_error', data.error || 'Failed to send message');
        captchaRef.current?.reset();
        setCaptchaToken('');
        return;
      }

      // Track successful submission
      trackFormSubmit({
        revenue: form.revenue,
        hearAbout: form.hearAbout,
      });
      setSubmitted(true);
    } catch {
      setError('Failed to send message. Please try again.');
      trackFormError('network_error', 'Failed to send message');
      captchaRef.current?.reset();
      setCaptchaToken('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-2xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="reveal mb-2">
          <SectionEyebrow withLine={false}>Get in touch</SectionEyebrow>
        </div>
        <h2
          className="reveal text-navy font-extrabold mb-10 leading-tight"
          style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', letterSpacing: '-0.4px' }}
        >
          Talk to us before your next board meeting
        </h2>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-[12px] p-8 text-center animate-fade-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-[22px] font-bold text-navy mb-2">Thank you for reaching out!</h3>
            <p className="text-[16px] text-mid-grey mb-4">
              We&apos;ve received your message and will get back to you within 1 business day.
            </p>
            <p className="text-[14px] text-mid-grey">
              In the meantime, feel free to{' '}
              <a href="https://ai-rpigbkp1.scoreapp.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline font-medium">
                take our AI Readiness Scorecard
              </a>{' '}
              to assess your organization&apos;s AI maturity.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal reveal-delay-1 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-semibold text-navy mb-1.5">
                  Full name <span className="text-orange">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  maxLength={80}
                  value={form.fullName}
                  onChange={handleChange}
                  onFocus={handleFirstInteraction}
                  placeholder="Jane Smith"
                  className={inputClass}
                />
                <p className={`mt-1 text-[11px] text-right ${charCounts.fullName >= 72 ? 'text-orange' : 'text-[#aaa]'}`}>
                  {80 - charCounts.fullName} remaining
                </p>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-navy mb-1.5">
                  Company name <span className="text-orange">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  maxLength={80}
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className={inputClass}
                />
                <p className={`mt-1 text-[11px] text-right ${charCounts.companyName >= 72 ? 'text-orange' : 'text-[#aaa]'}`}>
                  {80 - charCounts.companyName} remaining
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-semibold text-navy mb-1.5">
                  Job title <span className="text-orange">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  maxLength={80}
                  value={form.jobTitle}
                  onChange={handleChange}
                  placeholder="Chief Operating Officer"
                  className={inputClass}
                />
                <p className={`mt-1 text-[11px] text-right ${charCounts.jobTitle >= 72 ? 'text-orange' : 'text-[#aaa]'}`}>
                  {80 - charCounts.jobTitle} remaining
                </p>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-navy mb-1.5">
                  Work email <span className="text-orange">*</span>
                </label>
                <input
                  type="email"
                  name="workEmail"
                  required
                  maxLength={254}
                  value={form.workEmail}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className={inputClass}
                />
                <p className={`mt-1 text-[11px] text-right ${charCounts.workEmail >= 244 ? 'text-orange' : 'text-[#aaa]'}`}>
                  {254 - charCounts.workEmail} remaining
                </p>
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-navy mb-1.5">
                Company revenue <span className="text-orange">*</span>
              </label>
              <div className="relative">
                <select
                  name="revenue"
                  required
                  value={form.revenue}
                  onChange={handleChange}
                  className={selectClass}
                >
                  {revenueOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-navy mb-1.5">
                How can we help? <span className="text-orange">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your current AI challenges or goals…"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-navy mb-1.5">
                How did you hear about us?
              </label>
              <div className="relative">
                <select
                  name="hearAbout"
                  value={form.hearAbout}
                  onChange={handleChange}
                  className={selectClass}
                >
                  {hearAboutOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div id="captcha-container">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(token) => setCaptchaToken(token || '')}
                onExpired={() => setCaptchaToken('')}
                ref={captchaRef}
              />
            </div>

            {error && (
              <p className="text-[14px] text-red-600 font-medium">{error}</p>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange/90 disabled:opacity-60 text-white font-bold text-[15px] px-10 py-4 rounded-[9px] transition-all duration-150 shadow-sm"
              >
                {loading ? 'Sending…' : 'Send message →'}
              </button>
              <p className="mt-3 text-[12px] text-[#999]">
                We respond within 1 business day. Your data is never shared.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
