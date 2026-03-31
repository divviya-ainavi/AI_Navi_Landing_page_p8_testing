'use client';
import React from 'react';
import Image from 'next/image';
import { team } from '@/content/team';
import { SectionEyebrow } from '../ui/SectionEyebrow';
import { useReveal } from '@/hooks/use-reveal';

const hajaLogos = [
  { src: '/buynomics.webp', alt: 'Buynomics' },
  { src: '/pladis.webp', alt: 'pladis' },
  { src: '/saint_gobain.webp', alt: 'Saint-Gobain' },
  { src: '/ntt.webp', alt: 'NTT' },
];

const abhishekLogos = [
  { src: '/deloitte.webp', alt: 'Deloitte' },
  { src: '/cargill.webp', alt: 'Cargill' },
  { src: '/dpd.webp', alt: 'DPD' },
  { src: '/pladis.webp', alt: 'pladis' },
  { src: '/swinkels_family_brewers.webp', alt: 'Swinkels Family Brewers' },
];

interface MemberCardProps {
  member: typeof team.members[number];
  logos: { src: string; alt: string }[];
}

function MemberCard({ member, logos }: MemberCardProps) {
  return (
    <div className="reveal card-hover rounded-[16px] overflow-hidden border border-[#e2e8f0] shadow-lg bg-white flex flex-col">
      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #F5F7FA 0%, #E8EDF5 50%, #fde8d8 100%)',
          paddingTop: '72%',
        }}
      >
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          className="object-contain"
          style={{ objectPosition: 'center bottom' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(14,32,63,0.82) 0%, rgba(14,32,63,0.18) 45%, transparent 100%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
          <h3 className="text-[22px] font-bold text-white leading-tight mb-0.5">
            {member.name}
          </h3>
          <div className="text-[14px] text-white/80 font-medium">
            {member.title}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="border-l-[3px] border-orange pl-4 mb-5">
          <p className="text-[17px] italic text-navy leading-relaxed font-medium">
            {member.quote}
          </p>
        </div>

        <p className="text-[15px] text-mid-grey leading-relaxed mb-6">
          {member.bio}
        </p>

        <div className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-lt-grey mb-3">
            Experience at
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            {logos.map((logo) => (
              <div key={logo.alt} className="h-7 flex items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain"
                  style={{ filter: 'brightness(0)', opacity: 0.35 }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {member.badges.map((badge) => (
            <span
              key={badge}
              className="px-2.5 py-1 border border-orange/40 bg-orange-lt text-[12px] text-orange font-semibold rounded-md"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="text-[13px] text-lt-grey italic leading-relaxed border-t border-border pt-4 mt-auto">
          {member.wont}
        </p>
      </div>
    </div>
  );
}

export function TeamSection() {
  const ref = useReveal();

  return (
    <section id="team" className="bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-3xl mb-12 reveal">
          <SectionEyebrow>{team.eyebrow}</SectionEyebrow>
          <h2 className="text-navy font-extrabold mb-4 leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 34px)', letterSpacing: '-0.4px' }}>
            {team.headline}
          </h2>
          <p className="text-[17px] text-mid-grey leading-relaxed">
            {team.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MemberCard member={team.members[0]} logos={hajaLogos} />
          <MemberCard member={team.members[1]} logos={abhishekLogos} />
        </div>
      </div>
    </section>
  );
}
