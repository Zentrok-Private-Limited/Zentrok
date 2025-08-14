"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Send,
  Sun,
  Moon,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const backgroundClass = isScrolled
    ? "bg-white dark:bg-gray-900 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700"
    : "bg-transparent";

  const navTextColor = isScrolled
    ? "text-black dark:text-white"
    : darkMode
    ? "text-white"
    : "text-black";

  const buttonClass = darkMode
    ? "bg-white text-black hover:bg-gray-200"
    : "bg-gray-600 text-white hover:bg-gray-700";

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${backgroundClass}`}
      role="navigation"
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/zentrok.svg"
            alt="ZENTROK Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className={`text-xl font-bold tracking-tight ${navTextColor}`}>
            ZENTROK
          </span>
        </Link>

        {/* Desktop Links with Slide Highlight */}
        <div className="hidden md:block">
          <ul
            onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
            className="relative flex mt-5 w-fit rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-0.5"
          >
            {navLinks.map(({ href, label }) => (
              <NavTab key={href} href={href} setPosition={setPosition}>
                {label}
              </NavTab>
            ))}
            <Cursor position={position} />
          </ul>
        </div>

        {/* Right: Theme Toggle + Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-1.5 rounded-full bg-gray-100 dark:bg-gray-300 ${navTextColor} hover:scale-105 transition`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Let's Work */}
          <Link
            href="#contact"
            className={`flex items-center gap-2 font-medium px-3 py-1.5 rounded-full shadow hover:shadow-md transition ${buttonClass}`}
          >
            <span>Let&apos;s Work</span>
            <Send size={14} className="opacity-0 group-hover:opacity-100" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 ${navTextColor}`}
          >
            {darkMode ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex items-center gap-2 bg-white dark:bg-gray-800 ${navTextColor} font-medium px-3 py-1.5 rounded-full shadow`}
          >
            <ChevronLeft
              size={14}
              className={`transition-transform ${mobileMenuOpen ? "rotate-0" : "-rotate-180"}`}
            />
          </button>

          {mobileMenuOpen && (
            <div className={`absolute right-4 top-full mt-2 ${navTextColor} bg-white dark:bg-gray-800 shadow-md rounded-xl px-4 py-3 flex flex-col gap-2`}>
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:opacity-80"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="#contact"
                className={`mt-2 text-center font-medium px-3 py-1.5 rounded-full shadow ${buttonClass}`}
              >
                Let&apos;s Work
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

const NavTab = ({ href, children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1 text-xs uppercase group"
    >
      <Link
        href={href}
        className="relative z-10 transition-colors duration-200 text-black dark:text-white group-hover:text-black dark:group-hover:text-black"
      >
        {children}
      </Link>
    </li>
  );
};


const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-5 rounded-full bg-black dark:bg-white"
    />
  );
};
