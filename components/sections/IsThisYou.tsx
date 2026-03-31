'use client';
import React from 'react';
import { icps } from '@/content/icp';
import { SectionEyebrow } from '../ui/SectionEyebrow';
import { useReveal } from '@/hooks/use-reveal';

export function IsThisYou() {
  const ref = useReveal();

  return (
    <section id="is-this-you" className="bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-4 reveal">
          <SectionEyebrow>Who we serve</SectionEyebrow>
          <h2
            className="text-navy font-extrabold leading-tight mt-3"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.5px' }}
          >
            Which Leader Are You?
          </h2>
        </div>
        <p className="text-[17px] text-mid-grey leading-relaxed mb-10 max-w-2xl">
          These are the three conversations we have regularly — grounded in observed patterns, not personas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {icps.map((icp, i) => {
            return (
              <div
                key={icp.sector}
                className={`reveal reveal-delay-${i + 1} card-hover card-glow icp-card flex flex-col rounded-[14px] p-7 border border-[#e2e8f0] bg-white`}
              >
                <div className="mb-5">
                  <div className="text-[16px] font-extrabold text-navy leading-snug mb-1">
                    {icp.profile}
                  </div>
                  <div className="text-[13px] text-mid-grey">{icp.roles}</div>
                  <div className="text-[13px] text-mid-grey">{icp.revenue}</div>
                </div>

                <div className="mb-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.10em] text-[#aaa] mb-1.5">Core Challenge</p>
                  <p className="text-[14px] text-navy leading-relaxed">{icp.pain}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-[#e8e8e8]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.10em] text-orange mb-1.5">Why AI Navi Fits</p>
                  <p className="text-[14px] text-mid-grey leading-relaxed">{icp.fit}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-2 bg-ice border border-border rounded-[14px] px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h3
              className="text-navy font-extrabold leading-tight mb-3"
              style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', letterSpacing: '-0.3px' }}
            >
              Sound familiar? Let's turn these patterns into progress.
            </h3>
            <p className="text-[15px] text-mid-grey leading-[1.7]">
              If you're ready for a solution but unsure where to start, the AI Readiness Scorecard helps you see where you stand and how you benchmark against competitors.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://ai-rpigbkp1.scoreapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold text-[14px] px-7 py-4 rounded-[8px] transition-all duration-150 whitespace-nowrap shadow-sm"
            >
              Take the Free AI Readiness Scorecard
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="text-[12px] text-lt-grey text-center mt-2">3 minutes · No pitch · Instant results</p>
          </div>
        </div>

      </div>
    </section>
  );
}
