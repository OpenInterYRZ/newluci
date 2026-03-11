"use client";

interface MemoryUpdateCardProps {
  title?: string;
  summary?: string;
  timestamp?: string;
}

export function MemoryUpdateCard({
  title = "YS had a casual chat with their clone",
  summary = "I extracted memory points. I am someone with a lot of vibe...",
  timestamp = "Just now",
}: MemoryUpdateCardProps) {
  return (
    <div
      className="flex w-full flex-col gap-1.5"
      style={{
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* Top row */}
      <div className="flex w-full items-center gap-2">
        <span
          className="font-semibold text-[#333333]"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          {title}
        </span>
        <div className="flex-1" />
        <span
          className="font-normal text-[#AAAAAA]"
          style={{ fontSize: "var(--phone-chat-fs-sm)" }}
        >
          {timestamp}
        </span>
      </div>

      {/* Bottom row */}
      <div className="flex w-full items-center gap-2">
        <span
          className="flex-1 truncate font-normal leading-[1.4] text-[#666666]"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          {summary}
        </span>
        <span
          className="shrink-0 font-medium text-[#FF8C00]"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          Expand
        </span>
      </div>
    </div>
  );
}
