import type { Metadata } from "next";
import ManagersHero from "@/components/usecase/managers/ManagersHero";
import BeforeAfter from "@/components/usecase/managers/BeforeAfter";
import FeatureDeepDive from "@/components/usecase/managers/FeatureDeepDive";
import TrustSecurity from "@/components/usecase/managers/TrustSecurity";

import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "LUCI for Managers — Turn Video Chaos into a Knowledge Base",
  description:
    "Stop sifting through hours of footage. LUCI automates video understanding, extracts meeting summaries and action items, so your team focuses on insights.",
  openGraph: {
    title: "LUCI for Managers — AI-Powered Video Understanding",
    description:
      "Automate video analysis, extract summaries and action items, and build a searchable knowledge base from your meetings.",
    url: "/use-cases/managers",
  },
  twitter: {
    title: "LUCI for Managers — AI-Powered Video Understanding",
    description:
      "Automate video analysis, extract summaries and action items, and build a searchable knowledge base from your meetings.",
  },
  alternates: {
    canonical: "/use-cases/managers",
  },
};

export default function ManagersUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <ManagersHero />
      <FeatureDeepDive />
      <BeforeAfter />
      <TrustSecurity />
      <div className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
        <CtaBanner />
      </div>
    </div>
  );
}
