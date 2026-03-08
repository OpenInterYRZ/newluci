"use client";
import React from "react";
import { Minus, Plus, Ellipsis } from "lucide-react";

interface TaskCard {
  title: string;
  progress: number;
  barGradient: [string, string];
  avatars: string[];
}

const tasks: TaskCard[] = [
  {
    title: "Follow Up on Acme Quote",
    progress: 100,
    barGradient: ["#EF4444", "#ff8c66"],
    avatars: ["#EF4444", "#3B82F6"],
  },
  {
    title: "Compile Meeting Summary",
    progress: 42,
    barGradient: ["#F59E0B", "#fbbf24"],
    avatars: ["#10B981"],
  },
  {
    title: "Sync Slack Discussions",
    progress: 78,
    barGradient: ["#ff5c00", "#ff8c44"],
    avatars: ["#ff5c00", "#8B5CF6"],
  },
  {
    title: "Review Contract Terms",
    progress: 65,
    barGradient: ["#8B5CF6", "#a78bfa"],
    avatars: ["#F59E0B", "#10B981"],
  },
];

function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-8 h-8 rounded-full bg-[#ffffff08] border border-[#ffffff10] flex items-center justify-center hover:bg-[#ffffff12] transition-colors">
      {children}
    </div>
  );
}

function AvatarDot({ color, offset }: { color: string; offset: boolean }) {
  return (
    <div
      className={`w-7 h-7 rounded-full border-2 border-[#1c1426] ${offset ? "-ml-2" : ""}`}
      style={{ backgroundColor: color }}
    />
  );
}

function ProgressBar({
  progress,
  gradient,
}: {
  progress: number;
  gradient: [string, string];
}) {
  return (
    <div className="w-full space-y-2.5">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-[#6a6a74]">
          Progress
        </span>
        <span className="text-xs font-bold text-[#e4e4ec]">
          {progress}%
        </span>
      </div>
      <div className="w-full h-2 rounded-full bg-[#ffffff10]">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]})`,
          }}
        />
      </div>
    </div>
  );
}

function Card({ task }: { task: TaskCard }) {
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4 border border-[#ffffff10] hover:border-[#ffffff18] transition-colors"
      style={{
        background: "linear-gradient(180deg, #241a2e 0%, #1c1426 100%)",
      }}
    >
      <h3 className="text-base font-bold text-white font-[Manrope] tracking-[-0.01em]">
        {task.title}
      </h3>
      <ProgressBar progress={task.progress} gradient={task.barGradient} />
      <div className="flex justify-between items-center pt-0.5">
        <div className="flex items-center gap-2.5">
          <ActionButton>
            <Minus className="w-3.5 h-3.5 text-[#6a6a74]" />
          </ActionButton>
          <ActionButton>
            <Plus className="w-3.5 h-3.5 text-[#6a6a74]" />
          </ActionButton>
        </div>
        <div className="flex items-center">
          {task.avatars.map((color, i) => (
            <AvatarDot key={i} color={color} offset={i > 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CategoryCardsProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

export function CategoryCards({
  containerRef,
  className = "",
}: CategoryCardsProps) {
  return (
    <div
      ref={containerRef}
      className={`w-[780px] rounded-[22px] border border-[#ffffff12] font-[Manrope] ${className}`}
      style={{
        background: "linear-gradient(180deg, #1a1220 0%, #14101c 100%)",
        boxShadow:
          "0 8px 60px rgba(0,0,0,0.35), 0 1px 40px rgba(255,255,255,0.024), 0 0 80px rgba(139,92,246,0.04)",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-7 py-6">
        <span className="text-xl font-bold text-white tracking-[-0.02em]">LUCI Tasks</span>
        <Ellipsis className="w-5 h-5 text-[#5a5864] hover:text-[#8a8894] transition-colors cursor-pointer" />
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-2 gap-4 px-7 pb-7">
        {tasks.map((task) => (
          <Card key={task.title} task={task} />
        ))}
      </div>
    </div>
  );
}
