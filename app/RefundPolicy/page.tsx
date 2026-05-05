import Footer from "@/components/Footer";

export default function RefundPolicy() {
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
            Refund & Cancellation Policy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Please review our refund and cancellation terms carefully before making any payments.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">

          <Section title="1. General Policy">
            All payments made to <strong>Zentrok Pvt. Ltd.</strong> are subject to this Refund & Cancellation Policy.
          </Section>

          <Section title="2. No Refund Policy">
            <ul className="list-disc ml-5 space-y-2">
              <li>Payments for digital marketing services are non-refundable once work has commenced</li>
              <li>This includes strategy, setup, execution, and optimization phases</li>
            </ul>
          </Section>

          <Section title="3. Pre-Service Cancellation">
            <ul className="list-disc ml-5 space-y-2">
              <li>If a project is canceled before work begins, a partial refund may be issued</li>
              <li>Refunds are provided at our discretion</li>
              <li>Administrative and consultation fees will be deducted</li>
            </ul>
          </Section>

          <Section title="4. Ongoing Services (Monthly Retainers)">
            <ul className="list-disc ml-5 space-y-2">
              <li>Clients must provide <strong>[15/30 days]</strong> prior notice for cancellation</li>
              <li>No refunds will be issued for the current billing cycle once work has started</li>
            </ul>
          </Section>

          <Section title="5. Advertising Spend">
            <ul className="list-disc ml-5 space-y-2">
              <li>Budgets allocated to ads (Google Ads, social media ads, etc.) are non-refundable</li>
              <li>These payments are made directly to third-party platforms</li>
            </ul>
          </Section>

          <Section title="6. Third-Party Costs">
            Any fees paid for tools, subscriptions, or external services are non-refundable.
          </Section>

          <Section title="7. Exceptional Cases">
            <ul className="list-disc ml-5 space-y-2">
              <li>Refund requests are evaluated on a case-by-case basis</li>
              <li>If approved, refunds are processed within <strong>7–14 business days</strong></li>
            </ul>
          </Section>

          <Section title="8. Contact for Refunds">
            <p>For any refund or cancellation requests, please contact:</p>
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