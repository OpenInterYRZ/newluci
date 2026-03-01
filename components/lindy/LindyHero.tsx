'use client';

import { motion } from 'framer-motion';

export default function LindyHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-white">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight leading-tight"
        >
          Text your AI assistant.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-gray-900 tracking-tight"
        >
          Get answers. Get things done.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Try Lindy
        </motion.button>

        {/* Phone Mockups */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 flex justify-center gap-8 items-start"
        >
          {/* Left Phone */}
          <div className="w-72 h-[600px] bg-gradient-to-br from-orange-100 to-orange-200 rounded-[3rem] shadow-2xl p-4 border-8 border-gray-900">
            <div className="bg-white h-full rounded-[2.5rem] p-6 overflow-hidden">
              <div className="text-left space-y-4">
                <div className="text-sm text-gray-500">Messages</div>
                <div className="bg-gray-100 rounded-2xl p-4 text-sm">
                  Hey Lindy, can you schedule a meeting with Sarah?
                </div>
                <div className="bg-blue-600 text-white rounded-2xl p-4 text-sm ml-8">
                  Sure! When works for you?
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone */}
          <div className="w-72 h-[600px] bg-gradient-to-br from-orange-100 to-orange-200 rounded-[3rem] shadow-2xl p-4 border-8 border-gray-900">
            <div className="bg-white h-full rounded-[2.5rem] p-6 overflow-hidden">
              <div className="text-left space-y-4">
                <div className="text-sm text-gray-500">Messages</div>
                <div className="bg-gray-100 rounded-2xl p-4 text-sm">
                  What's on my calendar today?
                </div>
                <div className="bg-blue-600 text-white rounded-2xl p-4 text-sm ml-8">
                  You have 3 meetings scheduled...
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20"
        >
          <p className="text-gray-500 mb-6 text-sm">You're drowning in busywork instead of</p>
          <p className="text-gray-500 text-sm">doing the work that matters</p>
        </motion.div>
      </div>
    </section>
  );
}
