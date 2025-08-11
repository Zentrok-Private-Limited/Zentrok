"use client";

import { motion } from "framer-motion";
import { Send, Users, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      color: "#CC121C",
      heading: "Looking to become the next big name everyone’s talking about?",
      subtext:
        "It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.",
      Icon: Send,
      // Change 'img' to 'videoSrc' and point to your video file in the public folder
      videoSrc: "/video.mp4", // Assuming you have video1.mp4 in your public folder
    },
    {
      color: "#7E3FF2",
      heading: "Fear of missing out on the chance to do your life’s greatest work?",
      subtext:
        "It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.",
      Icon: Users,
      videoSrc: "/video2.mp4", // Assuming you have video2.mp4 in your public folder
    },
    {
      color: "#238BC3",
      heading: "Excited about the wonderful world of digital storytelling?",
      subtext:
        "It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.",
      Icon: Lightbulb,
      videoSrc: "/video3.mp4", // Assuming you have video3.mp4 in your public folder
    },
  ];

  return (
    <section id="about" className="p-0 m-0 bg-background overflow-hidden">
      <div className="flex flex-col">
        {cards.map(({ color, heading, subtext, Icon, videoSrc }, i) => ( // Destructure videoSrc instead of img
          <motion.div
            key={i}
            style={{ backgroundColor: color }}
            className="relative p-10 text-white shadow-xl w-full m-0 border-b border-white/10 flex justify-between items-start"
            initial={{ y: i === 0 ? 0 : 400, opacity: i === 0 ? 1 : 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: i * 0.2,
            }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={{
              visible: { y: 0, opacity: 1 },
            }}
          >
            {/* Left aligned text content */}
            <div className="flex-1 pr-4">
              <h1 className="text-5xl font-heading font-semibold leading-snug mb-4">
                {heading}
              </h1>
              <p className="text-lg opacity-80 mb-4">{subtext}</p>
            </div>

            {/* Right aligned Icon and Video */}
            <div className="flex flex-col items-end justify-between h-full">
              {/* Icon */}
              <div className="opacity-70 mb-4">
                <Icon size={50} strokeWidth={1.5} />
              </div>

              {/* Video */}
              <div className="rounded-md overflow-hidden shadow-xl"> {/* Optional: Add styling to the video container */}
                <video
                  src={videoSrc} // Use videoSrc as the source for the video
                  alt="illustration video" // Descriptive alt text for accessibility
                  width={400} // Set a width for your video
                  height={200} // Set a height for your video
                  loop // Optional: loop the video playback
                  muted // Recommended for autoplay; video will play without sound by default
                  playsInline // Important for iOS devices to play video inline
                  autoPlay // Optional: autoplay the video
                  controls // Optional: show video controls (play/pause, volume, etc.)
                  className="drop-shadow-xl object-cover" // object-cover helps maintain aspect ratio and fill container
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}