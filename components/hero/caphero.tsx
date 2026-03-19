"use client";

import React, { useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GradientButton from "../ui/GradientButton";
import GlassButton from "../ui/GlassButton";
import ProductShowcase from "../showcase/ProductShowcase";
import ProductShowcaseDesktop from "../showcase/ProductShowcaseDesktop";

const LANDSCAPES = Array.from(
  { length: 33 },
  (_, i) => `/landscape/lan${i + 1}.webp`,
);

export const CapHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [bgIndex, setBgIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setBgIndex((i) => (i - 1 + LANDSCAPES.length) % LANDSCAPES.length);
  }, []);

  const goNext = useCallback(() => {
    setDirection(1);
    setBgIndex((i) => (i + 1) % LANDSCAPES.length);
  }, []);

  return (
    <div
      ref={ref}
      className="relative mx-auto flex flex-col items-center pt-24 pb-16 px-5 overflow-hidden"
    >
      {/* Background with crossfade */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={bgIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('pb.webp')`,
            y: bgY,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* 白色蒙层 */}
      <div className="absolute inset-0 z-1 bg-white/30 pointer-events-none" />

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
      <ProductShowcaseDesktop />
    </div>
  );
};

export default CapHero;
