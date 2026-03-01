'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LindyProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: '1.3 hours', label: 'You waste every single day on admin' },
    { value: '3 apps', label: 'You search to locate a single answer' },
    { value: '45 min', label: 'Lost to coordinating meetings' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main heading */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 leading-tight text-gray-900 max-w-4xl mx-auto"
        >
          What if you could talk to an assistant and actually{' '}
          <span className="text-blue-600">
            get work done
          </span>
          ?
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <div className="text-4xl font-bold mb-3 text-gray-900">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
