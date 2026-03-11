"use client";

const TODOS = [
  { text: "QA smart search before v2.4 release", source: "from Product Demo" },
  { text: "Review London office relocation packages", source: "from All-Hands" },
  { text: "Implement 4-tab mobile navigation", source: "from Design Review" },
];

export function TodoListBubble() {
  return (
    <div className="flex w-full justify-start">
      <div
        className="flex max-w-[270px] flex-col p-[14px_16px]"
        style={{
          background: "#F7F7F8",
          borderRadius: "18px 18px 18px 4px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <span
          className="mb-2 font-semibold text-[#333]"
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
