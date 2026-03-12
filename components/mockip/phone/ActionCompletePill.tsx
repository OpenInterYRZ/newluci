"use client";

interface ActionCompletePillProps {
  label?: string;
}

export function ActionCompletePill({
  label = "Complete",
}: ActionCompletePillProps) {
  return (
    <div
      className="inline-flex items-center"
      style={{
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <span
        className="font-medium tracking-[0.2px] text-text-2"
        style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
      >
        {label}
      </span>
    </div>
  );
}
