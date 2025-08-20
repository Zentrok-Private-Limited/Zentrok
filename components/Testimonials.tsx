"use client";
import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Advika Clinic completely changed my life! After months of pain, their physiotherapists guided me with patience and care. I can finally move freely again.",
      name: "Priya Sharma",
      role: "Software Engineer",
      image: "/person-1.webp",
    },
    {
      quote:
        "Their attention to detail and personal approach is unmatched. I felt supported every step of the way during my recovery journey.",
      name: "Rishika Verma",
      role: "Athlete",
      image: "/person-2.jpeg",
    },
    {
      quote:
        "The team not only treated my injury but also taught me exercises to prevent it from happening again. Truly holistic care.",
      name: "Anjali Mehta",
      role: "Teacher",
      image: "/person-3.webp",
    },
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
        <h2 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-12">
          What our clients say
        </h2>

        {/* Testimonial Card */}
        <div className="bg-[var(--surface-1000)] border border-[var(--grid-major)] shadow-xl rounded-2xl p-10 relative transition-all duration-500">
          <p className="text-xl md:text-2xl font-semibold text-[var(--foreground)] italic leading-relaxed mb-8">
            “{testimonials[current].quote}”
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border border-[var(--grid-major)]">
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
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--grid-major)] text-[var(--foreground)] hover:bg-[var(--emerald)] hover:text-white transition font-bold"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--grid-major)] text-[var(--foreground)] hover:bg-[var(--emerald)] hover:text-white transition font-bold"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
