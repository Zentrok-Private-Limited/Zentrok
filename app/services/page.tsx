"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Eye } from "lucide-react";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";


export default function Services() {
  const { theme } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const textColor = theme === "dark" ? "text-white" : "text-[var(--foreground)]";
  const subTextColor =
    theme === "dark"
      ? "text-white/80"
      : "text-[var(--text-on-surface)]/80";

  // Solid background for testimonial and CTA sections
  const sectionBg =
    theme === "dark"
      ? "bg-[var(--surface-900)]"
      : "bg-[var(--surface-1000)]";

  return (
    <>
      <main
        className={`min-h-screen pt-20 px-6 sm:px-12 lg:px-24 ${textColor}`}
      >
        {/* Hero - Transparent */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-0 bg-transparent"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">
            Our Services
          </h2>
          <p
            className={`max-w-xl mx-auto mb-0 text-lg sm:text-xl ${subTextColor}`}
          >
            We deliver strategy, creativity, and data-driven marketing that
            propel your brand forward.
          </p>
        </motion.section>

        {/* Services Section - Transparent */}
        <ServicesSection />

        {/* Testimonials - Solid Background */}
        <Testimonials />

        {/* Call To Action - Solid Background */}
        <section
          className={`rounded-xl max-w-4xl mx-auto p-12 text-center shadow-lg ${sectionBg}`}
        >
          <h3 className="text-3xl font-extrabold mb-6">
            Ready to transform your brand?
          </h3>
          <p className={`mb-8 text-lg max-w-xl mx-auto ${subTextColor}`}>
            Let&apos;s work together to create unforgettable campaigns that move
            your business forward.
          </p>

          {/* Matching Hero CTA Button */}
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Link
            href="/work"
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
          </Link>
        </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
