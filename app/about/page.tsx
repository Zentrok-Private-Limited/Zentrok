// app/about/page.tsx
"use client";

import AboutHero from "@/components/AboutHero";
import StatsAndProof from "@/components/StatsAndProof";
import DigitalGrowthWalk from "@/components/DigitalGrowthWalk";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiTrendingUp,
  FiLayout,
  FiImage,
  FiRefreshCw,
  FiCheckCircle,
} from "react-icons/fi";
import { IconType } from "react-icons";

/* =======================
   Process Card Component
======================= */
const ProcessCard = ({
  title,
  subtitle,
  Icon,
}: {
  title: string;
  subtitle: string;
  Icon: IconType;
}) => {
  return (
    <div className="w-full p-6 rounded-xl border border-[var(--honey)] relative overflow-hidden group bg-[var(--surface-1000)]">
      {/* Gradient overlay behind content */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--sun)] to-[var(--amber)] 
                      translate-y-[100%] group-hover:translate-y-[0%] 
                      transition-transform duration-300 z-0" />

      {/* Background big icon */}
      <Icon className="absolute z-0 -top-10 -right-10 text-8xl text-[var(--honey)] opacity-20 
                       group-hover:opacity-30 transition-transform duration-300 group-hover:rotate-12" />

      {/* Foreground content */}
      <div className="relative z-10 transition-colors duration-300 group-hover:text-[var(--surface-900)]">
        <Icon className="mb-4 text-3xl text-[var(--amber)] transition-colors duration-300 group-hover:text-[var(--surface-900)]" />
        <h3 className="font-semibold text-xl text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--surface-900)]">
          {title}
        </h3>
        <p className="mt-2 text-[var(--text-on-surface)] transition-colors duration-300 group-hover:text-[var(--surface-900)]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      {/* ✅ Who We Are */}
      <section className="relative py-20 bg-[var(--background)] text-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
            <p className="mt-6 text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-[var(--sun)]">ZENTROK</span>,
              we are a creative agency dedicated to helping brands stand out in
              the digital space. Specializing in{" "}
              <span className="font-semibold text-[var(--amber)]">
                web design
              </span>
              ,{" "}
              <span className="font-semibold text-[var(--amber)]">
                web development
              </span>
              ,{" "}
              <span className="font-semibold text-[var(--amber)]">
                photography
              </span>
              ,{" "}
              <span className="font-semibold text-[var(--amber)]">
                graphic design
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[var(--amber)]">
                social media marketing
              </span>
              , we combine strategy, aesthetics, and innovation to deliver
              impactful results.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Our passionate team is driven to elevate brands through tailored
              digital experiences that spark engagement, build credibility, and
              accelerate growth.
            </p>
          </div>

          {/* Image */}
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg bg-[var(--surface-900)]">
            <Image
              src="/We.png"
              alt="Who We Are"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ✅ Our Vision */}
      <section className="py-20 bg-[var(--surface-1000)] text-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
            <p className="mt-6 text-lg leading-relaxed">
              We envision a world where every brand’s story is told with
              creativity, clarity, and purpose. At ZENTROK, we aspire to be the
              bridge between innovation and impact — helping businesses craft
              timeless digital experiences that inspire, engage, and endure.
            </p>
          </div>

          {/* ✨ Orb with Logo */}
          <div className="flex justify-center items-center h-82 relative">
            <motion.div
              className="w-48 h-48 rounded-full flex items-center justify-center relative"
              style={{
                background: "radial-gradient(circle, var(--sun), var(--amber))",
                boxShadow: "0 0 60px var(--honey)",
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/favicon.svg"
                alt="ZENTROK Logo"
                width={140}
                height={140}
                className="object-contain"
              />
            </motion.div>

            {/* Rays */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-16 rounded-full"
                style={{
                  background: "linear-gradient(var(--amber), transparent)",
                  transform: `rotate(${i * 30}deg) translateY(-80px)`,
                }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Our Process */}
      <section className="py-20 bg-[var(--background)] text-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our Process
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-center leading-relaxed">
            At ZENTROK, our process is rooted in clarity, creativity, and
            collaboration. From discovery to delivery, every step is designed to
            transform your ideas into impactful realities.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProcessCard
              title="Discovery & Research"
              subtitle="Understanding your brand, audience & goals."
              Icon={FiSearch}
            />
            <ProcessCard
              title="Strategy & Moodboarding"
              subtitle="Crafting concepts and aligning vision."
              Icon={FiTrendingUp}
            />
            <ProcessCard
              title="Wireframing & UX Flows"
              subtitle="Designing intuitive user experiences."
              Icon={FiLayout}
            />
            <ProcessCard
              title="High-Fidelity Design"
              subtitle="Pixel-perfect, aesthetic final visuals."
              Icon={FiImage}
            />
            <ProcessCard
              title="Feedback & Iterations"
              subtitle="Refining ideas with your collaboration."
              Icon={FiRefreshCw}
            />
            <ProcessCard
              title="Delivery & Handoff"
              subtitle="Seamless execution & project launch."
              Icon={FiCheckCircle}
            />
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="py-20 bg-[var(--background)] text-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl  font-bold">Why Choose Us?</h2>
          <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
            At ZENTROK, we don&apos;t just design — we listen first. Every brand has
            a unique story, and our job is to deeply understand yours before
            putting pixels on screen. What sets us apart is our fresh thinking,
            clean aesthetic, and timeless solutions built for usability and
            longevity.
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Understand Your Needs", img: "/1.png" },
              { title: "Fresh & Creative Ideas", img: "/2.png" },
              { title: "Future-Proof Designs", img: "/3.png" },
              { title: "Vision into Reality", img: "/4.png" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-[var(--surface-900)] overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DigitalGrowthWalk />
      <StatsAndProof />
      <Footer />
    </main>
  );
}
