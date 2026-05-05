import Footer from "@/components/Footer";

export default function Disclaimer() {
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
            Disclaimer
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Please read this disclaimer carefully before using our services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">

          <Section title="1. General Disclaimer">
            The information and services provided by <strong>Zentrok Pvt. Ltd.</strong> are for general business and marketing purposes only.
          </Section>

          <Section title="2. No Guarantees">
            <ul className="list-disc ml-5 space-y-2">
              <li>Search engine rankings</li>
              <li>Website traffic</li>
              <li>Leads, conversions, or sales</li>
            </ul>
            <p className="mt-3">
              Digital marketing results depend on multiple factors including competition,
              industry trends, and platform algorithms.
            </p>
          </Section>

          <Section title="3. Professional Advice">
            <p className="mb-2">Our services and content do not constitute:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Legal advice</li>
              <li>Financial advice</li>
              <li>Business guarantees</li>
            </ul>
            <p className="mt-3">
              Clients are advised to seek appropriate professional guidance where necessary.
            </p>
          </Section>

          <Section title="4. Third-Party Platforms">
            <p className="mb-2">We work with platforms such as:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Google Ads</li>
              <li>Meta (Facebook & Instagram)</li>
            </ul>
            <p className="mt-3">
              We are not responsible for account suspensions, policy changes,
              algorithm updates, or platform-related errors.
            </p>
          </Section>

          <Section title="5. Limitation of Liability">
            <ul className="list-disc ml-5 space-y-2">
              <li>Any direct or indirect losses</li>
              <li>Business interruptions</li>
              <li>Loss of profits or revenue</li>
            </ul>
            <p className="mt-3">
              Use of our services is entirely at your own risk.
            </p>
          </Section>

          <Section title="6. External Links">
            Our website may contain links to third-party websites. We are not responsible
            for their content, accuracy, or privacy practices.
          </Section>

          <Section title="7. Consent">
            By using our website and services, you agree to this Disclaimer.
          </Section>

          <Section title="8. Contact">
            <p>For any questions or concerns:</p>
            <div className="mt-3 text-sm">
              <p>Email: <span className="text-yellow-400">info@zentrok.com</span></p>
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
type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
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