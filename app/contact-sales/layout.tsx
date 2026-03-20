import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sales — LUCI Enterprise AI Agent",
  description:
    "Get in touch with the LUCI sales team. Find the right plan for your team with custom AI model training, SSO, dedicated support, and enterprise integrations.",
  openGraph: {
    title: "Contact LUCI Sales — Enterprise AI Agent Plans",
    description:
      "Custom AI model training, SSO, dedicated support, and enterprise integrations. Talk to our sales team.",
    url: "/contact-sales",
  },
  twitter: {
    title: "Contact LUCI Sales — Enterprise AI Agent Plans",
    description:
      "Custom AI model training, SSO, dedicated support, and enterprise integrations. Talk to our sales team.",
  },
  alternates: {
    canonical: "/contact-sales",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact LUCI Sales",
  description:
    "Get in touch with the LUCI sales team for enterprise AI agent plans.",
  url: "https://luci.ai/contact-sales",
  isPartOf: {
    "@type": "WebSite",
    name: "LUCI",
    url: "https://luci.ai",
  },
};

export default function ContactSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
