"use client";
import { useState } from "react";

const team = [
  { name: "Himanshu", role: "Creative Director", img: "/team/himanshu.jpg", bio: "Brand nerd. Coffee addict." },
  { name: "Gaurav", role: "Growth Lead", img: "/team/gaurav.jpg", bio: "Performance & data freak." },
  // add more...
];

export default function TeamGrid() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-amber-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold mb-8 text-center sm:text-left">The Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="w-full bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:shadow-lg transition"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="text-left flex-1">
                <div className="font-semibold text-lg">{t.name}</div>
                <div className="text-sm text-black/70">{t.role}</div>

                {open === i && (
                  <p className="mt-3 text-sm text-black/80 transition-opacity duration-300">
                    {t.bio}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
