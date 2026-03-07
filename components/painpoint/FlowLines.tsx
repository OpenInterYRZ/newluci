"use client";
import React from "react";

interface FlowLinesProps {
  /** Refs for GSAP to animate individual paths */
  upperPathsRef?: React.RefObject<(SVGPathElement | null)[]>;
  lowerPathsRef?: React.RefObject<(SVGPathElement | null)[]>;
  chaosLinesRef?: React.RefObject<(SVGLineElement | null)[]>;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * SVG layer that draws:
 * 1. Upper converging lines (6 tools → LUCI center)
 * 2. Lower diverging lines (LUCI center → 3 category columns)
 * 3. Chaos lines (random crossing dashed lines for Before state)
 *
 * All paths are exposed via refs for GSAP strokeDashoffset animation.
 */
export function FlowLines({
  upperPathsRef,
  lowerPathsRef,
  chaosLinesRef,
  width = 1280,
  height = 400,
  className = "",
}: FlowLinesProps) {
  const cx = width / 2;
  const cy = height / 2;

  // 6 tool icon positions (evenly spaced across top)
  const toolCount = 6;
  const toolSpacing = width / (toolCount + 1);
  const toolY = 0;

  // 3 category column positions (evenly spaced across bottom)
  const colCount = 3;
  const colSpacing = width / (colCount + 1);
  const colY = height;

  // Upper converging paths: each tool → center
  const upperPaths = Array.from({ length: toolCount }, (_, i) => {
    const startX = toolSpacing * (i + 1);
    const cpY = cy * 0.6;
    return `M ${startX} ${toolY} Q ${(startX + cx) / 2} ${cpY}, ${cx} ${cy}`;
  });

  // Lower diverging paths: center → each column
  const lowerPaths = Array.from({ length: colCount }, (_, i) => {
    const endX = colSpacing * (i + 1);
    const cpY = cy + (colY - cy) * 0.4;
    return `M ${cx} ${cy} Q ${(cx + endX) / 2} ${cpY}, ${endX} ${colY}`;
  });

  // Chaos lines: random crossing lines for Before state
  const chaosLines = [
    { x1: width * 0.08, y1: height * 0.5, x2: width * 0.35, y2: height * 0.8 },
    { x1: width * 0.15, y1: height * 0.7, x2: width * 0.5, y2: height * 0.45 },
    { x1: width * 0.3, y1: height * 0.55, x2: width * 0.7, y2: height * 0.65 },
    { x1: width * 0.45, y1: height * 0.75, x2: width * 0.8, y2: height * 0.4 },
    { x1: width * 0.6, y1: height * 0.5, x2: width * 0.92, y2: height * 0.8 },
    { x1: width * 0.25, y1: height * 0.65, x2: width * 0.85, y2: height * 0.55 },
  ];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={`absolute inset-0 pointer-events-none ${className}`}
      fill="none"
    >
      {/* Chaos lines (Before state) */}
      <g>
        {chaosLines.map((line, i) => (
          <line
            key={`chaos-${i}`}
            ref={(el) => {
              if (chaosLinesRef?.current) chaosLinesRef.current[i] = el;
            }}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#3a3a44"
            strokeWidth={1}
            strokeDasharray="4 6"
          />
        ))}
      </g>

      {/* Upper converging paths (tools → LUCI) */}
      <g>
        {upperPaths.map((d, i) => {
          const colors = ["#ff5c00", "#7B61FF", "#ff3b30", "#34D399", "#5a5864", "#5a5864"];
          return (
            <path
              key={`upper-${i}`}
              ref={(el) => {
                if (upperPathsRef?.current) upperPathsRef.current[i] = el;
              }}
              d={d}
              stroke={colors[i]}
              strokeWidth={2}
              strokeLinecap="round"
              opacity={0}
            />
          );
        })}
      </g>

      {/* Lower diverging paths (LUCI → categories) */}
      <g>
        {lowerPaths.map((d, i) => {
          const colors = ["#EF4444", "#F59E0B", "#10B981"];
          return (
            <path
              key={`lower-${i}`}
              ref={(el) => {
                if (lowerPathsRef?.current) lowerPathsRef.current[i] = el;
              }}
              d={d}
              stroke={colors[i]}
              strokeWidth={2}
              strokeLinecap="round"
              opacity={0}
            />
          );
        })}
      </g>
    </svg>
  );
}
