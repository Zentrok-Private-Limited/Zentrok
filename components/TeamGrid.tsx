// components/TeamGrid.tsx
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
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6">The Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setOpen(open === i ? null : i)}
              className="text-left p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-black/70">{t.role}</div>
                </div>
              </div>

              {open === i && (
                <div className="mt-4 text-sm text-black/80">{t.bio}</div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
