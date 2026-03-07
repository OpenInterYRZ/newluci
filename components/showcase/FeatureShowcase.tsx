"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import ideateImg from "@/images/generated-1772874042280.png";
import iterateImg from "@/images/generated-1772874060581.png";
import scaleImg from "@/images/generated-1772874078263.png";

const cards = [
  {
    number: "01",
    title: "Ideate",
    image: ideateImg,
    descTitle: "Explore 100s of possibilities",
    descTexts: [
      "Text, image, and video models in one place. No tab-switching, no limits.",
      "Follow every spark of inspiration on an intelligent canvas built for flow.",
    ],
  },
  {
    number: "02",
    title: "Iterate",
    image: iterateImg,
    descTitle: 'Get to "final" faster',
    descTexts: ["Iterate in real-time with the whole team."],
  },
  {
    number: "03",
    title: "Scale",
    image: scaleImg,
    descTitle: "Create scalable workflows",
    descTexts: [
      "Turn a single concept into hundreds of production-grade assets.",
    ],
  },
];

export default function FeatureShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  const getFlexValue = (index: number) => {
    if (hovered === null) return 1;
    return hovered === index ? 1.8 : 0.6;
  };

  const isExpanded = (index: number) => {
    if (hovered === null) return false;
    return hovered === index;
  };

  return (
    <section className="w-full bg-web-bg-0">
      <div className="max-w-[1440px] mx-auto px-20 py-20">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-[60px]">
          <h2 className="text-[40px] font-medium leading-tight text-text-0 max-w-3xl">
            Speak your ideas into existence with a high degree of creative
            control.
          </h2>
          <p className="text-xl text-text-1 max-w-2xl">
            Speak your ideas into existence with a high degree of creative
            control.
          </p>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-text-1 text-text-0 text-sm w-fit mt-2 hover:border-text-2 transition-colors cursor-pointer">
            Contact sales
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Cards Row */}
        <div
          className="flex gap-5 h-[520px]"
          onMouseLeave={() => setHovered(null)}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.number}
              className="relative rounded-2xl border border-grey-1 bg-bg-0 overflow-hidden flex flex-col cursor-pointer"
              animate={{
                flex: getFlexValue(index),
                padding: isExpanded(index) ? 40 : 32,
                gap: isExpanded(index) ? 24 : 20,
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              onMouseEnter={() => setHovered(index)}
              style={{ minWidth: 0 }}
            >
              {/* Title Row */}
              <div className="flex items-end gap-3 shrink-0">
                <motion.span
                  className="font-light text-text-3 leading-none"
                  animate={{
                    fontSize: isExpanded(index) ? 36 : 28,
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  {card.number}
                </motion.span>
                <motion.span
                  className="font-semibold text-text-0 leading-none"
                  animate={{
                    fontSize: isExpanded(index) ? 36 : 28,
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  {card.title}
                </motion.span>
              </div>

              {/* Image */}
              <div className="flex-1 min-h-0 rounded-xl overflow-hidden relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2 shrink-0">
                <motion.h3
                  className="font-semibold text-text-0"
                  animate={{
                    fontSize: isExpanded(index) ? 18 : 16,
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  {card.descTitle}
                </motion.h3>
                <p
                  className={`text-text-2 leading-relaxed ${
                    isExpanded(index) ? "text-sm" : "text-[13px]"
                  }`}
                >
                  {card.descTexts[0]}
                </p>
                <AnimatePresence>
                  {isExpanded(index) &&
                    card.descTexts.slice(1).map((text, i) => (
                      <motion.p
                        key={i}
                        className="text-sm text-text-2 leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        {text}
                      </motion.p>
                    ))}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
