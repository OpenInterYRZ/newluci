"use client";

import Image from "next/image";
import { ListTodo, TrendingUp } from "lucide-react";

const channels = [
  {
    name: "General",
    message: "Refined Figma designs based on new constraints",
    time: "5:45 pm",
  },
  {
    name: "PM",
    message: "promptpromptpromptpromptpromptprompt",
    time: "5:45 pm",
  },
  {
    name: "Sales",
    message: "Refined Figma designs based on new constraints",
    time: "5:45 pm",
  },
  {
    name: "CRM",
    message: "Refined Figma designs based on new constraints",
    time: "5:45 pm",
  },
];

const badges = [
  { icon: ListTodo, label: "10 Tasks" },
  { icon: TrendingUp, label: "120% Productivity" },
];

export default function FeatureChannels() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-20 md:py-16">
      {/* Visual — left */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        {/* Background landscape */}
        <Image
          src="/landscape/lan3.webp"
          alt=""
          fill
          className="object-cover"
        />

        {/* Card overlay */}
        <div className="relative z-10 m-5 rounded-2xl bg-white p-5 shadow-lg  md:m-6">
          {/* Badges */}
          <div className="mb-4 flex gap-2">
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-grey-1 px-3 py-1 text-xs font-medium text-neutral-700"
                >
                  <span className="flex size-6 items-center justify-center rounded-md bg-grey-0">
                    <Icon className="size-3.5 text-text-2" />
                  </span>
                  {b.label}
                </span>
              );
            })}
          </div>

          {/* Channel list */}
          <div className="divide-y divide-neutral-100">
            {channels.map((ch) => (
              <div key={ch.name} className="flex items-center gap-3 py-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-base font-bold text-orange-500">
                  #
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-neutral-900">
                    {ch.name}
                  </p>
                  <p className="truncate text-xs text-neutral-400">
                    {ch.message}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-neutral-400">
                  {ch.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text — right */}
      <div>
        <h2 className="text-xl font-medium md:text-4xl lg:text-4xl">
          Manage context with Channels
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-text-1 md:text-lg">
          Organize conversations by project, topic, or person. Each channel has
          its own context — follow-up questions work without repeating
          background.
        </p>
      </div>
    </div>
  );
}
