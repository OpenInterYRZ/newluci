"use client";

import React, { useState, useCallback } from "react";
import { Rnd } from "react-rnd";
import { PhoneChatScreen } from "../mockip/phone/PhoneChatScreen";
import VMDashboard from "../mockip/vm/VMDashboard";

interface WindowState {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function ProductShowcase() {
  const [phoneWindow, setPhoneWindow] = useState<WindowState>({
    x: 40,
    y: 80,
    width: 340,
    height: 620,
  });

  const [desktopWindow, setDesktopWindow] = useState<WindowState>({
    x: 320,
    y: 30,
    width: 780,
    height: 520,
  });

  // z-index 管理：点击的窗口到前面
  const [topWindow, setTopWindow] = useState<"phone" | "desktop">("desktop");

  const bringToFront = useCallback((id: "phone" | "desktop") => {
    setTopWindow(id);
  }, []);

  return (
    <section className="relative w-full bg-web-bg-0 mb-24">
      <div className="max-w-7xl mx-auto">
        {/* 有界展示区域 */}
        <div
          className="relative w-full rounded-2xl border border-grey-2/30 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ height: 680, backgroundImage: "url('/pb.webp')" }}
        >
          {/* 手机窗口 */}
          <Rnd
            size={{ width: phoneWindow.width, height: phoneWindow.height }}
            position={{ x: phoneWindow.x, y: phoneWindow.y }}
            onDragStop={(_e, d) => {
              setPhoneWindow((prev) => ({ ...prev, x: d.x, y: d.y }));
            }}
            onResizeStop={(_e, _dir, ref, _delta, position) => {
              setPhoneWindow({
                width: parseInt(ref.style.width, 10),
                height: parseInt(ref.style.height, 10),
                x: position.x,
                y: position.y,
              });
            }}
            bounds="parent"
            minWidth={280}
            minHeight={400}
            maxWidth={420}
            maxHeight={720}
            dragHandleClassName="drag-handle"
            onMouseDown={() => bringToFront("phone")}
            style={{ zIndex: topWindow === "phone" ? 20 : 10 }}
            className="rounded-[2.5rem] shadow-xl"
          >
            <div className="flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border-[2px] border-grey-2 relative">
              {/* iPhone status bar — drag handle */}
              <div className="drag-handle relative flex items-end justify-between px-6 pt-3 pb-2 bg-white cursor-grab active:cursor-grabbing select-none shrink-0">
                {/* Time */}
                <span className="text-[13px] font-semibold text-text-0 leading-none">
                  9:41
                </span>
                {/* Status icons */}
                <div className="flex items-center gap-1.5">
                  {/* Signal bars */}
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <rect
                      x="0"
                      y="9"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#000"
                    />
                    <rect
                      x="4"
                      y="6"
                      width="3"
                      height="6"
                      rx="0.5"
                      fill="#000"
                    />
                    <rect
                      x="8"
                      y="3"
                      width="3"
                      height="9"
                      rx="0.5"
                      fill="#000"
                    />
                    <rect
                      x="12"
                      y="0"
                      width="3"
                      height="12"
                      rx="0.5"
                      fill="#000"
                    />
                  </svg>
                  {/* WiFi */}
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                    <path
                      d="M7 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                      fill="#000"
                    />
                    <path
                      d="M4.17 7.33a4 4 0 0 1 5.66 0"
                      stroke="#000"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1.76 4.93a7 7 0 0 1 10.48 0"
                      stroke="#000"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Battery */}
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <rect
                      x="0.5"
                      y="0.5"
                      width="20"
                      height="11"
                      rx="2"
                      stroke="#000"
                      strokeWidth="1"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="16"
                      height="8"
                      rx="1"
                      fill="#000"
                    />
                    <path d="M22 4.5v3a1.5 1.5 0 0 0 0-3Z" fill="#000" />
                  </svg>
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 overflow-hidden">
                <PhoneChatScreen />
              </div>
              {/* Home indicator */}
              <div className="shrink-0 flex justify-center pb-2 pt-1 bg-white">
                <div className="w-[120px] h-[5px] bg-black/20 rounded-full" />
              </div>
            </div>
          </Rnd>

          {/* 桌面窗口 */}
          <Rnd
            size={{
              width: desktopWindow.width,
              height: desktopWindow.height,
            }}
            position={{ x: desktopWindow.x, y: desktopWindow.y }}
            onDragStop={(_e, d) => {
              setDesktopWindow((prev) => ({ ...prev, x: d.x, y: d.y }));
            }}
            onResizeStop={(_e, _dir, ref, _delta, position) => {
              setDesktopWindow({
                width: parseInt(ref.style.width, 10),
                height: parseInt(ref.style.height, 10),
                x: position.x,
                y: position.y,
              });
            }}
            bounds="parent"
            minWidth={500}
            minHeight={350}
            maxWidth={1000}
            maxHeight={680}
            dragHandleClassName="drag-handle"
            onMouseDown={() => bringToFront("desktop")}
            style={{ zIndex: topWindow === "desktop" ? 20 : 10 }}
            className="rounded-2xl shadow-xl"
          >
            <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-black/5">
              {/* 窗口标题栏 - 拖拽把手 */}
              <div className="drag-handle flex items-center gap-2 px-4 bg-[#f8f8f8] border-b border-black/5 cursor-grab active:cursor-grabbing select-none shrink-0">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 bg-white rounded-md px-3 py-1 border border-black/5">
                    <span className="text-xs text-[#999]">app.luci.ai</span>
                  </div>
                </div>
              </div>
              {/* 内容 */}
              <div className="flex-1 overflow-hidden">
                <VMDashboard />
              </div>
            </div>
          </Rnd>
        </div>
      </div>
    </section>
  );
}
