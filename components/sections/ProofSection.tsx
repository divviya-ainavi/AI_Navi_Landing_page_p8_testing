'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { proof } from '@/content/proof';
import { useReveal } from '@/hooks/use-reveal';
import { SectionEyebrow } from '../ui/SectionEyebrow';
import { Play, ExternalLink } from 'lucide-react';

const deliveryProof = [
  {
    metric: '80% time',
    metricHighlight: 'reduction',
    client: 'Sales Automation & Outreach',
    desc: 'AI sales intelligence agent delivered end-to-end',
  },
  {
    metric: 'Built in',
    metricHighlight: '5 days',
    client: 'AI-Powered Talent Matching',
    desc: 'Working AI product prototype built in a single sprint',
  },
  {
    metric: 'Built in',
    metricHighlight: '4 Weeks',
    client: 'AI-Enhanced Engagement', 
    desc: 'AI assistant built and deployed',
  },
];

type CaseStudy = {
  name: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  videoId: string | null;
  videoUrl: string | null;
  tag: string;
  coverImage?: string;
  live?: boolean;
};

const caseStudies: CaseStudy[] = [
  {
    name: 'AI-Powered Talent Matching — Idea to Prototype in 5 Days',
    client: 'Finance Marketplace',
    challenge: 'A mid-sized firm spent days manually sourcing freelancers with little visibility and frequent mismatches. AI Navi delivered a working AI-powered prototype in 5 days, instantly matching candidates by skills, availability, and rate with built-in vetting for work style, communication, and problem-solving.',
    solution: '',
    result: 'Manual sourcing reduced from days to seconds, and screening interviews largely eliminated.',
    videoId: 'CEEXkh_UqcQ',
    videoUrl: 'https://www.youtube.com/watch?v=CEEXkh_UqcQ',
    tag: 'FinTech Marketplace',
    coverImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'A Diagnostics App Rebuilt for Self-Service in 4 Weeks',
    client: 'Digital Health Diagnostics',
    challenge: 'A diagnostics provider’s legacy app was outdated and hard to use, making it difficult for patients to find tests and track results. AI Navi rebuilt it in weeks into a mobile-first, self-service app for browsing, booking, and results—plus an AI assistant that recommends tests and completes bookings via conversation.',
    solution: '',
    result: 'Prototype delivered in under two weeks and prototype was featured in a major AI healthcare exhibition.',
    videoId: 'GhOFCK1gWlA',
    videoUrl: 'https://www.youtube.com/watch?v=GhOFCK1gWlA',
    tag: 'Digital Health',
  },
  {
    name: 'AI Sales Agent',
    client: 'SalesGenius.ai',
    challenge: 'Manual prospecting was slowing sales teams down. SalesGenius replaces it with AI-driven research, personalized outreach, and automated follow-ups—live in weeks.',
    solution: '',
    result: '80% reduction in time spent on outbound research. Pipeline generated from day one.',
    videoId: 'NGq8WEh-oCg',
    videoUrl: 'https://www.youtube.com/watch?v=NGq8WEh-oCg',
    tag: 'Sales Automation',
    live: true,
  },
  {
    name: 'AI-Powered Resume Builder',
    client: 'ApplyGenius.ai',
    challenge: 'Job seekers were spending too much time tailoring CVs and cover letters. ApplyGenius automates CV rewriting, generates personalized cover letters, and provides real-time application coaching.',
    solution: '',
    result: 'Built and shipped from zero to launch in under 30 days with active users.',
    videoId: 'eNY0BxcHK6Y',
    videoUrl: 'https://www.youtube.com/watch?v=eNY0BxcHK6Y',
    tag: 'Consumer AI Product',
    live: true,
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="reveal card-hover card-glow flex flex-col rounded-[14px] overflow-hidden border border-[#e2e8f0] bg-white shadow-sm h-full">
      <div className="relative w-full bg-navy/5" style={{ aspectRatio: '16/9' }}>
        {study.videoId ? (
          playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${study.videoId}?autoplay=1`}
              title={`${study.name} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={`https://img.youtube.com/vi/${study.videoId}/maxresdefault.jpg`}
                alt={`${study.name} preview`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/40" />
              <button
                onClick={() => setPlaying(true)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPlaying(true); } }}
                className="absolute inset-0 flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
                aria-label={`Play ${study.name} demo`}
              >
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-200">
                  <Play size={22} className="text-orange fill-orange ml-1" />
                </div>
              </button>
            </>
          )
        ) : study.coverImage ? (
          <>
            <img
              src={study.coverImage}
              alt={`${study.name} preview`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/30" />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#EEF2F8] to-[#E8EDF5]">
            <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-3">
              <Play size={20} className="text-navy/30 ml-0.5" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="text-[18px] font-extrabold text-navy leading-tight">
                {study.name}
              </h3>
              {study.live && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.10em] bg-green-50 text-green-600 border border-green-200 rounded-full px-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Live
                </span>
              )}
            </div>
            <p className="text-[12px] text-lt-grey mt-0.5">{study.client}</p>
          </div>
          {study.videoUrl && (
            <a
              href={study.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1 text-orange hover:text-orange/70 transition-colors mt-1"
              aria-label="View on YouTube"
            >
              <ExternalLink size={13} />
              <span className="text-[12px] font-semibold">View</span>
            </a>
          )}
        </div>

        <div className="space-y-4 flex-1">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.10em] text-lt-grey mb-1">Problem Solved</p>
            <p className="text-[14px] text-mid-grey leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.10em] text-lt-grey mb-1"></p>
            <p className="text-[14px] text-mid-grey leading-relaxed">{study.solution}</p>
          </div>
          <div className="bg-orange/5 border border-orange/20 rounded-[8px] px-4 py-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.10em] text-orange mb-1">Result</p>
            <p className="text-[14px] text-navy font-semibold leading-relaxed">{study.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProofSection() {
  const ref = useReveal();
  const [bookHovered, setBookHovered] = useState(false);

  return (
    <section id="proof" className="bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">

        <div className="max-w-3xl mb-12 reveal">
          <SectionEyebrow>{proof.eyebrow}</SectionEyebrow>
          <h2 className="text-navy font-extrabold mb-4 leading-tight" style={{ fontSize: 'clamp(26px, 4vw, 42px)', letterSpacing: '-0.5px' }}>
            {proof.headline}{' '}
            <em className="text-orange" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              {proof.headlineItalic}
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {deliveryProof.map((item) => (
            <div
              key={item.client}
              className="reveal card-hover card-glow rounded-[12px] overflow-hidden border border-[#e2e8f0]"
              style={{ background: 'linear-gradient(160deg, #EEF2F8 0%, #fde8d8 100%)' }}
            >
              <div className="h-1 bg-orange w-full" />
              <div className="p-6">
                <div className="text-[24px] font-extrabold text-navy leading-tight mb-1">
                  {item.metric}{' '}
                  <span className="text-orange">{item.metricHighlight}</span>
                </div>
                <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-orange mb-4">
                  {item.client}
                </div>
                <div className="h-px bg-[#d8dfe8] mb-4" />
                <div className="text-[14px] text-mid-grey leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4 reveal">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-navy mb-1">Case Studies</p>
          <p className="text-[15px] text-mid-grey">Real products. Real clients. Real outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.name} study={study} />
          ))}
        </div>

        <div className="mb-3 reveal">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-orange">
            What makes us different
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {proof.differentiators.map((item) => (
            <div key={item.num} className="reveal card-hover bg-ice rounded-[10px] p-6 flex gap-5">
              <div className="text-[28px] font-extrabold text-orange/30 leading-none select-none w-7 shrink-0">
                {item.num}
              </div>
              <div>
                <div className="text-[16px] font-bold text-navy mb-2 leading-snug">
                  {item.title}
                </div>
                <div className="text-[14px] text-mid-grey leading-relaxed">
                  {item.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="reveal card-hover bg-ice rounded-[10px] p-6">
            <div className="text-[16px] font-bold text-navy mb-4">
              {proof.generalistsVsBig4.generalists.heading}
            </div>
            <ul className="space-y-2.5">
              {proof.generalistsVsBig4.generalists.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-mid-grey leading-relaxed">
                  <span className="text-orange font-bold mt-[1px] shrink-0">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal card-hover bg-ice rounded-[10px] p-6">
            <div className="text-[16px] font-bold text-navy mb-4">
              {proof.generalistsVsBig4.big4.heading}
            </div>
            <ul className="space-y-2.5">
              {proof.generalistsVsBig4.big4.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-mid-grey leading-relaxed">
                  <span className="text-orange font-bold mt-[1px] shrink-0">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal rounded-[16px] overflow-hidden border border-[#e2e8f0]" style={{ background: 'linear-gradient(135deg, #EEF2F8 0%, #FDF0E8 100%)' }}>
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <blockquote
                className="border-l-4 border-orange pl-6 text-[20px] md:text-[24px] font-medium text-navy leading-[1.5] mb-6"
                style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
              >
                {proof.bookQuote}
              </blockquote>
              <div className="text-[14px] text-mid-grey font-medium mb-5">
                <span className="font-bold text-navy">{proof.bookTitle}</span>
                <span className="mx-2 text-lt-grey">—</span>
                {proof.bookAuthor}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.amazon.com/Build-Right-Thing-high-growth-businesses/dp/1707894140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy border border-[#d0d4db] rounded-[6px] px-3.5 py-2 hover:border-navy hover:bg-navy hover:text-white transition-all duration-150"
                >
                  <ExternalLink size={12} />
                  Available on Amazon
                </a>
                <a
                  href="https://www.amazon.com/Build-Right-Thing-high-growth-businesses/dp/1707894140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-orange border border-orange/30 rounded-[6px] px-3.5 py-2 hover:bg-orange hover:text-white transition-all duration-150"
                >
                  <ExternalLink size={12} />
                  Available on Kindle
                </a>
              </div>
            </div>

            <div
              className="flex-shrink-0 flex items-center justify-center p-8 md:p-12 md:border-l border-t md:border-t-0 border-[#e2e8f0]"
              style={{ minWidth: '240px' }}
            >
              <a
                href="https://www.amazon.com/Build-Right-Thing-high-growth-businesses/dp/1707894140"
                target="_blank"
                rel="noopener noreferrer"
                className="relative cursor-pointer block"
                onMouseEnter={() => setBookHovered(true)}
                onMouseLeave={() => setBookHovered(false)}
                style={{
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: bookHovered ? 'scale(1.06) translateY(-4px)' : 'scale(1) translateY(0)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    boxShadow: bookHovered
                      ? '0 24px 48px rgba(14,32,63,0.18), 0 8px 16px rgba(232,116,59,0.20)'
                      : '0 8px 24px rgba(14,32,63,0.10)',
                    transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    borderRadius: '8px',
                  }}
                />
                <Image
                  src="/build_the_right_thing.webp"
                  alt="Build the Right Thing by Haja J Deen"
                  width={210}
                  height={230}
                  className="relative z-10 rounded-lg object-contain"
                  style={{ display: 'block' }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-center gap-1.5 rounded-b-lg py-3 px-3"
                  style={{
                    background: 'rgba(232,116,59,0.92)',
                    opacity: bookHovered ? 1 : 0,
                    transition: 'opacity 0.25s ease',
                  }}
                >
                  <ExternalLink size={12} className="text-white" />
                  <span className="text-[12px] font-semibold text-white tracking-wide">Get the book</span>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
