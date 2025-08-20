// "use client";

// import {
//   Megaphone,
//   Search,
//   Mail,
//   BarChart3,
//   ShoppingCart,
//   Share2,
//   PenTool,
//   Globe,
// } from "lucide-react";

// const services = [
//   { name: "SEO", icon: Search },
//   { name: "Social Media", icon: Share2 },
//   { name: "Email Marketing", icon: Mail },
//   { name: "PPC Ads", icon: Megaphone },
//   { name: "Analytics", icon: BarChart3 },
//   { name: "E-Commerce", icon: ShoppingCart },
//   { name: "Content Marketing", icon: PenTool },
//   { name: "Global Reach", icon: Globe },
// ];

// export default function TrustedBy() {
//   return (
//     <section className="py-16 relative overflow-hidden bg-transparent">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Animated Marquee */}
//         <div className="flex animate-slide">
//           {services.concat(services).map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center min-w-[160px] mx-8 opacity-80 hover:opacity-100 transition transform hover:-translate-y-1"
//               >
//                 <Icon className="w-12 h-12 text-electric-blue hover:text-vibrant-teal mb-3 animate-float" />
//                 <p className="text-sm font-medium text-cool-navy">
//                   {service.name}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Fading Edges */}
//       <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white/95 to-transparent pointer-events-none"></div>
//       <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white/95 to-transparent pointer-events-none"></div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-6px);
//           }
//         }
//         .animate-slide {
//           display: flex;
//           width: max-content;
//           animation: slide 25s linear infinite;
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }
