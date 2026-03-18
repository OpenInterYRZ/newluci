"use client";

import { useEffect, useState } from "react";
import ShinyText from "@/components/ui/ShinyText";

interface ConnectorPillProps {
  name?: string;
  resolvedText?: string;
  resolveDelay?: number;
}

export function ConnectorPill({
  name = "Google Calendar",
  resolvedText,
  resolveDelay = 1000,
}: ConnectorPillProps) {
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (resolvedText) {
      const t = setTimeout(() => setResolved(true), resolveDelay);
      return () => clearTimeout(t);
    }
  }, [resolvedText, resolveDelay]);

  return (
    <span style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}>
      {resolved ? (
        <span className="font-medium text-text-2">{resolvedText}</span>
      ) : (
        <ShinyText
          text={`${name} connecting...`}
          speed={1.5}
          color="#bbbbbb"
          shineColor="#888888"
          className="font-medium"
        />
      )}
    </span>
  );
}
