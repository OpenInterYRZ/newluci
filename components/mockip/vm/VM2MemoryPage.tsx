"use client";

import { Brain, Bookmark, ChevronRight, Sparkles } from "lucide-react";

const font = "font-[family-name:var(--font-manrope)]";

interface MemoryCardProps {
  tag: string;
  tagColor: string;
  title?: string;
  description: string;
  pending?: boolean;
}

const memoryCards: MemoryCardProps[] = [
  {
    tag: "Pending · disappears in 3 days",
    tagColor: "text-[#FF8C00]",
    title: "Q3 Budget: $2.4M",
    description:
      "I'm a frontend developer with extensive vibecoding experience. Due to company impact, I'm currently also responsible for growth, SEO, and design work. I believe AI is powerful but still needs human oversight, and I'd like to share my workflow experience with Claude Code and Open Claw across industries.",
    pending: true,
  },
  {
    tag: "Thought",
    tagColor: "text-[#FF8C00]",
    description: "I think I'm tall, good-looking, and funny.",
  },
  {
    tag: "Thought",
    tagColor: "text-[#FF8C00]",
    description:
      "Facing the rapid development of AI, I sometimes feel anxious, worrying about falling behind. To cope, I choose to actively research new technologies, but I sometimes feel lost about my career future and actively seek advice from senior developers.",
  },
  {
    tag: "Preference",
    tagColor: "text-[#FF8C00]",
    description:
      "I'm interested in the rapid development of AI and want to stay updated on the latest advancements in frontend technology, development workflows, and productivity tools.",
  },
];

function MemoryCard({
  tag,
  tagColor,
  title,
  description,
  pending,
}: MemoryCardProps) {
  return (
    <div
      className={`flex flex-col gap-3 rounded-xl border p-4 px-5 w-full ${
        pending ? "bg-white border-[#F0F0F0]" : "bg-[#FAFAFA] border-[#F0F0F0]"
      }`}
    >
      {/* Tag + time row */}
      <div className="flex items-center justify-between w-full">
        <span className={`text-xs font-semibold ${tagColor} `}>{tag}</span>
      </div>

      {/* Title (optional) */}
      {title && (
        <span className={`text-sm font-semibold text-[#333] `}>{title}</span>
      )}

      {/* Description */}
      <p className={`text-[13px] leading-[1.65] text-[#555] `}>{description}</p>

      {/* Action row for pending card */}
      {pending && (
        <div className="flex items-center gap-3 justify-end">
          <button
            className={`text-xs font-medium text-[#888]  hover:text-[#555] transition-colors`}
          >
            UNDO
          </button>
          <button
            className={`text-xs font-semibold text-white bg-[#1A1A1A] rounded-md px-4 py-1.5  hover:bg-[#333] transition-colors`}
          >
            ACCEPT
          </button>
        </div>
      )}
    </div>
  );
}

export default function VM2MemoryPage() {
  return (
    <div className={`flex flex-col gap-3 bg-white p-6 rounded-xl w-full `}>
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <span className="text-xl font-bold text-[#1A1A1A]">Memory</span>
        <div className="flex items-center gap-1.5">
          <Bookmark size={14} className="text-[#BBB]" />
          <span className="text-xs text-[#BBB]">Memory updating...</span>
        </div>
      </div>

      {/* Log link */}
      <div className="flex items-center justify-between w-full rounded-lg  border border-[#EEE] px-4 py-3">
        <span className="text-[13px] font-medium text-[#555]">
          View memory update log
        </span>
        <ChevronRight size={16} className="text-[#BBB]" />
      </div>

      {/* Memory cards */}
      <div className="flex flex-col gap-3.5 w-full">
        {memoryCards.map((card, i) => (
          <MemoryCard key={i} {...card} />
        ))}
      </div>

      {/* Floating button */}
      <div className="flex items-center justify-center gap-2 bg-[#1A1A1A] rounded-full px-5 py-2.5 mt-2">
        <Sparkles size={16} className="text-white" />
        <span className="text-[13px] font-semibold text-white">
          Memory fine-tuning
        </span>
      </div>
    </div>
  );
}
