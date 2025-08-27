// src/components/UpperNavbar.tsx

import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

// Array of social icons and their links
const socialIcons = [
  { Icon: FaWhatsapp, link: "https://wa.me/919211870764" },
  { Icon: FaInstagram, link: "#" }, // You can replace "#" with your Instagram link
];

const UpperNavbar: React.FC = () => {
  return (
    <div className="bg-gray-700 text-white py-2 px-4 sm:px-6 lg:px-8">
      {/* Container is flex-col on mobile and flex-row on medium+ screens */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">
        
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <a href="tel:+919211870764" className="flex items-center hover:text-black transition-colors">
            <FaPhone className="mr-2" />
            <span>+91 92118 70764</span>
          </a>
          <a href="mailto:support@zentrok.com" className="flex items-center hover:text-black transition-colors">
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
              // These attributes make the link open in a new tab securely
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
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