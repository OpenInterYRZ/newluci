import CreatorsHero from "@/components/usecase/creator/ManagersHero";
import BeforeAfter from "@/components/usecase/creator/BeforeAfter";
import FeatureDeepDive from "@/components/usecase/creator/FeatureDeepDive";
import TrustSecurity from "@/components/usecase/creator/TrustSecurity";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CTA/CtaBanner";

export default function CreatorsUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <CreatorsHero />
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
