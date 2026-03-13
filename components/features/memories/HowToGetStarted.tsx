"use client";

const steps = [
  {
    title: "Save videos",
    description:
      "Add meeting recordings, interviews, retrospectives, courses, and more into Memories.",
  },
  {
    title: "Auto-understand content",
    description:
      "The system generates transcripts and summaries so you can quickly review key points.",
  },
  {
    title: "Proactive reminders when you need them",
    description:
      "Get relevant memories and context pushed before meetings so you don't have to dig through notes at the last minute.",
  },
];

export default function HowToGetStarted() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
        How it works
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-center text-base text-text-1 md:text-lg">
        Three simple steps to turn your videos into actionable memory.
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
