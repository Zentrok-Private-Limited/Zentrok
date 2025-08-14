"use client";

import { useEffect, useState, useRef, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, Send, Sun, Moon } from "lucide-react";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    ? "bg-white text-black"
    : "bg-gray-600 text-white";

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

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul
            onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
            className="relative flex mt-5 w-fit rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black p-0.5"
          >
            {navLinks.map(({ href, label }) => (
              <NavTab key={href} href={href} setPosition={setPosition}>
                {label}
              </NavTab>
            ))}
            <Cursor position={position} />
          </ul>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-1.5 rounded-full bg-gray-100 dark:bg-gray-300 ${navTextColor} hover:scale-105 transition`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Animated CTA Button */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact"
              className={`
                relative overflow-hidden flex items-center 
                px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl 
                group transition-all duration-300 pr-9 text-sm
                ${buttonClass}
              `}
            >
              <span className="relative z-10">Let&apos;s Work</span>
              <Send
                size={16}
                className="absolute right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10"
              />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
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
              className={`transition-transform ${
                mobileMenuOpen ? "rotate-0" : "-rotate-180"
              }`}
            />
          </button>

          {mobileMenuOpen && (
            <div
              className={`absolute right-4 top-full mt-2 ${navTextColor} bg-white dark:bg-gray-800 shadow-md rounded-xl px-4 py-3 flex flex-col gap-2`}
            >
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

              {/* Animated Mobile CTA */}
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="#contact"
                  className={`
                    mt-2 text-center font-medium px-3 py-1.5 rounded-full shadow 
                    group transition-all duration-300 pr-9 text-sm ${buttonClass}
                  `}
                >
                  <span className="relative z-10">Let&apos;s Work</span>
                  <Send
                    size={16}
                    className="absolute right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10"
                  />
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

// --------------------- NavTab ---------------------
type NavTabProps = {
  href: string;
  children: ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
};

const NavTab = ({ href, children, setPosition }: NavTabProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

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

// --------------------- Cursor ---------------------
type CursorProps = {
  position: Position;
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-5 rounded-full bg-black dark:bg-white"
    />
  );
};
