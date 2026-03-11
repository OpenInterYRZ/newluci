"use client";

import { Calendar } from "lucide-react";

interface ConnectorPillProps {
  name?: string;
}

export function ConnectorPill({
  name = "Google Calendar",
}: ConnectorPillProps) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-[#C4D7FB] py-1.5 pr-3.5 pl-2.5"
      style={{
        background: "#E8F0FE",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <Calendar size={14} className="text-[#4A6CF7]" strokeWidth={2} />
      <span
        className="font-medium text-[#4A6CF7]"
        style={{ fontSize: "var(--phone-chat-fs)" }}
      >
        {name} connecting
      </span>
      <div className="flex items-center gap-[3px]">
        <span
          className="h-1 w-1 rounded-full bg-[#4A6CF7]"
          style={{ animation: "connDot 1.4s ease-in-out infinite" }}
        />
        <span
          className="h-1 w-1 rounded-full bg-[#7B9CF7]"
          style={{ animation: "connDot 1.4s ease-in-out 0.2s infinite" }}
        />
        <span
          className="h-1 w-1 rounded-full bg-[#A8BFF7]"
          style={{ animation: "connDot 1.4s ease-in-out 0.4s infinite" }}
        />
      </div>
      <style jsx>{`
        @keyframes connDot {
          0%, 80%, 100% { transform: scale(1); opacity: 0.4; }
          40% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
