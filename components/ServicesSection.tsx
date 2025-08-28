"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart3,
  Share2,
  Target,
  PenTool,
  Search,
  Globe,
  Megaphone,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useTheme } from "next-themes";

// Service type
type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "SEO Optimization",
    description: "Rank higher, get discovered, and drive organic traffic.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    description: "Engage audiences and build loyal communities online.",
    icon: Share2,
  },
  {
    title: "Paid Ads & Campaigns",
    description: "Maximize ROI with laser-focused ad targeting.",
    icon: Target,
  },
  {
    title: "Content Creation",
    description: "Craft compelling visuals and copy that convert.",
    icon: PenTool,
  },
  {
    title: "Brand Strategy",
    description: "Build a memorable identity that customers trust.",
    icon: Globe,
  },
  {
    title: "Influencer Marketing",
    description: "Leverage voices that amplify your brand impact.",
    icon: Megaphone,
  },
  {
    title: "Analytics & Insights",
    description: "Data-driven reports to track and boost performance.",
    icon: BarChart3,
  },
  {
    title: "Growth Hacking",
    description: "Smart strategies to accelerate brand success fast.",
    icon: TrendingUp,
  },
];

// Animation variants
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ServicesSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={idx}
                href="#"
                variants={item}
                className="w-full p-8 rounded-xl border relative overflow-hidden group bg-[var(--surface-1000)] border-[var(--foreground)] transition-all duration-300 flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    theme === "dark"
                      ? "0 8px 32px rgba(255,180,0,0.12)"
                      : "0 8px 32px rgba(255,100,0,0.12)",
                }}
              >
                {/* Hover gradient overlay (warm theme) */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                {/* Big background icon */}
                <Icon
                  size={120}
                  className="absolute z-0 -top-12 right-1/2 translate-x-1/2 text-orange-200 opacity-5 group-hover:text-orange-400 group-hover:rotate-12 transition-all duration-300"
                />

                {/* Small foreground icon */}
                <div className="relative z-10 mb-4 text-orange-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={48} />
                </div>

                <h3 className="relative z-10 text-lg font-semibold mb-2 text-[var(--foreground)] group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gray-500 group-hover:text-amber-100 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
