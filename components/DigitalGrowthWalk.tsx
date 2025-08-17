"use client";

import { motion } from "framer-motion";
import React from "react";

/**
 * DigitalGrowthWalk
 * - Place right below your Hero section
 * - Assumes Tailwind is available; colors adapt to dark/light via CSS vars
 */
export default function DigitalGrowthWalk() {
  const fg = "var(--foreground, #0f172a)";
  const accent = "var(--accent, #22c55e)";            // growth green
  const accent2 = "var(--accent-2, #3b82f6)";         // digital blue
  const grid = "var(--grid, rgba(148,163,184,0.25))"; // subtle grid

  return (
    <section
      id="digital-growth"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 300px at 50% 120%, rgba(59,130,246,0.06), transparent 60%)",
      }}
    >
      {/* Subtle tech grid */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
          backgroundSize: "24px 24px, 24px 24px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* WALK PATH + CHARACTER */}
          <div className="relative col-span-7 h-[260px] md:h-[300px]">
            {/* Binary digits drifting */}
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
                    color: accent2,
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

            {/* Ground line */}
            <div
              className="absolute left-0 right-0"
              style={{
                bottom: 28,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, rgba(0,0,0,.25), transparent)",
              }}
            />

            {/* CHARACTER GROUP */}
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 600 300"
              className="absolute inset-0"
            >
              {/* Walk path */}
              <path
                d="M20 230 C 160 220, 320 240, 580 230"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="2"
                fill="none"
              />

              {/* Character travels L->R continuously */}
              <motion.g
                initial={{ x: -60 }}
                animate={{ x: 560 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                {/* subtle shadow */}
                <ellipse cx="60" cy="232" rx="26" ry="6" fill="rgba(0,0,0,.18)" />

                {/* BODY (use transform-box + origin so rotations look correct) */}
                {/* Torso */}
                <rect
                  x="52"
                  y="160"
                  width="16"
                  height="55"
                  rx="8"
                  fill={accent2}
                />

                {/* Head */}
                <circle cx="60" cy="142" r="14" fill={accent} />

                {/* Left Leg */}
                <motion.rect
                  x="58"
                  y="210"
                  width="10"
                  height="36"
                  rx="5"
                  fill={accent}
                  style={{ transformBox: "fill-box", transformOrigin: "top" }}
                  animate={{ rotate: [22, -18, 22] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Right Leg */}
                <motion.rect
                  x="48"
                  y="210"
                  width="10"
                  height="36"
                  rx="5"
                  fill={accent2}
                  style={{ transformBox: "fill-box", transformOrigin: "top" }}
                  animate={{ rotate: [-18, 22, -18] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Left Arm */}
                <motion.rect
                  x="70"
                  y="170"
                  width="9"
                  height="36"
                  rx="5"
                  fill={accent}
                  style={{ transformBox: "fill-box", transformOrigin: "top left" }}
                  animate={{ rotate: [-18, 18, -18] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Right Arm */}
                <motion.rect
                  x="41"
                  y="170"
                  width="9"
                  height="36"
                  rx="5"
                  fill={accent2}
                  style={{ transformBox: "fill-box", transformOrigin: "top right" }}
                  animate={{ rotate: [18, -18, 18] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Slight bobbing for whole body */}
                <motion.g
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.g>
            </motion.svg>
          </div>

          {/* GROWTH VISUAL (bars rising) */}
          <div className="col-span-5">
            <div className="mx-auto max-w-md">
              <h3
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ color: fg }}
              >
                Walking toward digital growth
              </h3>
              <p className="text-sm md:text-base opacity-80 mb-6" style={{ color: fg }}>
                Progress compounding—one step at a time. Your brand scales as the
                foundation strengthens.
              </p>

              {/* Animated bars */}
              <div className="flex items-end gap-3 h-28">
                {[42, 64, 78, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-8 rounded-t-md"
                    style={{
                      background:
                        i % 2 === 0
                          ? `linear-gradient(${accent}, ${accent2})`
                          : `linear-gradient(${accent2}, ${accent})`,
                    }}
                    initial={{ height: 10, opacity: 0.8 }}
                    whileInView={{ height: h }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 120, delay: i * 0.15 }}
                  />
                ))}
              </div>

              {/* CTA (optional) */}
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold"
                  style={{
                    background: accent2,
                    color: "#fff",
                    boxShadow:
                      "0 8px 16px rgba(59,130,246,0.25), inset 0 -1px 0 rgba(255,255,255,0.2)",
                  }}
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
