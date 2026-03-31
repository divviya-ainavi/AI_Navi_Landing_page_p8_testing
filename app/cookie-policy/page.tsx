import { Metadata } from 'next';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy | AI Navi',
  description: 'Cookie Policy for ainavi.co.uk - Learn how we use cookies and similar technologies on our website in compliance with UK GDPR and PECR.',
  alternates: {
    canonical: 'https://ainavi.co.uk/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Cookie Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-2">Last Updated: March 2026</p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="bg-ice border border-border px-2 py-1 rounded">UK GDPR</span>
            <span className="bg-ice border border-border px-2 py-1 rounded">PECR</span>
            <span className="bg-ice border border-border px-2 py-1 rounded">EU ePrivacy Aligned</span>
            <span className="bg-ice border border-border px-2 py-1 rounded">DUAA 2025 Updated</span>
          </div>
        </div>

        <div className="bg-orange/5 border border-orange/20 border-l-4 border-l-orange rounded-lg p-4 mb-8">
          <p className="text-[14px] text-[#4B5563] italic">
            This policy should be read alongside the <a href="/privacy-policy" className="text-orange hover:underline">Privacy Policy</a> and <a href="/terms-of-use" className="text-orange hover:underline">Terms of Use</a>.
          </p>
        </div>

        <div className="prose prose-navy max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">1. What Are Cookies?</h2>
            <p className="text-[15px] text-[#4B5563] leading-relaxed mb-4">
              Cookies are small text files placed on your device (computer, tablet, or phone) when you visit a website. They allow the website to remember information about your visit — such as your preferred language or login status — and can make your next visit easier and the site more useful to you.
            </p>
            <p className="text-[15px] text-[#4B5563] leading-relaxed mb-3">
              <strong className="text-navy">Similar technologies we may use include:</strong>
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-4">
              <li><strong className="text-navy">Web beacons</strong> — tiny transparent images used to track page views and email opens</li>
              <li><strong className="text-navy">Pixel tags</strong> — small blocks of code used by advertising and analytics services</li>
              <li><strong className="text-navy">Local storage</strong> — browser-side storage for preferences and session state</li>
              <li><strong className="text-navy">Session storage</strong> — temporary storage cleared when you close your browser</li>
            </ul>
            <p className="text-[15px] text-[#4B5563]">
              Where we refer to &quot;cookies&quot; in this policy, we mean all of these technologies unless stated otherwise.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">2. Types of Cookies We Use</h2>
            <p className="text-[15px] text-[#4B5563] mb-4">
              We use the following categories of cookies. Only Essential cookies are set automatically. All other categories require your explicit consent, which you can give or withdraw at any time via our Cookie Settings panel.
            </p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-6 overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ice-md border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-navy">Category</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Purpose</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Examples</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Duration</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Consent Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Essential</td>
                    <td className="px-4 py-3 text-[#4B5563]">Core website functionality, security, user sessions. The website cannot function properly without these.</td>
                    <td className="px-4 py-3 text-[#4B5563]">Session ID, CSRF protection, cookie consent record</td>
                    <td className="px-4 py-3 text-[#4B5563]">Session / up to 12 months</td>
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">No — not required</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Performance &amp; Analytics</td>
                    <td className="px-4 py-3 text-[#4B5563]">Understanding how visitors use our website so we can improve it. Data is aggregated and anonymised where possible.</td>
                    <td className="px-4 py-3 text-[#4B5563]">PostHog (EU-hosted analytics)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Up to 12 months</td>
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Yes — opt-in required</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Functional</td>
                    <td className="px-4 py-3 text-[#4B5563]">Remembering your preferences to provide a more personalised experience.</td>
                    <td className="px-4 py-3 text-[#4B5563]">Language preference, display settings, region</td>
                    <td className="px-4 py-3 text-[#4B5563]">Up to 12 months</td>
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Yes — opt-in required</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Targeting &amp; Advertising</td>
                    <td className="px-4 py-3 text-[#4B5563]">Showing relevant advertising and measuring the effectiveness of campaigns.</td>
                    <td className="px-4 py-3 text-[#4B5563]">Google Tag Manager (for conversion tracking)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Up to 90 days</td>
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Yes — opt-in required</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">AI Feature Cookies</td>
                    <td className="px-4 py-3 text-[#4B5563]">Supporting AI-powered features including session context for AI assistants and personalisation systems.</td>
                    <td className="px-4 py-3 text-[#4B5563]">AI session context, recommendation state</td>
                    <td className="px-4 py-3 text-[#4B5563]">Session / up to 30 days</td>
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Yes — opt-in required</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-ice border border-border rounded-lg p-4">
              <p className="text-[14px] text-[#4B5563]">
                <strong className="text-navy">Declining non-essential cookies:</strong> Declining non-essential cookies will not prevent you from using the core features of AiNavi.co.uk. Some features powered by third-party services (such as analytics or targeted advertising) may be unavailable if you decline those cookies.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">3. Consent &amp; Your Controls</h2>
            <p className="text-[15px] text-[#4B5563] mb-4">
              We operate a three-layer consent management approach in compliance with the Privacy and Electronic Communications Regulations (PECR) and ICO guidance on cookies:
            </p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-6">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ice-md border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-navy">Layer</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">What it is</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">How it works</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">01 — Cookie Banner</td>
                    <td className="px-4 py-3 text-[#4B5563]">Shown on your first visit</td>
                    <td className="px-4 py-3 text-[#4B5563]">Presents equal Accept and Decline options with no dark patterns, no pre-ticked boxes, and no consent walls.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">02 — Granular Settings</td>
                    <td className="px-4 py-3 text-[#4B5563]">Accessible at any time</td>
                    <td className="px-4 py-3 text-[#4B5563]">Via &quot;Cookie Settings&quot; in the banner and in the website footer. Accept or decline each category independently.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">03 — This Policy</td>
                    <td className="px-4 py-3 text-[#4B5563]">Permanently accessible</td>
                    <td className="px-4 py-3 text-[#4B5563]">Linked from the footer at all times. Full transparency on all cookies in use.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-navy mb-3">How we handle your consent</h3>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li>We require a clear, affirmative action (opt-in) before setting any non-essential cookie</li>
              <li>We record a timestamp and unique reference for your consent as evidence of PECR compliance, retained for 3 years</li>
              <li>You can change your preferences at any time via the <strong className="text-navy">Cookie Settings</strong> link in our website footer</li>
              <li>Withdrawing consent is as easy as giving it — one click, no barriers</li>
              <li>A refreshed consent notice will be presented if our cookie use changes materially</li>
            </ul>

            <div className="bg-orange/5 border border-orange/20 border-l-4 border-l-orange rounded-lg p-4">
              <p className="text-[14px] text-[#4B5563]">
                <strong className="text-navy">Important — cookies and legitimate interests:</strong> Under PECR, we cannot rely on legitimate interests as a basis for setting non-essential cookies. Explicit consent is required. This is a stricter standard than general GDPR processing, and we comply with it fully.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">4. Third-Party Cookies</h2>
            <p className="text-[15px] text-[#4B5563] mb-4">
              Some cookies are set by third-party services we use. These are only active where you have given consent for that cookie category. We have no direct control over third-party cookies once set, but we only permit third parties whose practices we have reviewed and who operate under appropriate data processing agreements.
            </p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-4">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ice-md border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-navy">Provider</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Category</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Purpose</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">PostHog</td>
                    <td className="px-4 py-3 text-[#4B5563]">Performance &amp; Analytics</td>
                    <td className="px-4 py-3 text-[#4B5563]">Usage analytics hosted in EU — consent required</td>
                    <td className="px-4 py-3 text-[#4B5563]">posthog.com/privacy</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Google Tag Manager</td>
                    <td className="px-4 py-3 text-[#4B5563]">Targeting &amp; Advertising</td>
                    <td className="px-4 py-3 text-[#4B5563]">Event tracking and conversion measurement — consent required</td>
                    <td className="px-4 py-3 text-[#4B5563]">policies.google.com/privacy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[15px] text-[#4B5563]">
              We will update this section whenever we add new third-party services that set cookies on our website.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">5. AI Feature Cookies</h2>
            <p className="text-[15px] text-[#4B5563] mb-4">
              As an AI-focused website, we use cookies to support AI-powered features including our AI assistant and personalised recommendations. These cookies are subject to the same consent requirements as all other non-essential cookies.
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">What AI feature cookies do</h3>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li>Maintain session context so our AI assistant can provide coherent, continuous responses within a single browsing session</li>
              <li>Store your preferences for AI-powered features (e.g. response style, topic preferences) if you choose to set these</li>
              <li>Help us monitor the quality and safety of AI outputs in aggregate, without identifying you individually</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mb-3">What they do not do</h3>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li>We do not use AI feature cookies to build detailed individual profiles for advertising purposes</li>
              <li>We do not use your AI interaction data to train AI models without your separate, explicit consent</li>
              <li>We do not use cookies to infer sensitive characteristics such as health, political views, or religion</li>
            </ul>

            <div className="bg-ice border border-border rounded-lg p-4">
              <p className="text-[14px] text-[#4B5563]">
                <strong className="text-navy">EU AI Act Compliance:</strong> Our AI features comply with the EU AI Act (Regulation 2024/1689). You will always be informed when you are interacting with an AI system. We do not use any prohibited AI practices as defined in Article 5 of the EU AI Act. See our full <a href="/privacy-policy#part-4-ai-transparency-notice" className="text-orange hover:underline">AI Transparency Notice</a> for details.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">6. International Transfers</h2>
            <p className="text-[15px] text-[#4B5563] mb-3">
              Our primary analytics provider (PostHog) processes data within the European Union. Where any third-party cookie providers process data outside the United Kingdom and European Economic Area, we ensure appropriate safeguards are in place:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-4">
              <li><strong className="text-navy">UK Adequacy Regulations</strong> — for countries with a UK adequacy decision</li>
              <li><strong className="text-navy">Standard Contractual Clauses (SCCs)</strong> — incorporated into our agreements with third-party providers</li>
              <li><strong className="text-navy">Transfer Risk Assessments (TRAs)</strong> — conducted in line with ICO guidance where required</li>
            </ul>
            <p className="text-[15px] text-[#4B5563]">
              You can request details of the safeguards in place for any specific transfer by contacting us at admin@ainavi.co.uk.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">7. Your Rights</h2>
            <p className="text-[15px] text-[#4B5563] mb-4">
              In addition to your cookie consent controls, you have the following rights under UK GDPR and PECR in relation to data collected via cookies:
            </p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ice-md border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-navy">Right</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Right to Access</td>
                    <td className="px-4 py-3 text-[#4B5563]">Request a copy of the personal data we hold about you, including data collected via cookies.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Right to Rectification</td>
                    <td className="px-4 py-3 text-[#4B5563]">Ask us to correct inaccurate personal data linked to cookie identifiers.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Right to Erasure</td>
                    <td className="px-4 py-3 text-[#4B5563]">Request deletion of personal data collected via cookies, subject to legal retention obligations.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Right to Object</td>
                    <td className="px-4 py-3 text-[#4B5563]">Object to processing of your data for analytics or profiling purposes at any time.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Withdraw Consent</td>
                    <td className="px-4 py-3 text-[#4B5563]">Withdraw cookie consent at any time via Cookie Settings, without affecting prior lawful processing.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">Complain to ICO</td>
                    <td className="px-4 py-3 text-[#4B5563]">Lodge a complaint with the Information Commissioner&apos;s Office at ico.org.uk or call 0303 123 1113.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">8. Browser Settings</h2>
            <p className="text-[15px] text-[#4B5563] mb-3">
              In addition to our Cookie Settings panel, most browsers allow you to manage cookies directly. Common options include:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li>View all cookies currently stored by your browser</li>
              <li>Block all cookies or cookies from specific websites</li>
              <li>Delete cookies on exit or on demand</li>
              <li>Enable &quot;Do Not Track&quot; or &quot;Global Privacy Control&quot; signals</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mb-3">Browser guidance links</h3>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li><strong className="text-navy">Google Chrome</strong> — support.google.com/chrome/answer/95647</li>
              <li><strong className="text-navy">Mozilla Firefox</strong> — support.mozilla.org (Enhanced Tracking Protection)</li>
              <li><strong className="text-navy">Apple Safari</strong> — support.apple.com/guide/safari</li>
              <li><strong className="text-navy">Microsoft Edge</strong> — support.microsoft.com/microsoft-edge/delete-cookies</li>
            </ul>
            <p className="text-[15px] text-[#4B5563] mb-4">
              For general guidance on managing cookies across all browsers, visit aboutcookies.org.
            </p>

            <div className="bg-orange/5 border border-orange/20 border-l-4 border-l-orange rounded-lg p-4">
              <p className="text-[14px] text-[#4B5563]">
                <strong className="text-navy">Please note:</strong> Disabling all cookies, including essential ones, via your browser settings may prevent parts of AiNavi.co.uk from functioning correctly — including login, payment processing, and AI features.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">9. Policy Changes</h2>
            <p className="text-[15px] text-[#4B5563] mb-3">
              We review and update this Cookie Policy whenever we make changes to how we use cookies — for example, when we add new services, change cookie durations, or in response to regulatory updates such as forthcoming ICO guidance under the Data (Use and Access) Act 2025.
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2">
              <li>Material changes — such as adding a new cookie category or new third-party provider — will prompt a refreshed consent notice on your next visit</li>
              <li>The &quot;Last Updated&quot; date on this policy will always reflect the most recent revision</li>
              <li>Previous versions are archived and available on request</li>
              <li>Where we hold your email address, we may notify you of significant changes by email</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">10. Contact Us</h2>
            <p className="text-[15px] text-[#4B5563] mb-4">
              If you have any questions about this Cookie Policy, want to exercise your rights, or wish to raise a concern, please contact us:
            </p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-6">
              <table className="w-full text-[14px]">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md w-1/3">Email</td>
                    <td className="px-4 py-3 text-[#4B5563]">admin@ainavi.co.uk</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Subject Line</td>
                    <td className="px-4 py-3 text-[#4B5563]">Cookie Policy Enquiry</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Response Time</td>
                    <td className="px-4 py-3 text-[#4B5563]">We aim to respond to all enquiries within 30 calendar days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[15px] text-[#4B5563] mb-4">
              You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO), the UK&apos;s data protection regulator:
            </p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden">
              <table className="w-full text-[14px]">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md w-1/3">ICO Website</td>
                    <td className="px-4 py-3 text-[#4B5563]">ico.org.uk</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">ICO Helpline</td>
                    <td className="px-4 py-3 text-[#4B5563]">0303 123 1113</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[15px] text-[#4B5563] mt-4">
              EU/EEA residents may also contact the data protection authority in their Member State.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
