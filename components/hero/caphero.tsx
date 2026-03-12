"use client";

import React from "react";
import GradientButton from "../ui/GradientButton";
import GlassButton from "../ui/GlassButton";

export const CapHero = () => {
  return (
    <div className="relative max-w-[1300px] mx-auto flex flex-col items-center pt-24 pb-16 px-5 overflow-hidden bg-web-bg-0">
      {/* 主要内容区 */}
      <div className="relative z-10 flex flex-col items-start w-full max-w-7xl mt-2">
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
          <GradientButton href="/signup" text="Download for macOS" />
        </div>
      </div>
    </div>
  );
};

export default CapHero;
