// app/about/page.tsx
import AboutHero from "@/components/AboutHero";
import MissionValues from "@/components/MissionValues";
import StatsAndProof from "@/components/StatsAndProof";
import TeamGrid from "@/components/TeamGrid";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <main className="bg-[#ffdd00] text-black">
      <AboutHero />
      <MissionValues />
      <StatsAndProof />
      <TeamGrid />
      <CTASection />
    </main>
  );
}
