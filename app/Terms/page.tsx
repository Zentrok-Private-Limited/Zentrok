import Footer from "@/components/Footer";

export default function TermsConditions() {
  return (
    <>
        <main className="relative text-white min-h-screen px-6 md:px-20 py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/20 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Please read these terms carefully before using our services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          
          <Section title="1. Introduction">
            These Terms & Conditions ("Agreement") govern your use of services provided by <strong>Zentrok Pvt. Ltd.</strong>.
            <br /><br />
            By accessing our website or using our services, you agree to comply with and be bound by these Terms.
          </Section>

          <Section title="2. Services">
            <p className="mb-2">We provide digital marketing services, including:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Management</li>
              <li>Paid Advertising Campaigns</li>
              <li>Content Creation</li>
              <li>Website Development & Design</li>
              <li>Influenecr Marketing</li>
              <li>Astrology</li>
              <li>Staffing</li>
              <li>Remote Technical Support</li>
            </ul>
            <p className="mt-3">
              The exact scope, deliverables, and timelines will be defined in a separate agreement, proposal, or invoice.
            </p>
          </Section>

          <Section title="3. Eligibility">
            <ul className="list-disc ml-5 space-y-2">
              <li>You are at least 18 years old</li>
              <li>You have the authority to enter into this Agreement</li>
            </ul>
          </Section>

          <Section title="4. No Guarantee of Results">
            <p className="mb-2">
              Digital marketing outcomes depend on multiple external factors.
            </p>
            <p className="mb-2">We do not guarantee:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Search engine rankings</li>
              <li>Traffic, leads, or conversions</li>
              <li>Advertising performance or ROI</li>
            </ul>
          </Section>

          <Section title="5. Client Responsibilities">
            <ul className="list-disc ml-5 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Grant access to required platforms</li>
              <li>Approve work in a timely manner</li>
              <li>Ensure compliance with applicable laws</li>
            </ul>
            <p className="mt-3">
              Delays from your side may impact timelines and performance.
            </p>
          </Section>

          <Section title="6. Payments">
            <ul className="list-disc ml-5 space-y-2">
              <li>Fees are outlined in proposals or invoices</li>
              <li>Payments must be made in advance unless agreed otherwise</li>
              <li>Late payments may result in service suspension</li>
              <li>All payments are governed by our Refund Policy</li>
            </ul>
          </Section>

          <Section title="7. Refunds & Cancellations">
            All refunds and cancellations are handled in accordance with our Refund & Cancellation Policy available on our website.
          </Section>

          <Section title="8. Intellectual Property">
            <ul className="list-disc ml-5 space-y-2">
              <li>All work remains our property until full payment is received</li>
              <li>Ownership of final deliverables may transfer after full payment</li>
              <li>We may showcase completed work in our portfolio</li>
            </ul>
          </Section>

          <Section title="9. Confidentiality">
            Both parties agree to keep confidential any non-public business,
            technical, or financial information shared during the engagement.
          </Section>

          <Section title="10. Third-Party Platforms">
            <p className="mb-2">We may use platforms such as:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Google Ads</li>
              <li>Meta</li>
            </ul>
            <p className="mt-3">
              We are not responsible for account suspensions, policy changes,
              algorithm updates, or platform-related issues.
            </p>
          </Section>

          <Section title="11. Limitation of Liability">
            <ul className="list-disc ml-5 space-y-2">
              <li>Indirect or consequential damages</li>
              <li>Loss of revenue, data, or opportunities</li>
              <li>Issues caused by third-party platforms</li>
            </ul>
            <p className="mt-3">
              Our total liability shall not exceed the amount paid for our services.
            </p>
          </Section>

          <Section title="12. Indemnification">
            You agree to indemnify and hold us harmless from any claims or damages arising from:
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Your business activities</li>
              <li>Content you provide</li>
              <li>Violation of laws or third-party rights</li>
            </ul>
          </Section>

          <Section title="13. Termination">
            <p className="mb-2">
              Either party may terminate services with <strong>[15/30 days written notice]</strong>.
            </p>
            <p className="mb-2">We may terminate immediately if:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Terms are violated</li>
              <li>Illegal or unethical activity is detected</li>
            </ul>
            <p className="mt-3">
              Upon termination, all dues must be cleared and completed work will be billed accordingly.
            </p>
          </Section>

          <Section title="14. Force Majeure">
            We are not liable for delays or failure due to events beyond our control,
            including natural disasters, internet failures, or government actions.
          </Section>

          <Section title="15. Changes to Terms">
            We may update these Terms at any time. Continued use of our services
            indicates acceptance of the updated Terms.
          </Section>

          <Section title="16. Governing Law">
            These Terms are governed by the laws of <strong>India</strong>.
          </Section>

          <Section title="17. Related Policies">
            <ul className="list-disc ml-5 space-y-2">
              <li>Privacy Policy</li>
              <li>Refund & Cancellation Policy</li>
              <li>Disclaimer</li>
            </ul>
            <p className="mt-3">
              These policies are available on our website.
            </p>
          </Section>

          <Section title="18. Contact Information">
            <div className="text-sm space-y-1">
              <p>Email: <span className="text-yellow-400">info@zentrok.com</span></p>
              <p>Website: <a href="https://www.zentrok.com" className="text-yellow-400"> www.zentrok.com</a></p>
            </div>
          </Section>

          <Section title="Agreement Confirmation">
            By using our services, you confirm that you have read, understood,
            and agreed to these Terms & Conditions.
          </Section>
        </div>
      </div>

      
    </main>
    <Footer />
    </>
  );
}

/* Section Component */
type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <div className="group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.07] transition-all duration-300 shadow-lg hover:shadow-yellow-500/10">
      
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-yellow-500/10 via-transparent to-transparent" />

      <div className="relative space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
          {title}
        </h2>

        <div className="text-gray-300 leading-relaxed text-sm md:text-base">
          {children}
        </div>

        <div className="w-full h-[1px] bg-white/10 mt-4" />
      </div>
    </div>
  );
}