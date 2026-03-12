"use client";

import {
  Sparkles,
  CircleCheck,
  CircleX,
  Ellipsis,
  ArrowRight,
  Lock,
  Heart,
} from "lucide-react";

const font = "font-[family-name:var(--font-manrope)]";

/* ── Data ─────────────────────────────────────────────────────────── */

interface MemoryCard {
  badge: string;
  title: string;
  description: string;
  time: string;
  footer: "toggle" | "lock" | "heart";
}

const confirmedCards: MemoryCard[] = [
  {
    badge: "WORK",
    title: "Client Onboarding Process",
    description:
      "Streamlined workflow for high-net-worth individuals, focusing on KYC automation and biometric verification steps.",
    time: "Synced 2h ago",
    footer: "toggle",
  },
  {
    badge: "INSIGHT",
    title: "Stoic Meditation: Obstacle is Way",
    description:
      "Core reflections on perception, action, and will during the morning focus block. Useful for stress management under pressure.",
    time: "Synced yesterday",
    footer: "lock",
  },
  {
    badge: "PERSONAL",
    title: "Anniversary Dinner: Blue Bayou",
    description:
      "Detailed sensory log from the dinner. Note the specific flavor profile of the signature dish for future reference.",
    time: "Synced 3 days ago",
    footer: "heart",
  },
];

const tabs = ["All", "Work", "Personal"] as const;

/* ── Sub-components ───────────────────────────────────────────────── */

function Badge({ label }: { label: string }) {
  return (
    <span
      className={` inline-flex items-center rounded-md bg-[#E8E8E8] px-1.5 py-0.5 text-[8px] font-bold tracking-[1.2px] text-[#333]`}
    >
      {label}
    </span>
  );
}

function Toggle() {
  return (
    <div className="flex h-[22px] w-10 items-center justify-end rounded-full bg-[#CCC] p-[3px]">
      <div className="h-4 w-4 rounded-full bg-white" />
    </div>
  );
}

function ConfirmedCard({
  badge,
  title,
  description,
  time,
  footer,
}: MemoryCard) {
  return (
    <div className="flex w-full min-w-0 flex-1 flex-col justify-between rounded-[14px] border border-grey-2 bg-bg-0 p-4">
      {/* Top */}
      <div className="flex flex-col gap-2">
        <Badge label={badge} />
        <h3 className={` text-[12px] font-bold tracking-[-0.2px] text-[#111]`}>
          {title}
        </h3>
        <p className={` text-[10px] font-normal leading-[1.6] text-[#888]`}>
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex w-full items-center justify-between">
        <span className={` text-[9px] font-normal text-[#BBB]`}>{time}</span>
        {footer === "toggle" && <Toggle />}
        {footer === "lock" && <Lock size={12} className="text-[#CCC]" />}
        {footer === "heart" && <Heart size={12} className="text-[#CCC]" />}
      </div>
    </div>
  );
}

/* ── Main ─────────────────────────────────────────────────────────── */

export default function VM6CognitiveSync() {
  return (
    <div
      data-lenis-prevent
      className={` flex w-full flex-col gap-4 bg-[#F7F6F3] p-4 overflow-auto h-full`}
    >
      {/* ─── Pending Section ─────────────────────────────────────── */}
      <section className="flex w-full flex-col gap-5">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex w-full items-end justify-between">
            <h1 className="text-2xl font-medium tracking-tight text-[#111]">
              <span
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Personal Memories
              </span>
            </h1>
          </div>
        </div>

        {/* Pending Card */}
        <div className="flex w-full overflow-hidden rounded-2xl border border-grey-2 bg-bg-0">
          <div className="flex-1">
            <img
              src="/hero/me2.webp"
              alt="Pending Card"
              className="flex-1 object-cover"
            />
          </div>
          {/* Right Content */}
          <div className="flex flex-1 flex-col justify-center gap-5 p-4">
            {/* Title */}
            <h2 className="text-base font-extrabold tracking-[-0.3px] text-[#111]">
              Q4 Strategy Session Summary
            </h2>

            {/* Body */}
            <p className="text-[12px] font-normal leading-[1.65] text-[#666]">
              Captured key insights from the morning workshop regarding
              international scaling and neural-link optimization. Action items:
              finalize the EMEA roadmap and schedule a deep dive on LatAm
              infrastructure.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1.5 rounded-[8px] bg-[#111] px-4 py-2 transition-colors hover:bg-[#333]">
                <CircleCheck size={12} className="text-white" />
                <span className="text-[10px] font-semibold text-white">
                  Accept Update
                </span>
              </button>
              <button className="flex items-center gap-1.5 rounded-[8px] border border-[#D0D0D0] bg-white px-4 py-2 transition-colors hover:bg-[#F5F5F5]">
                <CircleX size={12} className="text-[#666]" />
                <span className="text-[10px] font-semibold text-[#333]">
                  Dismiss
                </span>
              </button>
              <button className="flex items-center rounded-[8px] border border-[#D0D0D0] bg-white px-2.5 py-2 transition-colors hover:bg-[#F5F5F5]">
                <Ellipsis size={12} className="text-[#999]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Confirmed Section ───────────────────────────────────── */}
      <section className="flex w-full flex-col gap-4">
        {/* Header */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-base font-extrabold tracking-[-0.3px] text-[#111]">
              Confirmed Memories
            </h2>
            <div className="flex items-center gap-1">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`rounded-full px-2.5 py-[3px] text-[9px] font-semibold transition-colors ${
                    i === 0
                      ? "bg-[#111] text-white"
                      : "border border-[#D0D0D0] bg-white text-[#666] hover:bg-[#F5F5F5]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-1 text-[10px] font-medium text-[#666] transition-colors hover:text-[#333]">
            View All Archive
            <ArrowRight size={12} />
          </button>
        </div>

        {/* Cards Row */}
        <div className="flex w-full gap-5">
          {confirmedCards.map((card) => (
            <ConfirmedCard key={card.title} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
