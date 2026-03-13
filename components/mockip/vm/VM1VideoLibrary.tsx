"use client";

import { useState } from "react";
import { Video, Play, ChevronLeft, Download } from "lucide-react";

const AVATARS = [
  "/hero/h1.webp",
  "/hero/h2.webp",
  "/hero/h3.webp",
  "/hero/h4.webp",
  "/hero/h5.webp",
  "/hero/h6.webp",
  "/hero/h7.webp",
  "/hero/h8.webp",
];
const speakerAvatarMap: Record<string, string> = {
  You: "/hero/h2.webp",
  Lisa: "/hero/h5.webp",
};
function getAvatar(speaker: string) {
  if (!speakerAvatarMap[speaker]) {
    let hash = 0;
    for (let i = 0; i < speaker.length; i++)
      hash = (hash * 31 + speaker.charCodeAt(i)) | 0;
    speakerAvatarMap[speaker] =
      AVATARS[((hash % AVATARS.length) + AVATARS.length) % AVATARS.length];
  }
  return speakerAvatarMap[speaker];
}

/* ─── data ──────────────────────────────────────── */

const todayVideos = [
  {
    title: "Team Standup — Mar 5",
    duration: "00:32:00",
    time: "9:00 AM",
    participants: 12,
    thumbnail: "/hero/lib1.webp",
  },
  {
    title: "Q3 Budget Review",
    duration: "01:05:12",
    time: "11:30 AM",
    participants: 9,
    thumbnail: "/hero/lib2.webp",
  },
  {
    title: "1:1 with Lisa",
    duration: "00:24:37",
    time: "2:00 PM",
    participants: 2,
    thumbnail: "/hero/lib6.webp",
  },
];

const yesterdayVideos = [
  {
    title: "Product Demo Recording",
    duration: "00:45:08",
    time: "10:00 AM",
    participants: 2,
    thumbnail: "/hero/lib4.webp",
  },
  {
    title: "Weekly All-Hands",
    duration: "00:58:21",
    time: "2:00 PM",
    participants: 9,
    thumbnail: "/hero/lib5.webp",
  },
  {
    title: "Design Review — Mobile",
    duration: "00:37:44",
    time: "4:30 PM",
    participants: 6,
    thumbnail: "/hero/lib3.webp",
  },
];

type TranscriptEntry = { speaker: string; time: string; text: string };

const transcriptsByVideo: Record<
  string,
  { entries: TranscriptEntry[]; summary: string }
> = {
  "Team Standup — Mar 5": {
    entries: [
      {
        speaker: "Mike",
        time: "00:45-01:12",
        text: "Yesterday I finished the auth migration. Tests are all green. Today I'm picking up the notification service refactor.",
      },
      {
        speaker: "Sarah",
        time: "01:13-01:38",
        text: "I'm still working on the dashboard redesign — the chart component is taking longer than expected. Should be done by EOD.",
      },
      {
        speaker: "Mike",
        time: "01:39-02:05",
        text: "Need any help with the chart library? I ran into similar issues last sprint with the axis scaling.",
      },
    ],
    summary:
      "Team synced on sprint progress. Auth migration complete, dashboard redesign in progress. Mike offered to help Sarah with chart component issues.",
  },
  "Q3 Budget Review": {
    entries: [
      {
        speaker: "CFO",
        time: "02:10-03:05",
        text: "Looking at Q3 actuals, we came in 8% under budget on infrastructure but 12% over on contractor spend. The net position is roughly flat.",
      },
      {
        speaker: "VP Eng",
        time: "03:06-03:42",
        text: "The contractor overage was due to the security audit — that wasn't in the original forecast. We should carve out a dedicated line item for Q4.",
      },
      {
        speaker: "CFO",
        time: "03:43-04:15",
        text: "Agreed. I'd also like to see the cloud cost projections updated with the new pricing tiers AWS announced last week.",
      },
    ],
    summary:
      "Q3 came in flat overall — infra savings offset contractor overruns from unplanned security audit. Action items: add security audit line item for Q4, update AWS cost projections.",
  },
  "1:1 with Lisa": {
    entries: [
      {
        speaker: "You",
        time: "00:30-01:10",
        text: "How are you feeling about the new team structure? I know the reorg shifted a few things around.",
      },
      {
        speaker: "Lisa",
        time: "01:11-01:55",
        text: "Honestly it's been positive. Having dedicated QA on the squad makes a huge difference. I do want to talk about growth — I'd like to take on more architecture work.",
      },
      {
        speaker: "You",
        time: "01:56-02:30",
        text: "That's great to hear. Let's map out a plan — maybe start with leading the API gateway redesign next quarter.",
      },
    ],
    summary:
      "Lisa is adjusting well to reorg and wants to grow into architecture work. Plan: have her lead the API gateway redesign in Q4 as a stretch assignment.",
  },
  "Product Demo Recording": {
    entries: [
      {
        speaker: "PM",
        time: "01:00-01:45",
        text: "Today I'll walk through the three features shipping in v2.4 — smart search, batch exports, and the new onboarding flow.",
      },
      {
        speaker: "PM",
        time: "01:46-02:30",
        text: "Smart search uses semantic matching now, so users can type natural language queries instead of exact keywords. Demo: watch what happens when I type 'meetings from last week about budget'.",
      },
    ],
    summary:
      "Demo covered v2.4 features: semantic smart search, batch exports, and revamped onboarding. Smart search showed strong natural language capabilities.",
  },
  "Weekly All-Hands": {
    entries: [
      {
        speaker: "CEO",
        time: "03:00-04:10",
        text: "We closed the Series B last Friday — $42M led by Accel. This gives us 30 months of runway at current burn. Huge thanks to the finance team for making this happen.",
      },
      {
        speaker: "VP Product",
        time: "04:11-05:00",
        text: "On the product side, MAU crossed 50K this week for the first time. Enterprise pipeline is looking strong — we have 8 deals in late-stage negotiations.",
      },
      {
        speaker: "CEO",
        time: "05:01-05:40",
        text: "We're also opening the London office next month. If anyone's interested in relocation, talk to HR — there are some great incentive packages.",
      },
    ],
    summary:
      "Series B closed at $42M (Accel-led), 30-month runway. MAU hit 50K milestone. 8 enterprise deals in late-stage. London office opening next month with relocation incentives.",
  },
  "Design Review — Mobile": {
    entries: [
      {
        speaker: "Lead Designer",
        time: "00:20-01:05",
        text: "I've updated the mobile nav based on last week's feedback. The bottom tab bar now uses adaptive icons, and we've reduced it from 5 tabs to 4.",
      },
      {
        speaker: "iOS Dev",
        time: "01:06-01:40",
        text: "The 4-tab approach works better for us technically too — it avoids the 'More' overflow menu which had poor engagement metrics.",
      },
      {
        speaker: "Lead Designer",
        time: "01:41-02:20",
        text: "For the settings screen, I've moved to a grouped list pattern. Let me show the before/after — the information density improved a lot without feeling cramped.",
      },
    ],
    summary:
      "Mobile nav simplified from 5 to 4 tabs — better UX and engagement. Settings screen redesigned with grouped list pattern for improved info density. Team aligned on direction.",
  },
};

/* ─── sub-components ────────────────────────────── */

type VideoData = {
  title: string;
  duration: string;
  time: string;
  participants: number;
  thumbnail: string;
};

function VideoCard({
  video,
  onClick,
}: {
  video: VideoData;
  onClick: () => void;
}) {
  return (
    <div
      className="flex flex-col gap-3 min-w-[140px] flex-[1_1_180px] cursor-pointer group"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[5/3] rounded-[14px] overflow-hidden bg-[#1A1A1E] group-hover:ring-2 group-hover:ring-[#7C9070]/40 transition-all">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/65" />
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
        <div className="absolute inset-x-0 bottom-3 flex justify-center">
          <div className="border border-bg-0 rounded-[6px] px-3 py-0.5 flex items-center justify-center">
            <span
              className="text-white text-xs font-semibold"
              style={{
                fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
              }}
            >
              {video.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <span className="text-[14px] font-semibold text-[#2D2D2D] truncate">
          {video.title}
        </span>
        <span className="text-[12px] text-[#8E8E93]">
          {video.time} · {video.participants} participants
        </span>
      </div>
    </div>
  );
}

function VideoSection({
  label,
  videos,
  onSelect,
  count,
}: {
  label: string;
  videos: VideoData[];
  onSelect: (v: VideoData) => void;
  count: number;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2">
        <span
          className="text-xs font-semibold tracking-[0.5px]"
          style={{ color: "#7C9070" }}
        >
          {label}
        </span>
        <span className="text-[11px] text-[#8E8E93] bg-white rounded-full px-2 py-0.5 font-medium">
          {count} videos
        </span>
      </div>
      <div className="flex flex-wrap gap-5 w-full">
        {videos.map((v) => (
          <VideoCard key={v.title} video={v} onClick={() => onSelect(v)} />
        ))}
      </div>
    </div>
  );
}

/* ─── transcript panel ─────────────────────────── */

function TranscriptPanel({
  video,
  onClose,
}: {
  video: VideoData;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"transcription" | "summary">(
    "transcription",
  );

  return (
    <div className="flex flex-col h-full bg-[#FAFAF9]">
      {/* Header */}
      <div className="flex flex-col gap-3 p-3 pb-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#F0F0EE] transition-colors"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
          >
            <ChevronLeft size={16} className="text-[#2D2D2D]" />
          </button>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-[16px] font-semibold text-[#2D2D2D] leading-tight">
              {video.title}
            </h2>
            <span className="text-[12px] text-[#8E8E93]">
              {video.time} · {video.duration}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-[#E5E4E1]">
          <button
            onClick={() => setActiveTab("transcription")}
            className={`pb-2.5 text-[13px] font-medium transition-colors relative ${
              activeTab === "transcription"
                ? "text-[#2D2D2D]"
                : "text-[#8E8E93] hover:text-[#6B6B6B]"
            }`}
          >
            Transcription
            {activeTab === "transcription" && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E8734A] rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("summary")}
            className={`pb-2.5 text-[13px] font-medium transition-colors relative ${
              activeTab === "summary"
                ? "text-[#2D2D2D]"
                : "text-[#8E8E93] hover:text-[#6B6B6B]"
            }`}
          >
            Summary & Action Items
            {activeTab === "summary" && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E8734A] rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-5 flex flex-col gap-4 phone-scroll">
        {activeTab === "transcription" ? (
          (transcriptsByVideo[video.title]?.entries ?? []).map((entry, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 bg-white rounded-[12px] p-4"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={getAvatar(entry.speaker)}
                  alt={entry.speaker}
                  className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex items-baseline gap-2">
                  <span className="text-[13px] font-semibold text-[#2D2D2D]">
                    {entry.speaker}
                  </span>
                  <span className="text-[11px] text-[#B0B0B0]">
                    {entry.time}
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-[#4A4A4A] leading-[1.6]">
                {entry.text}
              </p>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-3 bg-white rounded-[12px] p-4">
            <p className="text-[13px] text-[#4A4A4A] leading-[1.6]">
              {transcriptsByVideo[video.title]?.summary ??
                "No summary available."}
            </p>
          </div>
        )}
      </div>

      {/* Download button */}
      <div className="p-5 pt-3">
        <button className="w-full flex items-center justify-center gap-2 h-11 rounded-[10px] bg-[#2D2D2D] hover:bg-[#1A1A1E] text-white text-[13px] font-semibold transition-colors">
          <Download size={15} />
          Download Now
        </button>
      </div>
    </div>
  );
}

/* ─── main ──────────────────────────────────────── */

export default function VM1VideoLibrary() {
  const [selected, setSelected] = useState<VideoData | null>(null);

  return (
    <div
      data-lenis-prevent
      className="flex w-full h-full bg-[#F7F6F3] overflow-hidden"
    >
      {/* Video grid — shrinks when panel opens */}
      <div
        className="flex flex-col gap-2 h-full overflow-auto p-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] phone-scroll"
        style={{ flex: selected ? "1 1 0%" : "1 1 100%" }}
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
          <div className="flex items-center gap-1.5 text-[13px] text-[#8E8E93]">
            <span>Sort by</span>
            <span className="font-semibold text-text-0">Recent recordings</span>
            <ChevronLeft size={14} className="text-[#8E8E93] rotate-[-90deg]" />
          </div>
        </div>

        <VideoSection
          label="Today"
          videos={todayVideos}
          onSelect={setSelected}
          count={3}
        />
        <div className="w-full h-px bg-[#E5E4E1]" />
        <VideoSection
          label="Yesterday"
          videos={yesterdayVideos}
          onSelect={setSelected}
          count={3}
        />
      </div>

      {/* Transcript panel — slides in from right */}
      <div
        className="h-full overflow-hidden border-l border-[#E5E4E1] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          width: selected ? 380 : 0,
          minWidth: selected ? 380 : 0,
          opacity: selected ? 1 : 0,
        }}
      >
        {selected && (
          <TranscriptPanel video={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </div>
  );
}
