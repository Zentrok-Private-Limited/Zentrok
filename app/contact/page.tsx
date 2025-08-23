"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import { FiX } from "react-icons/fi";
import Footer from "@/components/Footer";

/* ------------------- TYPES ------------------- */
type NotificationType = "success" | "error" | "info";

interface NotificationItem {
  id: number;
  text: string;
  type: NotificationType;
}

interface NotificationProps extends NotificationItem {
  removeNotif: (id: number) => void;
}

interface NotificationsContainerProps {
  notifications: NotificationItem[];
  removeNotif: (id: number) => void;
}

/* ------------------- NOTIFICATION SYSTEM ------------------- */
const NOTIFICATION_TTL = 5000;

const Notification: React.FC<NotificationProps> = ({
  text,
  id,
  removeNotif,
  type,
}) => {
  const bgColors: Record<NotificationType, string> = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-indigo-600",
  };

  const icons: Record<NotificationType, string> = {
    success: "✔",
    error: "✖",
    info: "!",
  };

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);
    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`p-4 flex items-center rounded-lg gap-3 text-sm font-semibold shadow-lg text-white ${bgColors[type]} pointer-events-auto`}
    >
      {/* Icon */}
      <div className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-xs">
        {icons[type]}
      </div>

      {/* Text */}
      <span className="flex-1">{text}</span>

      {/* Close */}
      <button onClick={() => removeNotif(id)} className="ml-2">
        <FiX />
      </button>
    </motion.div>
  );
};

const NotificationsContainer: React.FC<NotificationsContainerProps> = ({
  notifications,
  removeNotif,
}) => (
  <div className="flex flex-col gap-2 w-80 fixed bottom-4 right-4 z-50 pointer-events-none">
    <AnimatePresence>
      {notifications.map((n) => (
        <Notification key={n.id} {...n} removeNotif={removeNotif} />
      ))}
    </AnimatePresence>
  </div>
);

/* ------------------- CONTACT PAGE ------------------- */
export default function ContactPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const addNotification = (text: string, type: NotificationType) => {
    setNotifications((pv) => [{ id: Date.now(), text, type }, ...pv]);
  };

  const removeNotif = (id: number) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        form.reset();
        addNotification("Thank you! Your message has been sent.", "success");
      } else {
        addNotification("Oops! Something went wrong. Try again.", "error");
      }
    } catch (err) {
      console.error(err);
      addNotification("Oops! Something went wrong. Try again.", "error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 text-[var(--foreground)]">
      {/* Notifications */}
      <NotificationsContainer
        notifications={notifications}
        removeNotif={removeNotif}
      />

      {/* Main Section */}
      <main className="flex-1 container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
        {/* Left Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--surface-1000)] p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 border rounded-lg w-full bg-[var(--surface-900)] border-gray-300 dark:border-gray-600 focus:outline-none focus:border-[#00BFFF]"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 border rounded-lg w-full bg-[var(--surface-900)] border-gray-300 dark:border-gray-600 focus:outline-none focus:border-[#00BFFF]"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="p-3 border rounded-lg w-full bg-[var(--surface-900)] border-gray-300 dark:border-gray-600 focus:outline-none focus:border-[#00BFFF]"
            ></textarea>

            {/* Animated Button */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <button
                type="submit"
                className="group relative overflow-hidden flex items-center px-6 py-3 rounded-full bg-[#00BFFF] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 pr-10"
              >
                <span className="relative z-10 mr-4">Send Message</span>
                <Send
                  size={18}
                  className="absolute right-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out z-10"
                />
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Right Section - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-8 relative"
        >
          <div className="absolute -top-12 mt-20 right-0">
            <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 opacity-80">
              We&apos;d love to hear from you! Reach out using the form or
              details below.
            </p>
          </div>

          <div className="pt-16 mt-20">
            <div className="flex items-start space-x-4">
              <Mail className="text-[#00BFFF] w-6 h-6" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="opacity-80">support@zentrok.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mt-6">
              <Phone className="text-[#00BFFF] w-6 h-6" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="opacity-80">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mt-6">
              <MapPin className="text-[#00BFFF] w-6 h-6" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="opacity-80">Noida, Uttar Pradesh, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="opacity-80 hover:text-[#00BFFF] transition"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      {/* Location Map */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-20 pb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2050728280515!2d77.36404817550047!3d28.623615275669607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce544da5a9ebf%3A0x4024cbbabd66b412!2sKLJ%20Noida%20One!5e0!3m2!1sen!2sin!4v1755156818225!5m2!1sen!2sin"
            width="100%"
            height="400"
            loading="lazy"
            className="border-0 w-full"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
