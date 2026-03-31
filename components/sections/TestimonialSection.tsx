'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const testimonials = [
  {
    quote:
      'Haja operates like an embedded C-level partner — pragmatic, commercially savvy, and obsessed with real business impact.',
    name: 'Dr. Ingo Reinhardt',
    nameHref: null,
    role: 'Founder & Managing Director, Buynomics',
    roleHref: null,
    image: '/Dr._Ingo_Reinhardt.png',
    objectPosition: 'object-top',
  },
  {
    quote:
      'Abhi and his team embody a rare blend of pragmatism and technical excellence — their speed, collaboration, and quality are truly impressive.',
    name: 'Kees Pronk',
    nameHref: 'https://www.linkedin.com/in/keespronk/',
    role: 'Founder & CEO, CentreBlock',
    roleHref: 'http://www.centreblock.net/?utm_source=AInavi',
    image: '/keespronk.webp',
    objectPosition: 'object-top',
  },
];

const INTERVAL_MS = 3000;

export function TestimonialSection() {
  const ref = useReveal();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number, dir: 'next' | 'prev') => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setVisible(false);
      setTimeout(() => {
        setCurrent(index);
        setVisible(true);
        setAnimating(false);
      }, 320);
    },
    [animating]
  );

  const next = useCallback(() => {
    const idx = (current + 1) % testimonials.length;
    goTo(idx, 'next');
  }, [current, goTo]);

  const prev = useCallback(() => {
    const idx = (current - 1 + testimonials.length) % testimonials.length;
    goTo(idx, 'prev');
  }, [current, goTo]);

  useEffect(() => {
    if (hovered) return;
    timerRef.current = setTimeout(next, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, hovered, next]);

  const t = testimonials[current];

  const slideStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? 'translateX(0)'
      : direction === 'next'
      ? 'translateX(18px)'
      : 'translateX(-18px)',
    transition: 'opacity 0.32s cubic-bezier(0.16,1,0.3,1), transform 0.32s cubic-bezier(0.16,1,0.3,1)',
  };

  return (
    <section className="bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-24">
        <div className="reveal">
          <div
            className="relative rounded-[16px] overflow-hidden border border-[#e2e8f0]"
            style={{ background: 'linear-gradient(135deg, #EEF2F8 0%, #FDF0E8 100%)' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div style={slideStyle} className="flex flex-col md:flex-row items-center gap-0">
              <div className="flex-shrink-0 p-8 md:p-10 flex items-center justify-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-orange/30 shadow-md">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className={`object-cover ${t.objectPosition}`}
                  />
                </div>
              </div>
              <div className="flex-1 px-6 md:px-0 md:pr-16 py-8 md:py-10 md:border-l border-t md:border-t-0 border-[#e2e8f0]">
                <div className="w-6 h-[2px] bg-orange rounded-full mb-4" />
                <blockquote
                  className="text-[17px] md:text-[19px] font-medium text-navy leading-[1.55] mb-4"
                  style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                  "{t.quote}"
                </blockquote>
                <div className="text-[13px] font-semibold text-navy">
                  {t.nameHref ? (
                    <a href={t.nameHref} target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors duration-150 underline underline-offset-2 decoration-orange/40">
                      {t.name}
                    </a>
                  ) : (
                    t.name
                  )}
                  {t.roleHref ? (
                    <a href={t.roleHref} target="_blank" rel="noopener noreferrer" className="text-mid-grey font-normal ml-2 hover:text-orange transition-colors duration-150">
                      {t.role}
                    </a>
                  ) : (
                    <span className="text-mid-grey font-normal ml-2">{t.role}</span>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 border border-[#e2e8f0] text-navy shadow-sm opacity-0 group-hover:opacity-100 hover:bg-white hover:border-orange/40 transition-all duration-200"
              style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.2s ease' }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 border border-[#e2e8f0] text-navy shadow-sm hover:bg-white hover:border-orange/40 transition-all duration-200"
              style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.2s ease' }}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                aria-label={`Go to testimonial ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width: i === current ? 20 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current ? '#E8743B' : '#d1d5db',
                  border: 'none',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
