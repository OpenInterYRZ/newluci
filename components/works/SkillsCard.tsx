"use client";
import { Monitor, FileText, Mail, Pencil, ShoppingBag } from "lucide-react";

const skills = [
  {
    name: "Video Understanding",
    desc: "Built-in visual scene detection and context indexing",
    on: true,
    icon: Monitor,
    iconBg: "#B45309",
    iconColor: "#fff",
  },
  {
    name: "Meeting Summarizer",
    desc: "Contextual action items and recap emails",
    on: true,
    icon: FileText,
    iconBg: "#92702A",
    iconColor: "#fff",
  },
  {
    name: "Inbox Prioritization",
    desc: "Urgency scoring for incoming communications",
    on: false,
    icon: Mail,
    iconBg: "#6B7280",
    iconColor: "#fff",
  },
  {
    name: "Creative Asset Index",
    desc: "Deep search for design files and visual moodboards",
    on: false,
    icon: Pencil,
    iconBg: "#92702A",
    iconColor: "#fff",
  },
];

export default function SkillsCard() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      {/* ─── Left: Title + Desc ─── */}
      <div className="flex w-full flex-1 md:shrink-0 flex-col gap-5 pb-0 md:pb-6">
        <h3 className="text-3xl md:text-3xl font-semibold leading-[1.15] text-text-0">
          Extensible Skills Library
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          Customize your curator. Enable and disable specialized skills to
          tailor your Second Brain to your specific industry needs, from
          creative design to technical development.
        </p>

        {/* Logo + Skills count */}
        <div className="flex items-center gap-4 mt-3">
          <img
            src="/memorieslogo.svg"
            alt="Memories AI"
            className="h-6 w-auto"
            onClick={() => {
              window.open("https://memories.ai", "_blank");
            }}
          />
          <div className="h-5 w-px bg-neutral-200" />
          <span className="text-[13px] font-medium text-text-2">
            Built-in video understanding skills · Create your own
          </span>
        </div>
      </div>

      {/* ─── Right: Card with landscape background ─── */}
      <div className="relative flex-1 aspect-square overflow-hidden rounded-3xl flex items-center justify-center">
        <img
          src="/pb.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20" />

        <div className="relative z-10 m-5 md:m-8 overflow-hidden rounded-2xl bg-white shadow-lg max-w-[380px] w-full">
          {/* Header */}
          <div className="px-6 pt-6 pb-2">
            <span className="text-[17px] font-bold text-[#1A1A2E]">
              Skill Management
            </span>
            <p className="mt-1 text-[13px] text-[#9CA3AF]">
              Toggle active curators for your current workspace
            </p>
          </div>

          {/* Skills list */}
          <div className="flex flex-col px-3 pt-2 pb-2">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 rounded-xl px-3 py-3.5"
              >
                {/* Icon */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: skill.iconBg + "18" }}
                >
                  <skill.icon
                    className="h-[18px] w-[18px] text-primary"
                    strokeWidth={2}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-1 flex-col gap-0.5 overflow-hidden">
                  <span className="text-[14px] font-semibold text-[#1A1A2E]">
                    {skill.name}
                  </span>
                  <span className="truncate text-[12px] text-[#9CA3AF]">
                    {skill.desc}
                  </span>
                </div>

                {/* Toggle */}
                <div
                  className="relative h-[26px] w-[46px] shrink-0 cursor-pointer rounded-full transition-colors"
                  style={{
                    backgroundColor: skill.on ? "#334155" : "#E5E7EB",
                  }}
                >
                  <div
                    className="absolute top-[3px] h-[20px] w-[20px] rounded-full bg-white shadow-sm transition-all"
                    style={{
                      left: skill.on ? 23 : 3,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-4 pb-4 pt-1">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A2E] py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-[#2A2A3E]">
              <ShoppingBag className="h-4 w-4" strokeWidth={2} />
              Browse Skill Marketplace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
