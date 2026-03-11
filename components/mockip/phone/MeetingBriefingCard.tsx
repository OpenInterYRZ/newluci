"use client";

export function MeetingBriefingCard() {
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
          className="mb-2.5 font-semibold text-[#333]"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          Next Meeting Briefing
        </span>

        {/* Meeting info card */}
        <div
          className="mb-2.5 flex flex-col gap-1 rounded-[10px] border border-[#E8E8EC] bg-white p-[10px_12px]"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#333]">Sprint Review</span>
            <span
              className="rounded bg-[#F0F0F0] px-1.5 py-px text-[#888]"
              style={{ fontSize: "calc(var(--phone-chat-fs) - 3px)" }}
            >
              Today 3:00 PM
            </span>
          </div>
          <span className="text-[#888]" style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}>
            Attendees: You, @PM Team, @Eng Lead
          </span>
        </div>

        {/* Memory context */}
        <div
          className="mb-2 flex flex-col gap-0.5"
          style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
        >
          <span className="mb-1 font-semibold text-[#333]" style={{ fontSize: "var(--phone-chat-fs)" }}>
            Related context from memory:
          </span>
          <span className="leading-[1.6] text-[#555]">• Series B closed at $42M — 30-month runway confirmed</span>
          <span className="leading-[1.6] text-[#555]">• v2.4 smart search demo showed strong results</span>
          <span className="leading-[1.6] text-[#555]">• Mobile nav reduced to 4 tabs per Design Review</span>
        </div>

        {/* Suggested talking points */}
        <div
          className="flex flex-col gap-0.5"
          style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
        >
          <span className="mb-1 font-semibold text-[#333]" style={{ fontSize: "var(--phone-chat-fs)" }}>
            Suggested talking points:
          </span>
          <span className="leading-[1.6] text-[#555]">1. v2.4 release readiness &amp; smart search QA status</span>
          <span className="leading-[1.6] text-[#555]">2. Enterprise pipeline update — 8 late-stage deals</span>
          <span className="leading-[1.6] text-[#555]">3. Mobile 4-tab nav implementation timeline</span>
        </div>
      </div>
    </div>
  );
}
