"use client";

import { Video, CircleCheckBig, Mail, Brain } from "lucide-react";

export function SummaryCard() {
  const metrics = [
    { icon: Video, label: "Meetings", value: "3", sub: "2.5 hrs" },
    { icon: CircleCheckBig, label: "Tasks Done", value: "7", sub: "of 9" },
    { icon: Mail, label: "Emails", value: "12", sub: "3 urgent" },
    { icon: Brain, label: "Memories", value: "5", sub: "new" },
  ];

  return (
    <div className="flex w-full justify-start">
      <div
        className="flex w-[85%] flex-col gap-2.5"
        style={{
          padding: "14px 16px",
          borderRadius: "18px 18px 18px 4px",
          background: "#F7F7F8",
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.06)",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        {/* Title */}
        <div className="flex items-center justify-between">
          <span
            className="font-semibold text-[#333]"
            style={{ fontSize: "var(--phone-chat-fs)" }}
          >
            Yesterday&apos;s Overview
          </span>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-2">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="flex flex-col gap-0.5 rounded-xl bg-white/60 px-3 py-2.5"
              >
                <Icon size={13} className="text-[#888]" strokeWidth={2.2} />
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-bold text-[#333]"
                    style={{ fontSize: "calc(var(--phone-chat-fs) + 4px)" }}
                  >
                    {m.value}
                  </span>
                  <span
                    className="text-[#aaa]"
                    style={{ fontSize: "calc(var(--phone-chat-fs) - 3px)" }}
                  >
                    {m.sub}
                  </span>
                </div>
                <span
                  className="font-medium text-[#666]"
                  style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
                >
                  {m.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="border-t border-black/[0.04] pt-1.5 text-[#aaa]"
          style={{ fontSize: "calc(var(--phone-chat-fs) - 4px)" }}
        >
          Updated 2 min ago
        </div>
      </div>
    </div>
  );
}
