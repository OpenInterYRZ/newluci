"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    image: "/usecases/Founders.webp",
  },
  {
    id: "investors",
    label: "Investors",
    href: "/use-cases/investors",
    title: "Deal flow tracking, portfolio insights, due diligence at scale",
    description:
      "Stay on top of every deal without drowning in data. LUCI organizes pitch decks, tracks portfolio updates, and surfaces the signals that matter — so you never miss a great opportunity.",
    agents: [
      { label: "Deal Flow Agent" },
      { label: "Portfolio Monitor" },
      { label: "Due Diligence Agent" },
      { label: "Market Signal Agent" },
    ],
    cta: "Sharpen your deal flow",
    image: "/usecases/Investors.webp",
  },
  {
    id: "sales-leaders",
    label: "Sales Leaders",
    href: "/use-cases/sales-leaders",
    title: "Pipeline visibility, call insights, rep coaching on autopilot",
    description:
      "Stop guessing where deals stand. LUCI captures every call, highlights buying signals, and gives your reps personalized coaching — turning raw conversations into closed revenue.",
    agents: [
      { label: "Call Insight Agent" },
      { label: "Pipeline Tracker" },
      { label: "Rep Coaching Agent" },
      { label: "Deal Risk Agent" },
    ],
    cta: "Supercharge your pipeline",
    image: "/usecases/sales.webp",
  },
];

export default function UseCaseTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const tab = TABS[activeIndex];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1300px] px-5">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-text-0 leading-[1.15]">
            One AI agent, built for elites
          </h2>
          <p className="text-base text-text-2 max-w-3xl">
            Whether you&apos;re a founder, investor, or sales leader —
            LUCI&apos;s AI agents adapt to your workflow and automate the tasks
            that slow you down.
          </p>
        </div>

        {/* Tabs with progress indicators */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          {TABS.map((t, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={t.id}
                onClick={() => handleTabClick(i)}
                className={`relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md"
                    : "text-text-2 bg-grey-0 dark:bg-grey-8 hover:bg-grey-1 dark:hover:bg-grey-7"
                }`}
              >
                <span className="relative z-10">{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-bg-0 shadow-sm ring-1 ring-grey-1 dark:ring-grey-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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

                {/* Agent pills — brand-tinted with dot indicator */}
                <div className="grid grid-cols-2 gap-2.5">
                  {tab.agents.map((agent) => (
                    <div
                      key={agent.label}
                      className="flex items-center gap-2.5 rounded-full bg-brand-0 dark:bg-brand-9/30 px-4 py-2.5 text-sm text-text-1"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="truncate">{agent.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA — brand orange */}
                <Link
                  href={tab.href}
                  className="inline-flex items-center gap-2 w-fit rounded-full bg-primary text-white px-5 py-2.5 text-sm font-medium hover:bg-primary-hover transition-colors"
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
                <Image
                  src={tab.image}
                  alt={`${tab.label} use case — ${tab.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
