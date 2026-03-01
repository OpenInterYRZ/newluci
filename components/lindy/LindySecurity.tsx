'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LindySecurity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    { name: 'GDPR', description: 'Fully compliant with EU data protection' },
    { name: 'SOC 2', description: 'Type II certified for security controls' },
    { name: 'HIPAA', description: 'Healthcare data protection compliant' },
    { name: 'PIPEDA', description: 'Canadian privacy law compliant' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Built{' '}
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            privacy-first
          </span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-center text-xl mb-16 max-w-3xl mx-auto"
        >
          Your data is encrypted end-to-end. We never train AI models on your data. Zero-knowledge architecture ensures your privacy.
        </motion.p>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-3xl">
                  🔒
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Features */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-gray-800"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h4 className="text-xl font-semibold mb-2">End-to-End Encryption</h4>
              <p className="text-gray-400">All data encrypted in transit and at rest</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚫</div>
              <h4 className="text-xl font-semibold mb-2">No AI Training</h4>
              <p className="text-gray-400">Your data never trains our models</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-semibold mb-2">Zero-Knowledge</h4>
              <p className="text-gray-400">We can't access your unencrypted data</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
