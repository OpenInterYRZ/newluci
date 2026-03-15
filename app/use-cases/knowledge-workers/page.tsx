import ManagersHero from "@/components/usecase/knowledge/ManagersHero";
import BeforeAfter from "@/components/usecase/knowledge/BeforeAfter";
import FeatureDeepDive from "@/components/usecase/knowledge/FeatureDeepDive";
import TrustSecurity from "@/components/usecase/knowledge/TrustSecurity";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CTA/CtaBanner";

export default function KnowledgeWorkersUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <ManagersHero />
      <FeatureDeepDive />
      <BeforeAfter />
      <TrustSecurity />
      <div className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
        <CtaBanner />
      </div>
      <Footer />
    </div>
  );
}
