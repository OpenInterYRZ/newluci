"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,159,28,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-lg">
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="text-[clamp(8rem,20vw,14rem)] font-extrabold leading-none tracking-tighter"
            style={{
              background:
                "linear-gradient(135deg, var(--primary) 0%, var(--gradient-red) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p
            className="mt-2 text-xl font-semibold"
            style={{ color: "var(--grey-8)" }}
          >
            Page not found
          </p>
          <p
            className="mt-3 text-base leading-relaxed"
            style={{ color: "var(--grey-5)" }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(135deg, var(--primary) 0%, var(--gradient-red) 100%)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
