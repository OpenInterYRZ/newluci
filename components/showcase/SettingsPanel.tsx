"use client";

import React, { useState } from "react";
import {
  siNotion,
  siGmail,
  siGoogledrive,
  siGooglecalendar,
  siZoom,
  siDropbox,
} from "simple-icons";

/* ── Reusable toggle switch ── */
function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative h-6 w-11 shrink-0 rounded-full cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-1 ${
        checked ? "bg-primary" : "bg-grey-2"
      }`}
    >
      <span
        className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
          checked ? "translate-x-[18px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}

type SettingsTab = "integrations" | "skills";

const SETTINGS_TABS: { id: SettingsTab; label: string }[] = [
  { id: "integrations", label: "Integrations" },
  { id: "skills", label: "Skills" },
];

/* Helper: render a simple-icons icon as an SVG */
function SiIcon({
  icon,
  size = 20,
  color,
}: {
  icon: { path: string; hex: string };
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color ?? `#${icon.hex}`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

interface ThirdPartyApp {
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  connected: boolean;
  category: "productivity" | "communication" | "storage";
}

const THIRD_PARTY_APPS: ThirdPartyApp[] = [
  {
    name: "Notion",
    subtitle: "Docs & Projects",
    icon: <SiIcon icon={siNotion} />,
    connected: false,
    category: "productivity",
  },
  {
    name: "Google Calendar",
    subtitle: "Events & Planning",
    icon: <SiIcon icon={siGooglecalendar} />,
    connected: false,
    category: "productivity",
  },
  {
    name: "Gmail",
    subtitle: "Communication",
    icon: <SiIcon icon={siGmail} />,
    connected: false,
    category: "communication",
  },
  {
    name: "Zoom",
    subtitle: "Video Meetings",
    icon: <SiIcon icon={siZoom} />,
    connected: false,
    category: "communication",
  },
  {
    name: "Google Drive",
    subtitle: "Cloud Storage",
    icon: <SiIcon icon={siGoogledrive} />,
    connected: false,
    category: "storage",
  },
  {
    name: "Dropbox",
    subtitle: "Cloud Storage",
    icon: <SiIcon icon={siDropbox} />,
    connected: false,
    category: "storage",
  },
];

const CATEGORY_LABELS: Record<ThirdPartyApp["category"], string> = {
  productivity: "Productivity",
  communication: "Communication",
  storage: "Storage",
};

/* ── Skills ── */
interface Skill {
  name: string;
  description: string;
  enabled: boolean;
  accentColor: string;
  icon: React.ReactNode;
}

const SKILLS: Skill[] = [
  {
    name: "Meeting Summary",
    description: "Auto-summarize meetings and extract action items",
    enabled: true,
    accentColor: "var(--primary)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" fill="var(--primary)" opacity="0.12" />
        <path
          d="M5.5 6.5H14.5M5.5 10H12.5M5.5 13.5H10"
          stroke="var(--primary)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Task Follow-up",
    description: "Track and follow up on assigned tasks automatically",
    enabled: true,
    accentColor: "var(--success)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" fill="#34A853" opacity="0.12" />
        <path
          d="M5.5 10.5L8.5 13.5L14.5 6.5"
          stroke="#34A853"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Smart Search",
    description: "Search across all connected apps and files",
    enabled: true,
    accentColor: "var(--info)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" fill="#4285F4" opacity="0.12" />
        <circle cx="9" cy="9" r="3.5" stroke="#4285F4" strokeWidth="1.4" />
        <path
          d="M12 12L15 15"
          stroke="#4285F4"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Email Draft",
    description: "Draft emails based on context and your writing style",
    enabled: false,
    accentColor: "var(--pro)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" fill="var(--pro)" opacity="0.12" />
        <rect
          x="4"
          y="5.5"
          width="12"
          height="9"
          rx="2"
          stroke="var(--pro)"
          strokeWidth="1.2"
        />
        <path d="M4.5 6L10 10.5L15.5 6" stroke="var(--pro)" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: "Calendar Prep",
    description: "Prepare briefings for upcoming meetings",
    enabled: false,
    accentColor: "var(--destructive)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" fill="#FF5F57" opacity="0.12" />
        <rect
          x="4.5"
          y="5"
          width="11"
          height="10.5"
          rx="2"
          stroke="#FF5F57"
          strokeWidth="1.2"
        />
        <path
          d="M7.5 5V3.5M12.5 5V3.5"
          stroke="#FF5F57"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path d="M4.5 8.5H15.5" stroke="#FF5F57" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function SettingsPanel() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("integrations");
  const [memoriesConnected, setMemoriesConnected] = useState(true);
  const [thirdPartyApps, setThirdPartyApps] = useState(THIRD_PARTY_APPS);
  const [skills, setSkills] = useState(SKILLS);

  const toggleThirdParty = (index: number) => {
    setThirdPartyApps((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, connected: !item.connected } : item,
      ),
    );
  };

  const toggleSkill = (index: number) => {
    setSkills((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, enabled: !item.enabled } : item,
      ),
    );
  };

  /* Group third-party apps by category */
  const groupedApps = thirdPartyApps.reduce(
    (acc, app, originalIndex) => {
      if (!acc[app.category]) acc[app.category] = [];
      acc[app.category].push({ ...app, originalIndex });
      return acc;
    },
    {} as Record<string, (ThirdPartyApp & { originalIndex: number })[]>,
  );

  const enabledSkillsCount = skills.filter((s) => s.enabled).length;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white">
      {/* Tab bar */}
      <div className="flex items-end border-b border-grey-1 pl-6 shrink-0 overflow-x-auto phone-scroll">
        {SETTINGS_TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative shrink-0 px-3 py-3 text-[13px] font-medium whitespace-nowrap transition-colors duration-200 active:opacity-70 focus-visible:outline-none focus-visible:text-text-0 ${
                isActive
                  ? "text-text-0"
                  : "text-text-3 hover:text-text-2"
              }`}
            >
              {tab.label}
              {tab.id === "skills" && (
                <span className="ml-1.5 text-[11px] text-text-3 font-normal">
                  {enabledSkillsCount}/{skills.length}
                </span>
              )}
              <span
                className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-primary transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-5 phone-scroll">
        {activeTab === "integrations" && (
          <div className="flex flex-col gap-6">
            {/* ── Core AI Integration — flat, no card wrapper ── */}
            <div className="border-l-2 border-pro pl-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pro">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7Z" fill="#fff" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-text-0">
                      Memories.ai
                    </span>
                    <span className="rounded-full bg-pro/10 px-2 py-0.5 text-[10px] font-semibold text-pro uppercase tracking-wide">
                      Core
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-2 leading-relaxed mb-2">
                AI-powered summaries and smart search across your entire
                recording library.
              </p>
              {memoriesConnected && (
                <p className="text-xs font-medium text-pro mb-2">
                  Connected as User@gmail.com
                </p>
              )}
              <div className="flex items-center gap-2">
                {memoriesConnected ? (
                  <>
                    <button className="rounded-lg bg-pro px-3.5 py-1.5 text-xs font-semibold text-white transition-all duration-150 hover:brightness-110 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pro/40 focus-visible:ring-offset-1">
                      Manage
                    </button>
                    <button
                      onClick={() => setMemoriesConnected(false)}
                      className="text-xs font-medium text-text-2 hover:text-text-0 transition-colors duration-150 focus-visible:outline-none focus-visible:underline"
                    >
                      Disconnect
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setMemoriesConnected(true)}
                    className="rounded-lg bg-pro px-3.5 py-1.5 text-xs font-semibold text-white transition-all duration-150 hover:brightness-110 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pro/40 focus-visible:ring-offset-1"
                  >
                    Connect
                  </button>
                )}
              </div>
            </div>

            {/* ── Third-Party Apps — grouped by category ── */}
            <div>
              <h3 className="text-xs font-semibold text-text-3 uppercase tracking-wider mb-3">
                Third-Party Apps
              </h3>
              <div className="flex flex-col gap-4">
                {(
                  Object.keys(CATEGORY_LABELS) as ThirdPartyApp["category"][]
                ).map((category) => {
                  const apps = groupedApps[category];
                  if (!apps || apps.length === 0) return null;
                  return (
                    <div key={category}>
                      <div className="text-[11px] font-medium text-text-3 mb-1.5 pl-0.5">
                        {CATEGORY_LABELS[category]}
                      </div>
                      <div className="flex flex-col">
                        {apps.map((app, i) => (
                          <div
                            key={app.name}
                            className={`flex items-center gap-3 py-2.5 px-0.5 ${
                              i < apps.length - 1
                                ? "border-b border-grey-1"
                                : ""
                            } ${
                              app.connected ? "opacity-100" : "opacity-60 hover:opacity-80"
                            } transition-opacity duration-200`}
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-grey-0">
                              {app.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-text-0 truncate">
                                {app.name}
                              </div>
                              <div className="text-[11px] text-text-3 truncate">
                                {app.subtitle}
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                toggleThirdParty(app.originalIndex)
                              }
                              className={`shrink-0 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-1 ${
                                app.connected
                                  ? "bg-primary/10 text-primary hover:bg-primary/15"
                                  : "bg-grey-0 text-text-1 hover:bg-grey-1"
                              }`}
                            >
                              {app.connected ? "Connected" : "Connect"}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="flex flex-col gap-1">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className={`flex items-center gap-3 rounded-lg py-3 px-3 transition-all duration-200 ${
                  skill.enabled
                    ? "bg-grey-0"
                    : "opacity-50 hover:opacity-70"
                }`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                  {skill.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-text-0">
                    {skill.name}
                  </div>
                  <div className="text-[11px] text-text-2 leading-snug">
                    {skill.description}
                  </div>
                </div>
                <Toggle
                  checked={skill.enabled}
                  onChange={() => toggleSkill(i)}
                  label={`Toggle ${skill.name}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
