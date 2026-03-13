"use client";

import { MoreHorizontal } from "lucide-react";

const memories = [
  {
    title: "Brainstorming Session",
    date: "02/04 15:00",
    thumbnail: "/landscape/lan3.webp",
  },
  {
    title: "Q1 Strategy Review",
    date: "02/04 15:00",
    thumbnail: "/landscape/lan5.webp",
  },
  {
    title: "Project Phoenix Kickoff",
    date: "02/04 15:00",
    thumbnail: "/landscape/lan7.webp",
  },
  {
    title: "Marketing Strategy Review",
    date: "02/04 15:00",
    thumbnail: "/landscape/lan8.webp",
  },
  {
    title: "Quarterly Alignment Meeting",
    date: "02/04 15:00",
    thumbnail: "/landscape/lan10.webp",
  },
  {
    title: "Project Zenith Review",
    date: "02/04 15:00",
    thumbnail: "/landscape/lan11.webp",
  },
];

function ContextMenuButton() {
  return (
    <div className="absolute top-2 right-2 z-20">
      <button className="flex size-7 items-center justify-center rounded-lg bg-white/90 shadow-sm backdrop-blur-sm">
        <MoreHorizontal className="size-4 text-neutral-600" />
      </button>
    </div>
  );
}

export default function FeatureChannels() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-20 md:py-16">
      {/* Visual — left: Video library grid with landscape background */}
      <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
        <img
          src="/landscape/lan3.webp"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="relative z-10 m-5 md:m-6 rounded-2xl bg-white p-5 shadow-lg">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Memories
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {memories.map((m, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                  <img
                    src={m.thumbnail}
                    alt={m.title}
                    className="size-full object-cover"
                  />
                </div>
                <p className="mt-1.5 text-xs font-medium text-neutral-800 leading-tight line-clamp-1">
                  {m.title}
                </p>
                <p className="text-[10px] text-neutral-400">{m.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text — right */}
      <div>
        <h2 className="text-xl font-medium md:text-4xl lg:text-5xl">
          Centralize your video memories
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-text-1 md:text-lg">
          Bring scattered videos into one unified library. Organize by topic,
          project, person, or meeting — no more digging through local folders or
          chat histories to find what you need.
        </p>
      </div>
    </div>
  );
}
