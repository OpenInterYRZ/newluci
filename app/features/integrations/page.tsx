import type { Metadata } from "next";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureChannels from "@/components/features/integrations/FeatureChannels";
import FeatureVideoSearch from "@/components/features/integrations/FeatureVideoSearch";
import FeatureAction from "@/components/features/integrations/FeatureAction";
import HowToGetStarted from "@/components/features/integrations/HowToGetStarted";
import ChatFAQ from "@/components/features/integrations/ChatFAQ";
import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "Integrations — Sync Slack, Notion, Calendar & More with Your AI Agent",
  description:
    "Stop switching between apps. LUCI connects to Slack, Notion, Google Calendar, CRM, and more — automatically syncing meeting notes, action items, and context where your team already works. Extend with custom skills.",
  keywords: [
    "AI integrations",
    "Slack AI integration",
    "Notion AI integration",
    "Google Calendar AI sync",
    "CRM meeting sync",
    "AI workflow automation",
    "meeting notes to Slack",
    "AI custom skills",
    "productivity tool integrations",
    "automated meeting follow-ups",
    "AI app integrations",
    "connect tools to AI agent",
  ],
  openGraph: {
    title: "LUCI Integrations — Sync Notes & Actions to Slack, Notion & More",
    description:
      "Stop switching between apps. Auto-sync meeting notes, action items, and context to Slack, Notion, CRM, and your favorite tools.",
    url: "/features/integrations",
  },
  twitter: {
    title: "LUCI Integrations — Sync Notes & Actions to Slack, Notion & More",
    description:
      "Stop switching between apps. Auto-sync meeting notes, action items, and context to Slack, Notion, CRM, and your favorite tools.",
  },
  alternates: {
    canonical: "/features/integrations",
  },
};

const integrationsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "LUCI Integrations — Sync Slack, Notion, Calendar & More",
  description:
    "Auto-sync meeting notes, action items, and context to Slack, Notion, Google Calendar, CRM, and more. Extend LUCI with custom skills and API access.",
  url: "https://luci.ai/features/integrations",
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
      "Slack integration — auto-send meeting notes",
      "Notion integration — sync knowledge base",
      "Google Calendar integration — proactive reminders",
      "CRM sync — auto-update deal context",
      "Custom skills — extend agent behavior",
      "API access — build custom workflows",
    ],
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
