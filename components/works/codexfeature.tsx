"use client";

import { motion } from "framer-motion";
import MemoryChatCard from "./MemoryChatCard";
import VideoMemoryCard from "./VideoMemoryCard";
import RecordToExecuteCard from "./RecordToExecuteCard";
import WhereYouAreCard from "./WhereYouAreCard";
import SkillsCard from "./SkillsCard";

export default function CodexFeature() {
  return (
    <section className="w-full bg-web-bg-0">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-28">
        {/* ─── Header ─── */}
        <div className="flex flex-col gap-4 mb-16">
          <motion.h1
            className="text-2xl md:text-4xl font-semibold leading-[1.15] text-text-0 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Your second brain,
            <br />
            Smarter about your work than you
          </motion.h1>
          <motion.h2
            className="text-base text-text-2 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            LUCI integrates fragmented information into structured memory,
            turning every conversation and every video into reusable knowledge
            assets.
          </motion.h2>
        </div>

        {/* ─── Feature Cards ─── */}
        <div className="flex flex-col gap-16 md:gap-32">
          <MemoryChatCard />
          <VideoMemoryCard />
          <RecordToExecuteCard />
          <WhereYouAreCard />
          <SkillsCard />
        </div>
      </div>
    </section>
  );
}
