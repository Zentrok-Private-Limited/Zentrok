"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useTheme } from "next-themes";

export default function StatsAndProof() {
  // Hydrate theme context
  useTheme();

  const [isMounted, setIsMounted] = useState(false);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const stats = [
    { label: "Campaigns launched", value: 120, suffix: "+" },
    { label: "Impressions delivered", value: 50000, suffix: "+" },
    { label: "Average conversion uplift", value: 30, suffix: "%" },
  ];

  return (
    <section
      className="py-12 transition-colors duration-500 flex justify-center items-center"
      onMouseEnter={() => setTrigger(true)}
    >
      <div className="max-w-6xl w-full px-6 text-center">
        {/* Heading */}
        <h3 className="text-4xl font-bold" style={{ color: "var(--sun)" }}>
          Numbers that matter
        </h3>
        <p className="mt-2 text-sm font-medium" style={{ color: "var(--amber)" }}>
          Proof in performance — not promises.
        </p>

        {/* Stats */}
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center rounded-2xl shadow-md px-6 py-4 backdrop-blur-sm border"
              style={{
                backgroundColor: "var(--surface-900)",
                borderColor: "var(--honey)",
              }}
            >
              <div className="text-3xl font-extrabold" style={{ color: "var(--sun)" }}>
                <CountUp
                  start={0}
                  end={trigger ? stat.value : 0}
                  duration={1.5}
                  separator=","
                  suffix={stat.suffix}
                  redraw
                />
              </div>
              <div className="text-sm font-medium" style={{ color: "var(--amber)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
