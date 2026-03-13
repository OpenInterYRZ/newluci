"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Can I migrate my existing memories from OpenClaw?",
    a: "Yes. LUCI supports importing memories and context from OpenClaw so you can continue where you left off without losing your history.",
  },
  {
    q: "Which tools can I connect?",
    a: "LUCI integrates with messaging apps (Telegram, WhatsApp), video platforms, calendar, and document sources. You can connect the tools you already use and keep everything in one place.",
  },
  {
    q: "Does the system work across messages, docs, and video context?",
    a: "Yes. LUCI unifies messages, documents, and video into a single memory layer. You can ask questions that span all your content — no need to switch between apps or repeat context.",
  },
  {
    q: "Can I customize workflows with skills?",
    a: "Yes. Skills let you extend LUCI with custom behaviors, automations, and integrations. You can define how LUCI responds, what it remembers, and how it connects to your workflows.",
  },
  {
    q: "Is the skills system compatible with how OpenClaw works?",
    a: "LUCI's skills system is designed to be familiar to OpenClaw users. Core concepts carry over, and you can adapt existing skills or build new ones for LUCI's architecture.",
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
            Everything you need to know about Integrations
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
