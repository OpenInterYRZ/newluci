"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  siFigma,
  siGmail,
  siGoogledrive,
  siJira,
  siLinear,
  siNotion,
  siZoom,
} from "simple-icons";
import { LuciCenter } from "./LuciCenter";
import { CategoryCards } from "./CategoryCards";

gsap.registerPlugin(ScrollTrigger);

/* ─── Simple Icons as React SVGs ────────────────────── */
type SvgIconProps = React.SVGProps<SVGSVGElement> & {
  "data-icon-svg"?: boolean;
};

function makeSimpleIcon(icon: { path: string; hex: string }, fillOverride?: string) {
  const Comp = (props: SvgIconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill={fillOverride || `#${icon.hex}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={icon.path} />
    </svg>
  );
  Comp.displayName = icon.hex;
  return Comp;
}

// Slack SVG (not in simple-icons v16)
function SlackIcon(props: SvgIconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" />
      <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" />
      <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" />
      <path fill="#ECB22E" d="M15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z" />
    </svg>
  );
}

const SlackIconComp = SlackIcon;
const NotionIcon = makeSimpleIcon(siNotion, "#ffffff");
const FigmaIcon = makeSimpleIcon(siFigma);
const GmailIcon = makeSimpleIcon(siGmail);
const JiraIcon = makeSimpleIcon(siJira, "#ffffff");
const ZoomIcon = makeSimpleIcon(siZoom, "#ffffff");
const GDriveIcon = makeSimpleIcon(siGoogledrive);
const LinearIcon = makeSimpleIcon(siLinear, "#ffffff");

/* ─── Tool config ────────────────────────────────────── */

const tools = [
  {
    id: "slack",
    label: "Slack",
    Icon: SlackIconComp,
    bgColor: "#4A154B",
    badgeText: "47",
    badgeColor: "#EF4444",
    badgeContent: null as React.ReactNode,
    notifications: [
      { text: "@zhang can you update the...", opacity: 0.7 },
      { text: "urgent: client wants revi...", opacity: 0.5 },
      { text: "meeting moved to 3pm", opacity: 0.35 },
    ],
  },
  {
    id: "notion",
    label: "Notion",
    Icon: NotionIcon,
    bgColor: "#000000",
    badgeText: "!",
    badgeColor: "#F59E0B",
    badgeContent: null as React.ReactNode,
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
    id: "figma",
    label: "Figma",
    Icon: FigmaIcon,
    bgColor: "#1E1E1E",
    badgeText: "3",
    badgeColor: "#F59E0B",
    badgeContent: null as React.ReactNode,
    notifications: [
      { text: "New comment on Dashboard v2", opacity: 0.7 },
      { text: "Design review requested", opacity: 0.5 },
    ],
  },
  {
    id: "gmail",
    label: "Gmail",
    Icon: GmailIcon,
    bgColor: "#ffffff",
    badgeText: "128",
    badgeColor: "#EF4444",
    badgeContent: null as React.ReactNode,
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
    id: "jira",
    label: "Jira",
    Icon: JiraIcon,
    bgColor: "#0052CC",
    badgeText: "12",
    badgeColor: "#EF4444",
    badgeContent: null as React.ReactNode,
    notifications: [
      { text: "PROJ-142 moved to In Review", opacity: 0.6 },
      { text: "Sprint ends in 2 days", opacity: 0.4 },
    ],
  },
  {
    id: "zoom",
    label: "Zoom",
    Icon: ZoomIcon,
    bgColor: "#0B5CFF",
    badgeText: undefined as string | undefined,
    badgeColor: "#EF4444",
    badgeContent: (
      <span className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-white" />
        <span className="text-white text-[8px] font-bold">REC</span>
      </span>
    ),
    notifications: [
      { text: '"We agreed to move the deadline..."', opacity: 0.6 },
      { text: "Recording 00:47:23 — unwatched", opacity: 0.4 },
    ],
  },
  {
    id: "gdrive",
    label: "Google Drive",
    Icon: GDriveIcon,
    bgColor: "#ffffff",
    badgeText: "6",
    badgeColor: "#F59E0B",
    badgeContent: null as React.ReactNode,
    notifications: [
      { text: "Acme Proposal v3 — who has latest?", opacity: 0.65 },
      { text: "SOW draft — 2 weeks stale", opacity: 0.45 },
    ],
  },
  {
    id: "linear",
    label: "Linear",
    Icon: LinearIcon,
    bgColor: "#5E6AD2",
    badgeText: "9",
    badgeColor: "#EF4444",
    badgeContent: null as React.ReactNode,
    notifications: [
      { text: "ENG-284 blocked — needs review", opacity: 0.7 },
      { text: "3 issues past due date", opacity: 0.5 },
      { text: "Cycle progress: 42%", opacity: 0.35 },
    ],
  },
];

/* ─── Layout constants ───────────────────────────────── */

// Initial 2×4 grid (percentage of pinned container)
// Each icon has a slight Y offset and rotation for a scattered, organic feel
const GRID_INIT = [
  // Row 1: 4 icons
  { xPct: 30, yPct: 26, rotate: -6 },
  { xPct: 42, yPct: 30, rotate: 4 },
  { xPct: 58, yPct: 25, rotate: -3 },
  { xPct: 70, yPct: 31, rotate: 7 },
  // Row 2: 4 icons
  { xPct: 30, yPct: 48, rotate: 5 },
  { xPct: 42, yPct: 44, rotate: -5 },
  { xPct: 58, yPct: 49, rotate: 3 },
  { xPct: 70, yPct: 43, rotate: -7 },
];

// After shrink: 1×8 row (same vertical level as initial top row)
const ROW_Y_PCT = 28;
const ROW_FINAL = tools.map((_, i) => ({
  xPct: 20 + (i * 60) / (tools.length - 1), // 20% to 80% evenly
  yPct: ROW_Y_PCT,
}));

const ICON_BIG = 100;
const ICON_SMALL = 80;

/* ─── SVG geometry for the wiring diagram ─────────────── */
// SVG covers from just below icons to just above cards
// All coordinates in SVG viewBox units
const SVG_W = 1000;
const SVG_H = 500;
const SVG_CX = SVG_W / 2;

// Upper wiring: icons → LUCI
// Each icon drops down vertically, then bends horizontal to a junction row,
// then routes to center vertical line, then down to LUCI.
const UPPER_JUNCTION_Y = 60; // horizontal routing layer
const LUCI_Y = 150; // where LUCI sits in SVG coords

// Lower wiring: LUCI → 3 categories
const LOWER_JUNCTION_Y = 260; // horizontal routing layer below LUCI
const LOWER_END_Y = 380; // where category cards connect

// Icon X positions mapped into SVG coords
// SVG covers full container width (0–100%), so containerPct maps directly
// svgX = (pct / 100) * SVG_W
const iconSvgXs = ROW_FINAL.map((p) => (p.xPct / 100) * SVG_W);

// Category X positions mapped same way (20%, 50%, 80% of container)
const catXs = [SVG_W * 0.2, SVG_W * 0.5, SVG_W * 0.8];

// Line style
const LINE_COLOR = "rgba(255,255,255,0.2)";
const LINE_W = 1.5;
const DOT_R = 3.5;
const DOT_FILL = "rgba(255,255,255,0.6)";

/* ─── Build SVG paths for upper wiring ─────────────────── */
// Pattern: icon bottom → vertical down → horizontal to center → vertical to LUCI
function buildUpperPath(iconX: number): string {
  // Vertical down from icon to junction row
  // Then horizontal from iconX to center
  // Then vertical down to LUCI
  return [
    `M ${iconX} 0`,
    `L ${iconX} ${UPPER_JUNCTION_Y}`,
    `L ${SVG_CX} ${UPPER_JUNCTION_Y}`,
    `L ${SVG_CX} ${LUCI_Y}`,
  ].join(" ");
}

// Junction dots for upper paths: at the bend point and at the horizontal meet
function upperDots(iconX: number): { cx: number; cy: number }[] {
  return [{ cx: iconX, cy: UPPER_JUNCTION_Y }];
}

/* ─── Build SVG paths for lower wiring ────────────────── */
function buildLowerPath(catX: number): string {
  return [
    `M ${SVG_CX} ${LUCI_Y}`,
    `L ${SVG_CX} ${LOWER_JUNCTION_Y}`,
    `L ${catX} ${LOWER_JUNCTION_Y}`,
    `L ${catX} ${LOWER_END_Y}`,
  ].join(" ");
}

function lowerDots(catX: number): { cx: number; cy: number }[] {
  return [{ cx: catX, cy: LOWER_JUNCTION_Y }];
}

/* ─── Tool Icon with Tooltip ─────────────────────────── */

function ToolIconItem({
  t,
  i,
  pos,
  iconBig,
  setToolRef,
}: {
  t: (typeof tools)[number];
  i: number;
  pos: { xPct: number; yPct: number; rotate: number };
  iconBig: number;
  setToolRef: (idx: number) => (el: HTMLDivElement | null) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const IconComp = t.Icon;

  return (
    <div
      key={t.id}
      ref={setToolRef(i)}
      className="absolute z-20 flex flex-col items-center gap-2 -translate-x-1/2"
      style={{
        left: `${pos.xPct}%`,
        top: `${pos.yPct}%`,
        rotate: `${pos.rotate}deg`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        {/* iOS-style app icon */}
        <div
          data-icon-box
          className="flex items-center justify-center overflow-hidden"
          style={{
            width: iconBig,
            height: iconBig,
            borderRadius: iconBig * 0.227,
            backgroundColor: t.bgColor,
          }}
        >
          <IconComp data-icon-svg style={{ width: 44, height: 44 }} />
        </div>
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

        {/* Tooltip bubble */}
        {t.notifications.length > 0 && (
          <div
            data-notifs
            className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-1.5 px-3 py-2.5 rounded-xl border border-[#2a2a34] bg-[#16161a]/95 backdrop-blur-sm shadow-lg shadow-black/40 pointer-events-none"
            style={{
              bottom: `calc(100% + 12px)`,
              opacity: hovered ? 1 : 0,
              transform: `translateX(-50%) translateY(${hovered ? "0px" : "6px"})`,
              transition: "opacity 0.2s ease, transform 0.2s ease",
              minWidth: "max-content",
            }}
          >
            {/* Arrow */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -bottom-[5px] w-2.5 h-2.5 rotate-45 border-r border-b border-[#2a2a34] bg-[#16161a]"
            />
            {t.notifications.map((n, j) => (
              <div
                key={j}
                className="text-[10px] whitespace-nowrap leading-tight"
                style={{
                  color: (n as { color?: string }).color || "#6f6e78",
                }}
              >
                {n.text}
              </div>
            ))}
          </div>
        )}
      </div>
      <span data-label className="text-xs font-medium text-[#5a5864]">
        {t.label}
      </span>
    </div>
  );
}

function ToolIcons({
  tools: toolsList,
  gridInit,
  iconBig,
  setToolRef,
}: {
  tools: typeof tools;
  gridInit: { xPct: number; yPct: number; rotate: number }[];
  iconBig: number;
  setToolRef: (idx: number) => (el: HTMLDivElement | null) => void;
}) {
  return (
    <>
      {toolsList.map((t, i) => (
        <ToolIconItem
          key={t.id}
          t={t}
          i={i}
          pos={gridInit[i]}
          iconBig={iconBig}
          setToolRef={setToolRef}
        />
      ))}
    </>
  );
}

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

      /* ── Phase 1 (0–10%): Hold static ── */
      tl.to({}, { duration: 0.1 });

      /* ── Phase 2 (10–35%): Badges/notifs fade → shrink → reposition to 1×8 ── */
      toolRefs.current.forEach((toolEl, i) => {
        if (!toolEl) return;
        const target = ROW_FINAL[i];
        const badge = toolEl.querySelector("[data-badge]");
        const notifs = toolEl.querySelector("[data-notifs]");
        const label = toolEl.querySelector("[data-label]");
        const iconBox = toolEl.querySelector("[data-icon-box]");
        const iconSvg = toolEl.querySelector("[data-icon-svg]");

        if (badge) {
          tl.to(
            badge,
            { opacity: 0, scale: 0.3, duration: 0.06, ease: "power2.in" },
            0.1 + i * 0.005,
          );
        }
        if (notifs) {
          tl.to(
            notifs,
            { opacity: 0, y: -10, duration: 0.06, ease: "power2.in" },
            0.1 + i * 0.005,
          );
        }
        if (label) {
          tl.to(label, { opacity: 0, duration: 0.05, ease: "power2.in" }, 0.14);
        }
        // Move to row position and reset rotation
        tl.to(
          toolEl,
          {
            left: `${target.xPct}%`,
            top: `${target.yPct}%`,
            rotate: 0,
            duration: 0.18,
            ease: "power2.inOut",
          },
          0.16,
        );
        // Shrink
        if (iconBox) {
          tl.to(
            iconBox,
            {
              width: ICON_SMALL,
              height: ICON_SMALL,
              borderRadius: ICON_SMALL * 0.227,
              duration: 0.18,
              ease: "power2.inOut",
            },
            0.16,
          );
        }
        if (iconSvg) {
          tl.to(
            iconSvg,
            { width: 28, height: 28, duration: 0.18, ease: "power2.inOut" },
            0.16,
          );
        }
      });

      // Header fades
      tl.to(
        headerRef.current,
        { opacity: 0, duration: 0.12, ease: "power2.in" },
        0.12,
      );

      /* ── Phase 3 (35–50%): LUCI appears + upper wiring draws ── */
      tl.fromTo(
        luciRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.1, ease: "back.out(1.7)" },
        0.35,
      );

      tl.fromTo(
        processingRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.08, ease: "power2.out" },
        0.4,
      );

      // Draw upper paths
      const upperPaths = svgRef.current?.querySelectorAll(".upper-path");
      const upperDotsEls = svgRef.current?.querySelectorAll(".upper-dot");
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
            stagger: 0.01,
            ease: "power2.inOut",
          },
          0.37,
        );
      }
      if (upperDotsEls?.length) {
        gsap.set(upperDotsEls, { opacity: 0 });
        tl.to(
          upperDotsEls,
          {
            opacity: 1,
            duration: 0.06,
            stagger: 0.01,
            ease: "power2.out",
          },
          0.42,
        );
      }

      /* ── Phase 4 (50–70%): LUCI glow + lower wiring draws ── */
      tl.to(
        luciRef.current,
        {
          boxShadow:
            "0 0 80px rgba(255,92,0,0.35), 0 0 160px rgba(255,92,0,0.15), 0 0 30px rgba(255,255,255,0.1)",
          duration: 0.1,
          ease: "power2.inOut",
        },
        0.5,
      );

      tl.to(processingRef.current, { opacity: 0, duration: 0.05 }, 0.62);

      const lowerPaths = svgRef.current?.querySelectorAll(".lower-path");
      const lowerDotsEls = svgRef.current?.querySelectorAll(".lower-dot");
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
            stagger: 0.02,
            ease: "power2.out",
          },
          0.55,
        );
      }
      if (lowerDotsEls?.length) {
        gsap.set(lowerDotsEls, { opacity: 0 });
        tl.to(
          lowerDotsEls,
          {
            opacity: 1,
            duration: 0.06,
            stagger: 0.02,
            ease: "power2.out",
          },
          0.6,
        );
      }

      /* ── Phase 5 (70–90%): Category cards ── */
      tl.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
        0.7,
      );

      tl.to(
        luciRef.current,
        {
          boxShadow:
            "0 0 60px rgba(255,92,0,0.2), 0 0 120px rgba(255,92,0,0.08)",
          duration: 0.1,
        },
        0.8,
      );
    }, section);

    return () => ctx.revert();
  }, []);

  /* ─── Compute LUCI DOM position from SVG coords ────── */
  // SVG: top=26%, height=52% of viewport
  const SVG_TOP_PCT = 32;
  const SVG_HEIGHT_PCT = 50;
  const luciTopPct = SVG_TOP_PCT + SVG_HEIGHT_PCT * (LUCI_Y / SVG_H);

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
        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="absolute z-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-center"
          style={{ top: "8%" }}
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

        {/* ── Tool icons (absolute positioned) ── */}
        <ToolIcons tools={tools} gridInit={GRID_INIT} iconBig={ICON_BIG} setToolRef={setToolRef} />

        {/* ── SVG wiring diagram ── */}
        <svg
          ref={svgRef}
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="absolute pointer-events-none z-10"
          style={{
            left: 0,
            top: `${SVG_TOP_PCT}%`,
            width: "100%",
            height: `${SVG_HEIGHT_PCT}%`,
          }}
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Upper wiring: each icon → junction row → center → LUCI */}
          {iconSvgXs.map((iconX, i) => (
            <React.Fragment key={`up-${i}`}>
              <path
                className="upper-path"
                d={buildUpperPath(iconX)}
                stroke={LINE_COLOR}
                strokeWidth={LINE_W}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0}
              />
              {upperDots(iconX).map((dot, j) => (
                <circle
                  key={j}
                  className="upper-dot"
                  cx={dot.cx}
                  cy={dot.cy}
                  r={DOT_R}
                  fill={DOT_FILL}
                  opacity={0}
                />
              ))}
            </React.Fragment>
          ))}

          {/* Lower wiring: LUCI → junction row → each category */}
          {catXs.map((catX, i) => (
            <React.Fragment key={`low-${i}`}>
              <path
                className="lower-path"
                d={buildLowerPath(catX)}
                stroke={LINE_COLOR}
                strokeWidth={LINE_W}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0}
              />
              {lowerDots(catX).map((dot, j) => (
                <circle
                  key={j}
                  className="lower-dot"
                  cx={dot.cx}
                  cy={dot.cy}
                  r={DOT_R}
                  fill={DOT_FILL}
                  opacity={0}
                />
              ))}
            </React.Fragment>
          ))}
        </svg>

        {/* ── LUCI Center ── */}
        <div
          ref={luciRef}
          className="absolute z-20 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: 0, top: `${luciTopPct}%` }}
        >
          <LuciCenter size={100} glowIntensity="high" />
        </div>

        {/* ── Processing badge ── */}
        <div
          ref={processingRef}
          className="absolute z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full left-1/2 -translate-x-1/2"
          style={{
            opacity: 0,
            top: `${luciTopPct + 5}%`,
            backgroundColor: "rgba(255,92,0,0.12)",
            border: "1px solid rgba(255,92,0,0.25)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#ff5c00] animate-pulse" />
          <span className="text-[#ff5c00] text-[11px] font-bold tracking-widest font-[family-name:var(--font-manrope,Manrope)]">
            PROCESSING
          </span>
        </div>

        {/* ── Category Cards ── */}
        <div
          ref={cardsRef}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
          style={{ opacity: 0 }}
        >
          <CategoryCards />
        </div>
      </div>
    </section>
  );
}
