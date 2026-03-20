"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GradientButton from "@/components/ui/GradientButton";

export default function DownloadPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-web-bg-0 flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center max-w-md w-full">
        {/* App icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/lucidesktoplogo.svg"
            alt="LUCI"
            width={120}
            height={120}
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-8 text-[clamp(1.75rem,5vw,2.5rem)] font-semibold tracking-tight text-text-0"
        >
          Download LUCI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.14 }}
          className="mt-3 text-[15px] text-text-2"
        >
          AI agent for macOS
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="mt-10"
        >
          <GradientButton
            href="/download/success"
            text="Download for Mac"
            download
          />
        </motion.div>

        {/* System requirements */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.32 }}
          className="mt-5 text-[13px] text-text-3"
        >
          macOS 13+ · Apple Silicon
        </motion.p>
      </div>
    </div>
  );
}
