import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AssignmentEngine } from "@/components/AssignmentEngine";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PricingSection } from "@/components/PricingSection";
import { ProductScreens } from "@/components/ProductScreens";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-purple-500/30 selection:text-slate-900">
      <div className="noise-overlay" />
      <Navbar />
      <HeroSection />
      <AssignmentEngine />
      <CapabilitiesGrid />

      <div className="relative">
        <BenefitsSection />
        <PricingSection />
        <ProductScreens />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
