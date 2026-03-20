import type { Metadata } from "next";
import CtaBanner from "@/components/CTA/CtaBanner";

export const metadata: Metadata = {
  title: "Privacy-First AI Agent — Data Sovereignty & Self-Hosted",
  description:
    "Your data stays yours. LUCI runs on your own isolated VM with full data sovereignty. Open source, self-hosted, and auditable.",
  openGraph: {
    title: "LUCI Privacy-First — Self-Hosted AI with Data Sovereignty",
    description:
      "Run LUCI on your own infrastructure. Open source, self-hosted, fully auditable.",
    url: "/use-cases/privacy-first",
  },
  twitter: {
    title: "LUCI Privacy-First — Self-Hosted AI with Data Sovereignty",
    description:
      "Run LUCI on your own infrastructure. Open source, self-hosted, fully auditable.",
  },
  alternates: {
    canonical: "/use-cases/privacy-first",
  },
};

export default function PrivacyFirstUseCasePage() {
  return (
    <div className="w-full h-full mx-auto">
      <div className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
        <CtaBanner />
      </div>

    </div>
  );
}
