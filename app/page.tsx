import type { Metadata } from 'next';
import Script from 'next/script';
import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/sections/Hero';

export const metadata: Metadata = {
  title: 'AI Navi | Fractional AI Leadership for Consumer Products & Logistics',
  description: 'The AI transformation partner for UK mid-market Consumer Products and Logistics companies. Embedded AI leadership to escape pilot purgatory.',
  alternates: {
    canonical: 'https://ainavi.co.uk',
  },
};
import { StatsRow } from '@/components/sections/StatsRow';
import { PilotPurgatory } from '@/components/sections/PilotPurgatory';
import { IsThisYou } from '@/components/sections/IsThisYou';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { ProofSection } from '@/components/sections/ProofSection';
import { OfferStack } from '@/components/sections/OfferStack';
import { TeamSection } from '@/components/sections/TeamSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { ScorecardGate } from '@/components/sections/ScorecardGate';
import { ContactSection } from '@/components/sections/ContactSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';
import { ScrollDepthTracker } from '@/components/ScrollDepthTracker';
import { CookieConsent } from '@/components/CookieConsent';
import { faqs } from '@/content/faq';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Home() {
  return (
    <main>
      <ScrollDepthTracker />
      <NavBar />
      <Hero />
      <StatsRow />
      <PilotPurgatory />
      <IsThisYou />
      <TeamSection />
      <TestimonialSection />
      <HowWeWork />
      <ProofSection />
      <OfferStack />
      <ScorecardGate />
      <ContactSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <CookieConsent />
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </main>
  );
}
