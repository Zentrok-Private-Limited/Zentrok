import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MissionValues from "@/components/MissionValues";
import StatsAndProof from "@/components/StatsAndProof";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      < MissionValues />
      <StatsAndProof />
      <AboutSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
