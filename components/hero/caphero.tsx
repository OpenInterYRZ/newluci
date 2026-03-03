"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import GradientButton from "../ui/GradientButton";
import GlassButton from "../ui/GlassButton";
import ProductMockup from "../ProductMockup";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const CapHero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center pt-24 pb-16 px-4 overflow-hidden font-sans">
      {/* 背景图 */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/q.png"
          alt="hero-bg"
          className="w-full h-full object-cover dark:hidden"
        />
        <img
          src="/backk.webp"
          alt="hero-bg"
          className="w-full h-full object-cover hidden dark:block"
        />
      </div>
      {/* 渐变叠加层 */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg-0 via-bg-0/30 to-bg-0/90 pointer-events-none dark:hidden"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#08050c]/80 via-[#08050c]/30 to-[#08050c]/90 pointer-events-none hidden dark:block"></div>

      {/* 主要内容区 — stagger 容器 */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl mt-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* 1. 标题 */}
        <motion.h1
          className="text-text-0 text-7xl font-bold text-center leading-tight mt-12"
          variants={fadeUp}
        >
          LUCI sees, understands, and acts.
        </motion.h1>

        {/* 2. 副标题 */}
        <motion.p
          className="text-text-1 font-sans text-md leading-relaxed text-center max-w-3xl mt-6 mb-12"
          variants={fadeUp}
        >
          Meet your professional AI assistant that remembers everything.
        </motion.p>

        {/* 3. 按钮组 */}
        <motion.div className="flex gap-4" variants={fadeUp}>
          <GradientButton href="/signup" text="Sign Up for Cloud →" />
          <GlassButton href="/download" text="Download Local ↓" />
        </motion.div>

        {/* 4. 提示文字 */}
        <motion.p
          className="text-text-3 text-sm mb-24 text-center mt-6"
          variants={fadeUp}
        >
          No credit card required
        </motion.p>

        {/* 5. 产品截图 */}
        <motion.div variants={fadeIn}>
          <ProductMockup />
        </motion.div>

        {/* 6. 底部合作 Logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 hover:opacity-60 transition-opacity"
          variants={fadeIn}
        >
          {/* NVIDIA */}
          <svg
            className="h-4 fill-white"
            viewBox="0 0 450 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M72.2 46.1v48.6H39.5V5.3h32.7l46 51V5.3h32.6v89.4h-32.6l-46-48.6zM203.4 5.3L175 80.2h-31.4l-28.4-74.9h34.6l10 32.3c2.6 8.5 4.8 17 6.6 25.5h.5c1.8-8.5 4.1-17 6.9-25.5l10.4-32.3h34.2zM218.6 5.3h32.6v89.4h-32.6zM266.3 5.3h42c26.9 0 44.5 16.1 44.5 44.7 0 28.5-17.6 44.7-44.5 44.7h-42V5.3zm32.6 62.9h6.4c10 0 14.8-5.3 14.8-18.2 0-12.8-4.8-18.2-14.8-18.2h-6.4v36.4zM368.5 5.3h32.6v89.4h-32.6zM424 74.4h-35.8l-5.6 20.3h-34l38.4-89.4h37l38.4 89.4H429.6L424 74.4zm-7.6-27l-10-33.6h-.5l-9.9 33.6h20.4z" />
          </svg>

          {/* TikTok */}
          <span className="text-xl font-bold text-white flex items-center gap-1.5 tracking-tight">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68l.01.2a6.29 6.29 0 0 0 3.63 5.47l.25.12a6.32 6.32 0 0 0 5.92-.81 6.23 6.23 0 0 0 2.76-5.18v-5.4a8.27 8.27 0 0 0 4.27 1.15l.2-.01v-3.4a4.4 4.4 0 0 1-2.45-1.13z" />
            </svg>
            TikTok
          </span>

          {/* Runway */}
          <span className="text-2xl font-bold text-white tracking-tighter lowercase">
            runway
          </span>

          {/* Google */}
          <span className="text-xl font-bold text-white tracking-tight">
            Google
          </span>
        </motion.div>
      </motion.div>

      {/* 底部模糊渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-bg-0/60 to-bg-0 pointer-events-none" />
    </div>
  );
};

export default CapHero;
