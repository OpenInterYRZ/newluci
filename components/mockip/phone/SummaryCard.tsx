"use client";

import { AssistantAvatar, AssistantNameTime } from "./AssistantAvatar";

export function SummaryCard() {
  const metrics = [
    { label: "Meetings", value: "3", sub: "2.5 hrs" },
    { label: "Tasks Done", value: "7", sub: "of 9" },
    { label: "Emails", value: "12", sub: "3 urgent" },
    { label: "Memories", value: "5", sub: "new" },
  ];

  return (
    <div className="flex w-full items-start gap-2 justify-start">
      <AssistantAvatar />
      <div
        className="flex w-[88%] flex-col gap-2"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        <AssistantNameTime />
        <span
          className="font-semibold text-[#333]"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          Yesterday&apos;s Overview
        </span>

        <table
          className="w-full border-collapse"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          <thead>
            <tr
              className="text-left text-[#aaa]"
              style={{
                fontSize: "calc(var(--phone-chat-fs) - 2px)",
                borderBottom: "1px solid #eee",
              }}
            >
              <th className="pb-1 font-medium">Category</th>
              <th className="pb-1 text-right font-medium">Count</th>
              <th className="pb-1 text-right font-medium">Detail</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((m) => (
              <tr
                key={m.label}
                style={{ borderBottom: "1px solid #f5f5f5" }}
              >
                <td className="py-[3px] text-[#555]">{m.label}</td>
                <td className="py-[3px] text-right font-semibold text-[#333]">
                  {m.value}
                </td>
                <td
                  className="py-[3px] text-right text-[#bbb]"
                  style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
                >
                  {m.sub}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className="text-[#bbb]"
          style={{ fontSize: "calc(var(--phone-chat-fs) - 3px)" }}
        >
          Updated 2 min ago
        </div>
      </div>
    </div>
  );
}
