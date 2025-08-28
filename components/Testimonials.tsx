"use client";
import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "They designed a professional and user-friendly website for my clinic, making it easier for patients to connect and book appointments. Very impressed",
      name: "Nitin Sharama",
      role: "Physiotherapy Clinic Owner",
      image: "/NitinSharma.jpg",
    },
    {
      quote:
        "Working with Zentrok was wonderful. They helped me build a strong online presence, and I have seen more inquiries and visibility since partnering with them.",
      name: "Mamta",
      role: "Astrologer & Tarot Reader",
      image: "/Mamta.jpg",
    },
 {
  quote:
    "ZENTROK absolutely nailed our product photography. The attention to detail, lighting, and composition was exactly what we needed to elevate our brand visuals. They're a team that just gets it.",
  name: "Akshat ",
  role: "Co founder (Mustfit Design)",
  image: "/Akshat.jpg",
}

  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden transition-colors">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-[var(--sun)] mb-12">
          What our clients say
        </h2>

        {/* Testimonial Card */}
        <div className="bg-[var(--surface-1000)] border border-[var(--grid-major)] shadow-xl rounded-2xl p-10 relative transition-all duration-500">
          <p className="text-xl md:text-2xl font-semibold text-[var(--foreground)] italic leading-relaxed mb-8">
            “{testimonials[current].quote}”
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border border-[var(--amber)]">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-[var(--foreground)]">
                {testimonials[current].name}
              </h3>
              <p className="text-sm font-medium text-[var(--foreground)]/70">
                {testimonials[current].role}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--grid-major)] text-[var(--foreground)] hover:bg-[var(--honey)] hover:text-[var(--background)] transition font-bold"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--grid-major)] text-[var(--foreground)] hover:bg-[var(--honey)] hover:text-[var(--background)] transition font-bold"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
