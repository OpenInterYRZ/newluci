import type { Metadata } from "next";
import SalesLeadersHero from "@/components/usecase/sales-leaders/SalesLeadersHero";
import BeforeAfter from "@/components/usecase/sales-leaders/BeforeAfter";
import FeatureDeepDive from "@/components/usecase/sales-leaders/FeatureDeepDive";
import TrustSecurity from "@/components/usecase/sales-leaders/TrustSecurity";

import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "LUCI for Sales Leaders — Call Insights & Pipeline Automation",
  description:
    "LUCI captures every sales call, highlights buying signals, and gives reps personalized coaching. Turn conversations into revenue with AI.",
  openGraph: {
    title: "LUCI for Sales Leaders — AI Sales Call Intelligence",
    description:
      "Capture calls, highlight buying signals, coach reps, and track pipeline risk automatically.",
    url: "/use-cases/sales-leaders",
  },
  twitter: {
    title: "LUCI for Sales Leaders — AI Sales Call Intelligence",
    description:
      "Capture calls, highlight buying signals, coach reps, and track pipeline risk automatically.",
  },
  alternates: {
    canonical: "/use-cases/sales-leaders",
  },
};

export default function SalesLeadersUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <SalesLeadersHero />
      <FeatureDeepDive />
      <BeforeAfter />
      <TrustSecurity />
      <div className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
        <CtaBanner />
      </div>
    </div>
  );
}
