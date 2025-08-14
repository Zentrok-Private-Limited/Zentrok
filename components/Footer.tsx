"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Send } from "lucide-react";
import { useTheme } from "next-themes";

const AnimatedFooter: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Colors based on theme
  const foreground = `var(--foreground)`; // main text/icons
  const inputBg = theme === "dark" ? "var(--surface-1000)" : "var(--surface-1000)";
  
  // Footer background
  const footerBg = theme === "dark" ? "var(--surface-900)" : "var(--surface-1000)";

  // Button logic
  const buttonBg = theme === "dark" ? "#ffffff" : "#1a1a1a";
  const buttonText = theme === "dark" && buttonBg === "#ffffff" ? "#000000" : "#ffffff";
  const borderColor = foreground;

  const socialIcons = [
    { Icon: FaFacebookF, link: "#" },
    { Icon: FaTwitter, link: "#" },
    { Icon: FaInstagram, link: "#" },
    { Icon: FaLinkedinIn, link: "#" },
  ];

  return (
    <footer
      className="w-full border-t"
      style={{ borderColor, backgroundColor: footerBg }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center py-16 px-6 space-y-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold max-w-xl" style={{ color: foreground }}>
          Want weekly{" "}
          <span className="font-semibold" style={{ color: foreground }}>
            marketing insights
          </span>{" "}
          delivered straight to your inbox?
        </h2>

        {/* CTA Form */}
        <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full border focus:outline-none"
            style={{
              backgroundColor: inputBg,
              borderColor,
              color: foreground,
            }}
          />

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="relative overflow-hidden flex items-center px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl group transition-all duration-300 pr-10"
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
            }}
          >
            <span className="relative mr-5 z-10" style={{ color: buttonText }}>
              Subscribe
            </span>
            <Send
              size={18}
              style={{ color: buttonText }}
              className="absolute right-4 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out z-10"
            />
          </motion.button>
        </form>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {socialIcons.map(({ Icon, link }, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={link}
              className="p-3 rounded-full border transition-colors duration-300"
              style={{
                borderColor,
                color: foreground,
              }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-70" style={{ color: foreground }}>
          © {new Date().getFullYear()} Zentrok. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
