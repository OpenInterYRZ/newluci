"use client";

import { siNotion } from "simple-icons";

export function NotionNotesCard() {
  return (
    <div className="group relative w-[260px] cursor-pointer">
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
            style={{ backgroundColor: "#000000" }}
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path d={siNotion.path} />
            </svg>
          </div>
          <span
            className="text-sm font-bold"
            style={{ color: "#e0e0e6", fontFamily: "Manrope, sans-serif" }}
          >
            Notion
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1.5">
          <p
            className="text-[13px] font-semibold leading-snug"
            style={{ color: "#c0bfca", fontFamily: "Manrope, sans-serif" }}
          >
            Q1 Pipeline Notes — 3 weeks old
          </p>
          <p
            className="text-[13px] leading-snug"
            style={{ color: "#f59e0b", fontFamily: "Manrope, sans-serif" }}
          >
            Meeting Template — incomplete
          </p>
        </div>

        {/* Dust overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#0c0c14]/40 backdrop-blur-[1px] transition-opacity duration-500 ease-out group-hover:opacity-0" />
      </div>
    </div>
  );
}
