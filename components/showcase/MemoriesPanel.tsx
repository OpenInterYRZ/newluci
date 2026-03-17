"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Loader2, CheckCircle2, Circle } from "lucide-react";

interface MemoryItem {
  title: string;
  detail: string;
  source: string;
  sourceTime: string;
  thumbnail: string;
  summary: string;
  takeaways: string[];
  nextSteps: string[];
  transcript: TranscriptLine[];
  actions: ActionItem[];
}

interface TranscriptLine {
  time: string;
  speaker: string;
  text: string;
}

interface ActionItem {
  text: string;
  assignee: string;
  due: string;
}

const MEMORIES: MemoryItem[] = [
  {
    title: "Series B closed at $42M, led by Accel",
    detail:
      "Valuation confirmed during Q3 planning. Funds allocated for EMEA expansion and engineering hiring.",
    source: "Q3 Planning Sync",
    sourceTime: "04:12",
    thumbnail: "/hero/lib2.webp",
    summary:
      "The team aligned on the primary growth objectives for Q3, specifically focusing on market expansion in the EMEA region. Sarah presented the latest conversion data which suggests a 14% uptick in engagement following the new UI rollout.",
    takeaways: [
      "Approval of the $2.5M budget reallocation for regional marketing.",
      "New deadline for the Beta API launch set for September 12th.",
    ],
    nextSteps: [
      "David to finalize vendor contracts by EOD Wednesday.",
      "Schedule follow-up with the DevOps team regarding latency.",
    ],
    transcript: [
      { time: "00:02", speaker: "Alex", text: "Alright, let's get started. Thanks everyone for joining the Q3 planning sync." },
      { time: "00:15", speaker: "Sarah", text: "Happy to be here. I've got the latest conversion numbers pulled up if we want to start there." },
      { time: "00:28", speaker: "Alex", text: "Perfect. Let's kick off with the EMEA expansion update first, then jump into data." },
      { time: "01:05", speaker: "David", text: "So the EMEA rollout is on track. We've onboarded two regional partners and the vendor contracts are nearly finalized." },
      { time: "01:42", speaker: "Alex", text: "Great. Any blockers on the contract side?" },
      { time: "01:55", speaker: "David", text: "Just the final legal review. I should have everything signed off by Wednesday." },
      { time: "02:30", speaker: "Sarah", text: "On the data side — engagement is up 14% since the new UI went live last month. Retention is looking strong too." },
      { time: "03:15", speaker: "Alex", text: "That's a solid lift. Is that across all cohorts or mostly new users?" },
      { time: "03:28", speaker: "Sarah", text: "Primarily in the 30-day cohort. Returning users are up about 8%, which is still above our target." },
      { time: "04:12", speaker: "Alex", text: "Good. Let's talk about the partnership integration roadmap — I think we're close to alignment there." },
    ],
    actions: [
      { text: "Finalize vendor contracts for EMEA rollout", assignee: "David", due: "Wed, Feb 12" },
      { text: "Push through $2.5M budget reallocation approval", assignee: "Alex", due: "Today" },
      { text: "Schedule follow-up meeting with DevOps team on latency", assignee: "Alex", due: "This week" },
    ],
  },
  {
    title: "MAU reached 50K milestone",
    detail:
      "14% engagement uptick after new UI rollout. 30-day cohort retention strongest at 8% above target.",
    source: "Q3 Planning Sync",
    sourceTime: "12:45",
    thumbnail: "/hero/lib3.webp",
    summary:
      "Sarah walked through the latest MAU data showing a breakthrough to 50K monthly active users. The 30-day cohort is performing 8% above retention targets, driven primarily by the new UI rollout last month.",
    takeaways: [
      "30-day cohort retention is 8% above target.",
      "New UI drove 14% engagement uplift across all segments.",
    ],
    nextSteps: [
      "Deep-dive into per-segment retention by Thursday.",
      "Prepare cohort analysis for board presentation.",
    ],
    transcript: [
      { time: "12:45", speaker: "Sarah", text: "So we officially crossed 50K MAU last week. Biggest jump we've seen in a single quarter." },
      { time: "13:02", speaker: "Alex", text: "That's huge. What's driving the spike?" },
      { time: "13:18", speaker: "Sarah", text: "The new UI is the biggest factor — 14% engagement lift. Retention is holding strong too." },
    ],
    actions: [
      { text: "Prepare cohort analysis for board deck", assignee: "Sarah", due: "Thu, Feb 13" },
      { text: "Set up A/B test for onboarding flow v2", assignee: "Sarah", due: "Fri, Feb 14" },
    ],
  },
  {
    title: "$2.5M budget reallocation approved for regional marketing",
    detail:
      "Alex to push through approval today. Tied to EMEA market expansion initiative.",
    source: "Q3 Planning Sync",
    sourceTime: "28:30",
    thumbnail: "/hero/lib4.webp",
    summary:
      "The $2.5M budget reallocation for regional marketing was formally approved during the sync. Funds will be directed toward EMEA market penetration, with a focus on local partnerships and digital campaigns.",
    takeaways: [
      "$2.5M redirected from general marketing to EMEA regional budget.",
      "Campaign launch targeted for mid-March.",
    ],
    nextSteps: [
      "Alex to finalize finance sign-off by EOD.",
      "Marketing team to draft EMEA campaign brief.",
    ],
    transcript: [
      { time: "28:30", speaker: "Sarah", text: "One thing to flag — the budget reallocation for regional marketing needs final approval. We're looking at $2.5M." },
      { time: "28:55", speaker: "Alex", text: "I'll push that through today. It's critical for the EMEA timeline." },
    ],
    actions: [
      { text: "Finalize finance sign-off for budget reallocation", assignee: "Alex", due: "Today" },
      { text: "Draft EMEA campaign brief", assignee: "Marketing", due: "Next week" },
    ],
  },
  {
    title: "Beta API launch date set — September 12th",
    detail:
      "DevOps flagged latency concerns. Follow-up scheduled this week before final commit.",
    source: "Q3 Planning Sync",
    sourceTime: "07:45",
    thumbnail: "/hero/lib5.webp",
    summary:
      "David confirmed September 12th as the new Beta API launch date. The DevOps team has flagged latency issues that need resolution before the final go/no-go decision. A follow-up meeting is being scheduled for this week.",
    takeaways: [
      "Launch date moved to September 12th from original August target.",
      "Latency issues identified in staging environment.",
    ],
    nextSteps: [
      "Schedule DevOps follow-up this week.",
      "Run load tests on staging before final commit.",
    ],
    transcript: [
      { time: "07:15", speaker: "Alex", text: "And the Beta API launch — are we still targeting September?" },
      { time: "07:45", speaker: "David", text: "September 12th is the new target. The DevOps team flagged some latency concerns we need to address first." },
      { time: "08:30", speaker: "Alex", text: "Let's schedule a follow-up with DevOps this week. We can't slip on this." },
    ],
    actions: [
      { text: "Schedule DevOps follow-up on latency", assignee: "Alex", due: "This week" },
      { text: "Run load tests on staging environment", assignee: "David", due: "Fri, Feb 14" },
    ],
  },
  {
    title: "EMEA vendor contracts nearly finalized",
    detail:
      "David to complete final legal review by Wednesday. Two regional partners already onboarded.",
    source: "Q3 Planning Sync",
    sourceTime: "01:05",
    thumbnail: "/hero/lib6.webp",
    summary:
      "David reported that the EMEA vendor contracts are in the final stages of legal review. Two regional partners have already been onboarded, with the remaining contracts expected to be signed by Wednesday.",
    takeaways: [
      "Two of four regional partners fully onboarded.",
      "Legal review is the only remaining blocker.",
    ],
    nextSteps: [
      "David to get contracts signed by Wednesday.",
      "Begin onboarding for remaining two partners.",
    ],
    transcript: [
      { time: "01:05", speaker: "David", text: "So the EMEA rollout is on track. We've onboarded two regional partners and the vendor contracts are nearly finalized." },
      { time: "01:42", speaker: "Alex", text: "Great. Any blockers on the contract side?" },
      { time: "01:55", speaker: "David", text: "Just the final legal review. I should have everything signed off by Wednesday." },
    ],
    actions: [
      { text: "Complete final legal review of contracts", assignee: "David", due: "Wed, Feb 12" },
      { text: "Begin onboarding remaining partners", assignee: "David", due: "Thu, Feb 13" },
    ],
  },
];

function useStreamTypewriter(
  segments: string[],
  active: boolean,
  speed = 8,
  chunkSize = 4,
) {
  const total = segments.reduce((s, t) => s + t.length, 0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!active) {
      setCharIndex(0);
      return;
    }
    if (charIndex >= total) return;
    const timer = setInterval(() => {
      setCharIndex((prev) => {
        const next = Math.min(prev + chunkSize, total);
        if (next >= total) clearInterval(timer);
        return next;
      });
    }, speed);
    return () => clearInterval(timer);
  }, [active, total, speed, chunkSize]);

  const displayed: string[] = [];
  let remaining = charIndex;
  let cursorSegment = -1;
  for (let i = 0; i < segments.length; i++) {
    if (remaining <= 0) {
      displayed.push("");
    } else if (remaining >= segments[i].length) {
      displayed.push(segments[i]);
      remaining -= segments[i].length;
    } else {
      displayed.push(segments[i].slice(0, remaining));
      cursorSegment = i;
      remaining = 0;
    }
  }

  const done = charIndex >= total;
  if (!done && cursorSegment === -1) cursorSegment = 0;

  return { displayed, cursorSegment, done };
}

type SubTab = "summary" | "transcription" | "actions";

export default function MemoriesPanel({ isActive }: { isActive: boolean }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [typing, setTyping] = useState(false);
  const [subTab, setSubTab] = useState<SubTab>("summary");
  const hasTriggeredRef = useRef(false);
  const prevSelectedRef = useRef(0);

  const selected = MEMORIES[selectedIdx];

  // 首次变为可见时触发 analyzing → 打字
  useEffect(() => {
    if (!isActive || hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setAnalyzing(true);
    setTyping(false);
    const timer = setTimeout(() => {
      setAnalyzing(false);
      setTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isActive]);

  // 切换选中卡片时重新触发打字动画
  useEffect(() => {
    if (prevSelectedRef.current === selectedIdx) return;
    prevSelectedRef.current = selectedIdx;
    if (!hasTriggeredRef.current) return;
    setSubTab("summary");
    setTyping(false);
    setAnalyzing(true);
    const timer = setTimeout(() => {
      setAnalyzing(false);
      setTyping(true);
    }, 600);
    return () => clearTimeout(timer);
  }, [selectedIdx]);

  const allSegments = [selected.summary, ...selected.takeaways, ...selected.nextSteps];

  const { displayed, cursorSegment, done } = useStreamTypewriter(
    allSegments,
    typing,
  );

  const summaryText = displayed[0] ?? "";
  const takeawayTexts = displayed.slice(1, 1 + selected.takeaways.length);
  const nextStepTexts = displayed.slice(1 + selected.takeaways.length);

  const cursor = (
    <span className="inline-block w-[2px] h-[13px] bg-text-2 ml-0.5 align-middle animate-pulse" />
  );

  return (
    <div className="flex h-full w-full bg-white text-left overflow-hidden">
      {/* 左侧 - Memories */}
      <div className="shrink-0 flex flex-2 flex-col overflow-hidden border-r border-black/5">
        <div className="flex items-center justify-between px-5 py-3 shrink-0">
          <h3 className="text-sm font-bold text-text-0">Memories</h3>
          <span className="text-[10px] text-text-2">
            {MEMORIES.length} extracted
          </span>
        </div>

        <div className="flex-1 px-4 pb-4 space-y-2.5 phone-scroll">
          {MEMORIES.map((mem, i) => (
            <div
              key={i}
              onClick={() => setSelectedIdx(i)}
              className={`rounded-lg border overflow-hidden cursor-pointer transition-all ${
                i === selectedIdx
                  ? "border-[#FF8C00]/40 ring-1 ring-[#FF8C00]/20 shadow-sm"
                  : "border-black/5 hover:border-black/10"
              }`}
            >
              {/* 引用的关键帧 */}
              <div className="relative h-16 overflow-hidden">
                <img
                  src={mem.thumbnail}
                  alt={mem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-1.5 left-2.5 flex items-center gap-1.5">
                  <Play size={8} fill="white" className="text-white" />
                  <span className="text-[9px] text-white/90 font-mono">
                    {mem.sourceTime}
                  </span>
                </div>
                <span className="absolute bottom-1.5 right-2.5 text-[9px] text-white/70">
                  {mem.source}
                </span>
              </div>
              {/* 记忆内容 */}
              <div className="p-3">
                <p className="text-[11px] font-semibold text-text-0 leading-snug">
                  {mem.title}
                </p>
                <p className="text-[10px] text-text-2 mt-1 leading-relaxed">
                  {mem.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 右侧 - 选中记忆的展开详情 */}
      <div className="flex flex-col flex-3 min-w-0 overflow-y-auto phone-scroll">
        {/* 标题 + 来源 */}
        <div className="px-6 py-4">
          <AnimatePresence mode="wait">
            <motion.h3
              key={selectedIdx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-xl font-semibold text-text-0"
            >
              {selected.title}
            </motion.h3>
          </AnimatePresence>
          <p className="text-[11px] text-text-2 mt-1">
            {selected.source} &middot; {selected.sourceTime}
          </p>
        </div>
        {/* 视频缩略图 */}
        <div className="px-4 pb-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full aspect-[16/8] shrink-0 overflow-hidden rounded-xl"
            >
              <img
                src={selected.thumbnail}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00] flex items-center justify-center shadow-lg">
                  <Play size={20} fill="white" className="text-white ml-0.5" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tab 切换: Summary / Transcription / Actions */}
        <div className="px-6 flex gap-0 border-b border-black/5 shrink-0">
          {(["summary", "transcription", "actions"] as SubTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setSubTab(tab)}
              className={`relative px-4 py-2 text-[12px] font-semibold capitalize transition-colors ${
                subTab === tab ? "text-text-0" : "text-text-2 hover:text-text-1"
              }`}
            >
              {tab}
              {subTab === tab && (
                <motion.div
                  layoutId="memories-sub-tab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF8C00] rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab 内容 */}
        <div className="px-6 py-4 space-y-4 flex-1">
          {subTab === "summary" && (
            <AnimatePresence mode="wait">
              {analyzing ? (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-2.5 py-2"
                >
                  <Loader2 size={14} className="text-text-2 animate-spin" />
                  <span className="text-sm text-text-2">
                    Luci is analyzing...
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key={`content-${selectedIdx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-2"
                >
                  <h2 className="text-lg font-bold text-text-0">
                    Executive Summary
                  </h2>

                  <p className="text-[13px] leading-relaxed text-text-1">
                    {summaryText}
                    {!done && cursorSegment === 0 && cursor}
                  </p>

                  {takeawayTexts.some((t) => t.length > 0) && (
                    <div className="flex gap-8 pt-1">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[10px] font-semibold text-text-2 uppercase tracking-wider mb-2.5">
                          Key Takeaways
                        </h4>
                        <ul className="space-y-2">
                          {takeawayTexts.map((text, i) =>
                            text.length > 0 ? (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-[12px] leading-relaxed text-text-1"
                              >
                                <CheckCircle2
                                  size={14}
                                  className="text-[#FF8C00] shrink-0 mt-0.5"
                                />
                                <span>
                                  {text}
                                  {!done && cursorSegment === i + 1 && cursor}
                                </span>
                              </li>
                            ) : null,
                          )}
                        </ul>
                      </div>

                      {nextStepTexts.some((t) => t.length > 0) && (
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[10px] font-semibold text-text-2 uppercase tracking-wider mb-2.5">
                            Next Steps
                          </h4>
                          <ul className="space-y-2">
                            {nextStepTexts.map((text, i) =>
                              text.length > 0 ? (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-[12px] leading-relaxed text-text-1"
                                >
                                  <Circle
                                    size={14}
                                    className="text-[#FF8C00] shrink-0 mt-0.5"
                                  />
                                  <span>
                                    {text}
                                    {!done &&
                                      cursorSegment ===
                                        i + 1 + selected.takeaways.length &&
                                      cursor}
                                  </span>
                                </li>
                              ) : null,
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {subTab === "transcription" && (
            <div className="space-y-0.5">
              {selected.transcript.map((line, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-2 hover:bg-black/[0.015] rounded-lg px-2 -mx-2 transition-colors"
                >
                  <span className="text-[10px] font-mono text-text-2/50 mt-0.5 shrink-0 w-10">
                    {line.time}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-text-0">
                      {line.speaker}
                    </span>
                    <p className="text-[12px] leading-relaxed text-text-1 mt-0.5">
                      {line.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {subTab === "actions" && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-text-0">Action Items</h2>
              <p className="text-[12px] text-text-2">
                {selected.actions.length} tasks extracted from this memory
              </p>
              <ul className="space-y-2">
                {selected.actions.map((action, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg border border-black/5 hover:border-black/10 transition-colors"
                  >
                    <div className="mt-0.5 w-4 h-4 rounded border-2 border-[#FF8C00]/40 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-medium text-text-0 leading-snug">
                        {action.text}
                      </p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-[10px] text-text-2 bg-black/[0.03] rounded-full px-2 py-0.5">
                          {action.assignee}
                        </span>
                        <span className="text-[10px] text-text-2/60">
                          {action.due}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className="w-full mt-2 py-2.5 rounded-lg text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, #FF8C00 0%, #FFa030 100%)",
                }}
              >
                Ask LUCI to Act
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
