"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

function AnimatedBlock({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const statements = [
  {
    number: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="2.5" fill="#6366f1" />
        <circle cx="8" cy="10" r="1.8" fill="#818cf8" />
        <circle cx="24" cy="10" r="1.5" fill="#a78bfa" />
        <circle cx="10" cy="22" r="1.2" fill="#818cf8" />
        <circle cx="22" cy="22" r="1.8" fill="#6366f1" />
        <circle cx="16" cy="6" r="1" fill="#c4b5fd" />
        <circle cx="6" cy="16" r="1" fill="#c4b5fd" />
        <circle cx="26" cy="16" r="1.2" fill="#a78bfa" />
        <circle cx="12" cy="14" r="0.8" fill="#818cf8" />
        <circle cx="20" cy="13" r="0.8" fill="#a78bfa" />
        <circle cx="14" cy="20" r="0.8" fill="#818cf8" />
        <circle cx="20" cy="19" r="0.8" fill="#6366f1" />
      </svg>
    ),
    text: "Every day you generate countless ideas, conversations, meetings, and notes — scattered across a dozen tools, ultimately forgotten.",
  },
  {
    number: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4c-4.4 0-8 3.1-8 7 0 1.6.6 3 1.5 4.2.3.4.5.9.5 1.3v1c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-1c0-.5.2-.9.5-1.3.9-1.2 1.5-2.6 1.5-4.2 0-3.9-3.6-7-8-7z"
          fill="url(#brain-grad)"
        />
        <path d="M12 21v1.5c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V21" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 11c0-1.7 1.3-3 3-3s3 1.3 3 3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <circle cx="14" cy="13" r="1" fill="#fff" opacity="0.5" />
        <circle cx="18" cy="13" r="1" fill="#fff" opacity="0.5" />
        <path d="M16 8v5M13.5 10.5L16 13l2.5-2.5" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <defs>
          <linearGradient id="brain-grad" x1="8" y1="4" x2="24" y2="20">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "Today\u2019s AI assistants are smart, but they don\u2019t know you. Every conversation starts from zero — a genius with amnesia.",
  },
  {
    number: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 16h20M20 10l6 6-6 6"
          stroke="url(#arrow-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="arrow-grad" x1="6" y1="16" x2="26" y2="16">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "We knew this had to change.",
  },
];

export default function WhyLuci() {
  return (
    <section className="py-32 sm:py-40 px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left — sticky title */}
          <div className="lg:w-[340px] shrink-0">
            <div className="lg:sticky lg:top-32">
              <AnimatedBlock>
                <p className="text-sm font-semibold tracking-widest uppercase text-web-text-1/50 mb-4">
                  About
                </p>
                <h2 className="text-[2.75rem] sm:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-web-text-0">
                  Why we
                  <br />
                  built LUCI
                </h2>
              </AnimatedBlock>
            </div>
          </div>

          {/* Right — numbered statements */}
          <div className="flex-1 space-y-14 sm:space-y-16 lg:pt-2">
            {statements.map((s, i) => (
              <AnimatedBlock key={s.number} delay={i * 0.12}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[2rem] sm:text-[2.5rem] font-extrabold leading-none bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent">
                    {s.number}
                  </span>
                  {s.icon}
                </div>
                <p className="text-[1.05rem] sm:text-lg leading-relaxed text-web-text-0/80 max-w-lg">
                  {s.text}
                </p>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
