"use client";

import { AssistantNameTime } from "./AssistantAvatar";

interface FileAttachmentBubbleProps {
  fileName?: string;
  fileSize?: string;
  iconColor?: string;
}

export function FileAttachmentBubble({
  fileName = "Meeting History",
  fileSize = "41 KB",
  iconColor,
}: FileAttachmentBubbleProps) {
  const color = iconColor ?? "var(--primary)";
  return (
    <div className="flex w-full items-start gap-2 justify-start">
      <div className="flex flex-col gap-1">
        <AssistantNameTime time="8:17 AM" />
        <div
          className="flex max-w-120 items-center gap-3 rounded-[18px_18px_18px_4px] bg-primary/[0.08] px-4 py-3"
          style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)" }}
        >
          {/* File icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.04]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="2"
                width="14"
                height="16"
                rx="2"
                stroke={color}
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M7 7h6M7 10h4"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <rect
                x="12"
                y="2"
                width="5"
                height="5"
                rx="1"
                stroke={color}
                strokeWidth="1.5"
                fill="white"
              />
            </svg>
          </div>

          {/* File info */}
          <div className="flex min-w-0 flex-col">
            <span
              className="truncate font-medium leading-tight text-text-0"
              style={{ fontSize: "var(--phone-chat-fs)" }}
            >
              {fileName}
            </span>
            <span
              className="leading-tight text-text-2"
              style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
            >
              {fileSize}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
