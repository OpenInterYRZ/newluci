"use client";

const comparisons = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <circle cx="12" cy="10" r="2" />
        <path d="M8 2v2" /><path d="M16 2v2" />
      </svg>
    ),
    title: "Follow up with a client from 3 months ago",
    without:
      "Scroll through WeChat history, dig through emails, ask colleagues \"what did they say again?\"",
    withLuci:
      "Search the client's name. Every past conversation, commitment you made, and open thread — one page.",
    metric: { before: "30 min", after: "3 sec" },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5" />
        <path d="M8 3H3v5" />
        <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
        <path d="m15 9 6-6" />
      </svg>
    ),
    title: "Confirm who does what after a meeting",
    without:
      "Send \"does everyone remember their action items?\" in the group chat. No one replies.",
    withLuci:
      "Action items auto-extracted from the meeting, assigned to people with deadlines. No chasing needed.",
    metric: { before: "Ignored", after: "Tracked" },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v6" /><path d="M8 11h6" />
      </svg>
    ),
    title: "Revisit why a past decision was made",
    without:
      "\"Why did we go with this approach?\" \"...no idea.\"",
    withLuci:
      "Search the keyword, trace back to the original meeting discussion — verbatim.",
    metric: { before: "Forgotten", after: "On record" },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Keep sensitive business data safe",
    without:
      "Client data scattered across Feishu, Notion, and WeChat groups — out of your control.",
    withLuci:
      "Self-hosted instance. Data stays in your environment. Open-source and fully auditable.",
    metric: { before: "Scattered", after: "You own it" },
  },
];

export default function BeforeAfter() {
  return (
    <section className="w-full">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Before &amp; After
          </span>
          <h2 className="mt-3 text-[28px] md:text-[40px] font-semibold leading-tight text-text-0">
            Everything changes with LUCI
          </h2>
          <p className="mt-4 text-[15px] text-text-2 max-w-[520px] mx-auto leading-relaxed">
            See how everyday knowledge tasks transform — from frustrating time sinks to effortless moments.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {comparisons.map((row, i) => (
            <div
              key={i}
              className="group relative rounded-[20px] border border-grey-1 bg-bg-0 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(255,92,0,0.08)]"
            >
              {/* Top glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card header */}
              <div className="px-7 pt-7 pb-5 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-0 flex items-center justify-center text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  {row.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-semibold text-text-0 leading-snug">
                    {row.title}
                  </h3>
                </div>
              </div>

              {/* Before / After panels */}
              <div className="px-7 pb-7">
                <div className="grid grid-cols-1 gap-3">
                  {/* Before */}
                  <div className="relative rounded-2xl bg-grey-0 px-5 py-4 overflow-hidden">
                    <div className="absolute top-0 left-0 w-[3px] h-full bg-grey-3 rounded-full" />
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-3">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-text-3">
                          <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                        </svg>
                        Today
                      </span>
                      <span className="ml-auto text-[11px] font-bold font-mono text-text-3">
                        {row.metric.before}
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed text-text-2">
                      {row.without}
                    </p>
                  </div>

                  {/* After */}
                  <div className="relative rounded-2xl bg-brand-0 px-5 py-4 overflow-hidden border border-primary/10">
                    <div className="absolute top-0 left-0 w-[3px] h-full bg-primary rounded-full" />
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        With LUCI
                      </span>
                      <span className="ml-auto text-[11px] font-bold font-mono text-primary">
                        {row.metric.after}
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed text-text-0 font-medium">
                      {row.withLuci}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
