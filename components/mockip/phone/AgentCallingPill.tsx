"use client";

import { useEffect, useState } from "react";
import ShinyText from "@/components/ui/ShinyText";

interface AgentCallingPillProps {
  agentName?: string;
  resolvedText?: string;
  resolveDelay?: number;
}

export function AgentCallingPill({
  agentName = "agent_video",
  resolvedText,
  resolveDelay = 1000,
}: AgentCallingPillProps) {
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (resolvedText) {
      const t = setTimeout(() => setResolved(true), resolveDelay);
      return () => clearTimeout(t);
    }
  }, [resolvedText, resolveDelay]);

  return (
    <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "calc(var(--phone-chat-fs) - 2px)" }}>
      {resolved ? (
        <span className="font-medium text-text-2">{resolvedText}</span>
      ) : (
        <ShinyText
          text={`${agentName} ...`}
          speed={1.5}
          color="#bbbbbb"
          shineColor="#888888"
          className="font-medium"
        />
      )}
    </span>
  );
}
