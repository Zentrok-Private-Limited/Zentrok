"use client";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

export default function ContactPage() {
  const socialLinks = [
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaInstagram, href: "#" },
    { Icon: FaLinkedinIn, href: "#" },
    { Icon: FaWhatsapp, href: "#" },
  ];

  return (
    <>
    <section className="py-16 px-6 sm:px-12 md:px-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="whitespace-nowrap text-4xl font-bold mb-4 text-gray-900">
          Let’s build something that turns heads—together.
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          Ready to elevate your brand? Drop us a line and we’ll start with
          strategy. No fluff, just results.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent!");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="p-3 border rounded-lg focus:outline-none focus:border-[#E63946]"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="p-3 border rounded-lg focus:outline-none focus:border-[#E63946]"
        />
        <textarea
          placeholder="Tell us what’s on your mind"
          rows={4}
          required
          className="p-3 border rounded-lg focus:outline-none focus:border-[#E63946]"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="bg-[#E63946] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 text-center mt-16">
        <div>
          <FaPhoneAlt className="text-[#E63946] text-3xl mx-auto mb-2" />
          <p className="font-semibold text-gray-800">Phone</p>
          <Link
            href="tel:+911234567890"
            className="text-[#E63946] hover:underline"
          >
            +91-12345 67890
          </Link>
        </div>
        <div>
          <FaEnvelope className="text-[#E63946] text-3xl mx-auto mb-2" />
          <p className="font-semibold text-gray-800">Email</p>
          <Link
            href="mailto:hello@zentrok.com"
            className="text-[#E63946] hover:underline"
          >
            hello@zentrok.com
          </Link>
        </div>
        <div>
          <FaMapMarkerAlt className="text-[#E63946] text-3xl mx-auto mb-2" />
          <p className="font-semibold text-gray-800">Office</p>
          <p className="text-gray-600">KLJ Noida One, Noida India</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-12">
        {socialLinks.map(({ Icon, href }, idx) => (
          <motion.a
            key={idx}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={href}
            className="p-3 bg-black rounded-full text-white hover:bg-white hover:text-black transition hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>

      {/* Map */}
      <div className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.692531397525!2d77.03687007511269!3d28.61393999177168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047dbe43c0c3%3A0xdec61e12e3ff13db!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sihttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2050728280524!2d77.36404817429288!3d28.623615275669582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce544da5a9ebf%3A0x4024cbbabd66b412!2sKLJ%20Noida%20One!5e0!3m2!1sen!2sin!4v1754987797084!5m2!1sen!2sin
n!4v1700000000000"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <p className="mt-6 text-center text-gray-500 text-sm">
        We typically respond within 4 working hours.
      </p>
    </section>
      <Footer />
      </>
  );
}
