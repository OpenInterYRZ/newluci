const painPoints = [
  {
    text: "Last week\u2019s meeting notes? Gone. Buried in some app you\u2019ve already forgotten about.",
    label: "Lost context",
  },
  {
    text: "AI is brilliant \u2014 yet every conversation starts at zero. Like a genius with amnesia.",
    label: "No memory",
  },
  {
    text: "You\u2019d love AI to truly know you. But hand over all your data to a black box? No thanks.",
    label: "No trust",
  },
];

export default function WhyLuci() {
  return (
    <section className="px-6 py-28 sm:py-20 bg-web-bg-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-text-2 mb-5">
            01 &mdash; Why LUCI
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-0 leading-[1.08] tracking-tight max-w-xl">
            The Problem Is Simple
          </h2>
        </div>

        {/* Narrative + cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left — narrative */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <p className="text-[1.05rem] text-text-1 leading-[1.9]">
              Every day you produce ideas, conversations, meetings, and
              notes&nbsp;&mdash; scattered across a dozen apps, eventually
              forgotten.
            </p>
            <p className="mt-5 text-[1.05rem] text-text-1 leading-[1.9]">
              Today&rsquo;s AI assistants are powerful, but they don&rsquo;t
              know <em className="text-text-0 not-italic font-semibold">you</em>
              . Every chat resets to a blank slate.
            </p>
            <div className="mt-8 h-px bg-gradient-to-r from-grey-2 to-transparent" />
          </div>

          {/* Right — pain-point cards */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl bg-white border border-grey-1 px-8 py-7 transition-shadow duration-300 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="text-[0.95rem] sm:text-base text-text-1 leading-relaxed flex-1">
                    {item.text}
                  </p>
                  <span className="shrink-0 rounded-full bg-grey-0 border border-grey-1 px-3 py-1 text-xs font-medium text-grey-5 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
