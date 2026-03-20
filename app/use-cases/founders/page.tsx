import type { Metadata } from "next";
import ManagersHero from "@/components/usecase/founders/ManagersHero";
import BeforeAfter from "@/components/usecase/founders/BeforeAfter";
import FeatureDeepDive from "@/components/usecase/founders/FeatureDeepDive";
import TrustSecurity from "@/components/usecase/founders/TrustSecurity";

import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "LUCI for Founders — Never Lose Client Context",
  description:
    "LUCI remembers every client detail, keeps your lean team aligned, and ensures nothing falls through the cracks. AI agent built for startup founders.",
  openGraph: {
    title: "LUCI for Founders — Keep Your Team Aligned with AI",
    description:
      "Remember every client detail and keep your lean team in sync with AI-powered memory and automation.",
    url: "/use-cases/founders",
  },
  twitter: {
    title: "LUCI for Founders — Keep Your Team Aligned with AI",
    description:
      "Remember every client detail and keep your lean team in sync with AI-powered memory and automation.",
  },
  alternates: {
    canonical: "/use-cases/founders",
  },
};

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

    </div>
  );
}
