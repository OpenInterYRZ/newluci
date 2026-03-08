"use client";

interface UserBubbleProps {
  text: string;
}

export function UserBubble({ text }: UserBubbleProps) {
  return (
    <div className="flex w-full justify-end">
      <div
        className="max-w-60 rounded-[18px_18px_4px_18px] px-4 py-2.5 font-normal leading-[1.45] text-white"
        style={{
          fontSize: "var(--phone-chat-fs)",
          background: "linear-gradient(135deg, #FF8C00 0%, #FFa030 100%)",
          boxShadow: "0 2px 8px rgba(255, 140, 0, 0.15)",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        {text}
      </div>
    </div>
  );
}
