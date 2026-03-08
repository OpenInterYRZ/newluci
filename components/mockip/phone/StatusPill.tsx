"use client";

import { ChevronRight } from "lucide-react";

interface StatusPillProps {
  text?: string;
}

export function StatusPill({ text = "Analyzing video..." }: StatusPillProps) {
  return (
    <div
      className="inline-flex items-center gap-[7px] rounded-full border border-[#FFE0B2] py-[5px] pr-2.5 pl-3"
      style={{
        background: "#F7F7F8",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* Orange status dot */}
      <span className="h-[7px] w-[7px] rounded-full bg-[#FF8C00]" />

      <span
        className="font-medium tracking-[0.2px] text-[#555555]"
        style={{ fontSize: "var(--phone-chat-fs)" }}
      >
        {text}
      </span>

      <ChevronRight size={12} className="text-[#FF8C00]" />
    </div>
  );
}
