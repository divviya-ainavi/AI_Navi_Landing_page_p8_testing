'use client';

import React, { useState, useRef } from 'react';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { ScrollDepthTracker } from '@/components/ScrollDepthTracker';
import { useAnalytics } from '@/hooks/use-analytics';
import { Landmark, CircleCheck as CheckCircle2, TriangleAlert as AlertTriangle, ChevronDown, ChevronUp, ExternalLink, ArrowRight, Download } from 'lucide-react';


const rdecCards = [
  {
    title: 'Merged R&D Expenditure Credit (RDEC)',
    badge: 'Active',
    badgeColor: 'green',
    amount: '15–16p',
    amountSub: 'net benefit per £1 of qualifying AI R&D spend',
    desc: 'For accounting periods beginning on or after 1 April 2024, all UK companies claim under the single merged RDEC scheme. The headline credit rate is 20% of qualifying spend, taxable as trading income. At the 25% Corporation Tax rate, the effective net benefit is approximately 15–16p per £1. AI demand forecasting, custom route optimisation, RGM analytics platforms, and warehouse scheduling AI typically qualify.',
    meta: [
      { label: 'Who', val: 'All UK companies, any size' },
      { label: 'Rate', val: '20% gross / ~15–16% net' },
      { label: 'Claim via', val: 'Corporation Tax return (CT600)' },
    ],
    link: { text: 'HMRC merged scheme guidance →', href: 'https://www.gov.uk/guidance/research-and-development-rd-tax-relief-the-merged-scheme-and-enhanced-rd-intensive-support' },
  },
  {
    title: 'Enhanced R&D Intensive Support (ERIS)',
    badge: 'Active',
    badgeColor: 'green',
    amount: 'Up to 27p',
    amountSub: 'net benefit per £1 for qualifying loss-making SMEs',
    desc: 'Loss-making SMEs (under 500 employees, turnover under €100M) spending at least 30% of total expenditure on qualifying R&D may claim under ERIS. The scheme provides an 86% additional deduction and a non-taxable payable credit worth up to 14.5% of the surrenderable loss. Relevant for FMCG or logistics scale-ups investing heavily in AI before reaching profitability.',
    meta: [
      { label: 'Who', val: 'Loss-making SMEs, ≥30% R&D intensity' },
      { label: 'Credit', val: 'Up to 14.5% payable (non-taxable)' },
    ],
    link: { text: 'HMRC ERIS guidance →', href: 'https://www.gov.uk/guidance/research-and-development-rd-tax-relief-the-merged-scheme-and-enhanced-rd-intensive-support' },
  },
  {
    title: 'Patent Box Relief',
    badge: 'Active',
    badgeColor: 'green',
    amount: '10%',
    amountSub: 'Corporation Tax rate on profits from patented AI IP',
    desc: 'If your AI development produces patentable IP — a proprietary demand forecasting algorithm, a novel scheduling engine, a food-safety detection model — Patent Box reduces the CT rate on those profits to 10% versus the 25% main rate. The Chancellor\'s emphasis on building a sovereign AI edge reinforces the strategic value of patenting your proprietary AI capability.',
    meta: [
      { label: 'Who', val: 'UK companies with registered patents on AI IP' },
      { label: 'Rate', val: '10% CT vs 25% standard' },
    ],
    link: { text: 'HMRC Patent Box guidance →', href: 'https://www.gov.uk/guidance/patent-box-how-to-benefit-from-the-patent-box-regime' },
  },
];

const qualifyingTable = [
  { activity: 'Custom demand forecasting model development', industry: 'CPG / FMCG / Logistics', qualifies: 'yes', reason: 'Resolves technological uncertainty in prediction accuracy' },
  { activity: 'Revenue Growth Management (RGM) AI analytics', industry: 'CPG / FMCG', qualifies: 'yes', reason: 'Novel algorithmic development for pricing and trade investment' },
  { activity: 'AI route optimisation engine (custom-built)', industry: 'Logistics / 3PL', qualifies: 'yes', reason: 'Technical advancement beyond off-the-shelf routing software' },
  { activity: 'Warehouse scheduling & labour optimisation AI', industry: 'Logistics / 3PL', qualifies: 'yes', reason: 'Custom ML model to reduce labour costs via dynamic allocation' },
  { activity: 'AI-powered food quality / safety inspection', industry: 'Food Manufacturing', qualifies: 'yes', reason: 'Computer vision overcoming genuine uncertainty in defect detection' },
  { activity: 'Off-the-shelf SaaS AI tool subscription', industry: 'All', qualifies: 'no', reason: 'No qualifying R&D expenditure — routine use of existing technology' },
  { activity: 'Fine-tuning / configuration of vendor AI platform', industry: 'All', qualifies: 'partial', reason: 'May qualify if resolving genuine technical uncertainty — get specialist advice' },
];

const grantCards = [
  {
    title: 'BridgeAI — Innovation Exchange',
    badge: 'Active',
    badgeColor: 'green',
    amount: '£25K–£50K',
    amountSub: 'per project grant (Minimal Financial Assistance basis)',
    desc: 'Innovate UK\'s £100M BridgeAI programme explicitly targets agriculture & food processing, transport, logistics, and warehousing — the exact sectors AI Navi serves. The March 2026 Mais Lecture confirmed its expansion across more Industrial Strategy sectors. Mid-market CPG and logistics operators can apply as the industry partner or lead.',
    meta: [
      { label: 'Programme', val: '£100M BridgeAI' },
      { label: 'Sectors', val: 'Food, Logistics, Warehousing' },
      { label: 'Funder', val: 'Innovate UK / UKRI' },
    ],
    link: { text: 'Search live competitions →', href: 'https://apply-for-innovation-funding.service.gov.uk/competition/search' },
  },
  {
    title: 'AI Champions — Frontier AI Phase 1',
    badge: 'Open · Closes 29 Apr 2026',
    badgeColor: 'green',
    amount: '£3M total',
    amountSub: 'feasibility studies for frontier AI / ML technologies',
    desc: 'UK-registered SMEs can apply for feasibility study funding for frontier AI with a clear route to scale. Projects must evidence new-to-the-world capability or state-of-the-art improvement. Relevant for FMCG or logistics businesses developing genuinely novel AI.',
    meta: [
      { label: 'Deadline', val: '29 April 2026' },
      { label: 'Who', val: 'UK-registered SMEs' },
      { label: 'Funder', val: 'Innovate UK' },
    ],
    link: { text: 'Apply via Innovate UK →', href: 'https://apply-for-innovation-funding.service.gov.uk/competition/search' },
  },
  {
    title: 'Innovate UK Smart Grants',
    badge: 'Rolling Competition',
    badgeColor: 'blue',
    amount: '£25K–£500K+',
    amountSub: 'commercially novel AI projects across all sectors',
    desc: 'Smart Grants fund commercially novel AI projects across all sectors. AI projects in FMCG and logistics qualify if they demonstrate clear commercial potential and technological novelty. Funding covers 25–70% of eligible project costs depending on company size.',
    meta: [
      { label: 'Coverage', val: '25–70% of eligible costs' },
      { label: 'Funder', val: 'Innovate UK' },
    ],
    link: { text: 'Search current rounds →', href: 'https://apply-for-innovation-funding.service.gov.uk/competition/search' },
  },
  {
    title: 'Innovate UK Growth Catalyst',
    badge: 'New Programme',
    badgeColor: 'amber',
    amount: '£130M',
    amountSub: 'total programme — grants + tailored support for scale-ups',
    desc: 'A new £130M scheme offering grants and support to scale-up companies. The March 2026 Mais Lecture confirmed government intent to use procurement as a launchpad for scale-ups. For PE-backed FMCG and logistics businesses with proven AI products and scale ambition, Growth Catalyst provides capital and government endorsement.',
    meta: [
      { label: 'Funder', val: 'Innovate UK' },
      { label: 'Focus', val: 'Scale-up businesses' },
    ],
    link: { text: 'Innovate UK →', href: 'https://www.ukri.org/councils/innovate-uk/' },
  },
  {
    title: '£500M Sovereign AI Unit',
    badge: 'Announced Mar 2026',
    badgeColor: 'amber',
    amount: '£500M',
    amountSub: 'launching April 2026 — AI business start and scale-up fund',
    desc: 'Confirmed in the March 2026 Mais Lecture: a new Sovereign AI unit backed by £500M for starting and scaling UK AI businesses. This funds AI providers and prioritises UK-built AI solutions in government procurement. Watch DSIT / British Business Bank for application details.',
    meta: [
      { label: 'Source', val: 'Mais Lecture, 17 Mar 2026' },
      { label: 'Launch', val: 'April 2026 (est.)' },
    ],
    link: { text: "Read Chancellor's speech →", href: 'https://www.gov.uk/government/speeches/mais-lecture-2026' },
  },
  {
    title: 'Innovate UK Innovation Loans',
    badge: 'Rolling',
    badgeColor: 'blue',
    amount: 'Up to £2M',
    amountSub: 'low-interest financing for late-stage AI R&D commercialisation',
    desc: 'For companies that don\'t qualify for full grant funding, Innovation Loans provide low-interest financing (~3.7% p.a.) for late-stage R&D commercialisation. Repayable, but far cheaper than commercial debt and carries the validation of an Innovate UK award. Useful for businesses in the £100–500M revenue bracket.',
    meta: [
      { label: 'Rate', val: '~3.7% p.a.' },
      { label: 'Stage', val: 'Late-stage R&D' },
      { label: 'Repayable', val: 'Yes' },
    ],
    link: { text: 'Check loan rounds →', href: 'https://apply-for-innovation-funding.service.gov.uk/competition/search' },
  },
];

const capitalCards = [
  {
    title: 'Full Expensing (100% First Year Allowance)',
    badge: 'Permanent',
    badgeColor: 'green',
    amount: '100%',
    amountSub: 'first-year deduction on new qualifying AI plant and machinery',
    desc: 'UK companies can deduct the full cost of new qualifying plant and machinery in the year of purchase — AI servers, GPUs, edge AI devices, data centre equipment. This is permanent with no sunset date. At the 25% CT rate, a £1M AI infrastructure investment generates a £250,000 tax saving in Year 1.',
    meta: [
      { label: 'Who', val: 'UK companies — new equipment only' },
      { label: 'Assets', val: 'AI servers, GPUs, edge devices' },
    ],
    link: { text: 'HMRC Full Expensing →', href: 'https://www.gov.uk/guidance/full-expensing' },
  },
  {
    title: 'Annual Investment Allowance (AIA)',
    badge: 'Active',
    badgeColor: 'green',
    amount: '£1M',
    amountSub: 'annual deduction on new and used qualifying assets',
    desc: 'The AIA allows a 100% deduction on up to £1M of qualifying plant and machinery per year — including used equipment (which Full Expensing does not cover). For FMCG and logistics companies investing in WMS upgrades, warehouse automation hardware, or refurbished servers, the AIA provides immediate relief.',
    meta: [
      { label: 'Who', val: 'All UK businesses' },
      { label: 'Limit', val: '£1M per year' },
      { label: 'Covers', val: 'New and used qualifying assets' },
    ],
    link: { text: 'HMRC AIA guidance →', href: 'https://www.gov.uk/capital-allowances/annual-investment-allowance' },
  },
  {
    title: 'Software & Intangibles — Treatment Nuance',
    badge: 'Adviser Required',
    badgeColor: 'amber',
    amount: 'Variable',
    amountSub: 'depending on capitalisation vs expensing treatment',
    desc: 'AI software investment sits at the intersection of capital allowances and R&D tax credits. Internally developed AI software costs typically qualify for RDEC. Purchased software licences may qualify for capital allowances. A specialist adviser ensures you don\'t leave claims on the table by applying the wrong treatment.',
    meta: [
      { label: 'Action', val: 'Review with R&D tax adviser' },
    ],
    link: null,
  },
];

const stackSteps = [
  {
    num: 1,
    title: 'Scope your AI project with a structured diagnostic',
    body: 'Before applying for anything, you need a documented AI strategy and roadmap. Innovate UK grant assessors require it. Your R&D tax adviser needs it to identify qualifying expenditure. Your board or PE sponsor needs it to approve the investment. An AI FlightCheck™ (£4,500, two weeks, below procurement committee thresholds) produces a 15-page AI readiness report and 90-day action plan that unlocks multiple funding streams with a single deliverable.',
    offset: '£0 cost offset at this stage — activates everything below',
  },
  {
    num: 2,
    title: 'Apply for BridgeAI or a Smart Grant in parallel with delivery',
    body: 'Once you have your project roadmap, use it as the backbone of a BridgeAI or Smart Grant application. BridgeAI is the most directly targeted programme for your sectors — food processing and logistics are explicitly named, and the March 2026 Mais Lecture confirmed its expansion. Grant cycles take 3–6 months, so start the application while you begin delivery.',
    offset: 'Potential offset: 25–70% of eligible project costs (SMEs)',
  },
  {
    num: 3,
    title: 'Claim the merged RDEC on all qualifying AI development spend',
    body: 'Custom AI development — your team\'s time, external data engineering, model training compute — typically qualifies for the merged RDEC at 20% of qualifying expenditure. For a business spending £300K on qualifying AI R&D in a year, that\'s approximately a £45,000 net benefit after Corporation Tax. Document qualifying activities from Day 1.',
    offset: 'Net benefit: ~15–16p per £1 of qualifying spend',
  },
  {
    num: 4,
    title: 'Use Full Expensing and AIA on all AI hardware and infrastructure',
    body: 'Any AI hardware — servers, GPUs, WMS integration kit, edge devices — qualifies for 100% first-year deduction under Full Expensing (new assets) or the £1M AIA (new and used). At the 25% CT rate, a £200K AI hardware investment saves £50,000 in tax in Year 1. The Chancellor\'s energy reforms will also progressively reduce infrastructure running costs.',
    offset: 'Tax saving: 25% of qualifying hardware cost in Year 1',
  },
];

const keyDates = [
  { date: '29 April 2026', desc: 'BridgeAI Innovation Exchange & AI Champions Phase 1 close. Apply via Innovate UK Innovation Funding Service. Have your AI project roadmap ready.' },
  { date: 'April 2026 (est.)', desc: 'Sovereign AI Unit launches. New £500M fund confirmed in Mais Lecture. Watch DSIT and British Business Bank for application routes.' },
  { date: 'Rolling — Apr 2026', desc: 'RDEC claims for FY ending March 2025. File within 2 years of your accounting period end. Notify HMRC in advance if this is your first claim.' },
  { date: 'H2 2026', desc: 'AI Adoption Summit — confirmed by Chancellor. Connects tech firms with mid-market adopters. Watch DSIT channels for registration.' },
  { date: '2026 (TBD)', desc: 'Growth Labs legislation. Business Secretary legislating for rapid regulatory amendments to test AI in regulated environments.' },
  { date: 'Ongoing', desc: 'Full Expensing & AIA. Claim on the Corporation Tax return for the year AI hardware is placed in service. No cap on Full Expensing for new assets.' },
];

const checklistItems = [
  { title: 'Share the Mais Lecture with your board or PE sponsor', body: "The Chancellor's explicit AI adoption goal, the AI Adoption Summit, and the £500M Sovereign AI unit give your AI investment case direct government-level backing — frame it in your board pack." },
  { title: 'Talk to a specialist R&D tax adviser (not a generalist accountant)', body: 'Your custom AI development almost certainly qualifies for the merged RDEC. Many R&D specialists work on contingency — 15–20% of the credit on success, no upfront cost to you.' },
  { title: 'Document your AI project technical work from Day 1', body: 'Staff time logs, technical uncertainty records, and experiment documentation are mandatory for a defensible RDEC claim. Start now — retrospective documentation is harder and riskier.' },
  { title: 'Review Full Expensing for any AI hardware purchases this year', body: 'New AI servers, GPUs, edge devices or WMS kit placed in service this year qualifies for 100% first-year deduction. Confirm with your accountant before your accounting period end.' },
  { title: 'Check live Innovate UK competitions for food / logistics / warehousing', body: 'Search the Innovation Funding Service for current BridgeAI and Smart Grant rounds. Set up a UKRI email alert. The 29 April 2026 AI Champions deadline is approaching.' },
  { title: 'Prepare an AI project roadmap before applying for any grant', body: 'Innovate UK assessors require clear commercial goals, technical novelty, and a credible delivery plan. An AI FlightCheck™ produces exactly this documentation as a core output.' },
  { title: 'Register interest in the AI Adoption Summit (H2 2026)', body: 'The Chancellor confirmed this summit to connect tech firms with companies ready to scale AI. Watch DSIT channels for registration details.' },
  { title: 'Assess EU AI Act compliance obligations now', body: 'FMCG food-safety AI and logistics routing AI may fall under high-risk classification. Build this into your AI implementation plan — and consider Growth Labs as a sandbox once legislated.' },
  { title: 'Book a 30-minute AI Funding Discovery Call with AI Navi', body: "We'll map the funding sources relevant to your specific AI project and tell you which to prioritise, in what order, and what documentation you need to get started." },
];

const faqs = [
  {
    q: 'What UK government funding is available for AI in FMCG and logistics in 2026?',
    a: 'UK mid-market CPG, FMCG and logistics companies can access: the merged RDEC scheme (~15–16p net per £1 of qualifying AI development spend); Innovate UK BridgeAI grants (£25K–£50K per project, explicitly targeting food processing and logistics); the new £500M Sovereign AI unit (announced March 2026 Mais Lecture); Full Expensing on AI hardware (100% first-year deduction); and Patent Box on profits from proprietary AI IP (10% CT rate). Stacked correctly, these offset 15–35% of total AI project costs without equity dilution or commercial debt.',
  },
  {
    q: "What did the Chancellor announce about AI funding for UK businesses in the 2026 Mais Lecture?",
    a: 'In the March 2026 Mais Lecture, Chancellor Rachel Reeves confirmed five things directly relevant to mid-market FMCG and logistics businesses: (1) the UK\'s goal of fastest AI adoption in the G7; (2) a new £500M Sovereign AI unit launching in April 2026; (3) Growth Labs legislation for rapid regulatory amendments to safely test AI; (4) an AI Adoption Summit in H2 2026 brokering connections between tech firms and mid-market adopters; and (5) the confirmed Manchester Digital Campus as a hub for advanced manufacturing and digital technologies.',
  },
  {
    q: 'Does the UK R&D tax credit apply to AI demand forecasting, route optimisation and RGM analytics?',
    a: 'Yes, in most cases. Under the merged RDEC scheme (April 2024+), custom AI development qualifies if it meets the four DSIT criteria: permitted purpose, technological uncertainty, process of experimentation, and technological in nature. Custom demand forecasting models, route optimisation engines, RGM analytics platforms, and warehouse scheduling AI routinely qualify because they involve genuine technical uncertainty. Off-the-shelf SaaS subscriptions do not qualify.',
  },
  {
    q: 'How much AI funding can a UK mid-market FMCG or logistics company realistically access?',
    a: 'The realistic range for a typical AI implementation project is 15–35% of total costs when stacking all available mechanisms. For a £500K AI project this might mean: ~£45–75K RDEC benefit on qualifying development spend; £25–50K BridgeAI grant contribution; £50K in Year 1 capital allowances savings on hardware. None of these require equity, debt, or waiting 18 months — R&D credits and capital allowances move at your own pace.',
  },
  {
    q: 'Can a PE-backed mid-market FMCG or logistics business access UK AI grants?',
    a: 'Yes, but SME size thresholds matter. Innovate UK uses EU SME definitions — under 250 employees, turnover under €50M or balance sheet under €43M. PE-backed businesses must count linked enterprise employees and revenues across the portfolio. A portfolio company within a large PE group may be classified as a large company, affecting grant rates. RDEC and capital allowances are not restricted by size.',
  },
  {
    q: 'What do I need to prepare before applying for Innovate UK AI funding?',
    a: 'Successful Innovate UK applications require: a documented AI project plan showing technological novelty and commercial impact; evidence of your business\'s capability to deliver; a clear commercialisation route; and co-investment commitment (typically 30–75% of project costs). An AI FlightCheck™ from AI Navi produces exactly this documentation — a 15-page AI readiness report and 90-day action plan at a fixed price below procurement committee thresholds (£4,500).',
  },
];

type TabId = 'tax' | 'grants' | 'capital' | 'strategy' | 'checklist' | 'faq';

const tabs: { id: TabId; label: string }[] = [
  { id: 'tax', label: '01 — R&D Tax Credits' },
  { id: 'grants', label: '02 — Innovate UK Grants' },
  { id: 'capital', label: '03 — Capital Allowances' },
  { id: 'strategy', label: '04 — Funding Stack' },
  { id: 'checklist', label: '05 — Action Checklist' },
  { id: 'faq', label: '06 — FAQ' },
];

function BadgeEl({ badge, color }: { badge: string; color: string }) {
  const classes: Record<string, string> = {
    green: 'bg-green-50 text-green-700 border border-green-200',
    blue: 'bg-blue-50 text-blue-700 border border-blue-200',
    amber: 'bg-amber-50 text-amber-700 border border-amber-200',
  };
  return (
    <span className={`inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full flex-shrink-0 ${classes[color] || classes.green}`}>
      {badge}
    </span>
  );
}

type CardType = {
  title: string;
  badge: string;
  badgeColor: string;
  amount: string;
  amountSub: string;
  desc: string;
  meta: { label: string; val: string }[];
  link: { text: string; href: string } | null;
};

function FundingCard({ card }: { card: CardType }) {
  return (
    <div className="bg-white p-6 flex flex-col gap-3 hover:bg-[#FAF7F4] transition-colors">
      <div className="flex justify-between items-start gap-3">
        <span className="text-[14px] font-bold text-navy leading-snug">{card.title}</span>
        <BadgeEl badge={card.badge} color={card.badgeColor} />
      </div>
      <div>
        <p className="text-[26px] font-extrabold text-orange leading-none">{card.amount}</p>
        <p className="text-[11px] text-[#9CA3AF] mt-1">{card.amountSub}</p>
      </div>
      <p className="text-[13px] text-[#6B7280] leading-relaxed">{card.desc}</p>
      <div className="flex flex-wrap gap-2">
        {card.meta.map((m) => (
          <span key={m.label} className="text-[11px] bg-[#FAF7F4] border border-[#E5E7EB] text-navy px-2.5 py-1 rounded-md">
            <strong className="font-semibold">{m.label}:</strong> {m.val}
          </span>
        ))}
      </div>
      {card.link && (
        <a
          href={card.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] font-semibold text-orange hover:underline mt-auto inline-flex items-center gap-1"
        >
          {card.link.text} <ExternalLink size={11} />
        </a>
      )}
    </div>
  );
}

export default function AIFundingGuidePage() {
  const [activeTab, setActiveTab] = useState<TabId>('tax');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const [kitName, setKitName] = useState('');
  const [kitEmail, setKitEmail] = useState('');
  const [kitSubmitting, setKitSubmitting] = useState(false);
  const [kitReady, setKitReady] = useState(false);
  const [kitError, setKitError] = useState('');
  const formStartedRef = useRef(false);

  const {
    trackCTAClick,
    trackScorecardClick,
    trackFundingKitFormStart,
    trackFundingKitDownload,
    trackFundingKitError,
    trackTabChange,
  } = useAnalytics();

  const handleFormFocus = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackFundingKitFormStart();
    }
  };

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    trackTabChange(tabId, 'funding-guide');
  };

  async function handleKitDownload(e: React.FormEvent) {
    e.preventDefault();
    setKitError('');
    if (!kitName.trim() || !kitEmail.trim()) {
      setKitError('Both name and email are required.');
      trackFundingKitError('validation', 'Name and email required');
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(kitEmail.trim())) {
      setKitError('Please enter a valid email address.');
      trackFundingKitError('validation', 'Invalid email format');
      return;
    }
    setKitSubmitting(true);
    try {
      const response = await fetch('/api/funding-kit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: kitName.trim(),
          email: kitEmail.trim(),
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      setKitReady(true);
      trackFundingKitDownload({ email: kitEmail.trim(), name: kitName.trim() });
      const link = document.createElement('a');
      link.href = '/AI-Navi-UK-AI-Funding-Action-Kit.pdf';
      link.download = 'AI-Navi-UK-AI-Funding-Action-Kit.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      setKitError('Something went wrong. Please try again.');
      trackFundingKitError('api', 'API request failed');
    } finally {
      setKitSubmitting(false);
    }
  }

  function toggleCheck(i: number) {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollDepthTracker />
      <NavBar />

      {/* Hero */}
      <header className="bg-white border-b border-border py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: headline */}
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.1em] text-orange border border-orange/30 bg-orange/5 px-3 py-1 rounded-full mb-6">
                UK AI Funding Guide · Updated 17 March 2026
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight tracking-tight mb-4">
                Fund Your AI Strategy.<br />
                <span className="text-orange">Offset Up to 35% of Costs.</span>
              </h1>
              <p className="text-[16px] text-[#6B7280] leading-relaxed">
                Every UK AI funding mechanism that matters for mid-market CPG, FMCG and logistics businesses and what it means for your AI investment case.
              </p>
            </div>

            {/* Right: download form */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-orange mb-1">Free Download · 12-Page PDF</p>
              <p className="text-[18px] font-extrabold text-navy mb-1 leading-snug">UK AI Funding Action Kit 2026</p>
              <p className="text-[13px] text-[#6B7280] mb-5 leading-relaxed">The step-by-step workbook for CPG, FMCG &amp; logistics leaders. Includes your project profile template, RDEC worksheet, BridgeAI eligibility checker, and 90-day action plan.</p>

              {!kitReady ? (
                <form onSubmit={handleKitDownload} noValidate>
                  <div className="flex flex-col gap-3 mb-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Full name <span className="text-orange">*</span></label>
                      <input
                        type="text"
                        value={kitName}
                        onChange={(e) => setKitName(e.target.value)}
                        onFocus={handleFormFocus}
                        placeholder="e.g. Sarah Thompson"
                        required
                        className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[13px] text-navy placeholder-[#9CA3AF] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Work email <span className="text-orange">*</span></label>
                      <input
                        type="email"
                        value={kitEmail}
                        onChange={(e) => setKitEmail(e.target.value)}
                        onFocus={handleFormFocus}
                        placeholder="e.g. sarah@company.co.uk"
                        required
                        className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[13px] text-navy placeholder-[#9CA3AF] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
                      />
                    </div>
                  </div>
                  {kitError && (
                    <p className="text-[12px] text-red-600 mb-3 flex items-center gap-1">
                      <AlertTriangle size={12} /> {kitError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={kitSubmitting}
                    className="w-full bg-orange text-white font-semibold text-[14px] px-5 py-3 rounded-lg hover:bg-orange/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2 mb-4"
                  >
                    {kitSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Download size={15} />
                    )}
                    {kitSubmitting ? 'Preparing download...' : 'Download Free PDF'}
                  </button>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#F3F4F6]">
                    {[
                      'AI project profile template',
                      'RDEC qualification worksheet',
                      'BridgeAI eligibility checker',
                      '90-day funding action plan',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-1.5">
                        <CheckCircle2 size={12} className="text-orange flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] text-[#6B7280]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-[#9CA3AF] mt-3 text-center">No spam. Unsubscribe any time.</p>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={24} className="text-green-600" />
                  </div>
                  <p className="text-[15px] font-bold text-navy mb-2">Your download has started</p>
                  <p className="text-[12px] text-[#6B7280] mb-4">If it didn't start automatically, click below.</p>
                  <a
                    href="/AI-Navi-UK-AI-Funding-Action-Kit.pdf"
                    download="AI-Navi-UK-AI-Funding-Action-Kit.pdf"
                    className="inline-flex items-center gap-2 bg-orange text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg hover:bg-orange/90 transition-colors"
                  >
                    <Download size={14} /> Download again
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-20">

        {/* How to use */}
        <div className="bg-orange/5 border border-orange/20 border-l-4 border-l-orange rounded-lg px-6 py-5 mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange mb-2">How to use this guide</p>
          <p className="text-[13px] text-navy leading-relaxed">
            Start with the <strong><button onClick={() => setActiveTab('tax')} className="text-orange font-semibold hover:underline">Chancellor's AI Agenda</button></strong> for the policy context your board needs to see. Then review <strong><button onClick={() => setActiveTab('tax')} className="text-orange font-semibold hover:underline">R&D Tax Credits</button></strong> — the biggest single cash-back mechanism for any size company. Check <strong><button onClick={() => setActiveTab('grants')} className="text-orange font-semibold hover:underline">Innovate UK Grants</button></strong> for co-funding. Use the <strong><button onClick={() => setActiveTab('strategy')} className="text-orange font-semibold hover:underline">Funding Stack</button></strong> to layer all sources. An <a href="/#offers" className="text-orange font-semibold hover:underline">AI FlightCheck™</a> (£4,500 · two weeks · below procurement threshold) produces the documented AI roadmap that unlocks every mechanism on this page.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-border mb-10 overflow-x-auto">
          <div className="flex min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`text-[13px] font-medium px-4 py-3 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-orange border-orange font-semibold'
                    : 'text-[#6B7280] border-transparent hover:text-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab: R&D Tax Credits */}
        {activeTab === 'tax' && (
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange flex items-center gap-2 mb-2"><span>—</span> Biggest Single Opportunity</p>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-3">UK R&D Tax Credits — What FMCG & Logistics Companies Need to Know</h2>
            <p className="text-[14px] text-[#6B7280] max-w-2xl mb-8 leading-relaxed">
              The merged RDEC scheme is the single largest AI funding mechanism available to your company. Most qualifying mid-market businesses receive a net benefit of 15–16p for every £1 of qualifying spend. You don't need a research lab — custom AI development in demand forecasting, route optimisation, or commercial analytics almost always qualifies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-xl overflow-hidden mb-8">
              {rdecCards.map((card, i) => <FundingCard key={i} card={card} />)}
            </div>

            <h3 className="text-[14px] font-bold text-navy mb-4">What AI activities qualify in CPG, FMCG & Logistics?</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border border-border rounded-xl overflow-hidden border-collapse">
                <thead>
                  <tr className="bg-[#FAF7F4]">
                    <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-[0.07em] text-navy border-b border-border">AI Activity</th>
                    <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-[0.07em] text-navy border-b border-border">Industry</th>
                    <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-[0.07em] text-navy border-b border-border">Qualifies?</th>
                    <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-[0.07em] text-navy border-b border-border">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {qualifyingTable.map((row, i) => (
                    <tr key={i} className="border-t border-border hover:bg-[#FAF7F4] transition-colors">
                      <td className="px-4 py-3 text-[13px] font-semibold text-navy">{row.activity}</td>
                      <td className="px-4 py-3 text-[13px] text-[#6B7280]">{row.industry}</td>
                      <td className={`px-4 py-3 text-[13px] font-bold ${row.qualifies === 'yes' ? 'text-green-600' : row.qualifies === 'no' ? 'text-red-600' : 'text-amber-600'}`}>
                        {row.qualifies === 'yes' ? '✓ Yes' : row.qualifies === 'no' ? '✗ No' : '⚠ Partial'}
                      </td>
                      <td className="px-4 py-3 text-[13px] text-[#6B7280]">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-orange/5 border border-orange/20 border-l-4 border-l-orange rounded-lg p-6 mb-6 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-orange/15 border border-orange/25 flex items-center justify-center flex-shrink-0">
                <Landmark size={18} className="text-orange" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-orange mb-1">Government Signal — 17 March 2026</p>
                <p className="text-[15px] font-bold text-navy mb-2">The UK's stated goal: the fastest AI adoption of any G7 economy</p>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">
                  The Chancellor explicitly named AI adoption as one of three top national priorities and committed to an <strong className="text-navy font-semibold">AI Adoption Summit</strong> in H2 2026 — connecting leading tech firms with companies ready to adopt and scale AI. The £38.6B UKRI settlement — with £9B targeted at AI and Industrial Strategy sectors — confirms this is backed by real capital, not just rhetoric. Your board's AI mandate now has direct government-level framing to support it.
                </p>
              </div>
            </div>

            <div className="bg-orange/5 border border-orange/20 border-l-4 border-l-orange rounded-lg px-5 py-4 flex gap-3 items-start">
              <AlertTriangle size={16} className="text-orange flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-[#6B7280] leading-relaxed">
                <strong className="text-navy font-semibold">Documentation is everything.</strong> HMRC applies close scrutiny to AI R&D claims. Staff time logs, technical uncertainty records, experiment documentation and design iteration evidence are mandatory for a defensible claim. Start documenting from Day 1. Always use a specialist R&D tax adviser — not a generalist accountant. This guide is informational only and does not constitute tax advice.
              </p>
            </div>
          </section>
        )}

        {/* Tab: Grants */}
        {activeTab === 'grants' && (
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange flex items-center gap-2 mb-2"><span>—</span> Grant Funding</p>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-3">Innovate UK & Government AI Grants for UK Mid-Market</h2>
            <p className="text-[14px] text-[#6B7280] max-w-2xl mb-8 leading-relaxed">
              Grants don't require equity or repayment but do require a documented AI project plan, evidence of commercial potential, and co-investment. The programmes below are most relevant for CPG, FMCG and logistics businesses in 2026 — including new programmes announced in the March 2026 Mais Lecture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-xl overflow-hidden mb-8">
              {grantCards.map((card, i) => <FundingCard key={i} card={card} />)}
            </div>
            <div className="bg-orange/5 border border-orange/20 border-l-4 border-l-orange rounded-lg px-5 py-4 flex gap-3 items-start">
              <AlertTriangle size={16} className="text-orange flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-[#6B7280] leading-relaxed">
                <strong className="text-navy font-semibold">Grant timelines:</strong> Innovate UK grants typically take 3–6 months from application to award. Lead with R&D tax credits and capital allowances (which move at your own pace), and pursue grants in parallel. A documented AI project roadmap — such as the one produced by AI Navi's FlightCheck™ — is required evidence in most applications and significantly reduces preparation time.
              </p>
            </div>
          </section>
        )}

        {/* Tab: Capital Allowances */}
        {activeTab === 'capital' && (
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange flex items-center gap-2 mb-2"><span>—</span> Tax Allowances on AI Investment</p>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-3">Capital Allowances for AI Hardware, Infrastructure & Software</h2>
            <p className="text-[14px] text-[#6B7280] max-w-2xl mb-8 leading-relaxed">
              Capital allowances let you deduct the cost of qualifying AI infrastructure directly from taxable profit in Year 1. For mid-market FMCG and logistics companies investing in on-premise or hybrid AI infrastructure, these are fast-moving and significant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-xl overflow-hidden">
              {capitalCards.map((card, i) => <FundingCard key={i} card={card} />)}
            </div>
          </section>
        )}

        {/* Tab: Funding Stack */}
        {activeTab === 'strategy' && (
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange flex items-center gap-2 mb-2"><span>—</span> Maximise Your Return</p>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-3">The 4-Step AI Funding Stack for UK FMCG & Logistics</h2>
            <p className="text-[14px] text-[#6B7280] max-w-2xl mb-8 leading-relaxed">
              Stacking multiple funding streams is how mid-market companies offset a meaningful proportion of AI project costs. The sources don't conflict. The key is sequencing and documentation. Here's how AI Navi approaches this with clients.
            </p>

            <div className="border border-border rounded-xl overflow-hidden divide-y divide-border mb-1">
              {stackSteps.map((step) => (
                <div key={step.num} className="bg-white p-6 flex gap-5 items-start hover:bg-[#FAF7F4] transition-colors">
                  <div className="w-9 h-9 rounded-full bg-orange text-white font-extrabold text-[15px] flex items-center justify-center flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-[13px] text-[#6B7280] leading-relaxed mb-3">{step.body}</p>
                    <span className="inline-block bg-orange/10 border border-orange/20 text-orange text-[11px] font-semibold px-3 py-1 rounded-md">
                      {step.offset}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FAF7F4] border border-border rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
              <div>
                <p className="text-[11px] text-[#6B7280] mb-1">Combined offset — typical UK mid-market AI project</p>
                <p className="text-[15px] font-semibold text-navy max-w-md leading-snug">No equity. No debt. No 18-month wait for tax credits. And a government that's now explicitly backing mid-market AI adoption.</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[48px] font-extrabold text-orange leading-none">15–35%</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">of total AI project costs when stacking all mechanisms</p>
              </div>
            </div>

            <h3 className="text-[14px] font-bold text-navy mb-4">2026 Key Dates & Deadlines</h3>
            <div className="border border-border rounded-xl overflow-hidden divide-y divide-border">
              {keyDates.map((d, i) => (
                <div key={i} className="bg-white px-6 py-4 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-4 hover:bg-[#FAF7F4] transition-colors">
                  <span className="text-[12px] font-bold text-orange">{d.date}</span>
                  <span className="text-[13px] text-[#6B7280]">{d.desc}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab: Checklist */}
        {activeTab === 'checklist' && (
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange flex items-center gap-2 mb-2"><span>—</span> Take Action</p>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-3">AI Funding Action Checklist</h2>
            <p className="text-[14px] text-[#6B7280] max-w-2xl mb-8 leading-relaxed">
              Work through these steps to access the UK AI funding mechanisms most relevant to your FMCG or logistics business. Click each item to mark it complete.
            </p>
            <div className="border border-border rounded-xl overflow-hidden divide-y divide-border mb-8">
              {checklistItems.map((item, i) => (
                <div
                  key={i}
                  onClick={() => toggleCheck(i)}
                  className="bg-white px-5 py-4 flex gap-4 items-start cursor-pointer hover:bg-[#FAF7F4] transition-colors"
                >
                  <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors ${checkedItems.has(i) ? 'bg-orange border-orange' : 'border-[#D1D5DB]'}`}>
                    {checkedItems.has(i) && <CheckCircle2 size={12} className="text-white" />}
                  </div>
                  <div className={checkedItems.has(i) ? 'opacity-40 line-through' : ''}>
                    <p className="text-[13px] font-bold text-navy mb-0.5">{item.title}</p>
                    <p className="text-[12px] text-[#6B7280] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab: FAQ */}
        {activeTab === 'faq' && (
          <section>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange flex items-center gap-2 mb-2"><span>—</span> Common Questions</p>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-8">UK AI Funding — Questions FMCG & Logistics Leaders Ask</h2>
            <div className="border border-border rounded-xl overflow-hidden divide-y divide-border mb-10">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left gap-4 hover:bg-[#FAF7F4] transition-colors"
                  >
                    <span className="text-[14px] font-semibold text-navy">{faq.q}</span>
                    {openFaq === i ? <ChevronUp size={16} className="text-orange flex-shrink-0" /> : <ChevronDown size={16} className="text-orange flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-[13px] text-[#6B7280] leading-relaxed border-t border-border pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Block */}
        <div className="bg-[#FAF7F4] border border-border rounded-xl px-8 py-12 text-center mt-14 mb-8">
          <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-3">Ready to Map Your AI Funding Stack?</h2>
          <p className="text-[15px] text-[#6B7280] max-w-md mx-auto mb-8 leading-relaxed">
            Every pound you recover through RDEC, grants, and capital allowances is a pound that goes further in your AI implementation. An AI FlightCheck™ produces the strategy document that activates multiple funding streams — and tells you exactly where to start.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://calendar.app.google/WgBkgKEFzsHsVM447"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick('Book a Discovery Call', 'funding-bottom-cta', 'https://calendar.app.google/WgBkgKEFzsHsVM447')}
              className="inline-flex items-center gap-2 bg-orange text-white px-5 py-2.5 rounded-lg font-semibold text-[14px] hover:bg-orange/90 transition-colors"
            >
              Book a Discovery Call <ArrowRight size={15} />
            </a>
            <a
              href="https://ai-rpigbkp1.scoreapp.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackScorecardClick('AI Readiness Scorecard - Bottom CTA')}
              className="inline-flex items-center gap-2 border border-[#D1D5DB] text-navy px-5 py-2.5 rounded-lg font-medium text-[14px] hover:border-orange hover:text-orange transition-colors"
            >
              Take the AI Readiness Scorecard
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-[#9CA3AF] bg-[#FAF7F4] border border-border rounded-lg px-5 py-4 leading-relaxed">
          <strong className="text-[#6B7280]">Disclaimer:</strong> This guide is for informational purposes only and does not constitute tax, legal, or financial advice. R&D tax relief eligibility, funding rates, and programme details change frequently. Always consult a qualified R&D tax adviser, accountant, or legal professional before making claims or applications. Details are accurate to March 2026 — verify directly with HMRC and Innovate UK before acting. References to the Mais Lecture 2026 are drawn from the published government transcript (GOV.UK, 17 March 2026). AI Navi has no affiliation with HMRC, UKRI, Innovate UK, or HM Treasury.
        </p>
      </main>

      <Footer />
    </div>
  );
}
