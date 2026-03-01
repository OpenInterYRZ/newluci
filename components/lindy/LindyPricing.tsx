'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LindyPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: 'Human Assistant',
      price: '$8,000',
      period: '/month',
      description: 'The old way',
      features: [
        'Works 9-5 (maybe)',
        'Takes vacations',
        'Will eventually betray you',
        'Requires health insurance',
        'Needs a desk',
      ],
      cta: 'No thanks',
      highlight: false,
      strikethrough: true,
    },
    {
      name: 'Pro',
      price: '$49.99',
      period: '/month',
      description: 'For professionals who value their time',
      features: [
        '24/7 iMessage access',
        'Unlimited inbox management',
        'Smart meeting scheduling',
        'Task automation across all apps',
        'Proactive notifications',
        'Email support',
      ],
      cta: 'Start 7-day free trial',
      highlight: true,
      strikethrough: false,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For teams that need more',
      features: [
        'Everything in Pro',
        'Team access & collaboration',
        'SSO & advanced security',
        'HIPAA compliance',
        'Dedicated support',
        'Custom integrations',
      ],
      cta: 'Contact sales',
      highlight: false,
      strikethrough: false,
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-center mb-8 text-[#333]"
        >
          Simple{' '}
          <span className="bg-gradient-to-r from-[#FFE072] to-[#F2A000] bg-clip-text text-transparent">
            pricing
          </span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-center text-xl mb-16"
        >
          Choose the plan that fits your needs
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Highlight badge for Pro plan */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F2A000] text-white px-6 py-2 rounded-md text-sm font-semibold z-10 shadow-lg">
                  Most Popular
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-8 transition-all duration-300 ${
                  plan.strikethrough
                    ? 'bg-gray-50 border border-[#E7E0CB] opacity-70'
                    : plan.highlight
                    ? 'bg-gradient-to-br from-[#FFE072]/10 to-[#F2A000]/10 border-2 border-[#F2A000] shadow-xl'
                    : 'bg-white border border-[#E7E0CB] hover:border-[#F2A000]/40'
                }`}
              >
                {/* Plan name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className={`mb-8 ${plan.strikethrough ? 'line-through' : ''}`}>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-xl">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={plan.strikethrough ? 'text-red-500' : 'text-green-500'}>
                        {plan.strikethrough ? '✗' : '✓'}
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105'
                      : plan.strikethrough
                      ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                  disabled={plan.strikethrough}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
