"use client";

import Image from "next/image";
import { FileText, ChevronRight, Plus } from "lucide-react";

export default function FeatureChannels() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-20 md:py-16">
      {/* Visual — left */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src="/landscape/lan3.webp"
          alt=""
          fill
          className="object-cover"
        />

        <div className="relative z-10 m-5 md:m-6 rounded-2xl bg-white p-5 shadow-lg">
          <h4 className="text-base font-semibold text-neutral-900 mb-5">
            Import memory to LUCI
          </h4>

          <div className="flex items-center gap-3">
            {/* Step 1: Send skill.zip to OpenClaw */}
            <div className="flex-1 rounded-xl bg-neutral-50 p-4">
              <p className="text-xs font-semibold text-neutral-800">
                Send skill.zip to OpenClaw
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-neutral-400">
                Open your original OpenClaw product and send it the ZIP file. It
                will process and package your memories.
              </p>

              <div className="mt-4 flex items-center gap-2.5 rounded-lg border border-neutral-200 bg-white px-3 py-2">
                <div className="flex size-7 items-center justify-center rounded-md bg-neutral-100">
                  <FileText className="size-3.5 text-neutral-400" />
                </div>
                <span className="text-xs text-neutral-600">
                  claw-migration.zip
                </span>
              </div>

              <button className="mt-3 rounded-full bg-orange-400 px-5 py-1.5 text-xs font-medium text-white">
                Download
              </button>
            </div>

            {/* Arrow */}
            <ChevronRight className="size-4 shrink-0 text-neutral-300" />

            {/* Step 2: Upload to LUCI */}
            <div className="flex-1 rounded-xl bg-neutral-50 p-4">
              <p className="text-xs font-semibold text-neutral-800">
                Upload the memory export ZIP
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-neutral-400">
                Upload that ZIP here. LUCI will import all your memories
                instantly.
              </p>

              <div className="mt-4 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-200 bg-white py-4">
                <div className="flex size-8 items-center justify-center rounded-full bg-orange-400 text-white">
                  <Plus className="size-4" />
                </div>
                <p className="mt-2 text-[10px] text-neutral-400">
                  Drop memory.zip here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text — right */}
      <div>
        <h2 className="text-xl font-medium md:text-4xl lg:text-5xl">
          Migrate from OpenClaw
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-text-1 md:text-lg">
          Move your existing OpenClaw memories into the new workspace, so your
          context stays intact from day one. No retraining, no starting over —
          just continuity.
        </p>
      </div>
    </div>
  );
}
