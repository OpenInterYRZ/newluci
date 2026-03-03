"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, BrainCircuit, Sparkles, Wand2 } from "lucide-react";

const steps = [
  {
    id: "captures",
    num: "01",
    label: "CAPTURES",
    icon: Video,
    description:
      "LUCI Pin records your day — meetings, presentations, whiteboard scribbles — with zero friction.",
    imageSrc: "/videos/see.mp4",
  },
  {
    id: "understands",
    num: "02",
    label: "UNDERSTANDS",
    icon: BrainCircuit,
    description:
      "Multi-modal AI models process audio and visual cues to grasp context, tone, and hidden intent.",
    imageSrc: "/videos/remember.mp4",
  },
  {
    id: "analyzes",
    num: "03",
    label: "ANALYZES",
    icon: Sparkles,
    description:
      "Deep synthesis identifies patterns, extracts action items, and cross-references your entire knowledge base.",
    imageSrc: "/videos/see.mp4",
  },
  {
    id: "acts",
    num: "04",
    label: "ACTS",
    icon: Wand2,
    description:
      "Automated workflows execute follow-ups, update calendars, and draft emails based on the context of your live experiences.",
    imageSrc: "/videos/act.mp4",
  },
];

export default function FeaturesTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-bg-0 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-[clamp(40px,5.5vw,64px)] font-extrabold leading-[1.05] tracking-tight text-text-0">
            Intelligence in Every
            <br />
            Moment
          </h2>
          <p className="mt-5 max-w-[480px] text-base leading-relaxed text-text-2 md:text-[17px]">
            Experience the seamless integration of AI into your daily life
            through our advanced multi-modal synthesis.
          </p>
        </div>

        {/* Content: steps + image */}
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-40">
          {/* Left: timeline steps */}
          <div className="relative flex-shrink-0 lg:w-[420px]">
            {steps.map((step, i) => {
              const isActive = activeIndex === i;
              const isLast = i === steps.length - 1;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveIndex(i)}
                  className="group relative flex w-full items-stretch gap-4 text-left"
                >
                  {/* Timeline column: dot + line */}
                  <div className="relative flex w-5 flex-shrink-0 flex-col items-center">
                    {/* Dot */}
                    <motion.div
                      className="relative z-10 mt-1 rounded-full"
                      animate={{
                        width: isActive ? 14 : 10,
                        height: isActive ? 14 : 10,
                        backgroundColor: isActive
                          ? "var(--primary)"
                          : "var(--grey-2)",
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    {/* Connecting line */}
                    {!isLast && <div className="w-[2px] flex-1 bg-grey-1" />}
                  </div>

                  {/* Step content */}
                  <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
                    {/* Icon + label row */}
                    <div className="mb-3 flex items-center gap-2">
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        className={`transition-colors duration-300 ${
                          isActive ? "text-primary" : "text-text-3"
                        }`}
                      />
                      <span
                        className={`text-[13px] font-bold tracking-[0.1em] transition-colors duration-300 ${
                          isActive
                            ? "text-primary"
                            : "text-text-3 group-hover:text-text-2"
                        }`}
                      >
                        {step.num}. {step.label}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className={`max-w-[360px] text-[15px] leading-[1.7] transition-colors duration-300 ${
                        isActive
                          ? "text-text-1"
                          : "text-text-3 group-hover:text-text-2"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: image / video area */}
          <div className="relative flex-1">
            <div className="sticky top-28 overflow-hidden rounded-2xl bg-grey-9/60 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.12)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="aspect-[16/10] w-full"
                >
                  <video
                    src={steps[activeIndex].imageSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
