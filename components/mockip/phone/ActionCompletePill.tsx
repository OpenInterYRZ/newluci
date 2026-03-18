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
      style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
    >
      <span className="font-medium tracking-[0.2px] text-text-2">
        {label}
      </span>
    </div>
  );
}
