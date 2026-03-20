import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LUCI for CRM & Deal Management — AI-Powered Pipeline Tracking",
  description:
    "Automate CRM updates, track deal progress, and never miss a follow-up. LUCI integrates with your sales tools to keep your pipeline healthy.",
  openGraph: {
    title: "LUCI for CRM & Deals — AI Pipeline Management",
    description:
      "Automate CRM updates and track deal progress with AI.",
    url: "/use-cases/crm-deal",
  },
  twitter: {
    title: "LUCI for CRM & Deals — AI Pipeline Management",
    description:
      "Automate CRM updates and track deal progress with AI.",
  },
  alternates: {
    canonical: "/use-cases/crm-deal",
  },
};

export default function CrmDealUseCasePage() {
  return <div className="w-full h-full mx-auto"></div>;
}
