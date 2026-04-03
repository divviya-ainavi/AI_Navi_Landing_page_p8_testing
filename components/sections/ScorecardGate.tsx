'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import { CaptchaError } from '@/components/ui/captcha-error';
import { useAnalytics } from '@/hooks/use-analytics';

const scaleDimensions = [
  { letter: 'S', label: 'Strategy', pct: 32, color: 'linear-gradient(90deg, #E8682A, #F0956A)' },
  { letter: 'C', label: 'Capability', pct: 28, color: 'linear-gradient(90deg, #E8743B, #F0A882)' },
  { letter: 'A', label: 'Applied AI', pct: 21, color: 'linear-gradient(90deg, #E8682A, #F0956A)' },
  { letter: 'L', label: 'Leadership', pct: 18, color: 'linear-gradient(90deg, #E8682A, #c8501a)' },
  { letter: 'E', label: 'Data Arch.', pct: 24, color: 'linear-gradient(90deg, #E8682A, #F0956A)' },
];

function ScoreBar({ letter, label, pct, color }: { letter: string; label: string; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] font-bold text-navy/50 w-3.5 shrink-0">{letter}</span>
      <div className="flex-1 h-[5px] bg-[#e2ddd8] rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="text-[10px] text-mid-grey w-[76px] text-right shrink-0">{label} {pct}%</span>
    </div>
  );
}


export function ScorecardGate() {
  const { trackScorecardClick, trackCTAClick } = useAnalytics();
  const [showEmbedHelp, setShowEmbedHelp] = useState(false);

  return (
    <section id="scorecard">

      {/* AI Readiness Scorecard — single column */}
      <div className="bg-[#FFF4EC] px-8 sm:px-12 xl:px-16 py-14 xl:py-20">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">

          <p className="text-[16px] font-bold tracking-[0.18em] text-orange uppercase">
            ✦ THE AI READINESS SCORECARD
          </p>

          <div className="bg-white border border-[#f0e4d8] rounded-[14px] p-6 w-full">
            <h2
              className="text-navy font-bold leading-snug mb-6"
              style={{ fontSize: 'clamp(17px, 2vw, 22px)', fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              "Where is your AI programme stuck right now?"
            </h2>

            <div className="space-y-3.5 mb-4">
              {scaleDimensions.map((d) => (
                <ScoreBar key={d.letter} {...d} />
              ))}
            </div>

            <p className="text-[9px] text-mid-grey text-right border-t border-[#e8e0d8] pt-2.5 mt-2">
              UK CP/FMCG benchmark · 2025
            </p>
          </div>

        </div>
      </div>

      {/* ScoreApp embed — full width */}
      <div className="bg-white w-full">
        <div
          data-sa-url="https://ai-rpigbkp1.scoreapp.com/?sa_target=_blank"
          data-sa-view="inline"
          style={{ maxWidth: '100%', width: '100%' }}
          data-sa-auto-height="1"
        />
        <Script
          src="https://static.scoreapp.com/js/integration/v1/embedding.js?v=jty3Tv"
          strategy="lazyOnload"
        />

        {/* Captcha / submission help */}
        <div className="max-w-2xl mx-auto px-6 pb-8">
          <CaptchaError
            show={showEmbedHelp}
            message="If your scorecard submission isn't going through, try refreshing the page to reset the captcha verification — then complete it again before submitting."
          />
          <button
            type="button"
            aria-expanded={showEmbedHelp}
            aria-controls="scorecard-embed-help"
            onClick={() => setShowEmbedHelp((v) => !v)}
            className="mt-3 text-[12px] text-mid-grey underline underline-offset-2 hover:text-orange transition-colors"
          >
            {showEmbedHelp ? 'Hide help' : 'Having trouble submitting?'}
          </button>
        </div>
      </div>

      {/* Bottom row: UK AI Funding Source Finder — centered single column */}
      <div className="bg-[#FFF4EC] px-8 sm:px-12 xl:px-16 py-14 xl:py-20">
        <div className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto">

          <h3
            className="font-extrabold text-navy leading-tight"
            style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', letterSpacing: '-0.3px' }}
          >
            UK AI Funding Source Finder
          </h3>
          <p className="text-[14px] text-mid-grey leading-relaxed">
            Most mid-market companies can immediately offset up to 40% of project
            expenses through 2–3 specific programs that require zero equity and zero debt.
          </p>
          <a
            href="/ai-funding-guide-uk"
            className="inline-block bg-orange hover:bg-orange/90 text-white font-semibold text-[14px] py-3.5 px-8 rounded-[8px] text-center transition-all duration-150"
            onClick={() => trackCTAClick('AI Funding Guide FREE Download', 'scorecard_section', '/ai-funding-guide-uk')}
          >
            AI Funding Guide
          </a>

        </div>
      </div>

    </section>
  );
}
