"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Sparkles } from "lucide-react";

/* ─── colour tokens ─── */
const c = {
  bgPage: "#0B0B0E",
  bgCard: "#16161A",
  bgElevated: "#1A1A1E",
  borderSubtle: "#2A2A2E",
  textPrimary: "#FAFAF9",
  textSecondary: "#8E8E93",
  textMuted: "#6B6B70",
  orange: "#ff5c00",
  orangeGlow: "rgba(255, 92, 0, 0.15)",
};

/* ─── plan data ─── */
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
      { text: "Dedicated instance", included: false },
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
      { text: "Dedicated instance", included: false },
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
      { text: "Custom actions", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority processing", included: true },
      { text: "Dedicated instance", included: true },
    ],
  },
];

/* ─── billing toggle ─── */
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
        className="text-sm font-medium transition-colors duration-200"
        style={{ color: !isYearly ? c.textPrimary : c.textMuted }}
      >
        Monthly
      </span>
      <button
        onClick={onToggle}
        className="relative w-12 h-6.5 rounded-full transition-colors duration-300 cursor-pointer"
        style={{
          background: isYearly ? c.orange : c.bgElevated,
          border: `1px solid ${isYearly ? "transparent" : c.borderSubtle}`,
        }}
      >
        <motion.div
          className="absolute top-[3px] w-[18px] h-[18px] rounded-full"
          style={{ background: "#fff" }}
          animate={{ left: isYearly ? 22 : 3 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      <span
        className="text-sm font-medium transition-colors duration-200"
        style={{ color: isYearly ? c.textPrimary : c.textMuted }}
      >
        Yearly
      </span>
      {isYearly && (
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: c.orangeGlow,
            color: c.orange,
          }}
        >
          Save 20%
        </motion.span>
      )}
    </div>
  );
}

/* ─── price display ─── */
function PriceDisplay({ plan, isYearly }: { plan: Plan; isYearly: boolean }) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <div className="flex items-baseline gap-1">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={`${plan.name}-${price}`}
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
          transition={{ duration: 0.25 }}
          className="text-5xl font-bold tracking-tight"
        >
          ${price}
        </motion.span>
      </AnimatePresence>
      {price > 0 && (
        <span className="text-sm" style={{ color: c.textMuted }}>
          /mo
        </span>
      )}
    </div>
  );
}

/* ─── single pricing card ─── */
function PricingCard({
  plan,
  isYearly,
  index,
}: {
  plan: Plan;
  isYearly: boolean;
  index: number;
}) {
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
      className="relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: isPopular
          ? `linear-gradient(180deg, rgba(255,92,0,0.06) 0%, ${c.bgCard} 40%)`
          : c.bgCard,
        border: isPopular
          ? "1px solid rgba(255, 92, 0, 0.3)"
          : `1px solid ${c.borderSubtle}`,
        boxShadow: isPopular
          ? "0 0 40px rgba(255, 92, 0, 0.08), 0 8px 32px rgba(0,0,0,0.4)"
          : "0 4px 16px rgba(0,0,0,0.3)",
      }}
    >
      {/* Popular badge */}
      {isPopular && (
        <div
          className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold tracking-wide"
          style={{
            background: "linear-gradient(90deg, #ff5c00, #ff9a3c)",
            color: "#fff",
          }}
        >
          <Sparkles size={13} strokeWidth={2.5} />
          MOST POPULAR
        </div>
      )}

      <div className="flex flex-col p-7 gap-6 flex-1">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{plan.name}</h3>
          <p className="text-sm" style={{ color: c.textSecondary }}>
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <PriceDisplay plan={plan} isYearly={isYearly} />

        {/* CTA Button */}
        <button
          className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
          style={
            isPopular
              ? {
                  background: "linear-gradient(135deg, #ff5c00, #ff9a3c)",
                  color: "#fff",
                  boxShadow: "0 4px 16px rgba(255, 92, 0, 0.3)",
                }
              : {
                  background: "transparent",
                  color: c.textPrimary,
                  border: `1px solid ${c.borderSubtle}`,
                }
          }
          onMouseEnter={(e) => {
            if (isPopular) {
              e.currentTarget.style.boxShadow =
                "0 6px 24px rgba(255, 92, 0, 0.45)";
              e.currentTarget.style.transform = "translateY(-1px)";
            } else {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }
          }}
          onMouseLeave={(e) => {
            if (isPopular) {
              e.currentTarget.style.boxShadow =
                "0 4px 16px rgba(255, 92, 0, 0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            } else {
              e.currentTarget.style.borderColor = c.borderSubtle;
              e.currentTarget.style.background = "transparent";
            }
          }}
        >
          {plan.cta}
        </button>

        {/* Divider */}
        <div className="w-full h-px" style={{ background: c.borderSubtle }} />

        {/* Features */}
        <ul className="flex flex-col gap-3.5">
          {plan.features.map((feature) => (
            <li key={feature.text} className="flex items-center gap-3">
              {feature.included ? (
                <div
                  className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                  style={{
                    background: isPopular
                      ? "rgba(255, 92, 0, 0.15)"
                      : "rgba(255,255,255,0.06)",
                  }}
                >
                  <Check
                    size={12}
                    strokeWidth={2.5}
                    style={{
                      color: isPopular ? c.orange : c.textSecondary,
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-5 h-5 shrink-0">
                  <Minus
                    size={12}
                    strokeWidth={2}
                    style={{ color: c.textMuted, opacity: 0.4 }}
                  />
                </div>
              )}
              <span
                className="text-sm"
                style={{
                  color: feature.included ? c.textSecondary : c.textMuted,
                  opacity: feature.included ? 1 : 0.5,
                }}
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

/* ─── main export ─── */
export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full py-24 px-6 sm:px-12">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p
            className="text-base md:text-lg max-w-md"
            style={{ color: c.textSecondary }}
          >
            Start free, upgrade when you need more. No hidden fees, no
            surprises.
          </p>
          <BillingToggle
            isYearly={isYearly}
            onToggle={() => setIsYearly(!isYearly)}
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
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
