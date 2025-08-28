"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Send } from "lucide-react";
import { useTheme } from "next-themes";

const AnimatedFooter: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // 1. Add state for the email input and submission status
  const [email, setEmail] = useState("");
  type Status = "idle" | "loading" | "success" | "error";
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  
  // 2. Create the form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return; // Prevent submission if email is empty
    
    setStatus("loading");

    try {
      const response = await fetch("https://z-backend-neon.vercel.app/api/subscribe/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail(""); // Clear input on success
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }

    // Reset the button status after 3 seconds so the user can try again
    setTimeout(() => setStatus("idle"), 3000);
  };
  
  // --- Style & UI Logic (mostly unchanged) ---
  const foreground = `var(--foreground)`;
  const inputBg = theme === "dark" ? "var(--surface-1000)" : "var(--surface-1000)";
  const footerBg = theme === "dark" ? "var(--surface-900)" : "var(--surface-1000)";
  const buttonBg = theme === "dark" ? "#ffffff" : "#1a1a1a";
  const buttonText = theme === "dark" && buttonBg === "#ffffff" ? "#000000" : "#ffffff";
  const borderColor = foreground;

  const socialIcons = [
    { Icon: FaFacebookF, link: "#" },
    { Icon: FaTwitter, link: "#" },
    { Icon: FaInstagram, link: "#" },
    { Icon: FaLinkedinIn, link: "#" },
  ];
  
  // 3. Dynamic button text based on submission status
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
        <h2 className="text-3xl md:text-4xl font-bold max-w-xl" style={{ color: foreground }}>
          Want weekly{" "}
          <span className="font-semibold" style={{ color: foreground }}>
            marketing insights
          </span>{" "}
          delivered straight to your inbox?
        </h2>

        {/* --- FORM UPDATES --- */}
        <form 
          onSubmit={handleSubmit} // Added onSubmit handler
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
        >
          <input
            type="email"
            name="email"     // Added name attribute
            placeholder="Enter your email"
            value={email}   // Controlled component
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            required
            className="flex-1 px-4 py-3 rounded-full border focus:outline-none"
            style={{
              backgroundColor: inputBg,
              borderColor,
              color: foreground,
            }}
          />

          <motion.button
            whileHover={{ scale: status === 'loading' ? 1 : 1.04 }}
            whileTap={{ scale: status === 'loading' ? 1 : 0.96 }}
            type="submit"
            disabled={status === 'loading'} // Disable button while loading
            className="relative overflow-hidden flex items-center px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl group transition-all duration-300 pr-10 disabled:bg-gray-500 disabled:cursor-not-allowed"
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
            }}
          >
            <span className="relative mr-5 z-10" style={{ color: buttonText }}>
              {getButtonText()} {/* Use dynamic button text */}
            </span>
            <Send
              size={18}
              style={{ color: buttonText }}
              className="absolute right-4 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out z-10"
            />
          </motion.button>
        </form>

        <div className="flex space-x-4">
          {socialIcons.map(({ Icon, link }, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={link}
              className="p-3 rounded-full border transition-colors duration-300"
              style={{ borderColor, color: foreground }}
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