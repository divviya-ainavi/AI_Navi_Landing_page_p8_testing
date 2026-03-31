import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK AI Funding Guide 2026 | R&D Tax Credits, Grants & Capital Allowances | AI Navi',
  description: 'Complete guide to UK AI funding for FMCG and logistics companies. RDEC tax credits, Innovate UK grants, capital allowances, and the 2026 Mais Lecture updates.',
  keywords: [
    'UK AI funding',
    'R&D tax credits',
    'RDEC',
    'Innovate UK grants',
    'BridgeAI',
    'capital allowances',
    'AI investment UK',
    'FMCG AI funding',
    'logistics AI grants',
  ],
  alternates: {
    canonical: 'https://ainavi.co.uk/ai-funding-guide-uk',
  },
  openGraph: {
    title: 'UK AI Funding Guide 2026 | AI Navi',
    description: 'Every UK AI funding mechanism for mid-market CPG, FMCG and logistics businesses. Offset up to 35% of AI project costs.',
    url: 'https://ainavi.co.uk/ai-funding-guide-uk',
    siteName: 'AI Navi',
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK AI Funding Guide 2026 | AI Navi',
    description: 'Every UK AI funding mechanism for mid-market CPG, FMCG and logistics businesses. Offset up to 35% of AI project costs.',
  },
};

export default function FundingGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
