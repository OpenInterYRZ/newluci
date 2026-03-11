"use client";

import { ArrowUp, ChevronLeft, Ellipsis, Paperclip, Smile } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AssistantBubble } from "./AssistantBubble";
import { UserBubble } from "./UserBubble";
import { SummaryCard } from "./SummaryCard";
import { QuickActionPicker } from "./QuickActionPicker";
import { ThinkingPill } from "./ThinkingPill";
import { AgentCallingPill } from "./AgentCallingPill";
import { TodoListBubble } from "./TodoListBubble";
import { StatusPill } from "./StatusPill";
import { FileAttachmentBubble } from "./FileAttachmentBubble";
import { ActionCompletePill } from "./ActionCompletePill";
import { MemoryNotification } from "./MemoryNotification";
import { ConnectorPill } from "./ConnectorPill";
import { MeetingSummaryCard } from "./MeetingSummaryCard";
import { MeetingBriefingCard } from "./MeetingBriefingCard";

/* Phase 1+2: auto-play on mount */
const PHASE12_TIMELINE = [
  500, // [0] AssistantBubble greeting
  1500, // [1] SummaryCard
  3000, // [2] QuickActionPicker — waits for user click
];

/* Phase 3: relative delays from picker dismiss (per-path) */
const PHASE3_DELAYS_0 = [300, 800, 1300, 2300, 3300, 4300, 5300]; // ① 分析会议视频 (+UserBubble)
const PHASE3_DELAYS_1 = [300, 800, 1300, 2300, 3300, 4300, 5300, 6300]; // ② 跟进待办任务 (+UserBubble)
const PHASE3_DELAYS_2 = [300, 800, 1300, 1800, 2800, 3800, 4800, 5800, 6800]; // ③ 准备下次会议 (+UserBubble)

export function PhoneChatScreen() {
  const [phase12Count, setPhase12Count] = useState(0);
  const [pickerDismissed, setPickerDismissed] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [phase3Count, setPhase3Count] = useState(0);
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
  }, [phase12Count, phase3Count, extraMessages, pickerDismissed]);

  // Phase 1+2 timeline: auto-play on mount
  useEffect(() => {
    const timers = PHASE12_TIMELINE.map((delay, i) =>
      setTimeout(() => setPhase12Count(i + 1), delay),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Phase 3 timeline: starts after picker is dismissed
  useEffect(() => {
    if (!pickerDismissed || selectedOption === null) return;
    const delays =
      selectedOption === 0
        ? PHASE3_DELAYS_0
        : selectedOption === 1
          ? PHASE3_DELAYS_1
          : PHASE3_DELAYS_2;
    const timers = delays.map((delay, i) =>
      setTimeout(() => setPhase3Count(i + 1), delay),
    );
    return () => timers.forEach(clearTimeout);
  }, [pickerDismissed, selectedOption]);

  const handlePickerDismiss = useCallback((index: number) => {
    setSelectedOption(index);
    setPickerDismissed(true);
  }, []);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text || isSending) return;

    setIsSending(true);
    setInputValue("");

    setExtraMessages((prev) => [
      ...prev,
      <UserBubble key={`user-extra-${prev.length}`} text={text} />,
    ]);

    setTimeout(() => {
      setExtraMessages((prev) => [
        ...prev,
        <AssistantBubble
          key={`assist-extra-${prev.length}`}
          text="To try LUCI, download Luci Desktop."
        />,
      ]);
      setIsSending(false);
    }, 1200);
  };

  /* Phase 1+2 messages */
  const phase12Messages: (ReactNode | null)[] = [
    <AssistantBubble
      key="greeting"
      text="Good morning! Here's your work overview from yesterday:"
    />,
    <SummaryCard key="summary" />,
    !pickerDismissed ? (
      <QuickActionPicker key="picker" onDismiss={handlePickerDismiss} />
    ) : null,
  ];

  /* User echo bubble — shows the selected option as a user message */
  const USER_OPTION_LABELS = [
    "Analyze meeting videos",
    "Follow up on tasks",
    "Prepare next meeting",
  ];

  /* Phase 3 messages — different per selected option */
  const phase3Messages: ReactNode[] =
    selectedOption === 0
      ? [
          // ① 分析会议视频
          <UserBubble key="user-choice" text={USER_OPTION_LABELS[0]} />,
          <ThinkingPill key="thinking" />,
          <AgentCallingPill key="agent" agentName="agent_video" />,
          <StatusPill key="status" text="Analyzing 3 meeting recordings..." />,
          <MeetingSummaryCard key="meeting-summary" />,
          <ActionCompletePill
            key="complete"
            label="Video analysis complete · 3 action items extracted"
          />,
          <MemoryNotification
            key="memory"
            body="Saved: Series B $42M closed (Accel), MAU hit 50K, v2.4 smart search ready, mobile nav redesigned to 4 tabs"
          />,
        ]
      : selectedOption === 1
        ? [
            // ② 跟进待办任务
            <UserBubble key="user-choice" text={USER_OPTION_LABELS[1]} />,
            <ThinkingPill key="thinking" />,
            <AgentCallingPill key="agent" agentName="agent_tasks" />,
            <TodoListBubble key="todos" />,
            <StatusPill key="status" text="Executing follow-ups..." />,
            <FileAttachmentBubble
              key="email"
              fileName="Smart Search QA Checklist"
              fileSize="Sent to QA Team"
              iconColor="#FF8C00"
            />,
            <ActionCompletePill key="complete" label="3 tasks followed up" />,
            <MemoryNotification
              key="memory"
              body="Saved: QA checklist sent for v2.4, relocation info forwarded to you, 4-tab nav ticket created for @iOS Dev"
            />,
          ]
        : [
            // ③ 准备下次会议
            <UserBubble key="user-choice" text={USER_OPTION_LABELS[2]} />,
            <ThinkingPill key="thinking" />,
            <ConnectorPill key="connector" name="Google Calendar" />,
            <AgentCallingPill key="agent" agentName="agent_prep" />,
            <StatusPill key="status" text="Compiling meeting materials..." />,
            <MeetingBriefingCard key="briefing" />,
            <FileAttachmentBubble
              key="file"
              fileName="Sprint Review Briefing"
              fileSize="12 KB · Saved to notes"
              iconColor="#4A6CF7"
            />,
            <ActionCompletePill
              key="complete"
              label="Meeting prep done · Reminder set 15 min before"
            />,
            <MemoryNotification
              key="memory"
              body="Saved: Sprint Review briefing generated with v2.4 status, enterprise pipeline update, and mobile nav timeline"
            />,
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
        className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto pr-4 pl-5 py-4 phone-scroll"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
        }}
      >
        <AnimatePresence>
          {/* Phase 1+2 */}
          {phase12Messages.slice(0, phase12Count).map(
            (msg, i) =>
              msg && (
                <motion.div
                  key={`p12-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {msg}
                </motion.div>
              ),
          )}
          {/* Phase 3 — only after picker dismissed */}
          {pickerDismissed &&
            phase3Messages.slice(0, phase3Count).map((msg, i) => (
              <motion.div
                key={`p3-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {msg}
              </motion.div>
            ))}
          {/* User-typed messages */}
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
      <div className="flex shrink-0 items-center gap-1.5 bg-white px-2 py-1.5">
        {/* Light pill container */}
        <div
          className="flex flex-1 items-center gap-2 rounded-full border border-[#E5E5EA] px-2.5"
          style={{ height: 34, background: "#F2F2F7" }}
        >
          <Smile
            size={18}
            strokeWidth={1.5}
            className="shrink-0 text-[#AEAEB2]"
          />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Message LUCI..."
            className="min-w-0 flex-1 bg-transparent text-xs font-normal text-[#1C1C1E] placeholder:text-[#AEAEB2] outline-none"
            style={{ fontFamily: "Manrope, sans-serif" }}
          />
          <Paperclip
            size={15}
            strokeWidth={1.8}
            className="shrink-0 text-[#AEAEB2]"
          />
        </div>
        {/* Purple send button */}
        <button
          onClick={handleSend}
          disabled={!inputValue.trim() || isSending}
          className="flex shrink-0 items-center justify-center rounded-full transition-opacity disabled:opacity-40"
          style={{
            width: 32,
            height: 32,
            background: "#7B61FF",
          }}
        >
          <ArrowUp
            size={16}
            strokeWidth={2.5}
            className="text-white"
            style={{ transform: "rotate(45deg)" }}
          />
        </button>
      </div>
    </div>
  );
}
