**AI NAVI**

**Sprint Execution Guide**

Content, SEO & Deployment  ·  Mika \+ Diviya  ·  March 2026

**What this document covers**

This guide takes the AI Navi landing page from the Bolt.new draft to a live, SEO-ready site on Vercel with ScoreApp, Google Analytics, GTM, Search Console, and a contact form. It is split into two tracks: Mika (content) and Diviya (dev).

| MIKA — Content track | Finalise all page content in Bolt.new. No coding or deployment needed. |
| :---- | :---- |
| **DIVIYA — Dev track** | GitHub setup, Vercel deploy, SEO, GTM/GA4, ScoreApp, contact form. |
| **Sequence** | Mika finishes first and sends ZIP to Diviya. Diviya deploys. Both review live. |
| **Time estimate** | Mika: 1 day. Diviya: 4–6 hrs. Live site by end of week. |

**Master task list**

| Task | Who | Time | Owner |
| :---- | :---- | :---- | :---- |
| Finalise all section content in Bolt.new | Mika | 4 hrs | **Mika** |
| Add Contact Us form section in Bolt | Mika | 1 hr | **Mika** |
| Visual QA all 13 sections (desktop \+ mobile) | Mika | 1 hr | **Mika** |
| Export ZIP from Bolt and send to Diviya | Mika | 15 min | **Mika** |
| Create GitHub repo and push code | Diviya | 30 min | **Diviya** |
| Connect GitHub to Vercel and deploy | Diviya | 30 min | **Diviya** |
| Add custom domain ainavi.co.uk | Diviya | 30 min | **Diviya** |
| Add generateMetadata() to all pages | Diviya | 1 hr | **Diviya** |
| Add FAQPage and Org JSON-LD schema | Diviya | 30 min | **Diviya** |
| Install next-sitemap and robots.txt | Diviya | 30 min | **Diviya** |
| Install Google Tag Manager in layout.tsx | Diviya | 30 min | **Diviya** |
| Connect GA4 via GTM | Diviya | 30 min | **Diviya** |
| Set up Google Search Console and verify | Diviya | 20 min | **Diviya** |
| Wire ScoreApp embed into scorecard-embed div | Diviya | 30 min | **Diviya** |
| Build contact form API route with hCaptcha | Diviya | 1 hr | **Diviya** |
| Final live site QA — both review | Mika \+ Diviya | 30 min | **Both** |

**PART A — MIKA**  
Content finalisation in Bolt.new

| A1 | Check every section against the design |
| :---- | :---- |

Go to your Bolt.new draft and review each section top to bottom. Use this checklist. If anything looks wrong, type a plain-English fix request in the Bolt chat.

| Nav bar | White bg. "AI" navy, "Navi" orange. 4 menu links. Ghost \+ primary buttons. |
| :---- | :---- |
| **Hero** | White bg. 3px orange top bar. Stat headline with orange accent phrase. Trust logos. |
| **Stats row** | Light grey bg. 4 orange numbers. Grey labels. Dividers between stats. |
| **Pilot Purgatory** | Ice bg. "Welcome to Pilot Purgatory" heading. 3 white bad-option cards. Orange fourth-option card. |
| **Is this you?** | White bg. 2x2 grid. CP/FMCG card has orange border and light orange bg. |
| **How we work** | Ice bg. 3 NEL cards. N=white. E=purple tint. L=orange tint. |
| **Proof** | White bg. Credential stats. Live products strip. Book quote with orange left border. |
| **Offer stack** | Ice bg. 3 pricing cards. FlightPath has orange border and "Most common" badge. |
| **Scorecard gate** | Light orange bg. Large CTA. Empty div id="scorecard-embed" present in code. |
| **Team** | White bg. Two founder cards. Quote in italic with orange left border. |
| **FAQ** | Ice bg. 8 questions. Accordion opens and closes on click. |
| **Final CTA** | Light orange bg. Single headline. One button. Three trust items. |
| **Footer** | Ice bg. 5 columns. Legal bar at bottom. |

| ⚠ | No navy backgrounds: If any section has a dark navy background, tell Bolt: "Change the \[section\] background to white or ice (\#F7F9FB)". |
| :---- | :---- |

| A2 | Update content — how to ask Bolt |
| :---- | :---- |

All copy is in the content/ folder. Ask Bolt to update specific sections by pasting your new text directly into the chat request.

| ✅ | Example request: "In the Hero section, change the sub-headline to: \[paste your new text here\]" |
| :---- | :---- |

| ✅ | Example request: "In the FAQ section, replace the answer to question 3 with: \[paste new answer\]" |
| :---- | :---- |

| ✅ | Example request: "In the Offer stack, change the FlightPath price to £18,000–£25,000" |
| :---- | :---- |

**Content to confirm before sending to Diviya**

* Hero headline and sub-headline — confirm final wording with Haja

* All 8 FAQ answers — use Sight.ai to generate SEO-optimised versions

* Proof section live product links — ApplyGenius, SalesGenius

* Haja and Abhishek final bios in Team section

* All 3 offer prices confirmed

* Footer contact email — confirm hello@ainavi.co.uk

* Book a call Calendly link — get from Haja

| A3 | Add the Contact Us form — paste this into Bolt |
| :---- | :---- |

Copy and paste the request below into the Bolt chat exactly as written:

Add a new "Contact Us" section between FAQ and Final CTA.

Background: white (\#FFFFFF). Section id="contact".

Eyebrow label: "Get in touch" (orange uppercase 10px)

Heading: "Talk to us before your next board meeting"

Form fields (all required unless noted):

  Full name (text input)

  Company name (text input)

  Job title (text input)

  Work email (email input)

  Company revenue (select dropdown):

    Under £50M / £50M–£250M / £250M–£500M / Over £500M

  How can we help? (textarea, 4 rows)

  How did you hear about us? (select, not required):

    LinkedIn / Google Search / Referral / Event / Other

Above the submit button, add an empty div id="captcha-container"

Submit button: orange fill, white text, label "Send message →"

Below the button, add in small grey text:

"We respond within 1 business day. Your data is never shared."

Form posts to /api/contact — create the API route as a placeholder

that returns { success: true } for now.

After submit, show a success message: "Thank you — we will be in touch

within 1 business day." in green text, replacing the form.

| 📌 | Leave captcha-container empty: Diviya will wire hCaptcha into the div id="captcha-container". Do not style or fill it. |
| :---- | :---- |

| A4 | Visual QA checklist before export |
| :---- | :---- |

* No dark navy background on any section

* Orange used only for CTAs, accents, featured card borders

* "This sounds like me" links are purple, not orange

* All 5 footer columns visible on desktop

* Footer columns stack cleanly on mobile (use Bolt responsive toggle)

* FAQ accordion opens and closes

* Contact form visible with all fields

* id="scorecard-embed" div exists in Scorecard section

* id="captcha-container" div exists above contact form submit button

* Trust logos in hero are very light grey (barely visible)

* FlightPath offer card has orange accent border

| A5 | Export and send to Diviya |
| :---- | :---- |

1. In Bolt.new click the menu icon (top right corner)

2. Select "Download Project" or "Export as ZIP"

3. Save the file as: ainavi-site-final.zip

4. Upload to Google Drive and share the link with Diviya

5. Send Diviya a message: "Content is final. ZIP is ready."

| 🚫 | Mika does not deploy: All GitHub and Vercel steps are done by Diviya only. |
| :---- | :---- |

**PART B — DIVIYA**  
GitHub, Vercel, SEO and all integrations

| B1 | GitHub setup |
| :---- | :---- |

6. Unzip ainavi-site-final.zip

7. Create a new private repo at github.com — name: ainavi-site

8. In terminal, from the unzipped project folder:

git init

git add .

git commit \-m "Initial commit"

git remote add origin https://github.com/\[org\]/ainavi-site.git

git push \-u origin main

| 📌 | Org account: Use or create an AI Navi GitHub organisation account, not a personal one. Haja to grant access. |
| :---- | :---- |

| B2 | Vercel deployment and custom domain |
| :---- | :---- |

9. Go to vercel.com — Add New Project

10. Import the ainavi-site GitHub repo

11. Framework: Next.js (auto-detected) — leave all other settings as default

12. Click Deploy — takes 2–3 minutes

13. Share the preview URL (ainavi-site.vercel.app) with Mika and Haja to review

**Add custom domain**

14. Vercel project Settings — Domains — Add ainavi.co.uk and www.ainavi.co.uk

15. Vercel shows two DNS records to add (A record \+ CNAME)

16. Add these records in the domain registrar control panel

17. DNS propagates in under 1 hour usually — HTTPS auto-configured by Vercel

| ⚡ | Auto-deploy active: Every git push to main now auto-deploys. Zero manual steps after initial setup. |
| :---- | :---- |

| B3 | SEO and AEO setup |
| :---- | :---- |

**Step 1 — Page metadata (app/layout.tsx)**

import type { Metadata } from 'next'

export const metadata: Metadata \= {

  title: 'AI Navi | Fractional AI Leadership for CP & Logistics',

  description: 'Fractional CAIO for UK mid-market Consumer Products and

    Logistics. Navigate. Execute. Land. Working AI in 30 days.',

  openGraph: {

    title: 'AI Navi | Fractional AI Leadership',

    description: 'Working AI in 30 days, not slide decks.',

    url: 'https://ainavi.co.uk',

    siteName: 'AI Navi', locale: 'en\_GB', type: 'website',

  },

  robots: { index: true, follow: true },

  alternates: { canonical: 'https://ainavi.co.uk' },

}

**Step 2 — FAQPage JSON-LD schema (app/page.tsx) — highest AEO value**

import Script from 'next/script'

import { faqs } from '@/content/faq'

const faqSchema \= {

  '@context': 'https://schema.org', '@type': 'FAQPage',

  mainEntity: faqs.map(f \=\> ({

    '@type': 'Question', name: f.q,

    acceptedAnswer: { '@type': 'Answer', text: f.a }

  }))

}

// Add before \</body\> in JSX:

\<Script id='faq-schema' type='application/ld+json'\>

  {JSON.stringify(faqSchema)}

\</Script\>

**Step 3 — Organisation schema (app/layout.tsx)**

const orgSchema \= {

  '@context': 'https://schema.org', '@type': 'Organization',

  name: 'AI Navi', url: 'https://ainavi.co.uk',

  description: 'Fractional AI leadership for UK mid-market CP and Logistics.',

  areaServed: 'GB',

  founder: \[

    { '@type': 'Person', name: 'Haja J Deen', jobTitle: 'Fractional CAIO' },

    { '@type': 'Person', name: 'Abhishek C', jobTitle: 'AI Delivery Lead' }

  \]

}

**Step 4 — Sitemap and robots.txt**

npm install next-sitemap

// Create next-sitemap.config.js in project root:

module.exports \= {

  siteUrl: 'https://ainavi.co.uk',

  generateRobotsTxt: true,

}

// Add to package.json scripts:

"postbuild": "next-sitemap"

| ✅ | Result: sitemap.xml and robots.txt auto-generate on every Vercel deploy at ainavi.co.uk/sitemap.xml |
| :---- | :---- |

| B4 | Google Tag Manager \+ GA4 \+ Search Console |
| :---- | :---- |

**Create GTM container**

18. tagmanager.google.com — Create Account — Account: AI Navi — Container: ainavi.co.uk — Platform: Web

19. Save the Container ID (format: GTM-XXXXXXX)

**Install GTM in Next.js**

npm install @next/third-parties

// app/layout.tsx — add inside the \<html\> tag:

import { GoogleTagManager } from '@next/third-parties/google'

\<GoogleTagManager gtmId='GTM-XXXXXXX' /\>

**Connect GA4 via GTM**

20. analytics.google.com — Create property — AI Navi — Timezone: UK — Currency: GBP

21. Platform: Web — URL: ainavi.co.uk — Copy the Measurement ID (G-XXXXXXXXXX)

22. Back in GTM — Tags — New — Type: GA4 Configuration — paste Measurement ID

23. Trigger: All Pages — Save — Submit (publishes the container)

**Google Search Console**

24. search.google.com/search-console — Add property — Domain: ainavi.co.uk

25. Verify via GTM: in GTM create a new Tag — type Google Site Verification — paste verification ID — Trigger: All Pages — Publish

26. Back in Search Console — click Verify

27. Once verified: Sitemaps — add https://ainavi.co.uk/sitemap.xml — Submit

| B5 | ScoreApp Scorecard embed |
| :---- | :---- |

28. Log into ScoreApp — the scorecard must be built and published first (Haja to confirm)

29. Share — Embed — Copy the embed script URL

30. In the codebase find components/sections/ScorecardGate.tsx

31. Locate the div id="scorecard-embed" and replace with:

import Script from 'next/script'

\<div id="scorecard-embed"\>

  \<Script

    src='https://app.scoreapp.com/embed/\[SCORECARD-ID\].js'

    strategy='lazyOnload'

  /\>

\</div\>

| 📌 | ScoreApp ID: Get the exact embed URL from the ScoreApp dashboard. Haja provides account access. |
| :---- | :---- |

| B6 | Contact form — API route \+ hCaptcha \+ email |
| :---- | :---- |

**Step 1 — Install packages**

npm install resend @hcaptcha/react-hcaptcha

**Step 2 — Create app/api/contact/route.ts**

import { NextRequest, NextResponse } from 'next/server'

import { Resend } from 'resend'

export async function POST(req: NextRequest) {

  const { name, company, title, email, revenue,

          message, source, captchaToken } \= await req.json()

  // Verify hCaptcha

  const res \= await fetch("https://hcaptcha.com/siteverify", {

    method: "POST",

    headers: { "Content-Type": "application/x-www-form-urlencoded" },

    body: \`response=${captchaToken}\&secret=${process.env.HCAPTCHA\_SECRET}\`

  })

  const { success } \= await res.json()

  if (\!success) return NextResponse.json({error:"Captcha failed"},{status:400})

  // Send email

  const resend \= new Resend(process.env.RESEND\_API\_KEY)

  await resend.emails.send({

    from: 'website@ainavi.co.uk',

    to: 'hello@ainavi.co.uk',

    subject: \`New enquiry: ${name} at ${company}\`,

    text: \`Name: ${name}\\nCompany: ${company}\\nTitle: ${title}

Email: ${email}\\nRevenue: ${revenue}\\nSource: ${source}

\\nMessage:\\n${message}\`,

  })

  return NextResponse.json({ success: true })

}

**Step 3 — Add hCaptcha to the contact form component**

import HCaptcha from '@hcaptcha/react-hcaptcha'

import { useRef, useState } from 'react'

const captchaRef \= useRef(null)

const \[captchaToken, setCaptchaToken\] \= useState("")

// Replace div id="captcha-container" with:

\<HCaptcha

  sitekey={process.env.NEXT\_PUBLIC\_HCAPTCHA\_SITE\_KEY\!}

  onVerify={(token) \=\> setCaptchaToken(token)}

  ref={captchaRef}

/\>

**Step 4 — Set up Resend and hCaptcha accounts**

32. resend.com — Create account — Add domain ainavi.co.uk — follow DNS instructions — Create API key

33. hcaptcha.com — Sign up free — Add site ainavi.co.uk — copy Site Key and Secret Key

**Step 5 — Add environment variables in Vercel**

Vercel project — Settings — Environment Variables — add all three:

RESEND\_API\_KEY          \=  re\_xxxxxxxxxxxxxxxxxxxx

HCAPTCHA\_SECRET         \=  your-hcaptcha-secret-key

NEXT\_PUBLIC\_HCAPTCHA\_SITE\_KEY  \=  your-hcaptcha-site-key

| B7 | Final go-live checklist |
| :---- | :---- |

| ainavi.co.uk loads with HTTPS | No browser security warning |
| :---- | :---- |
| **Page title correct in browser tab** | "AI Navi | Fractional AI Leadership..." |
| **sitemap.xml live** | https://ainavi.co.uk/sitemap.xml returns XML |
| **robots.txt live** | https://ainavi.co.uk/robots.txt returns "Allow: /" |
| **FAQ schema valid** | schema.org/SchemaApp validator — paste URL — no errors |
| **GTM firing** | GTM Preview mode — visit site — GTM shows "Fired" |
| **GA4 receiving data** | GA4 Realtime report — visit site — see live visitor |
| **Search Console verified** | Property shows as verified |
| **Sitemap submitted** | Search Console Sitemaps — shows submitted and indexed |
| **ScoreApp loading** | Scorecard section shows the widget, not blank |
| **Contact form delivers email** | Submit test — arrives at hello@ainavi.co.uk |
| **hCaptcha visible** | Challenge appears before submit button |
| **Mobile looks correct** | Test on real phone — no broken layouts |
| **No console errors** | DevTools Console — zero red errors |

**Credentials and access needed**

Haja to provide all of the following to Diviya before she starts.

| GitHub | AI Navi org account access (or create github.com/ainavi) |
| :---- | :---- |
| **Domain registrar** | DNS control panel access for ainavi.co.uk |
| **Google account** | One shared account for GTM \+ GA4 \+ Search Console |
| **ScoreApp** | Login and confirmation the scorecard is published |
| **Contact email** | Confirm hello@ainavi.co.uk is a working inbox Haja can access |
| **Calendly URL** | Booking link for the "Book a call" button throughout the site |
| **Resend** | Create at resend.com — free tier is fine to start |
| **hCaptcha** | Create at hcaptcha.com — free tier is fine |

| ⏱ | Once Diviya has all credentials: Estimated completion: 4–6 hrs. Vercel preview URL shared with Mika \+ Haja for review before domain is pointed. |
| :---- | :---- |

AI Navi Ltd  ·  Confidential  ·  March 2026