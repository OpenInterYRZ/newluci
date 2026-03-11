"use client";

import type { ReactNode } from "react";

interface AssistantBubbleProps {
  text?: string;
  children?: ReactNode;
}

export function AssistantBubble({
  text,
  children,
}: AssistantBubbleProps) {
  return (
    <div className="flex w-full justify-start">
      <div
        className="max-w-[85%] font-normal leading-[1.45] text-[#333333]"
        style={{
          fontSize: "var(--phone-chat-fs)",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        {children ?? text}
      </div>
    </div>
  );
}
