"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Disc,
  ScanFace,
  Infinity,
  BrainCircuit,
  TrendingUp,
  Bot,
  GitCompareArrows,
  ShieldCheck,
  AudioLines,
  Clock,
  Waypoints,
  Lock,
  ServerCog,
  FileCheck,
} from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard";

/* ─── colour tokens ─── */
const accent = {
  red: {
    base: "#EF4444",
    glow: "rgba(239,68,68,0.15)",
    spot: "rgba(239,68,68,0.2)",
  },
  indigo: {
    base: "#6366F1",
    glow: "rgba(99,102,241,0.15)",
    spot: "rgba(99,102,241,0.2)",
  },
  cyan: {
    base: "#22D3EE",
    glow: "rgba(34,211,238,0.15)",
    spot: "rgba(34,211,238,0.2)",
  },
  purple: {
    base: "#A78BFA",
    glow: "rgba(167,139,250,0.15)",
    spot: "rgba(167,139,250,0.2)",
  },
  amber: {
    base: "#FFB547",
    glow: "rgba(255,181,71,0.15)",
    spot: "rgba(255,181,71,0.2)",
  },
  green: {
    base: "#32D583",
    glow: "rgba(50,213,131,0.15)",
    spot: "rgba(50,213,131,0.2)",
  },
  orange: {
    base: "#F97316",
    glow: "rgba(249,115,22,0.15)",
    spot: "rgba(249,115,22,0.2)",
  },
  slate: {
    base: "#94A3B8",
    glow: "rgba(148,163,184,0.12)",
    spot: "rgba(148,163,184,0.18)",
  },
};

const c = {
  bgPage: "#0B0B0E",
  bgCard: "#16161A",
  bgElevated: "#1A1A1E",
  borderSubtle: "#2A2A2E",
  textPrimary: "#FAFAF9",
  textSecondary: "#8E8E93",
  textMuted: "#6B6B70",
};

/* ─── shared badge ─── */
function AccentBadge({
  color,
  icon: Icon,
}: {
  color: string;
  icon: React.ElementType;
}) {
  return (
    <div
      className="flex items-center justify-center w-9 h-9 rounded-xl"
      style={{
        background: `linear-gradient(135deg, ${color}22, ${color}08)`,
        border: `1px solid ${color}30`,
      }}
    ></div>
  );
}

/* ─── animated card entrance wrapper ─── */
function AnimatedCard({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   Card 1 — Always-On Recording  (wide)
   ═══════════════════════════════════════════════════ */
function AlwaysOnCard() {
  return (
    <SpotlightCard className="h-full" spotlightColor="rgba(239, 68, 68, 0.22)">
      <div className="flex flex-col gap-3 h-full">
        <AccentBadge color={accent.red.base} icon={Disc} />
        <h3 className="text-[20px] font-semibold">Always-On Recording</h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: c.textSecondary }}
        >
          Captures everything. Pauses when you need privacy.
        </p>

        {/* Visual: pulsing record indicator + waveform */}
        <div
          className="flex items-center gap-4 rounded-xl px-5 py-4 mt-auto"
          style={{ background: c.bgElevated }}
        >
          {/* Pulsing record dot */}
          <div className="relative flex items-center justify-center w-10 h-10">
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 32,
                height: 32,
                background: `${accent.red.base}18`,
              }}
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 24,
                height: 24,
                background: `${accent.red.base}30`,
              }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
            />
            <div
              className="relative w-3 h-3 rounded-full"
              style={{
                background: accent.red.base,
                boxShadow: `0 0 12px ${accent.red.base}80`,
              }}
            />
          </div>

          {/* Audio waveform bars */}
          <div className="flex items-center gap-[3px]">
            {[
              0.45, 0.7, 1, 0.6, 0.85, 0.5, 0.75, 0.95, 0.55, 0.8, 0.4, 0.65,
            ].map((h, i) => (
              <motion.div
                key={i}
                className="rounded-full"
                style={{
                  width: 3,
                  background: accent.red.base,
                  opacity: 0.5,
                }}
                animate={{
                  height: [h * 20, h * 8, h * 24, h * 12, h * 20],
                  opacity: [0.5, 0.3, 0.7, 0.4, 0.5],
                }}
                transition={{
                  duration: 1.8 + i * 0.1,

                  ease: "easeInOut",
                  delay: i * 0.08,
                }}
              />
            ))}
          </div>

          <span
            className="ml-auto text-xs font-mono font-medium"
            style={{ color: accent.red.base }}
          >
            REC
          </span>
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 2 — True Speaker ID
   ═══════════════════════════════════════════════════ */
function SpeakerIdCard() {
  return (
    <SpotlightCard className="h-full" spotlightColor="rgba(99, 102, 241, 0.18)">
      <div className="flex flex-col gap-3 h-full">
        <AccentBadge color={accent.indigo.base} icon={ScanFace} />
        <h3 className="text-[20px] font-semibold">True Speaker ID</h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: c.textSecondary }}
        >
          Face + voice recognition across every interaction.
        </p>

        {/* Visual: face scan + voice signature */}
        <div
          className="flex items-center justify-center gap-5 rounded-xl px-5 py-4 mt-auto"
          style={{ background: c.bgElevated }}
        >
          {/* Face scan frame */}
          <div className="relative w-14 h-14">
            {/* Corner brackets */}
            <div
              className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-sm"
              style={{ borderColor: accent.indigo.base }}
            />
            <div
              className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-sm"
              style={{ borderColor: accent.indigo.base }}
            />
            <div
              className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-sm"
              style={{ borderColor: accent.indigo.base }}
            />
            <div
              className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-sm"
              style={{ borderColor: accent.indigo.base }}
            />
            {/* Scan line */}
            <motion.div
              className="absolute left-1 right-1 h-[2px] rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${accent.indigo.base}, transparent)`,
              }}
              animate={{ top: ["15%", "80%", "15%"] }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            {/* Face icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <ScanFace
                size={22}
                color={`${accent.indigo.base}60`}
                strokeWidth={1.2}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-10" style={{ background: c.borderSubtle }} />

          {/* Voice signature */}
          <div className="flex flex-col items-center gap-1.5">
            <AudioLines
              size={16}
              color={accent.indigo.base}
              strokeWidth={1.5}
            />
            <div className="flex items-end gap-[2px]">
              {[0.3, 0.6, 1, 0.8, 0.5, 0.9, 0.4, 0.7].map((h, i) => (
                <motion.div
                  key={i}
                  className="rounded-full"
                  style={{ width: 2, background: accent.indigo.base }}
                  animate={{
                    height: [h * 14, h * 6, h * 14],
                    opacity: [0.6, 0.3, 0.6],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 3 — Unlimited Context
   ═══════════════════════════════════════════════════ */
function UnlimitedContextCard() {
  const lines = [
    "Q3 revenue forecast discussion...",
    "Product roadmap alignment sync...",
    "Client onboarding review call...",
    "Team standup — sprint planning...",
    "Board presentation rehearsal...",
  ];

  return (
    <SpotlightCard className="h-full" spotlightColor="rgba(34, 211, 238, 0.25)">
      <div className="flex flex-col gap-3 h-full">
        <AccentBadge color={accent.cyan.base} icon={Infinity} />
        <h3 className="text-[20px] font-semibold">Unlimited Context</h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: c.textSecondary }}
        >
          No need to explain. Understands your world in real time.
        </p>

        {/* Visual: scrolling context stream */}
        <div
          className="relative rounded-xl overflow-hidden mt-auto"
          style={{ background: c.bgElevated, height: 80 }}
        >
          {/* Fade masks */}
          <div
            className="absolute inset-x-0 top-0 h-6 z-10"
            style={{
              background: `linear-gradient(to bottom, ${c.bgElevated}, transparent)`,
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-6 z-10"
            style={{
              background: `linear-gradient(to top, ${c.bgElevated}, transparent)`,
            }}
          />

          <motion.div
            className="flex flex-col gap-2 px-4 py-3"
            animate={{ y: [0, -(lines.length * 28)] }}
            transition={{ duration: 8, ease: "linear" }}
          >
            {[...lines, ...lines].map((line, i) => (
              <div
                key={i}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: accent.cyan.base, opacity: 0.6 }}
                />
                <span
                  className="text-xs font-mono"
                  style={{ color: `${accent.cyan.base}90` }}
                >
                  {line}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 4 — Long-Term Memory
   ═══════════════════════════════════════════════════ */
function LongTermMemoryCard() {
  const milestones = [
    { label: "This morning", opacity: 1 },
    { label: "Last week", opacity: 0.8 },
    { label: "Last month", opacity: 0.6 },
    { label: "Last quarter", opacity: 0.45 },
  ];

  return (
    <SpotlightCard className="h-full" spotlightColor="rgba(167, 139, 250, 0.2)">
      <div className="flex flex-col gap-3 h-full">
        <AccentBadge color={accent.purple.base} icon={BrainCircuit} />
        <h3 className="text-[20px] font-semibold">Long-Term Memory</h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: c.textSecondary }}
        >
          No resets. Last quarter is as clear as this morning.
        </p>

        {/* Visual: timeline */}
        <div
          className="flex flex-col gap-0 rounded-xl px-5 py-4 mt-auto"
          style={{ background: c.bgElevated }}
        >
          {milestones.map((m, i) => (
            <motion.div
              key={m.label}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-2.5 h-2.5 rounded-full border-2 shrink-0"
                  style={{
                    borderColor: accent.purple.base,
                    opacity: m.opacity,
                    background: i === 0 ? accent.purple.base : "transparent",
                  }}
                />
                {i < milestones.length - 1 && (
                  <div
                    className="w-px h-5"
                    style={{ background: `${accent.purple.base}30` }}
                  />
                )}
              </div>
              <div className="flex items-center gap-2 pb-1">
                <Clock
                  size={11}
                  color={accent.purple.base}
                  style={{ opacity: m.opacity }}
                  strokeWidth={1.8}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: accent.purple.base, opacity: m.opacity }}
                >
                  {m.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 5 — Pattern Recognition
   ═══════════════════════════════════════════════════ */
function PatternCard() {
  return (
    <SpotlightCard className="h-full" spotlightColor="rgba(251, 191, 36, 0.22)">
      <div className="flex flex-col gap-3 h-full">
        <AccentBadge color={accent.amber.base} icon={TrendingUp} />
        <h3 className="text-[20px] font-semibold">Pattern Recognition</h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: c.textSecondary }}
        >
          Surfaces trends and risks easily missed.
        </p>

        {/* Visual: network graph nodes */}
        <div
          className="relative rounded-xl overflow-hidden mt-auto"
          style={{ background: c.bgElevated, height: 80 }}
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 80">
            {/* Connecting lines */}
            {[
              [30, 25, 80, 55],
              [80, 55, 140, 30],
              [140, 30, 175, 55],
              [80, 55, 55, 60],
              [140, 30, 110, 20],
            ].map(([x1, y1, x2, y2], i) => (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={accent.amber.base}
                strokeWidth={1}
                strokeOpacity={0.2}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              />
            ))}
            {/* Pulse traveling along main path */}
            <motion.circle
              r={2.5}
              fill={accent.amber.base}
              opacity={0.8}
              animate={{
                cx: [30, 80, 140, 175],
                cy: [25, 55, 30, 55],
              }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            {/* Nodes */}
            {[
              [30, 25],
              [80, 55],
              [140, 30],
              [175, 55],
              [55, 60],
              [110, 20],
            ].map(([cx, cy], i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r={i < 4 ? 4 : 3}
                fill={i < 4 ? accent.amber.base : `${accent.amber.base}60`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + i * 0.08,
                  type: "spring",
                  stiffness: 300,
                }}
              />
            ))}
          </svg>
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 6 — Autonomous Agent
   ═══════════════════════════════════════════════════ */
function AgentCard() {
  const tasks = [
    { icon: Clock, label: "Plans your day" },
    { icon: FileCheck, label: "Sends follow-ups" },
    { icon: ServerCog, label: "Drafts documents" },
  ];

  return (
    <SpotlightCard className="h-full" spotlightColor="rgba(34, 197, 94, 0.2)">
      <div className="flex flex-col gap-3 h-full">
        <AccentBadge color={accent.green.base} icon={Bot} />
        <h3 className="text-[20px] font-semibold">Autonomous Agent</h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: c.textSecondary }}
        >
          Executes tasks to lighten your workload.
        </p>

        {/* Visual: task execution flow */}
        <div
          className="flex flex-col gap-2 rounded-xl px-4 py-3.5 mt-auto"
          style={{ background: c.bgElevated }}
        >
          {tasks.map((task, i) => (
            <motion.div
              key={task.label}
              className="flex items-center gap-2.5"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.35 }}
            >
              <motion.div
                className="flex items-center justify-center w-6 h-6 rounded-md"
                style={{
                  background: `${accent.green.base}15`,
                  border: `1px solid ${accent.green.base}25`,
                }}
                whileInView={{
                  borderColor: [
                    `${accent.green.base}25`,
                    `${accent.green.base}60`,
                    `${accent.green.base}25`,
                  ],
                }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15 + 0.5,
                  duration: 1.5,
                }}
              >
                <task.icon
                  size={12}
                  color={accent.green.base}
                  strokeWidth={2}
                />
              </motion.div>
              <span
                className="text-xs font-medium"
                style={{ color: c.textSecondary }}
              >
                {task.label}
              </span>
              <motion.div
                className="ml-auto w-1.5 h-1.5 rounded-full"
                style={{ background: accent.green.base }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, delay: i * 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 7 — Cross-Meeting Intelligence  (wide)
   ═══════════════════════════════════════════════════ */
function CrossMeetingCard() {
  return (
    <SpotlightCard className="h-full" spotlightColor="rgba(249, 115, 22, 0.2)">
      <div className="flex flex-col gap-3 h-full">
        <AccentBadge color={accent.orange.base} icon={GitCompareArrows} />
        <h3 className="text-[20px] font-semibold">
          Cross-Meeting Intelligence
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: c.textSecondary }}
        >
          Connects the dots, days, weeks, or months apart.
        </p>

        {/* Visual: meeting nodes with connecting pulses */}
        <div
          className="relative rounded-xl overflow-hidden mt-auto"
          style={{ background: c.bgElevated, height: 80 }}
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 80">
            {/* Connection arcs */}
            <motion.path
              d="M50,50 Q120,10 190,50"
              fill="none"
              stroke={accent.orange.base}
              strokeWidth={1.2}
              strokeOpacity={0.3}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.path
              d="M120,50 Q200,15 270,50"
              fill="none"
              stroke={accent.orange.base}
              strokeWidth={1.2}
              strokeOpacity={0.3}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.path
              d="M50,50 Q160,0 270,50"
              fill="none"
              stroke={accent.orange.base}
              strokeWidth={1}
              strokeOpacity={0.15}
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            />

            {/* Traveling pulse dots */}
            <motion.circle r={2.5} fill={accent.orange.base} opacity={0.9}>
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M50,50 Q120,10 190,50"
              />
            </motion.circle>
            <motion.circle r={2} fill={accent.orange.base} opacity={0.6}>
              <animateMotion
                dur="3.5s"
                repeatCount="indefinite"
                path="M120,50 Q200,15 270,50"
              />
            </motion.circle>

            {/* Meeting nodes */}
            {[
              { cx: 50, cy: 50, label: "Mon" },
              { cx: 120, cy: 50, label: "Wed" },
              { cx: 190, cy: 50, label: "Fri" },
              { cx: 270, cy: 50, label: "Next" },
            ].map((node, i) => (
              <g key={i}>
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r={14}
                  fill={`${accent.orange.base}10`}
                  stroke={accent.orange.base}
                  strokeWidth={1.5}
                  strokeOpacity={0.4}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                />
                <Waypoints
                  x={node.cx - 7}
                  y={node.cy - 7}
                  width={14}
                  height={14}
                  color={accent.orange.base}
                  strokeWidth={1.5}
                />
                <text
                  x={node.cx}
                  y={node.cy + 24}
                  textAnchor="middle"
                  fill={c.textMuted}
                  fontSize={9}
                  fontFamily="monospace"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Card 8 — Enterprise Security  (full-width)
   ═══════════════════════════════════════════════════ */
function SecurityCard() {
  const badges = [
    { icon: ShieldCheck, label: "SOC2 Compliant" },
    { icon: Lock, label: "Sandboxed" },
    { icon: ServerCog, label: "No Model Training" },
  ];

  return (
    <SpotlightCard
      className="w-full"
      spotlightColor="rgba(148, 163, 184, 0.15)"
    >
      <div className="flex items-center gap-8 flex-col sm:flex-row">
        {/* Left: text */}
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          <AccentBadge color={accent.slate.base} icon={ShieldCheck} />
          <h3 className="text-[20px] font-semibold">Enterprise Security</h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: c.textSecondary }}
          >
            SOC2 compliant. Sandboxed. Your data never trains our models.
          </p>
        </div>

        {/* Right: security badges */}
        <div
          className="flex flex-col justify-center gap-3 rounded-xl p-5 w-full sm:w-[280px] shrink-0"
          style={{ background: c.bgElevated }}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div
                className="flex items-center justify-center w-7 h-7 rounded-lg"
                style={{
                  background: `${accent.slate.base}12`,
                  border: `1px solid ${accent.slate.base}20`,
                }}
              >
                <badge.icon
                  size={13}
                  color={accent.slate.base}
                  strokeWidth={2}
                />
              </div>
              <span
                className="text-[13px] font-medium"
                style={{ color: c.textSecondary }}
              >
                {badge.label}
              </span>

              {/* Animated checkmark */}
              <motion.svg
                className="ml-auto"
                width={14}
                height={14}
                viewBox="0 0 14 14"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15 }}
              >
                <motion.path
                  d="M3 7.5L5.5 10L11 4"
                  fill="none"
                  stroke={accent.green.base}
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + i * 0.15,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />
              </motion.svg>
            </motion.div>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ═══════════════════════════════════════════════════
   Main Export — KeyFeaturesBento
   ═══════════════════════════════════════════════════ */
export default function KeyFeaturesBento() {
  return (
    <section className="w-full py-20 px-6 sm:px-12">
      <div className="max-w-[1304px] mx-auto flex flex-col gap-5">
        {/* ── Section Header ── */}
        <motion.div
          className="flex flex-col gap-4 pb-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Key Features
          </h2>
          <p
            className="text-base md:text-lg"
            style={{ color: c.textSecondary }}
          >
            Built for people who need to remember everything — and act on it.
          </p>
        </motion.div>

        {/* ── Row 1: Always-On (2col) + Speaker ID (1col) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <AnimatedCard index={0} className="lg:col-span-2">
            <AlwaysOnCard />
          </AnimatedCard>
          <AnimatedCard index={1}>
            <SpeakerIdCard />
          </AnimatedCard>
        </div>

        {/* ── Row 2: Context + Memory + Pattern ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatedCard index={2}>
            <UnlimitedContextCard />
          </AnimatedCard>
          <AnimatedCard index={3}>
            <LongTermMemoryCard />
          </AnimatedCard>
          <AnimatedCard index={4}>
            <PatternCard />
          </AnimatedCard>
        </div>

        {/* ── Row 3: Agent (1col) + Cross-Meeting (2col) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <AnimatedCard index={5}>
            <AgentCard />
          </AnimatedCard>
          <AnimatedCard index={6} className="lg:col-span-2">
            <CrossMeetingCard />
          </AnimatedCard>
        </div>

        {/* ── Row 4: Security (full-width) ── */}
        <AnimatedCard index={7}>
          <SecurityCard />
        </AnimatedCard>
      </div>
    </section>
  );
}
