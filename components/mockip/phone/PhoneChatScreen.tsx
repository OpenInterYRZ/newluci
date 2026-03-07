"use client";

import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserBubble } from "./UserBubble";
import { AssistantBubble } from "./AssistantBubble";
import { ThinkingPill } from "./ThinkingPill";
import { AgentCallingPill } from "./AgentCallingPill";
import { StatusPill } from "./StatusPill";
import { ActionCompletePill } from "./ActionCompletePill";
import { MemoryUpdateCard } from "./MemoryUpdateCard";
import { MemoryNotification } from "./MemoryNotification";

/* ── Timeline: cumulative delay from mount (ms) ── */
const TIMELINE = [
  500, // [0] UserBubble
  1300, // [1] ThinkingPill
  2500, // [2] AgentCallingPill
  3500, // [3] StatusPill
  5000, // [4] AssistantBubble
  5600, // [5] ActionCompletePill
  6600, // [6] MemoryUpdateCard
  7800, // [7] MemoryNotification
];

export function PhoneChatScreen() {
  const [visibleCount, setVisibleCount] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Scroll only the messages container (not the page)
  useEffect(() => {
    const el = scrollAreaRef.current;
    if (el && visibleCount > 0) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [visibleCount]);

  // Start timeline immediately on mount
  useEffect(() => {
    const timers = TIMELINE.map((delay, i) =>
      setTimeout(() => setVisibleCount(i + 1), delay),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const messages = [
    <UserBubble key="user" text="Help me analyze today's meeting recording" />,
    <ThinkingPill key="thinking" />,
    <AgentCallingPill key="agent" agentName="agent_video" />,
    <StatusPill key="status" text="Analyzing video..." />,
    <AssistantBubble
      key="assistant"
      text="I've finished analyzing your meeting recording. Here's a summary of the key points:"
    />,
    <ActionCompletePill key="complete" label="Video analysis complete" />,
    <MemoryUpdateCard
      key="memory-card"
      title="YS had a casual chat with their clone"
      summary="I extracted memory points. I am someone with a lot of vibe..."
      timestamp="Just now"
    />,
    <MemoryNotification key="memory-notif" />,
  ];

  return (
    <div className="flex h-[680px] w-100 flex-col overflow-hidden rounded-3xl bg-white my-6 text-left">
      {/* ── Chat Header ── */}
      <div
        className="flex shrink-0 items-center gap-2.5 border-b border-black/[0.03] px-4 py-3"
        style={{ boxShadow: "0 1px 4px rgba(0, 0, 0, 0.04)" }}
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-lg font-bold text-[#1A1A1A]">LUCI</span>
          <span className="text-lg font-medium tracking-[0.3px] text-[#34C759]">
            Online
          </span>
        </div>
      </div>

      {/* ── Messages ── */}
      <div
        ref={scrollAreaRef}
        data-lenis-prevent
        className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-4"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
        }}
      >
        <AnimatePresence>
          {messages.slice(0, visibleCount).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {msg}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Input Bar ── */}
      <div
        className="flex shrink-0 items-center gap-2 border-t border-black/[0.03] bg-white px-3 py-2.5 mb-10"
        style={{ boxShadow: "0 -1px 4px rgba(0, 0, 0, 0.04)" }}
      >
        <div className="flex h-9 flex-1 items-center rounded-[20px] border border-[#E8E8EC] bg-[#F7F7F8] px-3.5">
          <span className="text-lg font-normal text-[#AAAAAA]">
            Ask LUCI...
          </span>
        </div>
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(135deg, #FF8C00 0%, #FFB347 100%)",
            boxShadow: "0 2px 6px rgba(255, 140, 0, 0.2)",
          }}
        >
          <Send size={14} className="text-white" />
        </div>
      </div>
    </div>
  );
}
