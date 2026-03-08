"use client";

import { siGoogledrive } from "simple-icons";

export function ZoomMeetingCard() {
  return (
    <div className="group relative w-[280px] cursor-pointer">
      <div
        className="relative flex flex-col gap-3 overflow-hidden rounded-2xl px-5 py-4"
        style={{
          backgroundColor: "#18181f",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        {/* Header row */}
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-lg"
            style={{ backgroundColor: "#ffffff" }}
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill={`#${siGoogledrive.hex}`}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path d={siGoogledrive.path} />
            </svg>
          </div>
          <span
            className="text-sm font-bold"
            style={{ color: "#e0e0e6", fontFamily: "Manrope, sans-serif" }}
          >
            Google Drive
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1.5">
          <p
            className="text-[13px] font-semibold leading-snug"
            style={{ color: "#c0bfca", fontFamily: "Manrope, sans-serif" }}
          >
            Acme Proposal v3 — who has latest?
          </p>
          <p
            className="text-[13px] leading-snug"
            style={{ color: "#f59e0b", fontFamily: "Manrope, sans-serif" }}
          >
            SOW draft — 2 weeks stale
          </p>
        </div>

        {/* Dust overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#0c0c14]/40 backdrop-blur-[1px] transition-opacity duration-500 ease-out group-hover:opacity-0" />
      </div>
    </div>
  );
}
