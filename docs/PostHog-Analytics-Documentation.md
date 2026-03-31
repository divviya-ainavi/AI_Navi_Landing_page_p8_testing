# PostHog Analytics Documentation

## AI Navi Website Analytics Setup

**Document Version:** 1.0
**Date:** March 2026
**Prepared by:** Development Team

---

## Table of Contents

1. [Overview](#overview)
2. [What is PostHog?](#what-is-posthog)
3. [Analytics Components](#analytics-components)
4. [Funnels](#funnels)
5. [Cohorts](#cohorts)
6. [Dashboard](#dashboard)
7. [UTM Tracking](#utm-tracking)
8. [How to Access](#how-to-access)
9. [Interpreting Your Data](#interpreting-your-data)
10. [Best Practices](#best-practices)
11. [Glossary](#glossary)

---

## Overview

We have implemented comprehensive analytics tracking on your AI Navi website using PostHog. This setup enables you to:

- **Track user journeys** from first visit to conversion
- **Identify drop-off points** where potential leads are lost
- **Measure marketing effectiveness** across different channels
- **Segment users** based on their behaviour
- **Make data-driven decisions** to improve conversion rates

---

## What is PostHog?

PostHog is a product analytics platform that helps you understand how users interact with your website. Unlike basic analytics tools (like Google Analytics), PostHog provides:

| Feature | Benefit |
|---------|---------|
| Funnel Analysis | See exactly where users drop off in the conversion process |
| User Cohorts | Group users by behaviour for targeted analysis |
| Event Tracking | Track specific actions (button clicks, form submissions, etc.) |
| Session Recordings | Watch how users navigate your site (optional feature) |
| Privacy-Focused | GDPR compliant, data stays in your control |

---

## Analytics Components

We have set up three main components:

```
┌─────────────────────────────────────────────────────────┐
│                    POSTHOG ANALYTICS                    │
├─────────────────┬─────────────────┬─────────────────────┤
│    FUNNELS      │    COHORTS      │     DASHBOARD       │
│                 │                 │                     │
│ Track user      │ Segment users   │ View all metrics    │
│ journeys from   │ by behaviour    │ in one place        │
│ visit to        │ for targeted    │ for quick           │
│ conversion      │ analysis        │ insights            │
└─────────────────┴─────────────────┴─────────────────────┘
```

---

## Funnels

### What are Funnels?

Funnels track the steps users take to complete a goal (like submitting a contact form). They show you:

- How many users start the journey
- Where users drop off
- Conversion rate at each step
- Time to convert

### Your Configured Funnels

#### 1. Main Landing → Contact Conversion

**Purpose:** Track visitors from homepage to contact form submission

| Step | Event | What It Measures |
|------|-------|------------------|
| 1 | Page View (/) | Visitors landing on homepage |
| 2 | Scroll 50%+ | Engaged visitors reading content |
| 3 | CTA Click (Hero) | Users clicking main call-to-action |
| 4 | Form Started | Users beginning to fill contact form |
| 5 | Form Submitted | Successful lead conversions |

**Key Insight:** If there's a large drop between Steps 3 and 4, users are clicking the CTA but not starting the form — consider form placement or messaging.

---

#### 2. Scorecard → Contact Conversion

**Purpose:** Track users who engage with the AI Readiness Scorecard

| Step | Event | What It Measures |
|------|-------|------------------|
| 1 | Page View (/) | Visitors on homepage |
| 2 | Scorecard CTA Click | Interest in self-assessment |
| 3 | Contact Form Submitted | Conversion after taking scorecard |

**Key Insight:** Shows how effective the scorecard is as a lead nurturing tool.

---

#### 3. Funding Guide → PDF Download

**Purpose:** Track the funding guide lead magnet performance

| Step | Event | What It Measures |
|------|-------|------------------|
| 1 | Page View (/ai-funding-guide-uk) | Visitors to funding page |
| 2 | Tab Changed | Content engagement (exploring tabs) |
| 3 | Form Started | Beginning PDF download form |
| 4 | PDF Downloaded | Successful lead capture |

**Key Insight:** If users view the page but don't engage with tabs, the content may need to be more compelling above the fold.

---

#### 4. Multi-Touch → Contact Conversion

**Purpose:** Track users who interact with multiple touchpoints before converting

| Step | Event | What It Measures |
|------|-------|------------------|
| 1 | Page View | Any page entry |
| 2 | CTA Click | Any call-to-action engagement |
| 3 | Scroll 75%+ | Deep content engagement |
| 4 | Form Started | Beginning contact form |
| 5 | Form Submitted | Final conversion |

**Key Insight:** Shows the typical journey of high-intent users who convert.

---

#### 5. Contact Form Abandonment

**Purpose:** Identify issues with the contact form

| Step | Event | What It Measures |
|------|-------|------------------|
| 1 | Form Started | Users who began filling form |
| 2 | Form Error | Users who encountered errors |
| 3 | Form Submitted | Successful submissions |

**Key Insight:** High error rate indicates form validation issues or confusing fields.

---

#### 6. Funding Kit Form Abandonment

**Purpose:** Identify issues with the PDF download form

| Step | Event | What It Measures |
|------|-------|------------------|
| 1 | Form Started | Users who began filling form |
| 2 | Form Error | Users who encountered errors |
| 3 | PDF Downloaded | Successful downloads |

**Key Insight:** This is a simple 2-field form — abandonment here suggests friction in the process.

---

### How to Read Funnel Data

```
Example Funnel Output:

Step 1: Page View         1,000 users (100%)
                              ↓
Step 2: Scroll 50%+         600 users (60%)    ← 40% bounce before scrolling
                              ↓
Step 3: CTA Click           120 users (12%)    ← Only 20% of scrollers click CTA
                              ↓
Step 4: Form Started         80 users (8%)     ← 67% of clickers start form
                              ↓
Step 5: Form Submitted       50 users (5%)     ← 63% form completion rate

Overall Conversion: 5%
```

**Interpretation:**
- The biggest drop-off is at Step 3 (CTA Click) — consider A/B testing different CTA text or placement
- Form completion rate (63%) is healthy — form UX is good
- Focus optimization efforts on getting more scrollers to click the CTA

---

## Cohorts

### What are Cohorts?

Cohorts are groups of users who share common characteristics or behaviours. They allow you to:

- Compare behaviour between different user groups
- Target specific segments for analysis
- Track how different types of users convert

### Your Configured Cohorts

| Cohort Name | Definition | Use Case |
|-------------|------------|----------|
| **High-Intent Visitors** | Users who scrolled 75%+ on any page | Identify engaged users who didn't convert |
| **Scorecard Engagers** | Users who clicked any Scorecard CTA | Track self-assessment users |
| **Qualified Leads** | Users who submitted contact form | Your converted leads |
| **Funding Guide Leads** | Users who downloaded the PDF | Lead magnet conversions |
| **Form Abandoners** | Started form but didn't submit | Re-engagement opportunity |

### Using Cohorts

**Example Analysis:**

Compare conversion rates between cohorts:
- Do "Scorecard Engagers" convert at a higher rate than general visitors?
- Are "High-Intent Visitors" more likely to download the funding guide?

**Retargeting:**

Export cohorts for advertising:
- Show ads to "Form Abandoners" encouraging them to return
- Target "High-Intent Visitors" with specific messaging

---

## Dashboard

### What is the Dashboard?

The dashboard provides a single view of all your key metrics. Instead of checking multiple reports, you can see everything at a glance.

### Your Dashboard: AI Navi Conversion Metrics

#### Metrics Included:

| Metric | Type | What It Shows |
|--------|------|---------------|
| Page Views Trend | Line Chart | Traffic over time |
| Form Completion Rate % | Number | Contact form success rate |
| Traffic by UTM Source | Bar Chart | Where visitors come from |
| Traffic by UTM Medium | Bar Chart | Channel types (social, email, etc.) |
| Traffic by UTM Campaign | Bar Chart | Campaign performance |
| Conversions by UTM Source | Bar Chart | Which sources generate leads |
| Main Landing Funnel | Funnel | Homepage conversion journey |
| Scorecard Funnel | Funnel | Scorecard user journey |
| Funding Guide Funnel | Funnel | PDF download journey |
| Form Abandonment | Funnel | Form drop-off analysis |

### Dashboard Layout

```
┌─────────────────────────────────────────────────────────────┐
│                  AI NAVI CONVERSION METRICS                 │
├───────────────────┬───────────────────┬─────────────────────┤
│   Page Views      │  Form Completion  │  Traffic by Source  │
│   (Trend)         │  Rate %           │  (Bar Chart)        │
├───────────────────┴───────────────────┴─────────────────────┤
│                     FUNNELS                                 │
├─────────────────────────────┬───────────────────────────────┤
│  Main Landing Conversion    │   Scorecard Conversion        │
├─────────────────────────────┼───────────────────────────────┤
│  Funding Guide Download     │   Form Abandonment            │
├─────────────────────────────┴───────────────────────────────┤
│                   UTM TRACKING                              │
├───────────────────┬───────────────────┬─────────────────────┤
│  By Medium        │  By Campaign      │  Conversions/Source │
└───────────────────┴───────────────────┴─────────────────────┘
```

---

## UTM Tracking

### What is UTM Tracking?

UTM parameters are tags added to URLs that tell analytics tools where traffic comes from. This is essential for measuring marketing effectiveness.

### UTM Parameters Explained

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `utm_source` | Where the traffic comes from | google, linkedin, newsletter |
| `utm_medium` | The marketing channel type | cpc, social, email |
| `utm_campaign` | The specific campaign name | spring_launch, ai_funding |
| `utm_content` | Differentiates similar content | banner_ad, text_link |
| `utm_term` | Paid search keywords | ai+consulting+uk |

### Your UTM Link Templates

**LinkedIn Posts:**
```
https://ainavi.co.uk/?utm_source=linkedin&utm_medium=social&utm_campaign=awareness&utm_content=organic_post
```

**LinkedIn Ads:**
```
https://ainavi.co.uk/?utm_source=linkedin&utm_medium=paid_social&utm_campaign=lead_gen&utm_content=ad_variant_a
```

**Email Newsletter:**
```
https://ainavi.co.uk/?utm_source=newsletter&utm_medium=email&utm_campaign=weekly_digest
```

**Funding Guide Promotion:**
```
https://ainavi.co.uk/ai-funding-guide-uk?utm_source=newsletter&utm_medium=email&utm_campaign=funding_guide_launch
```

**Google Ads:**
```
https://ainavi.co.uk/?utm_source=google&utm_medium=cpc&utm_campaign=ai_consulting&utm_term=ai+consulting+uk
```

### UTM Best Practices

1. **Be consistent** — Use the same naming conventions across all campaigns
2. **Use lowercase** — `linkedin` not `LinkedIn` (prevents duplicate entries)
3. **No spaces** — Use underscores: `funding_guide` not `funding guide`
4. **Always tag external links** — Every link in ads, emails, and social posts should have UTM parameters

### UTM Builder Tool

Use Google's free Campaign URL Builder:
**https://ga-dev-tools.google/campaign-url-builder/**

---

## How to Access

### Accessing PostHog

1. Go to: **https://us.posthog.com**
2. Log in with your credentials
3. Select project: **AI Navi**

### Viewing the Dashboard

1. Click **Dashboards** in the left sidebar
2. Select **AI Navi Conversion Metrics**

### Viewing Funnels

1. Click **Product Analytics** in the left sidebar
2. Click on any saved funnel to view details

### Viewing Cohorts

1. Click **People & groups** in the left sidebar
2. Click **Cohorts**
3. Click any cohort to see the users in that segment

---

## Interpreting Your Data

### Key Metrics to Watch

| Metric | Healthy Range | Action if Low |
|--------|---------------|---------------|
| Form Completion Rate | > 50% | Review form UX, reduce fields |
| Homepage → CTA Click | > 10% | Test different CTA copy/placement |
| Scroll Depth 50%+ | > 40% | Improve above-fold content |
| Scorecard Click Rate | > 5% | Make scorecard CTA more prominent |

### Warning Signs

| Issue | Indicator | Likely Cause |
|-------|-----------|--------------|
| High bounce rate | Low scroll depth | Poor page load speed or irrelevant traffic |
| Form abandonment | Start > Submit gap | Too many fields or confusing validation |
| Low CTA clicks | High scroll, low clicks | CTA not compelling or hard to find |
| No UTM data | "None" in source reports | Marketing links not tagged |

### Weekly Review Checklist

- [ ] Check overall conversion rate trend
- [ ] Review funnel drop-off points
- [ ] Compare UTM source performance
- [ ] Check for form errors
- [ ] Review cohort sizes (are they growing?)

---

## Best Practices

### For Marketing Teams

1. **Always use UTM-tagged links** in all external marketing
2. **Review the dashboard weekly** to understand campaign performance
3. **Compare cohorts** to see which user types convert best
4. **Test changes** and measure impact through funnel analysis

### For Ongoing Optimisation

1. **Identify the biggest drop-off** in your main funnel
2. **Form a hypothesis** about why users leave at that step
3. **Make a change** (e.g., new CTA text, different form layout)
4. **Measure the impact** by comparing funnel conversion before/after

### Data Hygiene

1. **Filter out internal traffic** — Use "Filter out internal and test users" option
2. **Use consistent UTM naming** — Create a UTM naming guide for your team
3. **Review regularly** — Set a weekly calendar reminder to check analytics

---

## Glossary

| Term | Definition |
|------|------------|
| **Funnel** | A sequence of steps users take to complete a goal |
| **Cohort** | A group of users who share common characteristics |
| **Conversion** | When a user completes a desired action (e.g., form submission) |
| **Drop-off** | When users leave the funnel without completing the goal |
| **Event** | A tracked user action (click, scroll, form submit, etc.) |
| **UTM** | Urchin Tracking Module — URL parameters for tracking traffic sources |
| **Pageview** | A single page load by a user |
| **Session** | A single visit to the website (may include multiple pageviews) |
| **Bounce** | When a user leaves without taking any action |
| **Conversion Rate** | Percentage of users who complete the goal |

---

## Events Reference

### Events Tracked on Your Website

| Event Name | Trigger | Properties |
|------------|---------|------------|
| `Pageview` | Page loads | URL, referrer |
| `scroll_depth_reached` | User scrolls | depth_percent (25, 50, 75, 100) |
| `cta_clicked` | CTA button clicked | button_name, cta_section |
| `scorecard_cta_clicked` | Scorecard CTA clicked | button_name |
| `contact_form_started` | First form field focused | page_url |
| `contact_form_submitted` | Form successfully submitted | revenue_range, source |
| `contact_form_error` | Form validation/API error | error_type, error_message |
| `funding_kit_form_started` | PDF form field focused | page_url |
| `funding_kit_downloaded` | PDF successfully downloaded | email_domain |
| `tab_changed` | Funding guide tab clicked | tab_name, section |

---

## Support

For questions about this analytics setup, contact your development team.

For PostHog platform support, visit: **https://posthog.com/docs**

---

**Document End**
