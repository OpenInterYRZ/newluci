"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GradientButton from "../ui/GradientButton";
import GlassButton from "../ui/GlassButton";
import ProductShowcase from "../showcase/ProductShowcase";

export const CapHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div
      ref={ref}
      className="relative mx-auto flex flex-col items-center pt-24 pb-16 px-5 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/pb.webp')",
          y: bgY,
        }}
      />
      {/* <div className="absolute inset-0 bg-white/70 z-0" /> */}
      {/* 主要内容区 */}
      <div className="relative z-10 flex flex-col items-start w-full max-w-7xl mt-2 mb-12">
        {/* 1. 标题 */}
        <h1 className="text-text-0 text-[56px] font-semibold leading-[1.05] mt-12 tracking-tight ">
          See. Remember. Act.
        </h1>

        {/* 2. 副标题 */}
        <p className="text-text-1  text-base leading-[1.6] text-left max-w-[680px] mt-4 mb-8">
          Meet LUCI — your AI assistant that connects your tools, <br />
          understands your work, and gets things done.
        </p>

        {/* 3. 按钮组 */}
        <div className="flex gap-4">
          <GradientButton href="/download" text="Download for macOS" download />
        </div>
      </div>
      <ProductShowcase />
    </div>
  );
};

export default CapHero;
