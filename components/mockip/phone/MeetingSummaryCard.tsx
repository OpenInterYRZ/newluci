"use client";

import { AssistantAvatar } from "./AssistantAvatar";

export function MeetingSummaryCard() {
  return (
    <div
      className="flex w-full items-start gap-2 justify-start max-w-[75%]"
      style={{ fontSize: "var(--phone-chat-fs)" }}
    >
      <AssistantAvatar />
      <div className="flex flex-col gap-0.5">
        {/* Header: Name + Badge + Time */}
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-text-0">LUCI</span>
          <span
            className="text-text-2"
            style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
          >
            8:15 AM
          </span>
        </div>

        {/* Body */}
        <div
          className="mt-1 flex flex-col gap-1 text-text-0 leading-[1.6]"
          style={{ fontSize: "calc(var(--phone-chat-fs) - 1px)" }}
        >
          <p>
            Here&apos;s what happened in yesterday&apos;s 3 meetings (2h 20min
            total):
          </p>

          {/* All meetings with single left border */}
          <div className="flex flex-col gap-2 pl-2.5 border-l-[3px] border-grey-2">
            {/* Product Demo Recording */}
            <div className="flex flex-col gap-0.5 ">
              <p>
                <span className="font-bold">Product Demo</span> · 45 min · 6
                attendees
              </p>
              <p className="text-text-1">
                - v2.4 highlights: smart search with AI ranking, batch export
                for enterprise, redesigned onboarding flow (3 steps → 1)
              </p>
              <p className="text-text-1">
                - Client feedback: &quot;search speed improved 4x&quot; — demo
                well received
              </p>
              <p>
                <span className="font-medium text-primary">
                  Action:
                </span>{" "}
                QA team to verify smart search edge cases before Thursday
                release
              </p>
            </div>

            {/* Weekly All-Hands */}
            <div className="flex flex-col gap-0.5">
              <p>
                <span className="font-bold">All-Hands</span> · 58 min ·
                Company-wide
              </p>
              <p className="text-text-1">
                - Series B closed at $42M (lead: Accel) — 30-month runway
                secured
              </p>
              <p className="text-text-1">
                - MAU crossed 50K milestone, enterprise pipeline at 8 late-stage
                deals
              </p>
              <p>
                <span className="font-medium text-primary">
                  Action:
                </span>{" "}
                London office opening next month — review relocation packages by
                Friday
              </p>
            </div>

            {/* Design Review — Mobile */}
            <div className="flex flex-col gap-0.5">
              <p>
                <span className="font-bold">Design Review</span> · 37 min ·
                Design + iOS team
              </p>
              <p className="text-text-1">
                - Mobile tab bar consolidated from 5 → 4 tabs, new adaptive icon
                system approved
              </p>
              <p className="text-text-1">
                - Prototype tested with 12 users — task completion rate up 18%
              </p>
              <p>
                <span className="font-medium text-primary">
                  Action:
                </span>{" "}
                @iOS Dev to implement 4-tab navigation, target next Friday
              </p>
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div
          className="mt-1.5 flex items-center gap-3 text-[#1264A3]"
          style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
        >
          <span className="flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M13.5 8.5l-5 5-2-2" />
              <path d="M4 10V3h9v7" />
            </svg>
            Meeting notes
          </span>
          <span className="flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="1" y="6" width="3" height="8" rx="0.5" fill="#1264A3" />
              <rect
                x="6.5"
                y="3"
                width="3"
                height="11"
                rx="0.5"
                fill="#34C759"
              />
              <rect
                x="12"
                y="1"
                width="3"
                height="13"
                rx="0.5"
                fill="var(--primary)"
              />
            </svg>
            Usage data
          </span>
        </div>
      </div>
    </div>
  );
}
