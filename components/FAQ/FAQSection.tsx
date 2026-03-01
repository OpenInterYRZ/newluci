"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How is LUCI different from regular AI assistants?",
    a: "LUCI doesn't just answer questions — it remembers your preferences, tracks your tasks, and integrates information across apps. While typical AI starts from scratch every conversation, LUCI continuously learns how you work and becomes a truly personalized assistant.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. All data is end-to-end encrypted in transit and at rest. We never use your data for model training or share it with third parties. You can export or delete all your data at any time.",
  },
  {
    q: "What integrations are supported?",
    a: "We currently support 40+ tools including Notion, Google Workspace, Slack, GitHub, Figma, and Linear. New integrations are added monthly, and you can connect any service via our API.",
  },
  {
    q: "What's the difference between Free and Pro?",
    a: "The Free plan includes core AI conversations and basic task management. Pro unlocks unlimited integrations, advanced memory, priority response times, and team collaboration. Enterprise adds private deployment and custom solutions.",
  },
  {
    q: "Can I use LUCI offline?",
    a: "Core AI features require an internet connection, but local caching lets you view previous conversations, notes, and task lists while offline. Everything syncs automatically when you reconnect.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Head to Settings and click \"Manage Subscription\" to cancel anytime — no need to contact support. After cancellation, your account downgrades to Free at the end of the current billing cycle. All your data is preserved.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative w-full py-24 md:py-32">
      {/* Subtle radial glow behind the section */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,92,0,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#ff5c00]">
            FAQ
          </p>
          <h2 className="text-[clamp(32px,5vw,52px)] font-bold leading-[1.1] tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/50">
            Everything you need to know about LUCI
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-white/[0.08]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="group flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-200"
                >
                  <span
                    className={`text-lg font-medium leading-snug transition-colors duration-200 ${
                      isOpen
                        ? "text-[#ff5c00]"
                        : "text-white/90 group-hover:text-white"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-colors duration-200 ${
                        isOpen ? "text-[#ff5c00]" : "text-white/40"
                      }`}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[15px] leading-[1.7] text-white/55">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
