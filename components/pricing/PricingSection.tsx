"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const freePlanFeatures = [
  "Virtual machine for 3 days",
  "Basic agent quota",
  "Context-aware meeting reminders",
  "Meeting video recording",
  "Basic meeting coaching suggestions",
  "Daily meeting transcription",
  "Trigger OpenClaw tasks with voice",
  "Basic agent skills",
];

const proPlanFeatures = [
  "Unlimited virtual machine",
  "Higher agent quota",
  "More context-aware meeting reminders",
  "More meeting coaching suggestions",
  "More meeting transcriptions",
  "More voice-triggered OpenClaw tasks",
  "Advanced agent skills",
];

const extraUsageOptions = [
  { label: "$10", sublabel: "+ 2x more usage than Free" },
  { label: "$20", sublabel: "+ 5x more usage than Free" },
  { label: "$50", sublabel: "+ 15x more usage than Free" },
];

function BillingToggle({
  isYearly,
  onToggle,
}: {
  isYearly: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 p-1">
      <button
        onClick={() => !isYearly || onToggle()}
        className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all ${
          !isYearly
            ? "bg-white text-gray-900 shadow-sm"
            : "bg-transparent text-gray-400 hover:text-gray-600"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => isYearly || onToggle()}
        className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
          isYearly
            ? "bg-white text-gray-900 shadow-sm"
            : "bg-transparent text-gray-400 hover:text-gray-600"
        }`}
      >
        Yearly
        <span className="rounded-full bg-orange-400 px-2 py-0.5 text-[11px] font-semibold text-white">
          20%
        </span>
      </button>
    </div>
  );
}

function ExtraUsageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-left transition-colors hover:border-gray-300"
      >
        <div>
          <span className="text-2xl font-bold text-gray-900">
            {extraUsageOptions[selected].label}
          </span>
        </div>
        <svg
          className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <p className="mt-1.5 text-sm text-gray-400">
        {extraUsageOptions[selected].sublabel}
      </p>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          {extraUsageOptions.map((opt, i) => (
            <button
              key={i}
              onClick={() => {
                setSelected(i);
                setIsOpen(false);
              }}
              className={`flex w-full cursor-pointer flex-col px-4 py-3 text-left transition-colors hover:bg-gray-50 ${
                i === selected ? "bg-orange-50" : ""
              }`}
            >
              <span className="text-lg font-bold text-gray-900">
                {opt.label}
              </span>
              <span className="text-xs text-gray-400">{opt.sublabel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-5 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.15] text-text-0">
            Upgrade your plan
          </h2>
          <BillingToggle
            isYearly={isYearly}
            onToggle={() => setIsYearly(!isYearly)}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
            className="flex flex-col border border-gray-200 bg-white p-8 md:rounded-l-2xl md:border-r-0"
          >
            <h3 className="text-lg font-semibold text-gray-900">Free</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-sm text-gray-400">/month</span>
            </div>

            <button className="mt-6 w-full cursor-pointer rounded-full border border-gray-300 bg-white py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50">
              Current Plan
            </button>

            <div className="mt-6">
              <p className="text-sm font-medium text-gray-500">
                What&apos;s included:
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {freePlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-gray-400"
                    />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="flex flex-col rounded-2xl border-2 border-orange-400 bg-white p-8 shadow-[0_4px_32px_rgba(251,146,60,0.10)]"
            style={{ zIndex: 1 }}
          >
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
              <span className="rounded-full bg-orange-400 px-3 py-1 text-[11px] font-semibold text-white">
                Most popular
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={`pro-${isYearly}`}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.25 }}
                  className="text-4xl font-bold text-gray-900"
                >
                  ${isYearly ? 80 : 100}
                </motion.span>
              </AnimatePresence>
              <span className="text-sm text-gray-400">/month</span>
            </div>

            <button className="mt-6 w-full cursor-pointer rounded-full bg-orange-400 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-500 hover:shadow-lg">
              Upgrade to Pro
            </button>

            <div className="mt-6">
              <p className="text-sm font-medium text-gray-500">
                Everything in Free and:
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {proPlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-orange-400"
                    />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Extra Usage */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="flex flex-col border border-gray-200 bg-white p-8 md:rounded-r-2xl md:border-l-0"
          >
            <h3 className="text-lg font-semibold text-gray-900">Extra Usage</h3>

            <div className="mt-4">
              <ExtraUsageDropdown />
            </div>

            <div className="mt-auto pt-8">
              <p className="text-center text-sm italic text-gray-400">
                After the virtual machine expires, free users must subscribe to
                use the OpenClaw feature.
              </p>
              <button className="mt-4 w-full cursor-pointer rounded-full border border-orange-400 bg-white py-3 text-sm font-semibold text-orange-400 transition-colors hover:bg-orange-50">
                Pay Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
