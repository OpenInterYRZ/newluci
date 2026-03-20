import type { Metadata } from "next";
import CreatorsHero from "@/components/usecase/creator/ManagersHero";
import BeforeAfter from "@/components/usecase/creator/BeforeAfter";
import FeatureDeepDive from "@/components/usecase/creator/FeatureDeepDive";
import TrustSecurity from "@/components/usecase/creator/TrustSecurity";

import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "LUCI for Creators — AI Video Analysis & Trend Insights",
  description:
    "Stop scrubbing through hours of video. LUCI watches your content, gives instant summaries, competitor analysis, and trend insights for creators.",
  openGraph: {
    title: "LUCI for Creators — AI That Watches Your Content",
    description:
      "Instant video summaries, competitor analysis, and trend insights. Stop scrubbing, start creating.",
    url: "/use-cases/creators",
  },
  twitter: {
    title: "LUCI for Creators — AI That Watches Your Content",
    description:
      "Instant video summaries, competitor analysis, and trend insights. Stop scrubbing, start creating.",
  },
  alternates: {
    canonical: "/use-cases/creators",
  },
};

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

    </div>
  );
}
