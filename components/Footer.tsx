"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Send } from "lucide-react";

interface Dot {
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
}

const AnimatedFooter: React.FC = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid SSR mismatch
    const newDots: Dot[] = Array.from({ length: 12 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
    }));
    setDots(newDots);
  }, []);

  return (
    <footer className="relative overflow-hidden text-black">
      {/* Gradient Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F8D001] via-[#FFD54F] to-[#FFBE54] animate-gradient-slow"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              top: dot.top,
              left: dot.left,
              animationDelay: dot.animationDelay,
              animationDuration: dot.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-16 px-6 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
          Want weekly{" "}
          <span className="text-[#E63946]">marketing insights</span> delivered
          straight to your inbox?
        </h2>

        {/* CTA */}
        <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-[#E63946]"
          />

          {/* Subscribe Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="relative overflow-hidden flex items-center px-6 py-3 rounded-full bg-[#E63946] text-white font-semibold shadow-lg hover:shadow-xl group transition-all duration-300 pr-10"
          >
            <span className="relative z-10">Subscribe</span>
            <Send
              size={18}
              className="absolute right-4 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out z-10"
            />
          </motion.button>
        </form>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {[
            { Icon: FaFacebookF, link: "#" },
            { Icon: FaTwitter, link: "#" },
            { Icon: FaInstagram, link: "#" },
            { Icon: FaLinkedinIn, link: "#" },
          ].map(({ Icon, link }, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={link}
              className="p-3 bg-black rounded-full text-white hover:bg-white hover:text-black transition hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Zentrok. All rights reserved.
        </p>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient-slow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 8s ease infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default AnimatedFooter;
