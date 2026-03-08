"use client";

interface AssistantBubbleProps {
  text: string;
}

export function AssistantBubble({ text }: AssistantBubbleProps) {
  return (
    <div className="flex w-full justify-start">
      <div
        className="max-w-[240px] rounded-[18px_18px_18px_4px] px-4 py-2.5 font-normal leading-[1.45] text-[#333333]"
        style={{
          fontSize: "var(--phone-chat-fs)",
          background: "#F7F7F8",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        {text}
      </div>
    </div>
  );
}
