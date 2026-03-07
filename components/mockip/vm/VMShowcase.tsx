"use client";

import VMDashboard from "./VMDashboard";
import { PhoneChatScreen } from "../phone/PhoneChatScreen";

export default function VMShowcase() {
  return (
    <div
      className="relative w-full max-w-[1200px] mx-auto"
      style={{ height: 720 }}
    >
      {/* Desktop — main layer */}
      <div
        className="absolute top-0 right-0  h-[680px] rounded-xl overflow-hidden"
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
      >
        <VMDashboard />
      </div>

      {/* Phone — bottom-left, above desktop */}
      <div className="absolute bottom-0 left-0 z-10 origin-bottom-left">
        <PhoneChatScreen />
      </div>
    </div>
  );
}
