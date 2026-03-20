import type { Metadata } from "next";
import InvestorsHero from "@/components/usecase/investors/InvestorsHero";
import BeforeAfter from "@/components/usecase/investors/BeforeAfter";
import FeatureDeepDive from "@/components/usecase/investors/FeatureDeepDive";
import TrustSecurity from "@/components/usecase/investors/TrustSecurity";

import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "LUCI for Investors — Deal Flow, Portfolio Insights & Due Diligence",
  description:
    "LUCI organizes pitch decks, tracks portfolio updates, and surfaces signals that matter. AI agent for deal flow tracking and due diligence at scale.",
  openGraph: {
    title: "LUCI for Investors — AI-Powered Deal Intelligence",
    description:
      "Track deal flow, monitor portfolios, and conduct due diligence at scale with AI.",
    url: "/use-cases/investors",
  },
  twitter: {
    title: "LUCI for Investors — AI-Powered Deal Intelligence",
    description:
      "Track deal flow, monitor portfolios, and conduct due diligence at scale with AI.",
  },
  alternates: {
    canonical: "/use-cases/investors",
  },
};

export default function InvestorsUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <InvestorsHero />
      <FeatureDeepDive />
      <BeforeAfter />
      <TrustSecurity />
      <div className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
        <CtaBanner />
      </div>
    </div>
  );
}
