"use client";

import { useState } from "react";

type NavItem = "Dashboard" | "Memories" | "Tasks" | "Agents" | "Settings";

interface ContentConfig {
  title: string;
  subtitle: string;
  showCards: boolean;
  cardCount?: number;
}

const contentMap: Record<NavItem, ContentConfig> = {
  Dashboard: {
    title: "Good evening, Alex",
    subtitle: "3 tasks completed today · 12 memories captured",
    showCards: true,
    cardCount: 3,
  },
  Memories: {
    title: "Your Memories",
    subtitle: "156 memories stored · 23 from today",
    showCards: true,
    cardCount: 4,
  },
  Tasks: {
    title: "Active Tasks",
    subtitle: "8 pending tasks · 2 due today",
    showCards: false,
  },
  Agents: {
    title: "AI Agents",
    subtitle: "5 agents configured · 3 active",
    showCards: true,
    cardCount: 2,
  },
  Settings: {
    title: "Settings",
    subtitle: "Manage your preferences and account",
    showCards: false,
  },
};

export default function ProductMockup() {
  const [activeNav, setActiveNav] = useState<NavItem>("Dashboard");
  const [isHovered, setIsHovered] = useState(false);

  const content = contentMap[activeNav];
  const navItems: NavItem[] = [
    "Dashboard",
    "Memories",
    "Tasks",
    "Agents",
    "Settings",
  ];
  const fadeMask =
    "linear-gradient(to bottom, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)";

  return (
    <div
      className={`bg-bg-1 rounded-xl p-0.5 w-full max-w-275 h-80 md:h-128 lg:h-145 flex flex-col transition-all duration-300 `}
      style={{
        WebkitMaskImage: fadeMask,
        maskImage: fadeMask,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mockup Screen */}
      <div className="bg-bg-0 rounded-lg h-full flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-bg-1 h-10 flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>

        {/* App Content */}
        <div className="flex h-full overflow-hidden">
          {/* Sidebar */}
          <div className="bg-bg-0 w-48 md:w-52 lg:w-55 h-full flex flex-col gap-3 py-5 px-4">
            <div className="text-brand-5 font-mono text-sm font-semibold tracking-wider mb-2">
              LUCI
            </div>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`text-left font-sans text-sm transition-all duration-200 rounded-md px-2 py-1.5 -mx-2 ${
                  activeNav === item
                    ? "text-primary font-medium bg-bg-1"
                    : "text-text-3 hover:text-text-2 hover:bg-bg-1/50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Main Area */}
          <div className="bg-bg-0 flex-1 h-full flex flex-col gap-5 py-6 px-7 overflow-hidden">
            <div className="transition-all duration-300">
              <div className="text-primary font-sans text-xl font-semibold">
                {content.title}
              </div>
              <div className="text-text-3 font-sans text-sm">
                {content.subtitle}
              </div>
            </div>

            {/* Cards Row */}
            {content.showCards && (
              <div className="flex gap-4 transition-all duration-300">
                {Array.from({ length: content.cardCount || 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-bg-1 rounded-lg flex-1 h-25 transition-all duration-300 hover:bg-bg-2"
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${i * 0.1}s both`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Task Section */}
            <div
              className="bg-bg-1 rounded-xl flex-1 p-4 transition-all duration-300"
              style={{
                animation: "fadeInUp 0.4s ease-out 0.3s both",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(0.625rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
