"use client";

import { Video, Play } from "lucide-react";

/* ─── data ──────────────────────────────────────── */

const todayVideos = [
  {
    title: "Team Standup — Mar 5",
    duration: "32 min",
    time: "9:00 AM",
    participants: 4,
  },
  {
    title: "Q3 Budget Review",
    duration: "1h 05min",
    time: "11:30 AM",
    participants: 8,
  },
  {
    title: "1:1 with Lisa",
    duration: "24 min",
    time: "2:00 PM",
    participants: 2,
  },
];

const yesterdayVideos = [
  {
    title: "Product Demo Recording",
    duration: "45 min",
    time: "10:00 AM",
    participants: 12,
  },
  {
    title: "Weekly All-Hands",
    duration: "58 min",
    time: "2:00 PM",
    participants: 24,
  },
  {
    title: "Design Review — Mobile",
    duration: "37 min",
    time: "4:30 PM",
    participants: 6,
  },
];

/* ─── sub-components ────────────────────────────── */

type VideoData = {
  title: string;
  duration: string;
  time: string;
  participants: number;
};

function VideoCard({ title, duration, time, participants }: VideoData) {
  return (
    <div className="flex flex-col gap-3 flex-1 min-w-0">
      {/* Thumbnail */}
      <div className="relative w-full aspect-[5/3] rounded-[14px] overflow-hidden bg-[#1A1A1E]">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-[2px] flex items-center justify-center">
            <Play
              size={16}
              className="text-white ml-0.5"
              fill="white"
              fillOpacity={0.85}
            />
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-2.5 right-2.5 bg-[#2D2D2D]/80 backdrop-blur-sm rounded-md px-2.5 py-1">
          <span className="text-[#FAFAF9] text-[11px] font-semibold tracking-wide">
            {duration}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <span className="text-[14px] font-semibold text-[#2D2D2D] truncate">
          {title}
        </span>
        <span className="text-[12px] text-[#8E8E93]">
          {time} · {participants} participants
        </span>
      </div>
    </div>
  );
}

function VideoSection({
  label,
  videos,
}: {
  label: string;
  videos: VideoData[];
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <span
        className="text-[12px] font-semibold tracking-[0.5px]"
        style={{ color: "#7C9070" }}
      >
        {label}
      </span>
      <div className="flex gap-5 w-full">
        {videos.map((v) => (
          <VideoCard key={v.title} {...v} />
        ))}
      </div>
    </div>
  );
}

/* ─── main ──────────────────────────────────────── */

export default function VM1VideoLibrary() {
  return (
    <div
      data-lenis-prevent
      className="flex flex-col gap-4 w-full h-full overflow-auto p-4 bg-[#F7F6F3]"
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-1">
          <h1
            className="text-2xl font-medium tracking-[-0.8px] text-[#2D2D2D]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Video Library
          </h1>
          <span className="text-[13px] text-[#8E8E93]">
            Your recorded meetings and sessions
          </span>
        </div>

        {/* Badge */}
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-[10px] bg-white"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}
        >
          <Video size={16} className="text-[#7C9070]" />
          <span className="text-[13px] font-semibold text-[#6B6B6B]">
            6 videos
          </span>
        </div>
      </div>

      {/* Today */}
      <VideoSection label="Today" videos={todayVideos} />

      {/* Divider */}
      <div className="w-full h-px bg-[#E5E4E1]" />

      {/* Yesterday */}
      <VideoSection label="Yesterday" videos={yesterdayVideos} />
    </div>
  );
}
