"use client";

import {
  Lightbulb,
  User,
  Target,
  PenTool,
  Star,
  Globe,
  Megaphone,
  LucideIcon,
  ArrowBigUp,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// 1. Define the Service type for strict typing
type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  { title: "Research & Insights", description: "In-depth investigations to fuel strategic decisions.", icon: Lightbulb },
  { title: "Unique Ways", description: "Creative approaches to set your business apart.", icon: Star },
  { title: "Purpose, Mission, Vision", description: "Clear organizational direction at every level.", icon: Target },
  { title: "Value Proposition", description: "Defining what makes your business irresistible.", icon: PenTool },
  { title: "Personality Traits", description: "Crafting a brand voice and soul customers remember.", icon: User },
  { title: "Verbal Identity", description: "Distinct communication style and messaging.", icon: Megaphone },
  { title: "Naming Strategy", description: "Memorable and meaningful brand names and terms.", icon: Globe },
  { title: "Brand Symbolism", description: "Powerful symbols to reinforce your brand identity.", icon: ArrowBigUp },
];

// 2. Framer-motion animation variants (typed)
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight text-black">
          Core Brand Services
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(0,0,0,0.09)",
              }}
              className="group bg-white border border-gray-200 rounded-xl p-8 shadow-sm transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 text-rojo">
                <service.icon size={36} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
