"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Send } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Close hover menu when mobile menu opens
    if (mobileMenuOpen) setHoverMenu(false);
  }, [mobileMenuOpen]);

  const backgroundClass = isScrolled
    ? "bg-white backdrop-blur-md shadow-sm border-b border-gray-200"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${backgroundClass}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left */}
        <Link
          href="#contact"
          className="hidden sm:flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-full shadow hover:shadow-md transition-transform hover:-translate-y-0.5 group"
        >
          <span>Let’s Work</span>
          <Send
            size={16}
            className="transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
          />
        </Link>

        {/* Center */}
        <h1 className="text-3xl sm:text-6xl font-black text-black tracking-tight font-sans select-none">
          ZENTROK
        </h1>

        {/* Right */}
        <div
          className="relative"
          onMouseEnter={() => !isMobile && setHoverMenu(true)}
          onMouseLeave={() => !isMobile && setHoverMenu(false)}
        >
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={hoverMenu || mobileMenuOpen}
            aria-controls="main-menu"
            onClick={() => isMobile && setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-full shadow hover:shadow-md transition hover:-translate-y-0.5"
          >
            {!hoverMenu && !mobileMenuOpen && (
              <span className="transition-opacity duration-300">Menu</span>
            )}
            <span className="bg-black text-white rounded-full p-1 transition-transform duration-300 ease-in-out">
              <ChevronLeft
                size={16}
                className={`transition-transform duration-300 ${
                  hoverMenu || mobileMenuOpen ? "rotate-0" : "-rotate-180"
                }`}
              />
            </span>
          </button>

          {/* Desktop Hover Menu */}
          {!isMobile && hoverMenu && (
            <div
              id="main-menu"
              className="absolute right-0 top-full mt-2 bg-white shadow-md rounded-xl px-6 py-4 flex gap-4"
            >
              {["/home", "/services", "/work", "/about", "/blog"].map((href, idx) => (
                <Link key={idx} href={href} className="hover:text-rojo">
                  {href.replace(/[#\/]/g, "").toLowerCase()}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Click Dropdown */}
          {isMobile && mobileMenuOpen && (
            <div
              id="main-menu"
              className="absolute right-0 top-full mt-2 bg-white shadow-md rounded-xl px-6 py-4 flex flex-col gap-4"
            >
              {["/home", "#services", "/work", "/about", "#blog"].map((href, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className="hover:text-rojo"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {href.replace(/[#\/]/g, "").toUpperCase()}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
