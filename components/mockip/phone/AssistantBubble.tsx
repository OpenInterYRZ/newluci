"use client";

import type { ReactNode } from "react";

interface AssistantBubbleProps {
  text?: string;
  children?: ReactNode;
  noBg?: boolean;
}

export function AssistantBubble({
  text,
  children,
  noBg,
}: AssistantBubbleProps) {
  return (
    <div className="flex w-full justify-start">
      <div
        className="max-w-[85%] font-normal leading-[1.45] text-[#333333]"
        style={{
          fontSize: "var(--phone-chat-fs)",
          padding: noBg ? 0 : "10px 14px",
          borderRadius: noBg ? 0 : "18px 18px 18px 4px",
          background: noBg ? "transparent" : "#F7F7F8",
          boxShadow: noBg ? "none" : "0 1px 4px rgba(0, 0, 0, 0.06)",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        {children ?? text}
      </div>
    </div>
  );
}
