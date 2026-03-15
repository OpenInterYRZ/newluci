const traits = [
  {
    label: "Remembers",
    desc: "Every conversation, preference, and context — carried forward, never lost.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Private",
    desc: "Your own dedicated instance. Your data stays yours, period.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: "Evolves",
    desc: "Gets sharper with every interaction. The more you use it, the more it gets you.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
];

export default function WhatIsLuci() {
  return (
    <section className="px-6 py-28 sm:py-20 bg-web-bg-0">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-text-2 mb-5">
          02 &mdash; What Is LUCI
        </span>

        {/* Hero statement */}
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-0 leading-[1.08] tracking-tight">
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

        {/* Trait cards — horizontal with left accent */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {traits.map((t, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-white border border-grey-1 px-7 py-8 transition-shadow duration-300 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-light-default)]">
                {t.icon}
              </div>
              <h3 className="text-lg font-semibold text-text-0 mb-2">
                {t.label}
              </h3>
              <p className="text-[0.95rem] text-text-1 leading-[1.75]">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
