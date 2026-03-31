import { Metadata } from 'next';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Navi',
  description: 'Privacy Policy for ainavi.co.uk - Learn how we collect, process, and protect your personal data in compliance with UK GDPR and data protection laws.',
  alternates: {
    canonical: 'https://ainavi.co.uk/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">Last Updated: March 2026</p>
        </div>

        <div className="prose prose-navy max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">1. Introduction and Data Controller Identity</h2>
            <p className="text-[15px] text-[#4B5563] leading-relaxed mb-4">
              This Privacy Policy governs the collection, processing, and protection of personal data by ainavi.co.uk (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting your privacy in accordance with:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li>UK General Data Protection Regulation (UK GDPR)</li>
              <li>Data Protection Act 2018 (DPA 2018)</li>
              <li>Data (Use and Access) Act 2025 (DUAA)</li>
              <li>Privacy and Electronic Communications Regulations 2003 (PECR)</li>
              <li>EU AI Act 2024/1689 (Regulation EU 2024/1689) – applicable obligations</li>
              <li>ICO Guidance on AI and Data Protection (updated under DUAA 2025)</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mb-3">Data Controller:</h3>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-4">
              <table className="w-full text-[14px]">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md w-1/3">Legal Entity</td>
                    <td className="px-4 py-3 text-[#4B5563]">[Your Legal Entity Name] — PLEASE COMPLETE</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Registered in</td>
                    <td className="px-4 py-3 text-[#4B5563]">United Kingdom</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Company Number</td>
                    <td className="px-4 py-3 text-[#4B5563]">[Your Company Number, if applicable]</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Registered Address</td>
                    <td className="px-4 py-3 text-[#4B5563]">[Your Registered Business Address]</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">ICO Registration No.</td>
                    <td className="px-4 py-3 text-[#4B5563]">[Your ICO Registration Number — required if processing personal data]</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Data Protection Contact</td>
                    <td className="px-4 py-3 text-[#4B5563]">admin@ainavi.co.uk</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[14px] text-[#6B7280] italic">
              Note: If you process personal data as a business, you are likely required to register with the ICO. Please ensure your registration is current at ico.org.uk.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">2. Definitions</h2>
            <ul className="space-y-3 text-[15px] text-[#4B5563]">
              <li><strong className="text-navy">Personal Data:</strong> Any information relating to an identified or identifiable individual (e.g. name, ID number, location data, online identifiers).</li>
              <li><strong className="text-navy">Special Category Data:</strong> Sensitive data including racial/ethnic origin, health data, biometric data, etc., subject to heightened protection under UK GDPR Article 9.</li>
              <li><strong className="text-navy">Processing:</strong> Any operation performed on personal data (collection, recording, storage, use, disclosure, deletion).</li>
              <li><strong className="text-navy">Data Controller:</strong> The entity determining purposes and means of processing — that is us.</li>
              <li><strong className="text-navy">Data Processor:</strong> A third party processing data strictly on our behalf.</li>
              <li><strong className="text-navy">Automated Decision-Making (ADM):</strong> Processing that produces decisions based solely on automated means, including profiling.</li>
              <li><strong className="text-navy">AI System:</strong> A machine-based system using AI techniques that can generate outputs such as predictions, recommendations, or decisions, as defined in EU AI Act Article 3.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">3. Data We Collect</h2>

            <h3 className="text-lg font-bold text-navy mb-3">3.1 Data You Provide Directly</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">We collect information when you:</p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li>Register an account (username, contact details — passwords are stored in hashed form only)</li>
              <li>Complete forms (contact requests, surveys, applications)</li>
              <li>Make purchases (billing address; payment details are processed via secure third-party gateways — we do not store card data)</li>
              <li>Subscribe to newsletters (email preferences, consent records)</li>
              <li>Interact with AI features (prompts, queries, feedback you submit)</li>
              <li>Participate in interactive features (comments, reviews)</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mb-3">3.2 Data Collected Automatically</h3>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li><strong className="text-navy">Technical Data:</strong> IP address, browser type and version, device characteristics, operating system</li>
              <li><strong className="text-navy">Usage Data:</strong> Pages visited, time spent, navigation paths, clickstream data, referring URLs</li>
              <li><strong className="text-navy">Cookie Data:</strong> As described in Part 3 (Cookie Policy) of this document</li>
              <li><strong className="text-navy">Location Data:</strong> Approximate geographic location derived from IP address only — we do not collect precise GPS data</li>
              <li><strong className="text-navy">AI Interaction Logs:</strong> Where you use AI-powered features, we may log interactions to ensure safety, quality, and legal compliance</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mb-3">3.3 Data From Third Parties</h3>
            <p className="text-[15px] text-[#4B5563]">
              We may receive data from analytics providers (Google Analytics), advertising networks (Google Ads, Meta Pixel — only with your consent), payment processors (Stripe, PayPal), and social media platforms (only when you choose to connect them). All third-party data sharing is governed by contracts including appropriate data processing agreements.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">4. Lawful Bases and Processing Purposes</h2>
            <p className="text-[15px] text-[#4B5563] mb-4">We process your data under the following UK GDPR Article 6 lawful bases:</p>

            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-6">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ice-md border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-navy">Purpose</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Lawful Basis</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Service delivery</td>
                    <td className="px-4 py-3 text-[#4B5563]">Contractual necessity</td>
                    <td className="px-4 py-3 text-[#4B5563]">Account creation, order processing, support</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Marketing communications</td>
                    <td className="px-4 py-3 text-[#4B5563]">Consent (opt-in required)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Email newsletters, promotional content</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Website analytics</td>
                    <td className="px-4 py-3 text-[#4B5563]">Legitimate interest</td>
                    <td className="px-4 py-3 text-[#4B5563]">Improving user experience and security</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Legal compliance</td>
                    <td className="px-4 py-3 text-[#4B5563]">Legal obligation</td>
                    <td className="px-4 py-3 text-[#4B5563]">Fraud prevention, HMRC tax reporting</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">AI feature operation</td>
                    <td className="px-4 py-3 text-[#4B5563]">Legitimate interest / Contract</td>
                    <td className="px-4 py-3 text-[#4B5563]">AI recommendations, personalisation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#4B5563]">AI safety monitoring</td>
                    <td className="px-4 py-3 text-[#4B5563]">Legal obligation / Legitimate interest</td>
                    <td className="px-4 py-3 text-[#4B5563]">EU AI Act compliance, harm prevention</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[15px] text-[#4B5563] mb-4">
              Where we rely on legitimate interests, we have conducted a Legitimate Interests Assessment (LIA) and determined that our interests do not override your fundamental rights. You have the right to object to processing on this basis at any time.
            </p>
            <p className="text-[15px] text-[#4B5563]">
              <strong className="text-navy">Special Category Data:</strong> We do not intentionally collect special category data. If you choose to share such data, we will seek explicit consent (UK GDPR Article 9(2)(a)) before processing.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">5. AI-Specific Data Processing Disclosures</h2>
            <p className="text-[15px] text-[#4B5563] mb-6">
              In compliance with the EU AI Act and ICO AI Guidance, we disclose the following about our use of AI:
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">5.1 AI Systems We Use</h3>
            <p className="text-[15px] text-[#4B5563] mb-6">
              Where we use AI systems that process your data, we will identify these clearly in the relevant section of our Website. Our AI features are classified under the EU AI Act risk framework. We do not currently operate any High-Risk AI Systems as defined in Annex III of the EU AI Act without implementing the full compliance requirements applicable to those systems.
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">5.2 Automated Decision-Making</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">
              Where any automated decision-making (including profiling) produces legal or similarly significant effects on you, we will:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-4">
              <li>Inform you clearly that such processing is taking place</li>
              <li>Explain the logic, significance, and likely consequences</li>
              <li>Provide you with the right to request human review of the decision</li>
              <li>Allow you to contest the decision and express your point of view</li>
            </ul>
            <p className="text-[15px] text-[#4B5563] mb-6">
              These rights are provided under UK GDPR Article 22 and as updated by the Data (Use and Access) Act 2025, which modified some exemptions to automated decision-making rules. We will not make decisions solely by automated means that have significant effects on you in areas such as creditworthiness, employment, or access to services without meaningful human oversight.
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">5.3 AI Training Data</h3>
            <p className="text-[15px] text-[#4B5563] mb-6">
              We will not use your personal data to train AI or machine learning models without your explicit, separately obtained consent. If we intend to use any data for AI training purposes, we will inform you and obtain your consent in advance.
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">5.4 AI-Generated Outputs and Accuracy</h3>
            <p className="text-[15px] text-[#4B5563]">
              AI-generated content or recommendations presented on this Website may contain inaccuracies. We take steps to monitor output quality and correct errors, but we cannot guarantee the accuracy of AI outputs. You should treat AI-generated content as a starting point, not a definitive answer, and independently verify important information.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">6. Data Sharing and International Transfers</h2>

            <h3 className="text-lg font-bold text-navy mb-3">6.1 Categories of Recipients</h3>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li><strong className="text-navy">IT Service Providers:</strong> Hosting companies, cloud storage providers (under data processing agreements)</li>
              <li><strong className="text-navy">Marketing Platforms:</strong> Email service providers (e.g. Mailchimp) — only with your consent for marketing</li>
              <li><strong className="text-navy">Payment Processors:</strong> Stripe, PayPal (we do not store card details; these processors are PCI-DSS compliant)</li>
              <li><strong className="text-navy">Analytics Providers:</strong> Google Analytics (data shared only where consent is given for performance cookies)</li>
              <li><strong className="text-navy">AI Service Providers:</strong> Third-party AI APIs or platforms we use to deliver features — listed in our AI Transparency Notice (Part 4)</li>
              <li><strong className="text-navy">Professional Advisors:</strong> Accountants, lawyers (under confidentiality obligations)</li>
              <li><strong className="text-navy">Law Enforcement / Regulators:</strong> Where required by law, court order, or regulatory direction</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mb-3">6.2 International Transfers</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">
              Where data is transferred outside the UK or EU/EEA, we implement appropriate safeguards including:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-4">
              <li><strong className="text-navy">UK Adequacy Regulations</strong> — for transfers to countries with an adequacy decision</li>
              <li><strong className="text-navy">Standard Contractual Clauses (SCCs)</strong> — for other transfers</li>
              <li><strong className="text-navy">Transfer Risk Assessments (TRAs)</strong> — conducted where required by ICO guidance</li>
              <li><strong className="text-navy">Binding Corporate Rules (BCRs)</strong> — where applicable for group transfers</li>
            </ul>
            <p className="text-[15px] text-[#4B5563]">
              You may request a copy of the safeguards we use for international transfers by contacting admin@ainavi.co.uk.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">7. Data Retention</h2>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-4">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ice-md border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-navy">Data Type</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Retention Period</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Account data</td>
                    <td className="px-4 py-3 text-[#4B5563]">3 years after last activity</td>
                    <td className="px-4 py-3 text-[#4B5563]">Customer relationship management</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Financial records</td>
                    <td className="px-4 py-3 text-[#4B5563]">7 years</td>
                    <td className="px-4 py-3 text-[#4B5563]">Legal obligation (HMRC)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Marketing consents</td>
                    <td className="px-4 py-3 text-[#4B5563]">2 years after last interaction</td>
                    <td className="px-4 py-3 text-[#4B5563]">Consent renewal per PECR</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Website analytics</td>
                    <td className="px-4 py-3 text-[#4B5563]">26 months (anonymised thereafter)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Business intelligence</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">AI interaction logs</td>
                    <td className="px-4 py-3 text-[#4B5563]">12 months (then anonymised)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Safety monitoring, quality assurance</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#4B5563]">Cookie consent records</td>
                    <td className="px-4 py-3 text-[#4B5563]">3 years</td>
                    <td className="px-4 py-3 text-[#4B5563]">PECR compliance evidence</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[15px] text-[#4B5563]">
              At the end of each retention period, personal data is securely deleted or anonymised. We review retention schedules annually.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">8. Your Rights Under UK GDPR and DUAA 2025</h2>
            <p className="text-[15px] text-[#4B5563] mb-4">
              You have the following rights. To exercise any of them, contact us at admin@ainavi.co.uk. We will respond within 30 calendar days (extendable by up to two further months for complex requests, with notice given):
            </p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-4">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ice-md border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-navy">Right</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-medium">Access (Subject Access Request)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Obtain a copy of your personal data and information about how it is processed</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-medium">Rectification</td>
                    <td className="px-4 py-3 text-[#4B5563]">Correct inaccurate or incomplete data we hold about you</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-medium">Erasure (Right to be Forgotten)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Request deletion of your data (subject to legal retention requirements)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-medium">Restriction of Processing</td>
                    <td className="px-4 py-3 text-[#4B5563]">Limit how we process your data in certain circumstances</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-medium">Data Portability</td>
                    <td className="px-4 py-3 text-[#4B5563]">Receive your data in a structured, machine-readable format</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-medium">Object to Processing</td>
                    <td className="px-4 py-3 text-[#4B5563]">Stop processing for direct marketing or legitimate interests</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-medium">Withdraw Consent</td>
                    <td className="px-4 py-3 text-[#4B5563]">Withdraw consent at any time (without affecting prior lawful processing)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563] font-medium">Human Review of AI Decisions</td>
                    <td className="px-4 py-3 text-[#4B5563]">Request human review of any automated decision with significant effects on you</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#4B5563] font-medium">Complaint to the ICO</td>
                    <td className="px-4 py-3 text-[#4B5563]">Lodge a complaint at ico.org.uk or 0303 123 1113</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[15px] text-[#4B5563]">
              To exercise your rights, submit a request to admin@ainavi.co.uk with proof of identity and details of your request. There is no charge for most requests. We may decline requests that are manifestly unfounded or excessive.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">9. Security Measures</h2>
            <p className="text-[15px] text-[#4B5563] mb-3">
              We implement appropriate technical and organisational security measures including:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-4">
              <li><strong className="text-navy">Technical:</strong> Encryption in transit (TLS 1.3), encryption at rest for sensitive data, firewalls, regular security assessments</li>
              <li><strong className="text-navy">Organisational:</strong> Staff training, role-based access controls, data minimisation, need-to-know policies</li>
              <li><strong className="text-navy">Procedural:</strong> Incident response plan, regular backups, Data Protection Impact Assessments (DPIAs) for high-risk processing</li>
              <li><strong className="text-navy">AI-Specific:</strong> Output monitoring, human oversight mechanisms for AI systems, regular bias audits where applicable</li>
            </ul>
            <p className="text-[15px] text-[#4B5563]">
              In the event of a personal data breach that poses a risk to your rights and freedoms, we will notify the ICO within 72 hours and, where required, notify affected individuals without undue delay.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">10. Children&apos;s Data Protection</h2>
            <p className="text-[15px] text-[#4B5563]">
              We do not knowingly collect personal data from children under 13 without verifiable parental or guardian consent. Where our services are directed at or likely to be accessed by children, we apply the ICO&apos;s Children&apos;s Code (Age Appropriate Design Code) standards. If you believe we have collected data about a child without appropriate consent, please contact us immediately at admin@ainavi.co.uk.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">11. Data Protection Impact Assessments (DPIAs)</h2>
            <p className="text-[15px] text-[#4B5563]">
              In line with UK GDPR Article 35 and ICO guidance, we conduct DPIAs before introducing new processing activities likely to result in high risk to individuals — including the deployment of new AI features, large-scale data processing, or systematic profiling. Records of our DPIAs are maintained and made available to the ICO on request.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">12. Policy Updates</h2>
            <p className="text-[15px] text-[#4B5563]">
              We will post policy changes on this page with a new &quot;Last Updated&quot; date. For material changes affecting your rights, we will notify users via email where we hold your contact details. Previous versions are archived and available on request.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">13. Contact and Complaints</h2>
            <p className="text-[15px] text-[#4B5563] mb-4">For data protection queries or to exercise your rights:</p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-4">
              <table className="w-full text-[14px]">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md w-1/3">Email</td>
                    <td className="px-4 py-3 text-[#4B5563]">admin@ainavi.co.uk</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Supervisory Authority</td>
                    <td className="px-4 py-3 text-[#4B5563]">Information Commissioner&apos;s Office (ICO)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">ICO Website</td>
                    <td className="px-4 py-3 text-[#4B5563]">ico.org.uk</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">ICO Helpline</td>
                    <td className="px-4 py-3 text-[#4B5563]">0303 123 1113</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[15px] text-[#4B5563]">
              EU/EEA residents may also contact the relevant data protection authority in their Member State.
            </p>
          </section>

          {/* Part 3: Cookie Policy */}
          <section className="mb-12 pt-8 border-t border-border">
            <h2 className="text-3xl font-bold text-navy mb-2">Part 3: Cookie Policy</h2>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: March 2026</p>
            <p className="text-[15px] text-[#4B5563] mb-6">
              This Cookie Policy explains how ainavi.co.uk uses cookies and similar tracking technologies on our Website, in compliance with the Privacy and Electronic Communications Regulations (PECR) and the ICO&apos;s guidance on cookies and similar technologies (updated under DUAA 2025).
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">1. What Are Cookies?</h3>
            <p className="text-[15px] text-[#4B5563] mb-6">
              Cookies are small text files placed on your device when you visit a website. They help websites function correctly, remember your preferences, and provide information to website owners. Similar technologies include web beacons, pixel tags, and local storage objects.
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">2. How We Use Cookies</h3>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-6 overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ice-md border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-navy">Category</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Purpose</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Examples</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Consent Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Essential / Strictly Necessary</td>
                    <td className="px-4 py-3 text-[#4B5563]">Core website functionality, security, user sessions</td>
                    <td className="px-4 py-3 text-[#4B5563]">Session cookies, login security, CSRF protection</td>
                    <td className="px-4 py-3 text-[#4B5563]">No — these cannot be turned off</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Performance / Analytics</td>
                    <td className="px-4 py-3 text-[#4B5563]">Understanding how users interact with the site to improve it</td>
                    <td className="px-4 py-3 text-[#4B5563]">Google Analytics (IP anonymisation enabled)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Yes — opt-in required</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Functional</td>
                    <td className="px-4 py-3 text-[#4B5563]">Remembering your preferences for an enhanced experience</td>
                    <td className="px-4 py-3 text-[#4B5563]">Language preferences, display settings</td>
                    <td className="px-4 py-3 text-[#4B5563]">Yes — opt-in required</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Targeting / Advertising</td>
                    <td className="px-4 py-3 text-[#4B5563]">Showing relevant advertising and measuring ad effectiveness</td>
                    <td className="px-4 py-3 text-[#4B5563]">Google Ads, Meta Pixel (Facebook)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Yes — opt-in required</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#4B5563]">AI Feature Cookies</td>
                    <td className="px-4 py-3 text-[#4B5563]">Supporting AI-powered features and personalisation</td>
                    <td className="px-4 py-3 text-[#4B5563]">AI session context, recommendation preferences</td>
                    <td className="px-4 py-3 text-[#4B5563]">Yes — opt-in required</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-navy mb-3">3. Consent Management</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">
              In accordance with PECR and ICO guidance, we operate a cookie consent mechanism that:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-4">
              <li>Requires a clear, affirmative action (&quot;opt-in&quot;) before setting any non-essential cookies</li>
              <li>Presents equally prominent Accept and Reject options — we do not use dark patterns</li>
              <li>Provides granular controls by cookie category</li>
              <li>Allows you to change your preferences at any time via the Cookie Settings link in our website footer</li>
              <li>Records a timestamp and reference for your consent, retained for 3 years as evidence of compliance</li>
              <li>Does not use pre-ticked boxes, nudging language, or consent walls that deny access if you decline</li>
            </ul>
            <p className="text-[15px] text-[#4B5563] mb-6">
              Note: Withdrawing consent for non-essential cookies will not affect your ability to use the core features of our Website. Some features powered by third-party services may be unavailable if you decline those cookies.
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">4. Third-Party Cookies</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">
              Some cookies on our Website are set by third-party services. We have no direct control over these cookies. Third-party providers include:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-4">
              <li><strong className="text-navy">Google Analytics</strong> — analytics; see Google&apos;s Privacy Policy at policies.google.com/privacy</li>
              <li><strong className="text-navy">Google Ads</strong> — advertising (consent required); see Google&apos;s Privacy Policy</li>
              <li><strong className="text-navy">Meta (Facebook) Pixel</strong> — advertising (consent required); see Meta&apos;s Data Policy</li>
              <li><strong className="text-navy">Stripe / PayPal</strong> — payment processing (essential for transactions)</li>
            </ul>
            <p className="text-[15px] text-[#4B5563] mb-6">
              Where third-party cookies involve transfers outside the UK, appropriate safeguards (see Privacy Policy Section 6.2) are in place.
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">5. Managing and Deleting Cookies</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">
              In addition to our consent tool, you can manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-4">
              <li>View, block, or delete cookies</li>
              <li>Set preferences for specific websites</li>
              <li>Enable &quot;Do Not Track&quot; signals</li>
            </ul>
            <p className="text-[15px] text-[#4B5563] mb-6">
              Note that disabling all cookies, including essential ones, may prevent parts of our Website from functioning correctly. For guidance on managing cookies in your browser, visit aboutcookies.org.
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">6. Cookie Policy Updates</h3>
            <p className="text-[15px] text-[#4B5563]">
              We will update this Cookie Policy when we add new cookies or change how we use existing ones. Material changes will be reflected in an updated &quot;Last Updated&quot; date and, where your consent is affected, you will be presented with a refreshed consent notice.
            </p>
          </section>

          {/* Part 4: AI Transparency Notice */}
          <section className="mb-12 pt-8 border-t border-border">
            <h2 className="text-3xl font-bold text-navy mb-2">Part 4: AI Transparency Notice</h2>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: March 2026</p>
            <p className="text-[15px] text-[#4B5563] italic mb-6">
              This Notice is provided in compliance with EU AI Act (Regulation 2024/1689), UK GDPR Article 22, ICO Guidance on AI and Data Protection, and the Data (Use and Access) Act 2025. It discloses how artificial intelligence is used on this Website and what rights you have in relation to AI-driven processes.
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">1. Our Use of AI</h3>
            <p className="text-[15px] text-[#4B5563] mb-4">
              ainavi.co.uk is an AI navigation and information website. We use artificial intelligence in the following ways:
            </p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-6 overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ice-md border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-navy">AI Feature</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Description</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">EU AI Act Risk Classification</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Personal Data Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">AI Content Recommendations</td>
                    <td className="px-4 py-3 text-[#4B5563]">Suggesting relevant content based on browsing behaviour</td>
                    <td className="px-4 py-3 text-[#4B5563]">Minimal Risk</td>
                    <td className="px-4 py-3 text-[#4B5563]">Usage data, preferences (with consent)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">AI Chatbot / Assistant</td>
                    <td className="px-4 py-3 text-[#4B5563]">Answering user questions and providing navigation assistance</td>
                    <td className="px-4 py-3 text-[#4B5563]">Limited Risk (transparency obligations apply)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Queries submitted; no sensitive data stored</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Automated Content Generation</td>
                    <td className="px-4 py-3 text-[#4B5563]">AI-assisted generation of informational content</td>
                    <td className="px-4 py-3 text-[#4B5563]">Minimal Risk</td>
                    <td className="px-4 py-3 text-[#4B5563]">None (content-level only)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#4B5563]">Analytics &amp; Personalisation</td>
                    <td className="px-4 py-3 text-[#4B5563]">Understanding user needs to improve the service</td>
                    <td className="px-4 py-3 text-[#4B5563]">Minimal Risk</td>
                    <td className="px-4 py-3 text-[#4B5563]">Anonymised usage data</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[15px] text-[#4B5563] mb-6">
              We do not currently operate any AI system classified as High-Risk under EU AI Act Annex III (such as AI in recruitment, credit scoring, law enforcement, or critical infrastructure) without the full compliance measures those classifications require.
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">2. Prohibited AI Practices — Our Commitments</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">
              As required by EU AI Act Article 5 (applicable from 2 February 2025), we confirm that we do not use and will never use:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li>AI systems that use subliminal or deceptive techniques to manipulate user behaviour in harmful ways</li>
              <li>AI systems that exploit vulnerabilities of individuals based on age, disability, or socio-economic circumstances</li>
              <li>AI-powered social scoring systems that evaluate or classify people in ways that could cause harm</li>
              <li>Real-time remote biometric identification systems in publicly accessible spaces</li>
              <li>AI systems that make inferences about protected characteristics (race, political opinions, religion, biometric data) for profiling</li>
              <li>AI-generated deepfakes presented as real without clear disclosure</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mb-3">3. AI Transparency Obligations (EU AI Act Article 50)</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">
              For AI systems that interact directly with users (such as chatbots or AI assistants), we comply with Article 50 transparency obligations:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li>You will always be clearly informed when you are interacting with an AI system rather than a human.</li>
              <li>AI-generated text, images, audio, or video content will be labelled or disclosed as AI-generated where this is material to your understanding.</li>
              <li>We will not deploy AI systems designed to pass as human without clear disclosure.</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mb-3">4. Third-Party AI Services</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">
              We may use third-party AI APIs or platforms to deliver features on this Website. Where we do so:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-4">
              <li>We have entered into appropriate data processing agreements with those providers.</li>
              <li>We have assessed their compliance with relevant data protection and AI regulations.</li>
              <li>We will update this notice if we add new AI services that process your personal data.</li>
            </ul>
            <p className="text-[15px] text-[#4B5563] mb-6">
              Current third-party AI providers used: [List specific AI APIs/services used — e.g., OpenAI, Anthropic, Google AI — PLEASE COMPLETE].
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">5. AI and Data Protection</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">
              Our use of AI complies with the following data protection principles as applied to AI by the ICO:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li><strong className="text-navy">Lawfulness, Fairness, and Transparency:</strong> We disclose AI use clearly and only process data for AI on a valid lawful basis.</li>
              <li><strong className="text-navy">Purpose Limitation:</strong> Data collected for one purpose will not be repurposed for AI training without your consent.</li>
              <li><strong className="text-navy">Data Minimisation:</strong> We use the minimum data necessary for AI features to function.</li>
              <li><strong className="text-navy">Accuracy:</strong> We monitor AI outputs for accuracy and take steps to correct errors affecting individuals.</li>
              <li><strong className="text-navy">Bias Mitigation:</strong> We assess our AI systems for potential discriminatory outcomes and take corrective action where disparities are identified.</li>
              <li><strong className="text-navy">Human Oversight:</strong> Meaningful human oversight is maintained for AI decisions that could significantly affect you.</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mb-3">6. Your Rights in Relation to AI</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">
              In addition to the rights listed in the Privacy Policy (Part 2), you have the following specific rights in relation to AI processing:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-4">
              <li><strong className="text-navy">Right to be Informed:</strong> You have the right to know when and how AI is being used in relation to you.</li>
              <li><strong className="text-navy">Right to Human Review:</strong> For any automated decision that produces significant effects, you may request that the decision be reviewed by a human with genuine authority to overturn it.</li>
              <li><strong className="text-navy">Right to Explanation:</strong> You may request a meaningful explanation of how an AI decision affecting you was made.</li>
              <li><strong className="text-navy">Right to Contest:</strong> You may contest AI-based decisions that you believe are wrong or unfair.</li>
              <li><strong className="text-navy">Right to Object:</strong> You may object to automated profiling at any time.</li>
            </ul>
            <p className="text-[15px] text-[#4B5563] mb-6">
              To exercise these rights, please contact admin@ainavi.co.uk with the subject line &quot;AI Rights Request&quot;.
            </p>

            <h3 className="text-lg font-bold text-navy mb-3">7. AI Governance</h3>
            <p className="text-[15px] text-[#4B5563] mb-3">
              We are committed to responsible AI governance:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-6">
              <li>We conduct AI impact assessments before deploying new AI systems or significantly changing existing ones.</li>
              <li>We maintain records of AI systems in use, their purposes, and the data they process.</li>
              <li>We review this AI Transparency Notice at least annually and after any material change to our AI use.</li>
              <li>We monitor developments in UK and EU AI regulation and update our practices accordingly.</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mb-3">8. Contact for AI-Related Queries</h3>
            <p className="text-[15px] text-[#4B5563] mb-4">
              For questions about our use of AI, to exercise AI-related rights, or to report concerns about AI outputs:
            </p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-4">
              <table className="w-full text-[14px]">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md w-1/3">Email</td>
                    <td className="px-4 py-3 text-[#4B5563]">admin@ainavi.co.uk</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Subject Line</td>
                    <td className="px-4 py-3 text-[#4B5563]">AI Transparency / AI Rights Request</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Response Time</td>
                    <td className="px-4 py-3 text-[#4B5563]">30 calendar days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[15px] text-[#4B5563]">
              You may also raise concerns with the Information Commissioner&apos;s Office (ICO) at ico.org.uk or 0303 123 1113.
            </p>
          </section>

          {/* Appendix */}
          <section className="mb-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-navy mb-4">Appendix: Compliance Reference Summary</h2>
            <p className="text-[15px] text-[#4B5563] mb-4">
              This appendix provides a quick-reference overview of the key legislation and guidance reflected in this document.
            </p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden mb-6 overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ice-md border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-navy">Law / Regulation</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Jurisdiction</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Key Obligations Addressed</th>
                    <th className="px-4 py-3 text-left font-bold text-navy">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">UK GDPR</td>
                    <td className="px-4 py-3 text-[#4B5563]">United Kingdom</td>
                    <td className="px-4 py-3 text-[#4B5563]">Lawful bases, rights, DPIAs, security</td>
                    <td className="px-4 py-3 text-[#4B5563]">In force</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Data Protection Act 2018</td>
                    <td className="px-4 py-3 text-[#4B5563]">United Kingdom</td>
                    <td className="px-4 py-3 text-[#4B5563]">Supplements UK GDPR; enforcement</td>
                    <td className="px-4 py-3 text-[#4B5563]">In force</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Data (Use and Access) Act 2025</td>
                    <td className="px-4 py-3 text-[#4B5563]">United Kingdom</td>
                    <td className="px-4 py-3 text-[#4B5563]">ADM reforms, research provisions, AI code of practice</td>
                    <td className="px-4 py-3 text-[#4B5563]">In force (phased: Jun 2025–Jun 2026)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">PECR 2003</td>
                    <td className="px-4 py-3 text-[#4B5563]">United Kingdom</td>
                    <td className="px-4 py-3 text-[#4B5563]">Cookies, electronic marketing, consent</td>
                    <td className="px-4 py-3 text-[#4B5563]">In force</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">EU AI Act 2024/1689</td>
                    <td className="px-4 py-3 text-[#4B5563]">EU/EEA (extra-territorial for UK sites serving EU users)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Prohibited practices (Feb 2025), GPAI obligations (Aug 2025), High-risk (Aug 2026)</td>
                    <td className="px-4 py-3 text-[#4B5563]">Phased implementation</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-[#4B5563]">Consumer Rights Act 2015</td>
                    <td className="px-4 py-3 text-[#4B5563]">United Kingdom</td>
                    <td className="px-4 py-3 text-[#4B5563]">Liability limitations, unfair terms</td>
                    <td className="px-4 py-3 text-[#4B5563]">In force</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#4B5563]">Copyright, Designs &amp; Patents Act 1988</td>
                    <td className="px-4 py-3 text-[#4B5563]">United Kingdom</td>
                    <td className="px-4 py-3 text-[#4B5563]">IP ownership, AI-generated content</td>
                    <td className="px-4 py-3 text-[#4B5563]">In force</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Legal Disclaimer */}
          <section className="bg-orange/5 border border-orange/20 border-l-4 border-l-orange rounded-lg p-6">
            <h3 className="text-lg font-bold text-navy mb-3">Legal Disclaimer</h3>
            <p className="text-[14px] text-[#4B5563] leading-relaxed">
              This document has been prepared to incorporate current UK and EU data protection and AI regulatory requirements as of March 2026. It is provided for guidance purposes and does not constitute legal advice. Laws and regulatory guidance are subject to change. You should seek independent legal advice to ensure this document is appropriate for your specific circumstances, business model, and technical infrastructure.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
