"use client";

import { AssistantAvatar } from "./AssistantAvatar";

export function MeetingSummaryCard() {
  return (
    <div
      className="flex w-full items-start gap-2 justify-start"
      style={{
        fontFamily: "Manrope, sans-serif",
        fontSize: "var(--phone-chat-fs)",
      }}
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
            2:15 PM
          </span>
        </div>

        {/* Body */}
        <div
          className="mt-1 flex flex-col gap-1 text-text-0 leading-[1.6]"
          style={{ fontSize: "calc(var(--phone-chat-fs) - 1px)" }}
        >
          <p>Yesterday&apos;s Meeting Summary</p>

          {/* All meetings with single left border */}
          <div
            className="flex flex-col gap-2 pl-2.5"
            style={{ borderLeft: "3px solid #E0E0E0" }}
          >
            {/* Product Demo Recording */}
            <div className="flex flex-col gap-0.5">
              <p>
                <span className="font-bold">Product Demo Recording</span> · 45 min
              </p>
              <p className="text-text-1">
                - v2.4 features demoed: smart search, batch exports, onboarding
                flow
              </p>
              <p className="text-text-1">
                - Smart search uses semantic matching for natural language queries
              </p>
              <p>
                <span className="font-medium" style={{ color: "#FF8C00" }}>
                  Action:
                </span>{" "}
                QA team verify smart search before release
              </p>
            </div>

            {/* Weekly All-Hands */}
            <div className="flex flex-col gap-0.5">
              <p>
                <span className="font-bold">Weekly All-Hands</span> · 58 min
              </p>
              <p className="text-text-1">
                - Series B closed — $42M led by Accel, 30-month runway
              </p>
              <p className="text-text-1">
                - MAU crossed 50K, 8 enterprise deals in late-stage
              </p>
              <p>
                <span className="font-medium" style={{ color: "#FF8C00" }}>
                  Action:
                </span>{" "}
                London office opening next month — check relocation packages
              </p>
            </div>

            {/* Design Review — Mobile */}
            <div className="flex flex-col gap-0.5">
              <p>
                <span className="font-bold">Design Review — Mobile</span> · 37 min
              </p>
              <p className="text-text-1">
                - Bottom tab bar reduced from 5 to 4 tabs with adaptive icons
              </p>
              <p className="text-text-1">
                - Settings screen moved to grouped list pattern
              </p>
              <p>
                <span className="font-medium" style={{ color: "#FF8C00" }}>
                  Action:
                </span>{" "}
                @iOS Dev implement 4-tab navigation update
              </p>
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div
          className="mt-1.5 flex items-center gap-3"
          style={{
            fontSize: "calc(var(--phone-chat-fs) - 2px)",
            color: "#1264A3",
          }}
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
                fill="#FF8C00"
              />
            </svg>
            Usage data
          </span>
        </div>
      </div>
    </div>
  );
}
