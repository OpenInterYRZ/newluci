import Image from "next/image";
import { ChevronLeft } from "lucide-react";

/* ── FeatureChannels data ─── */
const memories = [
  {
    title: "Brainstorming Session",
    date: "02/04 15:00",
    thumbnail: "/hero/lib1.webp",
  },
  {
    title: "Q1 Strategy Review",
    date: "02/04 15:00",
    thumbnail: "/hero/lib2.webp",
  },
  {
    title: "Project Phoenix Kickoff",
    date: "02/04 15:00",
    thumbnail: "/hero/lib3.webp",
  },
  {
    title: "Marketing Strategy Review",
    date: "02/04 15:00",
    thumbnail: "/hero/lib4.webp",
  },
  {
    title: "Quarterly Alignment Meeting",
    date: "02/04 15:00",
    thumbnail: "/hero/lib5.webp",
  },
  {
    title: "Project Zenith Review",
    date: "02/04 15:00",
    thumbnail: "/hero/lib6.webp",
  },
];

/* ── FeatureVideoSearch data ─── */
const speakerAvatarMap: Record<string, string> = {
  You: "/hero/h2.webp",
  Lisa: "/hero/h5.webp",
};

const transcriptEntries = [
  {
    speaker: "You",
    time: "12:03–12:47",
    text: "So the main blocker right now is the API rate limit on the analytics endpoint. We're hitting the cap around 2 PM every day when the bulk sync kicks in. I think we either need to batch the requests or negotiate a higher quota before the launch.",
  },
  {
    speaker: "Lisa",
    time: "12:48–13:15",
    text: "Agreed. I've already started prototyping a queue-based approach — we buffer the calls and spread them across a 10-minute window instead of firing everything at once. Should cut peak traffic by about 60%. I can have a PR up by Thursday.",
  },
];

export default function VideoMemoryCard() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:items-end gap-6 md:gap-10">
      {/* ─── Text ─── */}
      <div className="flex w-full md:w-[400px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
        <h3 className="text-2xl md:text-[28px] font-semibold md:font-bold leading-tight text-text-0">
          Video Understanding Memory
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          Long-form and bulk video understanding, converted into a searchable
          memory library. LUCI automatically extracts key moments, decisions,
          and action items.
        </p>
      </div>

      {/* ─── Visual: Two cards stacked with z-index ─── */}
      <div className="relative flex-1 overflow-hidden rounded-3xl aspect-[4/3]">
        <img
          src="/landscape/lan3.webp"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />

        {/* Back card: Transcript UI (z-20, front, bottom-right) */}
        <div className="absolute z-20 bottom-4 right-4 md:bottom-6 md:right-6 w-[65%] overflow-hidden rounded-2xl bg-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
            <div className="flex items-center gap-3">
              <ChevronLeft className="size-4 text-neutral-400" />
              <div>
                <h4 className="text-xs font-semibold text-neutral-900">
                  Q2 Launch Sync — Engineering
                </h4>
                <p className="text-[10px] text-neutral-400">12:00–12:32 pm</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-neutral-100 px-4">
            <button className="border-b-2 border-orange-500 px-2 py-2 text-xs font-medium text-neutral-900">
              Transcription
            </button>
            <button className="px-2 py-2 text-xs text-neutral-400">
              Summary
            </button>
          </div>

          {/* Transcript entries */}
          <div className="flex flex-col divide-y divide-neutral-100 px-4">
            {transcriptEntries.map((entry, i) => (
              <div key={i} className="py-3">
                <div className="mb-1.5 flex items-center gap-2">
                  <img
                    src={speakerAvatarMap[entry.speaker] || "/hero/h2.webp"}
                    alt={entry.speaker}
                    className="size-5 rounded-full object-cover"
                  />
                  <span className="text-[10px] font-semibold text-neutral-800">
                    {entry.speaker}
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    {entry.time}
                  </span>
                </div>
                <p className="text-[10px] leading-relaxed text-neutral-600 line-clamp-2">
                  {entry.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Back card: Video Library (z-10, behind, top-left) */}
        <div className="absolute z-10 top-4 left-4 md:top-6 md:left-6 w-[65%] rounded-2xl bg-white p-4 shadow-lg">
          <h4 className="text-sm font-semibold text-neutral-900 mb-3">
            Memories
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {memories.map((m, i) => (
              <div key={i}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
                  <img
                    src={m.thumbnail}
                    alt={m.title}
                    className="size-full object-cover"
                  />
                </div>
                <p className="mt-1 text-[10px] font-medium text-neutral-800 leading-tight line-clamp-1">
                  {m.title}
                </p>
                <p className="text-[9px] text-neutral-400">{m.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
