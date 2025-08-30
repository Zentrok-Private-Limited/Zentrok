// src/components/UpperNavbar.tsx
import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

// Array of social icons and their links
const socialIcons = [
  { Icon: FaWhatsapp, link: "https://wa.me/919211870764" },
  { Icon: FaInstagram, link: "#" }, // Replace with your Instagram link
];

const UpperNavbar: React.FC = () => {
  return (
    <div className="bg-[var(--surface-1000)] text-[var(--text-on-surface)] py-2 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">
        
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <a
            href="tel:+919211870764"
            className="flex items-center hover:text-[var(--sun)] transition-colors"
          >
            <FaPhone className="mr-2" />
            <span>+91 92118 70764</span>
          </a>
          <a
            href="mailto:support@zentrok.com"
            className="flex items-center hover:text-[var(--sun)] transition-colors"
          >
            <FaEnvelope className="mr-2" />
            <span>support@zentrok.com</span>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {socialIcons.map(({ Icon, link }, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--sun)] transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default UpperNavbar;
