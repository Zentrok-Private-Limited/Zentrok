// components/StatsAndProof.tsx
export default function StatsAndProof() {
  // Replace logos with your clients in /public/logos/
  const logos = ["/logos/client1.png","/logos/client2.png","/logos/client3.png"];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-bold">Numbers that matter</h3>
            <p className="mt-2 text-sm text-black/70">Proof in performance — not promises.</p>
            <div className="mt-6 flex gap-6">
              <div>
                <div className="text-3xl font-extrabold">120+</div>
                <div className="text-sm text-black/70">Campaigns launched</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">50M+</div>
                <div className="text-sm text-black/70">Impressions delivered</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">30%</div>
                <div className="text-sm text-black/70">Average conversion uplift</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {logos.map((l) => (
              <div key={l} className="w-28 h-12 flex items-center justify-center opacity-80">
                <img src={l} alt="client" className="max-h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
