'use client';

import React from 'react';
import { offers } from '@/content/offers';
import { SectionEyebrow } from '../ui/SectionEyebrow';
import { Check, Info, CircleCheck as CheckCircle2 } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';

const tierBenefits: Record<string, string> = {
  'AI FlightCheck™': 'If your board has asked for an AI strategy and you need a credible document to unlock the budget.',
  'AI FlightPath™ Sprint': 'If you have the mandate to act and need working AI in production.',
  'AI FlightScale™ Retainer': 'If you have had a first AI win and need senior strategic oversight and data engineering to keep pace as you scale.',
};

type Tier = {
  name: string;
  tierLabel: string;
  tagline: string;
  price: string;
  priceSuffix?: string;
  priceSubtext: string;
  bullets: string[];
  cta: string;
  featured: boolean;
  featuredLabel?: string;
};

function TierCard({ tier }: { tier: Tier }) {
  const benefitText = tierBenefits[tier.name] ?? 'This benefits AI leaders looking to accelerate their AI journey.';

  return (
    <div
      className={`card-hover card-glow relative flex flex-col rounded-[14px] bg-white overflow-hidden h-full ${
        tier.featured
          ? 'ring-2 ring-orange shadow-xl'
          : 'ring-1 ring-[#e2e5ea] shadow-sm'
      }`}
    >
      <div className="px-7 pt-7 pb-5 border-b border-[#e8eaed]">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] font-bold tracking-widest text-mid-grey uppercase">
            {tier.tierLabel}
          </div>
          {tier.featured && tier.featuredLabel && (
            <div className="bg-orange text-white text-[10px] font-bold tracking-wider uppercase py-1 px-3 rounded-full">
              {tier.featuredLabel}
            </div>
          )}
        </div>
        <h3 className="text-navy font-extrabold text-[22px] leading-tight mb-3" style={{ letterSpacing: '-0.3px' }}>
          {tier.name}
        </h3>
        <p className="text-[15px] text-mid-grey leading-relaxed">
          {tier.tagline}
        </p>
      </div>

      <div className="px-7 py-5 border-b border-[#e8eaed]">
        <div className="flex items-baseline gap-0.5 mb-1">
          <span
            className={`font-extrabold leading-none ${
              tier.featured ? 'text-orange' : 'text-navy'
            }`}
            style={{ fontSize: 'clamp(28px, 3.5vw, 36px)' }}
          >
            {tier.price}
          </span>
          {tier.priceSuffix && (
            <span className="text-[14px] text-mid-grey font-normal ml-0.5">{tier.priceSuffix}</span>
          )}
        </div>
        <p className="text-[12px] text-lt-grey">{tier.priceSubtext}</p>
      </div>

      <div className="px-7 py-5 flex flex-col flex-1">
        <ul className="space-y-3 mb-6">
          {tier.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-navy leading-snug">
              <Check size={14} className="text-orange mt-[2px] shrink-0" strokeWidth={2.5} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto bg-ice rounded-[8px] px-4 py-4 border border-[#e2e8f0]">
          <p className="text-[11px] font-bold uppercase tracking-[0.10em] text-orange mb-1.5">Best for</p>
          <p className="text-[14px] text-mid-grey leading-relaxed">{benefitText}</p>
        </div>
      </div>
    </div>
  );
}

export function OfferStack() {
  const { trackScorecardClick } = useAnalytics();

  return (
    <section id="offers" className="bg-[#FFF4EC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-12">
          <SectionEyebrow>{offers.eyebrow}</SectionEyebrow>
          <h2 className="text-navy font-extrabold mb-4 leading-tight" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', letterSpacing: '-0.4px' }}>
            {offers.headline}
          </h2>
          <p className="text-[17px] text-mid-grey leading-relaxed">
            {offers.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 items-stretch">
          {offers.tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier as Tier} />
          ))}
        </div>


        {/* AI Data Engineering Services block */}
        <div className="rounded-[14px] bg-white ring-1 ring-[#e2e5ea] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e8eaed]">
            {/* Left: service details */}
            <div className="px-7 py-8 flex flex-col">
              <div className="text-[10px] font-bold tracking-widest text-mid-grey uppercase mb-3">
                Custom Pricing
              </div>
              <h3 className="text-navy font-extrabold text-[22px] leading-tight mb-3" style={{ letterSpacing: '-0.3px' }}>
                AI Data Engineering Services
              </h3>
              <p className="text-[15px] text-mid-grey leading-relaxed mb-6">
                Bespoke data infrastructure, pipeline architecture, and AI integration built around your existing stack.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Connect fragmented data sources into one unified, accessible platform',
                  'Data governance, data quality, and full data lineage - built, not bolted on',
                  'Live dashboards and reporting that give leadership clarity in minutes, not weeks',
      'AI-ready data foundation - so pilots dont fail and budgets dont get wasted',
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-navy leading-snug">
                    <Check size={14} className="text-orange mt-[2px] shrink-0" strokeWidth={2.5} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto bg-ice rounded-[8px] px-4 py-4 border border-[#e2e8f0]">
                <p className="text-[11px] font-bold uppercase tracking-[0.10em] text-orange mb-1.5">Best for</p>
                <p className="text-[13px] text-mid-grey leading-relaxed">
                  If your AI ambitions are being blocked by data you can't access, trust, or use.
                </p>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="px-7 py-8 flex flex-col items-center justify-center text-center bg-ice/40">
              <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mb-5">
                <CheckCircle2 size={24} className="text-orange" />
              </div>
              <h4 className="text-navy font-extrabold text-[20px] leading-tight mb-3" style={{ letterSpacing: '-0.2px' }}>
                Your First Step to the Right AI Solution
              </h4>
              <p className="text-[14px] text-mid-grey leading-relaxed mb-6 max-w-[260px]">
              </p>
              <a
                href="https://ai-rpigbkp1.scoreapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-orange hover:bg-orange/90 text-white font-semibold text-[15px] px-7 py-3.5 rounded-[9px] transition-all duration-150 shadow-sm mb-3"
                onClick={() => trackScorecardClick('Take the AI Readiness Scorecard - Offers')}
              >
                <CheckCircle2 size={17} className="shrink-0" />
                Take the AI Readiness Scorecard
              </a>
              <p className="text-[14px] text-mid-grey max-w-[220px] leading-relaxed">
                This ensures you’re guided to the service that best fits your specific use case
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
