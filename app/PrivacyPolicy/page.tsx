// app/privacy-policy/page.tsx
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
            Your Privacy Matters
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            We believe in transparency and trust. This policy explains how we
            collect, use, and safeguard your information when you interact with our platform.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <Section title="1. Introduction">
            We are committed to protecting your personal data and respecting your privacy.
            This Privacy Policy outlines how your information is collected, used, and protected
            when you use our website and services.
          </Section>

          <Section title="2. Information We Collect">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="mb-3 text-lg font-semibold text-white">
                  Personal Information
                </p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Business or company details</li>
                  <li>IP address and device/browser information</li>
                  <li>Usage data, cookies, and interaction behavior</li>
                </ul>
              </div>

              <div>
                <p className="mb-3 text-lg font-semibold text-white">
                  Non-Personal Information
                </p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and session duration</li>
                  <li>General analytics data</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="3. How We Use Your Data">
            <ul className="list-disc ml-5 space-y-2">
              <li>To provide and improve our services</li>
              <li>To communicate updates, support, and offers</li>
              <li>To enhance user experience and performance</li>
              <li>To run marketing and advertising campaigns</li>
              <li>To analyze trends and optimize our platform</li>
            </ul>
          </Section>

          <Section title="4. Sharing of Information">
            <p className="font-medium text-white">
              We do not sell your personal data.
            </p>
            <ul className="list-disc ml-5 mt-3 space-y-2">
              <li>Trusted third-party tools (analytics, ads, CRM)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </Section>

          <Section title="5. Third-Party Services">
            <p className="mb-3">
              Our services may integrate with trusted platforms such as:
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Google (Analytics & Advertising)</li>
              <li>Meta (Facebook & Instagram Ads)</li>
            </ul>
            <p className="mt-3 text-sm text-gray-400">
              These platforms operate under their own privacy policies, and we encourage you to review them.
            </p>
          </Section>

          <Section title="6. Data Security">
            We implement industry-standard security measures to protect your data.
            However, no digital system is completely secure, and we cannot guarantee absolute protection.
          </Section>

          <Section title="7. Your Rights">
            <p className="mb-2">
              Depending on applicable laws, you may have the right to:
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Access the data we hold about you</li>
              <li>Request corrections or deletion</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3 text-sm">
              To exercise your rights, contact us at{" "}
              <span className="text-yellow-400">info@zentrok.com</span>
            </p>
          </Section>

          <Section title="8. Data Retention">
            We retain your information only for as long as necessary to fulfill
            business, legal, or operational requirements.
          </Section>

          <Section title="9. Children’s Privacy">
            Our services are not intended for individuals under the age of 18,
            and we do not knowingly collect data from minors.
          </Section>

          <Section title="10. Changes to This Policy">
            We may update this Privacy Policy periodically. Any changes will be
            reflected on this page with updated information.
          </Section>

          <Section title="11. Contact Us">
            <p>
              Have questions or concerns?
            </p>
            <div className="mt-3 space-y-1 text-sm">
              <p>Email: <span className="text-yellow-400">info@zentrok.com</span></p>
              <p>Website: <a href="https://www.zentrok.com" className="text-yellow-400">www.zentrok.com</a></p>
            </div>
          </Section>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

/* Section Component */
function Section({ title, children }: any) {
  return (
    <div className="group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.07] transition-all duration-300 shadow-lg hover:shadow-yellow-500/10">
      
      {/* Glow Hover Effect */}
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