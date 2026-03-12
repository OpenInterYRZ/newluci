"use client";

const MEETINGS = [
  {
    name: "Product Demo Recording",
    duration: "45 min",
    color: "#FF8C00",
    points: [
      "v2.4 features demoed: smart search, batch exports, onboarding flow",
      "Smart search uses semantic matching for natural language queries",
    ],
    action: "QA team verify smart search before release",
  },
  {
    name: "Weekly All-Hands",
    duration: "58 min",
    color: "#4A6CF7",
    points: [
      "Series B closed — $42M led by Accel, 30-month runway",
      "MAU crossed 50K, 8 enterprise deals in late-stage",
    ],
    action: "London office opening next month — check relocation packages",
  },
  {
    name: "Design Review — Mobile",
    duration: "37 min",
    color: "#34C759",
    points: [
      "Bottom tab bar reduced from 5 to 4 tabs with adaptive icons",
      "Settings screen moved to grouped list pattern",
    ],
    action: "@iOS Dev implement 4-tab navigation update",
  },
];

export function MeetingSummaryCard() {
  return (
    <div className="flex w-full justify-start">
      <div
        className="flex flex-col"
        style={{
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <span
          className="mb-2.5 font-semibold text-text-0"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          Yesterday&apos;s Meeting Summary
        </span>
        <div className="flex flex-col gap-3">
          {MEETINGS.map((m) => (
            <div
              key={m.name}
              className="flex flex-col gap-1 pl-2.5"
              style={{
                borderLeft: `3px solid ${m.color}`,
                fontSize: "calc(var(--phone-chat-fs) - 2px)",
              }}
            >
              <span
                className="font-semibold text-text-0"
                style={{ fontSize: "var(--phone-chat-fs)" }}
              >
                {m.name} · {m.duration}
              </span>
              {m.points.map((p, i) => (
                <span key={i} className="text-text-1 leading-[1.5]">
                  - {p}
                </span>
              ))}
              <span className="text-text-1 leading-[1.5]">
                <span className="font-medium text-[#FF8C00]">Action:</span>{" "}
                {m.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
