import type { Metadata } from "next";
import CtaBanner from "@/components/CTA/CtaBanner";
import CapHero from "@/components/hero/caphero";

export const metadata: Metadata = {
  title: "LUCI — AI Agent with Video Understanding & Memory | See. Remember. Act.",
  description:
    "LUCI is a personal AI agent that understands your videos and meetings, builds persistent memory, and automatically executes tasks. Open source, self-hosted, data sovereign. Try free.",
  openGraph: {
    title: "LUCI — AI Agent with Video Understanding & Memory",
    description:
      "Personal AI agent that understands videos, remembers everything, and automates your tasks. Open source & self-hosted.",
    url: "/",
  },
  twitter: {
    title: "LUCI — AI Agent with Video Understanding & Memory",
    description:
      "Personal AI agent that understands videos, remembers everything, and automates your tasks. Open source & self-hosted.",
  },
  alternates: {
    canonical: "/",
  },
};

import FAQSection from "@/components/FAQ/FAQSection";
import TestimonialCarousel from "@/components/FAQ/TestimonialCarousel";

import CodexFeature from "@/components/works/codexfeature";
import UseCaseTabs from "@/components/usecase/UseCaseTabs";
import PainPointsSectionLoop from "@/components/painpoint/PainPointsSection copy";
import ChaosToClarity from "@/components/painpoint/ChaosToClarity";
import PricingSectionHome from "@/components/pricing/PricingSectionHome";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LUCI",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "macOS, Windows, Web",
  description:
    "Personal AI agent with video understanding and persistent memory. LUCI watches your meetings and screen activity, remembers key context, and automatically executes tasks.",
  url: "https://luci.ai",
  featureList: [
    "Video understanding and analysis",
    "Persistent long-term memory",
    "Automated task execution",
    "Meeting transcription and action items",
    "Self-hosted with data sovereignty",
    "Open source",
    "Telegram and WhatsApp integration",
  ],
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      name: "Free",
      description: "3-day trial, 5 agent runs/day",
    },
    {
      "@type": "Offer",
      price: "100",
      priceCurrency: "USD",
      name: "Pro",
      description: "Unlimited agents, priority features",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        billingDuration: "P1M",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "120",
  },
  publisher: {
    "@type": "Organization",
    name: "LUCI",
    url: "https://luci.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://luci.ai/logo.png",
    },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LUCI",
  url: "https://luci.ai",
  logo: "https://luci.ai/logo.png",
  sameAs: [
    "https://twitter.com/luci_ai",
    "https://linkedin.com/company/luci-ai",
  ],
};

export default function Home() {
  return (
    <div className="w-full h-full  mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <CapHero />
      {/* Section Divider */}
      <ChaosToClarity />
      <CodexFeature />
      <UseCaseTabs />
      <PricingSectionHome />
      <TestimonialCarousel />
      <FAQSection />
      <div className="w-full bg-web-bg-0 py-14 px-6 sm:px-12">
        <CtaBanner />
      </div>
    </div>
  );
}
