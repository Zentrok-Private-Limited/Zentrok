"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Send } from "lucide-react";
import { useTheme } from "next-themes";

const AnimatedFooter: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Newsletter state
  const [email, setEmail] = useState("");
  type Status = "idle" | "loading" | "success" | "error";
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("https://z-backend-neon.vercel.app/api/subscribe/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 3000);
  };

  // Theme-driven colors
  const foreground = `var(--foreground)`;
  const inputBg = `var(--surface-1000)`;
  const footerBg = `var(--surface-900)`;
  const buttonBg = `var(--sun)`;
  const buttonText = `#1e1a0d`;
  const borderColor = `var(--foreground)`;

  // Socials with brand colors
  const socialIcons = [
    { Icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61579906194112", color: "#1877F2" }, // Facebook blue
    { Icon: FaTwitter, link: "https://x.com/Zentrok_05", color: "#1DA1F2" }, // Twitter sky blue
    { Icon: FaInstagram, link: "https://www.instagram.com/zentrok_/", color: "#E4405F" }, // Instagram pink/red
    { Icon: FaLinkedinIn, link: "#", color: "#0077B5" }, // LinkedIn blue
  ];

  const getButtonText = () => {
    switch (status) {
      case "loading":
        return "Subscribing...";
      case "success":
        return "Subscribed! 🎉";
      case "error":
        return "Try Again";
      default:
        return "Subscribe";
    }
  };

  return (
    <footer
      className="w-full border-t"
      style={{ borderColor, backgroundColor: footerBg }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center py-16 px-6 space-y-8">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold max-w-xl"
          style={{ color: foreground }}
        >
          Want weekly{" "}
          <span className="" style={{ color: "var(--amber)" }}>
            marketing insights
          </span>{" "}
          delivered straight to your inbox?
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-full border focus:outline-none text-sm"
            style={{
              backgroundColor: inputBg,
              borderColor,
              color: foreground,
            }}
          />

          <motion.button
            whileHover={{ scale: status === "loading" ? 1 : 1.04 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.96 }}
            type="submit"
            disabled={status === "loading"}
            className="relative overflow-hidden flex items-center justify-center px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl group transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
            }}
          >
            <span className="relative mr-5 z-10">{getButtonText()}</span>
            <Send
              size={18}
              style={{ color: buttonText }}
              className="absolute right-4 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out z-10"
            />
          </motion.button>
        </form>

        {/* Socials */}
        <div className="flex space-x-4">
          {socialIcons.map(({ Icon, link, color }, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={link}
              className="p-3 rounded-full border transition-colors duration-300"
              style={{ borderColor }}
            >
              <Icon size={18} style={{ color }} />
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
