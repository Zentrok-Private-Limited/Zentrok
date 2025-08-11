"use client";

import { motion } from "framer-motion";
import { Send, Users, Lightbulb, LucideIcon } from "lucide-react";

type Card = {
  color: string;
  heading: string;
  subtext: string;
  Icon: LucideIcon;
  videoSrc: string;
};

const cards: Card[] = [
  {
    color: "#CC121C",
    heading: "Looking to become the next big name everyone’s talking about?",
    subtext:
      "It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.",
    Icon: Send,
    videoSrc: "/video.mp4",
  },
  {
    color: "#7E3FF2",
    heading: "Fear of missing out on the chance to do your life’s greatest work?",
    subtext:
      "It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.",
    Icon: Users,
    videoSrc: "/video2.mp4",
  },
  {
    color: "#238BC3",
    heading: "Excited about the wonderful world of digital storytelling?",
    subtext:
      "It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.",
    Icon: Lightbulb,
    videoSrc: "/video3.mp4",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="p-0 m-0 bg-background overflow-hidden">
      <div className="flex flex-col">
        {cards.map(({ color, heading, subtext, Icon, videoSrc }, i) => (
          <motion.div
            key={heading}
            style={{ backgroundColor: color }}
            className="relative p-10 text-white shadow-xl w-full border-b border-white/10 flex flex-col md:flex-row justify-between items-start gap-6"
            initial={{ y: i === 0 ? 0 : 400, opacity: i === 0 ? 1 : 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: i * 0.2,
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            {/* Text Content */}
            <div className="flex-1 pr-4">
              <h2 className="text-3xl md:text-5xl font-heading font-semibold leading-snug mb-4">
                {heading}
              </h2>
              <p className="text-lg opacity-80">{subtext}</p>
            </div>

            {/* Icon & Video */}
            <div className="flex flex-col items-end justify-between h-full">
              <div className="opacity-70 mb-4">
                <Icon size={50} strokeWidth={1.5} />
              </div>
              <div className="rounded-md overflow-hidden shadow-xl w-full max-w-md">
                <video
                  src={videoSrc}
                  aria-label={`Video for ${heading}`}
                  loop
                  muted
                  playsInline
                  autoPlay
                  controls
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
