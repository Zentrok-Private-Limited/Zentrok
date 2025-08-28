"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PremiumCTA() {
  const { resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = resolvedTheme || theme || "light";

  // Theme-aware colors
  const bg = "var(--surface-1000)";
  const overlay =
    currentTheme === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)";
  const headingColor = "var(--foreground)";
  const subTextColor = "var(--text-on-surface)";
  const buttonBg = "var(--emerald)";
  const buttonBorder = "var(--foreground)";
  const buttonText = "var(--foreground)"; // adapts with theme

  return (
    <section
      className="relative flex items-center justify-center min-h-[60vh] px-6"
      style={{ backgroundColor: bg }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlay }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center">
        <motion.h2
          className="font-sans font-bold text-3xl md:text-4xl mb-4"
          style={{ color: headingColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transform Your Business Today
        </motion.h2>

        <motion.p
          className="text-sm md:text-lg mb-6 font-sans"
          style={{ color: subTextColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Join thousands of successful entrepreneurs who trust our platform to
          grow their businesses.
        </motion.p>

        {/* Premium CTA Button */}
        <Link href="/contact" passHref>
          <motion.a
            className="inline-flex items-center justify-center font-semibold py-3 px-6 rounded-full shadow-md relative overflow-hidden group transition-all duration-300"
            style={{
              backgroundColor: "transparent", // border-only style
              border: `1px solid ${buttonBorder}`,
              color: buttonText,
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 mr-5">Get Started</span>
            <ArrowRight
              size={20}
              className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
            />
          </motion.a>
        </Link>
      </div>
    </section>
  );
}
