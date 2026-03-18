"use client";

import type { ReactNode } from "react";
import { AssistantAvatar, AssistantNameTime } from "./AssistantAvatar";

interface AssistantBubbleProps {
  text?: string;
  children?: ReactNode;
  name?: string;
  time?: string;
}

export function AssistantBubble({
  text,
  children,
  name,
  time,
}: AssistantBubbleProps) {
  return (
    <div className="flex w-full items-start gap-2 justify-start">
      <AssistantAvatar />
      <div className="flex max-w-[85%] flex-col gap-0.5">
        <AssistantNameTime name={name} time={time} />
        <div
          className="font-normal leading-[1.45] text-text-0 max-w-[75%]"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          {children ?? text}
        </div>
      </div>
    </div>
  );
}
