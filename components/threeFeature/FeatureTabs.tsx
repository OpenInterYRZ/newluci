"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const tabsData = [
  {
    id: "See",
    label: "See",
    title: <>Ask anything, get answers instantly.</>,
    description:
      "Find information across all your apps, summarize long threads, and get up to speed in seconds without digging through files.",
    videoSrc: "/videos/see.mp4",
  },
  {
    id: "remember",
    label: "Remember",
    title: <>Build memory vault from video, extract key insights.</>,
    description: "Build memory vault from video, extract key insights.",
    videoSrc: "/videos/remember.mp4",
  },
  {
    id: "act",
    label: "Act",
    title: <>Auto-invoke Agents to complete tasks.Before you can act</>,
    description: "Auto-invoke Agents to complete tasks.Before .",
    videoSrc: "/videos/act.mp4",
  },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // 当 tab 切换时，播放对应视频，暂停其他视频
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeTab) {
          // 播放当前 tab 的视频
          video.currentTime = 0; // 从头开始播放
          video.play().catch((error: Error) => {
            console.log("Auto-play was prevented:", error);
          });
        } else {
          // 暂停其他 tab 的视频
          video.pause();
        }
      }
    });
  }, [activeTab]);

  // 计算底部指示器的位置和宽度
  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab]);

  // 处理视频播放结束事件：自动切换到下一个 tab
  const handleVideoEnded = () => {
    setActiveTab((prevTab) => (prevTab + 1) % tabsData.length);
  };

  const currentData = tabsData[activeTab];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-sans text-text-0 my-30">
      {/* Tabs 导航 */}

      {/* 内容区域 */}
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 my-26">
        {/* 左侧文字与按钮 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="flex-1 w-full flex flex-col items-start"
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 text-text-0">
              {currentData.title}
            </h2>
            <p className="text-lg text-text-2 mb-8 leading-relaxed max-w-md">
              {currentData.description}
            </p>

            <button className="flex items-center gap-2 px-6 py-3 border border-grey-2 rounded-full text-sm font-medium hover:bg-grey-1 hover:shadow-sm transition-all text-text-1 group">
              Try for free
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </motion.div>
        </AnimatePresence>

        {/* 右侧视频区域 */}
        <div className="flex-1 w-full aspect-video relative">
          {/* 虚幻背景光晕 */}
          <motion.div
            key={`glow-${activeTab}`}
            className="absolute inset-0 -z-10 opacity-40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
          </motion.div>

          {/* 渲染所有视频，但只显示当前激活的 */}
          {tabsData.map((tab, index) => {
            const isActive = index === activeTab;
            return (
              <motion.video
                key={tab.id}
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="w-full h-full object-contain rounded-xl drop-shadow-2xl absolute inset-0"
                animate={
                  isActive
                    ? { opacity: 1, scale: 1, filter: "blur(0px)", zIndex: 10 }
                    : {
                        opacity: 0,
                        scale: 0.95,
                        filter: "blur(20px)",
                        zIndex: 0,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                muted // 必须静音才能自动播放
                playsInline // 适配移动端
                preload="auto" // 预加载视频
                onEnded={isActive ? handleVideoEnded : undefined}
              >
                <source src={tab.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
            );
          })}
        </div>
      </div>
      <div className="flex border-b border-grey-2 my-16 relative">
        {tabsData.map((tab, index) => {
          const isActive = index === activeTab;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => setActiveTab(index)}
              className={`flex-1 pb-4 text-center text-2xl transition-all duration-200 relative group ${
                isActive
                  ? "text-text-0 font-medium"
                  : "text-text-3 hover:text-text-2"
              }`}
            >
              {/* 虚幻的背景光晕效果 */}
              {isActive && (
                <motion.div
                  layoutId="tabGlow"
                  className="absolute inset-0 -z-10 opacity-30"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                  }}
                >
                  <div className="absolute inset-0 bg-primary/20 blur-2xl" />
                </motion.div>
              )}

              <span
                className={`relative ${isActive ? "drop-shadow-[0_0_8px_rgba(255,107,0,0.5)]" : ""}`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}

        {/* 滑动的底部橙色条 */}
        <motion.div
          className="absolute bottom-0 h-[3px] bg-primary rounded-t-sm"
          initial={false}
          animate={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
          transition={{
            type: "spring",
            stiffness: 600,
            damping: 30,
          }}
        >
          {/* 发光效果 */}
          <div className="absolute inset-0 bg-primary blur-sm opacity-60" />
          <div className="absolute inset-0 bg-primary" />
        </motion.div>
      </div>
    </div>
  );
}
