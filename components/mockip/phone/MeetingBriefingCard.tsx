"use client";

import { AssistantAvatar, AssistantNameTime } from "./AssistantAvatar";

export function MeetingBriefingCard() {
  return (
    <div className="flex w-full items-start gap-2 justify-start">
      <AssistantAvatar />
      <div className="flex max-w-120 flex-col">
        <AssistantNameTime time="8:17 AM" />
        <span
          className="mt-1 mb-2.5 font-semibold text-text-0"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          Your next meeting is in 45 minutes — here&apos;s the briefing:
        </span>

        {/* Meeting info card */}
        <div
          className="mb-2.5 flex flex-col gap-1 rounded-[10px] border border-grey-1 bg-white p-[10px_12px]"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-text-0">Sprint Review — Week 12</span>
            <span
              className="rounded bg-grey-0 px-1.5 py-px text-text-2"
              style={{ fontSize: "calc(var(--phone-chat-fs) - 3px)" }}
            >
              Today 10:00 AM · 45 min
            </span>
          </div>
          <span
            className="text-text-2"
            style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
          >
            Attendees: You, @PM Team, @Eng Lead, @Design Lead · Room 4B
          </span>
        </div>

        {/* Memory context */}
        <div
          className="mb-2 flex flex-col gap-0.5"
          style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
        >
          <span
            className="mb-1 font-semibold text-text-0"
            style={{ fontSize: "var(--phone-chat-fs)" }}
          >
            Related context from memory:
          </span>
          <span className="leading-[1.6] text-text-1">
            - Series B closed at $42M (Accel lead) — 30-month runway confirmed in All-Hands
          </span>
          <span className="leading-[1.6] text-text-1">
            - v2.4 smart search demo received positive client feedback — &quot;4x faster search&quot;
          </span>
          <span className="leading-[1.6] text-text-1">
            - Mobile nav reduced 5 → 4 tabs, user testing showed 18% improvement in task completion
          </span>
        </div>

        {/* Suggested talking points */}
        <div
          className="flex flex-col gap-0.5"
          style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
        >
          <span
            className="mb-1 font-semibold text-text-0"
            style={{ fontSize: "var(--phone-chat-fs)" }}
          >
            Suggested talking points:
          </span>
          <span className="leading-[1.6] text-text-1">
            1. v2.4 release readiness — smart search QA status, Thursday go/no-go decision
          </span>
          <span className="leading-[1.6] text-text-1">
            2. Enterprise pipeline update — 8 late-stage deals, $1.2M ARR potential
          </span>
          <span className="leading-[1.6] text-text-1">
            3. Mobile 4-tab navigation — implementation timeline, target next Friday
          </span>
        </div>
      </div>
    </div>
  );
}
