import Navbar from "@/components/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import PainPointsSection from "@/components/painpoint/PainPointsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LuciSolutionSection from "@/components/LuciSolutionSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import UseCasesSection from "@/components/UseCasesSection";
import TrustSection from "@/components/TrustSection";
import CtaBanner from "@/components/CtaBanner";
import PillarHero from "@/components/hero/pillarHero";
import FinalCtaSection from "@/components/CTA/FinalCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full  mx-auto">
      <Navbar />
      <PillarHero />
      {/* Section Divider */}

      <PainPointsSection />

      {/* Section Divider */}

      <HowItWorksSection />

      {/* Section Divider */}

      <LuciSolutionSection />

      {/* Section Divider */}

      <DifferentiatorsSection />

      {/* Section Divider */}

      <UseCasesSection />

      {/* Section Divider */}

      <TrustSection />

      {/* Section Divider */}

      <div className="bg-bg-0 w-full px-4 sm:px-6 lg:px-8 py-16">
        <CtaBanner />
      </div>

      <FinalCtaSection />

      <Footer />
    </div>
  );
}
