"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Monitor, Camera, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";

export default function Services() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const textColor =
    theme === "dark" ? "text-white" : "text-[var(--foreground)]";
  const subTextColor =
    theme === "dark" ? "text-white/80" : "text-[var(--text-on-surface)]/80";
  const sectionBg =
    theme === "dark" ? "bg-[var(--surface-900)]" : "bg-[var(--surface-1000)]";

  // 🎨 Heading color from theme
  const headingColor =
    theme === "dark" ? "text-[var(--sun)]" : "text-[var(--amber)]";

  // ✨ Animation variants for headings
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <main
        className={`min-h-screen pt-20 px-6 sm:px-12 lg:px-24 ${textColor}`}
      >
        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className="max-w-4xl mx-auto text-center mb-0 bg-transparent"
        >
          <motion.h2
            variants={headingVariants}
            whileHover={{ scale: 1.05 }}
            className={`text-4xl sm:text-6xl font-extrabold mb-2 ${headingColor}`}
          >
            Our Services
          </motion.h2>
          <p
            className={`max-w-xl mx-auto mb-0 text-lg sm:text-xl ${subTextColor}`}
          >
            We deliver strategy, creativity, and data-driven marketing that
            propel your brand forward.
          </p>
        </motion.section>

        {/* Services */}
        <ServicesSection />

        {/* ✅ Ideas & Inspiration Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="py-20"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h3
              variants={headingVariants}
              whileHover={{ scale: 1.05 }}
              className={`text-3xl sm:text-5xl font-bold mb-6 ${headingColor}`}
            >
              Ideas & Inspiration
            </motion.h3>
            <p className={`max-w-2xl mx-auto mb-12 ${subTextColor}`}>
              Transforming your brand vision into reality with structured
              design, creativity, and strategy.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`p-8 rounded-2xl shadow-lg ${sectionBg}`}
              >
                <Sparkles
                  size={36}
                  className="text-[var(--sun)] mx-auto mb-4"
                />
                <motion.h4
                  whileHover={{ scale: 1.08 }}
                  className={`text-xl font-semibold mb-2 ${headingColor}`}
                >
                  Creative Solutions
                </motion.h4>
                <p className={subTextColor}>
                  Dynamic scrolling keywords, solution-based categories, and
                  clean data structuring.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`p-8 rounded-2xl shadow-lg ${sectionBg}`}
              >
                <Camera
                  size={36}
                  className="text-[var(--amber)] mx-auto mb-4"
                />
                <motion.h4
                  whileHover={{ scale: 1.08 }}
                  className={`text-xl font-semibold mb-2 ${headingColor}`}
                >
                  Luxury & Minimalism
                </motion.h4>
                <p className={subTextColor}>
                  Minimalist restraint with luxury appeal. Clean, informative,
                  and research-driven content.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ✅ Our Work Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="py-20"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h3
              variants={headingVariants}
              whileHover={{ scale: 1.05 }}
              className={`text-3xl sm:text-5xl font-bold mb-6 ${headingColor}`}
            >
              What We Do
            </motion.h3>
            <p className={`max-w-2xl mx-auto mb-12 ${subTextColor}`}>
              A showcase of our website design, development, and product
              photography.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                whileHover={{ y: -8 }}
                className={`p-6 rounded-2xl shadow-lg ${sectionBg}`}
              >
                <Monitor size={32} className="text-[var(--honey)] mb-4" />
                <motion.h4
                  whileHover={{ scale: 1.08 }}
                  className={`text-lg font-semibold mb-2 ${headingColor}`}
                >
                  Website Design
                </motion.h4>
                <p className={subTextColor}>
                  A clean, fashion-forward redesign inspired by Zara&apos;s
                  global identity.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className={`p-6 rounded-2xl shadow-lg ${sectionBg}`}
              >
                <Camera size={32} className="text-[var(--sun)] mb-4" />
                <motion.h4
                  whileHover={{ scale: 1.08 }}
                  className={`text-lg font-semibold mb-2 ${headingColor}`}
                >
                  Product Photography
                </motion.h4>
                <p className={subTextColor}>
                  From studio shots to lifestyle imagery, we craft visuals that
                  tell your product&apos;s story.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className={`p-6 rounded-2xl shadow-lg ${sectionBg}`}
              >
                <Sparkles size={32} className="text-[var(--amber)] mb-4" />
                <motion.h4
                  whileHover={{ scale: 1.08 }}
                  className={`text-lg font-semibold mb-2 ${headingColor}`}
                >
                  Brand Identity
                </motion.h4>
                <p className={subTextColor}>
                  Logos, color systems, and visual languages that make a lasting
                  impression.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ✅ Website Design Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="py-20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h3
              variants={headingVariants}
              whileHover={{ scale: 1.05 }}
              className={`text-5xl sm:text-5xl font-bold mb-12 text-center ${headingColor}`}
            >
              Our Work
            </motion.h3>

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
                  <motion.h4
                    whileHover={{ scale: 1.08 }}
                    className={`text-2xl font-semibold mb-3 ${headingColor}`}
                  >
                    Physiotherapy clinic Website
                  </motion.h4>
                  <p className={`${subTextColor} mb-4`}>
                    Advika Physiotherapy Clinic presents a clean, compassionate,
                    and user-focused digital experience built to guide visitors
                    seamlessly through the clinic&apos;s services and values.
                    The homepage opens with a welcoming tagline, “Transforming
                    Health, Restoring Lives,” paired with a clear “Book
                    Appointment” call-to-action—reinforcing their patient-first
                    approach.
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
                  <motion.h4
                    whileHover={{ scale: 1.08 }}
                    className={`text-2xl font-semibold mb-3 ${headingColor}`}
                  >
                    AstroTaro Website
                  </motion.h4>
                  <p className={`${subTextColor} mb-4`}>
                    Astro Taro blends the wisdom of astrology with the intuition
                    of tarot to offer personalized insights, spiritual guidance,
                    and clarity for life&apos;s journey. Explore accurate
                    readings, cosmic forecasts, and empowering tools to align
                    with your true path.
                  </p>
                  <Link
                    href="https://divine-ssarthi.vercel.app/"
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
      </main>

      <Footer />
    </>
  );
}
