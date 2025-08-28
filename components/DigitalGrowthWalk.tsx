"use client";

import { motion } from "framer-motion";
import React from "react";

export default function DigitalGrowthWalk() {
  // Theme variables
  const fg = "var(--foreground)";
  const sun = "var(--sun)";
  const amber = "var(--amber)";
  const honey = "var(--honey)";

  return (
    <section
      id="digital-growth"
      className="relative w-full overflow-hidden"
      style={{
        // ✅ Match body background grid + aurora glow
        backgroundColor: "var(--background)",
        backgroundImage: `
          linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
          linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px),
          linear-gradient(to right, var(--grid-major) 1px, transparent 1px),
          linear-gradient(to bottom, var(--grid-major) 1px, transparent 1px),
          radial-gradient(1200px 300px at 50% 120%, rgba(255,220,100,0.08), transparent 70%)
        `,
        backgroundSize: `
          var(--grid-size) var(--grid-size),
          var(--grid-size) var(--grid-size),
          calc(var(--grid-size) * 5) calc(var(--grid-size) * 5),
          calc(var(--grid-size) * 5) calc(var(--grid-size) * 5),
          auto
        `,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Aurora Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse at 80% 90%,
              rgba(255, 220, 100, 0.25),
              rgba(255, 200, 60, 0.15),
              transparent 70%
            )
          `,
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* Left - Animated path */}
          <div className="relative col-span-7 h-[260px] md:h-[300px]">
            {[...Array(14)].map((_, i) => {
              const delay = (i % 7) * 0.4;
              const left = `${5 + (i * 7) % 90}%`;
              const size = 12 + (i % 4) * 3;
              return (
                <motion.span
                  key={i}
                  className="absolute select-none"
                  style={{
                    left,
                    bottom: -20,
                    fontWeight: 700,
                    color: i % 2 === 0 ? sun : amber,
                    fontSize: size,
                    opacity: 0.35,
                  }}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: -200, opacity: [0, 1, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay,
                    ease: "easeInOut",
                  }}
                >
                  {i % 2 === 0 ? "1" : "0"}
                </motion.span>
              );
            })}

            <div
              className="absolute left-0 right-0"
              style={{
                bottom: 28,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, rgba(0,0,0,.15), transparent)",
              }}
            />

            {/* Walking character */}
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 600 300"
              className="absolute inset-0"
            >
              <path
                d="M20 230 C 160 220, 320 240, 580 230"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="2"
                fill="none"
              />
              <motion.g
                initial={{ x: -60 }}
                animate={{ x: 560 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <ellipse cx="60" cy="232" rx="26" ry="6" fill="rgba(0,0,0,.12)" />
                <rect x="52" y="160" width="16" height="55" rx="8" fill={amber} />
                <circle cx="60" cy="142" r="14" fill={sun} />
                {/* Legs + arms */}
                <motion.rect
                  x="58"
                  y="210"
                  width="10"
                  height="36"
                  rx="5"
                  fill={sun}
                  style={{ transformBox: "fill-box", transformOrigin: "top" }}
                  animate={{ rotate: [22, -18, 22] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect
                  x="48"
                  y="210"
                  width="10"
                  height="36"
                  rx="5"
                  fill={amber}
                  style={{ transformBox: "fill-box", transformOrigin: "top" }}
                  animate={{ rotate: [-18, 22, -18] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect
                  x="70"
                  y="170"
                  width="9"
                  height="36"
                  rx="5"
                  fill={sun}
                  style={{ transformBox: "fill-box", transformOrigin: "top left" }}
                  animate={{ rotate: [-18, 18, -18] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect
                  x="41"
                  y="170"
                  width="9"
                  height="36"
                  rx="5"
                  fill={amber}
                  style={{ transformBox: "fill-box", transformOrigin: "top right" }}
                  animate={{ rotate: [18, -18, 18] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.g>
            </motion.svg>
          </div>

          {/* Right - Text + growth bars */}
          <div className="col-span-5">
            <div className="mx-auto max-w-md">
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: fg }}>
                Walk toward digital growth
              </h3>
              <p className="text-sm md:text-base opacity-80 mb-6" style={{ color: fg }}>
                Progress compounding—one step at a time. Your brand scales as the foundation strengthens.
              </p>

              <div className="flex items-end gap-3 h-28">
                {[42, 64, 78, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-8 rounded-t-md"
                    style={{
                      background:
                        i % 2 === 0
                          ? `linear-gradient(${sun}, ${amber})`
                          : `linear-gradient(${amber}, ${honey})`,
                    }}
                    initial={{ height: 10, opacity: 0.8 }}
                    whileInView={{ height: h }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 120, delay: i * 0.15 }}
                  />
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center rounded-full px-6 py-3 text-base font-semibold shadow-md transition-all"
                >
                  Book a free consult
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
