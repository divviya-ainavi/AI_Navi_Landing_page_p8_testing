'use client';
import React from 'react';
import { pilotPurgatory } from '@/content/pilotpurgatory';
import { OrangeRule } from '../ui/OrangeRule';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

export function PilotPurgatory() {
  const ref = useReveal();

  return (
    <section id="pilot-purgatory" className="bg-ice" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mb-12 reveal">
          <h2
            className="text-navy font-extrabold mb-5 leading-[1.08]"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '-0.8px' }}
          >
            {pilotPurgatory.headline}
          </h2>
          <OrangeRule />
          <p className="text-[18px] text-mid-grey leading-relaxed">
            {pilotPurgatory.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {pilotPurgatory.badOptions.map((option, i) => (
            <div
              key={option.num}
              className={`reveal reveal-delay-${i + 1} card-hover bg-white border border-border rounded-[9px] p-7`}
            >
              <div className="text-[12px] font-bold text-lt-grey mb-3">
                {option.num}
              </div>
              <h3 className="text-[17px] font-bold text-navy mb-2.5">
                {option.title}
              </h3>
              <p className="text-[15px] text-mid-grey leading-relaxed">
                {option.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-4 bg-orange-md border-[1.5px] border-orange rounded-[9px] p-7">
          <div className="flex items-start gap-4">
            <div>
              <p className="text-[17px] font-bold text-orange mb-2">
                {pilotPurgatory.fourthOptionText}
              </p>
              <p className="text-[16px] text-navy leading-relaxed">
                {pilotPurgatory.fourthOptionDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
