"use client";

import { useRef, useState, useEffect, useCallback } from "react";
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
    role: "Product",
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
      className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const slide = useCallback((dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll by one card width + gap
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const distance = card ? card.offsetWidth + 20 : 400;
    el.scrollBy({ left: dir * distance, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full bg-web-bg-0">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-8 py-16 px-5 md:py-24">
        {/* Header row */}
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-text-0 leading-[1.1] tracking-tight">
            What our users say
          </h2>

          {/* Navigation Arrows — desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => slide(-1)}
              disabled={!canScrollLeft}
              className="flex size-10 items-center justify-center rounded-full border border-grey-1 bg-grey-0 text-grey-5 transition-colors duration-150 hover:bg-grey-1 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => slide(1)}
              disabled={!canScrollRight}
              className="flex size-10 items-center justify-center rounded-full border border-grey-1 bg-grey-0 text-grey-5 transition-colors duration-150 hover:bg-grey-1 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scroll container — native swipe + scroll-snap */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hidden -mx-6 px-6 md:-mx-5 md:px-5"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-card
              className="flex w-[85vw] md:w-[380px] lg:w-[420px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-grey-1 bg-bg-0 p-7 md:p-9"
            >
              {/* Quote mark */}
              <div>
                <span className="text-3xl leading-none text-primary font-serif select-none">
                  &ldquo;
                </span>
                <p className="mt-2 text-[17px] md:text-[19px] font-medium text-text-0 leading-[1.5] tracking-[-0.01em]">
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="mt-8 flex items-center gap-3">
                <Avatar name={t.name} color={t.color} />
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-text-0 leading-tight">
                    {t.name}
                  </span>
                  {t.role && (
                    <span className="text-sm text-grey-4 leading-tight">
                      {t.role}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
