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
              <motion.div
                key={idx}
                variants={item}
                className="w-full p-8 rounded-xl border border-[var(--honey)] relative overflow-hidden group bg-[var(--surface-1000)] transition-all duration-300 flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    theme === "dark"
                      ? "0 8px 32px rgba(255,180,0,0.12)"
                      : "0 8px 32px rgba(255,100,0,0.12)",
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--sun)] to-[var(--amber)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />

                {/* Background big icon (centered) */}
                <Icon
                  size={120}
                  className="absolute inset-0 m-auto text-[var(--honey)] opacity-10 group-hover:opacity-30 group-hover:rotate-12 transition-all duration-300 z-0"
                />

                {/* Foreground content */}
                <div className="relative z-10 transition-colors duration-300 group-hover:text-[var(--surface-900)] flex flex-col items-center">
                  <Icon className="mb-4 text-4xl text-[var(--amber)] transition-colors duration-300 group-hover:text-[var(--surface-900)]" />
                  <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--surface-900)]">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-on-surface)] transition-colors duration-300 group-hover:text-[var(--surface-900)]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
