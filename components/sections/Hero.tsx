'use client';

import React from 'react';
import { hero } from '@/content/hero';
import { Button } from '../ui/AINaviButton';
import { useAnalytics } from '@/hooks/use-analytics';

export function Hero() {
  const { trackCTAClick } = useAnalytics();
  return (
    <section className="bg-white relative">
      <div className="w-full h-[3px] bg-orange" />

      <div className="max-w-[1200px] mx-auto px-8 pt-10 pb-10 md:pt-14 md:pb-12">
        {/* 2-col grid: headline left, visual right — aligned at top */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14 mb-10">

          {/* Left Column */}
          <div className="flex flex-col flex-1 lg:max-w-[58%]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 self-start">
              <div className="px-[12px] py-[5px] bg-orange/8 border border-orange/30 rounded-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-orange m-0">
                  {hero.eyebrow}
                </p>
              </div>
            </div>

            {/* H1 */}
            <h1
              className="font-extrabold leading-[1.12] mb-6"
              style={{ fontSize: 'clamp(40px, 5vw, 60px)', letterSpacing: '-0.6px' }}
            >
              <span className="text-navy">You backed the pilot</span>
              <br />
              <span className="text-navy">You hired the vendor</span>
              <br />
              <span className="text-orange">Your board is still waiting</span>
            </h1>

            {/* Subheadline */}
            <p className="text-[17px] text-mid-grey leading-[1.75] mb-8 max-w-[520px]">
              That gap between a promising AI initiative and strategic working systems in production — we close it.{' '}
              <strong className="font-bold text-navy">Haja led AI at $3B+ CPG.</strong>{' '}
              <strong className="font-bold text-navy">Abhishek shipped 30+ AI products at Deloitte.</strong>{' '}
              We&apos;ve sat in your seat. We know what went wrong. And we know exactly how to fix it.
            </p>

            {/* CTA */}
            <div className="flex flex-row flex-wrap gap-3 mb-3">
              <div className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg">
                <Button
                  variant="primary"
                  href={hero.primaryCTA.href}
                  onClick={() => trackCTAClick(hero.primaryCTA.label, 'hero', hero.primaryCTA.href)}
                >
                  {hero.primaryCTA.label}
                </Button>
              </div>
            </div>

            <p className="text-[11px] text-lt-grey">
              {hero.ctaNote}
            </p>
          </div>

          {/* Right Column — hero visual, top-aligned */}
          <div className="w-full lg:w-[40%] lg:flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '420px' }}>
              <img
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI leaders in a board meeting"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(160deg, rgba(14,32,63,0.55) 0%, rgba(14,32,63,0.30) 50%, rgba(14,32,63,0.65) 100%)' }}
              />

              {/* Floating card 1 — top-left */}
              <div
                className="absolute top-6 left-6 bg-white rounded-2xl shadow-xl p-5"
                style={{ width: '200px', backdropFilter: 'blur(12px)' }}
              >
                <p
                  className="text-navy font-extrabold leading-tight mb-3"
                  style={{ fontSize: '13px', letterSpacing: '-0.2px' }}
                >
                  Scaling Growth for Global Enterprises
                </p>
                <div className="flex items-end gap-[5px] h-[40px]">
                  {[20, 30, 40, 70, 80, 90, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 5 ? '#E8743B' : i % 2 === 0 ? '#E8743B' : 'rgba(232,116,59,0.3)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating card 2 — bottom-right */}
              <div
                className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-xl p-5"
                style={{ width: '210px', backdropFilter: 'blur(12px)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-orange flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z" fill="white" />
                    </svg> 
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-orange">Proven Impact</span>
                </div>
                <p className="text-navy font-bold leading-snug" style={{ fontSize: '12px' }}>
                  Across CPG, Manufacturing and Services
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud — full width below 2-col grid */}
        <div className="border-t border-border pt-6">
          <p className="text-[10px] uppercase tracking-[0.09em] text-lt-grey mb-4">
            {hero.trustLabel}
          </p>
          <div className="flex items-center justify-between gap-4">
            {[
              { src: '/deloitte.webp', alt: 'Deloitte' },
              { src: '/cargill.webp', alt: 'Cargill' },
              { src: '/dpd.webp', alt: 'DPD' },
              { src: '/buynomics.webp', alt: 'Buynomics' },
              { src: '/ntt copy.webp', alt: 'NTT' },
              { src: '/saint_gobain copy.webp', alt: 'Saint-Gobain' },
              { src: '/swinkels_family_brewers copy.webp', alt: 'Swinkels Family Brewers' },
            ].map(({ src, alt }) => (
              <div key={alt} className="flex-1 flex items-center justify-center h-20 opacity-30 hover:opacity-60 transition-opacity duration-200">
                <img
                  src={src}
                  alt={alt}
                  className="h-full w-auto max-w-[90px] object-contain"
                  style={{ filter: 'grayscale(100%) brightness(0.25)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}