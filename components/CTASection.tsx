"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function CTASection() {
  const [openForm, setOpenForm] = useState<null | "work" | "brand">(null);

  useEffect(() => {
    document.body.style.overflow = openForm ? "hidden" : "";
  }, [openForm]);

  const Card = ({
    title,
    subtitle,
    bgColor,
    textColor,
    onClick,
  }: {
    title: string;
    subtitle: string;
    bgColor: string;
    textColor: string;
    onClick: () => void;
  }) => (
    <div
      onClick={onClick}
      className={`group rounded-lg p-8 flex flex-col justify-end cursor-pointer transition-colors duration-300 ${bgColor} ${textColor}`}
    >
      <p className="text-sm opacity-80 mb-2">{subtitle}</p>
      <div className="flex items-center gap-2">
        <ArrowRight
          size={28}
          className="transform transition-transform duration-300 group-hover:translate-x-1"
        />
        <span className="relative text-4xl font-bold">
          {title}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-current group-hover:w-full transition-all duration-300"></span>
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* CTA Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-yellow-100 min-h-[60vh]">
        <Card
          title="Let’s work"
          subtitle="Start your project with us"
          bgColor="bg-black"
          textColor="text-white"
          onClick={() => setOpenForm("work")}
        />
        <Card
          title="Brand Masterplan"
          subtitle="Craft your winning strategy"
          bgColor="bg-purple-300"
          textColor="text-black"
          onClick={() => setOpenForm("brand")}
        />
      </div>

      {/* Side Panel */}
      <AnimatePresence>
        {openForm && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpenForm(null)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-full md:w-96 h-full bg-white z-50 shadow-xl flex flex-col p-8 text-black"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {openForm === "work" ? "Start a Project" : "Get Your Brand Plan"}
                </h2>
                <button onClick={() => setOpenForm(null)}>
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4 flex-grow overflow-auto">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-yellow-500"
                  />
                </div>
                {openForm === "work" && (
                  <div>
                    <label className="block text-sm font-medium">Budget Range</label>
                    <select className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-yellow-500">
                      <option>Under 10k</option>
                      <option>10k–20k</option>
                      <option>20k–50k</option>
                      <option>50k–100k</option>
                      <option>100k+</option>
                    </select>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project…"
                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-3 font-semibold rounded-md hover:brightness-110 transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
