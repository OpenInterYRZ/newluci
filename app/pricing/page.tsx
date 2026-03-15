import PricingSection from "@/components/pricing/PricingSection";
import CtaBanner from "@/components/CTA/CtaBanner";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="w-full h-full mx-auto">
      <div className="pt-14">
        <PricingSection />
      </div>
      <div className="w-full bg-web-bg-0 py-14 px-6 sm:px-12">
        <CtaBanner />
      </div>
      <Footer />
    </div>
  );
}
