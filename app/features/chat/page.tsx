import type { Metadata } from "next";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureChannels from "@/components/features/chat/FeatureChannels";
import FeatureVideoSearch from "@/components/features/chat/FeatureVideoSearch";
import FeatureAction from "@/components/features/chat/FeatureAction";

import HowToGetStarted from "@/components/features/chat/HowToGetStarted";
import ChatFAQ from "@/components/features/chat/ChatFAQ";
import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "Chat — Talk to Your AI Agent",
  description:
    "Chat with LUCI to ask questions about your meetings, get summaries, trigger actions, and manage tasks — all through natural conversation.",
  openGraph: {
    title: "Chat with LUCI — Your AI Agent That Remembers Everything",
    description:
      "Ask questions about past meetings, get instant summaries, and trigger automated actions through natural conversation.",
    url: "/features/chat",
  },
  twitter: {
    title: "Chat with LUCI — Your AI Agent That Remembers Everything",
    description:
      "Ask questions about past meetings, get instant summaries, and trigger automated actions through natural conversation.",
  },
  alternates: {
    canonical: "/features/chat",
  },
};

const chatJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Chat with LUCI",
  description:
    "Conversational AI interface to interact with your persistent memory. Ask questions, get summaries, and trigger automated actions.",
  url: "https://luci.ai/features/chat",
  isPartOf: {
    "@type": "WebSite",
    name: "LUCI",
    url: "https://luci.ai",
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
