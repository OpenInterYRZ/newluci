import ManagersHero from "@/components/usecase/managers/ManagersHero";
import BeforeAfter from "@/components/usecase/managers/BeforeAfter";
import FeatureDeepDive from "@/components/usecase/managers/FeatureDeepDive";
import TrustSecurity from "@/components/usecase/managers/TrustSecurity";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CTA/CtaBanner";

export default function ManagersUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <ManagersHero />
      <FeatureDeepDive />
      <BeforeAfter />
      <TrustSecurity />
      <div className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
        <CtaBanner />
      </div>{" "}
      <Footer />
    </div>
  );
}
