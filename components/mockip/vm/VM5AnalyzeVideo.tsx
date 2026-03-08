"use client";

import {
  ExternalLink,
  Copy,
  Play,
  FileText,
  CircleCheck,
  Square,
  SquareCheck,
  Share2,
  Coins,
  Brain,
} from "lucide-react";

const font = "font-[family-name:var(--font-manrope)]";

/* ─── sub-components ──────────────────────────── */

function ProgressBar({ width }: { width: string }) {
  return (
    <div className="h-2.5 w-full rounded-full bg-[#EDEDED]">
      <div
        className="h-full rounded-full"
        style={{
          width,
          background:
            "linear-gradient(90deg, #FF6B35 0%, #FFBE98 70%, #FFE4D6 100%)",
        }}
      />
    </div>
  );
}

function ActionItem({
  done,
  text,
}: {
  done?: boolean;
  text: string;
}) {
  return (
    <div className="flex items-start gap-2">
      {done ? (
        <SquareCheck size={14} className="text-[#34A853] mt-0.5 shrink-0" />
      ) : (
        <Square size={14} className="text-[#CCC] mt-0.5 shrink-0" />
      )}
      <span
        className={`text-xs leading-relaxed ${done ? "text-[#999]" : "text-[#555]"}`}
      >
        {text}
      </span>
    </div>
  );
}

function SentimentBadge({
  emoji,
  label,
  color,
  bg,
}: {
  emoji: string;
  label: string;
  color: string;
  bg: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-medium"
      style={{ color, background: bg }}
    >
      {emoji} {label}
    </span>
  );
}

/* ─── main ────────────────────────────────────── */

export default function VM5AnalyzeVideo() {
  return (
    <div className={`flex gap-8 p-8 w-full ${font}`}>
      {/* ── Left Column ── */}
      <div className="flex flex-col gap-6 flex-1 min-w-0">
        {/* Video Card */}
        <div className="flex flex-col gap-4 rounded-xl border border-[#E0E0E0] bg-white p-5">
          {/* filename */}
          <span className="text-[#1A1A1A] text-base font-semibold">
            The_Underdogs__Apple_at_Work.mp4
          </span>

          {/* button row */}
          <div className="flex items-center justify-between">
            <button className="inline-flex items-center gap-1.5 rounded-md border border-[#D0D0D0] px-3 py-1.5 text-xs font-medium text-[#333]">
              Select Another Video <ExternalLink size={12} className="text-[#666]" />
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-md border border-[#D0D0D0] px-3 py-1.5 text-xs font-medium text-[#333]">
              Video ID <Copy size={12} className="text-[#666]" />
            </button>
          </div>

          {/* video player placeholder */}
          <div className="relative w-full aspect-video rounded bg-[#0A0A0A] overflow-hidden">
            {/* letterbox bars */}
            <div className="absolute inset-x-0 top-0 h-7 bg-black" />
            <div className="absolute inset-x-0 bottom-0 h-7 bg-black" />
            {/* play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/25 border border-white/50">
                <Play size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Prompt Card */}
        <div className="flex flex-col gap-4 rounded-xl border-[1.5px] border-[#FF8C00] bg-white p-5">
          <span className="text-[#1A1A1A] text-base font-medium">2</span>
          <div className="h-16" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F0F0F0] px-2 py-1 text-[10px] text-[#888]">
                <Brain size={12} /> 6/5000 tokens available
              </span>
              <Coins size={14} className="text-[#AAA]" />
            </div>
            <Share2 size={16} className="text-[#AAA]" />
          </div>
        </div>
      </div>

      {/* ── Right Column ── */}
      <div className="flex flex-col gap-6 flex-1 min-w-0">
        {/* Pegasus Status */}
        <div className="flex flex-col gap-5 rounded-xl bg-[#F5F5F5] p-6">
          <div className="flex items-center gap-2.5">
            <span className="text-base">🐦</span>
            <span className="text-sm">
              <strong className="text-[#1A1A1A]">Luci</strong>{" "}
              <span className="text-[#666]">
                is retrieving video embeddings…
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <ProgressBar width="65%" />
            <ProgressBar width="50%" />
            <ProgressBar width="80%" />
          </div>
        </div>

        {/* Analysis Document */}
        <div className="flex flex-col gap-4 rounded-xl border border-[#E5E5E5] bg-white p-5 px-6">
          {/* header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-[#FF8C00]" />
              <span className="text-sm font-semibold text-[#1A1A1A]">
                Analysis Report
              </span>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#F0FFF0] px-2 py-0.5 text-[10px] font-medium text-[#34A853]">
              <CircleCheck size={11} /> Generated
            </span>
          </div>

          <div className="h-px bg-[#F0F0F0]" />

          {/* markdown body */}
          <div className="flex flex-col gap-3 text-xs leading-relaxed">
            <h3 className="text-sm font-bold text-[#1A1A1A]">
              # Meeting Summary
            </h3>
            <p className="text-[11px] text-[#999]">
              The Underdogs: Apple at Work &nbsp;•&nbsp; 4 min 16 sec &nbsp;•&nbsp; Mar
              5, 2026
            </p>

            <h4 className="text-[13px] font-semibold text-[#333] mt-1">
              ## Key Points
            </h4>
            <ul className="flex flex-col gap-1.5 text-[#555]">
              <li>
                • &nbsp;The team proposed a round pizza box design to reduce
                packaging waste by 15%.
              </li>
              <li>
                • &nbsp;Initial pushback from management on feasibility, but the
                group persisted with a working prototype.
              </li>
              <li>
                • &nbsp;Cross-functional collaboration between design,
                engineering, and supply chain teams was highlighted.
              </li>
            </ul>

            <h4 className="text-[13px] font-semibold text-[#333] mt-1">
              ## Action Items
            </h4>
            <div className="flex flex-col gap-1.5">
              <ActionItem text="Finalize prototype specs and share with supplier — @Dave" />
              <ActionItem text="Schedule follow-up review with leadership — @Sarah" />
              <ActionItem
                done
                text="Upload revised CAD files to shared drive — @Mike"
              />
            </div>

            <h4 className="text-[13px] font-semibold text-[#333] mt-1">
              ## Sentiment
            </h4>
            <div className="flex gap-3">
              <SentimentBadge
                emoji="😊"
                label="Positive 68%"
                color="#2D8A4E"
                bg="#F0FFF4"
              />
              <SentimentBadge
                emoji="😐"
                label="Neutral 24%"
                color="#B45309"
                bg="#FFFBEB"
              />
              <SentimentBadge
                emoji="😟"
                label="Negative 8%"
                color="#DC2626"
                bg="#FFF1F0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
