"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface UseCaseAgent {
  icon: string;
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
      { icon: "📋", label: "Meeting Summary Agent" },
      { icon: "✅", label: "Action Item Tracker" },
      { icon: "🔔", label: "Follow-up Reminder Agent" },
      { icon: "📊", label: "Team Progress Agent" },
    ],
    cta: "Start managing smarter",
    image: "/usecase-manage/mana.webp",
  },
  {
    id: "knowledge",
    label: "Knowledge Workers",
    href: "/use-cases/knowledge-workers",
    title: "Learning notes, video understanding, knowledge base",
    description:
      "Turn hours of video into structured notes in seconds. LUCI watches, understands, and organizes knowledge so you can learn faster and recall anything instantly.",
    agents: [
      { icon: "🎬", label: "Video Understanding Agent" },
      { icon: "📝", label: "Smart Notes Agent" },
      { icon: "🧠", label: "Knowledge Base Builder" },
      { icon: "🔍", label: "Semantic Search Agent" },
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
      { icon: "💡", label: "Idea Capture Agent" },
      { icon: "🗂️", label: "Second Brain Organizer" },
      { icon: "✍️", label: "Creative Workflow Agent" },
      { icon: "🔗", label: "Idea Connection Agent" },
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
      { icon: "🤝", label: "Client Context Agent" },
      { icon: "📈", label: "Team Alignment Agent" },
      { icon: "⚡", label: "Quick Recap Agent" },
      { icon: "🎯", label: "Priority Focus Agent" },
    ],
    cta: "Keep your team aligned",
    image: "/usecases/konw/knowhero.webp",
  },
];

const TAB_DURATION = 5000;

export default function UseCaseTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(Date.now());

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startTimeRef.current = Date.now();
    setProgress(0);

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(elapsed / TAB_DURATION, 1);
      setProgress(pct);

      if (pct >= 1) {
        setActiveIndex((prev) => (prev + 1) % TABS.length);
      }
    }, 30);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex, startTimer]);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const tab = TABS[activeIndex];

  return (
    <section className="w-full bg-web-bg-0 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-12">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-text-0 leading-tight">
            Built for every role
          </h2>
          <p className="text-base text-text-2 max-w-xl">
            Whether you lead a team, learn for a living, create for fun, or
            build a company — LUCI adapts to how you work.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {TABS.map((t, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={t.id}
                onClick={() => handleTabClick(i)}
                className="relative rounded-full min-w-[160px] px-8 py-2.5 text-sm font-medium overflow-hidden bg-grey-1 text-text-2 border border-grey-2 hover:border-grey-3 transition-colors"
              >
                {/* Black fill progress */}
                <motion.span
                  className="absolute inset-0 rounded-full bg-grey-9"
                  style={{ transformOrigin: "left" }}
                  animate={{ scaleX: isActive ? progress : 0 }}
                  transition={{ duration: 0.03, ease: "linear" }}
                />
                {/* Black text (base layer) */}
                <span className="relative z-10 text-text-0">{t.label}</span>
                {/* White text (clipped to progress) */}
                <span
                  className="absolute inset-0 z-20 flex items-center justify-center text-white"
                  style={{
                    clipPath: `inset(0 ${100 - (isActive ? progress * 100 : 0)}% 0 0)`,
                  }}
                >
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-grey-0 border border-grey-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative min-h-[480px]"
            >
              {/* Background image */}
              <img
                src={tab.image}
                alt={tab.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Text content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12 gap-6 max-w-2xl">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                    {tab.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/75 leading-relaxed">
                    {tab.description}
                  </p>
                </div>

                {/* Agent pills */}
                <div className="grid grid-cols-2 gap-2.5">
                  {tab.agents.map((agent) => (
                    <div
                      key={agent.label}
                      className="flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2.5 text-sm text-white/85"
                    >
                      <span className="text-base shrink-0">{agent.icon}</span>
                      <span className="truncate">{agent.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={tab.href}
                  className="inline-flex items-center gap-2 w-fit rounded-full bg-white text-grey-9 px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
