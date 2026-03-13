"use client";

import Image from "next/image";
import { Plus, ArrowUp } from "lucide-react";

type ChatMessage =
  | { role: "user"; text: string }
  | { role: "assistant"; text: string }
  | { role: "link"; text: string; link: string }
  | { role: "images"; srcs: string[] };

const chatMessages: ChatMessage[] = [
  {
    role: "user",
    text: "Summarize the conclusions from my project review meetings over the past 3 days.",
  },
  {
    role: "assistant",
    text: "I found recordings. Here are the key takeaways:",
  },
  {
    role: "assistant",
    text: "1. Homepage dev starts next week\n2. Mobile responsiveness escalated to P0\n3. API integration must be ready by Friday",
  },

  {
    role: "images",
    srcs: [
      "/landscape/lan5.webp",
      "/landscape/lan8.webp",
      "/landscape/lan11.webp",
    ],
  },
];

function ChatBubble({ msg }: { msg: ChatMessage }) {
  switch (msg.role) {
    case "user":
      return (
        <div className="flex justify-end">
          <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-orange-50 px-4 py-3 text-sm text-neutral-800">
            {msg.text}
          </div>
        </div>
      );
    case "assistant":
      return (
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3 text-sm text-neutral-800">
            {msg.text}
          </div>
        </div>
      );
    case "link":
      return (
        <div className="text-sm text-neutral-700">
          {msg.text}{" "}
          <span className="font-medium text-orange-500">{msg.link}</span>
        </div>
      );
    case "images":
      return (
        <div className="grid grid-cols-3 gap-2">
          {msg.srcs.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <img src={src} alt="" className="object-cover aspect-square" />
            </div>
          ))}
        </div>
      );
  }
}

export default function FeatureVideoSearch() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-20 md:py-16">
      {/* Text — left */}
      <div>
        <h2 className="text-xl font-medium md:text-4xl lg:text-5xl">
          Search, summarize, and ask about any video
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-text-1 md:text-lg">
          Connect your video library. Search content directly in chat, get
          automatic summaries, and ask follow-up questions — all grounded in the
          video. Ask directly instead of scrubbing timelines. Get answers, not
          timestamps.
        </p>
      </div>

      {/* Visual — right */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        {/* Background landscape */}
        <Image
          src="/landscape/lan7.webp"
          alt=""
          fill
          className="object-cover"
        />

        {/* Chat card overlay */}
        <div className="relative z-10 m-5 overflow-hidden rounded-2xl bg-white shadow-lg  md:m-6">
          {/* Chat body */}
          <div className="flex flex-col gap-3 p-3">
            {chatMessages.map((msg, i) => (
              <ChatBubble key={i} msg={msg} />
            ))}
          </div>

          {/* Input bar */}
          <div className="border-t border-neutral-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-300">Press Fn to ask</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <button className="flex size-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-400">
                <Plus className="size-4" />
              </button>
              <button className="flex size-8 items-center justify-center rounded-full bg-neutral-900 text-white">
                <ArrowUp className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
