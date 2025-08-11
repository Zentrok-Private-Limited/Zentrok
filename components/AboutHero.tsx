"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


export default function AboutHero() {
  return (
    <section className="relative overflow-hidden text-black min-h-screen">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-rojo font-mono tracking-wider uppercase mb-3 sm:mb-4 text-sm sm:text-base">
            Creative Digital Marketing Agency
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight">
            We build culture-driving campaigns that make brands unforgettable.
            <span className="block mt-3 sm:mt-4 text-lg sm:text-2xl text-rojo font-semibold">
              Strategy. Story. Scalable growth.
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 max-w-xl mx-auto text-black-500 text-sm sm:text-base leading-relaxed">
            We ideate, produce and activate digital work that gets talked about — with measurable business outcomes. No fluff, no jargon — just work that moves metrics and minds. (Yes, we drink chai and yes, we thrive on chaos.)
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-rojo text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
            >
              Start a project
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-white/40 text-white px-5 py-3 rounded-full hover:bg-white/10 transition duration-300"
            >
              See case studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
