"use client";
import React from "react";

interface CategoryColumn {
  title: string;
  color: string;
  items: string[];
}

const columns: CategoryColumn[] = [
  {
    title: "需要办",
    color: "#EF4444",
    items: ["跟进 Acme 报价", "确认周四会议", "审核合同条款"],
  },
  {
    title: "正在办",
    color: "#F59E0B",
    items: ["草拟回复邮件", "整理会议摘要", "同步 Slack 讨论"],
  },
  {
    title: "已经办",
    color: "#10B981",
    items: ["CRM 已更新", "任务已归档", "日历已同步"],
  },
];

interface CategoryCardsProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

export function CategoryCards({ containerRef, className = "" }: CategoryCardsProps) {
  return (
    <div ref={containerRef} className={`flex gap-6 justify-center w-full ${className}`}>
      {columns.map((col) => (
        <div key={col.title} className="w-[340px] overflow-hidden rounded-xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a24]">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: col.color }}
            />
            <span className="text-sm font-bold" style={{ color: col.color }}>
              {col.title}
            </span>
          </div>
          <div className="flex flex-col gap-2 px-4 py-3 bg-[#12121a] border border-t-0 border-[#1e1e28]">
            {col.items.map((item) => (
              <span key={item} className="text-[13px] text-[#c4c4cc]">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
