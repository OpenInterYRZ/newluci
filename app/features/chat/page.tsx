import type { Metadata } from "next";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureChannels from "@/components/features/chat/FeatureChannels";
import FeatureVideoSearch from "@/components/features/chat/FeatureVideoSearch";
import FeatureAction from "@/components/features/chat/FeatureAction";

import HowToGetStarted from "@/components/features/chat/HowToGetStarted";
import ChatFAQ from "@/components/features/chat/ChatFAQ";
import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "Chat — AI Copilot That Searches Meetings, Answers Questions & Runs Tasks",
  description:
    "Ask LUCI anything about your past meetings, emails, and notes. Get instant answers with citations, trigger automated actions, and manage tasks — all through natural conversation. Your AI copilot with perfect memory.",
  keywords: [
    "AI copilot",
    "AI chat assistant",
    "meeting search AI",
    "conversational AI agent",
    "AI that remembers",
    "ask AI about meetings",
    "enterprise search AI",
    "AI task automation",
    "natural language search",
    "AI meeting assistant chat",
    "AI with long-term memory",
    "AI digital twin",
  ],
  openGraph: {
    title: "Chat with LUCI — Search Meetings, Get Answers, Automate Tasks",
    description:
      "Ask anything about past meetings and get instant answers with citations. Your AI copilot with perfect memory across every conversation.",
    url: "/features/chat",
  },
  twitter: {
    title: "Chat with LUCI — Search Meetings, Get Answers, Automate Tasks",
    description:
      "Ask anything about past meetings and get instant answers with citations. Your AI copilot with perfect memory across every conversation.",
  },
  alternates: {
    canonical: "/features/chat",
  },
};

const chatJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Chat with LUCI — AI Copilot with Perfect Memory",
  description:
    "Search across meetings, emails, and notes in plain language. Get instant answers with citations, trigger automated actions, and manage tasks through natural conversation.",
  url: "https://luci.ai/features/chat",
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
      "Natural language meeting search",
      "Instant answers with citations",
      "Automated task execution",
      "Cross-conversation memory",
      "Multi-channel access (Telegram, WhatsApp, Desktop)",
    ],
  },
};

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chatJsonLd) }}
      />
      <FeatureHero
        heading="Chat with LUCI"
        description="Chat with LUCI to get things done."
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
