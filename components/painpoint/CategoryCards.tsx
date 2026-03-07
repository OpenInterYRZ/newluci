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
    title: "跟进 Acme 报价",
    progress: 100,
    barGradient: ["#EF4444", "#ff8c66"],
    avatars: ["#EF4444", "#3B82F6"],
  },
  {
    title: "整理会议摘要",
    progress: 42,
    barGradient: ["#F59E0B", "#fbbf24"],
    avatars: ["#10B981"],
  },
  {
    title: "同步 Slack 讨论",
    progress: 78,
    barGradient: ["#ff5c00", "#ff8c44"],
    avatars: ["#ff5c00", "#8B5CF6"],
  },
  {
    title: "审核合同条款",
    progress: 65,
    barGradient: ["#8B5CF6", "#a78bfa"],
    avatars: ["#F59E0B", "#10B981"],
  },
];

function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-7 h-7 rounded-full bg-[#ffffff08] border border-[#ffffff10] flex items-center justify-center">
      {children}
    </div>
  );
}

function AvatarDot({ color, offset }: { color: string; offset: boolean }) {
  return (
    <div
      className={`w-[26px] h-[26px] rounded-full border-2 border-[#1c1426] ${offset ? "-ml-1.5" : ""}`}
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
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-medium text-[#6a6a74]">
          Progress
        </span>
        <span className="text-[11px] font-bold text-[#e4e4ec]">
          {progress}%
        </span>
      </div>
      <div className="w-full h-1.5 rounded-sm bg-[#ffffff10]">
        <div
          className="h-full rounded-sm"
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
      className="rounded-2xl p-[18px_20px] flex flex-col gap-3.5 border border-[#ffffff10]"
      style={{
        background: "linear-gradient(180deg, #241a2e 0%, #1c1426 100%)",
      }}
    >
      <h3 className="text-[15px] font-bold text-white font-[Manrope]">
        {task.title}
      </h3>
      <ProgressBar progress={task.progress} gradient={task.barGradient} />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ActionButton>
            <Minus className="w-3 h-3 text-[#6a6a74]" />
          </ActionButton>
          <ActionButton>
            <Plus className="w-3 h-3 text-[#6a6a74]" />
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
      className={`w-[680px] rounded-[20px] border border-[#ffffff12] font-[Manrope] ${className}`}
      style={{
        background: "linear-gradient(180deg, #1a1220 0%, #14101c 100%)",
        boxShadow:
          "0 8px 60px rgba(0,0,0,0.25), 0 1px 40px rgba(255,255,255,0.024)",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5">
        <span className="text-lg font-bold text-white">LUCI Tasks</span>
        <Ellipsis className="w-5 h-5 text-[#5a5864]" />
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-2 gap-3 px-6 pb-6">
        {tasks.map((task) => (
          <Card key={task.title} task={task} />
        ))}
      </div>
    </div>
  );
}
