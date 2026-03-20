import type { Metadata } from "next";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureChannels from "@/components/features/integrations/FeatureChannels";
import FeatureVideoSearch from "@/components/features/integrations/FeatureVideoSearch";
import FeatureAction from "@/components/features/integrations/FeatureAction";
import HowToGetStarted from "@/components/features/integrations/HowToGetStarted";
import ChatFAQ from "@/components/features/integrations/ChatFAQ";
import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "Integrations — Connect Your Tools to LUCI",
  description:
    "Migrate existing memories, connect Slack, Notion, Google Calendar and more. Extend LUCI with custom skills and integrate where your work already happens.",
  openGraph: {
    title: "LUCI Integrations — Connect Your Favorite Tools",
    description:
      "Connect Slack, Notion, Google Calendar and more. Migrate existing data and extend LUCI with custom skills.",
    url: "/features/integrations",
  },
  twitter: {
    title: "LUCI Integrations — Connect Your Favorite Tools",
    description:
      "Connect Slack, Notion, Google Calendar and more. Migrate existing data and extend LUCI with custom skills.",
  },
  alternates: {
    canonical: "/features/integrations",
  },
};

const integrationsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "LUCI Integrations",
  description:
    "Connect third-party tools, migrate existing memories, and extend LUCI with custom skills.",
  url: "https://luci.ai/features/integrations",
  isPartOf: {
    "@type": "WebSite",
    name: "LUCI",
    url: "https://luci.ai",
  },
};

export default function IntegrationsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(integrationsJsonLd) }}
      />
      <FeatureHero
        heading="Integrations"
        description="Migrate your existing memories, connect the tools where work already happens, and extend behavior with custom skills."
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
