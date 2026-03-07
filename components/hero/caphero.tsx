"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import GradientButton from "../ui/GradientButton";
import GlassButton from "../ui/GlassButton";
import DashboardMock from "../DashboardMock";
import Mock from "@/components/mockip/mock";
import { PhoneChatScreen } from "../mockip/phone/PhoneChatScreen";
import VMDashboard from "../mockip/vm/VMDashboard";
import VMShowcase from "../mockip/vm/VMShowcase";

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
      {/* <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/4.webp"
          alt="hero-bg"
          className="w-full h-full object-cover dark:hidden"
        />
        <img
          src="/backk.webp"
          alt="hero-bg"
          className="w-full h-full object-cover hidden dark:block"
        />
      </div> */}
      {/* 渐变叠加层 */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg-0 via-bg-0/30 to-bg-0/90 pointer-events-none dark:hidden"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#08050c]/80 via-[#08050c]/30 to-[#08050c]/90 pointer-events-none hidden dark:block"></div>

      {/* 主要内容区 — stagger 容器 */}
      <motion.div
        className="relative z-10 flex flex-col items-start w-full max-w-7xl mt-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* 1. 标题 */}
        <motion.h1
          className="text-text-0 text-[52px] font-extrabold leading-[1.05] mt-12 tracking-tight font-[Manrope]"
          variants={fadeUp}
        >
          See. Remember. Act.
        </motion.h1>

        {/* 2. 副标题 */}
        <motion.p
          className="text-text-1 font-[Manrope] text-lg leading-[1.6] text-left max-w-[680px] mt-4 mb-8"
          variants={fadeUp}
        >
          Meet LUCI — your AI assistant that
          <br /> connects your tools, understands your work, and gets things
          done.
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
        <div className="flex gap-4 w-full">
          <div className="w-100">
            {" "}
            <PhoneChatScreen />{" "}
          </div>
          <div className="">
            <VMDashboard />
          </div>
        </div>
      </motion.div>

      {/* 底部模糊渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-bg-0/60 to-bg-0 pointer-events-none" />
    </div>
  );
};

export default CapHero;
