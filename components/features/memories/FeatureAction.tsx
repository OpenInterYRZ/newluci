"use client";

import Image from "next/image";

const contextItems = [
  "Last met Feb 20 — discussed Q1 pipeline targets",
  "Open action: Follow up on Enterprise deal pricing",
  "Alex prefers visual demos over slide decks",
  "Finalized Q2 marketing campaign",
];

export default function FeatureAction() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-20 md:py-16">
      {/* Visual — left */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl p-5 md:p-6">
        <Image
          src="/landscape/lan10.webp"
          alt=""
          fill
          className="object-cover"
        />

        <div className="relative z-10 w-full max-w-full overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="p-5">
            {/* Meeting title */}
            <h4 className="text-base font-semibold text-neutral-900">
              Sales Review with Alex
            </h4>
            <p className="mt-1 text-sm text-neutral-400">10:30–11:30 AM</p>

            {/* Divider */}
            <div className="my-4 h-px bg-neutral-100" />

            {/* Past Context */}
            <p className="text-sm font-medium text-neutral-700">Past Context</p>

            <ul className="mt-3 flex flex-col gap-3">
              {contextItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-neutral-600"
                >
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Text — right */}
      <div className="flex flex-col items-center ">
        <h2 className="text-xl font-medium md:text-4xl lg:text-4xl">
          Proactive reminders at the moments that matter
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-text-1 md:text-lg">
          Before a meeting starts, LUCI surfaces relevant memories, past
          discussions, and key context — so you can switch gears instantly
          instead of scrambling to catch up.
        </p>
      </div>
    </div>
  );
}
