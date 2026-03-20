"use client";

import Image from "next/image";
import { ChevronLeft } from "lucide-react";

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

export default function FeatureVideoSearch() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-20 md:py-16">
      {/* Text — left */}
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-medium md:text-4xl lg:text-4xl">
          Turn video into understandable information
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-text-1 md:text-lg">
          Automatically transcribe video content and generate concise summaries.
          Catch the key points without rewatching from the start — reduce the
          cost of understanding by extracting what matters.
        </p>
      </div>

      {/* Visual — right: Transcript UI */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl p-5 md:p-6">
        <Image
          src="/landscape/lan7.webp"
          alt=""
          fill
          className="object-cover"
        />

        <div className="relative z-10 w-full max-w-full overflow-hidden rounded-2xl bg-white shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
            <div className="flex items-center gap-3">
              <ChevronLeft className="size-5 text-neutral-400" />
              <div>
                <h4 className="text-sm font-semibold text-neutral-900">
                  Q2 Launch Sync — Engineering
                </h4>
                <p className="text-xs text-neutral-400">12:00–12:32 pm</p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700">
              <span className="text-sm">✦</span> Meeting Recording
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-neutral-100 px-4">
            <button className="border-b-2 border-orange-500 px-3 py-2.5 text-sm font-medium text-neutral-900">
              Transcription
            </button>
            <button className="px-3 py-2.5 text-sm text-neutral-400">
              Summary &amp; Action Items
            </button>
          </div>

          {/* Transcript entries */}
          <div className="flex flex-col divide-y divide-neutral-100 px-4">
            {transcriptEntries.map((entry, i) => (
              <div key={i} className="py-4">
                <div className="mb-2 flex items-center gap-2">
                  <img
                    src={speakerAvatarMap[entry.speaker] || "/hero/h2.webp"}
                    alt={entry.speaker}
                    className="size-6 rounded-full object-cover"
                  />
                  <span className="text-xs font-semibold text-neutral-800">
                    {entry.speaker}
                  </span>
                  <span className="text-xs text-neutral-400">{entry.time}</span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-600">
                  {entry.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
