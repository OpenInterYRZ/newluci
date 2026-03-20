import type { Metadata } from "next";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureChannels from "@/components/features/memories/FeatureChannels";
import FeatureVideoSearch from "@/components/features/memories/FeatureVideoSearch";
import FeatureAction from "@/components/features/memories/FeatureAction";
import HowToGetStarted from "@/components/features/memories/HowToGetStarted";
import ChatFAQ from "@/components/features/memories/ChatFAQ";
import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "Memories — AI Meeting Transcription, Video Search & Action Items",
  description:
    "Stop rewatching hours of footage. LUCI auto-transcribes meetings, extracts summaries and action items, and builds a searchable knowledge base from every recording. Get proactive reminders before your next call.",
  keywords: [
    "AI meeting transcription",
    "video search",
    "meeting summaries",
    "action items extraction",
    "AI notetaker",
    "searchable meeting archive",
    "video understanding",
    "meeting knowledge base",
    "AI meeting memory",
    "screen recording analysis",
    "meeting recap",
    "persistent memory",
  ],
  openGraph: {
    title: "LUCI Memories — Transcribe, Search & Act on Every Meeting",
    description:
      "Auto-transcribe meetings, extract action items, and search across all your recordings in plain language. Never lose meeting context again.",
    url: "/features/memories",
  },
  twitter: {
    title: "LUCI Memories — Transcribe, Search & Act on Every Meeting",
    description:
      "Auto-transcribe meetings, extract action items, and search across all your recordings in plain language. Never lose meeting context again.",
  },
  alternates: {
    canonical: "/features/memories",
  },
};

const memoriesJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "LUCI Memories — AI Meeting Transcription, Video Search & Action Items",
  description:
    "Auto-transcribe meetings, extract summaries and action items, search recordings in plain language, and get proactive reminders. Turn hours of video into a searchable knowledge base.",
  url: "https://luci.ai/features/memories",
  isPartOf: {
    "@type": "WebSite",
    name: "LUCI",
    url: "https://luci.ai",
  },
  about: {
    "@type": "SoftwareApplication",
    name: "LUCI",
    applicationCategory: "ProductivityApplication",
    featureList: [
      "AI meeting transcription",
      "Video search in plain language",
      "Automatic action item extraction",
      "Meeting summaries and recaps",
      "Proactive meeting reminders",
      "Searchable knowledge base from recordings",
    ],
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
