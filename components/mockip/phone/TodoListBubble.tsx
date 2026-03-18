"use client";

import { AssistantAvatar, AssistantNameTime } from "./AssistantAvatar";

const TODOS = [
  { text: "QA team to verify smart search edge cases before Thursday's v2.4 release", source: "from Product Demo" },
  {
    text: "Review London office relocation packages and benefits — deadline Friday",
    source: "from All-Hands",
  },
  { text: "iOS team to implement 4-tab navigation with adaptive icons — target next Friday", source: "from Design Review" },
];

export function TodoListBubble() {
  return (
    <div className="flex w-full items-start gap-2 justify-start">
      <AssistantAvatar />
      <div className="flex max-w-120 flex-col">
        <AssistantNameTime time="8:16 AM" />
        <span
          className="mt-1 mb-2 font-semibold text-text-0"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          I found 3 unresolved action items from yesterday&apos;s meetings that need follow-up:
        </span>
        <div className="flex flex-col gap-1.5">
          {TODOS.map((todo, i) => (
            <div
              key={i}
              className="flex gap-1.5"
              style={{ fontSize: "var(--phone-chat-fs)" }}
            >
              <span className="shrink-0 font-semibold text-primary">
                {i + 1}.
              </span>
              <span className="text-text-0">
                {todo.text} —{" "}
                <span className="text-primary">{todo.source}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
