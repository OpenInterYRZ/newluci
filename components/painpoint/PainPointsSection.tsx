"use client";
import React, { useRef, useEffect, useCallback, useState } from "react";
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
import { ClientTimelineDashboard } from "../cards/ClientTimelineDashboard";
import FeatureCards from "./ProductCarousel";
import DotGrid from "../ui/DotGrid";
import { NotionNotesCard } from "../cards/NotionNotesCard";
import { ZoomMeetingCard } from "../cards/ZoomMeetingCard";
import { ZoomRecordingCard } from "../cards/ZoomRecordingCard";
import { GmailInboxCard } from "../cards/GmailInboxCard";

gsap.registerPlugin(ScrollTrigger);

/* ─── Simple Icons as React SVGs ────────────────────── */
type SvgIconProps = React.SVGProps<SVGSVGElement> & {
  "data-icon-svg"?: boolean;
};

function makeSimpleIcon(
  icon: { path: string; hex: string },
  fillOverride?: string,
) {
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
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#E01E5A"
        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
      />
      <path
        fill="#36C5F0"
        d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
      />
      <path
        fill="#2EB67D"
        d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
      />
      <path
        fill="#ECB22E"
        d="M15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z"
      />
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
const ROW_Y_PCT = 16;
const ROW_FINAL = tools.map((_, i) => ({
  xPct: 20 + (i * 60) / (tools.length - 1), // 20% to 80% evenly
  yPct: ROW_Y_PCT,
}));

const ICON_BIG = 100;
const ICON_SMALL = 100;

/* ─── Scattered cards initial positions (percentage) ──── */
const SCATTERED_CARDS = [
  // Left side
  { id: "notion", xPct: 14, yPct: 15 },
  { id: "zoom-rec", xPct: 13, yPct: 45 },
  // Right side
  { id: "gmail", xPct: 75, yPct: 12 },
  { id: "zoom-mtg", xPct: 76, yPct: 48 },
];

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
const LOWER_END_Y = 250; // where category cards connect

// Icon X positions mapped into SVG coords
// SVG covers full container width (0–100%), so containerPct maps directly
// svgX = (pct / 100) * SVG_W
const iconSvgXs = ROW_FINAL.map((p) => (p.xPct / 100) * SVG_W);

// Line style
const LINE_COLOR = "rgba(255,255,255,0.5)";
const LINE_W = 1.5;

// Data pulse style (glowing dot traveling along lines)
const PULSE_COLOR = "rgba(255,255,255,0.8)";
const PULSE_DOT = 12; // length of the bright dash
const PULSE_W = 2; // slightly thicker than base line

/* ─── Build SVG paths for upper wiring ─────────────────── */
// Pattern: icon bottom → vertical down → rounded bend → horizontal to center → rounded bend → vertical to LUCI
const BEND_R = 20; // corner radius in SVG units

function buildUpperPath(iconX: number): string {
  const r = BEND_R;
  const dir = iconX < SVG_CX ? 1 : -1; // 1 = icon is left of center, -1 = right

  // For the icon at exact center, just go straight down
  if (Math.abs(iconX - SVG_CX) < r * 2) {
    return `M ${iconX} 0 L ${iconX} ${LUCI_Y}`;
  }

  // Corner 1: vertical → horizontal at (iconX, UPPER_JUNCTION_Y)
  // Corner 2: horizontal → vertical at (SVG_CX, UPPER_JUNCTION_Y)
  return [
    `M ${iconX} 0`,
    `L ${iconX} ${UPPER_JUNCTION_Y - r}`,
    `A ${r} ${r} 0 0 ${dir > 0 ? 0 : 1} ${iconX + dir * r} ${UPPER_JUNCTION_Y}`,
    `L ${SVG_CX - dir * r} ${UPPER_JUNCTION_Y}`,
    `A ${r} ${r} 0 0 ${dir > 0 ? 1 : 0} ${SVG_CX} ${UPPER_JUNCTION_Y + r}`,
    `L ${SVG_CX} ${LUCI_Y}`,
  ].join(" ");
}

/* ─── Build SVG path for lower wiring (single line) ───── */
function buildLowerPath(): string {
  return `M ${SVG_CX} ${LUCI_Y} L ${SVG_CX} ${LOWER_END_Y}`;
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
  const scatteredCardsRef = useRef<HTMLDivElement>(null);
  const sortsTextRef = useRef<HTMLDivElement>(null);
  const clarityTextRef = useRef<HTMLDivElement>(null);

  // Scale the inner layout container based on viewport height
  const DESIGN_H = 1200;
  const [layoutScale, setLayoutScale] = useState(1);
  useEffect(() => {
    const update = () =>
      setLayoutScale(Math.min(window.innerHeight / DESIGN_H, 1));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const setToolRef = useCallback(
    (idx: number) => (el: HTMLDivElement | null) => {
      toolRefs.current[idx] = el;
    },
    [],
  );

  // Refresh ScrollTrigger when layoutScale changes (e.g. after resize)
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [layoutScale]);

  useEffect(() => {
    const section = sectionRef.current;
    const pinned = pinnedRef.current;
    if (!section || !pinned) return;

    // Track pulse state to avoid redundant play/pause calls
    let upperPulsesActive = false;
    let lowerPulseActive = false;

    const ctx = gsap.context(() => {
      // Forward-declare pulse tweens so onUpdate can access them
      let upperPulseTweens: gsap.core.Tween[] = [];
      let lowerPulseTween: gsap.core.Tween | null = null;
      let upperPulseEls: NodeListOf<Element> | null = null;
      let lowerPulseEl: SVGPathElement | null = null;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: pinned,
          scrub: 1,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const p = self.progress;
            // Upper pulses: active when progress >= 0.49 (shifted from 0.39)
            if (p >= 0.49 && !upperPulsesActive) {
              upperPulsesActive = true;
              if (upperPulseEls) gsap.set(upperPulseEls, { opacity: 0.9 });
              upperPulseTweens.forEach((tw) => tw.play());
            } else if (p < 0.49 && upperPulsesActive) {
              upperPulsesActive = false;
              upperPulseTweens.forEach((tw) => tw.pause());
              if (upperPulseEls) gsap.set(upperPulseEls, { opacity: 0 });
            }
            // Lower pulse: disabled (lower wiring commented out)
            // if (p >= 0.67 && !lowerPulseActive) {
            //   lowerPulseActive = true;
            //   if (lowerPulseEl) gsap.set(lowerPulseEl, { opacity: 0.9 });
            //   lowerPulseTween?.play();
            // } else if (p < 0.67 && lowerPulseActive) {
            //   lowerPulseActive = false;
            //   lowerPulseTween?.pause();
            //   if (lowerPulseEl) gsap.set(lowerPulseEl, { opacity: 0 });
            // }
          },
        },
      });

      /* ── NEW Phase (0–15%): push to edges first, then text appears ── */

      // Push tool icons to edges of screen (starts immediately)
      toolRefs.current.forEach((toolEl, i) => {
        if (!toolEl) return;
        const init = GRID_INIT[i];
        const pushX =
          init.xPct < 50
            ? init.xPct - 15 // push further left
            : init.xPct + 15; // push further right
        // Bottom row pushes down more
        const pushY =
          init.yPct < 40
            ? init.yPct - 10 // push further up
            : init.yPct + 28; // push further down

        tl.to(
          toolEl,
          {
            left: `${pushX}%`,
            top: `${pushY}%`,
            rotate: init.rotate * 1.5,
            duration: 0.06,
            ease: "power2.out",
          },
          0,
        );
      });

      // Push scattered cards to edges (starts immediately)
      if (scatteredCardsRef.current) {
        const cardEls = scatteredCardsRef.current.children;
        for (let i = 0; i < cardEls.length; i++) {
          const cardEl = cardEls[i] as HTMLElement;
          const cardConfig = SCATTERED_CARDS[i];
          if (!cardConfig) continue;
          const pushX =
            cardConfig.xPct < 50 ? cardConfig.xPct - 12 : cardConfig.xPct + 12;
          // Bottom cards push down more
          const pushY =
            cardConfig.yPct < 40 ? cardConfig.yPct - 8 : cardConfig.yPct + 24;

          tl.to(
            cardEl,
            {
              left: `${pushX}%`,
              top: `${pushY}%`,
              duration: 0.06,
              ease: "power2.out",
            },
            0,
          );
        }
      }

      // Text fades in AFTER elements have pushed to edges
      if (sortsTextRef.current) {
        tl.fromTo(
          sortsTextRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.06, ease: "power2.out" },
          0.05,
        );
      }

      // Text fades out (transition to Phase 1)
      if (sortsTextRef.current) {
        tl.to(
          sortsTextRef.current,
          { opacity: 0, y: -15, duration: 0.05, ease: "power2.in" },
          0.12,
        );
      }

      /* ── Phase 1 (15–35%): Badges/notifs fade → shrink → reposition to 1×8 ── */
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
            0.15 + i * 0.005,
          );
        }
        if (notifs) {
          tl.to(
            notifs,
            { opacity: 0, y: -10, duration: 0.06, ease: "power2.in" },
            0.15 + i * 0.005,
          );
        }
        if (label) {
          tl.to(label, { opacity: 0, duration: 0.05, ease: "power2.in" }, 0.19);
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
          0.21,
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
            0.21,
          );
        }
        if (iconSvg) {
          tl.to(
            iconSvg,
            { width: 28, height: 28, duration: 0.18, ease: "power2.inOut" },
            0.21,
          );
        }
      });

      // Header fades
      tl.to(
        headerRef.current,
        { opacity: 0, duration: 0.12, ease: "power2.in" },
        0.17,
      );

      // Scattered cards fade out
      if (scatteredCardsRef.current) {
        tl.to(
          scatteredCardsRef.current,
          { opacity: 0, scale: 0.92, duration: 0.14, ease: "power2.in" },
          0.15,
        );
      }

      /* ── Phase 2 (35–50%): LUCI appears + upper wiring draws ── */
      tl.fromTo(
        luciRef.current,
        { opacity: 0, scale: 0.5, visibility: "hidden" },
        {
          opacity: 1,
          scale: 1,
          visibility: "visible",
          duration: 0.1,
          ease: "back.out(1.7)",
        },
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
      const upperPulses = svgRef.current?.querySelectorAll(".upper-pulse");
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
      // Set up upper data pulses (paused, controlled by ScrollTrigger progress)
      upperPulseEls = upperPulses || null;
      if (upperPulses?.length) {
        upperPulses.forEach((pulse, i) => {
          const el = pulse as SVGPathElement;
          const len = el.getTotalLength();
          gsap.set(el, {
            strokeDasharray: `${PULSE_DOT} ${len}`,
            strokeDashoffset: 0,
            opacity: 0,
          });
          upperPulseTweens.push(
            gsap.to(el, {
              strokeDashoffset: -(len + PULSE_DOT),
              duration: 2 + i * 0.15,
              ease: "none",
              repeat: -1,
              paused: true,
            }),
          );
        });
      }

      /* ── Phase 3 (50–70%): LUCI glow + lower wiring draws ── */
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

      // const lowerPath = svgRef.current?.querySelector(
      //   ".lower-path",
      // ) as SVGPathElement | null;
      // const lowerPulse = svgRef.current?.querySelector(
      //   ".lower-pulse",
      // ) as SVGPathElement | null;
      // if (lowerPath) {
      //   const len = lowerPath.getTotalLength();
      //   gsap.set(lowerPath, {
      //     strokeDasharray: len,
      //     strokeDashoffset: len,
      //     opacity: 1,
      //   });
      //   tl.to(
      //     lowerPath,
      //     {
      //       strokeDashoffset: 0,
      //       duration: 0.12,
      //       ease: "power2.out",
      //     },
      //     0.55,
      //   );
      // }
      // // Set up lower data pulse (paused, controlled by ScrollTrigger progress)
      // lowerPulseEl = lowerPulse;
      // if (lowerPulse) {
      //   const len = lowerPulse.getTotalLength();
      //   gsap.set(lowerPulse, {
      //     strokeDasharray: `${PULSE_DOT} ${len}`,
      //     strokeDashoffset: 0,
      //     opacity: 0,
      //   });
      //   lowerPulseTween = gsap.to(lowerPulse, {
      //     strokeDashoffset: -(len + PULSE_DOT),
      //     duration: 1.5,
      //     ease: "none",
      //     repeat: -1,
      //     paused: true,
      //   });
      // }

      /* ── Phase 4 (55–90%): Hide wiring/LUCI/icons → show h2 + cards ── */

      // Fade out tool icons row
      toolRefs.current.forEach((toolEl) => {
        if (!toolEl) return;
        tl.to(toolEl, { opacity: 0, duration: 0.06, ease: "power2.in" }, 0.55);
      });

      // Fade out SVG wiring
      tl.to(
        svgRef.current,
        { opacity: 0, duration: 0.06, ease: "power2.in" },
        0.55,
      );

      // Fade out LUCI + processing
      tl.to(
        luciRef.current,
        { opacity: 0, scale: 0.8, duration: 0.06, ease: "power2.in" },
        0.55,
      );
      tl.to(processingRef.current, { opacity: 0, duration: 0.04 }, 0.55);

      // Fade in h2 "From chaos to clarity."
      tl.fromTo(
        clarityTextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.08, ease: "power2.out" },
        0.63,
      );

      // Fade in cards (also enable pointer-events once visible)
      tl.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40, pointerEvents: "none" },
        { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.1, ease: "power2.out" },
        0.67,
      );
    }, section);

    return () => ctx.revert();
  }, []);

  /* ─── Compute LUCI DOM position from SVG coords ────── */
  // SVG starts just below the icon row (ROW_Y_PCT=20% + icon height ~4%)
  const SVG_TOP_PCT = 20;
  const SVG_HEIGHT_PCT = 54;
  const luciTopPct = SVG_TOP_PCT + SVG_HEIGHT_PCT * (LUCI_Y / SVG_H);

  return (
    <section
      ref={sectionRef}
      data-navbar-dark
      className="relative w-full"
      style={{ height: "500vh", background: "#0a0a0f" }}
    >
      <div
        ref={pinnedRef}
        className="h-screen w-full overflow-hidden relative"
        style={{ background: "#0a0a0f" }}
      >
        {/* ── Dot Grid Background ── */}
        {/* <div className="absolute inset-0 z-0 opacity-30">
          <DotGrid
            dotSize={2}
            gap={11}
            baseColor="#6b6b6b"
            activeColor="#d6d6d6"
            proximity={110}
            shockRadius={200}
            shockStrength={4}
            resistance={1350}
            returnDuration={1.8}
          />
        </div> */}

        {/* ── Scaled inner container (fixed 900px design height) ── */}
        <div
          className="absolute inset-0 origin-center"
          style={{
            width: "100%",
            height: `${DESIGN_H}px`,
            top: "50%",
            transform: `translateY(-50%) scale(${layoutScale})`,
          }}
        >
          {/* ── "LUCI organizes all tasks for you" centered text ── */}
          <div
            ref={sortsTextRef}
            className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ opacity: 0 }}
          >
            <h2
              className="text-white font-extrabold text-[36px] md:text-[42px] lg:text-[48px] leading-[1.15] text-center whitespace-nowrap"
              style={{ fontFamily: "var(--font-manrope, Manrope), sans-serif" }}
            >
              LUCI organizes all tasks for you
            </h2>
          </div>

          {/* ── Header ── */}
          {/* <div
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
          </div> */}

          {/* ── Tool icons (absolute positioned) ── */}
          <ToolIcons
            tools={tools}
            gridInit={GRID_INIT}
            iconBig={ICON_BIG}
            setToolRef={setToolRef}
          />

          {/* ── Scattered cards (initial state) ── */}
          <div
            ref={scatteredCardsRef}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            {SCATTERED_CARDS.map((card) => (
              <div
                key={card.id}
                className="absolute pointer-events-auto"
                style={{ left: `${card.xPct}%`, top: `${card.yPct}%` }}
              >
                {card.id === "notion" && <NotionNotesCard />}
                {card.id === "zoom-mtg" && <ZoomMeetingCard />}
                {card.id === "zoom-rec" && <ZoomRecordingCard />}
                {card.id === "gmail" && <GmailInboxCard />}
              </div>
            ))}
          </div>

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
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  opacity={0}
                />
                {/* Data pulse overlay */}
                <path
                  className="upper-pulse"
                  d={buildUpperPath(iconX)}
                  stroke={PULSE_COLOR}
                  strokeWidth={PULSE_W}
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  opacity={0}
                />
              </React.Fragment>
            ))}

            {/* Lower wiring: single line from LUCI straight down */}
            {/* <path
              className="lower-path"
              d={buildLowerPath()}
              stroke={LINE_COLOR}
              strokeWidth={LINE_W}
              strokeLinecap="butt"
              opacity={0}
            /> */}
            {/* Lower data pulse overlay */}
            {/* <path
              className="lower-pulse"
              d={buildLowerPath()}
              stroke={PULSE_COLOR}
              strokeWidth={PULSE_W}
              strokeLinecap="butt"
              opacity={0}
            /> */}
          </svg>

          {/* ── LUCI Center ── */}
          <div
            ref={luciRef}
            className="absolute z-20 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ opacity: 0, visibility: "hidden", top: `${luciTopPct}%` }}
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

          {/* ── "From chaos to clarity." h2 ── */}
          <div
            ref={clarityTextRef}
            className="absolute z-30 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ opacity: 0, top: "22%" }}
          >
            <h2
              className="text-white font-extrabold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.15] text-center"
              style={{ fontFamily: "var(--font-manrope, Manrope), sans-serif" }}
            >
              From chaos to clarity.
            </h2>
            <p className="text-white text-base mt-6 font-[family-name:var(--font-manrope,Manrope)]">
              Your tools are siloed. LUCI connects them so nothing falls through
              the cracks.
            </p>
          </div>

          {/* ── Feature Cards ── */}
          <div
            ref={cardsRef}
            className="absolute bottom-50 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-[1200px]"
            style={{ opacity: 0, pointerEvents: "none" }}
          >
            <FeatureCards />
          </div>
        </div>
      </div>
    </section>
  );
}
