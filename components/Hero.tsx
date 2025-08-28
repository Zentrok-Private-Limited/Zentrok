"use client";

import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { Send, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Aurora gradient colors (cycling core glow)
const COLORS_TOP = ["#FFD700", "#FFC107", "#FFEB3B", "#FFB300"];

const rotatingWordsLight = [
  { text: "grow digitally", color: "#ED2D02" },
  { text: "grow globally", color: "#ED6402" },
  { text: "build network", color: "#BDA808" },
];


const MotionLink = motion(Link);

export default function Hero() {
  const { theme, resolvedTheme } = useTheme();
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const currentTheme = resolvedTheme || theme || "light";
  const rotatingWords =
    currentTheme === "light" ? rotatingWordsLight : rotatingWordsDark;

  // Aurora gradient motion value
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // Create background image for the aurora effect
  const backgroundImage = useMotionTemplate`radial-gradient(ellipse at 50% 90%, ${color} 10%, transparent 85%)`;

  if (!mounted) return null;

  return (
    <motion.section
      className="
        relative flex flex-col items-center text-center
        px-4 sm:px-6 
        pt-10 sm:pt-20 pb-12 sm:pb-20 
        min-h-screen
        justify-center sm:justify-start
        overflow-hidden
      "
    >
      {/* Aurora Effect (Bottom to Top) */}
      <motion.div
        className="
          absolute 
          bottom-0 
          left-0 
          w-full 
          h-[400px] 
          opacity-40
          dark:opacity-50
          pointer-events-none 
          z-0
        "
        style={{
          backgroundImage,
          borderRadius: "30% 30% 0 0 / 80% 80% 0 0",
          filter: "blur(80px)",
        }}
      />

      {/* Extra bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-70 bg-gradient-to-b from-transparent to-background pointer-events-none z-1"></div>

      {/* Tagline */}
      <p className="font-sans font-semibold tracking-wide uppercase mb-3 sm:mb-4 relative z-10 text-xs sm:text-sm md:text-base ">
        Creative Digital Marketing Agency
      </p>

      {/* Heading with rotating word */}
      <h1
        className="
          text-2xl xs:text-3xl sm:text-5xl md:text-6xl 
          font-bold text-foreground tracking-tight font-sans 
          leading-tight max-w-xs xs:max-w-md sm:max-w-none 
          relative z-10 flex flex-wrap justify-center items-center gap-2
        "
      >
        We help brands{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ color: rotatingWords[index].color }}
          >
            {rotatingWords[index].text}
          </motion.span>
        </AnimatePresence>
      </h1>

      {/* Subtext */}
      <p
        className="
          mt-4 sm:mt-6 text-xs xs:text-sm sm:text-lg 
          max-w-xs xs:max-w-sm sm:max-w-xl 
          font-sans relative z-10
        "
      >
        We turn your business into the gossip everyone shares online.
      </p>

      {/* CTA Buttons */}
      <div
        className="
          mt-6 xs:mt-8 sm:mt-10 
          flex flex-col sm:flex-row gap-3 sm:gap-4 
          relative z-10 w-full sm:w-auto justify-center
        "
      >
        {/* Get Started CTA */}
        <MotionLink
          href="/contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={`
            relative overflow-hidden flex items-center 
            px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 
            rounded-full 
            border border-current 
            font-semibold shadow-lg hover:shadow-xl 
            group transition-all duration-300 
            pr-8 xs:pr-9 sm:pr-10 
            text-xs xs:text-sm sm:text-base
            ${currentTheme === "light" ? "text-on-surface" : "text-white"}
          `}
        >
          <span className="relative z-10">Get Started</span>
          <Send
            size={18}
            className="absolute right-3 xs:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10"
          />
        </MotionLink>

        {/* View Our Work CTA */}
        <MotionLink
          href="/work"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="
            relative overflow-hidden flex items-center 
            px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 
            rounded-full border border-current 
            font-semibold group 
            transition-all duration-300 
            pr-8 xs:pr-9 sm:pr-10 
            text-xs xs:text-sm sm:text-base 
          "
        >
          <span className="relative z-10">View Our Work</span>
          <Eye
            size={18}
            className="absolute right-3 xs:right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-in-out z-10"
          />
        </MotionLink>
      </div>
    </motion.section>
  );
}
