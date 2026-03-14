"use client";

import { ArrowUp } from "lucide-react";
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
  const [extraMessages, setExtraMessages] = useState<
    { afterIndex: number; node: ReactNode }[]
  >([]);
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

  const getScriptedCount = useCallback(() => {
    const visibleP12 = phase12Messages.filter(
      (m, i) => i < phase12Count && m !== null,
    ).length;
    const visibleP3 = pickerDismissed
      ? Math.min(phase3Count, phase3Messages.length)
      : 0;
    return visibleP12 + visibleP3;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase12Count, phase3Count, pickerDismissed]);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text || isSending) return;

    setIsSending(true);
    setInputValue("");

    const insertAt = getScriptedCount();

    setExtraMessages((prev) => [
      ...prev,
      {
        afterIndex: insertAt,
        node: <UserBubble key={`user-extra-${prev.length}`} text={text} />,
      },
    ]);

    setTimeout(() => {
      setExtraMessages((prev) => [
        ...prev,
        {
          afterIndex: insertAt,
          node: (
            <AssistantBubble
              key={`assist-extra-${prev.length}`}
              text="To try LUCI, download Luci Desktop."
            />
          ),
        },
      ]);
      setIsSending(false);
    }, 1200);
  };

  /* Phase 1+2 messages */
  const phase12Messages: (ReactNode | null)[] = [
    <AssistantBubble
      key="greeting"
      text="Good morning, Alex! Here's your work overview from yesterday:"
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
          <AgentCallingPill
            key="agent"
            agentName="agent_video"
            resolvedText="agent_video"
            resolveDelay={800}
          />,
          <StatusPill
            key="status"
            text="Analyzing 3 meeting recordings..."
            resolvedText="Analyzed 3 videos"
            resolveDelay={1200}
          />,
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
            <AgentCallingPill
              key="agent"
              agentName="agent_tasks"
              resolvedText="agent_tasks"
              resolveDelay={800}
            />,
            <TodoListBubble key="todos" />,
            <StatusPill
              key="status"
              text="Executing follow-ups..."
              resolvedText="3 follow-ups executed"
              resolveDelay={1200}
            />,
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
            <ConnectorPill
              key="connector"
              name="Google Calendar"
              resolvedText="Google Calendar connected"
              resolveDelay={800}
            />,
            <AgentCallingPill
              key="agent"
              agentName="agent_prep"
              resolvedText="agent_prep"
              resolveDelay={800}
            />,
            <StatusPill
              key="status"
              text="Compiling meeting materials..."
              resolvedText="Meeting materials compiled"
              resolveDelay={1200}
            />,
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
    <div className="flex h-full w-full flex-col overflow-hidden bg-bg-0 text-left">
      {/* ── Chat Header ── */}

      {/* ── Messages ── */}
      <div
        ref={scrollAreaRef}
        data-lenis-prevent
        className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto pr-4 pl-3 py-4 phone-scroll"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
        }}
      >
        <AnimatePresence>
          {(() => {
            // Build the scripted timeline
            const scripted: ReactNode[] = [];
            phase12Messages.slice(0, phase12Count).forEach((msg) => {
              if (msg) scripted.push(msg);
            });
            if (pickerDismissed) {
              phase3Messages.slice(0, phase3Count).forEach((msg) => {
                scripted.push(msg);
              });
            }

            // Group extras by their insert index
            const extrasMap = new Map<number, ReactNode[]>();
            for (const em of extraMessages) {
              const list = extrasMap.get(em.afterIndex) ?? [];
              list.push(em.node);
              extrasMap.set(em.afterIndex, list);
            }

            // Merge: after each scripted[i], splice in any extras tagged for that position
            const merged: ReactNode[] = [];
            for (let i = 0; i < scripted.length; i++) {
              merged.push(scripted[i]);
              const after = extrasMap.get(i + 1);
              if (after) merged.push(...after);
            }
            // Extras inserted at index 0 (before any scripted) or beyond scripted length
            const before = extrasMap.get(0);
            if (before && scripted.length === 0) merged.push(...before);
            // Extras at positions beyond current scripted length go at the end
            for (const [idx, nodes] of extrasMap) {
              if (idx > scripted.length) merged.push(...nodes);
            }

            return merged.map((msg, i) => (
              <motion.div
                key={`msg-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {msg}
              </motion.div>
            ));
          })()}
        </AnimatePresence>
      </div>

      {/* ── Input Bar (always visible) ── */}
      <div className="flex shrink-0 items-center gap-1.5 bg-bg-0 px-4 py-1.5">
        <div
          className="flex flex-1 items-center rounded-lg border border-grey-1 px-3"
          style={{ height: 34, background: "#F2F2F7" }}
        >
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
        </div>
        <button
          onClick={handleSend}
          disabled={!inputValue.trim() || isSending}
          className="flex shrink-0 items-center justify-center rounded-full transition-opacity disabled:opacity-40"
          style={{
            width: 32,
            height: 32,
            background: "linear-gradient(135deg, #FF8C00 0%, #FFa030 100%)",
          }}
        >
          <ArrowUp size={16} strokeWidth={2.5} className="text-white" />
        </button>
      </div>
    </div>
  );
}
