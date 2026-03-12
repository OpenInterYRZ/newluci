const rows = [
  {
    feature: "Competitor research",
    before:
      "Watch 10 competitor videos one by one, take manual notes — half a day gone.",
    after:
      "Batch import all 10. Structured teardown cards ready in under 10 minutes.",
  },
  {
    feature: "Saving inspiration",
    before:
      "Screenshot → WeChat favorites → three days later, you can't find it anywhere.",
    after:
      "One Telegram message. Permanently linked to the original video with full context.",
  },
  {
    feature: "Finding references",
    before:
      '"Someone said something brilliant…" Then an hour of scrolling to track it down.',
    after:
      "Fuzzy search. Three seconds. Pinpointed to the exact minute in the source video.",
  },
  {
    feature: "Script writing",
    before:
      "Tab-switch across five apps, hunting for that one example you half-remember.",
    after:
      "Describe the memory — AI surfaces the clip, your notes, and all related context.",
  },
  {
    feature: "Data privacy",
    before:
      "Notes scattered across 5 platforms. No idea who can access your unpublished ideas.",
    after:
      "Self-hosted instance. Data lives on your disk. Open-source and fully auditable.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="w-full">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20 py-20 md:py-32">
        {/* Header */}
        <h2 className="text-[28px] md:text-[44px] font-semibold leading-tight text-text-0 text-center mb-16 md:mb-20">
          The workflow comparison
          <br />
          you&apos;ll feel instantly
        </h2>

        {/* Table */}
        <div className="w-full overflow-x-auto -mx-2 px-2">
          <div className="min-w-[680px]">
            {/* Column headers */}
            <div className="grid grid-cols-[minmax(140px,_0.7fr)_1fr_1fr] gap-0">
              <div className="py-4 px-5 text-[12px] font-medium uppercase tracking-[0.08em] text-text-3 self-end">
                Workflow
              </div>
              <div className="py-5 px-7 rounded-t-[16px] bg-[#eeedeb]">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dddcd9]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-text-2"
                    >
                      <path
                        d="M2.5 2.5l7 7M9.5 2.5l-7 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[14px] font-semibold text-text-1 tracking-[-0.01em]">
                    Without LUCI
                  </span>
                </div>
              </div>
              <div className="py-5 px-7 rounded-t-[16px] bg-brand-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-primary"
                    >
                      <path
                        d="M2.5 6.5L5 9l4.5-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[14px] font-semibold text-text-0 tracking-[-0.01em]">
                    With LUCI
                  </span>
                </div>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[minmax(140px,_0.7fr)_1fr_1fr] gap-0 border-t border-[#e0dfdc]"
              >
                {/* Feature label */}
                <div className="py-6 md:py-7 px-5 flex items-start">
                  <span className="text-[14px] font-medium text-text-0 leading-snug">
                    {row.feature}
                  </span>
                </div>
                {/* Before */}
                <div className="py-6 md:py-7 px-7 bg-[#eeedeb]">
                  <p className="text-[14px] leading-[1.65] text-text-2">
                    {row.before}
                  </p>
                </div>
                {/* After */}
                <div className="py-6 md:py-7 px-7 bg-brand-0">
                  <p className="text-[14px] leading-[1.65] text-text-1 font-[450]">
                    {row.after}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom rounded cap */}
            <div className="grid grid-cols-[minmax(140px,_0.7fr)_1fr_1fr] gap-0">
              <div />
              <div className="h-4 bg-[#eeedeb] rounded-b-[16px]" />
              <div className="h-4 bg-brand-0 rounded-b-[16px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
