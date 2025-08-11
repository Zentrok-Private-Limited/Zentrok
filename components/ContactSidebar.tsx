"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ContactSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 bg-rojo text-white px-6 py-3 font-semibold rounded-full shadow-lg hover:brightness-110 transition"
      >
        Let’s Work
      </button>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-full md:w-96 h-full bg-white z-50 shadow-xl flex flex-col p-8 text-black"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black">Start a Project</h2>
                <button onClick={() => setIsOpen(false)} className="text-black">
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4 flex-grow overflow-auto text-black">
                <div>
                  <label className="block text-sm font-medium text-black">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-rojo text-black placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-rojo text-black placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Budget Range</label>
                  <select
                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-rojo text-black"
                  >
                    <option>Under 10k</option>
                    <option>10k–20k</option>
                    <option>20k–50k</option>
                    <option>50k–100k</option>
                    <option>100k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project…"
                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-rojo text-black placeholder-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-rojo text-white py-3 font-semibold rounded-md hover:brightness-110 transition"
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
