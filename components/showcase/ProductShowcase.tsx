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
    <section className="relative w-full py-10 bg-web-bg-0">
      <div className="max-w-7xl mx-auto px-5">
        {/* 有界展示区域 */}
        <div
          className="relative w-full rounded-2xl border border-grey-2/30 overflow-hidden"
          style={{ height: 680, background: "var(--color-bg-1, #fafafa)" }}
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
            className="rounded-2xl shadow-xl"
          >
            <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-black/5">
              {/* 窗口标题栏 - 拖拽把手 */}
              <div className="drag-handle flex items-center gap-2 px-4 py-2.5 bg-[#f8f8f8] border-b border-black/5 cursor-grab active:cursor-grabbing select-none shrink-0">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-xs text-[#999] ml-2 font-medium">
                  LUCI Mobile
                </span>
              </div>
              {/* 内容 */}
              <div className="flex-1 overflow-hidden">
                <PhoneChatScreen />
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
              <div className="drag-handle flex items-center gap-2 px-4 py-2.5 bg-[#f8f8f8] border-b border-black/5 cursor-grab active:cursor-grabbing select-none shrink-0">
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
