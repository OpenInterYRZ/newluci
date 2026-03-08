"use client";

import { Sparkles, ChevronDown } from "lucide-react";

interface ThinkingPillProps {
  label?: string;
}

export function ThinkingPill({ label = "Thinking..." }: ThinkingPillProps) {
  return (
    <div
      className="inline-flex items-center gap-[7px] rounded-full px-3 py-[5px] pl-2.5"
      style={{
        background: "#F7F7F8",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <Sparkles size={14} className="text-[#555555]" />
      <span
        className="font-medium tracking-[0.2px] text-[#555555]"
        style={{ fontSize: "var(--phone-chat-fs)" }}
      >
        {label}
      </span>
      <ChevronDown size={12} className="text-[#999999]" />
    </div>
  );
}
