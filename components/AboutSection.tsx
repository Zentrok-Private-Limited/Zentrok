"use client";

import { motion } from "framer-motion";
import { Send, Users, Lightbulb } from "lucide-react";

const cards = [
  {
    color: "#cc128B",
    heading: "Become the next big name everyone’s talking about",
    subtext:
      "Your brand is your story. We ensure every step resonates with impact and clarity.",
    Icon: Send,
    videoSrc: "/video.mp4",
  },
  {
    color: "#7E3FF2",
    heading: "Don't miss the chance to do your life’s greatest work",
    subtext:
      "From strategy to execution, we make every move count in creating your legacy.",
    Icon: Users,
    videoSrc: "/video2.mp4",
  },
  {
    color: "#238BC3",
    heading: "Excited about digital storytelling?",
    subtext:
      "We craft immersive narratives that make your audience feel, remember, and share.",
    Icon: Lightbulb,
    videoSrc: "/video3.mp4",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
        {cards.map(({ color, heading, subtext, Icon, videoSrc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-xl shadow-md border border-white/10 bg-surface-1000 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Text */}
            <div className="flex-1 space-y-3 md:pr-4">
              <h2
                className="text-2xl md:text-3xl font-sans font-extrabold tracking-tight leading-snug"
                style={{ color }}
              >
                {heading}
              </h2>
              <p className="text-sm md:text-base text-foreground opacity-80 leading-relaxed">
                {subtext}
              </p>
            </div>

            {/* Icon + Video */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <motion.div
                className="p-2 rounded-full bg-white/10 flex items-center justify-center"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <Icon size={36} strokeWidth={1.5} />
              </motion.div>
              <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <video
                  src={videoSrc}
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
