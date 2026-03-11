"use client";

import { useEffect, useState } from "react";
import ShinyText from "@/components/ui/ShinyText";

interface StatusPillProps {
  text?: string;
  resolvedText?: string;
  resolveDelay?: number;
}

export function StatusPill({
  text = "Analyzing video...",
  resolvedText,
  resolveDelay = 1200,
}: StatusPillProps) {
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
        <span className="font-medium text-[#555555]">{resolvedText}</span>
      ) : (
        <ShinyText
          text={text}
          speed={1.5}
          color="#bbbbbb"
          shineColor="#888888"
          className="font-medium"
        />
      )}
    </span>
  );
}
