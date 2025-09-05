import AboutSection from "@/components/home/AboutSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import BreakSection from "@/components/home/BreakSection";
import CTASection from "@/components/home/CTASection";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ImpactSection from "@/components/home/ImpactSection";
import RoadmapSection from "@/components/home/RoadmapSection";
import { Footer } from "react-day-picker";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <BenefitsSection />
      <BreakSection />
      <RoadmapSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </div>
  );
}