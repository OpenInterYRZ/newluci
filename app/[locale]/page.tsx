import ProductShowcase from "@/components/showcase/ProductShowcase";
import FeatureShowcase from "@/components/showcase/FeatureShowcase";
import PainPointTitle from "@/components/painpoint/PainPointTitle";
import PainPointsSection from "@/components/painpoint/PainPointsSection";
import CtaBanner from "@/components/CTA/CtaBanner";
import Footer from "@/components/Footer";
import CapHero from "@/components/hero/caphero";
import BentoFeatures from "@/components/bento/bento";
import UseCaseSectionMasonry from "@/components/usecase/UseCaseSectionMasonry";
import UserSection from "@/components/usercard/userSection";
import PricingSection from "@/components/pricing/PricingSection";
import FAQSection from "@/components/FAQ/FAQSection";
import TestimonialCarousel from "@/components/FAQ/TestimonialCarousel";
import ConnectorsSection from "@/components/connectors/ConnectorsSection";
import KeyFeaturesBento from "@/components/bento/KeyFeaturesBento";
import AccordionFeatures from "@/components/features/AccordionFeatures";
import FeaturesTimeline from "@/components/features/FeaturesTimeline";
import CodexFeature from "@/components/works/codexfeature";
export default function Home() {
  return (
    <div className="w-full h-full  mx-auto">
      <CapHero />
      <ProductShowcase />
      {/* Section Divider */}
      <PainPointTitle />
      <PainPointsSection />
      <FeatureShowcase />
      <CodexFeature />

      <PricingSection />
      <TestimonialCarousel />
      <FAQSection />
      <div className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
        <CtaBanner />
      </div>
      <Footer />
    </div>
  );
}
