const traits = [
  {
    label: "Remembers",
    desc: "Every conversation, preference, and context — carried forward, never lost.",
  },
  {
    label: "Private",
    desc: "Your own dedicated instance. Your data stays yours, period.",
  },
  {
    label: "Evolves",
    desc: "Gets sharper with every interaction. The more you use it, the more it gets you.",
  },
];

export default function WhatIsLuci() {
  return (
    <section className="px-6 py-28 sm:py-20 bg-web-bg-0">
      <div className="max-w-6xl mx-auto">
        {/* Hero statement */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif text-text-0 leading-[1.08] tracking-tight">
            Your AI that actually{" "}
            <span className="text-primary">knows you</span>
          </h2>

          <p className="mt-8 text-[1.05rem] text-text-1 leading-[1.9] max-w-2xl">
            LUCI isn&rsquo;t another chatbot. It&rsquo;s a personal AI that
            remembers what you&rsquo;ve said, seen, and thought&nbsp;&mdash;
            growing to understand you over time. Your second brain, running on
            your own instance.
          </p>
        </div>

        {/* Traits — rule-separated rows, staggered layout */}
        <div className="divide-y divide-grey-1">
          {traits.map((t, i) => (
            <div
              key={t.label}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-16 py-8 first:pt-0 last:pb-0 items-baseline"
            >
              <h3 className="text-2xl sm:text-3xl font-serif text-text-0 leading-snug">
                {t.label}
              </h3>
              <p className="text-[1.05rem] text-text-1 leading-[1.8] max-w-xl">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
