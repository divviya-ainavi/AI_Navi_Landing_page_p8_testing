'use client';
import React from 'react';
import { stats } from '@/content/stats';
import { useReveal } from '@/hooks/use-reveal';

export function StatsRow() {
  const ref = useReveal(0.1);

  return (
    <section className="bg-[#f5f5f5] border-y border-[#e8e8e8]" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} px-8 py-10 flex flex-col justify-center ${index < stats.length - 1 ? 'border-r border-[#e0e0e0]' : ''}`}
            >
              <div
                className="font-extrabold text-orange mb-1.5"
                style={{ fontSize: 'clamp(26px, 3vw, 38px)', letterSpacing: '-0.5px', lineHeight: '1.1' }}
              >
                {stat.number}
              </div>
              <div className="text-[13px] text-[#888] leading-snug mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
