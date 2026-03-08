"use client";

import { motion } from "framer-motion";
import { Upload, MoreVertical } from "lucide-react";

const skills = [
  { name: "Meeting Summarizer", desc: "Auto-extract key decisions, action items, and follow-ups from any meeting recording", on: true },
  { name: "Email Drafter", desc: "Generate context-aware email replies based on your communication style and history", on: true },
  { name: "Daily Briefing", desc: "Compile a morning overview of your calendar, pending tasks, and important updates", on: true },
  { name: "Contract Reviewer", desc: "Highlight key clauses, risks, and obligations in legal documents automatically", on: false },
  { name: "Expense Tracker", desc: "Capture receipts from photos and conversations, auto-categorize spending", on: true },
  { name: "Travel Planner", desc: "Book flights, hotels, and build itineraries from a single conversation", on: true },
];

export default function SkillsCard() {
  return (
    <motion.div
      className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
      }}
    >
      {/* ─── Left: Title + Desc ─── */}
      <div className="flex w-full md:w-[400px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
        <h3 className="text-[28px] font-bold leading-tight text-text-0">
          Extensible Skills
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          Pre-built, reusable capabilities that LUCI runs on your behalf.
          Toggle them on, or create your own with a single slash command.
        </p>
      </div>

      {/* ─── Right: Skills panel mockup ─── */}
      <div
        className="flex flex-1 items-end justify-end overflow-hidden rounded-[20px] p-5 md:p-8"
        style={{
          backgroundImage: "url(/pb.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex w-full flex-col overflow-hidden rounded-xl bg-white"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
        >
          {/* Header */}
          <div className="flex items-start justify-between px-6 pt-6 pb-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-bold text-[#1A1A2E]">Skills</span>
              <p className="text-[11px] leading-relaxed text-[#9CA3AF]">
                Pre-built, reusable best practices and tools for your agent.
                <br />
                Skills triggered using &quot;/&quot; (e.g., /skill-creator). Turn on the toggle to let LUCI run them automatically.
              </p>
            </div>
            <button className="flex shrink-0 items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-[12px] font-medium text-[#1A1A2E] transition-colors hover:bg-[#F9FAFB]">
              <Upload className="h-3.5 w-3.5" strokeWidth={2} />
              Create Skills
            </button>
          </div>

          {/* Skills list */}
          <div className="flex flex-col">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="relative flex items-center gap-4 border-t border-[#F0F0F0] px-6 py-4"
              >
                <div className="flex flex-1 flex-col gap-0.5 overflow-hidden">
                  <span className="text-[13px] font-medium text-[#1A1A2E]">
                    {skill.name}
                  </span>
                  <span className="truncate text-[11px] text-[#9CA3AF]">
                    {skill.desc}
                  </span>
                </div>

                {/* Toggle */}
                <div
                  className="relative h-[22px] w-[40px] shrink-0 rounded-full transition-colors"
                  style={{
                    backgroundColor: skill.on ? "#F59E0B" : "#E5E7EB",
                  }}
                >
                  <div
                    className="absolute top-[2px] h-[18px] w-[18px] rounded-full bg-white shadow-sm transition-all"
                    style={{
                      left: skill.on ? 20 : 2,
                    }}
                  />
                </div>

                {/* More menu */}
                <MoreVertical className="h-4 w-4 shrink-0 text-[#C4C4C4]" />

              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
