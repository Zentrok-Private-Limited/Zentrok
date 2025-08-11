"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Laptop,
  BarChart3,
  Smartphone,
  Palette,
  Megaphone,
  Globe,
  Send,
  Eye,
} from "lucide-react";

const icons = [
  { Component: Laptop, className: "top-24 left-12 text-rojo" },
  { Component: BarChart3, className: "top-40 right-20 text-xanthous" },
  { Component: Smartphone, className: "bottom-32 left-24 text-foreground" },
  { Component: Palette, className: "bottom-20 right-20 text-rojo" },
  { Component: Megaphone, className: "top-1/3 left-[45%] text-xanthous" },
  { Component: Globe, className: "bottom-1/2 right-[15%] text-foreground" },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 pt-20 pb-20 min-h-screen overflow-hidden perspective-1000">
      {/* Background Floating Icons */}
      {icons.map(({ Component, className }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7, y: 20, rotateX: 15, rotateY: -15 }}
          animate={{
            opacity: 0.5,
            scale: 1,
            y: [0, -10, 0],
            rotateX: [15, -15, 15],
            rotateY: [-15, 15, -15],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className={`absolute ${className} transform-gpu`}
        >
          <Component size={80} strokeWidth={1.2} />
        </motion.div>
      ))}

      {/* Tagline */}
      <p className="text-rojo font-sans font-semibold tracking-wide uppercase mb-4 relative z-10">
        Creative Digital Marketing Agency
      </p>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-black text-black tracking-tight font-sans leading-tight max-w-none whitespace-nowrap relative z-10">
        We help brands <span className="text-rojo">grow digitally</span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-lg text-black/80 max-w-xl font-sans relative z-10">
        From strategy to execution, we craft bold ideas that drive measurable
        results. Let’s turn your vision into reality.
      </p>

      {/* CTA Buttons with POP Animation */}
      <div className="mt-10 flex gap-4 relative z-10">
  {/* Get Started Button → Goes to /contact page */}
  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
    <Link
      href="/contact"
      className="relative overflow-hidden flex items-center px-6 py-3 rounded-full bg-rojo text-white font-semibold shadow-lg hover:shadow-xl group transition-all duration-300 pr-10"
    >
      <span className="relative z-10">Get Started</span>
      <Send
        size={18}
        className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10"
      />
    </Link>
  </motion.div>

  {/* View Our Work Button → Goes to /work page */}
  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
    <Link
      href="/work"
      className="relative overflow-hidden flex items-center px-6 py-3 rounded-full border border-black text-black font-semibold group transition-all duration-300 pr-10"
    >
      <span className="relative z-10">View Our Work</span>
      <Eye
        size={18}
        className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10"
      />
    </Link>
  </motion.div>
</div>

    </section>
  );
}
