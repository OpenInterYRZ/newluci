"use client";

import { useState } from "react";
import { Gem, ChevronDown, Check, Undo2 } from "lucide-react";

interface MemoryNotificationProps {
  title?: string;
  body?: string;
  collapsed?: boolean;
}

export function MemoryNotification({
  title = "New Memory Update",
  body = "I believe that at this stage, while AI-assisted development has reduced repetitive CRUD work, frequent context switching has significantly increased cognitive load.",
  collapsed = false,
}: MemoryNotificationProps) {
  const [status, setStatus] = useState<"idle" | "accepted" | "undone">("idle");
  if (collapsed) {
    return (
      <div
        className="flex w-full items-center gap-1.5 rounded-2xl px-[18px] py-3"
        style={{
          background: "#FFFFFF",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <Gem size={16} className="text-text-0" />
        <span
          className="font-bold text-text-0"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          {title}
        </span>
        <div className="flex-1" />
        <ChevronDown size={16} className="rotate-[-90deg] text-text-2" />
      </div>
    );
  }

  return (
    <div
      className="flex w-full flex-col gap-3 rounded-2xl p-[16px_18px]"
      style={{
        background: "#FFFFFF",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* Top row */}
      <div className="flex w-full items-center gap-1.5">
        <Gem size={16} className="text-text-0" />
        <span
          className="font-bold text-text-0"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          {title}
        </span>
        <div className="flex-1" />
        <ChevronDown size={16} className="text-text-2" />
      </div>

      {/* Body */}
      <p
        className="font-normal leading-[1.5] text-text-0"
        style={{ fontSize: "var(--phone-chat-fs)" }}
      >
        {body}
      </p>

      {/* Buttons */}
      <div className="flex w-full gap-2.5">
        {status === "idle" ? (
          <>
            <button
              onClick={() => setStatus("undone")}
              className="flex h-9 flex-1 items-center justify-center rounded-lg border border-grey-2 bg-white font-semibold tracking-[0.5px] text-text-2 transition-all duration-200 hover:border-grey-3 hover:bg-grey-1 hover:text-text-1 active:scale-[0.98]"
              style={{ fontSize: "var(--phone-chat-fs-sm)" }}
            >
              UNDO
            </button>
            <button
              onClick={() => setStatus("accepted")}
              className="flex h-9 flex-1 items-center justify-center rounded-lg border border-grey-2 bg-white font-semibold tracking-[0.5px] text-text-0 transition-all duration-200 hover:border-primary hover:bg-primary-light-default hover:text-primary active:scale-[0.98]"
              style={{ fontSize: "var(--phone-chat-fs-sm)" }}
            >
              ACCEPT
            </button>
          </>
        ) : (
          <div
            className="flex h-9 w-full items-center justify-center gap-1.5 rounded-lg font-semibold tracking-[0.5px]"
            style={{
              fontSize: "var(--phone-chat-fs-sm)",
              background: status === "accepted" ? "#E8F5E9" : "#FFF3E0",
              color: status === "accepted" ? "#2E7D32" : "#E65100",
            }}
          >
            {status === "accepted" ? (
              <>
                <Check size={14} />
                ACCEPTED
              </>
            ) : (
              <>
                <Undo2 size={14} />
                UNDONE
              </>
            )}
          </div>
        )}
      </div>

      {/* View link */}
      <div className="flex w-full justify-center">
        <span
          className="font-medium text-text-0"
          style={{ fontSize: "var(--phone-chat-fs)" }}
        >
          View Memories
        </span>
      </div>
    </div>
  );
}
