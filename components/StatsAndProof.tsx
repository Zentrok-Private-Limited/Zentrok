"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useTheme } from "next-themes";

export default function StatsAndProof() {
  // Call useTheme() so theme context is hydrated (even if not destructured)
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
      className="py-12 transition-colors duration-500"
      style={{ backgroundColor: "transparent" }}
      onMouseEnter={() => setTrigger(true)}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-3xl font-bold transition-colors duration-500"
              style={{ color: "var(--text-on-surface)" }}
            >
              Numbers that matter
            </h3>
            <p
              className="mt-2 text-sm transition-colors duration-500"
              style={{ color: "var(--text-on-surface)" }}
            >
              Proof in performance — not promises.
            </p>

            <div className="mt-6 flex gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="text-3xl font-extrabold transition-colors duration-500"
                    style={{ color: "var(--text-on-surface)" }}
                  >
                    <CountUp
                      start={0}
                      end={trigger ? stat.value : 0}
                      duration={1.5}
                      separator=","
                      suffix={stat.suffix}
                      redraw
                    />
                  </div>
                  <div
                    className="text-sm transition-colors duration-500"
                    style={{ color: "var(--text-on-surface)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
