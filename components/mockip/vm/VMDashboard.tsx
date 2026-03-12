"use client";

import { useState } from "react";
import {
  Video,
  Brain,
  FileText,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import VM1VideoLibrary from "./VM1VideoLibrary";
import VM2MemoryPage from "./VM2MemoryPage";
import VM3TaskExecution from "./VM3TaskExecution";
import VM4ChatScreen from "./VM4ChatScreen";
import VM5AnalyzeVideo from "./VM5AnalyzeVideo";
import VM6CognitiveSync from "./VM6CognitiveSync";
import VM7WeeklyReport from "./VM7WeeklyReport";
import VM7AnalysisReport from "./VM7AnalysisReport";

const tabs = [
  { key: "video", label: "Video", icon: Video, component: VM1VideoLibrary },
  {
    key: "analyze",
    label: "Analyze",
    icon: Sparkles,
    component: VM5AnalyzeVideo,
  },
  {
    key: "cognitive",
    label: "Memories",
    icon: Brain,
    component: VM6CognitiveSync,
  },
  {
    key: "report",
    label: "Report",
    icon: FileText,
    component: VM7WeeklyReport,
  },
] as const;

export default function VMDashboard() {
  const [activeTab, setActiveTab] = useState<string>("video");

  const ActiveComponent =
    tabs.find((t) => t.key === activeTab)?.component ?? VM1VideoLibrary;

  return (
    <div className="flex h-full w-full flex-col bg-web-bg-0">
      {/* VSCode-style tab bar */}
      <div className="flex shrink-0 items-end bg-web-bg-0 overflow-x-auto pl-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`group relative flex items-center gap-1.5 px-3 py-[7px] text-xs font-medium  transition-colors select-none ${
                isActive
                  ? "bg-[#F7F6F3] text-text-0"
                  : "bg-web-bg-0 text-text-2 hover:bg-web-bg-0/80"
              }`}
              style={{ minWidth: 0 }}
            >
              {/* Active top accent */}
              {isActive && (
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
              )}
              <tab.icon size={14} className="shrink-0" />
              <span className="truncate">{tab.label}</span>
              {/* Close icon (decorative) */}
              <X
                size={12}
                className={`shrink-0 ml-1 rounded-sm transition-colors ${
                  isActive
                    ? "text-text-2 hover:text-text-0 hover:bg-web-bg-0/80"
                    : "text-transparent group-hover:text-text-2"
                }`}
              />
            </button>
          );
        })}
        {/* Empty space to fill rest of bar */}
        <div className="flex-1 bg-web-bg-0 border-b border-web-bg-0" />
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-hidden bg-white">
        <ActiveComponent />
      </div>
    </div>
  );
}
