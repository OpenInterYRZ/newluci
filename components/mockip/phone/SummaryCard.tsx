"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AssistantAvatar, AssistantNameTime } from "./AssistantAvatar";
import ShinyText from "@/components/ui/ShinyText";

const VIDEOS = [
  { title: "Product Demo", duration: "45 min", thumb: "/hero/me1.webp" },
  { title: "All-Hands", duration: "58 min", thumb: "/hero/me2.webp" },
  { title: "Design Review", duration: "37 min", thumb: "/hero/me3.webp" },
];

export function SummaryCard() {
  const [phase, setPhase] = useState<
    "analyzing" | "analyze-complete" | "done"
  >("analyzing");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("analyze-complete"), 2800);
    const t2 = setTimeout(() => setPhase("done"), 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const metrics = [
    { label: "Meetings", value: "3", sub: "2h 20min" },
    { label: "Tasks Done", value: "7", sub: "of 9 (78%)" },
    { label: "Emails", value: "12", sub: "3 urgent flagged" },
    { label: "Memories", value: "5", sub: "new saved" },
  ];

  return (
    <div className="flex w-full items-start gap-2 justify-start">
      <AssistantAvatar />
      <div className="flex w-[88%] flex-col gap-2">
        <AssistantNameTime />

        <AnimatePresence mode="wait">
          {phase === "analyzing" || phase === "analyze-complete" ? (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2"
            >
              {/* Analyzing / Complete label */}
              <span style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}>
                {phase === "analyze-complete" ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium text-[#34C759]"
                  >
                    Analysis complete · 3 meetings · 12 emails · 9 tasks
                  </motion.span>
                ) : (
                  <ShinyText
                    text="Analyzing yesterday's activity..."
                    speed={1.5}
                    color="#bbbbbb"
                    shineColor="#888888"
                    className="font-medium "
                  />
                )}
              </span>

              {/* Video thumbnails - horizontal scroll */}
              <div
                className="flex gap-2 overflow-x-auto pb-1"
                style={{ scrollbarWidth: "none" }}
              >
                {VIDEOS.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.35 }}
                    className="flex shrink-0 flex-col gap-1"
                  >
                    {/* Thumbnail */}
                    <div
                      className="relative overflow-hidden rounded-lg"
                      style={{ width: 120, height: 72 }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={v.thumb}
                        alt={v.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/40" />
                      {/* Play icon / Check icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {phase === "analyze-complete" ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="flex items-center justify-center rounded-full bg-[#34C759] w-6 h-6"
                          >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </motion.div>
                        ) : (
                          <div className="flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm w-6 h-6">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                              <polygon points="2,0 10,5 2,10" />
                            </svg>
                          </div>
                        )}
                      </div>
                      {/* Duration badge */}
                      <div className="absolute right-1 bottom-1 rounded bg-black/50 px-1.5 py-px">
                        <span
                          className="font-medium text-white"
                          style={{
                            fontSize: "calc(var(--phone-chat-fs) - 4px)",
                          }}
                        >
                          {v.duration}
                        </span>
                      </div>
                      {/* Scanning line animation — only during analyzing */}
                      {phase === "analyzing" && (
                        <motion.div
                          className="absolute left-0 h-[2px] w-full bg-primary/80"
                          animate={{ top: ["0%", "100%", "0%"] }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                          }}
                        />
                      )}
                    </div>
                    {/* Title */}
                    <span
                      className="font-medium text-text-1"
                      style={{ fontSize: "calc(var(--phone-chat-fs) - 3px)" }}
                    >
                      {v.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-2"
            >
              <span
                className="font-semibold text-text-0"
                style={{ fontSize: "var(--phone-chat-fs)" }}
              >
                Yesterday&apos;s Overview
              </span>

              <table
                className="w-full max-w-80 border-collapse"
                style={{ fontSize: "var(--phone-chat-fs)" }}
              >
                <thead>
                  <tr
                    className="text-left text-text-3 border-b border-grey-1"
                    style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
                  >
                    <th className="pb-1 font-medium">Category</th>
                    <th className="pb-1 text-right font-medium">Count</th>
                    <th className="pb-1 text-right font-medium">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((m) => (
                    <tr
                      key={m.label}
                      className="border-b border-grey-0"
                    >
                      <td className="py-[3px] text-text-1">{m.label}</td>
                      <td className="py-[3px] text-right font-semibold text-text-0">
                        {m.value}
                      </td>
                      <td
                        className="py-[3px] text-right text-text-3"
                        style={{
                          fontSize: "calc(var(--phone-chat-fs) - 2px)",
                        }}
                      >
                        {m.sub}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div
                className="text-text-3"
                style={{ fontSize: "calc(var(--phone-chat-fs) - 3px)" }}
              >
                Updated 2 min ago
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
