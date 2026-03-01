"use client";

import { useState } from "react";
import Badge from "./Badge";

type TabType = "marketing" | "sales" | "industry";

interface UseCase {
  title: string;
  description: string;
}

const useCasesData = {
  marketing: {
    title: "Marketing",
    colorClass: "text-primary",
    cases: [
      {
        title: "1. Creator Discovery & Outreach",
        description:
          "Analyze social videos to find creators, auto-score, build profiles; generate candidate lists, estimate reach potential, recommend best posting times",
      },
      {
        title: "2. Competitor Video Monitoring",
        description:
          "Monitor competitor content, identify trending formats, track share of voice, new campaign alerts",
      },
      {
        title: "3. Video Content Management",
        description:
          "AI search, auto-indexing, storyboard thumbnails, searchable transcripts, DAM integration",
      },
      {
        title: "4. Content Repurposing",
        description:
          "Landscape/portrait conversion, highlight reels, remix adaptations, multilingual dubbing/subtitles, end-to-end output",
      },
      {
        title: "5. Video Moderation",
        description:
          "Policy scanning, brand safety, quality checks, duplicate detection, brand guideline verification",
      },
      {
        title: "6. Social Publishing & Analytics",
        description:
          "One-click multi-platform publish, auto-scheduling, cross-platform analytics, viral factor identification",
      },
    ],
  },
  sales: {
    title: "Sales",
    colorClass: "text-success",
    cases: [
      {
        title: "1. Sales Enablement",
        description:
          "1:1 custom demos, industry-specific decks, account research, extract pain points and buying signals",
      },
      {
        title: "2. CRM & Pipeline",
        description:
          "Auto-import meeting summaries to CRM, extract opportunity signals, forecast outcomes, risk identification",
      },
      {
        title: "3. Real-Time Meeting Support",
        description:
          "Pre-meeting briefs, in-call coaching, sentiment analysis, post-meeting summary and follow-up emails",
      },
      {
        title: "4. Discovery & Qualification",
        description: "BANT/MEDDIC scoring, gap tagging, ROI case generation",
      },
    ],
  },
  industry: {
    title: "Industry",
    colorClass: "text-pro",
    cases: [
      {
        title: "1. Security",
        description:
          "Surveillance, SLP checks, employee compliance, retail analytics, anomaly alerts",
      },
      {
        title: "2. Media & Entertainment",
        description:
          "Large-scale search, AI editing, rights management, localization",
      },
      {
        title: "3. Wearables",
        description:
          "Continuous capture, memory retrieval, digital twin, contextual assistant",
      },
    ],
  },
};

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState<TabType>("marketing");
  const currentData = useCasesData[activeTab];

  return (
    <section className="bg-bg-0 w-full flex flex-col gap-10 md:gap-15 py-12 md:py-20 lg:py-25 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-text-0 font-serif text-5xl tracking-tight text-center">
          Use Cases
        </h2>
        <p className="text-text-1 font-sans text-lg leading-relaxed text-center">
          From marketing to sales, from general to vertical — LUCI covers every
          scenario
        </p>
      </div>

      {/* Tabs and Content */}
      <div className="flex flex-col gap-6">
        {/* Tab Navigation */}
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("marketing")}
            className={`rounded-lg py-2.5 px-5 font-sans text-sm transition-all ${
              activeTab === "marketing"
                ? "bg-primary-light-default text-primary font-semibold"
                : "bg-bg-1 text-text-3 font-medium hover:text-text-1"
            }`}
          >
            Marketing
          </button>
          <button
            onClick={() => setActiveTab("sales")}
            className={`rounded-lg py-2.5 px-5 font-sans text-sm transition-all ${
              activeTab === "sales"
                ? "bg-success/10 text-success font-semibold"
                : "bg-bg-1 text-text-3 font-medium hover:text-text-1"
            }`}
          >
            Sales
          </button>
          <button
            onClick={() => setActiveTab("industry")}
            className={`rounded-lg py-2.5 px-5 font-sans text-sm transition-all ${
              activeTab === "industry"
                ? "bg-pro/10 text-pro font-semibold"
                : "bg-bg-1 text-text-3 font-medium hover:text-text-1"
            }`}
          >
            Industry
          </button>
        </div>

        {/* Use Case Card (Placeholder) */}
        <div className="flex gap-6">
          <div className="bg-bg-1 rounded-2xl flex-1 flex flex-col">
            {/* Image Placeholder */}
            <div className="bg-bg-2 rounded-t-2xl h-50 flex items-center justify-center">
              <span className="text-text-3 font-mono text-sm font-medium">
                [Image placeholder]
              </span>
            </div>
            {/* Card Content */}
            <div className="p-5 flex flex-col gap-2.5">
              <h3 className="text-text-0 font-serif text-xl tracking-tight">
                Creator Discovery & Outreach
              </h3>
              <p className="text-text-1 font-sans text-sm leading-relaxed">
                Analyze social videos to find creators, auto-score, build
                profiles; generate candidate lists, estimate reach potential,
                recommend best posting times
              </p>
              <div className="bg-pro/10 rounded-md py-1 px-2.5 self-start">
                <span className="text-pro font-mono text-xs font-medium">
                  Marketing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Text List */}
      <div className="flex flex-col gap-8 pt-10">
        <div className="flex flex-col gap-3">
          <h3
            className={`font-mono text-sm font-semibold tracking-wide ${currentData.colorClass}`}
          >
            {currentData.title}
          </h3>
          {currentData.cases.map((useCase, index) => (
            <p
              key={index}
              className="text-text-1 font-sans text-sm leading-relaxed"
            >
              <span className="text-text-0 font-sans text-sm font-semibold">
                {useCase.title}
              </span>
              {" — "}
              {useCase.description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
