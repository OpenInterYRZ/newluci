"use client";

import Image from "next/image";

const integrations = [
  {
    name: "Notion",
    icon: "https://cdn.simpleicons.org/notion",
    connected: false,
  },
  {
    name: "Memories.ai",
    icon: "https://cdn.simpleicons.org/memories/F97316",
    connected: true,
    email: "UserUser@gmail.com",
  },
  {
    name: "Outlook Mail",
    icon: "https://cdn.simpleicons.org/microsoftoutlook",
    connected: false,
  },
  {
    name: "Outlook Calendar",
    icon: "https://cdn.simpleicons.org/microsoftoutlook/1976D2",
    connected: false,
  },
  {
    name: "Gmail",
    icon: "https://cdn.simpleicons.org/gmail",
    connected: false,
  },
  {
    name: "Google Drive",
    icon: "https://cdn.simpleicons.org/googledrive",
    connected: false,
  },
  {
    name: "Google Calendar",
    icon: "https://cdn.simpleicons.org/googlecalendar",
    connected: false,
  },
];

function IntegrationCard({ item }: { item: (typeof integrations)[number] }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-neutral-50 px-4 py-3">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white">
        <img src={item.icon} alt={item.name} className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-neutral-800">{item.name}</p>
        {item.email && <p className="text-xs text-neutral-400">{item.email}</p>}
      </div>
      {item.connected ? (
        <button className="shrink-0 rounded-full border border-orange-200 px-4 py-1.5 text-xs font-medium text-orange-500">
          Disconnect
        </button>
      ) : (
        <button className="shrink-0 rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-medium text-neutral-600">
          Connect
        </button>
      )}
    </div>
  );
}

export default function FeatureVideoSearch() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-20 md:py-16">
      {/* Text — left */}
      <div>
        <h2 className="text-xl font-medium md:text-4xl lg:text-4xl">
          Connect the tools where work already happens
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-text-1 md:text-lg">
          Connect your video memory, docs, inbox, and messaging tools into one
          working context. No more switching between apps to find what you need
          — everything flows into a single layer of understanding.
        </p>
      </div>

      {/* Visual — right */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src="/landscape/lan7.webp"
          alt=""
          fill
          className="object-cover"
        />

        <div className="relative z-10 m-5 md:m-6 rounded-2xl bg-white p-5 shadow-lg">
          <div className="grid grid-cols-2 gap-3">
            {integrations.map((item) => (
              <IntegrationCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
