"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const milestones = [
  {
    id: "without",
    label: "Without LUCI",
    cx: 240,
    cy: 280,
    labelX: -30,
    labelY: -44,
    cards: [
      {
        title: "Video Review Time",
        value: 5,
        suffix: "+ hrs/week",
        desc: "Team members manually scrub hours of footage to find one quote or decision. Critical moments are buried in recordings nobody rewatches.",
      },
      {
        title: "Knowledge Retention",
        value: 15,
        prefix: "~",
        suffix: "%",
        desc: "Insights disappear the moment a meeting ends. When someone leaves, their context walks out the door with them.",
      },
    ],
  },
  {
    id: "with",
    label: "Using LUCI",
    cx: 560,
    cy: 100,
    labelX: -24,
    labelY: -48,
    cards: [
      {
        title: "Video Review Time",
        value: 85,
        prefix: "-",
        suffix: "%",
        desc: "AI-powered search finds any moment instantly. Hours of scrubbing replaced by a single query across all visual and spoken content.",
      },
      {
        title: "Knowledge Retention",
        value: 3,
        prefix: "+",
        suffix: "x",
        desc: "Every meeting, decision, and insight automatically indexed and connected. Nothing is lost when people leave or projects change.",
      },
    ],
  },
];

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const spring = useSpring(0, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => setCurrent(v));
    return unsubscribe;
  }, [display]);

  return (
    <span>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}

export default function BeforeAfter() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = milestones[activeIdx];

  // Curve passes through both milestone points: (240,280) and (560,100)
  const curvePath =
    "M 40 330 C 120 320, 180 300, 240 280 S 380 195, 440 150 C 490 125, 530 108, 560 100 C 620 78, 690 40, 760 -10";
  const fillPath =
    "M 40 330 C 120 320, 180 300, 240 280 S 380 195, 440 150 C 490 125, 530 108, 560 100 C 620 78, 690 40, 760 -10 L 760 400 L 40 400 Z";

  return (
    <section className="w-full">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        {/* Section header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            The Difference
          </span>
          <h2 className="mt-3 text-[28px] md:text-[40px] font-semibold leading-tight text-text-0">
            Everything changes with LUCI
          </h2>
        </motion.div>

        {/* Curve card */}
        <motion.div
          className="relative rounded-t-3xl bg-white border border-[#E5E7EB] border-b-0 overflow-hidden"
          style={{ aspectRatio: "2.4 / 1" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute top-8 left-8 md:top-12 md:left-12 z-10">
            <h3 className="text-[22px] md:text-[32px] font-semibold leading-[1.2] text-[#1A1A2E] max-w-[340px]">
              Transform Your Team&apos;s
              <br />
              Operational Efficiency
            </h3>
          </div>

          <svg
            viewBox="0 0 760 400"
            fill="none"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="0.3" y2="1">
                <stop offset="0%" stopColor="#ff5c00" stopOpacity={0.12} />
                <stop offset="100%" stopColor="#ff5c00" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <motion.path
              d={fillPath}
              fill="url(#curveGrad)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.path
              d={curvePath}
              stroke="#ff5c00"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
            />

            {milestones.map((m, i) => (
              <g
                key={m.id}
                className="cursor-pointer"
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
              >
                <circle cx={m.cx} cy={m.cy} r="28" fill="transparent" />

                {activeIdx === i && (
                  <motion.circle
                    cx={m.cx}
                    cy={m.cy}
                    r="22"
                    fill="none"
                    stroke="#ff5c00"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0.4, 0], scale: [0.8, 1.3] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}

                <circle
                  cx={m.cx}
                  cy={m.cy}
                  r="14"
                  fill="white"
                  stroke={activeIdx === i ? "#ff5c00" : "#1A1A2E"}
                  strokeWidth="3"
                  className="transition-colors duration-200"
                />
                <circle
                  cx={m.cx}
                  cy={m.cy}
                  r="5"
                  fill={activeIdx === i ? "#ff5c00" : "#1A1A2E"}
                  className="transition-colors duration-200"
                />

                <rect
                  x={m.cx + m.labelX}
                  y={m.cy + m.labelY}
                  width={m.label.length * 8.5 + 28}
                  height="32"
                  rx="16"
                  fill={activeIdx === i ? "#ff5c00" : "#F1F3F5"}
                  className="transition-colors duration-200"
                />
                <text
                  x={m.cx + m.labelX + (m.label.length * 8.5 + 28) / 2}
                  y={m.cy + m.labelY + 21}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="600"
                  fontFamily="inherit"
                  fill={activeIdx === i ? "white" : "#6B7280"}
                  className="transition-colors duration-200 pointer-events-none"
                >
                  {m.label}
                </text>
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Bottom info panel */}
        <div className="rounded-b-3xl bg-[#ECEDEF] border border-t-0 border-[#E5E7EB] p-6 md:p-8">
          <div className="flex items-center gap-4 md:gap-6 mb-6">
            {milestones.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActiveIdx(i)}
                className={`text-[14px] md:text-[15px] font-medium transition-colors duration-200 ${
                  activeIdx === i
                    ? "text-primary"
                    : "text-text-2 hover:text-text-0"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[0, 1].map((cardIdx) => (
              <div
                key={cardIdx}
                className="rounded-2xl bg-[#E0E1E4] p-6 md:p-8"
              >
                <span className="text-[13px] font-medium text-text-2">
                  {active.cards[cardIdx].title}
                </span>
                <div className="mt-2 text-[24px] md:text-[28px] font-bold text-text-0 leading-tight">
                  <AnimatedNumber
                    value={active.cards[cardIdx].value}
                    prefix={active.cards[cardIdx].prefix}
                    suffix={active.cards[cardIdx].suffix}
                  />
                </div>
                <motion.p
                  key={active.id}
                  className="mt-3 text-[13px] leading-relaxed text-text-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {active.cards[cardIdx].desc}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
