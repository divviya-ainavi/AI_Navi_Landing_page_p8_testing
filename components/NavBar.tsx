'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/AINaviButton';
import { Menu, X, ChevronDown, BookOpen } from 'lucide-react';
import { icps } from '@/content/icp';
import { useAnalytics } from '@/hooks/use-analytics';

const services = [
  { label: 'AI Diagnostic Check', href: '#offers' },
  { label: 'AI Implementation Strategy', href: '#offers' },
  { label: 'Fractional Chief AI Officer & CTO', href: '#offers' },
  { label: 'AI Data Engineering', href: '#offers' },
];

const freeResources = [
  { label: 'UK AI Funding Guide', href: '/ai-funding-guide-uk', description: 'Identify funding streams for your AI initiatives', icon: BookOpen },
];

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { trackScorecardClick, trackCTAClick } = useAnalytics();

  const navLinks = [
    { label: 'Results', href: '#proof'},
  ];

  function openResources() {
    if (resourcesTimeout.current) clearTimeout(resourcesTimeout.current);
    setResourcesOpen(true);
  }

  function closeResources() {
    resourcesTimeout.current = setTimeout(() => setResourcesOpen(false), 120);
  }

  function openDropdown() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }

  function closeDropdown() {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  }

  function openServices() {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
  }

  function closeServices() {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 120);
  }

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/BrandMarkPNG-01-ezgif.com-png-to-webp-converter.webp"
              alt="AI Navi brandmark"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-[20px] font-extrabold">
              <span className="text-navy">AI</span>
              <span className="text-orange"> Navi</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {/* Is this you? dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <a
                href="#is-this-you"
                className="flex items-center gap-1 text-[14px] text-mid-grey hover:text-navy transition-colors"
              >
                Is this you?
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </a>

              {dropdownOpen && (
                <div
                  className="absolute left-0 top-full pt-3"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <div className="bg-white border border-border rounded-xl shadow-lg overflow-hidden w-[300px]">
                    {icps.map((icp) => (
                      <a
                        key={icp.sector}
                        href="#is-this-you"
                        className="block px-4 py-3 hover:bg-[#fafafa] transition-colors border-b border-border last:border-b-0 group"
                      >
                        <div className="mb-0.5">
                          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-orange">
                            {icp.sector}
                          </span>
                        </div>
                        <p className="text-[12px] font-semibold text-navy leading-snug mb-0.5">
                          {icp.profile}
                        </p>
                        <p className="text-[11px] text-mid-grey leading-snug">
                          {icp.roles}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <a
                href="#offers"
                className="flex items-center gap-1 text-[14px] text-mid-grey hover:text-navy transition-colors"
              >
                Services
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </a>

              {servicesOpen && (
                <div
                  className="absolute left-0 top-full pt-3"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  <div className="bg-white border border-border rounded-xl shadow-lg overflow-hidden w-[280px]">
                    {services.map((service) => (
                      <a
                        key={service.label}
                        href={service.href}
                        className="block px-4 py-3 hover:bg-[#fafafa] transition-colors border-b border-border last:border-b-0"
                      >
                        <p className="text-[12px] font-semibold text-navy leading-snug">{service.label}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Free Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={openResources}
              onMouseLeave={closeResources}
            >
              <a
                href="#scorecard"
                className="flex items-center gap-1 text-[14px] text-mid-grey hover:text-navy transition-colors"
              >
                Free Resources
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
                />
              </a>

              {resourcesOpen && (
                <div
                  className="absolute left-0 top-full pt-3"
                  onMouseEnter={openResources}
                  onMouseLeave={closeResources}
                >
                  <div className="bg-white border border-border rounded-xl shadow-lg overflow-hidden w-[260px]">
                    {freeResources.map((resource) => (
                      <a
                        key={resource.label}
                        href={resource.href}
                        className="flex items-start gap-3 px-4 py-3.5 hover:bg-[#fafafa] transition-colors border-b border-border last:border-b-0 group"
                      >
                        <div className="w-7 h-7 rounded-md bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <resource.icon size={14} className="text-orange" />
                        </div>
                        <div>
                          <p className="text-[12px] font-semibold text-navy leading-snug mb-0.5">{resource.label}</p>
                          <p className="text-[11px] text-mid-grey leading-snug">{resource.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-mid-grey hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              href="https://ai-rpigbkp1.scoreapp.com"
              onClick={() => trackScorecardClick('AI Readiness Scorecard - Nav')}
            >
              AI Readiness Scorecard
            </Button>
            <Button
              variant="primary"
              href="https://calendar.app.google/WgBkgKEFzsHsVM447"
              onClick={() => trackCTAClick('Book a call', 'navbar', 'https://calendar.app.google/WgBkgKEFzsHsVM447')}
            >
              Book a call ↗
            </Button>
          </div>

          <button
            className="md:hidden text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-4 space-y-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-lt-grey mb-2">Is this you?</p>
              <div className="space-y-1 pl-2">
                {icps.map((icp) => (
                  <a
                    key={icp.sector}
                    href="#is-this-you"
                    className="block text-[13px] text-mid-grey hover:text-navy transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-orange font-semibold">{icp.sector}</span> — {icp.profile}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-lt-grey mb-2">Services</p>
              <div className="space-y-1 pl-2">
                {services.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="block text-[13px] text-mid-grey hover:text-navy transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-lt-grey mb-2">Free Resources</p>
              <div className="space-y-1 pl-2">
                {freeResources.map((resource) => (
                  <a
                    key={resource.label}
                    href={resource.href}
                    className="block text-[13px] text-mid-grey hover:text-navy transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-orange font-semibold">{resource.label}</span>
                  </a>
                ))}
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-[14px] text-mid-grey hover:text-navy transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Button
                variant="ghost"
                href="https://ai-rpigbkp1.scoreapp.com"
                className="w-full"
                onClick={() => trackScorecardClick('Take the Scorecard - Mobile Nav')}
              >
                Take the Scorecard
              </Button>
              <Button
                variant="primary"
                href="https://calendar.app.google/WgBkgKEFzsHsVM447"
                className="w-full"
                onClick={() => trackCTAClick('Book a call', 'mobile_navbar', 'https://calendar.app.google/WgBkgKEFzsHsVM447')}
              >
                Book a call ↗
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
