"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function ManagersHero() {
  return (
    <section className="relative w-full bg-web-bg-0 overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center pt-32 pb-20 px-6 md:px-20">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-grey-1 bg-grey-0 px-4 py-1.5 text-[12px] font-medium text-text-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              LUCI for Managers
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 text-[40px] md:text-[56px] font-semibold leading-[1.08] tracking-tight text-text-0 max-w-3xl"
            variants={fadeUp}
          >
            Transform Video Chaos Into
            <br />a Searchable Knowledge Base
          </motion.h1>

          <motion.p
            className="mt-5 text-base md:text-lg leading-relaxed text-text-2 max-w-[600px]"
            variants={fadeUp}
          >
            Stop wasting hours sifting through footage. LUCI automates video
            understanding, so your team can focus on insights, not playback.
          </motion.p>

          <motion.div className="mt-8 flex gap-3" variants={fadeUp}>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Start for Free
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-grey-1 bg-white px-6 py-2.5 text-[14px] font-semibold text-text-0 transition-colors hover:bg-grey-0"
            >
              Request a Demo
            </a>
          </motion.div>
          <img
            src="/usecase-manage/mana.webp"
            alt="Managers Hero"
            className="w-full h-full object-cover mt-10"
          />
          <motion.div
            className="mt-12 flex flex-col items-center gap-2 text-text-2"
            variants={fadeUp}
          >
            <span className="text-[12px] tracking-wide">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
