export const offers = {
  eyebrow: 'Services & Pricing',
  headline: 'Three ways to work with AI Navi',
  subhead: 'Transparent pricing. Clear upgrade path. No procurement committees for the first two tiers.',
  freeItems: [
    { label: 'AI Readiness Scorecard', href: '#scorecard', badge: 'Free' },
    { label: 'UK AI Funding Guide', href: '/funding-guide', badge: 'Free' },
  ],
  tiers: [
    {
      name: 'AI FlightCheck™',
      tierLabel: 'Tier 1',
      tagline: 'Fixed · 2 weeks · No commitment beyond this',
      price: '£4,500',
      priceSubtext: '',
      bullets: [
        'A 15-page diagnostic + 90-day action plan. Below procurement threshold. Feeds directly into FlightPath.',
      ],
      cta: 'Start with FlightCheck™ →',
      featured: false,
    },
    {
      name: 'AI FlightPath™ Sprint',
      tierLabel: 'Tier 2',
      tagline: 'Fixed · 10 weeks · First AI product in production',
      price: '£15K–£25K',
      priceSubtext: '',
      bullets: [
        'First working AI in production. Not a document — a deployed system your team can operate.',
      ],
      cta: 'Book a FlightPath™ Sprint →',
      featured: true,
      featuredLabel: 'Most common',
    },
    {
      name: 'AI FlightScale™ Retainer',
      tierLabel: 'Tier 3',
      tagline: '3-month rolling · 30-day exit after month 3',
      price: '£7.5K–£18K',
      priceSuffix: '/mo',
      priceSubtext: '',
      bullets: [
        'Fractional CAIO (Haja) + Data Engineering (Abhishek). Scale your AI advantage continuously.',
      ],
      cta: 'Discuss FlightScale™ →',
      featured: false,
    },
  ],
  procurementNote: 'FlightCheck™ at £4,500 and FlightPath™ at sub-£25K both sit below most UK procurement committee approval thresholds.',
  belowCTA: { label: 'Take the Scorecard', href: '#scorecard' },
};
