"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Brand Strategy",
    description: "Crafting unique brand identities that resonate and inspire.",
    icon: (
      <svg
        className="w-12 h-12 text-rojo"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l9 21H3L12 2z" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns to scale your reach and engagement.",
    icon: (
      <svg
        className="w-12 h-12 text-rojo"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={12} cy={12} r={10} />
        <line x1={2} y1={12} x2={22} y2={12} />
        <line x1={12} y1={2} x2={12} y2={22} />
      </svg>
    ),
  },
  {
    title: "Creative Production",
    description: "Producing compelling content that moves hearts and minds.",
    icon: (
      <svg
        className="w-12 h-12 text-rojo"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, BrightTech",
    photo: "priya.jpg",
    feedback:
      "ZENTROK transformed our brand narrative and increased our engagement by 300%. These guys know what they&apos;re doing!",
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="min-h-screen py-20 px-6 sm:px-12 lg:px-24">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-rojo text-4xl sm:text-5xl font-extrabold mb-4">
            Our Services
          </h2>
          <p className="text-black/70 max-w-xl mx-auto text-lg sm:text-xl">
            We deliver strategy, creativity, and data-driven marketing that
            propel your brand forward.
          </p>
        </motion.section>

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {services.map(({ title, description, icon }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white rounded-xl p-8 text-center hover:shadow-3xl cursor-pointer transition-shadow"
            >
              <div className="mb-6 flex justify-center">{icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-rojo">{title}</h3>
              <p className="text-black/80">{description}</p>
            </motion.article>
          ))}
        </section>

        {/* Testimonials */}
        <section className="max-w-4xl mx-auto mb-32 relative">
          <h3 className="text-rojo text-4xl font-bold text-center mb-10">
            What Our Clients Say
          </h3>

          <div className="overflow-hidden rounded-xl shadow-lg bg-white p-10 relative">
            <AnimatePresence mode="wait">
              {testimonials.map((testi, idx) =>
                idx === currentTestimonial ? (
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
                    <p className="italic text-lg text-black/80 mb-6">
                      “{testi.feedback}”
                    </p>
                    <p className="font-semibold text-rojo">{testi.name}</p>
                    <p className="text-sm text-black/60">{testi.role}</p>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentTestimonial ? "bg-rojo" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="bg-rojo text-white rounded-xl max-w-4xl mx-auto p-12 text-center shadow-lg">
          <h3 className="text-3xl font-extrabold mb-6">
            Ready to transform your brand?
          </h3>
          <p className="mb-8 text-lg max-w-xl mx-auto">
            Let&apos;s work together to create unforgettable campaigns that move
            your business forward.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-rojo font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition"
          >
            Get in Touch
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
