"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden min-h-screen text-[var(--foreground)] bg-transparent">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-[calc(4rem+var(--navbar-height,60px))] pb-8 sm:pb-12 lg:pb-16 relative z-10"
        style={{ "--navbar-height": "20px" } as React.CSSProperties}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#64FFDA] font-mono tracking-wider uppercase mb-3 sm:mb-4 text-sm sm:text-base">
            Creative Digital Marketing Agency
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight">
            We build culture-driving campaigns that make brands unforgettable.
            <span className="block mt-3 sm:mt-4 text-lg sm:text-2xl ">
              Strategy. Story. Scalable growth.
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed opacity-80">
            We ideate, produce and activate digital work that gets talked about — with measurable business outcomes. No fluff, no jargon — just work that moves metrics and minds. (Yes, we drink chai and yes, we thrive on chaos.)
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Case studies button */}
            <Link
              href="/case-studies"
              className="w-full sm:w-auto flex items-center gap-2 border border-[var(--foreground)]/40 text-[var(--foreground)] font-semibold px-5 py-3 rounded-full hover:bg-[var(--foreground)]/10 transition-transform hover:-translate-y-0.5 group"
            >
              <span>See case studies</span>
              <Send
                size={16}
                className="transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
