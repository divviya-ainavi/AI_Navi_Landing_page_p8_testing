# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Navi landing page - a Next.js 13 SaaS landing page for a fractional AI leadership consulting service. Built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Build & Development Commands

```bash
npm run dev        # Start development server
npm run build      # Production build (also generates sitemap via postbuild)
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Type-check without emitting
```

## Architecture

### Directory Structure

- **app/** - Next.js App Router with root layout and home page
  - `ai-funding-guide-uk/page.tsx` - UK AI Funding Guide landing page
  - `api/contact/route.ts` - Contact form API endpoint (syncs to Brevo)
  - `api/funding-kit/route.ts` - Funding kit PDF download lead capture (syncs to Brevo)
  - `api/scorecard-webhook/route.ts` - ScoreApp webhook endpoint (syncs to Brevo)
- **components/sections/** - 13 page section components (Hero, StatsRow, PilotPurgatory, IsThisYou, TeamSection, TestimonialSection, HowWeWork, ProofSection, OfferStack, ScorecardGate, FAQSection, ContactSection, FinalCTA)
- **components/ui/** - shadcn/ui component library (40+ components)
- **content/** - TypeScript data files for all page content (hero.ts, icp.ts, offers.ts, proof.ts, faq.ts, team.ts, stats.ts, etc.)
- **hooks/** - Custom hooks (use-toast.ts, use-reveal.ts for scroll animations)
- **lib/utils.ts** - `cn()` utility for className merging

### Key Patterns

- **Content-driven**: All page text/data lives in `/content` TypeScript files for easy updates
- **Client components**: Use `"use client"` directive for components with useState/useEffect
- **Path alias**: `@/*` maps to project root

### Styling

Custom Tailwind theme with:
- Colors: navy (#0E203F), orange (#E8743B), purple (#6365F1), ice (#F7F9FB)
- Color variants: orange-lt, orange-md, purple-lt, ice-md for lighter shades
- Animations: fade-up, fade-in, slide-right, scale-in
- CSS variables for theming (configured in tailwind.config.ts)

### Forms & API Endpoints

React Hook Form with Zod validation for type-safe form handling.

**Contact form** (`app/api/contact/route.ts`):
- **Resend** - Email delivery to hello@ainavi.co.uk
- **Brevo** - CRM contact list management (uses `BREVO_LIST_ID`)
- **Google reCAPTCHA** - Spam protection

**Funding kit download** (`app/api/funding-kit/route.ts`):
- **Brevo** - Lead capture for PDF downloads (uses `BREVO_FUNDING_KIT_LIST_ID`)

**ScoreApp webhook** (`app/api/scorecard-webhook/route.ts`):
- **Brevo** - Syncs scorecard completions (uses `BREVO_SCORECARD_LIST_ID`)

### Scroll Animations

The `useReveal` hook (`hooks/use-reveal.ts`) triggers CSS animations when elements enter viewport. Add `reveal` class to elements, and `in-view` is added on intersection.

## Environment Variables

Required for contact form functionality:
```
RESEND_API_KEY
BREVO_API_KEY
BREVO_LIST_ID
RECAPTCHA_SECRET_KEY
NEXT_PUBLIC_RECAPTCHA_SITE_KEY
```

Required for funding kit download:
```
BREVO_FUNDING_KIT_LIST_ID  # e.g., 19
```

Required for ScoreApp webhook (optional):
```
SCOREAPP_WEBHOOK_SECRET
BREVO_SCORECARD_LIST_ID  # Falls back to BREVO_LIST_ID if not set
```

## Code Guidelines

- Use shadcn/ui + Tailwind CSS for styling
- Use Lucide React for icons
- Avoid unnecessary external packages for UI/icons
- Avoid server/client hydration mismatches (don't add extra attributes from server)

## Analytics

PostHog is integrated for analytics (posthog-js). The `ScrollDepthTracker` component tracks scroll depth on the page.

## Deployment

Configured for Netlify with `@netlify/plugin-nextjs`. Build output in `.next/`. Sitemap is auto-generated via `next-sitemap` on build.
