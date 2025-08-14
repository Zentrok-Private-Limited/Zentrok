"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, BrightTech",
    photo: "priya.jpg",
    feedback:
      "ZENTROK transformed our brand narrative and increased our engagement by 300%. These guys know what they're doing!",
  },
  {
    name: "Rahul Verma",
    role: "Marketing Head, FreshFoods",
    photo: "rahul.jpg",
    feedback:
      "Creative, professional, and results-driven. Their digital marketing campaigns consistently deliver ROI.",
  },
  {
    name: "Sneha Gupta",
    role: "Founder, UrbanStyle",
    photo: "sneha.jpg",
    feedback:
      "Their attention to detail and execution made our product launch unforgettable. Highly recommend ZENTROK!",
  },
];

export default function Services() {
  const { theme } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const textColor = theme === "dark" ? "text-white" : "text-[var(--foreground)]";
  const subTextColor = theme === "dark" ? "text-white/80" : "text-[var(--text-on-surface)]/80";

  // Solid background for testimonial and CTA sections
  const sectionBg = theme === "dark" ? "bg-[var(--surface-900)]" : "bg-[var(--surface-1000)]";

  return (
    <>
      <main className={`min-h-screen pt-20 px-6 sm:px-12 lg:px-24 ${textColor}`}>
        {/* Hero - Transparent */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-0 bg-transparent"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">Our Services</h2>
          <p className={`max-w-xl mx-auto mb-0 text-lg sm:text-xl ${subTextColor}`}>
            We deliver strategy, creativity, and data-driven marketing that propel your brand forward.
          </p>
        </motion.section>

        {/* Services Section - Transparent */}
        <ServicesSection />

        {/* Testimonials - Solid Background */}
        <section className={`max-w-4xl mx-auto my-20 relative rounded-xl overflow-hidden shadow-lg p-10 ${sectionBg}`}>
          <h3 className={`text-4xl font-bold text-center mb-10 ${textColor}`}>What Our Clients Say</h3>

          <AnimatePresence mode="wait">
            {testimonials.map(
              (testi, idx) =>
                idx === currentTestimonial && (
                  <motion.div
                    key={testi.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <Image
                      src={`/testimonials/${testi.photo}`}
                      alt={testi.name}
                      width={96}
                      height={96}
                      className="mx-auto w-24 h-24 rounded-full object-cover mb-6 shadow-md"
                      loading="lazy"
                    />
                    <p className={`italic text-lg mb-6 ${subTextColor}`}>“{testi.feedback}”</p>
                    <p className={`font-semibold ${textColor}`}>{testi.name}</p>
                    <p className={`text-sm mb-3 ${subTextColor}`}>{testi.role}</p>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`w-3 h-3 rounded-full ${
                  idx === currentTestimonial
                    ? "bg-[var(--ruby)]"
                    : "bg-[var(--text-on-surface)]/30"
                }`}
                onClick={() => setCurrentTestimonial(idx)}
              />
            ))}
          </div>
        </section>

        {/* Call To Action - Solid Background */}
        <section className={`rounded-xl max-w-4xl mx-auto p-12 text-center shadow-lg ${sectionBg}`}>
          <h3 className="text-3xl font-extrabold mb-6">Ready to transform your brand?</h3>
          <p className="mb-8 text-lg max-w-xl mx-auto text-white/80">
            Let&apos;s work together to create unforgettable campaigns that move your business forward.
          </p>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-block">
            <Link
              href="/contact"
              className={`group relative overflow-hidden flex items-center px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 pr-10 ${
                theme === "dark" ? "bg-white text-[#1a1a1a]" : "bg-[var(--ruby)] text-white"
              }`}
            >
              <span className="relative z-10">Get in Touch</span>
              <Send
                size={18}
                className="absolute right-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out z-10"
              />
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
