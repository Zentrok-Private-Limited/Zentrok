"use client";

import React, { useEffect, useState } from "react";
import {
  Lightbulb,
  User,
  Target,
  PenTool,
  Star,
  Globe,
  Megaphone,
  ArrowBigUp,
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
  { title: "Research & Insights", description: "In-depth investigations to fuel strategic decisions.", icon: Lightbulb },
  { title: "Unique Ways", description: "Creative approaches to set your business apart.", icon: Star },
  { title: "Purpose, Mission, Vision", description: "Clear organizational direction at every level.", icon: Target },
  { title: "Value Proposition", description: "Defining what makes your business irresistible.", icon: PenTool },
  { title: "Personality Traits", description: "Crafting a brand voice and soul customers remember.", icon: User },
  { title: "Verbal Identity", description: "Distinct communication style and messaging.", icon: Megaphone },
  { title: "Naming Strategy", description: "Memorable and meaningful brand names and terms.", icon: Globe },
  { title: "Brand Symbolism", description: "Powerful symbols to reinforce your brand identity.", icon: ArrowBigUp },
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
          {services.map((service, idx) => (
            <motion.a
              key={idx}
              href="#"
              variants={item}
              className="w-full p-8 rounded-xl border relative overflow-hidden group bg-[var(--surface-1000)] border-[var(--foreground)] transition-all duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow:
                  theme === "dark"
                    ? "0 8px 32px rgba(255,255,255,0.09)"
                    : "0 8px 32px rgba(0,0,0,0.09)",
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

              {/* Big background icon */}
              <service.icon
                size={120}
                className="absolute z-0 -top-16 -right-16 text-slate-200 opacity-30 group-hover:text-violet-400 group-hover:rotate-12 transition-all duration-300"
              />

              {/* Small foreground icon */}
              <div className="relative z-10 mb-4 text-violet-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={36} />
              </div>

              <h3 className="relative z-10 text-lg font-semibold mb-2 text-[var(--foreground)] group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative z-10 text-gray-500 group-hover:text-violet-200 transition-colors duration-300">
                {service.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
