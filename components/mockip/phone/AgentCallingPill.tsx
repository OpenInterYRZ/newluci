"use client";

import { Bot } from "lucide-react";

interface AgentCallingPillProps {
  agentName?: string;
}

export function AgentCallingPill({
  agentName = "agent_video",
}: AgentCallingPillProps) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full py-1.5 pr-3.5 pl-2.5"
      style={{
        background: "#F7F7F8",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* Agent icon wrapper */}
      <div className="flex h-5 w-5 items-center justify-center rounded-[10px] bg-[#E8E8EC]">
        <Bot size={12} className="text-[#555555]" />
      </div>

      <span
        className="font-semibold text-[#333333]"
        style={{ fontSize: "var(--phone-chat-fs)" }}
      >
        {agentName}
      </span>

      {/* Loading dots */}
      <div className="flex items-center gap-[3px]">
        <span
          className="h-1 w-1 rounded-full bg-[#999999]"
          style={{ animation: "dotBounce 1.4s ease-in-out infinite" }}
        />
        <span
          className="h-1 w-1 rounded-full bg-[#BBBBBB]"
          style={{
            animation: "dotBounce 1.4s ease-in-out 0.2s infinite",
          }}
        />
        <span
          className="h-1 w-1 rounded-full bg-[#DDDDDD]"
          style={{
            animation: "dotBounce 1.4s ease-in-out 0.4s infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes dotBounce {
          0%,
          80%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          40% {
            transform: scale(1.3);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
