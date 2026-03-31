'use client';

import React from 'react';
import { faqs } from '@/content/faq';
import { SectionEyebrow } from '../ui/SectionEyebrow';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export function FAQSection() {
  return (
    <section id="faq" className="bg-ice">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-12">
          <SectionEyebrow>Common questions</SectionEyebrow>
          <h2 className="text-navy font-extrabold leading-tight" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', letterSpacing: '-0.4px' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-border rounded-[9px] px-6"
            >
              <AccordionTrigger className="text-[17px] font-bold text-navy text-left hover:text-orange transition-colors py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] text-mid-grey leading-relaxed pt-1 pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
