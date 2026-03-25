"use client";

interface UserBubbleProps {
  text: string;
  name?: string;
  time?: string;
}

export function UserBubble({
  text,
  name = "You",
  time = "8:16 AM",
}: UserBubbleProps) {
  return (
    <div className="flex w-full items-start gap-2 justify-end">
      <div className="flex flex-col items-end gap-0.5">
        <div className="flex items-baseline gap-1.5">
          <span
            className="text-text-2"
            style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
          >
            {time}
          </span>
          <span
            className="font-bold text-text-0"
            style={{ fontSize: "var(--phone-chat-fs)" }}
          >
            {name}
          </span>
        </div>
        <div
          className="max-w-60 rounded-[18px_18px_4px_18px] border border-grey-1 bg-grey-1 px-4 py-2.5 font-normal leading-[1.45] text-text-0"
          style={{
            fontSize: "var(--phone-chat-fs)",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
