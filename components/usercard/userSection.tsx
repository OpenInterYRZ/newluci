"use client";

import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
import UserCard from "./usercard";

const reviews = [
  {
    name: "Jessica Chen",
    rating: 5,
    date: "2 days ago",
    review:
      "This product exceeded my expectations! The build quality is fantastic and the attention to detail really shows. Highly recommend!",
    helpful: 12,
    avatarColor: "#3D8A5A",
  },
  {
    name: "Marcus Rivera",
    rating: 4,
    date: "1 week ago",
    review:
      "Great overall experience. Setup was smooth and the interface is intuitive. Only minor gripe is the documentation could be more detailed.",
    helpful: 8,
    avatarColor: "#5A6ABF",
  },
  {
    name: "Aisha Patel",
    rating: 5,
    date: "3 days ago",
    review:
      "Absolutely love it. Switched from a competitor and the difference is night and day. Performance is blazing fast and support team is top-notch.",
    helpful: 24,
    avatarColor: "#BF5A8A",
  },
  {
    name: "Thomas Wright",
    rating: 5,
    date: "5 days ago",
    review:
      "Been using this for 3 months now and it's become essential to my workflow. The recent update made it even better. Worth every penny.",
    helpful: 15,
    avatarColor: "#D4763A",
  },
  {
    name: "Sophia Kim",
    rating: 4,
    date: "1 day ago",
    review:
      "Really impressed with how polished everything feels. The onboarding was seamless and I was up and running in minutes.",
    helpful: 6,
    avatarColor: "#7A3DBF",
  },
  {
    name: "Daniel Okafor",
    rating: 5,
    date: "4 days ago",
    review:
      "The best in its class, hands down. I've tried several alternatives and nothing comes close. Customer service is also incredibly responsive.",
    helpful: 19,
    avatarColor: "#3A8A8A",
  },
  {
    name: "Emily Zhang",
    rating: 4,
    date: "2 weeks ago",
    review:
      "Solid product with a clean design. A few features I'd love to see added, but what's already there works flawlessly.",
    helpful: 10,
    avatarColor: "#8A5A3D",
  },
  {
    name: "Ryan Foster",
    rating: 5,
    date: "6 days ago",
    review:
      "Game changer for our team. Collaboration features are incredible and the real-time sync has zero lag. Already recommended it to three other teams.",
    helpful: 31,
    avatarColor: "#3D5A8A",
  },
];

const row1 = reviews.slice(0, 4);
const row2 = reviews.slice(4, 8);

function useElementWidth<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
): number {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function update() {
      if (ref.current) setWidth(ref.current.scrollWidth);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [ref]);
  return width;
}

function CardRow({
  cards,
  baseVelocity,
}: {
  cards: typeof reviews;
  baseVelocity: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const copyRef = useRef<HTMLDivElement>(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min: number, max: number, v: number) {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const numCopies = 4;

  return (
    <div className="relative overflow-hidden">
      <motion.div className="flex" style={{ x, gap: 24 }}>
        {Array.from({ length: numCopies }, (_, copyIdx) => (
          <div
            key={copyIdx}
            ref={copyIdx === 0 ? copyRef : null}
            className="flex shrink-0"
            style={{ gap: 24 }}
          >
            {cards.map((card, i) => (
              <div key={i} className="shrink-0">
                <UserCard {...card} />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function UserSection() {
  return (
    <section className="w-full py-24 overflow-hidden my-30">
      <div className="max-w-3xl mx-auto text-center mb-16 px-6">
        <h2 className="text-text-0 text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
          Loved by thousands
        </h2>
        <p className="text-text-2 text-base md:text-lg max-w-115 mx-auto">
          See what our users have to say about their experience.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <CardRow cards={row1} baseVelocity={-40} />
        <CardRow cards={row2} baseVelocity={40} />
      </div>
    </section>
  );
}
