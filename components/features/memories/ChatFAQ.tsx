"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What content can Memories save?",
    a: "Memories centralizes your video content, including meeting recordings, interviews, demos, training, and other important video assets.",
  },
  {
    q: "Are transcripts and summaries generated automatically?",
    a: "Yes. Once you upload or connect a video, the system automatically generates transcripts and summaries so you can browse and understand content faster.",
  },
  {
    q: "Can I ask questions directly about video content?",
    a: "Yes. You can ask questions directly based on video content to quickly get key information, without scrubbing through timelines or watching the full video.",
  },
  {
    q: "What's the difference between Memories and regular video storage?",
    a: "Regular video storage mainly solves \"saving.\" Memories doesn't just save videos — it helps you understand content, extract key points, and bring relevant information back when you need it.",
  },
  {
    q: "What does the pre-meeting reminder include?",
    a: "Before a meeting starts, the system proactively reminds you of relevant memories, past content, or context so you can get into the discussion faster.",
  },
  {
    q: "What use cases is Memories best for?",
    a: "Memories works well for meeting prep, project retrospectives, research interview reviews, training content capture, and team knowledge management.",
  },
  {
    q: "Why not just watch videos instead?",
    a: "Video playback is good for full rewatching. Memories is better for quick review, extracting key points, asking questions directly, and getting reminders at the right moment.",
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
            Everything you need to know about Memories
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
