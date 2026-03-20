import type { Metadata } from "next";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureChannels from "@/components/features/memories/FeatureChannels";
import FeatureVideoSearch from "@/components/features/memories/FeatureVideoSearch";
import FeatureAction from "@/components/features/memories/FeatureAction";
import HowToGetStarted from "@/components/features/memories/HowToGetStarted";
import ChatFAQ from "@/components/features/memories/ChatFAQ";
import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "Memories — Video Understanding & Persistent Memory",
  description:
    "Consolidate video assets, extract transcripts and summaries, and get proactive reminders before meetings. LUCI turns your recordings into searchable, actionable memory.",
  openGraph: {
    title: "LUCI Memories — Turn Videos into Searchable Knowledge",
    description:
      "Extract transcripts, summaries, and action items from your meetings and screen recordings. Never lose context again.",
    url: "/features/memories",
  },
  twitter: {
    title: "LUCI Memories — Turn Videos into Searchable Knowledge",
    description:
      "Extract transcripts, summaries, and action items from your meetings and screen recordings. Never lose context again.",
  },
  alternates: {
    canonical: "/features/memories",
  },
};

const memoriesJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "LUCI Memories",
  description:
    "Video understanding and persistent memory feature. Consolidate video assets, extract transcripts and summaries, and get proactive meeting reminders.",
  url: "https://luci.ai/features/memories",
  isPartOf: {
    "@type": "WebSite",
    name: "LUCI",
    url: "https://luci.ai",
  },
};

export default function MemoriesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(memoriesJsonLd) }}
      />
      <FeatureHero
        heading={["Memories"]}
        description="Consolidate your video assets in one place, extract transcripts and summaries to cut review time, and get proactive reminders before meetings so you walk in with full context."
      />
      <FeatureChannels />
      <FeatureVideoSearch />
      <FeatureAction />
      <HowToGetStarted />
      <ChatFAQ />
      <div className="w-full bg-web-bg-0 py-14 px-6 sm:px-12">
        <CtaBanner />
      </div>
    </div>
  );
}
