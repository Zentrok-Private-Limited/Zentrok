// components/MissionValues.tsx
"use client";
import { motion } from "framer-motion";

const values = [
  { title: "Strategy First", desc: "We obsess over the brief, not the trends." },
  { title: "Bold Ideas", desc: "If it’s safe, it’s forgettable. We take calculated risks." },
  { title: "Execution + Data", desc: "Creative with performance baked-in — CRO, scale & analytics." },
];

export default function MissionValues() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Philosophy</h2>
          <p className="text-sm text-black/70 mt-2">
            We don't do 'campaigns' — we build momentum. Strategy, creative and delivery
            that hook culture and convert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-6 border rounded-lg bg-white shadow-sm"
            >
              <h3 className="text-lg font-semibold text-black">{v.title}</h3>
              <p className="mt-3 text-sm text-black/70">{v.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
