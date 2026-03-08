"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "By recalling past conversations and performance notes, I'm able to quickly build targeted training materials that have led to improved performance.",
    name: "Luis Amezcua",
    role: "Sales",
    color: "#4A7C59",
  },
  {
    quote:
      "LUCI acts as my second brain, helping me recall, strategize, and plan out everything I work on throughout the day.",
    name: "Ben Morton",
    color: "#2D6A8F",
  },
  {
    quote:
      "It's my 'backup brain,' keeping me focused and organized. The journaling feature has become vital to my morning routine, giving me clarity to prioritize what truly matters.",
    name: "Sarah Meaney",
    role: "Marketing and operations",
    color: "#8B5E3C",
  },
  {
    quote:
      "I used to lose track of key decisions from meetings. Now LUCI captures everything and surfaces exactly what I need before my next call.",
    name: "David Chen",
    role: "Engineering",
    color: "#6B4C8A",
  },
  {
    quote:
      "The video memory feature changed how I review content. I can search four-hour recordings in seconds and pull exact quotes for reports.",
    name: "Priya Sharma",
    role: "Content Strategy",
    color: "#C4653A",
  },
  {
    quote:
      "My team's knowledge used to live in scattered docs and Slack threads. LUCI made it searchable and connected — onboarding new hires takes half the time now.",
    name: "James Okafor",
    role: "Operations Lead",
    color: "#3A7CA5",
  },
];

function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div
      className="flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [offset, setOffset] = useState(0);
  const cardWidth = 400;
  const gap = 20;
  const maxOffset = testimonials.length - 3; // 3 visible on desktop

  const slide = useCallback(
    (dir: number) => {
      setOffset((prev) => Math.max(0, Math.min(maxOffset, prev + dir)));
    },
    [maxOffset],
  );

  return (
    <section className="w-full" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-[100px] md:py-24">
        {/* Title */}
        <h2 className="text-[32px] font-bold text-text-0 max-w-3xl leading-[1.1] tracking-tight md:text-[44px]">
          What our users say
        </h2>

        {/* Cards Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: -(offset * (cardWidth + gap)) }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            style={{ gap }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex shrink-0 flex-col justify-between rounded-2xl border p-8 md:p-10"
                style={{
                  width: cardWidth,
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E8E5E0",
                  minHeight: 380,
                }}
              >
                {/* Quote */}
                <p className="text-[19px] font-medium text-text-0 max-w-3xl leading-[1.45] tracking-[-0.01em] md:text-[21px]">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="mt-10 flex items-center gap-3">
                  <Avatar name={t.name} color={t.color} />
                  <div className="flex flex-col">
                    <span
                      className="text-[14px] font-semibold leading-tight"
                      style={{ color: "#1A1A1A" }}
                    >
                      {t.name}
                    </span>
                    <span
                      className="text-[13px] leading-tight"
                      style={{ color: "#9B958E" }}
                    >
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => slide(-1)}
            disabled={offset === 0}
            className="flex size-11 items-center justify-center rounded-full border transition-colors duration-150 hover:bg-[#F0EEED] active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
            style={{ borderColor: "#DDD9D4", backgroundColor: "#F5F3F0" }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} style={{ color: "#6B6560" }} />
          </button>
          <button
            onClick={() => slide(1)}
            disabled={offset === maxOffset}
            className="flex size-11 items-center justify-center rounded-full border transition-colors duration-150 hover:bg-[#F0EEED] active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
            style={{ borderColor: "#DDD9D4", backgroundColor: "#F5F3F0" }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} style={{ color: "#6B6560" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
