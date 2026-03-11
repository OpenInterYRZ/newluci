"use client";

import { useEffect, useState } from "react";
import ShinyText from "@/components/ui/ShinyText";

interface LoadingLineProps {
  /** Text shown while loading (with ShinyText shimmer) */
  loadingText?: string;
  /** Text shown after resolved */
  resolvedText: string;
  /** Delay in ms before resolving */
  delay?: number;
  /** Externally control resolved state */
  resolved?: boolean;
}

export function LoadingLine({
  loadingText = "...",
  resolvedText,
  delay = 0,
  resolved: externalResolved,
}: LoadingLineProps) {
  const [internalResolved, setInternalResolved] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const t = setTimeout(() => setInternalResolved(true), delay);
      return () => clearTimeout(t);
    }
  }, [delay]);

  const resolved = externalResolved ?? internalResolved;

  return (
    <span
      style={{
        fontFamily: "Manrope, sans-serif",
        fontSize: "calc(var(--phone-chat-fs) - 2px)",
      }}
    >
      {resolved ? (
        <span className="font-medium text-[#555555]">{resolvedText}</span>
      ) : (
        <ShinyText
          text={loadingText}
          speed={1.5}
          color="#bbbbbb"
          shineColor="#888888"
          className="font-medium"
        />
      )}
    </span>
  );
}
