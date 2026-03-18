"use client";

import { useEffect, useState } from "react";
import ShinyText from "@/components/ui/ShinyText";

interface ThinkingPillProps {
  label?: string;
  resolvedText?: string;
  resolveDelay?: number;
}

export function ThinkingPill({
  label = "Thinking...",
  resolvedText = "Thinking completed",
  resolveDelay = 1000,
}: ThinkingPillProps) {
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setResolved(true), resolveDelay);
    return () => clearTimeout(t);
  }, [resolveDelay]);

  return (
    <span style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}>
      {resolved ? (
        <span className="font-medium text-text-2">{resolvedText}</span>
      ) : (
        <ShinyText
          text={label}
          speed={1.5}
          color="#bbbbbb"
          shineColor="#888888"
          className="font-medium"
        />
      )}
    </span>
  );
}
