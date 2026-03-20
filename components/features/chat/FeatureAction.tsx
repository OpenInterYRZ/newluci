"use client";

import Image from "next/image";
import { Plus, ArrowUp, Check } from "lucide-react";

type ChatMessage =
  | { role: "user"; text: string }
  | { role: "assistant"; text: string }
  | { role: "checklist"; intro: string; items: string[]; outro: string }
  | {
      role: "progress";
      text: string;
      steps: ("done" | "active" | "pending")[];
      status: string;
    };

const chatMessages: ChatMessage[] = [
  {
    role: "checklist",
    intro: "I analyzed the meeting just now and found these action items:",
    items: [
      "Compile meeting notes and send to all attendees",
      "Update the Gantt chart and adjust the Q2 timeline",
      "Contact the design team to confirm new UI delivery date",
    ],
    outro: "Want me to start working through these?",
  },
  {
    role: "user",
    text: "Go ahead! Send me a report when you're done.",
  },
  {
    role: "progress",
    text: "On it! I'll send you a full report once everything is done.",
    steps: ["done", "done", "active", "pending", "pending"],
    status:
      "Working on: Contact design team to confirm new UI delivery date...",
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
    case "checklist":
      return (
        <div className="rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3 text-sm text-neutral-800">
          <p>{msg.intro}</p>
          <div className="mt-3 flex flex-col gap-2.5">
            {msg.items.map((item, i) => (
              <label key={i} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border border-neutral-300 bg-white" />
                <span>
                  {i + 1}. {item}
                </span>
              </label>
            ))}
          </div>
          <p className="mt-3 font-medium">{msg.outro}</p>
        </div>
      );
    case "progress":
      return (
        <div className="rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3 text-sm text-neutral-800">
          <p>{msg.text}</p>
          {/* Step indicators */}
          <div className="mt-3 flex items-center gap-1">
            {msg.steps.map((s, i) => (
              <div key={i} className="flex items-center">
                {s === "done" && (
                  <span className="flex size-5 items-center justify-center rounded-full bg-green-500 text-white">
                    <Check className="size-3" />
                  </span>
                )}
                {s === "active" && (
                  <span className="flex size-5 items-center justify-center rounded-full border-2 border-orange-400 bg-orange-100">
                    <span className="size-2 rounded-full bg-orange-400" />
                  </span>
                )}
                {s === "pending" && (
                  <span className="size-5 rounded-full bg-neutral-200" />
                )}
                {i < msg.steps.length - 1 && (
                  <span className="mx-0.5 h-0.5 w-3 bg-neutral-300" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-orange-500">{msg.status}</p>
        </div>
      );
  }
}

export default function FeatureAction() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-20 md:py-16">
      {/* Visual — left */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src="/landscape/lan10.webp"
          alt=""
          fill
          className="object-cover"
        />

        <div className="relative z-10 m-5 overflow-hidden rounded-2xl bg-white shadow-lg  md:m-6">
          <div className="flex flex-col gap-3 p-3">
            {chatMessages.map((msg, i) => (
              <ChatBubble key={i} msg={msg} />
            ))}
          </div>

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

      {/* Text — right */}
      <div>
        <h2 className="text-xl font-medium md:text-4xl lg:text-4xl">
          From understanding to execution
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-text-1 md:text-lg">
          Not just answers. LUCI identifies to-dos, next steps, and follow-ups —
          then prompts you at the right time to move things forward.
        </p>
      </div>
    </div>
  );
}
