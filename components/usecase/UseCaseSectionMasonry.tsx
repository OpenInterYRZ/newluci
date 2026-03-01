"use client";

import React, { useState } from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";

interface UseCaseItem {
  id: string;
  title: string;
  description: string;
  category: string;
  img: string;
}

const useCases: UseCaseItem[] = [
  {
    id: "1.1",
    category: "Marketing Intelligence",
    title: "Influencer Intelligence Agent",
    description:
      "Analyzes millions of social videos to identify and score top creators, auto-generating shortlists and outreach recommendations.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
  },
  {
    id: "1.2",
    category: "Marketing Intelligence",
    title: "Competitive Video Intelligence",
    description:
      "Monitors competitor video content in real time, tracks trends and share of voice, and alerts when new campaigns launch.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    id: "1.3",
    category: "Marketing Intelligence",
    title: "Audience Reach Analysis",
    description:
      "Estimates reach and engagement potential from video performance patterns, recommends optimal posting times and budget allocation.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: "2.1",
    category: "Video Search & DAM",
    title: "AI Video Search (Enterprise DAM)",
    description:
      "Natural language and face search across entire video libraries, with auto-tagging and metadata generation.",
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80",
  },
  {
    id: "2.2",
    category: "Video Search & DAM",
    title: "Video Indexing & Organization",
    description:
      "Auto-indexes and categorizes video libraries, generates storyboards and highlights, and syncs with existing DAM systems.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    id: "3.1",
    category: "Content Repurposing",
    title: "Format Conversion at Scale",
    description:
      "Batch converts landscape to vertical video with smart cropping, processing entire libraries in minutes.",
    img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80",
  },
  {
    id: "3.2",
    category: "Content Repurposing",
    title: "Highlight Reel Generation",
    description:
      "AI selects best clips by engagement signals and auto-generates highlight reels, trailers, and teasers.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
  },
  {
    id: "3.3",
    category: "Content Repurposing",
    title: "Content Remix & Adaptation",
    description:
      "Remixes video into slideshows, quote cards, GIFs, and supports multi-language narration and subtitles.",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
  },
  {
    id: "4.1",
    category: "Compliance & QC",
    title: "Content Safety & Compliance",
    description:
      "Auto-scans for policy violations, runs brand safety checks, and flags content for human review.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&q=80",
  },
  {
    id: "4.2",
    category: "Compliance & QC",
    title: "Quality Control",
    description:
      "Checks video quality, resolution, format consistency, detects duplicates, and verifies brand guidelines.",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  },
  {
    id: "5.1",
    category: "Distribution & Outreach",
    title: "Multi-Platform Video Posting",
    description:
      "One-click posting to all platforms with auto-formatting, scheduling, and A/B testing.",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80",
  },
  {
    id: "5.2",
    category: "Distribution & Outreach",
    title: "Social Outreach Agent",
    description:
      "Identifies and engages prospects via video insights, generates personalized outreach, and manages follow-up sequences.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
  },
  {
    id: "6.1",
    category: "Analytics & Insights",
    title: "Cross-Platform Analytics",
    description:
      "Unified view of video performance across platforms, tracking views, engagement, and ROI.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: "6.2",
    category: "Analytics & Insights",
    title: "Content Pattern Recognition",
    description:
      "Identifies what makes top videos perform, recommends future content, and spots emerging trends.",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80",
  },
  {
    id: "7.1",
    category: "Sales Enablement",
    title: "Customized Demo Videos",
    description:
      "Auto-generates personalized product demos tailored to each prospect's industry, persona, and pain points.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  },
  {
    id: "7.2",
    category: "Sales Enablement",
    title: "Customized Presentations & Decks",
    description:
      "Auto-generates decks from video content and meeting insights, maintaining brand consistency.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80",
  },
  {
    id: "7.3",
    category: "Sales Enablement",
    title: "Prospect Research via Video",
    description:
      "Analyzes prospect video content to extract pain points, priorities, and decision signals, building account profiles.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    id: "8.1",
    category: "CRM & Pipeline",
    title: "Automatic CRM Updates",
    description:
      "Auto-logs meeting summaries, action items, and deal signals to CRM after every call.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    id: "8.2",
    category: "CRM & Pipeline",
    title: "Pipeline Intelligence",
    description:
      "Predicts deal outcomes from call analysis, flags at-risk deals, and surfaces coaching opportunities.",
    img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80",
  },
  {
    id: "9.1",
    category: "Meeting Intelligence",
    title: "Meeting Prep Agent",
    description:
      "Pulls prospect data, past interactions, and talking points before each call with a pre-meeting brief.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
  },
  {
    id: "9.2",
    category: "Meeting Intelligence",
    title: "Real-Time Meeting Coach",
    description:
      "Live coaching during calls with suggested questions, objection handling, and data surfacing.",
    img: "https://images.unsplash.com/photo-1531538606174-e1ac9b3fe1dc?w=600&q=80",
  },
  {
    id: "9.3",
    category: "Meeting Intelligence",
    title: "Post-Meeting Automation",
    description:
      "Auto-generates summaries, follow-up emails, updates CRM, and schedules next steps.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
  },
  {
    id: "10.1",
    category: "Discovery & ROI",
    title: "AI-Powered Discovery",
    description:
      "Scores qualification from video calls, identifies gaps, and generates qualification summaries.",
    img: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=600&q=80",
  },
  {
    id: "10.2",
    category: "Discovery & ROI",
    title: "ROI Case Study Builder",
    description:
      "Builds ROI models and industry-specific case studies from customer conversation data.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    id: "11",
    category: "Industry Solutions",
    title: "Security & Surveillance",
    description:
      "Monitors security feeds for SLP inspections, compliance, and real-time anomaly alerting.",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
  },
  {
    id: "12",
    category: "Industry Solutions",
    title: "Media & Entertainment",
    description:
      "Agentic video search, AI-assisted editing, rights management, and content localization.",
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
  },
  {
    id: "13",
    category: "Industry Solutions",
    title: "Wearables & Personal AI",
    description:
      "Continuous capture and indexing from wearables, personal memory retrieval, and context-aware AI assistant.",
    img: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&q=80",
  },
];

// Assign random heights to create visual variety in the masonry
const cardHeights: Record<string, string> = {
  "1.1": "h-[340px]",
  "1.2": "h-[280px]",
  "1.3": "h-[360px]",
  "2.1": "h-[300px]",
  "2.2": "h-[260px]",
  "3.1": "h-[320px]",
  "3.2": "h-[280px]",
  "3.3": "h-[350px]",
  "4.1": "h-[270px]",
  "4.2": "h-[310px]",
  "5.1": "h-[290px]",
  "5.2": "h-[340px]",
  "6.1": "h-[260px]",
  "6.2": "h-[330px]",
  "7.1": "h-[300px]",
  "7.2": "h-[280px]",
  "7.3": "h-[350px]",
  "8.1": "h-[270px]",
  "8.2": "h-[320px]",
  "9.1": "h-[290px]",
  "9.2": "h-[340px]",
  "9.3": "h-[260px]",
  "10.1": "h-[310px]",
  "10.2": "h-[280px]",
  "11": "h-[360px]",
  "12": "h-[300px]",
  "13": "h-[330px]",
};

const INITIAL_COUNT = 7;

export default function UseCaseSectionMasonry() {
  const [showAll, setShowAll] = useState(false);

  const visibleCases = showAll ? useCases : useCases.slice(0, INITIAL_COUNT);

  return (
    <section className="relative w-full py-24 px-4 md:px-8 my-30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            One Platform, Endless Possibilities
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            From marketing intelligence to sales enablement — see how Luci
            transforms every stage of your video workflow.
          </p>
        </div>

        {/* Masonry Grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {visibleCases.map((item) => (
            <div key={item.id} className="break-inside-avoid">
              <SpotlightCard
                className={`${cardHeights[item.id] || "h-[300px]"} !p-0 group cursor-pointer`}
                spotlightColor="rgba(255, 165, 0, 0.15)"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-8 py-3 rounded-full border border-neutral-700 bg-neutral-900/50 text-neutral-300 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:text-white hover:bg-neutral-800/80"
            >
              Show All Use Cases
              <span className="ml-2 text-neutral-500 group-hover:text-orange-400 transition-colors">
                +{useCases.length - INITIAL_COUNT}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
