"use client";

import type { LucideIcon } from "lucide-react";
import {
  Video,
  Brain,
  Server,
  MessageCircle,
  Zap,
  Sparkles,
  Play,
  ArrowRight,
  Lock,
  HardDrive,
  Database,
  Send,
  Phone,
  Mic,
  CircleCheck,
  ChevronRight,
  GitBranch,
  Cloud,
  Shield,
} from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard";
/* ─── colour tokens (from .pen design system) ─── */
const c = {
  bgPage: "#0B0B0E",
  bgCard: "#16161A",
  bgElevated: "#1A1A1E",
  borderSubtle: "#2A2A2E",
  textPrimary: "#FAFAF9",
  textSecondary: "#8E8E93",
  textMuted: "#6B6B70",
  indigo: "#6366F1",
  indigoDark: "#4F46E5",
  green: "#32D583",
  greenDark: "#059669",
  coral: "#E85A4F",
  coralDark: "#DC2626",
  cyan: "#22D3EE",
  cyanDark: "#0891B2",
  amber: "#FFB547",
  amberDark: "#D97706",
  purple: "#A78BFA",
  purpleDark: "#7C3AED",
};

/* ─── shared card wrapper ─── */
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-[20px] p-7 ${className}`}
      style={{
        background: c.bgCard,
        border: `1px solid ${c.borderSubtle}`,
        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Card 1 — Video Understanding & Memory
   ═══════════════════════════════════════════════════ */
function VideoCard() {
  return (
    <SpotlightCard
      className="flex-1 min-w-0"
      spotlightColor="rgba(99, 102, 241, 0.2)"
    >
      <div className="flex flex-col gap-2">
        <h3
          className=" text-[22px] font-semibold "
          style={{ color: c.textPrimary }}
        >
          Video Understanding &amp; Memory
        </h3>
        <p className="text-sm leading-[1.5]" style={{ color: c.textSecondary }}>
          Deep comprehension of long-form and high-volume video content,
          transformed into a searchable memory vault you can query anytime.
        </p>
      </div>

      {/* Visual: video thumbnails → brain */}
      <div
        className="flex items-center gap-2.5 rounded-xl p-4 mt-auto"
        style={{ background: c.bgElevated, flex: "1 1 0" }}
      >
        {[0.5, 0.375, 0.25].map((opacity, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-14 h-10 rounded-lg"
            style={{
              background: `rgba(99,102,241,${opacity * 0.6})`,
            }}
          >
            <Play
              size={16}
              style={{ color: `rgba(99,102,241,${opacity * 1.6})` }}
              strokeWidth={2}
            />
          </div>
        ))}

        <ArrowRight size={20} color={c.indigo} strokeWidth={2} />

        <div
          className="flex items-center justify-center w-12 h-10 rounded-lg"
          style={{
            background: `linear-gradient(180deg, ${c.indigo} 0%, ${c.indigoDark} 100%)`,
          }}
        >
          <Brain size={20} color="#fff" strokeWidth={1.8} />
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 2 — Unified Memory + Conversation
   ═══════════════════════════════════════════════════ */
function MemoryCard() {
  const rows = [
    { color: c.green, label: "Meeting notes" },
    { color: c.indigo, label: "Video transcripts" },
    { color: c.coral, label: "Chat history" },
    { color: c.amber, label: "Personal notes" },
  ];

  return (
    <SpotlightCard
      className="flex-1 min-w-0"
      spotlightColor="rgba(34, 211, 238, 0.2)"
    >
      <div className="flex flex-col gap-2">
        <h3
          className=" text-[22px] font-semibold "
          style={{ color: c.textPrimary }}
        >
          Unified Memory + Conversation
        </h3>
        <p className="text-sm leading-[1.5]" style={{ color: c.textSecondary }}>
          Meetings, notes, chats, and videos all feed into one continuous
          long-term memory — creating a seamless, contextual experience.
        </p>
      </div>

      {/* Visual: memory type rows */}
      <div
        className="flex flex-col gap-2 rounded-xl p-3.5 mt-auto"
        style={{ background: c.bgElevated, flex: "1 1 0" }}
      >
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: row.color }}
            />
            <span
              className="text-xs font-medium"
              style={{ color: c.textMuted }}
            >
              {row.label}
            </span>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 3 — Truly Yours
   ═══════════════════════════════════════════════════ */
function InstanceCard() {
  return (
    <SpotlightCard
      className="flex-1 min-w-0"
      spotlightColor="rgba(232, 90, 79, 0.2)"
    >
      <div className="flex flex-col gap-2">
        <h3
          className=" text-[22px] font-semibold "
          style={{ color: c.textPrimary }}
        >
          Truly Yours
        </h3>
        <p className="text-sm leading-[1.5]" style={{ color: c.textSecondary }}>
          A dedicated VM, data on your disk. Not a shared service — an AI
          instance completely under your control.
        </p>
      </div>

      {/* Visual: VM ↔ lock ↔ Data */}
      <div
        className="flex items-center justify-center gap-3 rounded-xl px-4 py-3 mt-auto"
        style={{ background: c.bgElevated, flex: "1 1 0" }}
      >
        <div
          className="flex flex-col items-center justify-center gap-1 w-20 h-14 rounded-[10px]"
          style={{
            background: "rgba(232,90,79,0.08)",
            border: "1px solid rgba(232,90,79,0.25)",
          }}
        >
          <HardDrive size={18} color={c.coral} strokeWidth={1.8} />
          <span className="text-[9px] font-semibold" style={{ color: c.coral }}>
            Your VM
          </span>
        </div>

        <Lock size={16} color={c.textMuted} strokeWidth={2} />

        <div
          className="flex flex-col items-center justify-center gap-1 w-20 h-14 rounded-[10px]"
          style={{
            background: "rgba(232,90,79,0.08)",
            border: "1px solid rgba(232,90,79,0.25)",
          }}
        >
          <Database size={18} color={c.coral} strokeWidth={1.8} />
          <span className="text-[9px] font-semibold" style={{ color: c.coral }}>
            Your Data
          </span>
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 4 — Where You Already Are
   ═══════════════════════════════════════════════════ */
function MessagingCard() {
  return (
    <SpotlightCard
      className="flex-1 min-w-0"
      spotlightColor="rgba(50, 213, 131, 0.2)"
    >
      <div className="flex flex-col gap-2">
        <h3
          className=" text-[22px] font-semibold "
          style={{ color: c.textPrimary }}
        >
          Where You Already Are
        </h3>
        <p className="text-sm leading-[1.5]" style={{ color: c.textSecondary }}>
          Connects via Telegram, WhatsApp, and more. No new app to install —
          just talk to your AI.
        </p>
      </div>

      {/* Visual: chat bubbles */}
      <div
        className="flex items-center justify-center gap-4 rounded-xl px-4 py-3 mt-auto"
        style={{ background: c.bgElevated, flex: "1 1 0" }}
      >
        <div
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl rounded-bl-sm"
          style={{
            background: "rgba(34,211,238,0.12)",
            border: "1px solid rgba(34,211,238,0.18)",
          }}
        >
          <Send size={14} color={c.cyan} strokeWidth={2} />
          <span className="text-xs font-medium" style={{ color: c.cyan }}>
            Telegram
          </span>
        </div>

        <div
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl rounded-bl-sm"
          style={{
            background: "rgba(50,213,131,0.12)",
            border: "1px solid rgba(50,213,131,0.18)",
          }}
        >
          <Phone size={14} color={c.green} strokeWidth={2} />
          <span className="text-xs font-medium" style={{ color: c.green }}>
            WhatsApp
          </span>
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 5 — From Record to Action
   ═══════════════════════════════════════════════════ */
function ClosedLoopCard() {
  const steps = [
    { icon: Mic, label: "Record" },
    { icon: Brain, label: "Remember" },
    { icon: CircleCheck, label: "Execute" },
  ];

  return (
    <SpotlightCard
      className="flex-1 min-w-0"
      spotlightColor="rgba(255, 181, 71, 0.2)"
    >
      <div className="flex flex-col gap-2">
        <h3
          className=" text-[22px] font-semibold "
          style={{ color: c.textPrimary }}
        >
          From Record to Action
        </h3>
        <p className="text-sm leading-[1.5]" style={{ color: c.textSecondary }}>
          Not just suggestions — your AI actually executes. Meeting → memory →
          task → done.
        </p>
      </div>

      {/* Visual: step flow */}
      <div
        className="flex items-center justify-center gap-1.5 rounded-xl px-3.5 py-2.5 mt-auto"
        style={{ background: c.bgElevated, flex: "1 1 0" }}
      >
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-1.5">
            <div
              className="flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-lg"
              style={{ background: "rgba(255,181,71,0.08)" }}
            >
              <step.icon size={14} color={c.amber} strokeWidth={2} />
              <span
                className="text-[9px] font-semibold"
                style={{ color: c.amber }}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <ChevronRight size={12} color={c.textMuted} strokeWidth={2} />
            )}
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 6 — Open Source + Cloud Hosted  (wide card)
   ═══════════════════════════════════════════════════ */
function OpenSourceCard() {
  const rows = [
    { icon: GitBranch, label: "Transparent & auditable" },
    { icon: Cloud, label: "Managed LLM infra" },
    { icon: Shield, label: "No vendor lock-in" },
  ];

  return (
    <SpotlightCard className="w-full" spotlightColor="rgba(167, 139, 250, 0.2)">
      <div className="flex items-center gap-8 flex-col sm:flex-row">
        {/* Left: icon + text */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          <div className="flex flex-col gap-2">
            <h3
              className=" text-[22px] font-semibold "
              style={{ color: c.textPrimary }}
            >
              Open Source + Cloud Hosted
            </h3>
            <p
              className="text-sm leading-[1.5]"
              style={{ color: c.textSecondary }}
            >
              Fully transparent and auditable code. Zero ops on your end — we
              manage the LLM infrastructure so you don&apos;t have to.
            </p>
          </div>
        </div>

        {/* Right: visual list */}
        <div
          className="flex flex-col justify-center gap-3 rounded-xl p-5 w-full sm:w-[280px] shrink-0"
          style={{ background: c.bgElevated }}
        >
          {rows.map((row) => (
            <div key={row.label} className="flex items-center gap-2">
              <row.icon size={14} color={c.purple} strokeWidth={2} />
              <span
                className="text-[13px] font-medium"
                style={{ color: c.textSecondary }}
              >
                {row.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Main Export — BentoFeatures
   ═══════════════════════════════════════════════════ */
export default function BentoFeatures() {
  return (
    <section className="w-full py-16 px-6 sm:px-12 my-30">
      <div className="max-w-[1304px] mx-auto flex flex-col gap-5">
        {/* ── Section Header ── */}
        <div className="flex flex-col  gap-6 pb-5 max-w-xl">
          <h2
            className=" text-text-0 text-3xl font-bold md:text-4xl lg:text-5xl "
            style={{ color: c.textPrimary }}
          >
            Everything You Need, Nothing You Don&apos;t
          </h2>

          <p
            className="text-text-2 text-base md:text-lg  max-w-115"
            style={{ color: c.textSecondary }}
          >
            A personal AI that remembers, understands, and acts — running on
            your own infrastructure.
          </p>
        </div>

        {/* ── Row 1: 2 large cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <VideoCard />
          <MemoryCard />
        </div>

        {/* ── Row 2: 3 medium cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <InstanceCard />
          <MessagingCard />
          <ClosedLoopCard />
        </div>

        {/* ── Row 3: 1 full-width card ── */}
        <OpenSourceCard />
      </div>
    </section>
  );
}
