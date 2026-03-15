"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ArrowUp, Plus } from "lucide-react";
import {
  siNotion,
  siGmail,
  siZoom,
  siGoogledrive,
  siLinear,
  siJira,
  siFigma,
  siGooglecalendar,
  siGithub,
  siConfluence,
  siAsana,
} from "simple-icons";

/* ─── Types ──────────────────────────────────────────── */

export interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  /** React node rendered in the visual/demo area */
  visual?: React.ReactNode;
}

/* ─── Chat Visual (Card 1) ───────────────────────────── */

interface ChatMessage {
  type: "user" | "assistant";
  text: string;
  /** If true, render as a linked task result */
  isTaskResult?: boolean;
  linkText?: string;
  /** If true, render image gallery row */
  hasImages?: boolean;
}

const CHAT_MESSAGES: ChatMessage[] = [
  {
    type: "user",
    text: "Prep me for my 2pm call with Acme Corp.",
  },
  {
    type: "assistant",
    text: "Found 3 recent memories. Here's a summary:They want to move the launch to April 15.",
  },

  {
    type: "user",
    text: "Draft a follow-up email with the revised timeline.",
  },
  {
    type: "assistant",
    text: "Done — saved to your drafts.",
    isTaskResult: true,
    linkText: "Open in Gmail →",
  },
  {
    type: "assistant",
    text: "",
    hasImages: true,
  },
];

function ChatVisual() {
  return (
    <div className="relative flex flex-col h-[340px] overflow-hidden">
      <img
        src="/landscape/lan8.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Messages area */}
      <div className="relative z-10 mx-3 mt-4 mb-3 p-2 rounded-xl bg-bg-0 flex-1 min-h-0 overflow-hidden">
        <div className="overflow-y-auto h-full flex flex-col gap-2.5 px-2 py-1">
          {CHAT_MESSAGES.map((msg, i) => (
            <div key={i}>
              {msg.type === "user" ? (
                <div className="flex justify-end">
                  <div className="bg-grey-1 text-text-0 text-[12px] leading-relaxed rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                    {msg.text}
                  </div>
                </div>
              ) : msg.hasImages ? (
                <div className="flex gap-2">
                  {["/hero/me1.webp", "/hero/me2.webp", "/hero/me3.webp"].map(
                    (src, n) => (
                      <img
                        key={n}
                        src={src}
                        alt=""
                        className="w-[72px] h-[72px] rounded-lg object-cover flex-shrink-0"
                      />
                    ),
                  )}
                </div>
              ) : (
                <div className="text-[12px] leading-relaxed text-text-2">
                  {msg.isTaskResult ? (
                    <span>
                      {msg.text}{" "}
                      <span className="text-[#ff8c42] underline cursor-pointer">
                        {msg.linkText}
                      </span>
                    </span>
                  ) : (
                    msg.text
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Video Memory Visual (Card 2) ───────────────────── */

const VIDEO_THUMBS = [
  { label: "Team Standup", time: "12:34", img: "/hero/me1.webp" },
  { label: "Client Call", time: "47:12", img: "/hero/h3.webp" },
  { label: "Design Review", time: "23:05", img: "/hero/lib2.webp" },
  { label: "1:1 w/ Manager", time: "18:41", img: "/hero/h5.webp" },
];

const MEMORY_LINES = [
  { type: "title" as const, text: "Weekly Memory Summary" },
  { type: "meta" as const, text: "Auto-generated · 4 videos · Mar 10, 2026" },
  { type: "heading" as const, text: "Key Decisions" },
  {
    type: "bullet" as const,
    text: "Launch date moved to April 15th per client request",
  },
  {
    type: "bullet" as const,
    text: "Design system v2 approved — start migration next sprint",
  },
  {
    type: "bullet" as const,
    text: "Budget approved for 2 additional contractors",
  },
  { type: "heading" as const, text: "Action Items" },
  {
    type: "bullet" as const,
    text: "Draft revised timeline and share with stakeholders",
  },
  {
    type: "bullet" as const,
    text: "Schedule onboarding for new contractors by Friday",
  },
];

function VideoMemoryVisual() {
  return (
    <div className="relative h-[340px] overflow-hidden">
      <img
        src="/landscape/lan12.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Single video card — back layer */}
      <div className="absolute z-10 left-4 right-4 top-4 rounded-xl bg-bg-0 p-2">
        <div className="relative rounded-lg overflow-hidden aspect-video">
          <img
            src={VIDEO_THUMBS[0].img}
            alt={VIDEO_THUMBS[0].label}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bg-0/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white/70 ml-0.5" />
            </div>
          </div>
          <span className="absolute bottom-1.5 right-2 text-[10px] text-white/70 bg-black/50 px-1.5 rounded">
            {VIDEO_THUMBS[0].time}
          </span>
          <span className="absolute bottom-1.5 left-2 text-[10px] text-white/60 font-medium">
            {VIDEO_THUMBS[0].label}
          </span>
        </div>
      </div>

      {/* Memory document — front layer, overlapping */}
      <div className="absolute z-20 left-6 right-6 bottom-3 rounded-xl bg-bg-0 p-3 shadow-lg max-h-[180px] overflow-y-auto">
        <div className="flex items-center gap-1.5 pb-1.5 border-b border-grey-1">
          <span className="w-2 h-2 rounded-full bg-[#ff5c00]/60" />
          <span className="text-[10px] text-text-3 font-medium">memory.md</span>
        </div>
        <div className="pt-2">
          {MEMORY_LINES.map((line, i) => {
            if (line.type === "title") {
              return (
                <p
                  key={i}
                  className="text-text-0 text-[13px] font-bold leading-tight mb-0.5"
                >
                  {line.text}
                </p>
              );
            }
            if (line.type === "meta") {
              return (
                <p key={i} className="text-text-3 text-[10px] mb-2.5">
                  {line.text}
                </p>
              );
            }
            if (line.type === "heading") {
              return (
                <p
                  key={i}
                  className="text-[#ff8c42] text-[11px] font-semibold mt-2 mb-1"
                >
                  {line.text}
                </p>
              );
            }
            return (
              <p
                key={i}
                className="text-text-2 text-[11px] leading-relaxed pl-2 before:content-['•'] before:mr-1.5 before:text-text-3"
              >
                {line.text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Connectors Visual (Card 3) ─────────────────────── */

const SLACK_PATH =
  "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z";

const CONNECTORS = [
  { name: "Slack", color: "#E01E5A", path: SLACK_PATH },
  { name: "Notion", color: "#ffffff", path: siNotion.path },
  { name: "Gmail", color: `#${siGmail.hex}`, path: siGmail.path },
  { name: "Zoom", color: `#${siZoom.hex}`, path: siZoom.path },
  { name: "Drive", color: `#${siGoogledrive.hex}`, path: siGoogledrive.path },
  { name: "Linear", color: `#${siLinear.hex}`, path: siLinear.path },
  { name: "Jira", color: `#${siJira.hex}`, path: siJira.path },
  { name: "Figma", color: `#${siFigma.hex}`, path: siFigma.path },
  {
    name: "Calendar",
    color: `#${siGooglecalendar.hex}`,
    path: siGooglecalendar.path,
  },
  { name: "GitHub", color: "#ffffff", path: siGithub.path },
  {
    name: "Confluence",
    color: `#${siConfluence.hex}`,
    path: siConfluence.path,
  },
  { name: "Asana", color: `#${siAsana.hex}`, path: siAsana.path },
];

function ConnectorsVisual() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="h-[340px] flex flex-col px-4 py-4">
      {/* Connected label */}
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-[10px] text-emerald-400/80 font-medium tracking-wide uppercase">
          {CONNECTORS.length} Connected
        </span>
      </div>

      {/* App grid */}
      <div className="grid grid-cols-3 gap-2 flex-1 content-start">
        {CONNECTORS.map((app, i) => (
          <div
            key={app.name}
            className="flex items-center gap-2 rounded-lg px-2 py-2 transition-all duration-200 cursor-default"
            style={{
              backgroundColor:
                hoveredIdx === i
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(255,255,255,0.03)",
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Icon */}
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor:
                  app.color === "#ffffff"
                    ? "rgba(255,255,255,0.15)"
                    : app.color + "22",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill={
                  app.color === "#ffffff" ? "rgba(255,255,255,0.8)" : app.color
                }
                className="w-3.5 h-3.5"
              >
                <path d={app.path} />
              </svg>
            </div>
            {/* Name */}
            <span className="text-[11px] text-white/60 font-medium truncate leading-none">
              {app.name}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom hint */}
      <div className="mt-auto pt-3 flex items-center justify-center gap-1">
        <Plus className="w-3 h-3 text-white/20" />
        <span className="text-[10px] text-white/20">Add more apps</span>
      </div>
    </div>
  );
}

/* ─── See Visual (Card 4) ────────────────────────────── */

function SeeVisual() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[340px] flex items-center justify-center p-4 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background landscape */}
      <img
        src="/landscape/lan14.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Floating recorder window */}
      <div className="relative z-10 w-full max-w-[320px] bg-bg-0 rounded-2xl overflow-hidden border border-grey-2 transition-transform duration-500 ease-out">
        {/* Top bar: close / logo / cloud + more */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          {/* Close button */}
          <button className="w-7 h-7 rounded-full bg-grey-1 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-text-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* LUCI logo */}
          <img src="/lucilogo-black.svg" alt="LUCI" className="h-5" />

          {/* Right icons */}
          <div className="flex items-center gap-1.5">
            <button className="w-7 h-7 rounded-full bg-grey-1 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-text-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path d="M2 15s3-6 10-6 10 6 10 6-3 6-10 6S2 15 2 15z" />
                <circle cx="12" cy="15" r="3" />
              </svg>
            </button>
            <button className="w-7 h-7 rounded-full bg-grey-1 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-text-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Source selectors: Screen + Microphone */}
        <div className="px-4 pb-3 flex gap-3">
          {/* Screen selector */}
          <div className="flex-1 flex items-center rounded-xl bg-grey-1   overflow-hidden">
            <div className="flex-1 flex items-center justify-center py-3">
              <svg
                className="w-5 h-5 text-text-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <div className="w-px h-6 bg-grey-2" />
            <button className="px-2.5 py-3 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-text-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Microphone selector */}
          <div className="flex-1 flex items-center rounded-xl bg-grey-1 overflow-hidden">
            <div className="flex-1 flex items-center justify-center py-3">
              <svg
                className="w-5 h-5 text-text-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <rect x="9" y="1" width="6" height="12" rx="3" />
                <path d="M5 10a7 7 0 0014 0M12 17v4M8 21h8" />
              </svg>
            </div>
            <div className="w-px h-6 bg-grey-2" />
            <button className="px-2.5 py-3 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-text-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Start Recording button */}
        <div className="px-4 pb-5">
          <button className="w-full py-3 rounded-full text-bg-0 font-semibold text-[14px] bg-primary transition-all duration-300">
            Start Recording
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Default data ───────────────────────────────────── */

const DEFAULT_CARDS: FeatureCard[] = [
  // {
  //   id: "connectors",
  //   title: "Connectors",
  //   subtitle:
  //     "Link all your work apps — Slack, Notion, Gmail, Zoom, and more. LUCI pulls context from everywhere.",
  //   ctaText: "Learn more",
  //   visual: <ConnectorsVisual />,
  // },
  {
    id: "see",
    title: "See",
    subtitle:
      "LUCI observes your screen, meetings, and workflows in real time — building a living understanding of what you do and how you work.",
    visual: <SeeVisual />,
  },
  {
    id: "remember",
    title: "Remember",
    subtitle:
      "Every conversation, decision, and key moment is automatically captured and organized into searchable memory — so nothing slips through the cracks.",
    visual: <VideoMemoryVisual />,
  },
  {
    id: "act",
    title: "Act",
    subtitle:
      "Ask LUCI to draft emails, prep for meetings, or manage tasks — it takes action based on everything it has seen and remembered.",
    visual: <ChatVisual />,
  },
];

/* ─── Component ──────────────────────────────────────── */

interface FeatureCardsProps {
  cards?: FeatureCard[];
}

export default function FeatureCards({
  cards = DEFAULT_CARDS,
}: FeatureCardsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex-1 min-w-0 flex flex-col rounded-2xl border border-white/10 overflow-hidden bg-bg-0"
        >
          {/* Visual / demo area */}
          <div className="rounded-t-2xl overflow-hidden bg-bg-0">
            {card.visual ?? (
              <div className="h-48 flex items-center justify-center text-white/10 text-sm">
                Placeholder
              </div>
            )}
          </div>

          {/* Text area */}
          <div className="p-6">
            <h3 className="text-text-0 text-lg font-bold leading-tight mb-1.5">
              {card.title}
            </h3>
            <p className="text-text-2 text-sm leading-relaxed mb-3">
              {card.subtitle}
            </p>
            {card.ctaText && (
              <span className="text-[#ff5c00] text-sm font-medium cursor-pointer hover:underline">
                {card.ctaText} &rarr;
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
