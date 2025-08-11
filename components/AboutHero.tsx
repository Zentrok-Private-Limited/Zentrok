"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden text-black min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/about-hero-bg.jpg"  // your image in /public folder
          alt="Background"
          className="w-full h-full object-cover opacity-100"
          loading="lazy"
        />
        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28 lg:py-36 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-rojo font-mono tracking-wider uppercase mb-4">
            Creative Digital Marketing Agency
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            We build culture-driving campaigns that make brands unforgettable.
            <span className="block mt-4 text-xl sm:text-2xl text-rojo font-semibold">
              Strategy. Story. Scalable growth.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-black/70">
            We ideate, produce and activate digital work that gets talked about —
            with measurable business outcomes. No fluff, no jargon — just work that
            moves metrics and minds. (Yes, we drink chai and yes, we thrive on chaos.)
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-rojo text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition"
            >
              Start a project
            </Link>
            <a
              href="/case-studies"
              className="inline-flex items-center gap-3 border border-white/20 text-white px-5 py-3 rounded-full"
            >
              See case studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
