import ProductShowcase from "@/components/showcase/ProductShowcase";
import FeatureShowcase from "@/components/showcase/FeatureShowcase";
import PainPointsSection from "@/components/painpoint/PainPointsSection";
import CtaBanner from "@/components/CTA/CtaBanner";
import Footer from "@/components/Footer";
import CapHero from "@/components/hero/caphero";
import BentoFeatures from "@/components/bento/bento";
import UseCaseSectionMasonry from "@/components/usecase/UseCaseSectionMasonry";
import UserSection from "@/components/usercard/userSection";
import PricingSection from "@/components/pricing/PricingSection";
import FAQSection from "@/components/FAQ/FAQSection";
import ConnectorsSection from "@/components/connectors/ConnectorsSection";
import KeyFeaturesBento from "@/components/bento/KeyFeaturesBento";
import AccordionFeatures from "@/components/features/AccordionFeatures";
import FeaturesTimeline from "@/components/features/FeaturesTimeline";
export default function Home() {
  return (
    <div className="w-full h-full  mx-auto">
      <CapHero />
      <ProductShowcase />
      {/* Section Divider */}
      <PainPointsSection />
      <FeatureShowcase />
      {/* <AccordionFeatures /> <FeaturesTimeline /> */}
      {/* Section Divider */}
      <BentoFeatures />
      <KeyFeaturesBento />
      <UseCaseSectionMasonry />
      {/* Section Divider */}
      <UserSection />
      <PricingSection />
      <FAQSection />
      <ConnectorsSection />
      <CtaBanner />
      <Footer />
    </div>
  );
}
