"use client";

import { ArrowUp, ChevronLeft, Ellipsis, Plus } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
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
  const [extraMessages, setExtraMessages] = useState<ReactNode[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    const el = scrollAreaRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [visibleCount, extraMessages]);

  // Start timeline immediately on mount
  useEffect(() => {
    const timers = TIMELINE.map((delay, i) =>
      setTimeout(() => setVisibleCount(i + 1), delay),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text || isSending) return;

    setIsSending(true);
    setInputValue("");

    // Add user message immediately
    setExtraMessages((prev) => [
      ...prev,
      <UserBubble key={`user-extra-${prev.length}`} text={text} />,
    ]);

    // Add assistant reply after a short delay
    setTimeout(() => {
      setExtraMessages((prev) => [
        ...prev,
        <AssistantBubble
          key={`assist-extra-${prev.length}`}
          text="To use LUCI, please download the app. 📲"
        />,
      ]);
      setIsSending(false);
    }, 1200);
  };

  const presetMessages = [
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
    <div className="flex h-full w-full flex-col overflow-hidden bg-white text-left">
      {/* ── Chat Header ── */}
      <div
        className="flex shrink-0 items-center gap-2 border-b border-black/[0.04] bg-white px-3 py-2"
        style={{ height: 44 }}
      >
        <ChevronLeft size={18} className="shrink-0 text-[#1A1A1A]" />
        <div className="flex flex-1 flex-col gap-[1px]">
          <span
            className="text-xs font-bold text-[#1A1A1A]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            LUCI
          </span>
          <span
            className="text-[8px] font-medium text-[#34C759]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Online
          </span>
        </div>
        <Ellipsis size={16} className="shrink-0 text-[#1A1A1A]" />
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
          {presetMessages.slice(0, visibleCount).map((msg, i) => (
            <motion.div
              key={`preset-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {msg}
            </motion.div>
          ))}
          {extraMessages.map((msg, i) => (
            <motion.div
              key={`extra-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {msg}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Input Bar (always visible) ── */}
      <div
        className="flex shrink-0 items-center gap-2 border-t border-black/[0.04] bg-white px-2.5 py-2"
        style={{ height: 44 }}
      >
        <Plus size={18} className="shrink-0 text-[#888888]" />
        <div
          className="flex flex-1 items-center rounded-2xl border border-[#E8E8EC] bg-[#F5F5F5] px-3"
          style={{ height: 28 }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Archive a new build for app store connect so I can test!"
            className="w-full bg-transparent text-[8px] font-normal text-[#333] placeholder:text-[#333] outline-none"
            style={{ fontFamily: "Manrope, sans-serif" }}
          />
        </div>
        <button
          onClick={handleSend}
          disabled={!inputValue.trim() || isSending}
          className="flex shrink-0 items-center justify-center rounded-full transition-opacity disabled:opacity-40"
          style={{
            width: 26,
            height: 26,
            background: "linear-gradient(135deg, #FF8C00 0%, #FFB347 100%)",
          }}
        >
          <ArrowUp size={14} className="text-white" />
        </button>
      </div>
    </div>
  );
}
