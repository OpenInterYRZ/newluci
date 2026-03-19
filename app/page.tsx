import type { Metadata } from "next";
import CtaBanner from "@/components/CTA/CtaBanner";
import CapHero from "@/components/hero/caphero";

export const metadata: Metadata = {
  title: "LUCI — The AI Agent That Watches, Remembers, and Acts",
  description:
    "LUCI is an all-purpose AI agent that understands video, builds persistent memory, and automates execution. From screen activity to meetings, LUCI sees the full picture and takes action for you.",
  openGraph: {
    title: "LUCI — The AI Agent That Watches, Remembers, and Acts",
    description:
      "An all-purpose AI agent with video understanding, persistent memory, and automated execution.",
    url: "/",
  },
  twitter: {
    title: "LUCI — The AI Agent That Watches, Remembers, and Acts",
    description:
      "An all-purpose AI agent with video understanding, persistent memory, and automated execution.",
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
  operatingSystem: "macOS",
  description:
    "An all-purpose AI agent that understands video, builds persistent memory, and automates execution.",
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
