"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const values = [
  { title: "Strategy First", desc: "We obsess over the brief, not the trends." },
  { title: "Bold Ideas", desc: "If it's safe, it's forgettable. We take calculated risks." },
  { title: "Execution + Data", desc: "Creative with performance baked-in — CRO, scale & analytics." },
];

export default function MissionValues() {
  // Hydrate theme context (Next Themes)
  useTheme();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <section className="py-16 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl sm:text-5xl font-bold text-[var(--sun)]">
            Our Philosophy
          </h2>
          <p className="font-medium mt-5 text-[var(--amber)]">
            We don&apos;t do &apos;campaigns&apos; — we build momentum. Strategy, creative, and
            delivery that hook culture and convert.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="p-6 rounded-2xl shadow-md border border-[var(--grid-major)] bg-[var(--surface-1000)] backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]"
            >
              <h3 className="text-lg font-semibold mb-2 text-[var(--sun)]">
                {v.title}
              </h3>
              <p className="text-sm text-[var(--foreground)] opacity-80">
                {v.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
