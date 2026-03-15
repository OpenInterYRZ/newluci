import CtaBanner from "@/components/CTA/CtaBanner";
import Footer from "@/components/Footer";
import CapHero from "@/components/hero/caphero";

import PricingSection from "@/components/pricing/PricingSection";
import FAQSection from "@/components/FAQ/FAQSection";
import TestimonialCarousel from "@/components/FAQ/TestimonialCarousel";

import CodexFeature from "@/components/works/codexfeature";
import UseCaseTabs from "@/components/usecase/UseCaseTabs";
import PainPointsSectionLoop from "@/components/painpoint/PainPointsSection copy";
import ChaosToClarity from "@/components/painpoint/ChaosToClarity";
export default function Home() {
  return (
    <div className="w-full h-full  mx-auto">
      <CapHero />
      {/* Section Divider */}
      <ChaosToClarity />
      <CodexFeature />
      <UseCaseTabs />
      <PricingSection />
      <TestimonialCarousel />
      <FAQSection />
      <div className="w-full bg-web-bg-0 py-14 px-6 sm:px-12">
        <CtaBanner />
      </div>
      <Footer />
    </div>
  );
}
