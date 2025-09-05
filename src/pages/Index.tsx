import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import PathSection from "@/components/PathSection";
import LocationSection from "@/components/LocationSection";
import PricingSection from "@/components/PricingSection";
import TeamSection from "@/components/TeamSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProgramSection />
        <PathSection />
        <LocationSection />
        <PricingSection />
        <TeamSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;