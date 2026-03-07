"use client";
import React from "react";

export interface NotificationItem {
  text: string;
  opacity: number;
  color?: string;
  accentColor?: string;
  rotation?: number;
}

interface ToolIconProps {
  icon: React.ReactNode;
  label: string;
  bgColor?: string;
  bgStyle?: React.CSSProperties;
  stroke?: string;
  badgeText?: string;
  badgeColor?: string;
  badgeContent?: React.ReactNode;
  notifications?: NotificationItem[];
  notificationsRef?: React.RefObject<HTMLDivElement | null>;
  badgeRef?: React.RefObject<HTMLDivElement | null>;
  iconRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

export function ToolIcon({
  icon,
  label,
  bgColor = "#1a1a24",
  bgStyle,
  stroke,
  badgeText,
  badgeColor = "#EF4444",
  badgeContent,
  notifications = [],
  notificationsRef,
  badgeRef,
  iconRef,
  className = "",
}: ToolIconProps) {
  return (
    <div className={`relative flex flex-col items-center gap-2 ${className}`} ref={iconRef}>
      <div className="relative">
        <div
          className="flex items-center justify-center w-16 h-16 rounded-2xl"
          style={{
            backgroundColor: bgColor,
            border: stroke ? `1.5px solid ${stroke}` : undefined,
            ...bgStyle,
          }}
        >
          {icon}
        </div>
        {(badgeText || badgeContent) && (
          <div
            ref={badgeRef}
            className="absolute -top-2 -right-2 flex items-center justify-center gap-1 rounded-full px-1.5 min-w-[22px] h-[20px]"
            style={{ backgroundColor: badgeColor }}
          >
            {badgeContent || (
              <span className="text-white text-[10px] font-bold leading-none">
                {badgeText}
              </span>
            )}
          </div>
        )}
      </div>
      <span className="text-[11px] font-medium text-[#5a5864]">{label}</span>

      {notifications.length > 0 && (
        <div
          ref={notificationsRef}
          className="absolute top-[84px] left-1/2 -translate-x-1/2 flex flex-col gap-1.5"
        >
          {notifications.map((n, i) => (
            <div
              key={i}
              className="px-2.5 py-1.5 rounded-lg text-[10px] border border-[#2a2a34] bg-[#1a1a24] whitespace-nowrap"
              style={{
                opacity: n.opacity,
                color: n.color || "#6f6e78",
                borderColor: n.accentColor ? `${n.accentColor}40` : "#2a2a34",
                transform: n.rotation ? `rotate(${n.rotation}deg)` : undefined,
              }}
            >
              {n.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
