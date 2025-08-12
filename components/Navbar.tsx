"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Send, Home, Info, BookOpen, Phone, Briefcase } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundClass = isScrolled
    ? "bg-white backdrop-blur-md shadow-sm border-b border-gray-200"
    : "bg-transparent";

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
        
        {/* Left: Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/zentrok.svg"
            alt="ZENTROK Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-2xl font-bold tracking-tight">ZENTROK</span>
        </Link>

        {/* Center: Nav Links (desktop) */}
        <div className="hidden md:flex items-center gap-8 mt-4 font-medium">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group relative flex flex-col items-center"
            >
              {/* Icon above text on hover */}
              <Icon
                className="absolute -top-6 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 text-rojo"
                size={16}
              />
              <span className="hover:text-rojo transition">{label}</span>
            </Link>
          ))}
        </div>

        {/* Right: Let’s Work Button (with your original animation) */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-full shadow hover:shadow-md transition-transform hover:-translate-y-0.5 group"
          >
            <span>Let’s Work</span>
            <Send
              size={16}
              className="transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-full shadow hover:shadow-md transition hover:-translate-y-0.5"
          >
            {!mobileMenuOpen && <span className="transition-opacity duration-300">Menu</span>}
            <span className="bg-black text-white rounded-full p-1">
              <ChevronLeft
                size={16}
                className={`transition-transform duration-300 ${mobileMenuOpen ? "rotate-0" : "-rotate-180"}`}
              />
            </span>
          </button>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 bg-white shadow-md rounded-xl px-6 py-4 flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-rojo"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-full shadow hover:shadow-md transition-transform hover:-translate-y-0.5 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Let’s Work</span>
                <Send
                  size={16}
                  className="transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
