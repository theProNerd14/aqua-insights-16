import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MissionSection } from "@/components/MissionSection";
import { MethodologySection } from "@/components/MethodologySection";
import { DataPreview } from "@/components/DataPreview";
import { SpeciesShowcase } from "@/components/SpeciesShowcase";
import { IntelligentDataTheory } from "@/components/IntelligentDataTheory";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <MissionSection />
      <IntelligentDataTheory />
      <MethodologySection />
      <DataPreview />
      <SpeciesShowcase />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
