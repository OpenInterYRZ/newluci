"use client";

const steps = [
  {
    title: "Connect your tools",
    description:
      "Link Telegram, WhatsApp, video platforms, calendar, and document sources. One place for everything.",
  },
  {
    title: "Unified context",
    description:
      "LUCI brings messages, docs, and video into a single memory. Ask across all your content without switching apps.",
  },
  {
    title: "Extend with skills",
    description:
      "Add custom skills to automate workflows, control what LUCI remembers, and connect to your existing stack.",
  },
];

export default function HowToGetStarted() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
        How it works
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-center text-base text-text-1 md:text-lg">
        Three simple steps to connect your tools and unify your context.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="rounded-2xl bg-neutral-100 p-6"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-orange-400 text-sm font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-5 text-lg font-bold text-neutral-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
