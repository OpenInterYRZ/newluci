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
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(CHAT_MESSAGES.length);
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const clearTimers = useCallback(() => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
  }, []);

  useEffect(() => {
    if (isHovered) {
      // Reset and replay — first message stays visible
      clearTimers();
      setVisibleCount(1);

      CHAT_MESSAGES.slice(1).forEach((_, i) => {
        const t = setTimeout(
          () => {
            setVisibleCount(i + 2);
          },
          400 + i * 350,
        );
        timerRef.current.push(t);
      });
    } else {
      // Show all immediately
      clearTimers();
      setVisibleCount(CHAT_MESSAGES.length);
    }
    return clearTimers;
  }, [isHovered, clearTimers]);

  // Auto-scroll to bottom when messages appear
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleCount]);

  return (
    <div
      className="flex flex-col h-[340px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Messages area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2.5 scroll-smooth"
      >
        {CHAT_MESSAGES.slice(0, visibleCount).map((msg, i) => (
          <div
            key={i}
            className="transition-all duration-300 ease-out"
            style={{
              opacity: isHovered ? 1 : 1,
              transform:
                isHovered && i === visibleCount - 1
                  ? "translateY(0)"
                  : "translateY(0)",
              animation:
                isHovered && i > 0 && i === visibleCount - 1
                  ? "chatFadeIn 0.3s ease-out"
                  : "none",
            }}
          >
            {msg.type === "user" ? (
              <div className="flex justify-end">
                <div className="bg-[#ff8c42]/80 text-white text-[12px] leading-relaxed rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                  {msg.text}
                </div>
              </div>
            ) : msg.hasImages ? (
              <div className="flex gap-2">
                {[
                  "/hero/me1.webp",
                  "/hero/me2.webp",
                  "/hero/me3.webp",
                ].map((src, n) => (
                  <img
                    key={n}
                    src={src}
                    alt=""
                    className="w-[72px] h-[72px] rounded-lg object-cover flex-shrink-0"
                  />
                ))}
              </div>
            ) : (
              <div className="text-[12px] leading-relaxed text-[#c8c8d0]">
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

      {/* Input bar */}
      <div className="px-3 pb-3 pt-1">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#16161a] px-3 py-2">
          <button className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0">
            <Plus className="w-3 h-3 text-white/40" />
          </button>
          <span className="text-[12px] text-white/25 flex-1">
            Press Fn to ask
          </span>
          <button className="w-6 h-6 rounded-full bg-[#ff5c00] flex items-center justify-center flex-shrink-0">
            <ArrowUp className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>

      {/* Keyframe animation */}
      <style jsx>{`
        @keyframes chatFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[340px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video thumbnails grid */}
      <div className="px-4 pt-4 grid grid-cols-2 gap-2.5">
        {VIDEO_THUMBS.map((v) => (
          <div
            key={v.label}
            className="relative rounded-lg overflow-hidden aspect-video"
          >
            <img src={v.img} alt={v.label} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            {/* Play icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white/70 ml-0.5" />
              </div>
            </div>
            {/* Duration badge */}
            <span className="absolute bottom-1 right-1.5 text-[9px] text-white/70 bg-black/50 px-1 rounded">
              {v.time}
            </span>
            {/* Title */}
            <span className="absolute bottom-1 left-1.5 text-[9px] text-white/60 font-medium">
              {v.label}
            </span>
          </div>
        ))}
      </div>

      {/* Memory document — slides up from bottom on hover */}
      <div
        className="absolute left-3 right-3 bottom-3 rounded-xl border border-white/10 overflow-hidden transition-transform duration-500 ease-out"
        style={{
          backgroundColor: "#16161a",
          transform: isHovered
            ? "translateY(0)"
            : "translateY(calc(100% + 12px))",
        }}
      >
        {/* Document header bar */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-white/5">
          <span className="w-2 h-2 rounded-full bg-[#ff5c00]/60" />
          <span className="text-[10px] text-white/40 font-medium">
            memory.md
          </span>
        </div>

        {/* Document content */}
        <div className="px-3.5 py-3 max-h-[220px] overflow-y-auto dark-scroll">
          {MEMORY_LINES.map((line, i) => {
            if (line.type === "title") {
              return (
                <p
                  key={i}
                  className="text-white/90 text-[13px] font-bold leading-tight mb-0.5"
                >
                  {line.text}
                </p>
              );
            }
            if (line.type === "meta") {
              return (
                <p key={i} className="text-white/30 text-[10px] mb-2.5">
                  {line.text}
                </p>
              );
            }
            if (line.type === "heading") {
              return (
                <p
                  key={i}
                  className="text-[#ff8c42]/80 text-[11px] font-semibold mt-2 mb-1"
                >
                  {line.text}
                </p>
              );
            }
            return (
              <p
                key={i}
                className="text-white/55 text-[11px] leading-relaxed pl-2 before:content-['•'] before:mr-1.5 before:text-white/25"
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

/* ─── Default data ───────────────────────────────────── */

const DEFAULT_CARDS: FeatureCard[] = [
  {
    id: "chat",
    title: "Chat",
    subtitle:
      "Natural conversation interface. Chat with LUCI to manage tasks, ask questions, and get things done.",
    ctaText: "Learn more",
    visual: <ChatVisual />,
  },
  {
    id: "video-memory",
    title: "Personal video memory indexing",
    subtitle:
      "LUCI watches your meetings and calls, then distills key decisions, action items, and context into memory.",
    ctaText: "Learn more",
    visual: <VideoMemoryVisual />,
  },
  {
    id: "connectors",
    title: "Connectors",
    subtitle:
      "Link all your work apps — Slack, Notion, Gmail, Zoom, and more. LUCI pulls context from everywhere.",
    ctaText: "Learn more",
    visual: <ConnectorsVisual />,
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col rounded-2xl border border-white/10 overflow-hidden"
          style={{ backgroundColor: "#18181b" }}
        >
          {/* Text area */}
          <div className="px-6 pt-6 pb-4">
            <h3 className="text-white text-lg font-bold leading-tight mb-1.5">
              {card.title}
            </h3>
            <p className="text-[#8a8a9a] text-sm leading-relaxed mb-3">
              {card.subtitle}
            </p>
            {card.ctaText && (
              <span className="text-[#ff5c00] text-sm font-medium cursor-pointer hover:underline">
                {card.ctaText} &rarr;
              </span>
            )}
          </div>

          {/* Visual / demo area */}
          <div
            className="flex-1 mt-auto rounded-b-2xl overflow-hidden"
            style={{ backgroundColor: "#1f1f23" }}
          >
            {card.visual ?? (
              <div className="h-48 flex items-center justify-center text-white/10 text-sm">
                Placeholder
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
