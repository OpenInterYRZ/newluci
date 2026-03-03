import HeroSection from "@/components/hero/HeroSection";
import PainPointsSection from "@/components/painpoint/PainPointsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LuciSolutionSection from "@/components/LuciSolutionSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import UseCasesSection from "@/components/UseCasesSection";
import TrustSection from "@/components/TrustSection";
import CtaBanner from "@/components/CTA/CtaBanner";
import PillarHero from "@/components/hero/pillarHero";
import FinalCtaSection from "@/components/CTA/FinalCtaSection";
import Footer from "@/components/Footer";
import CtaOne from "@/components/CTA/CtaOne";
import CapHero from "@/components/hero/caphero";
import FeatureTabs from "@/components/threeFeature/FeatureTabs";
import CtaBannerImageSection from "@/components/CTA/CtaBannerImageSection";
import BentoFeatures from "@/components/bento/bento";
import UseCaseSectionMasonry from "@/components/usecase/UseCaseSectionMasonry";
import UserSection from "@/components/usercard/userSection";
import PricingSection from "@/components/pricing/PricingSection";
import FAQSection from "@/components/FAQ/FAQSection";
import { VideoText } from "@/components/ui/video-text";
import KeyFeaturesBento from "@/components/bento/KeyFeaturesBento";
import AccordionFeatures from "@/components/features/AccordionFeatures";
import FeaturesTimeline from "@/components/features/FeaturesTimeline";
export default function Home() {
  return (
    <div className="w-full h-full  mx-auto">
      <CapHero />
      {/* Section Divider */}
      <PainPointsSection />
      <AccordionFeatures /> <FeaturesTimeline />
      {/* Section Divider */}
      <BentoFeatures />
      <KeyFeaturesBento />
      <UseCaseSectionMasonry />
      {/* Section Divider */}
      <UserSection />
      <PricingSection />
      <FAQSection />
      <CtaBanner />
      <CtaBannerImageSection />
      <CtaOne />
      <Footer />
    </div>
  );
}
