"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSun, FaMoon } from "react-icons/fa";
import { Send } from "lucide-react";

const AnimatedFooter: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Update the HTML class and localStorage when theme changes
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  const foreground = `var(--foreground)`;
  const background = `var(--background)`;
  const inputBg = theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)";

  const buttonBg = theme === "dark" ? "#ffffff" : "#1a1a1a";
  const buttonText = theme === "dark" ? "#000000" : "#ffffff";
  const borderColor = foreground;

  const socialIcons = [
    { Icon: FaFacebookF, link: "#" },
    { Icon: FaTwitter, link: "#" },
    { Icon: FaInstagram, link: "#" },
    { Icon: FaLinkedinIn, link: "#" },
  ];

  return (
    <footer 
      className="relative w-full border-t overflow-hidden" 
      style={{ 
        borderColor,
        backgroundColor: background
      }}
    >
      {/* Theme Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="absolute top-6 right-6 z-20 p-3 rounded-full border"
        style={{
          borderColor,
          color: foreground,
          backgroundColor: background
        }}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
      </motion.button>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="/footer-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/50 z-0" />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center py-16 px-6 space-y-8">
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
                backgroundColor: inputBg
              }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <p className="text-sm opacity-70" style={{ color: foreground }}>
          © {new Date().getFullYear()} Zentrok. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default AnimatedFooter;