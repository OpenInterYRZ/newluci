"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    y: 60,
    width: 320,
    height: 620,
  });

  const [desktopWindow, setDesktopWindow] = useState<WindowState>({
    x: 320,
    y: 30,
    width: 880,
    height: 620,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full mb-24">
      <div className="max-w-7xl mx-auto">
        {/* 有界展示区域 */}
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ height: 680 }}
        >
          {/* 手机窗口 */}
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 250, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 20,
              pointerEvents: "none",
            }}
          >
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
              style={{ pointerEvents: "auto" }}
              className="rounded-[2.5rem] shadow-xl"
            >
              <div className="flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border-[2px] border-grey-2 relative">
                {/* Drag handle bar */}
                <div className="drag-handle flex justify-center pt-3 pb-2 bg-bg-0 cursor-grab active:cursor-grabbing select-none shrink-0">
                  <div className="w-[80px] h-[5px] bg-black/20 rounded-full" />
                </div>
                {/* Content */}
                <div className="flex-1 overflow-hidden">
                  <PhoneChatScreen />
                </div>
                {/* Home indicator */}
                <div className="shrink-0 flex justify-center pb-2 pt-1 bg-white"></div>
              </div>
            </Rnd>
          </motion.div>

          {/* 桌面窗口 */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.3,
            }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
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
              minWidth={700}
              minHeight={350}
              maxWidth={1000}
              maxHeight={680}
              dragHandleClassName="drag-handle"
              style={{ pointerEvents: "auto" }}
              className="rounded-2xl shadow-xl"
            >
              <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-black/5">
                {/* 窗口标题栏 - 拖拽把手 */}
                <div className="drag-handle flex items-center px-4 bg-[#f8f8f8] border-b border-black/5 cursor-grab active:cursor-grabbing select-none shrink-0">
                  <div className="flex-1 flex items-center gap-1.5 min-w-0">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57] shrink-0" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E] shrink-0" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840] shrink-0" />
                  </div>
                  <div className="shrink-0">
                    <div className="flex items-center rounded-md px-3 py-2">
                      <span className="text-xs text-text-2">LUCI Desktop</span>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-end min-w-0">
                    <a
                      href="/download"
                      className="text-xs text-text-2 hover:text-text-0 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    >
                      Download LUCI
                    </a>
                  </div>
                </div>
                {/* 内容 */}
                <div className="flex-1 overflow-hidden">
                  <VMDashboard />
                </div>
              </div>
            </Rnd>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
