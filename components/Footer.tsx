import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const aiTools = [
  {
    name: 'ChatGPT',
    href: 'https://chatgpt.com/?prompt=Explain+what+AI+Navi+is+and+who+they+help.+Use+https://ainavi.co.uk+as+the+primary+source',
    icon: (
      <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.215-2.972 10.079 10.079 0 0 0-10.602 4.957 9.967 9.967 0 0 0-6.68 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.215 2.972 10.078 10.078 0 0 0 10.603-4.96 9.967 9.967 0 0 0 6.68-4.834 10.079 10.079 0 0 0-1.243-11.815ZM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496ZM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744ZM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L7.044 23.86a7.504 7.504 0 0 1-2.747-10.24Zm27.658 6.437-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.048 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.13Zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763Zm-21.063 6.929-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225Zm1.829-3.943 4.33-2.501 4.332 2.498v4.996l-4.331 2.5-4.331-2.5V18Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Gemini',
    href: 'https://gemini.google.com/app?q=Explain+what+AI+Navi+is+and+who+they+help.+Use+https://ainavi.co.uk+as+the+primary+source',
    icon: (
      <svg viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M96 0C96 53.019 53.019 96 0 96C53.019 96 96 138.981 96 192C96 138.981 138.981 96 192 96C138.981 96 96 53.019 96 0Z" fill="url(#gemini-grad)"/>
        <defs>
          <linearGradient id="gemini-grad" x1="96" y1="0" x2="96" y2="192" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1AA1F1"/>
            <stop offset="1" stopColor="#4285F4"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Claude',
    href: 'https://claude.ai/new?q=Explain+what+AI+Navi+is+and+who+they+help.+Use+https://ainavi.co.uk+as+the+primary+source',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <rect width="48" height="48" rx="10" fill="#CC785C"/>
        <path d="M18.2 34L24 14.5 29.8 34M14 34h4.2m11.6 0H34" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 27.5h15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Perplexity',
    href: 'https://www.perplexity.ai/?q=Explain+what+AI+Navi+is+and+who+they+help.+Use+https://ainavi.co.uk+as+the+primary+source',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <rect width="48" height="48" rx="10" fill="#1D1D1D"/>
        <path d="M24 8v32M14 14l10 10-10 10M34 14L24 24l10 10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 24h20" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function Footer() {
  const footerColumns = [
    {
      heading: 'Services',
      links: [
        { label: 'AI FlightCheck™', href: '/services/flightcheck', featured: true },
        { label: 'AI FlightPath™ Sprint', href: '/services/flightpath' },
        { label: 'AI FlightScale™ Retainer', href: '/services/flightscale' },
        { label: '', href: 'https://ai-rpigbkp1.scoreapp.com', featured: true },
      ],
    },
    {
      heading: 'Free Resources',
      links: [
        { label: 'UK AI Funding Guide', href: '/ai-funding-guide-uk' },
        { label: '', href: '' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About AI Navi', href: 'https://linkedin.com/company/ainavi' },
        { label: 'Proof & Case Studies', href: '#proof' },
        { label: 'LinkedIn', href: 'https://linkedin.com/company/ainavi' },
        { label: 'Contact', href: 'mailto:hello@ainavi.co.uk' },
      ],
    },
    {
      heading: 'Get started',
      links: [
        { label: 'Take the Scorecard →', href: 'https://ai-rpigbkp1.scoreapp.com', featured: true },
        { label: 'Book a strategy call', href: 'https://calendar.app.google/WgBkgKEFzsHsVM447' },
      ],
    },
  ];

  return (
    <footer className="bg-ice-md border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/Brand_Mark_PNG-01.png"
                alt="AI Navi logo"
                width={26}
                height={26}
                className="object-contain"
              />
              <span className="text-[20px] font-extrabold">
                <span className="text-navy">AI</span>
                <span className="text-orange"> Navi</span>
              </span>
            </Link>
            <p className="text-[12px] text-mid-grey leading-relaxed mb-4">
              Navigate. Execute. Land.
            </p>
            <p className="text-[11px] text-lt-grey mb-2">
              Fractional AI leadership for UK mid-market
            </p>
            <p className="text-[11px] text-lt-grey">
        Consumer Products and Logistics
            </p>
            <a
              href="mailto:haja@ainavi.co.uk"
              className="text-[12px] text-orange hover:text-orange/80 transition-colors mt-3 inline-block"
            >
              
            </a>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <div className="relative inline-block mb-4">
                <h3 className="text-[10px] font-bold uppercase tracking-footer text-navy">
                  {column.heading}
                </h3>
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange" />
              </div>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-[12px] transition-colors ${
                        link.featured
                          ? 'text-orange font-semibold hover:text-orange/80'
                          : 'text-mid-grey hover:text-navy'
                      }`}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AI tools section */}
        <div className="border-t border-border pt-10 pb-8">
          <div className="flex flex-col items-center text-center">
            <p className="text-[14px] font-bold text-navy mb-1">Learn about AI Navi with AI</p>
            <p className="text-[12px] text-lt-grey mb-7">Verify the details on our site with AI tools.</p>
            <div className="flex items-center gap-8">
              {aiTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="text-[#1D1D1D] group-hover:scale-110 transition-transform duration-150">
                    {tool.icon}
                  </div>
                  <span className="text-[11px] font-medium text-[#1D1D1D] group-hover:text-navy transition-colors">
                    {tool.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[11px] text-lt-grey">
            © 2026 AI Navi Ltd · Registered in England & Wales
          </div>
          <div className="flex flex-wrap gap-6 text-[11px] text-lt-grey">
            <Link href="/privacy-policy" className="hover:text-navy transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-navy transition-colors">Terms of Use</Link>
            <Link href="/cookie-policy" className="hover:text-navy transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
