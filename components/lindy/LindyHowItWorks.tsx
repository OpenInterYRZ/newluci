'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LindyHowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: '🎯',
      title: 'Proactive',
      description: 'Lindy doesn\'t wait for you to ask. It anticipates needs and fixes issues before they become problems.',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: '🧠',
      title: 'Learning',
      description: 'Every interaction teaches Lindy your preferences, communication style, and priorities.',
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: '📱',
      title: 'Ubiquitous',
      description: '24/7 access via text message. No app to open, no interface to learn. Just text and get things done.',
      color: 'from-orange-400 to-red-400',
    },
    {
      icon: '🔗',
      title: 'Integrated',
      description: 'Connects to hundreds of apps - Gmail, Slack, Calendar, CRM, and more. One assistant for everything.',
      color: 'from-green-400 to-emerald-400',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          How Lindy{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            works for you
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative">
                  {/* Icon */}
                  <div className="text-6xl mb-6">{value.icon}</div>

                  {/* Title */}
                  <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Animation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 relative"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {['Text Lindy', 'AI Processes', 'Task Completed'].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                      {i + 1}
                    </div>
                    <div className="mt-4 text-xl font-semibold text-center">{step}</div>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block text-4xl text-purple-500">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
