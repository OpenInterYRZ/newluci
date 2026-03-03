"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const features = [
  {
    id: "captures",
    num: "01",
    label: "Captures",
    description:
      "LUCI Pin records your day — meetings, presentations, whiteboard scribbles — from your first coffee to your last email.",
    videoSrc: "/videos/see.mp4",
  },
  {
    id: "understands",
    num: "02",
    label: "Understands",
    description:
      "LUCI's AI organizes everything into searchable sessions, extracts action items, and builds a growing knowledge base of your world.",
    videoSrc: "/videos/remember.mp4",
  },
  {
    id: "analyzes",
    num: "03",
    label: "Analyzes",
    description:
      "LUCI doesn't just file it away. It connects patterns across your workflow and your industry, surfacing insights and opportunities aligned with your goals.",
    videoSrc: "/videos/see.mp4",
  },
  {
    id: "acts",
    num: "04",
    label: "Acts",
    description:
      "LUCI Agent gets to work — plans your day, sends follow-ups, drafts the deck, flags the risks. Like a chief of staff who's read every email and sat in every meeting.",
    videoSrc: "/videos/act.mp4",
  },
];

function VideoPlayer({ src, isActive }: { src: string; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className="h-full w-full object-cover"
    />
  );
}

function AccordionItem({
  feature,
  isOpen,
  onToggle,
}: {
  feature: (typeof features)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const measure = useCallback(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <div className="border-b border-text-0/8 last:border-b-0">
      {/* Header - always visible */}
      <button
        onClick={onToggle}
        className="group flex w-full items-center gap-6 px-2 py-7 text-left md:gap-10 md:px-4"
      >
        {/* Number */}
        <span
          className={`min-w-[48px] font-mono text-sm font-medium tracking-wide transition-colors duration-300 ${
            isOpen
              ? "text-primary"
              : "text-text-0/25 group-hover:text-text-0/40"
          }`}
        >
          {feature.num}
        </span>

        {/* Label */}
        <span
          className={`text-[22px] font-bold tracking-tight transition-colors duration-300 md:text-[26px] ${
            isOpen ? "text-text-0" : "text-text-0/70 group-hover:text-text-0"
          }`}
        >
          {feature.label}
        </span>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Toggle icon */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={20}
            className={`transition-colors duration-300 ${
              isOpen
                ? "text-primary"
                : "text-text-0/20 group-hover:text-text-0/40"
            }`}
          />
        </motion.span>
      </button>

      {/* Expandable content */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? contentHeight || "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
          opacity: { duration: 0.3, delay: isOpen ? 0.1 : 0 },
        }}
        className="overflow-hidden"
      >
        <div ref={contentRef}>
          <div className="flex flex-col gap-8 px-2 pb-10 md:flex-row md:items-stretch md:gap-12 md:px-4">
            {/* Left: text */}
            <div className="flex flex-1 flex-col justify-center gap-6 md:py-4">
              <span className="w-fit rounded-full bg-primary/15 px-3.5 py-1 text-xs font-semibold text-primary">
                Step {feature.num}
              </span>

              <p className="max-w-[480px] text-[15px] leading-[1.7] text-text-2 md:text-base">
                {feature.description}
              </p>
            </div>

            {/* Right: video */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-text-0 md:w-full md:max-w-100 h-full ">
              <VideoPlayer src={feature.videoSrc} isActive={isOpen} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function AccordionFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? -1 : i);
  };

  return (
    <section className="relative w-full bg-web-bg-0 py-20 md:py-20">
      <div className="relative z-10 mx-auto max-w-[1420px] px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-6">
          <h2 className="text-center text-[clamp(36px,5vw,52px)] font-extrabold leading-[1.08] tracking-tight text-text-0">
            From capture to action.
          </h2>
          <p className="text-center text-lg text-text-3">
            Four steps. Zero effort. LUCI handles your entire workflow.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-text-0/8">
          {features.map((feature, i) => (
            <AccordionItem
              key={feature.id}
              feature={feature}
              isOpen={activeIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
