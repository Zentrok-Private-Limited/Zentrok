"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Send, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverWork, setHoverWork] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundClass = isScrolled
    ? "bg-white backdrop-blur-md shadow-sm border-b border-gray-200"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${backgroundClass}`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Let’s Work Button */}
        <Link
          href="#contact"
          onMouseEnter={() => setHoverWork(true)}
          onMouseLeave={() => setHoverWork(false)}
          className="hidden sm:flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-full shadow hover:shadow-md transition-transform hover:-translate-y-0.5 group"
        >
          <span>Let’s Work</span>
          <Send
            size={16}
            className={`transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1`}
          />
        </Link>

        {/* Center: ZENTROK Brand */}
        <h1
          className="text-3xl sm:text-6xl font-black text-black tracking-tight font-sans select-none"
        >
          ZENTROK
        </h1>

        {/* Desktop Menu */}
        <div
          className="relative hidden sm:block"
          onMouseEnter={() => setHoverMenu(true)}
          onMouseLeave={() => setHoverMenu(false)}
        >
          <button className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-full shadow hover:shadow-md transition hover:-translate-y-0.5">
            {!hoverMenu && (
              <span className="transition-opacity duration-300">Menu</span>
            )}
            <span className="bg-black text-white rounded-full p-1 transition-transform duration-300 ease-in-out">
              <ChevronLeft
                size={16}
                className={`transition-transform duration-300 ${
                  hoverMenu ? "rotate-0" : "-rotate-180"
                }`}
              />
            </span>

            {hoverMenu && (
              <div className="flex gap-4 ml-4">
                <Link href="#services" className="hover:text-rojo">
                  Services
                </Link>
                <Link href="#work" className="hover:text-rojo">
                  Work
                </Link>
                <Link href="/about" className="hover:text-rojo">
                  About
                </Link>
                <Link href="/blog" className="hover:text-rojo">
                  Blog
                </Link>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden bg-white p-2 rounded-full shadow"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 shadow-md px-6 py-4 space-y-4">
          <Link
            href="#services"
            className="block hover:text-rojo"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#work"
            className="block hover:text-rojo"
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/about"
            className="block hover:text-rojo"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#blog"
            className="block hover:text-rojo"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="block hover:text-rojo"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
