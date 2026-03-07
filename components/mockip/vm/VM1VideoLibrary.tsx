"use client";

import { Video } from "lucide-react";

const todayVideos = [
  { title: "Team Standup — Mar 5", duration: "32 min" },
  { title: "Q3 Budget Review", duration: "1h 05min" },
  { title: "1:1 with Lisa", duration: "24 min" },
];

const yesterdayVideos = [
  { title: "Product Demo Recording", duration: "45 min" },
  { title: "Weekly All-Hands", duration: "58 min" },
  { title: "Design Review — Mobile", duration: "37 min" },
];

function VideoCard({ title, duration }: { title: string; duration: string }) {
  return (
    <div className="flex flex-col gap-2 w-[220px] shrink-0">
      <div className="relative w-full h-[130px] rounded-lg bg-[#1A1A1A] overflow-hidden">
        <div className="absolute bottom-2 right-2 bg-black/60 rounded px-2 py-0.5">
          <span className="text-white text-[11px] font-medium font-[family-name:var(--font-manrope)]">
            {duration}
          </span>
        </div>
      </div>
      <span className="text-[#222] text-[13px] font-semibold font-[family-name:var(--font-manrope)]">
        {title}
      </span>
    </div>
  );
}

function VideoSection({
  label,
  videos,
}: {
  label: string;
  videos: typeof todayVideos;
}) {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      <span className="text-text-3 text-xs font-semibold tracking-wide">
        {label}
      </span>
      <div className="flex gap-4 w-full">
        {videos.map((v) => (
          <VideoCard key={v.title} title={v.title} duration={v.duration} />
        ))}
      </div>
    </div>
  );
}

export default function VM1VideoLibrary() {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-xl w-full">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <span className="text-text-0 text-base font-semibold">
          Video Library
        </span>
        <div className="flex items-center gap-1.5">
          <Video size={14} className="text-[#999]" />
          <span className="text-[#999] text-[13px]">6 videos</span>
        </div>
      </div>

      {/* Today */}
      <VideoSection label="Today" videos={todayVideos} />

      {/* Yesterday */}
      <VideoSection label="Yesterday" videos={yesterdayVideos} />
    </div>
  );
}
