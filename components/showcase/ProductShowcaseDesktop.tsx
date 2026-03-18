"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Rnd } from "react-rnd";
import { MessageSquare, BookCopy, Settings, RotateCcw } from "lucide-react";
import { PhoneChatScreen } from "../mockip/phone/PhoneChatScreen copy";
import MemoriesPanel from "./MemoriesPanel";
import SettingsPanel from "./SettingsPanel";

type TabId = "ask" | "memories" | "settings";
const TAB_ORDER: TabId[] = ["ask", "memories", "settings"];

interface WindowState {
  x: number;
  y: number;
  width: number;
  height: number;
}

const DESKTOP_DEFAULTS = {
  window: { x: 60, y: 30, width: 900, height: 620 },
  container: 680,
};

const MOBILE_DEFAULTS = {
  window: { x: 0, y: 0, width: 700, height: 508 },
  container: 540,
};

function getDefaults() {
  if (typeof window === "undefined") return DESKTOP_DEFAULTS;
  return window.innerWidth < 768 ? MOBILE_DEFAULTS : DESKTOP_DEFAULTS;
}

export default function ProductShowcaseDesktop() {
  const defaults = getDefaults();

  const [windowState, setWindowState] = useState<WindowState>(defaults.window);
  const [containerHeight, setContainerHeight] = useState(defaults.container);
  const [activeTab, setActiveTab] = useState<TabId>("ask");
  const [chatKey, setChatKey] = useState(0);

  const handleTabChange = useCallback(
    (newTab: TabId) => {
      if (newTab === activeTab) return;
      setActiveTab(newTab);
    },
    [activeTab],
  );

  useEffect(() => {
    function handleResize() {
      const d = window.innerWidth < 768 ? MOBILE_DEFAULTS : DESKTOP_DEFAULTS;
      setWindowState(d.window);
      setContainerHeight(d.container);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    {
      id: "ask",
      label: "Ask LUCI",
      icon: <MessageSquare size={20} />,
    },
    {
      id: "memories",
      label: "Memories",
      icon: <BookCopy size={20} />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <section className="relative w-full mb-24">
      <div className="max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ height: containerHeight }}
        >
          {/* 桌面窗口 */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
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
                width: windowState.width,
                height: windowState.height,
              }}
              position={{ x: windowState.x, y: windowState.y }}
              onDragStop={(_e, d) => {
                const next = { ...windowState, x: d.x, y: d.y };
                console.log("[Desktop] pos:", next);
                setWindowState(next);
              }}
              onResizeStop={(_e, _dir, ref, _delta, position) => {
                const next = {
                  width: parseInt(ref.style.width, 10),
                  height: parseInt(ref.style.height, 10),
                  x: position.x,
                  y: position.y,
                };
                console.log("[Desktop] resize:", next);
                setWindowState(next);
              }}
              bounds="parent"
              minWidth={700}
              minHeight={350}
              maxWidth={1200}
              maxHeight={720}
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
                <div className="flex flex-1 overflow-hidden">
                  {/* 侧边栏 */}
                  <div className="flex flex-col items-center gap-6 py-6 px-3 bg-[#F2F2F2] border-r border-black/5 shrink-0 w-[88px]">
                    {tabs.map((tab) => {
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => handleTabChange(tab.id)}
                          className="flex flex-col items-center gap-1.5"
                        >
                          <div
                            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                              isActive
                                ? "text-white"
                                : "bg-white border border-black/10 text-text-2 hover:border-black/20"
                            }`}
                            style={
                              isActive
                                ? {
                                    background:
                                      "linear-gradient(135deg, #FF8C00 0%, #FFa030 100%)",
                                  }
                                : undefined
                            }
                          >
                            {tab.icon}
                          </div>
                          <span
                            className={`text-[10px] font-medium ${
                              isActive ? "text-text-0" : "text-text-2"
                            }`}
                          >
                            {tab.label}
                          </span>
                        </button>
                      );
                    })}
                    {/* Replay button — only when Ask tab is active */}
                    {activeTab === "ask" && (
                      <button
                        onClick={() => setChatKey((k) => k + 1)}
                        className="mt-auto flex flex-col items-center gap-1.5"
                      >
                        <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-black/10 text-text-2 hover:border-black/20 transition-all">
                          <RotateCcw size={18} />
                        </div>
                        <span className="text-[10px] font-medium text-text-2">
                          Replay
                        </span>
                      </button>
                    )}
                  </div>
                  {/* 面板区域 - iOS 风格滑动切换，所有面板始终挂载 */}
                  <div className="flex-1 overflow-hidden relative">
                    {TAB_ORDER.map((tabId) => {
                      const isActive = tabId === activeTab;

                      return (
                        <motion.div
                          key={tabId}
                          initial={false}
                          animate={{
                            scale: isActive ? 1 : 0.96,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.2,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="absolute inset-0"
                          style={{
                            pointerEvents: isActive ? "auto" : "none",
                            zIndex: isActive ? 1 : 0,
                            willChange: "transform, opacity",
                            backfaceVisibility: "hidden",
                          }}
                        >
                          {tabId === "ask" && <PhoneChatScreen key={chatKey} />}
                          {tabId === "memories" && (
                            <MemoriesPanel isActive={isActive} />
                          )}
                          {tabId === "settings" && <SettingsPanel />}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Rnd>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
