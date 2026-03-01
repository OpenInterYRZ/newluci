'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function LindyIntegrations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const integrations = [
    'Gmail', 'Slack', 'Calendar', 'Notion', 'Salesforce', 'HubSpot',
    'Zoom', 'Linear', 'Asana', 'Jira', 'GitHub', 'Figma',
    'Stripe', 'QuickBooks', 'Zapier', 'Airtable', 'Dropbox', 'Drive',
    'Gmail', 'Slack', 'Calendar', 'Notion', 'Salesforce', 'HubSpot',
  ];

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Connects to{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            everything you use
          </span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-center text-xl mb-16"
        >
          Hundreds of integrations and counting
        </motion.p>

        {/* Horizontal scrolling grid */}
        <div ref={scrollRef} className="relative">
          <div className="flex gap-4 animate-scroll-slow hover:pause">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="flex-shrink-0 group"
              >
                <div className="w-40 h-40 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105">
                  <span className="text-lg font-semibold bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {integration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            See all integrations
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          animation: scroll-slow 60s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
