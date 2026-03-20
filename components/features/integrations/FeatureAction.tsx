"use client";

import Image from "next/image";
import { Blocks, Zap, GitBranch } from "lucide-react";

const skills = [
  {
    icon: Zap,
    name: "Auto-summarize meetings",
    desc: "Generate summary + action items after every call",
  },
  {
    icon: GitBranch,
    name: "Deal context builder",
    desc: "Pull WhatsApp, email & CRM into one deal view",
  },
  {
    icon: Blocks,
    name: "Weekly digest",
    desc: "Compile cross-tool activity into a Monday briefing",
  },
];

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

        <div className="relative z-10 m-5 md:m-6 rounded-2xl bg-white p-5 shadow-lg">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-4">
            Custom Skills
          </p>

          <div className="flex flex-col gap-3">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="rounded-xl border border-neutral-100 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-orange-50">
                      <Icon className="size-4 text-orange-500" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-neutral-800">
                        {skill.name}
                      </p>
                      <p className="text-xs text-neutral-400">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Text — right */}
      <div>
        <h2 className="text-xl font-medium md:text-4xl lg:text-4xl">
          Customize with Skills
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-text-1 md:text-lg">
          Use custom skills to shape how the system responds, automates, and
          works with your workflow — just like OpenClaw. Not just connecting
          data, but defining how it understands, triggers, and executes.
        </p>
      </div>
    </div>
  );
}
