"use client";

import { AssistantAvatar, AssistantNameTime } from "./AssistantAvatar";

const TODOS = [
  { text: "QA smart search before v2.4 release", source: "from Product Demo" },
  { text: "Review London office relocation packages", source: "from All-Hands" },
  { text: "Implement 4-tab mobile navigation", source: "from Design Review" },
];

export function TodoListBubble() {
  return (
    <div className="flex w-full items-start gap-2 justify-start">
      <AssistantAvatar />
      <div
        className="flex max-w-[270px] flex-col"
        style={{
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <AssistantNameTime time="2:16 PM" />
        <span
          className="mt-1 mb-2 font-semibold text-[#333]"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          Extracted 3 action items from yesterday&apos;s meetings:
        </span>
        <div className="flex flex-col gap-1.5">
          {TODOS.map((todo, i) => (
            <div
              key={i}
              className="flex gap-1.5"
              style={{ fontSize: "var(--phone-chat-fs)" }}
            >
              <span className="shrink-0 font-semibold text-[#FF8C00]">
                {i + 1}.
              </span>
              <span className="text-[#333]">
                {todo.text} —{" "}
                <span className="text-[#FF8C00]">{todo.source}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
