import { Metadata } from 'next';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use | AI Navi',
  description: 'Terms of Use for ainavi.co.uk - Read our terms and conditions governing access to and use of our website and services.',
  alternates: {
    canonical: 'https://ainavi.co.uk/terms-of-use',
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-muted-foreground">Last Updated: March 2026</p>
        </div>

        <div className="prose prose-navy max-w-none">
          <p className="text-[15px] text-[#4B5563] leading-relaxed mb-8">
            These Terms of Use (&quot;Terms&quot;) govern your access to and use of the website ainavi.co.uk (&quot;Website&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using this Website, you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) agree to be legally bound by these Terms. If you do not agree with any part of these Terms, you must not use this Website.
          </p>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">1. Acceptance of Terms</h2>
            <p className="text-[15px] text-[#4B5563] mb-3">By using this Website, you confirm that:</p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2">
              <li>You are at least 18 years old or have obtained verifiable parental or guardian consent.</li>
              <li>You will comply with all applicable UK and EU laws and regulations, including but not limited to the UK GDPR, Data Protection Act 2018, and Data (Use and Access) Act 2025.</li>
              <li>You will not use the Website for any unlawful, fraudulent, or harmful activities.</li>
              <li>You have read and understood our Privacy Policy, Cookie Policy, and AI Transparency Notice contained in this document.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">2. Changes to Terms</h2>
            <p className="text-[15px] text-[#4B5563]">
              We reserve the right to modify these Terms at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. For material changes, we will provide reasonable advance notice where feasible. Your continued use of the Website after changes constitutes acceptance of the revised Terms. We recommend you review this page periodically.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">3. Access and Account Security</h2>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-3">
              <li>If the Website allows account creation, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.</li>
              <li>You must promptly update any information that changes. Providing false information may result in termination of your account.</li>
              <li>We may suspend or terminate access without notice if you violate these Terms, engage in misuse, or if required by law.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">4. Intellectual Property Rights</h2>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-3">
              <li>All content on this Website (including text, graphics, logos, software, and trademarks) is owned by ainavi.co.uk or its licensors and is protected under the Copyright, Designs and Patents Act 1988 and international copyright laws.</li>
              <li>Where content is generated or assisted by artificial intelligence, this will be clearly indicated in accordance with our obligations under EU AI Act Article 50 transparency requirements.</li>
              <li>You may view, download (for caching only), and print pages for personal, non-commercial use only.</li>
              <li>You must not republish, sell, or redistribute content without our written permission; use automated tools (e.g., scraping, data mining, AI training) without explicit consent; remove copyright notices; or use our content to train AI/machine learning models without a separate written licence.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">5. Use of Artificial Intelligence Features</h2>
            <p className="text-[15px] text-[#4B5563] mb-3">
              Where this Website uses or incorporates AI-powered features (including AI assistants, recommendation systems, or automated content):
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-3">
              <li>You will be informed clearly when you are interacting with an AI system, in compliance with EU AI Act Article 50.</li>
              <li>Our AI features are assessed and classified in accordance with the EU AI Act risk framework. We do not deploy any prohibited AI practices as defined in Article 5 of EU AI Act (applicable from 2 February 2025), including manipulative AI, exploitative AI targeting vulnerabilities, or social scoring.</li>
              <li>Decisions that significantly affect you will not be made solely by automated means without appropriate human oversight, in line with UK GDPR Article 22, as amended by the Data (Use and Access) Act 2025.</li>
              <li>AI-generated outputs may contain errors or inaccuracies. You should independently verify important information. We do not warrant the accuracy, completeness, or suitability of AI-generated content.</li>
              <li>If you believe an AI output about you is inaccurate or harmful, you may contact us to request review and correction.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">6. User-Generated Content</h2>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-3">
              <li>You retain ownership of content you submit but grant us a non-exclusive, royalty-free, worldwide licence to use, modify, and display such content for the purpose of operating and improving this Website.</li>
              <li>We will not use your personal data or user-generated content to train AI models without your explicit, separate consent.</li>
              <li>You must not post illegal, defamatory, infringing, or harmful material. We reserve the right to remove any content without notice.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">7. Privacy and Data Protection</h2>
            <p className="text-[15px] text-[#4B5563] mb-3">
              Our Privacy Policy explains in full how we collect, use, and protect your data in compliance with:
            </p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2 mb-4">
              <li>UK General Data Protection Regulation (UK GDPR)</li>
              <li>Data Protection Act 2018</li>
              <li>Data (Use and Access) Act 2025 (DUAA)</li>
              <li>Privacy and Electronic Communications Regulations (PECR)</li>
              <li>EU AI Act 2024/1689 (where applicable to EU/EEA users)</li>
            </ul>
            <p className="text-[15px] text-[#4B5563]">
              You have rights under UK data protection laws, including accessing, correcting, or deleting your data, objecting to processing, and lodging a complaint with the Information Commissioner&apos;s Office (ICO) at ico.org.uk or by calling 0303 123 1113.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">8. Disclaimers and Limitation of Liability</h2>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-3 mb-4">
              <li>The Website is provided &quot;as is&quot; without guarantees of accuracy, completeness, or uninterrupted service.</li>
              <li>Any AI-assisted recommendations or outputs are for informational purposes only and do not constitute professional advice (legal, financial, medical, or otherwise).</li>
              <li>We are not responsible for external links or third-party services, including third-party AI services integrated into this Website.</li>
              <li>Under the Consumer Rights Act 2015, our liability is limited to foreseeable damages. We exclude liability for indirect, consequential, or punitive damages; loss of data, profits, or business opportunities; events beyond our reasonable control; and harms arising from your reliance on AI-generated outputs without independent verification.</li>
            </ul>
            <p className="text-[15px] text-[#4B5563]">
              Nothing in these Terms excludes or limits liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded under applicable UK law.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">9. Prohibited Activities</h2>
            <p className="text-[15px] text-[#4B5563] mb-3">You must not:</p>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2">
              <li>Use the Website for illegal purposes, including fraud, harassment, or discrimination.</li>
              <li>Introduce malware, spam, or harmful code.</li>
              <li>Attempt unauthorised access to our systems.</li>
              <li>Use the Website to train, test, or benchmark AI systems without written permission.</li>
              <li>Attempt to reverse-engineer or extract AI models or algorithms used on this Website.</li>
              <li>Use the Website to facilitate any AI practice prohibited under EU AI Act Article 5, including social manipulation, exploitation of vulnerable individuals, or real-time biometric surveillance.</li>
              <li>Violate any applicable UK or EU laws.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">10. Termination</h2>
            <p className="text-[15px] text-[#4B5563]">
              We may terminate or restrict your access at any time for violations of these Terms or as required by law, including regulatory directions from the ICO or other competent authorities.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">11. Governing Law and Dispute Resolution</h2>
            <ul className="list-disc pl-6 text-[15px] text-[#4B5563] space-y-2">
              <li>These Terms are governed by the law of England and Wales.</li>
              <li>Any disputes will be resolved in the courts of England and Wales.</li>
              <li>For EU/EEA residents, mandatory consumer protection rights under applicable EU law are not affected by this clause.</li>
              <li>We encourage users to contact us in the first instance to resolve any disputes informally at admin@ainavi.co.uk.</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">12. Contact Information</h2>
            <p className="text-[15px] text-[#4B5563] mb-4">For questions about these Terms, please contact:</p>
            <div className="bg-ice rounded-lg border border-border overflow-hidden">
              <table className="w-full text-[14px]">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md w-1/3">Email</td>
                    <td className="px-4 py-3 text-[#4B5563]">admin@ainavi.co.uk</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Website</td>
                    <td className="px-4 py-3 text-[#4B5563]">ainavi.co.uk</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Version</td>
                    <td className="px-4 py-3 text-[#4B5563]">3.0</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Last Updated</td>
                    <td className="px-4 py-3 text-[#4B5563]">March 2026</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Applicable Law</td>
                    <td className="px-4 py-3 text-[#4B5563]">UK GDPR, DPA 2018, DUAA 2025, PECR, EU AI Act 2024/1689</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-navy bg-ice-md">Contact</td>
                    <td className="px-4 py-3 text-[#4B5563]">admin@ainavi.co.uk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
