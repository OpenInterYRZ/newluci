"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const freePlanFeatures = [
  "3-day virtual machine trial",
  "5 agent runs per day",
  "Context-aware meeting reminders",
  "Meeting video recording",
  "3 coaching tips per meeting",
  "1 meeting transcription per day",
  "5 voice-triggered tasks per day",
  "Basic agent skills",
];

const proPlanFeatures = [
  "Always-on virtual machine",
  "Unlimited agent runs",
  "Priority meeting reminders with calendar sync",
  "Real-time coaching with action items",
  "Unlimited meeting transcriptions",
  "Unlimited voice-triggered tasks",
  "Advanced agent skills & custom workflows",
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
    <div className="inline-flex items-center rounded-full border border-grey-1 bg-grey-0 p-1">
      <button
        onClick={() => !isYearly || onToggle()}
        className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
          !isYearly
            ? "bg-bg-0 text-text-0 shadow-sm"
            : "bg-transparent text-grey-3 hover:text-grey-5"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => isYearly || onToggle()}
        className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
          isYearly
            ? "bg-bg-0 text-text-0 shadow-sm"
            : "bg-transparent text-grey-3 hover:text-grey-5"
        }`}
      >
        Yearly
        <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
          Save 20%
        </span>
      </button>
    </div>
  );
}

function ExtraUsageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, close]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-lg border border-grey-1 bg-bg-0 px-4 py-3 text-left transition-colors hover:border-grey-2"
      >
        <span className="text-2xl font-bold text-text-0">
          {extraUsageOptions[selected].label}
        </span>
        <svg
          className={`h-4 w-4 text-grey-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
      <p className="mt-1.5 text-sm text-grey-3">
        {extraUsageOptions[selected].sublabel}
      </p>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-lg border border-grey-1 bg-bg-0 shadow-lg">
          {extraUsageOptions.map((opt, i) => (
            <button
              key={i}
              onClick={() => {
                setSelected(i);
                setIsOpen(false);
              }}
              className={`flex w-full flex-col px-4 py-3 text-left transition-colors hover:bg-grey-0 ${
                i === selected ? "bg-primary/5" : ""
              }`}
            >
              <span className="text-lg font-bold text-text-0">
                {opt.label}
              </span>
              <span className="text-xs text-grey-3">{opt.sublabel}</span>
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
        {/* Header — left-aligned for asymmetry */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] text-text-0">
              Simple pricing,<br />powerful tools
            </h2>
            <p className="mt-4 text-base text-text-2 max-w-md">
              Start free. Upgrade when you need more memory, more agents, and
              unlimited access.
            </p>
          </div>
          <BillingToggle
            isYearly={isYearly}
            onToggle={() => setIsYearly(!isYearly)}
          />
        </div>

        {/* Plans — 2 columns, Pro visually dominant */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[820px] mx-auto items-start">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
            className="flex flex-col rounded-2xl border border-grey-1 bg-bg-0 p-8 md:mt-6"
          >
            <h3 className="text-lg font-semibold text-text-0">Free</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-text-0">$0</span>
              <span className="text-sm text-grey-3">/month</span>
            </div>

            <button className="mt-6 w-full rounded-full border border-grey-2 bg-bg-0 py-3 text-sm font-semibold text-text-1 transition-colors hover:border-grey-3 hover:text-text-0">
              Get Started Free
            </button>

            <div className="mt-6 pt-6 border-t border-grey-1">
              <p className="text-sm font-medium text-grey-4">
                What&apos;s included:
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {freePlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-grey-3"
                    />
                    <span className="text-sm text-grey-5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Pro Plan — visually dominant */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="relative flex flex-col rounded-2xl border-2 border-primary bg-primary-light-default p-8 shadow-[0_8px_40px_rgba(255,159,28,0.18)] md:scale-[1.03] md:origin-top"
          >
            <div className="absolute -top-3.5 left-8 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white shadow-sm">
              Most popular
            </div>
            <h3 className="text-lg font-semibold text-text-0">Pro</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={`pro-${isYearly}`}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.25 }}
                  className="text-4xl font-bold text-text-0"
                >
                  ${isYearly ? 80 : 100}
                </motion.span>
              </AnimatePresence>
              <span className="text-sm text-grey-3">/month</span>
            </div>

            <button className="mt-6 w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(255,159,28,0.3)] transition-all hover:bg-primary-hover hover:shadow-[0_4px_20px_rgba(255,159,28,0.4)] hover:scale-[1.02] active:scale-[0.98]">
              Upgrade to Pro
            </button>

            <div className="mt-6 pt-6 border-t border-primary/15">
              <p className="text-sm font-medium text-grey-4">
                Everything in Free and:
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {proPlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <span className="text-sm text-grey-5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Extra Usage — separate add-on section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.25, 0.1, 0, 1],
          }}
          className="mx-auto mt-6 max-w-[820px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl border border-grey-1 bg-bg-0 p-8"
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-0">
              Need more usage?
            </h3>
            <p className="mt-1 text-sm text-grey-4">
              Add extra capacity on top of any plan. Free users must subscribe
              after the 3-day VM trial expires.
            </p>
          </div>
          <div className="w-full md:w-[220px] shrink-0">
            <ExtraUsageDropdown />
            <button className="mt-3 w-full rounded-full border border-primary bg-bg-0 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5">
              Add Usage
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
