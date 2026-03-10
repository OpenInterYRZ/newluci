"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Sparkles } from "lucide-react";

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: { text: string; included: boolean }[];
  cta: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    description: "Get started with the basics",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Start Free",
    features: [
      { text: "5 video hours / month", included: true },
      { text: "Basic memory vault", included: true },
      { text: "Telegram integration", included: true },
      { text: "Community support", included: true },
      { text: "Custom actions", included: false },
      { text: "Team collaboration", included: false },
      { text: "Priority processing", included: false },
    ],
  },
  {
    name: "Pro",
    description: "For power users who need more",
    monthlyPrice: 29,
    yearlyPrice: 24,
    cta: "Upgrade to Pro",
    popular: true,
    features: [
      { text: "Unlimited video hours", included: true },
      { text: "Advanced memory vault", included: true },
      { text: "All integrations", included: true },
      { text: "Priority support", included: true },
      { text: "Custom actions", included: true },
      { text: "Team collaboration", included: true },
      { text: "Priority processing", included: true },
    ],
  },
  {
    name: "Enterprise",
    description: "For teams that need full control",
    monthlyPrice: 99,
    yearlyPrice: 79,
    cta: "Contact Sales",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Unlimited memory vault", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority processing", included: true },
      { text: "Dedicated instance", included: true },
    ],
  },
];

function BillingToggle({
  isYearly,
  onToggle,
}: {
  isYearly: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={`text-sm font-medium transition-colors ${!isYearly ? "text-text-0" : "text-grey-4"}`}
      >
        Monthly
      </span>
      <button
        onClick={onToggle}
        className="relative h-[26px] w-12 cursor-pointer rounded-full transition-colors duration-300"
        style={{
          background: isYearly ? "var(--primary)" : "var(--grey-1)",
        }}
      >
        <motion.div
          className="absolute top-[3px] h-[20px] w-[20px] rounded-full bg-white shadow-sm"
          animate={{ left: isYearly ? 22 : 3 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      <span
        className={`text-sm font-medium transition-colors ${isYearly ? "text-text-0" : "text-grey-4"}`}
      >
        Yearly
      </span>
      {isYearly && (
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-full bg-primary-light-default px-2 py-0.5 text-xs font-semibold text-primary"
        >
          Save 20%
        </motion.span>
      )}
    </div>
  );
}

function PricingCard({
  plan,
  isYearly,
  index,
}: {
  plan: Plan;
  isYearly: boolean;
  index: number;
}) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const isPopular = plan.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0, 1],
      }}
      className={`relative flex flex-col overflow-hidden rounded-2xl border ${
        isPopular ? "border-primary" : "border-grey-1"
      } bg-bg-0`}
      style={{
        boxShadow: isPopular
          ? "0 0 40px rgba(255, 92, 0, 0.06), 0 8px 32px rgba(0,0,0,0.06)"
          : "0 4px 16px rgba(0,0,0,0.04)",
      }}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="flex items-center justify-center gap-1.5 bg-primary py-2.5 text-xs font-semibold tracking-wide text-white">
          <Sparkles size={13} strokeWidth={2.5} />
          MOST POPULAR
        </div>
      )}

      <div className="flex flex-1 flex-col gap-6 p-7">
        {/* Header */}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-semibold text-text-0">{plan.name}</h3>
          <p className="text-sm text-text-2">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={`${plan.name}-${price}`}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.25 }}
              className="text-5xl font-bold tracking-tight text-text-0"
            >
              ${price}
            </motion.span>
          </AnimatePresence>
          {price > 0 && <span className="text-sm text-grey-4">/mo</span>}
        </div>

        {/* CTA */}
        <button
          className={`w-full cursor-pointer rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${
            isPopular
              ? "bg-primary text-white hover:brightness-110"
              : "border border-grey-1 bg-transparent text-text-0 hover:bg-grey-0"
          }`}
        >
          {plan.cta}
        </button>

        {/* Divider */}
        <div className="h-px w-full bg-grey-1" />

        {/* Features */}
        <ul className="flex flex-col gap-3.5">
          {plan.features.map((feature) => (
            <li key={feature.text} className="flex items-center gap-3">
              {feature.included ? (
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    isPopular ? "bg-primary-light-default" : "bg-grey-0"
                  }`}
                >
                  <Check
                    size={12}
                    strokeWidth={2.5}
                    className={isPopular ? "text-primary" : "text-grey-5"}
                  />
                </div>
              ) : (
                <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                  <Minus size={12} strokeWidth={2} className="text-grey-3" />
                </div>
              )}
              <span
                className={`text-sm ${feature.included ? "text-text-1" : "text-grey-3"}`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <motion.h2
            className="text-2xl md:text-4xl font-semibold leading-tight text-text-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            className="max-w-md text-base text-text-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Start free. Upgrade when you need more power.
          </motion.p>
          <BillingToggle
            isYearly={isYearly}
            onToggle={() => setIsYearly(!isYearly)}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isYearly={isYearly}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
