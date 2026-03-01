'use client';

import { motion } from 'framer-motion';

export default function LindyTestimonials() {
  const testimonials = [
    {
      quote: "Lindy saves me 10+ hours a week on email and scheduling. It's like having a personal assistant.",
      name: "Sarah Chen",
      role: "VP of Product, TechCorp",
      avatar: "👩‍💼",
    },
    {
      quote: "I was skeptical at first, but Lindy truly understands context. It's scary good at anticipating what I need.",
      name: "Marcus Johnson",
      role: "Founder, StartupXYZ",
      avatar: "👨‍💻",
    },
    {
      quote: "The ROI is insane. For $50/month I get capabilities that would cost $8K+ with a human assistant.",
      name: "Emily Rodriguez",
      role: "Managing Director, Finance Co",
      avatar: "👩‍💼",
    },
    {
      quote: "Lindy saves me 10+ hours a week on email and scheduling. It's like having a personal assistant.",
      name: "Sarah Chen",
      role: "VP of Product, TechCorp",
      avatar: "👩‍💼",
    },
    {
      quote: "I was skeptical at first, but Lindy truly understands context. It's scary good at anticipating what I need.",
      name: "Marcus Johnson",
      role: "Founder, StartupXYZ",
      avatar: "👨‍💻",
    },
    {
      quote: "The ROI is insane. For $50/month I get capabilities that would cost $8K+ with a human assistant.",
      name: "Emily Rodriguez",
      role: "Managing Director, Finance Co",
      avatar: "👩‍💼",
    },
  ];

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Loved by{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            professionals
          </span>
        </motion.h2>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
            >
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
