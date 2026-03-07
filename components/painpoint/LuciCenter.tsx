"use client";
import React from "react";

interface LuciCenterProps {
  size?: number;
  glowIntensity?: "low" | "medium" | "high";
  containerRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

const glowStyles = {
  low: "0 0 40px rgba(255,92,0,0.1), 0 0 80px rgba(255,92,0,0.05)",
  medium: "0 0 60px rgba(255,92,0,0.2), 0 0 120px rgba(255,92,0,0.08)",
  high: "0 0 80px rgba(255,92,0,0.35), 0 0 160px rgba(255,92,0,0.15), 0 0 30px rgba(255,255,255,0.1)",
};

export function LuciCenter({
  size = 88,
  glowIntensity = "medium",
  containerRef,
  className = "",
}: LuciCenterProps) {
  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center bg-white ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.25,
        boxShadow: glowStyles[glowIntensity],
      }}
    >
      <svg width={size * 0.4} height={size * 0.4} viewBox="0 0 36 36">
        <polygon points="18,2 32,30 4,30" fill="#0a0a0f" />
      </svg>
    </div>
  );
}
