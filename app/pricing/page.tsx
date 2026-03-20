import type { Metadata } from "next";
import PricingSection from "@/components/pricing/PricingSection";
import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "Pricing — Free Trial & Pro Plans",
  description:
    "Start with a free 3-day trial. Upgrade to LUCI Pro for $100/month with unlimited agents, priority features, and dedicated support.",
  openGraph: {
    title: "LUCI Pricing — Start Free, Scale with Pro",
    description:
      "Free 3-day trial with 5 agent runs/day. Pro plan at $100/month for unlimited agents and priority features.",
    url: "/pricing",
  },
  twitter: {
    title: "LUCI Pricing — Start Free, Scale with Pro",
    description:
      "Free 3-day trial with 5 agent runs/day. Pro plan at $100/month for unlimited agents and priority features.",
  },
  alternates: {
    canonical: "/pricing",
  },
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "LUCI Pricing",
  description: "LUCI AI agent pricing plans — Free trial and Pro subscription.",
  url: "https://luci.ai/pricing",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "LUCI",
    applicationCategory: "ProductivityApplication",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Trial",
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
  },
};

export default function PricingPage() {
  return (
    <div className="w-full h-full mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <div className="pt-14">
        <PricingSection />
      </div>
      <div className="w-full bg-web-bg-0 py-14 px-6 sm:px-12">
        <CtaBanner />
      </div>
    </div>
  );
}
