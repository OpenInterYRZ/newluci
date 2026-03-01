'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LindyFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: '📅',
      title: 'Schedule',
      description: 'Just text "Schedule a meeting with John next week" and Lindy handles all the back-and-forth coordination.',
      color: '#F2A000',
    },
    {
      icon: '⚡',
      title: 'Take Action',
      description: 'Send emails, update CRM, create tasks - all via natural language. "Email the team about tomorrow\'s standup" and it\'s done.',
      color: '#CB2D2D',
    },
    {
      icon: '🔔',
      title: 'Proactive Notifications',
      description: 'Get text alerts for what matters. Lindy monitors your calendar, inbox, and apps to keep you informed.',
      color: '#FFE072',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900"
        >
          Built for schedule,<br />
          take action, stay ahead
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
