"use client";

/* ── Calendar data ─────────────────────────────────────── */
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const WEEKS = [
  ["28", "29", "30", "1", "2", "3", "4"],
  ["5", "6", "7", "8", "9", "10", "11"],
  ["12", "13", "14", "15", "", "", ""],
];
const PREV_MONTH = new Set(["28", "29", "30"]);
const SELECTED = "5";
const WEEKEND_COLS = new Set([4, 5, 6]);
const BOLD_DAY = "14";

/* ── Bar chart data ────────────────────────────────────── */
const BARS = [
  { h: 14, accent: true },
  { h: 20, accent: true },
  { h: 12, accent: false },
  { h: 24, accent: true },
  { h: 18, accent: false },
];

/* ── Tabs ──────────────────────────────────────────────── */
const TABS = ["October 2023", "September 2023", "August 2023", "July 2023"];

export function ClientTimelineDashboard() {
  return (
    <div className="group relative w-[1100px] cursor-pointer">
      <div
        className="relative flex gap-10 overflow-hidden rounded-2xl p-12"
        style={{
          backgroundColor: "#FAFAF8",
          height: 820,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* ─── Left Column ─── */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[32px] font-bold leading-tight text-[#1A1A2E]">
              Client Timeline
            </h1>
            <p className="text-sm text-[#6B7280]">
              A curated history of project milestones and strategic actions.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-end gap-6">
            {TABS.map((tab, i) =>
              i === 0 ? (
                <div key={tab} className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-semibold text-[#1A1A2E]">
                    {tab}
                  </span>
                  <div className="h-0.5 w-[90px] bg-[#1A1A2E]" />
                </div>
              ) : (
                <span
                  key={tab}
                  className="text-[13px] text-[#9CA3AF]"
                >
                  {tab}
                </span>
              ),
            )}
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-7">
            {/* Entry 1 — AI Insight */}
            <div className="flex gap-3.5">
              {/* Dot + line */}
              <div className="flex flex-col items-center">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-[#E85D2A] bg-transparent" />
                <div className="w-px flex-1 bg-[#E5E7EB]" />
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-wider text-[#E85D2A]">
                    AI INSIGHT
                  </span>
                  <span className="text-[10px] font-medium text-[#9CA3AF]">
                    09:45 AM
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-[#1A1A2E]">
                  Competitor Price Shift Detected
                </h3>
                <div
                  className="flex flex-col gap-2 rounded-[10px] border border-[#E8E8E8] bg-white px-5 py-4"
                >
                  <p className="text-[13px] leading-relaxed text-[#4B5563]">
                    LUCI detected a 12% decrease in subscription pricing from
                    main competitor CloudScale. Recommended adjustment strategy
                    is being drafted.
                  </p>
                  <span className="text-lg font-bold text-[#9CA3AF]">...</span>
                  <div className="flex gap-2">
                    <span className="rounded bg-[#1A1A2E] px-2.5 py-1 text-[9px] font-bold tracking-wider text-white">
                      MARKET ANALYSIS
                    </span>
                    <span className="rounded border-[1.5px] border-[#E85D2A] px-2.5 py-1 text-[9px] font-bold tracking-wider text-[#E85D2A]">
                      ACTION REQUIRED
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry 2 — Manual Task */}
            <div className="flex gap-3.5">
              <div className="flex flex-col items-center">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-[#D1D5DB] bg-transparent" />
                <div className="w-px flex-1 bg-[#E5E7EB]" />
              </div>
              <div className="flex flex-1 flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-wider text-[#6B7280]">
                    MANUAL TASK
                  </span>
                  <span className="text-[10px] font-medium text-[#9CA3AF]">
                    OCT 14
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-[#1A1A2E]">
                  Weekly Sync with Stakeholders
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#3B82F6]" />
                    <div className="-ml-1.5 h-7 w-7 rounded-full bg-[#F59E0B]" />
                    <span className="rounded-xl bg-[#F3F4F6] px-1.5 py-0.5 text-[11px] font-semibold text-[#6B7280]">
                      +3
                    </span>
                    <span className="text-xs text-[#6B7280]">
                      Minutes recorded &amp; Transcript available
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#E85D2A]">
                    View Summary
                  </span>
                </div>
              </div>
            </div>

            {/* Entry 3 — Memory Update */}
            <div className="flex gap-3.5">
              <div className="flex flex-col items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
              </div>
              <div className="flex flex-1 flex-col gap-2.5">
                <span className="text-[10px] font-bold tracking-wider text-[#10B981]">
                  MEMORY UPDATE
                </span>
                <h3 className="text-[17px] font-bold text-[#1A1A2E]">
                  Preference Noted
                </h3>
                <div className="flex items-center gap-3 rounded-[10px] border border-[#E8E8E8] bg-white px-4 py-3.5">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-[#10B981]" />
                  <p className="text-[13px] italic leading-relaxed text-[#4B5563]">
                    &quot;Client prefers detailed ROI breakdowns over visual
                    infographics for quarterly reports.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Right Column ─── */}
        <div className="flex w-[280px] shrink-0 flex-col gap-5">
          {/* Calendar */}
          <div className="flex flex-col gap-3 rounded-xl border border-[#E8E8E8] bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-[#1A1A2E]">&lt;</span>
              <span className="text-sm font-semibold text-[#1A1A2E]">
                October 2023
              </span>
              <span className="text-base font-semibold text-[#1A1A2E]">&gt;</span>
            </div>
            {/* Day headers */}
            <div className="flex justify-between">
              {DAYS.map((d, i) => (
                <span
                  key={`day-${i}`}
                  className="w-7 text-center text-[11px] font-semibold"
                  style={{ color: WEEKEND_COLS.has(i) ? "#E85D2A" : "#1A1A2E" }}
                >
                  {d}
                </span>
              ))}
            </div>
            {/* Weeks */}
            {WEEKS.map((week, wi) => (
              <div key={`w-${wi}`} className="flex justify-between">
                {week.map((day, di) => {
                  const isPrev = PREV_MONTH.has(day) && wi === 0;
                  const isSel = day === SELECTED && wi === 1;
                  const isWeekend = WEEKEND_COLS.has(di) && !isPrev && day !== "";
                  const isBold = day === BOLD_DAY;
                  return (
                    <span
                      key={`d-${wi}-${di}`}
                      className="relative flex h-7 w-7 items-center justify-center text-xs"
                      style={{
                        color: isPrev
                          ? "#C0C0C0"
                          : isSel
                            ? "#FFFFFF"
                            : isWeekend
                              ? "#E85D2A"
                              : "#1A1A2E",
                        fontWeight: isSel || isBold || isWeekend ? 600 : 400,
                      }}
                    >
                      {isSel && (
                        <span className="absolute inset-0 rounded-full bg-[#E85D2A]" />
                      )}
                      <span className="relative">{day}</span>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Activity Review */}
          <div className="flex flex-col gap-4 rounded-xl border border-[#E8E8E8] bg-white p-5">
            <span className="text-[10px] font-bold tracking-[1.2px] text-[#6B7280]">
              ACTIVITY REVIEW
            </span>
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-4xl font-bold leading-none text-[#1A1A2E]">
                  24
                </span>
                <span className="text-[11px] text-[#9CA3AF]">
                  Tasks Completed
                </span>
              </div>
              <div className="flex items-end gap-[3px]">
                {BARS.map((b, i) => (
                  <div
                    key={i}
                    className="w-2.5 rounded-sm"
                    style={{
                      height: b.h,
                      backgroundColor: b.accent ? "#E85D2A" : "#FBBF80",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-bold tracking-wider text-[#9CA3AF]">
                MOST ACTIVE TYPE
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#E85D2A]">*</span>
                <span className="text-[13px] font-semibold text-[#1A1A2E]">
                  Competitive Analysis
                </span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="flex flex-col gap-3.5 rounded-xl bg-[#1A1A2E] p-[22px]">
            <span className="text-[9px] font-bold tracking-[1.2px] text-[#9CA3AF]">
              DAILY EXECUTIVE SUMMARY
            </span>
            <p className="text-[13px] leading-relaxed text-[#D1D5DB]">
              Today was centered on market intelligence. We identified a
              potential risk with CloudScale and documented a critical preference
              for future reporting.
            </p>
            <div className="flex h-10 items-center justify-center rounded-lg bg-white">
              <span className="text-xs font-semibold text-[#1A1A2E]">
                Generate Full Report
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
