Analytics Setup Guide	PostHog + GA4 + GTM

**Analytics Setup Guide**

PostHog + Google Analytics + Google Tag Manager

Complete Instrumentation Playbook

Reusable for any web application

Designed to enable data-driven growth analysis, funnel diagnostics,

bot detection, channel attribution, SEO/AEO tracking, and unit economics

Version 1.0


# **Table of Contents**





# **1. Overview and Objectives**
This document provides step-by-step instructions for setting up PostHog and Google Analytics 4 (GA4) on any web application, using Google Tag Manager (GTM) as the tag management layer. It is designed to be app-agnostic and reusable across multiple products.

## **1.1 What This Setup Enables**
When implemented correctly, this instrumentation will enable the following analytical capabilities:

- **Data quality detection:** Automated bot filtering, UTM coverage monitoring, and instrumentation gap identification. You will know when your data is dirty before you make decisions based on it.
- **Channel-level clarity:** Per-channel attribution showing which traffic source sends visitors, which converts to signups, and which produces paying customers. Not just traffic counts, but verdicts: invest, maintain, or kill.
- **Full funnel analysis:** Step-by-step conversion measurement from first visit through signup, activation, core product usage, and purchase. With time-between-steps to diagnose where people stall.
- **Unit economics:** Cost per visitor, cost per signup, cost per activated user, customer acquisition cost (CAC), and LTV:CAC ratio. The fundability number.
- **Landing page diagnostics:** Scroll depth, CTA click tracking, page engagement time, and entry/exit page analysis to produce specific copy and layout recommendations.
- **SEO and AEO tracking:** Organic search traffic measurement, blog content performance, AI referrer detection (ChatGPT, Perplexity, etc.), and keyword-to-conversion pipeline.
- **Retention measurement:** Weekly and monthly cohort retention to determine whether users come back after their first visit.
- **Actionable weekly reports:** Monday morning reports that say what changed, what is broken, and what to do this week.

## **1.2 Architecture Overview**
The setup uses three tools working together:

|**Tool**|**Role**|**What It Does**|
| :- | :- | :- |
|Google Tag Manager (GTM)|Tag container|Single script on your site that manages all tracking. Add, remove, or modify tracking without code deploys.|
|PostHog|Product analytics|Funnels, retention, user-level analysis, session recordings, feature flags. Your primary analytical tool.|
|Google Analytics 4 (GA4)|Marketing analytics|Channel attribution, Google Ads integration, Search Console connection. Complements PostHog for SEO and paid channel analysis.|

|<p>**Why both PostHog and GA4?**</p><p>PostHog excels at product analytics (funnels, retention, user-level behavior, session recordings). GA4 excels at marketing analytics (Google Ads attribution, Search Console integration, cross-channel comparison). Using both gives you complete coverage without blind spots. GTM ensures they both see the same events.</p>|
| :- |


# **2. Pre-Setup: Accounts and Access**
Before writing any code, set up the following accounts and gather the required identifiers.

## **2.1 Accounts to Create**

|**Account**|**URL**|**What You Need**|
| :- | :- | :- |
|PostHog|posthog.com (US) or eu.posthog.com (EU)|Project API key, region (US or EU)|
|Google Analytics 4|analytics.google.com|Measurement ID (G-XXXXXXXXXX)|
|Google Tag Manager|tagmanager.google.com|Container ID (GTM-XXXXXXX)|
|Google Search Console|search.google.com/search-console|Verified domain ownership|

## **2.2 Configuration Checklist**
Fill in these values for your specific product. Every subsequent step references these.

|**Configuration Item**|**Your Value**|
| :- | :- |
|Product name|(fill in)|
|Marketing site domain|(e.g., yourproduct.com)|
|App domain|(e.g., app.yourproduct.com)|
|PostHog project API key|(from PostHog project settings)|
|PostHog API host|(https://us.posthog.com or https://eu.posthog.com)|
|GA4 Measurement ID|(G-XXXXXXXXXX)|
|GTM Container ID|(GTM-XXXXXXX)|

|<p>**EU Data Residency**</p><p>If your users are primarily in the EU, use PostHog’s EU cloud (eu.posthog.com) and configure GA4 to store data in the EU region. This simplifies GDPR compliance. Choose your region before sending any data — migrating later is painful.</p>|
| :- |


# **3. Google Tag Manager Setup**
GTM is the foundation. Install it first, then manage PostHog and GA4 from within GTM. This gives you centralized control over all tracking without code deploys.

## **3.1 Install the GTM Container**
Add the GTM snippet to every page of your site. Place the first part in the <head> as high as possible, and the second part immediately after the opening <body> tag.

**Head snippet (paste in <head>):**

<!-- Google Tag Manager --> <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-XXXXXXX');</script> <!-- End Google Tag Manager -->

**Body snippet (paste after <body>):**

<!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) -->

Replace GTM-XXXXXXX with your actual container ID.

## **3.2 Tags to Create in GTM**
Set up the following tags inside your GTM container:

|**Tag Name**|**Tag Type**|**Trigger**|**Purpose**|
| :- | :- | :- | :- |
|PostHog — Base|Custom HTML|Consent Granted (or All Pages if no consent needed)|Loads PostHog SDK|
|GA4 Configuration|Google Analytics: GA4 Configuration|Consent Granted (or All Pages)|Initializes GA4|
|GA4 — Custom Events|Google Analytics: GA4 Event|Custom triggers per event|Sends events to GA4|
|Conversion Linker|Conversion Linker|All Pages|Preserves gclid for Google Ads attribution|

## **3.3 PostHog Tag (Custom HTML)**
Create a Custom HTML tag in GTM with the following code. This loads PostHog and configures it correctly.

<script> !function(t,e){var o,n,p,r;e.\_\_SV||(window.posthog=e,e.\_i=[],e.init=function(i,s,a){ function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]), t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}; (p=t.createElement("script")).type="text/javascript",p.async=!0, p.src=s.api\_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]) .parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog", u.people=u.people||[],u.toString=function(t){var e="posthog"; return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString =function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set  people.set\_once set\_config register register\_once unregister opt\_out\_capturing  has\_opted\_out\_capturing opt\_in\_capturing reset isFeatureEnabled onFeatureFlags  getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment  getActiveMatchingSurveys getSurveys getNextSurveyStep".split(" "),n=0;n<o.length;n++) g(u,o[n]);e.\_i.push([i,s,a])},e.\_\_SV=1)}(document,window.posthog||[]);  posthog.init('YOUR\_POSTHOG\_API\_KEY', {   api\_host: 'YOUR\_POSTHOG\_HOST',   cross\_subdomain\_cookie: true,   capture\_pageview: true,   capture\_pageleave: true,   autocapture: true, }); </script>

|<p>**Replace placeholders**</p><p>Change YOUR\_POSTHOG\_API\_KEY and YOUR\_POSTHOG\_HOST with your actual values from PostHog project settings. Use https://us.posthog.com or https://eu.posthog.com as the host.</p>|
| :- |

## **3.4 GA4 Configuration Tag**
In GTM, create a GA4 Configuration tag:

- Tag type: Google Analytics: GA4 Configuration
- Measurement ID: Your G-XXXXXXXXXX ID
- Trigger: Consent Granted (or All Pages)
- Enable enhanced measurement (scrolls, outbound clicks, site search, file downloads)

GA4 enhanced measurement automatically tracks page views, scrolls, outbound clicks, and site search without additional code.


# **4. Event Taxonomy**
The most important decision in your analytics setup is what you name your events and how you structure them. Inconsistent naming makes analysis painful or impossible. This section defines the standard.

## **4.1 Naming Convention**
Use the following rules for every custom event, across both PostHog and GA4:

|**Rule**|**Correct**|**Incorrect**|
| :- | :- | :- |
|Format: snake\_case|signup\_completed|SignupCompleted, signupCompleted|
|Pattern: object\_action (past tense)|cta\_clicked, resume\_generated|click\_cta, generate\_resume|
|No spaces, no sentence case|purchase\_completed|Paid Plan have been purchased|
|One canonical event per action|cta\_clicked (one event)|button\_click AND button\_clicked AND cta\_click (three overlapping events)|
|Consistent tense (always past)|pricing\_viewed, checkout\_started|view\_pricing, start\_checkout|

## **4.2 Core Event Schema**
Every product should track these events at minimum. Customize the event names if needed, but keep the structure consistent.

**Acquisition Events**

|**Event Name**|**When to Fire**|**Required Properties**|
| :- | :- | :- |
|landing\_page\_viewed|User lands on the marketing page|page\_url, referrer, utm\_source, utm\_medium, utm\_campaign|
|cta\_clicked|User clicks any call-to-action button|button\_name, cta\_section, page\_url, cta\_destination|
|signup\_started|User initiates the registration flow|method (email, google, github)|
|signup\_completed|User finishes registration and is authenticated|method, email|

**Activation Events**

|**Event Name**|**When to Fire**|**Required Properties**|
| :- | :- | :- |
|onboarding\_started|User begins the onboarding/setup flow|(none required)|
|onboarding\_completed|User finishes onboarding|steps\_completed, time\_to\_complete|
|core\_action\_completed|User performs the product’s primary value action|(product-specific properties)|
|repeat\_action\_completed|User performs the core action a second+ time|action\_count|

**Monetization Events**

|**Event Name**|**When to Fire**|**Required Properties**|
| :- | :- | :- |
|pricing\_viewed|User views the pricing page or modal|current\_plan, source\_page|
|checkout\_started|User begins the payment flow|plan, price, billing\_cycle|
|purchase\_completed|Payment is successfully processed|plan, price, billing\_cycle, payment\_method, currency|

**Engagement Events**

|**Event Name**|**When to Fire**|**Required Properties**|
| :- | :- | :- |
|scroll\_depth\_reached|User scrolls to 25%, 50%, 75%, 100%|depth\_percent, page\_url|
|feature\_used|User interacts with a specific feature|feature\_name, context|
|error\_encountered|User hits an error state|error\_type, error\_message, page\_url|

## **4.3 GA4 Recommended Event Mapping**
GA4 gives special treatment to certain event names in its reports. Map your custom events to GA4 recommended events where they overlap:

|**Your Custom Event**|**GA4 Recommended Event**|**Why It Matters**|
| :- | :- | :- |
|signup\_completed|sign\_up|Appears in GA4 lifecycle reports|
|signin\_completed|login|Appears in GA4 engagement reports|
|checkout\_started|begin\_checkout|Enables GA4 ecommerce reports|
|purchase\_completed|purchase|Core GA4 revenue tracking; required for Google Ads optimization|
|pricing\_viewed|view\_item|GA4 ecommerce funnel|

|<p>**Fire both events simultaneously**</p><p>From GTM, fire your custom PostHog event AND the GA4 recommended event on the same trigger. They don’t conflict. This way PostHog gets your clean, consistently-named event, and GA4 gets its recommended event for built-in reporting.</p>|
| :- |


# **5. UTM Parameter Strategy**
UTM parameters are how you track which campaigns, channels, and content drive traffic. Without them, all your traffic appears as “direct” and you cannot make data-driven channel decisions.

|<p>**The most common analytics failure**</p><p>In our experience analyzing products, the #1 data quality issue is missing UTM parameters. Typically 90-99% of traffic is unattributed. This makes channel analysis, CAC calculation, and campaign ROI measurement impossible. Fix this first.</p>|
| :- |

## **5.1 The Five UTM Parameters**

|**Parameter**|**Purpose**|**Example Values**|**Required?**|
| :- | :- | :- | :- |
|utm\_source|Which platform/site the link is on|google, reddit, linkedin, email, wellfound|Yes — always|
|utm\_medium|How the link is delivered|organic, social, paid, email, referral, forum, cpc|Yes — always|
|utm\_campaign|Which specific campaign or initiative|march\_ats\_post, blog\_promo\_q1, hn\_launch|Yes — always|
|utm\_content|Which variant or creative within a campaign|hero\_cta, sidebar\_banner, email\_footer|Optional — use for A/B testing|
|utm\_term|Paid search keyword|ai+resume+builder|Optional — mainly Google Ads|

## **5.2 Standardized Values**
Consistency is critical. If you tag one link as utm\_source=Reddit and another as utm\_source=reddit and another as utm\_source=reddit.com, analytics tools treat them as three different sources. Define your standard values and never deviate.

**Standard utm\_source values:**

|**Value**|**Use For**|
| :- | :- |
|google|Google Ads, Google organic (auto-tagged by GA)|
|linkedin|LinkedIn posts, LinkedIn ads, LinkedIn profile|
|reddit|Reddit posts, Reddit comments, Reddit ads|
|twitter|Twitter/X posts and ads|
|facebook|Facebook posts and ads|
|instagram|Instagram posts and stories|
|email|Your own email campaigns and newsletters|
|brevo (or your ESP name)|Automated/transactional emails|
|wellfound|Wellfound profile and listings|
|producthunt|Product Hunt listing|
|(directory name)|Any tool directory listing (e.g., devhunt, toolfame)|

**Standard utm\_medium values:**

|**Value**|**Use For**|
| :- | :- |
|organic|Unpaid search engine traffic|
|social|Organic social media posts (unpaid)|
|paid|Any paid advertising|
|cpc|Paid search specifically (cost-per-click)|
|email|Email campaigns|
|referral|Links from other websites, directories, listings|
|forum|Forum posts (Reddit, HN, Stack Overflow)|
|affiliate|Affiliate or partner links|

## **5.3 Where to Apply UTMs**
Tag every outbound link. This is a non-negotiable discipline. Here are the specific places:

- Social media profiles (LinkedIn, Twitter, GitHub, etc.) — the link in your bio
- Every social media post that includes a link to your site
- Every email campaign (newsletter, onboarding, re-engagement)
- Email signatures
- Directory listings (Product Hunt, Wellfound, DevHunt, AI tool directories)
- Partner or referral links
- QR codes on physical materials
- Links in presentations or documents you share
- Forum posts and comments (where appropriate)
- Google Ads and any other paid campaigns (usually auto-tagged but verify)

## **5.4 How PostHog and GA4 Capture UTMs**
Both tools automatically read UTM parameters from the URL. No code needed. PostHog stores them as:

- Event-level: $utm\_source, $utm\_medium, $utm\_campaign, $utm\_content, $utm\_term
- Person-level (first-touch): $initial\_utm\_source, $initial\_utm\_medium, $initial\_utm\_campaign

GA4 stores them in its Campaigns reports and uses them for channel groupings (Organic Social, Paid Search, Email, etc.).

|<p>**UTM parameters are case-sensitive**</p><p>utm\_source=Reddit and utm\_source=reddit are treated as different sources in both PostHog and GA4. Always use lowercase. Always use your standardized values. Consider building a URL generator tool or spreadsheet to enforce consistency.</p>|
| :- |


# **6. Person Identification and Properties**
Correct person identification is what connects anonymous browsing sessions to known users. Without it, you cannot answer questions like “which channel brought the users who eventually paid?”

## **6.1 The Identify Call**
When a user signs up or signs in, call posthog.identify() to merge their anonymous sessions with their known identity. This is the most important single instrumentation call in your entire setup.

// Call this at signup OR login posthog.identify(user.id, {   email: user.email,   name: user.name,   plan: user.plan,                    // 'free', 'starter', 'pro'   signup\_date: user.createdAt,   signup\_source: getUTMSource(),       // capture from URL params at signup time   signup\_method: 'email',              // or 'google', 'github' });

|<p>**Why this matters**</p><p>Before identify(), PostHog tracks the user as an anonymous ID. After identify(), it merges the anonymous session history with the known person. If identify() fires too late, or doesn’t include the right properties, you lose the connection between “visited from Reddit” and “signed up as jane@example.com.” This is the #1 cause of attribution gaps.</p>|
| :- |

## **6.2 Person Properties to Set**

|**Property**|**When to Set**|**Why**|
| :- | :- | :- |
|email|At signup/login|Contact and identification|
|name|At signup|Personalization and lookup|
|plan|At signup; update on upgrade/downgrade|Segment free vs. paid users in analysis|
|signup\_date|At signup (once)|Cohort analysis by signup date|
|signup\_source|At signup (capture UTM source)|First-touch attribution that persists on the person|
|signup\_method|At signup|Track which auth method is most popular|
|company / role|At onboarding (if collected)|Audience understanding|
|onboarding\_completed|When onboarding finishes|Segment activated vs. non-activated users|

## **6.3 Group Analytics (Optional)**
If your product is B2B and you want to analyze behavior at the company/team level (not just individual users), use PostHog’s group analytics:

// Associate user with their company posthog.group('company', 'company\_id\_123', {   name: 'Acme Corp',   plan: 'enterprise',   employee\_count: 150, });

This enables analysis like “which companies have the highest activation rate?” and “which company plans generate the most revenue?”

## **6.4 GA4 User Properties**
Set equivalent properties in GA4 for cross-reference:

gtag('set', 'user\_properties', {   plan: 'free',   signup\_source: 'reddit',   onboarding\_completed: 'true', });

Keep property names identical between PostHog and GA4 where possible to simplify cross-reference.


# **7. Cross-Domain and Subdomain Tracking**
If your marketing site and app live on different subdomains (e.g., yourproduct.com and app.yourproduct.com), you need to ensure that a visitor who lands on the marketing site and then navigates to the app is tracked as the same person.

## **7.1 PostHog Subdomain Configuration**
PostHog uses cookies scoped to the root domain by default. Verify this setting in your PostHog initialization:

posthog.init('YOUR\_API\_KEY', {   api\_host: 'YOUR\_HOST',   cross\_subdomain\_cookie: true,    // DEFAULT: true. Ensures cookies                                     // are shared across subdomains   persistence: 'localStorage+cookie', // Recommended for reliability });

With cross\_subdomain\_cookie: true, a visitor on yourproduct.com and app.yourproduct.com shares the same PostHog distinct\_id. Without it, they appear as two different people.

## **7.2 GA4 Cross-Domain Setup**
For subdomains under the same root domain, GA4 handles this automatically. No additional configuration needed.

For completely different domains (e.g., yourproduct.com and yourproduct-app.com), configure cross-domain tracking in GA4:

1. Go to GA4 Admin > Data Streams > Your Stream > Configure tag settings
1. Click "Configure your domains"
1. Add both domains
1. GA4 will append a \_gl parameter to cross-domain links to maintain the session

## **7.3 Testing Cross-Domain Tracking**
After setup, verify by performing this test:

1. Open your marketing site in an incognito browser window
1. Navigate to your app (click a signup/login link)
1. In PostHog, check that the same person\_id appears for both the marketing site pageview and the app pageview
1. In GA4, check that the session continues across domains (same session\_id in debug view)

If the person\_id or session breaks across domains, check your cookie configuration and domain settings.


# **8. Consent Management and Privacy**
If you have users in the EU (or California), you are legally required to obtain consent before tracking. This section covers how to implement consent properly without breaking your analytics.

## **8.1 When Consent Is Required**

|**Regulation**|**Applies To**|**Requirement**|
| :- | :- | :- |
|GDPR|Users in the EU/EEA|Explicit opt-in consent before any tracking cookies are set|
|CCPA/CPRA|California residents|Opt-out right; you can track by default but must offer opt-out|
|ePrivacy|EU users|Cookie consent specifically for non-essential cookies|

If any meaningful portion of your traffic comes from the EU, implement opt-in consent. It is easier to implement one consent flow for all users than to geo-target different flows.

## **8.2 Implementation with GTM**
GTM has built-in consent mode. Configure your tags to respect consent signals:

1. Install a Consent Management Platform (CMP): Cookiebot, OneTrust, CookieYes, or a lightweight alternative
1. In GTM, set PostHog and GA4 tags to require consent before firing
1. Create a "Consent Granted" trigger that fires only after the user accepts tracking
1. Set PostHog and GA4 tags to fire on this trigger instead of "All Pages"

## **8.3 PostHog Consent Configuration**

// Initialize PostHog without tracking posthog.init('YOUR\_KEY', {   api\_host: 'YOUR\_HOST',   opt\_in\_capturing\_by\_default: false,  // Don't track until consent   persistence: 'memory',                // Don't set cookies until consent });  // When user grants consent: posthog.opt\_in\_capturing(); posthog.set\_config({ persistence: 'localStorage+cookie' });  // When user declines: posthog.opt\_out\_capturing();

## **8.4 Impact on Data**
Implementing consent will reduce your tracked visitor count by approximately 15-30% for EU traffic (users who decline or ignore the banner). This is the cost of compliance. The benefit: your data is cleaner, legally defensible, and you avoid GDPR fines that can reach 4% of annual revenue.

|<p>**Don’t skip this**</p><p>Many early-stage products skip consent because they have low traffic. This is a mistake. When you do get traffic, retroactively adding consent is much harder. Set it up now while the codebase is simple.</p>|
| :- |


# **9. Bot Detection and Data Quality**
Bot traffic inflates your numbers and distorts every metric downstream: conversion rates look lower, retention looks worse, and channel performance is misleading. Set up bot detection from day one.

## **9.1 Client-Side Bot Filtering**
Add these checks before sending events to PostHog. Place this logic in your PostHog initialization or in a GTM Custom HTML tag:

// Check for common bot signals before initializing PostHog const isBot = (   navigator.webdriver ||                           // Headless browser flag   (screen.width === 800 && screen.height === 600) || // Default headless viewport   /bot|crawler|spider|crawling/i.test(navigator.userAgent) );  if (!isBot) {   // Initialize PostHog only for real users   posthog.init('YOUR\_KEY', { /\* config \*/ }); }

## **9.2 Server-Side Bot Detection**
For more robust filtering, check user agents server-side before serving tracking scripts. Use the isbot npm package or maintain a bot user agent list.

// npm install isbot const { isbot } = require('isbot');  app.use((req, res, next) => {   req.isBot = isbot(req.get('user-agent'));   next(); });  // In your page template, only include tracking for non-bots: // if (!isBot) { render GTM snippet }

## **9.3 PostHog Bot Filter Configuration**
In PostHog project settings, set up test account filters to exclude known bot patterns:

1. Go to PostHog > Project Settings > Filtering > Filter out internal and test users
1. Add filter: $os equals Linux AND $prev\_pageview\_duration less than 1 second
1. Add filter: $screen\_width equals 800 AND $screen\_height equals 600
1. Add filter: $browser\_version less than 100 (catches very outdated browser versions)

Once configured, toggle "Filter out internal and test users" on any insight to get clean numbers.

## **9.4 GA4 Bot Filtering**
GA4 automatically filters known bots and spiders (based on the IAB bot list). This is enabled by default. Verify it is on:

1. Go to GA4 Admin > Data Settings > Data Collection
1. Ensure "Exclude all hits from known bots and spiders" is checked

GA4’s built-in bot filtering is good but not comprehensive. It catches known crawlers but misses headless Chrome bots, SEO scrapers, and competitive intelligence tools. You still need the PostHog-side filtering for completeness.

## **9.5 Cloudflare Bot Protection (Recommended)**
If your site is behind Cloudflare (free tier is sufficient), enable Bot Fight Mode:

1. Go to Cloudflare dashboard > Security > Bots
1. Enable Bot Fight Mode
1. This blocks known automated traffic before it reaches your site, reducing both analytics pollution and server load

This is the most effective bot mitigation because it stops bots before they execute JavaScript, meaning PostHog and GA4 never see them.


# **10. Landing Page and CTA Tracking**
To produce actionable landing page recommendations (which headlines work, which CTAs convert, where people drop off), you need specific instrumentation beyond basic pageviews.

## **10.1 Scroll Depth Tracking**
Track how far users scroll on key pages. This tells you whether people read your page or bounce from the top.

// Scroll depth tracking const observer = new IntersectionObserver((entries) => {   entries.forEach(entry => {     if (entry.isIntersecting) {       const depth = entry.target.dataset.depth;       posthog.capture('scroll\_depth\_reached', {         depth\_percent: parseInt(depth),         page\_url: window.location.href,       });       observer.unobserve(entry.target); // Fire once per threshold     }   }); }, { threshold: 0 });  // Place invisible marker elements at 25%, 50%, 75%, 100% of page [25, 50, 75, 100].forEach(pct => {   const marker = document.getElementById(`scroll-${pct}`);   if (marker) observer.observe(marker); });

## **10.2 CTA Click Tracking**
Track every CTA button click with context about which button, which section, and which page. This is essential for A/B testing CTA copy.

// Add to every CTA button function trackCTA(buttonName, section, destination) {   posthog.capture('cta\_clicked', {     button\_name: buttonName,       // e.g., 'Build My AI Resume Free'     cta\_section: section,          // e.g., 'hero', 'mid\_page', 'footer'     page\_url: window.location.href,     cta\_destination: destination,   // e.g., '/signup', '/pricing'   });    // Also push to GTM dataLayer for GA4   window.dataLayer = window.dataLayer || [];   window.dataLayer.push({     event: 'cta\_clicked',     button\_name: buttonName,     cta\_section: section,   }); }

|<p>**Always include button\_name and cta\_section**</p><p>Without these properties, you know a CTA was clicked but not which one. The difference between “Build My AI Resume Free” getting 47 clicks and “Try it Free” getting 6 clicks is the insight that changes your conversion rate. Track the specifics.</p>|
| :- |

## **10.3 Page Engagement Time**
PostHog automatically captures $prev\_pageview\_duration (how long the user spent on the previous page) with each pageview event. This is captured by default if capture\_pageleave is enabled. No additional code needed.

PostHog also automatically captures scroll depth percentages via $prev\_pageview\_max\_scroll\_percentage. Combined with your custom scroll tracking events, this gives you a complete picture of page engagement.

## **10.4 GTM Triggers for GA4 Events**
In GTM, create triggers for your custom events so GA4 also receives them:

1. Create a Custom Event trigger for each dataLayer event (e.g., trigger name: "CTA Clicked", event name: "cta\_clicked")
1. Create a GA4 Event tag that fires on this trigger, passing event parameters from the dataLayer
1. Map the event parameters: button\_name, cta\_section, cta\_destination

This ensures both PostHog and GA4 see identical CTA click data.


# **11. SEO and AEO Tracking**
Organic search and AI answer engines are the only channels that compound over time without ongoing spend. This section covers what to track to measure and optimize both.

## **11.1 Google Search Console Integration**
Google Search Console (GSC) is the only source of truth for which keywords bring organic search traffic. Neither PostHog nor GA4 can see search queries without it.

1. Verify your domain in Google Search Console (search.google.com/search-console)
1. Link GSC to GA4: GA4 Admin > Product Links > Search Console Links > Link
1. This enables the GA4 Queries report showing which search terms drive traffic and clicks

PostHog cannot connect to Search Console directly. Use GA4 for keyword-level data, and PostHog for post-click behavior analysis (what searchers do after they land on your site).

## **11.2 Tracking Organic Search Traffic in PostHog**
PostHog automatically captures the referring domain for each pageview. To analyze organic search traffic, filter by referring domains containing google, bing, duckduckgo, yahoo, or brave.

For blog content performance, combine referrer data with page-level engagement metrics (time on page, scroll depth, CTA clicks) to determine which content attracts real engagement vs. bot scraping.

## **11.3 AI Referrer Tracking (AEO)**
Answer Engine Optimization is about showing up in AI-generated answers (ChatGPT, Perplexity, Google AI Overviews). Track AI referral traffic in PostHog by filtering for these referring domains:

|**AI Tool**|**Referring Domain**|
| :- | :- |
|ChatGPT|chatgpt.com|
|Perplexity|perplexity.ai|
|Google Gemini|gemini.google.com|
|Microsoft Copilot|copilot.microsoft.com|
|Claude|claude.ai|
|Google AI Overview|(appears as google.com — not separately trackable)|

Even a single visitor from chatgpt.com or perplexity.ai is a signal that AI tools are citing your content. Track this as an emerging channel.

## **11.4 Technical SEO Instrumentation**
Ensure these technical elements are in place for both search engines and AI crawlers:

- Sitemap.xml exists and is submitted to Google Search Console
- Robots.txt allows crawling of all public pages
- Each page has a unique, keyword-rich <title> tag
- Each page has a unique meta description with a call to action
- Open Graph tags (og:title, og:description, og:image) are set for social sharing
- Structured data (JSON-LD) is implemented: FAQ schema on content pages, Product schema on the homepage, HowTo schema on tutorial content
- An /llms.txt file exists at the root domain describing the product for AI crawlers
- Core Web Vitals pass: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Pages render full content without JavaScript (or use server-side rendering) so search engines and AI crawlers can index content


# **12. Internal Traffic and Test Account Filtering**
Your own team’s activity inflates traffic numbers and distorts funnel metrics. Filter it out.

## **12.1 PostHog Filtering**
1. Go to PostHog > Project Settings > Filtering > Filter out internal and test users
1. Add your team’s email domain: email does not contain @yourcompany.com
1. Add your office IP address(es) if applicable
1. Add your internal referrer domains: $referring\_domain is not yourproduct.com AND $referring\_domain is not app.yourproduct.com

Once configured, use the "Filter out internal and test users" toggle on every insight and dashboard.

## **12.2 GA4 Filtering**
1. Go to GA4 Admin > Data Streams > Your Stream > Configure tag settings > Define internal traffic
1. Add your office IP addresses
1. Go to GA4 Admin > Data Settings > Data Filters
1. Activate the Internal Traffic filter

|<p>**Do this on day one**</p><p>Every day without internal traffic filtering means your historical data includes your own team’s browsing. This is especially damaging in early-stage products where your team might represent 30-50% of all traffic.</p>|
| :- |


# **13. Dashboards and Reporting Setup**
Set up three dashboards in PostHog and configure GA4 reports to support the G8 analysis template and weekly Monday morning reports.

## **13.1 PostHog Dashboard: Acquisition**
This dashboard answers: How many real people are visiting, where are they coming from, and which channels convert?

- Weekly unique visitors (trend, 12 weeks, bot-filtered)
- Traffic by referring domain (bar chart, bot-filtered)
- UTM source breakdown (if UTMs are tagged)
- Landing page conversion rate: landing\_page\_viewed to signup\_started
- CTA click breakdown by button\_name
- Top entry pages by unique visitors

## **13.2 PostHog Dashboard: Activation**
This dashboard answers: Are signups becoming active users?

- Full funnel: landing > signup > authentication > onboarding > core action
- Signup completion rate (started vs. completed)
- Onboarding completion rate
- Core action completion rate (onboarding to first use)
- Time between funnel steps (median)
- Feature usage breakdown

## **13.3 PostHog Dashboard: Retention and Revenue**
This dashboard answers: Are people coming back, and are they paying?

- Weekly retention cohorts (8 weeks)
- Pricing page views trend
- Checkout funnel: pricing viewed > checkout started > purchase completed
- Revenue by plan (if tracked)
- Active users (daily/weekly/monthly)

## **13.4 GA4 Reports to Configure**
In GA4, set up these custom reports:

- Acquisition > Traffic Acquisition report (shows channel groupings with UTM data)
- Engagement > Pages and Screens (shows top pages with engagement time)
- Monetization > Ecommerce purchases (requires purchase event with value parameter)
- Search Console > Queries report (requires GSC link — shows keyword performance)

GA4 also provides automated insights that flag unusual changes in traffic or conversions. Enable email notifications for these.


# **14. Validation and Testing**
Before relying on any data, validate that every component is working correctly. Use this checklist after initial setup and whenever you make changes.

## **14.1 PostHog Validation**

- Open your site in incognito. Check PostHog Live Events — do you see your $pageview?
- Click a CTA. Does cta\_clicked appear with correct button\_name and cta\_section?
- Sign up with a test account. Does posthog.identify() fire? Check the person in PostHog — does it have email, plan, signup\_source?
- Navigate from marketing site to app. Is it the same person\_id in PostHog? (cross-domain check)
- Complete onboarding. Does onboarding\_completed fire?
- Perform the core action. Does the core action event fire with correct properties?
- View pricing. Does pricing\_viewed fire?
- Check scroll depth — scroll to 50% on the landing page. Does scroll\_depth\_reached fire with depth\_percent: 50?
- Toggle "Filter test accounts" on an insight. Does your test traffic disappear?

## **14.2 GA4 Validation**

- Open GA4 Real-time report. Visit your site. Do you see the session?
- Use GA4 DebugView (enable debug mode in your browser). Verify all custom events appear.
- Check that GA4 recommended events (sign\_up, purchase) fire with correct parameters
- Visit a UTM-tagged URL. Check GA4 Traffic Acquisition — does the source/medium appear correctly?
- Verify Search Console link is active: GA4 > Admin > Product Links > Search Console

## **14.3 GTM Validation**

- Use GTM Preview mode (click Preview in GTM dashboard)
- Visit your site with Preview active. Verify that PostHog and GA4 tags fire on the correct triggers.
- Check that consent-dependent tags only fire after consent is granted
- Verify the Conversion Linker tag fires on all pages
- Publish the GTM container after validation

## **14.4 Data Quality Spot Check (Run Weekly)**

- What % of this week’s visitors have UTM parameters? If <10%, investigate which links are untagged.
- Are there any new 800x600 screen resolution visitors? If so, bot filtering may need updating.
- Do all funnel events have data in the last 7 days? If any stage has zero events, instrumentation may be broken.
- Are person properties being set? Check 5 random recent signups — do they have email, plan, signup\_source?
- Is internal traffic being filtered? Check if your own visits appear in the data.


# **15. Quick Reference: Implementation Checklist**
Use this checklist to track implementation progress. Complete items in order — later items depend on earlier ones.

## **Phase 1: Foundation (Day 1)**
- Create PostHog account and project
- Create GA4 property and data stream
- Create GTM container
- Install GTM snippet on all pages (head + body)
- Add PostHog tag in GTM (Custom HTML)
- Add GA4 Configuration tag in GTM
- Add Conversion Linker tag in GTM
- Verify all three tools are receiving data (PostHog Live Events, GA4 Real-time, GTM Preview)

## **Phase 2: Event Instrumentation (Day 2-3)**
- Define your event taxonomy (use Section 4 as template)
- Implement posthog.identify() at signup/login with all person properties
- Implement all acquisition events (landing\_page\_viewed, cta\_clicked, signup\_started, signup\_completed)
- Implement all activation events (onboarding\_started, onboarding\_completed, core\_action\_completed)
- Implement monetization events (pricing\_viewed, checkout\_started, purchase\_completed)
- Implement scroll depth tracking on landing page
- Implement CTA click tracking with button\_name and cta\_section
- Create GA4 event tags in GTM for all custom events
- Map custom events to GA4 recommended events where applicable

## **Phase 3: Data Quality (Day 3-4)**
- Create UTM parameter spreadsheet with standardized values
- Tag all existing outbound links with UTMs
- Implement client-side bot detection
- Configure PostHog test account filters
- Configure GA4 internal traffic filter
- Enable Cloudflare Bot Fight Mode (if using Cloudflare)
- Verify cross-subdomain cookie tracking works

## **Phase 4: Compliance and Consent (Day 4-5)**
- Install consent management platform (CMP)
- Configure PostHog to respect consent (opt\_in\_capturing\_by\_default: false)
- Configure GTM tags to fire only after consent
- Test consent flow: accept > verify tracking works; decline > verify no tracking

## **Phase 5: Reporting (Day 5-7)**
- Create PostHog Acquisition dashboard
- Create PostHog Activation dashboard
- Create PostHog Retention and Revenue dashboard
- Link Google Search Console to GA4
- Configure GA4 custom reports
- Mark key GA4 events as conversions
- Run full validation checklist (Section 14)
- Run first G8 analysis using the G8 Product Analytics Template

*End of Document*
Page 
