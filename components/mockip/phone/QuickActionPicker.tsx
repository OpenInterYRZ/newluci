"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const OPTIONS = [
  "Analyze yesterday's meeting videos",
  "Follow up on remaining tasks",
  "Prepare for tomorrow's meeting",
];

interface QuickActionPickerProps {
  onDismiss?: (selectedIndex: number) => void;
}

export function QuickActionPicker({ onDismiss }: QuickActionPickerProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleSelect = (i: number) => {
    if (confirmed) return;
    setSelectedIndex(i);
  };

  const handleContinue = () => {
    if (selectedIndex === null || confirmed) return;
    setConfirmed(true);
    setTimeout(() => setVisible(false), 200);
    setTimeout(() => onDismiss?.(selectedIndex), 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
      transition={{ duration: visible ? 0.4 : 0.3, ease: "easeOut" }}
      className="w-full"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div
        className="flex flex-col overflow-hidden rounded-xl"
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E5E5",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 pt-3"></div>

        {/* Question */}
        <div className="px-3 pb-2">
          <span
            className="font-semibold text-[#333]"
            style={{ fontSize: "var(--phone-chat-fs)" }}
          >
            What are my priorities today?
          </span>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-px px-2 pb-2.5">
          {OPTIONS.map((opt, i) => {
            const isSelected = selectedIndex === i;
            const showHint = selectedIndex === null && i === 0;
            return (
              <motion.div
                key={i}
                onClick={() => handleSelect(i)}
                animate={
                  showHint
                    ? {
                        backgroundColor: [
                          "rgba(255, 140, 0, 0)",
                          "rgba(255, 140, 0, 0.08)",
                          "rgba(255, 140, 0, 0)",
                        ],
                      }
                    : {
                        backgroundColor: isSelected
                          ? "rgba(255, 140, 0, 0.08)"
                          : "rgba(255, 140, 0, 0)",
                      }
                }
                transition={
                  showHint
                    ? {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }
                    : { duration: 0.2 }
                }
                className="flex cursor-pointer text-text-2 items-center gap-2.5 rounded-lg px-2 py-1 transition-colors hover:text-text-0"
                style={{
                  color: isSelected ? "text-text-0" : "text-text-2",
                }}
              >
                <span
                  className="shrink-0"
                  style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
                >
                  {i + 1}.
                </span>
                <span
                  className="font-normal"
                  style={{
                    fontSize: "calc(var(--phone-chat-fs) - 1px)",
                  }}
                >
                  {opt}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-end gap-3 px-3 py-2"
          style={{ borderTop: "1px solid #F0F0F0" }}
        >
          <span
            onClick={() => {
              if (confirmed) return;
              setConfirmed(true);
              setVisible(false);
              setTimeout(() => onDismiss?.(0), 300);
            }}
            className="cursor-pointer font-medium text-[#999] transition-colors hover:text-[#666]"
            style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
          >
            Skip
          </span>
          <button
            onClick={handleContinue}
            disabled={selectedIndex === null || confirmed}
            className="rounded-md px-3 py-1 font-semibold text-white transition-opacity disabled:opacity-30"
            style={{
              fontSize: "calc(var(--phone-chat-fs) - 2px)",
              background: "#FF8C00",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
}
