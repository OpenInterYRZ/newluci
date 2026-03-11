"use client";

import { Check } from "lucide-react";

/* ─── data ──────────────────────────────────────── */

const KEY_POINTS = [
  "The team proposed a round pizza box design to reduce packaging waste by 15%.",
  "Initial pushback from management on feasibility, but the group persisted with a working prototype.",
  "Cross-functional collaboration between design, engineering, and supply chain teams was highlighted.",
];

const ACTION_ITEMS: {
  text: string;
  assignee: string;
  avatarColor: string;
  done?: boolean;
}[] = [
  {
    text: "Finalize prototype specs and share with supplier",
    assignee: "Dave",
    avatarColor: "#D4A574",
    done: false,
  },
  {
    text: "Schedule follow-up review with leadership",
    assignee: "Sarah",
    avatarColor: "#A5B4C4",
    done: false,
  },
  {
    text: "Upload revised CAD files to shared drive",
    assignee: "Mike",
    avatarColor: "#B8C9A3",
    done: true,
  },
];

/* ─── sub-components ────────────────────────────── */

function DiamondBullet() {
  return (
    <span
      className="shrink-0 mt-[5px] text-[10px] leading-none"
      style={{ color: "#C9A96E" }}
    >
      ◆
    </span>
  );
}

function ActionItem({
  text,
  assignee,
  avatarColor,
  done,
}: {
  text: string;
  assignee: string;
  avatarColor: string;
  done?: boolean;
}) {
  return (
    <div className="flex items-center gap-3.5">
      {/* Checkbox */}
      <div
        className={`shrink-0 w-5 h-5 rounded flex items-center justify-center transition-colors ${
          done ? "bg-[#C9A96E]" : "border-[1.5px] border-[#CCCCCC] bg-white"
        }`}
      >
        {done && <Check size={13} className="text-white" strokeWidth={2.5} />}
      </div>

      {/* Avatar */}
      <div
        className="shrink-0 w-[34px] h-[34px] rounded-full flex items-center justify-center text-white text-[13px] font-semibold"
        style={{ backgroundColor: avatarColor }}
      >
        {assignee[0]}
      </div>

      {/* Text */}
      <div className="flex flex-col min-w-0">
        <span
          className={`text-[14px] leading-[1.5] ${
            done ? "line-through text-[#AAAAAA]" : "text-[#333333]"
          }`}
        >
          {text}
        </span>
        <span className="text-[12px] text-[#AAAAAA]">@{assignee}</span>
      </div>
    </div>
  );
}

/* ─── main ──────────────────────────────────────── */

export default function VM7AnalysisReport() {
  return (
    <div
      data-lenis-prevent
      className="flex items-start justify-center w-full h-full overflow-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero/hero-m1.webp')" }}
    >
      <div
        className="flex flex-col gap-4 w-full bg-[#F7F6F3] px-4"
        style={{
          boxShadow: "0 12px 40px -4px rgba(0,0,0,0.06)",
        }}
      >
        {/* ── Title ── */}
        <h1
          className="text-2xl font-medium tracking-tight"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Analysis Report
        </h1>

        {/* ── Meeting Summary Card ── */}
        <div
          className="flex flex-col gap-2 rounded-2xl border p-4"
          style={{
            background: "linear-gradient(180deg, #F5F0EA 0%, #FAF7F3 100%)",
            borderColor: "#EDE5DA",
          }}
        >
          <span className="text-[17px] font-bold text-[#1A1A1A] font-[family-name:var(--font-manrope)]">
            Meeting Summary
          </span>
          <span className="text-[13px] text-[#8A8A8A]">
            The Underdogs: Apple at Work &middot; 4 min 16 sec &middot; Mar 5,
            2026
          </span>
        </div>

        {/* ── Key Points ── */}
        <div className="flex flex-col gap-[18px]">
          <h2 className="text-[18px] font-bold text-[#1A1A1A]">Key Points</h2>

          {KEY_POINTS.map((point, i) => (
            <div key={i} className="flex gap-3">
              <DiamondBullet />
              <p className="text-[14px] leading-[1.6] text-[#444444]">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* ── Action Items Card ── */}
        <div
          className="flex flex-col gap-5 rounded-2xl border p-4"
          style={{
            background: "linear-gradient(180deg, #FAF5EE 0%, #FEFCFA 100%)",
            borderColor: "#EDE5DA",
          }}
        >
          <h2 className="text-[17px] font-bold text-[#1A1A1A]">Action Items</h2>

          <div className="flex flex-col gap-4">
            {ACTION_ITEMS.map((item, i) => (
              <ActionItem key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
