"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface UseCaseAgent {
  label: string;
}

interface UseCaseTab {
  id: string;
  label: string;
  href: string;
  title: string;
  description: string;
  agents: UseCaseAgent[];
  cta: string;
  image: string;
}

const TABS: UseCaseTab[] = [
  {
    id: "managers",
    label: "Managers",
    href: "/use-cases/managers",
    title: "Meeting memory, task follow-up, action item tracking",
    description:
      "Never lose track of what was discussed or who owns what. LUCI captures meeting context, follows up on action items, and keeps your team accountable — automatically.",
    agents: [
      { label: "Meeting Summary Agent" },
      { label: "Action Item Tracker" },
      { label: "Follow-up Reminder Agent" },
      { label: "Team Progress Agent" },
    ],
    cta: "Start managing smarter",
    image: "/usecase-manage/mana1.webp",
  },
  {
    id: "knowledge",
    label: "Knowledge Workers",
    href: "/use-cases/knowledge-workers",
    title: "Learning notes,require video understanding",
    description:
      "Turn hours of video into structured notes in seconds. LUCI watches, understands, and organizes knowledge so you can learn faster and recall anything instantly.",
    agents: [
      { label: "Video Understanding Agent" },
      { label: "Smart Notes Agent" },
      { label: "Knowledge Base Builder" },
      { label: "Semantic Search Agent" },
    ],
    cta: "Build your knowledge base",
    image: "/usecases/konw/Knowledgewor.webp",
  },
  {
    id: "creators",
    label: "Creators & Thinkers",
    href: "/use-cases/creators",
    title: "Capture ideas, build a second brain, creative workflows",
    description:
      "Ideas are fleeting — LUCI catches them all. From shower thoughts to structured outlines, build a living second brain that grows with your creative process.",
    agents: [
      { label: "Idea Capture Agent" },
      { label: "Second Brain Organizer" },
      { label: "Creative Workflow Agent" },
      { label: "Idea Connection Agent" },
    ],
    cta: "Start capturing ideas",
    image: "/usecases/creator/CreatorHero.webp",
  },
  {
    id: "founders",
    label: "Founders",
    href: "/use-cases/founders",
    title: "Never lose client context, keep your lean team aligned",
    description:
      "When you wear every hat, context-switching kills momentum. LUCI remembers every client detail, keeps your small team in sync, and makes sure nothing falls through the cracks.",
    agents: [
      { label: "Client Context Agent" },
      { label: "Team Alignment Agent" },
      { label: "Quick Recap Agent" },
      { label: "Priority Focus Agent" },
    ],
    cta: "Keep your team aligned",
    image: "/usecases/konw/knowhero.webp",
  },
];

const TAB_DURATION = 5000;

export default function UseCaseTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const advanceTab = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TABS.length);
  }, []);

  useEffect(() => {
    const timer = setTimeout(advanceTab, TAB_DURATION);
    return () => clearTimeout(timer);
  }, [activeIndex, advanceTab]);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const tab = TABS[activeIndex];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-12">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-text-0 leading-[1.15]">
            Built for every role
          </h2>
          <p className="text-base text-text-2 max-w-xl">
            Whether you lead a team, learn for a living, create for fun, or
            build a company — LUCI adapts to how you work.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          {TABS.map((t, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={t.id}
                onClick={() => handleTabClick(i)}
                className={`relative rounded-full min-w-[140px] px-6 py-2.5 text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-orange-400 text-text-0 shadow-md"
                    : "text-text-2 bg-bg-2 hover:bg-text-2/25 backdrop-blur-md"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content Card — white background, left text + right image */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-bg-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]"
            >
              {/* Left — Text content */}
              <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-text-0 mb-3 leading-snug">
                    {tab.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-2 leading-relaxed">
                    {tab.description}
                  </p>
                </div>

                {/* Agent pills */}
                <div className="grid grid-cols-2 gap-2.5">
                  {tab.agents.map((agent) => (
                    <div
                      key={agent.label}
                      className="flex items-center gap-2.5 rounded-full bg-gray-50 px-4 py-2.5 text-sm text-gray-700"
                    >
                      <span className="truncate">{agent.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={tab.href}
                  className="inline-flex items-center gap-2 w-fit rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  {tab.cta}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Right — Image */}
              <div className="relative min-h-[300px] md:min-h-0">
                <img
                  src={tab.image}
                  alt={tab.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
