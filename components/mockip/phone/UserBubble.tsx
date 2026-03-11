"use client";

interface UserBubbleProps {
  text: string;
}

export function UserBubble({ text }: UserBubbleProps) {
  return (
    <div className="flex w-full justify-end">
      <div
        className="max-w-60 rounded-[18px_18px_4px_18px] border border-grey-1 bg-grey-1 px-4 py-2.5 font-normal leading-[1.45] text-text-0 "
        style={{
          fontSize: "var(--phone-chat-fs)",
        }}
      >
        {text}
      </div>
    </div>
  );
}
