'use client';
import React from 'react';
import { finalCTA } from '@/content/finalcta';
import { useReveal } from '@/hooks/use-reveal';
import { useAnalytics } from '@/hooks/use-analytics';

const trustItems = [
  'No juniors',
  'No bureaucracy',
  'Just outcomes',
];

export function FinalCTA() {
  const ref = useReveal(0.1);
  const { trackCTAClick } = useAnalytics();

  return (
    <section className="bg-[#FFF4EC] border-t border-[#f0e4d8]" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-2xl mx-auto px-6 lg:px-8 py-20 md:py-28 text-center">
        <h2
          className="reveal font-extrabold text-navy leading-tight mb-3"
          style={{ fontSize: 'clamp(26px, 4vw, 42px)', letterSpacing: '-0.5px' }}
        >
          {finalCTA.headline}
        </h2>
        <p className="reveal text-[16px] text-mid-grey leading-relaxed mb-10 max-w-lg mx-auto">
          {finalCTA.subhead}
        </p>
        <a
          href={finalCTA.primaryCTA.href}
          className="reveal reveal-delay-1 inline-flex items-center justify-center bg-orange hover:bg-orange/90 text-white font-bold text-[15px] px-10 py-4 rounded-[9px] transition-all duration-150 shadow-sm hover:shadow-md"
          onClick={() => trackCTAClick(finalCTA.primaryCTA.label, 'final_cta', finalCTA.primaryCTA.href)}
        >
          {finalCTA.primaryCTA.label}
        </a>

        <div className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
          {trustItems.map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-[12px] text-mid-grey">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6.5" stroke="#E8743B" strokeWidth="1" />
                <path d="M4 7l2 2 4-4" stroke="#E8743B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
