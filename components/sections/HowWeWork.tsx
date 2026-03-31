'use client';
import React from 'react';
import { nel } from '@/content/nel';
import { SectionEyebrow } from '../ui/SectionEyebrow';
import { useReveal } from '@/hooks/use-reveal';

export function HowWeWork() {
  const ref = useReveal();

  const themeStyles = {
    neutral: {
      bg: 'bg-white',
      border: 'border border-[#E2E8F0]',
      letterColor: 'rgba(14, 32, 63, 0.06)',
      wordColor: 'text-navy',
    },
    purple: {
      bg: 'bg-[#EFF4FB]',
      border: 'border border-[#c8d9ef]',
      letterColor: 'rgba(80, 120, 180, 0.12)',
      wordColor: 'text-[#3a6ab0]',
    },
    orange: {
      bg: 'bg-[#FFF4EC]',
      border: 'border border-orange/25',
      letterColor: 'rgba(232, 116, 59, 0.12)',
      wordColor: 'text-orange',
    },
  };

  return (
    <section id="how-we-work" className="bg-ice" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-12 reveal">
          <SectionEyebrow>Our method</SectionEyebrow>
          <h2
            className="text-navy font-extrabold leading-tight"
            style={{ fontSize: 'clamp(26px, 3vw, 34px)', letterSpacing: '-0.4px' }}
          >
            Navigate. Execute. Land.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {nel.map((item, idx) => {
            const styles = themeStyles[item.theme];

            return (
              <div
                key={item.letter}
                className={`reveal reveal-delay-${idx + 1} card-hover ${styles.bg} ${styles.border} rounded-[14px] overflow-hidden relative flex flex-col shadow-sm`}
              >
                <div
                  className="absolute top-4 right-5 text-[80px] font-black leading-none select-none pointer-events-none"
                  style={{ color: styles.letterColor }}
                >
                  {item.letter}
                </div>

                <div className="relative z-10 p-7 flex flex-col flex-1">
                  <div
                    className={`font-extrabold leading-none mb-3 ${styles.wordColor}`}
                    style={{ fontSize: 'clamp(28px, 3vw, 38px)', letterSpacing: '-0.5px' }}
                  >
                    {item.word}
                  </div>

                  <h3
                    className="text-navy font-extrabold leading-[1.2] mb-4"
                    style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', letterSpacing: '-0.2px' }}
                  >
                    {item.headline}
                  </h3>

                  <p className="text-[15px] text-mid-grey leading-[1.7] mb-6">
                    {item.desc}
                  </p>

                  <div className="mt-auto">
                    <p className="text-[11px] font-bold uppercase tracking-[0.10em] text-lt-grey mb-1.5">
                      Closes:
                    </p>
                    <p className="text-[14px] text-navy font-semibold">
                      {item.gap}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
