"use client";

import { useEffect, useState, useRef, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, Send } from "lucide-react";
import { FiMoon, FiSun } from "react-icons/fi";
import { usePathname } from "next/navigation";

type Position = { left: number; width: number; opacity: number };

// --------------------- Helper ---------------------
const oppositeColor = (color: string) => (color === "black" ? "white" : "black");

// --------------------- Navbar ---------------------
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [hoverPos, setHoverPos] = useState<Position>({ left: 0, width: 0, opacity: 0 });
  const [activePos, setActivePos] = useState<Position>({ left: 0, width: 0, opacity: 1 });

  const pathname = usePathname();

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navBgColor = isScrolled ? (darkMode ? "black" : "white") : darkMode ? "black" : "white";

  const logoClass = oppositeColor(navBgColor);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? `bg-${darkMode ? "black" : "white"} backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700`
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex mr-35 items-center gap-2">
          <Image src="/zentrok.svg" alt="ZENTROK Logo" width={32} height={32} className="rounded-md" />
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${logoClass === "white" ? "text-white" : "text-black"}`}>
            ZENTROK
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul
            onMouseLeave={() => setHoverPos({ ...hoverPos, opacity: 0 })}
            className={`relative flex mt-5 w-fit rounded-full border border-gray-300 p-0.5 ${
              darkMode ? "bg-black" : "bg-white"
            }`}
          >
            {navLinks.map(({ href, label }) => (
              <NavTab
                key={href}
                href={href}
                setHoverPos={setHoverPos}
                setActivePos={setActivePos}
                isActive={pathname === href}
                navBgColor={navBgColor}
              >
                {label}
              </NavTab>
            ))}
            {/* Hover / Active bubble */}
            <Cursor position={hoverPos.opacity ? hoverPos : activePos} navBgColor={navBgColor} />
          </ul>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <SliderToggle selected={darkMode ? "dark" : "light"} setSelected={(mode) => setDarkMode(mode === "dark")} />
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact"
              className={`relative overflow-hidden flex items-center px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl group transition-all duration-300 pr-9 ${
                oppositeColor(navBgColor) === "white" ? "bg-white text-black" : "bg-black text-white"
              }`}
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
          <SliderToggle selected={darkMode ? "dark" : "light"} setSelected={(mode) => setDarkMode(mode === "dark")} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full shadow font-medium ${
              oppositeColor(navBgColor) === "white" ? "text-black bg-white" : "text-white bg-black"
            }`}
          >
            <ChevronLeft size={14} className={`transition-transform ${mobileMenuOpen ? "rotate-0" : "-rotate-180"}`} />
          </button>

          {mobileMenuOpen && (
            <div
              className={`absolute right-4 top-full mt-2 shadow-md rounded-xl px-4 py-3 flex flex-col gap-2 ${
                navBgColor === "black" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-2 py-1 rounded transition-colors duration-200 ${
                    pathname === href
                      ? oppositeColor(navBgColor) === "white"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                      : `hover:${oppositeColor(navBgColor) === "white" ? "bg-black text-white" : "bg-white text-black"}`
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
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
  setHoverPos: React.Dispatch<React.SetStateAction<Position>>;
  setActivePos: React.Dispatch<React.SetStateAction<Position>>;
  isActive: boolean;
  navBgColor: string;
};

const NavTab = ({ href, children, setHoverPos, setActivePos, isActive, navBgColor }: NavTabProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (isActive && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setActivePos({ left: ref.current.offsetLeft, width, opacity: 1 });
    }
  }, [isActive, setActivePos]);

  // Determine the Cursor background color (opposite of nav bg)
  const cursorBg = oppositeColor(navBgColor);

  // Text colors for better contrast
  const getTextClasses = () => {
    if (isActive) {
      return `
        ${cursorBg === "white" ? "text-black" : "text-white"} 
        group-hover:${cursorBg === "white" ? "text-black/70" : "text-white/70"}
      `;
    } else {
      return `
        ${navBgColor === "black" ? "text-white" : "text-black"} 
        group-hover:${cursorBg === "white" ? "text-black" : "text-white"}
      `;
    }
  };

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setHoverPos({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className="relative z-10 pl-5 block cursor-pointer px-3 py-1 text-xs uppercase group"
    >
      <Link href={href} className={`relative z-10 transition-colors duration-200 ${getTextClasses()}`}>
        {children}
      </Link>
    </li>
  );
};


// --------------------- Cursor ---------------------
type CursorProps = { position: Position; navBgColor: string };
const Cursor = ({ position, navBgColor }: CursorProps) => (
  <motion.li
    animate={{ left: position.left, width: position.width, opacity: position.opacity }}
    transition={{ type: "spring", damping: 20, stiffness: 300 }}
    className={`absolute z-0 h-5 rounded-full ${
      oppositeColor(navBgColor) === "white" ? "bg-white" : "bg-black"
    }`}
  />
);

// --------------------- SliderToggle ---------------------
const TOGGLE_CLASSES =
  "text-xs font-medium flex items-center gap-1.5 px-3 py-1.5 transition-colors relative z-10";

type SliderToggleProps = { selected: "light" | "dark"; setSelected: (mode: "light" | "dark") => void };

const SliderToggle = ({ selected, setSelected }: SliderToggleProps) => (
  <div className="relative flex w-fit items-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 overflow-hidden">
    <button
      className={`${TOGGLE_CLASSES} ${selected === "light" ? "text-white" : "text-slate-800"}`}
      onClick={() => setSelected("light")}
    >
      <FiSun className="relative z-10 text-sm" /> Light
    </button>
    <button
      className={`${TOGGLE_CLASSES} ${selected === "dark" ? "text-white" : "text-slate-300"}`}
      onClick={() => setSelected("dark")}
    >
      <FiMoon className="relative z-10 text-sm" /> Dark
    </button>
    <div className={`absolute inset-0 z-0 flex ${selected === "dark" ? "justify-end" : "justify-start"}`}>
      <motion.span
        layout
        transition={{ type: "spring", damping: 15, stiffness: 250 }}
        className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
      />
    </div>
  </div>
);
