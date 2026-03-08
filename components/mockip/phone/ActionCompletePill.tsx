"use client";

import { CircleCheck, ChevronDown } from "lucide-react";

interface ActionCompletePillProps {
  label?: string;
}

export function ActionCompletePill({
  label = "Complete",
}: ActionCompletePillProps) {
  return (
    <div
      className="inline-flex items-center gap-[7px] rounded-full border border-[#E8E8EC] px-3 py-[5px] pl-2.5"
      style={{
        background: "#F7F7F8",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <CircleCheck size={14} className="text-[#555555]" />
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
