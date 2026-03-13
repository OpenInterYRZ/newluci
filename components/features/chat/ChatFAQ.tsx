"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What's the difference between a Channel and a regular chat?",
    a: "A regular chat is a single conversation thread. A Channel groups related conversations under one context — like a project, a client, or a topic. Everything inside a Channel shares the same memory, so LUCI already knows the background when you ask follow-up questions.",
  },
  {
    q: "What types of video content can I connect?",
    a: "LUCI supports Zoom, Google Meet, and Loom recordings, as well as locally stored video files. You can also connect your screen recordings. Any video with audio will be transcribed, indexed, and made searchable.",
  },
  {
    q: "Are task reminders generated automatically?",
    a: "Yes. LUCI analyzes your conversations and meeting content to detect action items, deadlines, and follow-ups. It then creates tasks and reminds you at the right time — no manual input required.",
  },
  {
    q: "Can I ask follow-up questions about a summary?",
    a: "Absolutely. Every summary is grounded in the original content. You can ask LUCI to expand on any point, quote the source, or dig into specific details — all within the same conversation.",
  },
  {
    q: "What scenarios is LUCI Chat best suited for?",
    a: "LUCI Chat works great for project management, meeting follow-ups, research synthesis, client communication tracking, and any workflow where information is scattered across tools. If you find yourself re-explaining context or digging through recordings, LUCI Chat is built for you.",
  },
];

export default function ChatFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="w-full bg-web-bg-0">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-6 py-16 md:flex-row md:gap-[100px] md:px-5 md:py-24">
        {/* Left — Title */}
        <div className="flex shrink-0 flex-col gap-4 md:w-[400px]">
          <h2 className="text-2xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
            Frequently
            <br />
            Asked
            <br />
            Questions.
          </h2>
          <p className="max-w-[360px] text-base leading-relaxed">
            Everything you need to know about LUCI Chat
          </p>
        </div>

        {/* Right — Accordion */}
        <div className="min-w-0 flex-1">
          <div className="h-px w-full bg-grey-1" />

          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium leading-snug transition-colors duration-200">
                    {faq.q}
                  </span>
                  <span className="flex size-5 shrink-0 items-center justify-center">
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      {isOpen ? (
                        <Minus size={20} className="text-primary" />
                      ) : (
                        <Plus size={20} className="text-primary" />
                      )}
                    </motion.div>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.2, delay: 0.05 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="whitespace-pre-line pb-4 text-sm leading-[1.6]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="h-px w-full bg-grey-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
