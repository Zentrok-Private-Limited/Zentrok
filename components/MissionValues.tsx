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
  // We still call useTheme to ensure theme context is available (SSR-safe)
  useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="py-16 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-5xl sm:text-5xl font-bold transition-colors duration-500"
            style={{ color: "var(--text-on-surface)" }}
          >
            Our Philosophy
          </h2>
          <p
            className="font-bold mt-5 transition-colors duration-500"
            style={{ color: "var(--text-on-surface)" }}
          >
            We don&apos;t do &apos;campaigns&apos; — we build momentum. Strategy, creative, and delivery
            that hook culture and convert.
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
              className="p-6 border rounded-lg shadow-sm transition-colors duration-500"
              style={{
                backgroundColor: "var(--bg-on-surface)",
                borderColor: "rgba(0,0,0,0.1)",
                color: "var(--text-on-surface)",
              }}
            >
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm">{v.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
