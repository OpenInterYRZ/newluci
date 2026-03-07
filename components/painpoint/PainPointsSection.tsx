"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hash, FileText, Mail, Video, Database, Calendar } from "lucide-react";
import { LuciCenter } from "./LuciCenter";
import { CategoryCards } from "./CategoryCards";

gsap.registerPlugin(ScrollTrigger);

/* ─── Tool config ────────────────────────────────────── */

const tools = [
  {
    id: "slack",
    label: "Slack",
    Icon: Hash,
    iconColor: "text-white",
    bgColor: "#ff5c00",
    stroke: undefined as string | undefined,
    bgStyle: undefined as React.CSSProperties | undefined,
    badgeText: "47",
    badgeColor: "#EF4444",
    badgeContent: null as React.ReactNode,
    lineColor: "#ff5c00",
    notifications: [
      { text: "@zhang can you update the...", opacity: 0.7 },
      { text: "urgent: client wants revi...", opacity: 0.5 },
      { text: "meeting moved to 3pm", opacity: 0.35 },
    ],
  },
  {
    id: "notion",
    label: "Notion",
    Icon: FileText,
    iconColor: "text-white",
    bgColor: undefined as string | undefined,
    stroke: undefined as string | undefined,
    bgStyle: {
      background: "linear-gradient(180deg, #7B61FF 0%, #FF6B6B 100%)",
    },
    badgeText: "!",
    badgeColor: "#F59E0B",
    badgeContent: null as React.ReactNode,
    lineColor: "#7B61FF",
    notifications: [
      { text: "Q1 Pipeline Notes — 3 weeks old", opacity: 0.65 },
      {
        text: "Meeting Template — incomplete",
        opacity: 0.45,
        color: "#F59E0B",
      },
    ],
  },
  {
    id: "gmail",
    label: "Gmail",
    Icon: Mail,
    iconColor: "text-[#ff3b30]",
    bgColor: "#1a1a24",
    stroke: "#ff3b30",
    bgStyle: undefined as React.CSSProperties | undefined,
    badgeText: "128",
    badgeColor: "#EF4444",
    badgeContent: null as React.ReactNode,
    lineColor: "#ff3b30",
    notifications: [
      { text: "Acme Corp — Re: Proposal", opacity: 0.7 },
      {
        text: "Pipeline Review — starts in 15 min",
        opacity: 0.5,
        color: "#F59E0B",
      },
      { text: "+47 more unread...", opacity: 0.3 },
    ],
  },
  {
    id: "zoom",
    label: "Zoom",
    Icon: Video,
    iconColor: "text-white",
    bgColor: "#34D399",
    stroke: undefined as string | undefined,
    bgStyle: undefined as React.CSSProperties | undefined,
    badgeText: undefined as string | undefined,
    badgeColor: "#EF4444",
    badgeContent: (
      <span className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-white" />
        <span className="text-white text-[8px] font-bold">REC</span>
      </span>
    ),
    lineColor: "#34D399",
    notifications: [
      { text: '"We agreed to move the deadline..."', opacity: 0.6 },
      { text: "Recording 00:47:23 — unwatched", opacity: 0.4 },
    ],
  },
  {
    id: "hubspot",
    label: "HubSpot",
    Icon: Database,
    iconColor: "text-[#8c8b95]",
    bgColor: "#1a1a24",
    stroke: "#2a2a34",
    bgStyle: undefined as React.CSSProperties | undefined,
    badgeText: "12",
    badgeColor: "#EF4444",
    badgeContent: null as React.ReactNode,
    lineColor: "#5a5864",
    notifications: [
      { text: "Acme — $45K  Stale 14d", opacity: 0.6 },
      { text: "TechFlow — $28K  No activity", opacity: 0.4 },
    ],
  },
  {
    id: "calendar",
    label: "Calendar",
    Icon: Calendar,
    iconColor: "text-[#8c8b95]",
    bgColor: "#1a1a24",
    stroke: "#2a2a34",
    bgStyle: undefined as React.CSSProperties | undefined,
    badgeText: "5",
    badgeColor: "#F59E0B",
    badgeContent: null as React.ReactNode,
    lineColor: "#5a5864",
    notifications: [
      {
        text: "09:00 Sales Standup — CONFLICT",
        opacity: 0.6,
        color: "#EF4444",
      },
      { text: "09:00 Client Call — overlap!", opacity: 0.4, color: "#F59E0B" },
      { text: "+3 more today...", opacity: 0.3 },
    ],
  },
];

/* ─── Layout helpers ─────────────────────────────────── */

// Initial 2×3 grid positions (percentage of pinned container)
// Spread out wide — col gap ~22%, row gap ~14%
const GRID_2x3 = [
  // Row 1
  { xPct: 28, yPct: 38 },
  { xPct: 50, yPct: 38 },
  { xPct: 72, yPct: 38 },
  // Row 2
  { xPct: 28, yPct: 56 },
  { xPct: 50, yPct: 56 },
  { xPct: 72, yPct: 56 },
];

// After shrink: 1×6 row near top (~15% from top)
// Evenly spaced across the width, matching SVG toolSpacing
const ROW_Y_PCT = 14;

const getRowPositions = () => {
  const positions: { xPct: number; yPct: number }[] = [];
  for (let i = 0; i < 6; i++) {
    // Match SVG's toolSpacing: svgW / 7 * (i+1) → percentage
    const xPct = ((i + 1) / 7) * 100;
    positions.push({ xPct, yPct: ROW_Y_PCT });
  }
  return positions;
};

const ROW_1x6 = getRowPositions();

const ICON_SIZE_INITIAL = 80;
const ICON_SIZE_SMALL = 44;

/* ─── Main Component ─────────────────────────────────── */

export default function PainPointsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const luciRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const processingRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const toolRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setToolRef = useCallback(
    (idx: number) => (el: HTMLDivElement | null) => {
      toolRefs.current[idx] = el;
    },
    [],
  );

  useEffect(() => {
    const section = sectionRef.current;
    const pinned = pinnedRef.current;
    if (!section || !pinned) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: pinned,
          scrub: 1,
          start: "top top",
          end: "bottom bottom",
        },
      });

      /* ── Phase 1 (0–20%): Hold static — big 2×3 spread ── */
      tl.to({}, { duration: 0.2 });

      /* ── Phase 2 (20–45%): Shrink + reposition to 1×6 row at top ── */

      // For each tool: animate position and size
      toolRefs.current.forEach((toolEl, i) => {
        if (!toolEl) return;

        const target = ROW_1x6[i];
        const badge = toolEl.querySelector("[data-badge]");
        const notifs = toolEl.querySelector("[data-notifs]");
        const label = toolEl.querySelector("[data-label]");
        const iconBox = toolEl.querySelector("[data-icon-box]");
        const iconSvg = toolEl.querySelector("[data-icon-svg]");

        // Badges fade out
        if (badge) {
          tl.to(
            badge,
            { opacity: 0, scale: 0.3, duration: 0.06, ease: "power2.in" },
            0.2 + i * 0.008,
          );
        }

        // Notifications fade out
        if (notifs) {
          tl.to(
            notifs,
            { opacity: 0, y: -10, duration: 0.06, ease: "power2.in" },
            0.2 + i * 0.008,
          );
        }

        // Labels fade out
        if (label) {
          tl.to(
            label,
            { opacity: 0, duration: 0.05, ease: "power2.in" },
            0.24,
          );
        }

        // Move the whole tool element to its row position
        tl.to(
          toolEl,
          {
            left: `${target.xPct}%`,
            top: `${target.yPct}%`,
            duration: 0.18,
            ease: "power2.inOut",
          },
          0.26,
        );

        // Shrink icon box
        if (iconBox) {
          tl.to(
            iconBox,
            {
              width: ICON_SIZE_SMALL,
              height: ICON_SIZE_SMALL,
              duration: 0.18,
              ease: "power2.inOut",
            },
            0.26,
          );
        }

        // Shrink icon svg inside
        if (iconSvg) {
          tl.to(
            iconSvg,
            { width: 20, height: 20, duration: 0.18, ease: "power2.inOut" },
            0.26,
          );
        }
      });

      // Header fades
      tl.to(
        headerRef.current,
        { opacity: 0, y: -40, duration: 0.12, ease: "power2.in" },
        0.22,
      );

      /* ── Phase 3 (45–60%): LUCI appears + upper converging lines ── */
      tl.fromTo(
        luciRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.1, ease: "back.out(1.7)" },
        0.45,
      );

      tl.fromTo(
        processingRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.08, ease: "power2.out" },
        0.5,
      );

      const upperPaths = svgRef.current?.querySelectorAll(".upper-path");
      if (upperPaths?.length) {
        upperPaths.forEach((path) => {
          const el = path as SVGPathElement;
          const len = el.getTotalLength();
          gsap.set(el, {
            strokeDasharray: len,
            strokeDashoffset: len,
            opacity: 1,
          });
        });
        tl.to(
          upperPaths,
          {
            strokeDashoffset: 0,
            duration: 0.12,
            stagger: 0.015,
            ease: "power2.inOut",
          },
          0.47,
        );
      }

      /* ── Phase 4 (60–80%): Lower lines + LUCI glow ── */
      tl.to(
        luciRef.current,
        {
          boxShadow:
            "0 0 80px rgba(255,92,0,0.35), 0 0 160px rgba(255,92,0,0.15), 0 0 30px rgba(255,255,255,0.1)",
          duration: 0.1,
          ease: "power2.inOut",
        },
        0.6,
      );

      tl.to(
        processingRef.current,
        { opacity: 0, duration: 0.05 },
        0.72,
      );

      const lowerPaths = svgRef.current?.querySelectorAll(".lower-path");
      if (lowerPaths?.length) {
        lowerPaths.forEach((path) => {
          const el = path as SVGPathElement;
          const len = el.getTotalLength();
          gsap.set(el, {
            strokeDasharray: len,
            strokeDashoffset: len,
            opacity: 1,
          });
        });
        tl.to(
          lowerPaths,
          {
            strokeDashoffset: 0,
            duration: 0.12,
            stagger: 0.03,
            ease: "power2.out",
          },
          0.65,
        );
      }

      /* ── Phase 5 (80–100%): Category cards ── */
      tl.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
        0.8,
      );

      tl.to(
        luciRef.current,
        {
          boxShadow:
            "0 0 60px rgba(255,92,0,0.2), 0 0 120px rgba(255,92,0,0.08)",
          duration: 0.1,
        },
        0.9,
      );
    }, section);

    return () => ctx.revert();
  }, []);

  /* ─── SVG geometry ─────────────────────────────────── */
  // SVG covers the area between the icon row and the bottom cards area.
  // LUCI sits at vertical center of this zone.
  // We use the same coordinate system for SVG and LUCI positioning.
  const svgW = 1000;
  const svgH = 600;
  const cx = svgW / 2;
  // LUCI center is at 45% of the SVG height (biased toward top since icons are at top)
  const luciCy = svgH * 0.42;
  const colPositions = [svgW * 0.25, svgW * 0.5, svgW * 0.75];

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: "300vh", background: "#0a0a0f" }}
    >
      <div
        ref={pinnedRef}
        className="h-screen w-full overflow-hidden relative"
        style={{ background: "#0a0a0f" }}
      >
        {/* ── Header (absolute, centered upper area) ── */}
        <div
          ref={headerRef}
          className="absolute z-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-center"
          style={{ top: "10%" }}
        >
          <h2 className="text-white font-extrabold text-3xl md:text-4xl lg:text-[42px] leading-[1.15] font-[family-name:var(--font-manrope,Manrope)]">
            Every tool promises to save you time.
            <br />
            None of them talk to each other.
          </h2>
          <p className="text-[#5a5864] text-base font-[family-name:var(--font-manrope,Manrope)]">
            Your tools are siloed. LUCI connects them so nothing falls through
            the cracks.
          </p>
        </div>

        {/* ── Tool icons (absolutely positioned, animate from 2×3 → 1×6) ── */}
        {tools.map((t, i) => {
          const IconComp = t.Icon;
          const pos = GRID_2x3[i];
          return (
            <div
              key={t.id}
              ref={setToolRef(i)}
              className="absolute z-20 flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${pos.xPct}%`, top: `${pos.yPct}%` }}
            >
              {/* Icon box */}
              <div className="relative">
                <div
                  data-icon-box
                  className="flex items-center justify-center rounded-2xl overflow-hidden"
                  style={{
                    width: ICON_SIZE_INITIAL,
                    height: ICON_SIZE_INITIAL,
                    backgroundColor: t.bgColor || "transparent",
                    border: t.stroke
                      ? `1.5px solid ${t.stroke}`
                      : undefined,
                    ...t.bgStyle,
                  }}
                >
                  <IconComp
                    data-icon-svg
                    className={`${t.iconColor}`}
                    style={{ width: 36, height: 36 }}
                  />
                </div>

                {/* Badge */}
                {(t.badgeText || t.badgeContent) && (
                  <div
                    data-badge
                    className="absolute -top-2 -right-2 flex items-center justify-center gap-1 rounded-full px-1.5 min-w-[24px] h-[22px]"
                    style={{ backgroundColor: t.badgeColor }}
                  >
                    {t.badgeContent || (
                      <span className="text-white text-[11px] font-bold leading-none">
                        {t.badgeText}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Label */}
              <span
                data-label
                className="text-xs font-medium text-[#5a5864]"
              >
                {t.label}
              </span>

              {/* Notification overflow */}
              {t.notifications.length > 0 && (
                <div
                  data-notifs
                  className="flex flex-col gap-1.5"
                >
                  {t.notifications.map((n, j) => (
                    <div
                      key={j}
                      className="px-2.5 py-1.5 rounded-lg text-[10px] border border-[#2a2a34] bg-[#1a1a24] whitespace-nowrap"
                      style={{
                        opacity: n.opacity,
                        color:
                          (n as { color?: string }).color || "#6f6e78",
                      }}
                    >
                      {n.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* ── SVG layer: converging + diverging paths ── */}
        {/* Positioned to cover the zone from icon row to cards area */}
        <svg
          ref={svgRef}
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="absolute pointer-events-none z-10"
          style={{
            left: "50%",
            top: `${ROW_Y_PCT}%`,
            width: "80%",
            height: "68%",
            transform: "translateX(-50%)",
          }}
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Upper converging: from each icon position → LUCI center */}
          {tools.map((t, i) => {
            // Icon X positions match the ROW_1x6 positions mapped into SVG coords
            // ROW_1x6[i].xPct is in % of container, SVG covers 80% of container centered
            // So SVG left edge = 10% of container, right edge = 90%
            // Map: containerPct → svgX
            const containerPct = ROW_1x6[i].xPct;
            const svgX = ((containerPct - 10) / 80) * svgW;
            const d = `M ${svgX} 0 C ${svgX} ${luciCy * 0.5}, ${cx} ${luciCy * 0.5}, ${cx} ${luciCy}`;
            return (
              <path
                key={`u-${i}`}
                className="upper-path"
                d={d}
                stroke={t.lineColor}
                strokeWidth={2}
                strokeLinecap="round"
                opacity={0}
              />
            );
          })}
          {/* Lower diverging: from LUCI center → 3 column positions */}
          {colPositions.map((endX, i) => {
            const colors = ["#EF4444", "#F59E0B", "#10B981"];
            const d = `M ${cx} ${luciCy} C ${cx} ${luciCy + (svgH - luciCy) * 0.5}, ${endX} ${luciCy + (svgH - luciCy) * 0.5}, ${endX} ${svgH}`;
            return (
              <path
                key={`l-${i}`}
                className="lower-path"
                d={d}
                stroke={colors[i]}
                strokeWidth={2}
                strokeLinecap="round"
                opacity={0}
              />
            );
          })}
        </svg>

        {/* ── LUCI Center — positioned to match SVG's luciCy ── */}
        {/* SVG top is at ROW_Y_PCT%, height 68%, so luciCy (42% of SVG) maps to: */}
        {/* top = ROW_Y_PCT + 68 * 0.42 = 14 + 28.56 = ~42.5% */}
        <div
          ref={luciRef}
          className="absolute z-20 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: 0,
            top: `${ROW_Y_PCT + 68 * (luciCy / svgH)}%`,
          }}
        >
          <LuciCenter size={100} glowIntensity="high" />
        </div>

        {/* Processing badge — just below LUCI */}
        <div
          ref={processingRef}
          className="absolute z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full left-1/2 -translate-x-1/2"
          style={{
            opacity: 0,
            top: `${ROW_Y_PCT + 68 * (luciCy / svgH) + 5}%`,
            backgroundColor: "rgba(255,92,0,0.12)",
            border: "1px solid rgba(255,92,0,0.25)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#ff5c00] animate-pulse" />
          <span className="text-[#ff5c00] text-[11px] font-bold tracking-widest font-[family-name:var(--font-manrope,Manrope)]">
            PROCESSING
          </span>
        </div>

        {/* ── Category Cards (bottom) ── */}
        <div
          ref={cardsRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          style={{ opacity: 0 }}
        >
          <CategoryCards />
        </div>
      </div>
    </section>
  );
}
