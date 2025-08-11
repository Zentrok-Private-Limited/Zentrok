"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-[#F8D001] via-[#FDE047] to-[#F8D001] py-20 overflow-hidden"
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/bg-pattern.svg"
          alt="Pattern"
          fill
          className="object-cover opacity-10 pointer-events-none"
        />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/contact-illustration.png" // Replace with your cool icon/image
            alt="Get in touch"
            width={500}
            height={500}
            className="drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Let’s <span className="text-rojo">Talk</span> Business
          </h2>
          <p className="text-gray-700 mb-8">
            Got a project in mind? Let’s craft a winning strategy together.
            Reach out to us today.
          </p>

          <ul className="space-y-6 text-gray-700">
            <li className="flex items-center space-x-4">
              <Mail className="text-rojo" size={26} />
              <span>hello@youragency.com</span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone className="text-rojo" size={26} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-4">
              <MapPin className="text-rojo" size={26} />
              <span>123 Creative Street, Marketing City</span>
            </li>
          </ul>

          <a
            href="mailto:hello@youragency.com"
            className="inline-block mt-8 px-6 py-3 bg-rojo text-white font-semibold rounded-md hover:brightness-110 transition-all duration-300"
          >
            Send Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
