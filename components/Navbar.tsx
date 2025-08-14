"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  Send,
  Home,
  Info,
  BookOpen,
  Phone,
  Briefcase,
  Sun,
  Moon,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // ✅ Start in dark mode

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply dark mode to <html> and set default on mount
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // ✅ Ensure "dark" class is applied immediately on first load
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
    ? "bg-white text-black hover:bg-white-200"
    : "bg-gray-600 text-white hover:bg-gray-700";

  const navLinks = [
    { href: "/home", label: "HOME", icon: Home },
    { href: "/about", label: "ABOUT", icon: Info },
    { href: "/services", label: "SERVICES", icon: Briefcase },
    { href: "/blog", label: "BLOG", icon: BookOpen },
    { href: "/contact", label: "CONTACT", icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${backgroundClass}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/zentrok.svg"
            alt="ZENTROK Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className={`text-2xl font-bold tracking-tight ${navTextColor}`}>
            ZENTROK
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 mt-4 font-medium">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`group relative flex flex-col items-center ${navTextColor}`}
            >
              <Icon
                className="absolute -top-6 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 text-rojo"
                size={16}
              />
              <span className="hover:text-rojo transition">{label}</span>
            </Link>
          ))}
        </div>

        {/* Right: Theme Toggle + Button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 ${navTextColor} hover:scale-105 transition`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Let's Work Button */}
          <Link
            href="#contact"
            className={`flex items-center gap-2 font-semibold px-4 py-2 rounded-full shadow hover:shadow-md transition-transform hover:-translate-y-0.5 group ${buttonClass}`}
          >
            <span>Let&apos;s Work</span>
            <Send
              size={16}
              className="transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative flex items-center gap-2">
          {/* Theme Toggle (mobile) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 ${navTextColor}`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex items-center gap-2 bg-white dark:bg-gray-800 ${navTextColor} font-medium px-4 py-2 rounded-full shadow hover:shadow-md transition hover:-translate-y-0.5`}
          >
            <span className="bg-black dark:bg-white text-white dark:text-black rounded-full p-1">
              <ChevronLeft
                size={16}
                className={`transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-0" : "-rotate-180"
                }`}
              />
            </span>
          </button>

          {mobileMenuOpen && (
            <div
              className={`absolute right-0 top-full mt-2 ${navTextColor} bg-white dark:bg-gray-800 shadow-md rounded-xl px-6 py-4 flex flex-col gap-4`}
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
              <Link
                href="#contact"
                className={`mt-2 text-center font-semibold px-4 py-2 rounded-full shadow hover:shadow-md ${buttonClass}`}
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
