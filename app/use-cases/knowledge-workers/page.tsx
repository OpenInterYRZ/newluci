import type { Metadata } from "next";
import ManagersHero from "@/components/usecase/knowledge/ManagersHero";
import BeforeAfter from "@/components/usecase/knowledge/BeforeAfter";
import FeatureDeepDive from "@/components/usecase/knowledge/FeatureDeepDive";
import TrustSecurity from "@/components/usecase/knowledge/TrustSecurity";

import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "LUCI for Knowledge Workers — Your AI-Powered Second Brain",
  description:
    "Every meeting, note, and conversation automatically indexed. Search anything in plain language and get instant answers with LUCI's persistent memory.",
  openGraph: {
    title: "LUCI for Knowledge Workers — Never Lose a Detail",
    description:
      "Automatically index meetings and conversations. Search in plain language, get instant answers.",
    url: "/use-cases/knowledge-workers",
  },
  twitter: {
    title: "LUCI for Knowledge Workers — Never Lose a Detail",
    description:
      "Automatically index meetings and conversations. Search in plain language, get instant answers.",
  },
  alternates: {
    canonical: "/use-cases/knowledge-workers",
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
