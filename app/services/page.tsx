"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, Sparkles, Monitor, Camera, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";

export default function Services() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const textColor = theme === "dark" ? "text-white" : "text-[var(--foreground)]";
  const subTextColor =
    theme === "dark" ? "text-white/80" : "text-[var(--text-on-surface)]/80";

  const sectionBg =
    theme === "dark" ? "bg-[var(--surface-900)]" : "bg-[var(--surface-1000)]";

  return (
    <>
      <main className={`min-h-screen pt-20 px-6 sm:px-12 lg:px-24 ${textColor}`}>
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-0 bg-transparent"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-2 ">
            Our Services
          </h2>
          <p
            className={`max-w-xl mx-auto mb-0 text-lg sm:text-xl ${subTextColor}`}
          >
            We deliver strategy, creativity, and data-driven marketing that propel your brand forward.
          </p>
        </motion.section>

        {/* Services */}
        <ServicesSection />

        {/* ✅ Ideas & Inspiration Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl  font-bold mb-6">
              Ideas & Inspiration
            </h3>
            <p className={`max-w-2xl mx-auto mb-12 ${subTextColor}`}>
              Transforming your brand vision into reality with structured design, creativity, and strategy.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`p-8 rounded-2xl shadow-lg ${sectionBg}`}
              >
                <Sparkles size={36} className="text-[var(--sun)] mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Creative Solutions</h4>
                <p className={subTextColor}>
                  Dynamic scrolling keywords, solution-based categories, and clean data structuring.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`p-8 rounded-2xl shadow-lg ${sectionBg}`}
              >
                <Camera size={36} className="text-[var(--amber)] mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Luxury & Minimalism</h4>
                <p className={subTextColor}>
                  Minimalist restraint with luxury appeal. Clean, informative, and research-driven content.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ✅ Our Work Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Our Work
            </h3>
            <p className={`max-w-2xl mx-auto mb-12 ${subTextColor}`}>
              A showcase of our website design, development, and product photography.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                whileHover={{ y: -8 }}
                className={`p-6 rounded-2xl shadow-lg ${sectionBg}`}
              >
                <Monitor size={32} className="text-[var(--honey)] mb-4" />
                <h4 className="text-lg font-semibold mb-2">Website Redesign</h4>
                <p className={subTextColor}>
                  A clean, fashion-forward redesign inspired by Zara&apos;s global identity.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className={`p-6 rounded-2xl shadow-lg ${sectionBg}`}
              >
                <Camera size={32} className="text-[var(--sun)] mb-4" />
                <h4 className="text-lg font-semibold mb-2">Product Photography</h4>
                <p className={subTextColor}>
                  From studio shots to lifestyle imagery, we craft visuals that tell your product&apos;s story.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className={`p-6 rounded-2xl shadow-lg ${sectionBg}`}
              >
                <Sparkles size={32} className="text-[var(--amber)] mb-4" />
                <h4 className="text-lg font-semibold mb-2">Brand Identity</h4>
                <p className={subTextColor}>
                  Logos, color systems, and visual languages that make a lasting impression.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ✅ Website Design Section (Brittany Chiang style projects) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Website Design
            </h3>

            <div className="space-y-16">
              {/* Project 1 */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className="rounded-xl overflow-hidden shadow-lg border border-[var(--honey)]">
                  <img
                    src="/project1.png"
                    alt="Project Website 1"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-3">Physiotherapy clinic Website</h4>
                  <p className={`${subTextColor} mb-4`}>
                  Advika Physiotherapy Clinic presents a clean, compassionate, and user-focused digital experience built to guide visitors seamlessly through the clinic&apos;s services and values. The homepage opens with a welcoming tagline, “Transforming Health, Restoring Lives,” paired with a clear “Book Appointment” call-to-action—reinforcing their patient-first approach.
                  </p>
                  <Link
                    href="https://www.advikaphysiotherapyclinic.com/"
                    target="_blank"
                    className="inline-flex items-center text-[var(--sun)] hover:text-[var(--amber)] font-semibold"
                  >
                    Visit Site <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="grid lg:grid-cols-2 gap-8 items-center lg:flex-row-reverse"
              >
                <div className="rounded-xl overflow-hidden shadow-lg border border-[var(--honey)]">
                  <img
                    src="/project2.jpg"
                    alt="Project Website 2"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-3">AstroTaro Website</h4>
                  <p className={`${subTextColor} mb-4`}>
                    A personal portfolio site designed with elegant typography, smooth animations, and a brand-first approach.
                  </p>
                  <Link
                    href="https://example.com"
                    target="_blank"
                    className="inline-flex items-center text-[var(--sun)] hover:text-[var(--amber)] font-semibold"
                  >
                    Visit Site <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA */}
        <section
          className={`rounded-xl max-w-4xl mx-auto p-12 text-center shadow-lg ${sectionBg}`}
        >
          <h3 className="text-3xl font-extrabold mb-6">
            Ready to transform your brand?
          </h3>
          <p className={`mb-8 text-lg max-w-xl mx-auto ${subTextColor}`}>
            Let&apos;s work together to create unforgettable campaigns that move your business forward.
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/work"
              className="relative overflow-hidden flex items-center px-6 py-3 rounded-full border border-current font-semibold group transition-all duration-300 pr-10 text-base"
            >
              <span className="relative z-10">View Our Work</span>
              <Eye
                size={18}
                className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-in-out z-10"
              />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
