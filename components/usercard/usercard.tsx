"use client";

import { useState } from "react";
import { Star, ThumbsUp, MessageCircle, Ellipsis } from "lucide-react";

interface UserCardProps {
  name: string;
  rating: number;
  date: string;
  review: string;
  helpful: number;
  avatarColor?: string;
}

function StarsRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "fill-[#D4A64A] text-[#D4A64A]"
              : "fill-[#D1D0CD] text-[#D1D0CD]"
          }
        />
      ))}
    </div>
  );
}

export default function UserCard({
  name,
  rating,
  date,
  review,
  helpful: initialHelpful,
  avatarColor = "#3D8A5A",
}: UserCardProps) {
  const [helpful, setHelpful] = useState(initialHelpful);
  const [liked, setLiked] = useState(false);

  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className="flex flex-col gap-4 rounded-2xl bg-bg-0 p-6 font-[Outfit]"
      style={{
        width: 380,
        boxShadow: "0 2px 12px rgba(26, 25, 24, 0.03)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 w-full">
        {/* Avatar */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          <span className="text-bg-0 text-xl font-semibold">{initial}</span>
        </div>

        {/* User Info */}
        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
          <span className="text-text-0 text-base md:text-lg font-semibold">
            {name}
          </span>
          <div className="flex items-center gap-2">
            <StarsRow rating={rating} />
            <span className="text-xs text-[#9C9B99]">{date}</span>
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-sm leading-[1.5] text-[#6D6C6A] w-full">{review}</p>

      {/* Divider */}
      <div className="w-full h-px bg-bg-0" />

      {/* Footer */}
      <div className="flex items-center gap-4 w-full">
        <button
          onClick={() => {
            if (!liked) {
              setHelpful((h) => h + 1);
              setLiked(true);
            } else {
              setHelpful((h) => h - 1);
              setLiked(false);
            }
          }}
          className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-colors ${
            liked
              ? "bg-[#3D8A5A]/10 text-[#3D8A5A]"
              : "bg-bg-0 text-[#6D6C6A] hover:bg-[#F0EFED]"
          }`}
        >
          <ThumbsUp size={14} />
          <span>Helpful ({helpful})</span>
        </button>

        <div className="flex items-center gap-1.5 rounded-full bg-bg-0 px-3 py-2 text-xs font-medium text-[#6D6C6A]">
          <MessageCircle size={14} />
          <span>Reply</span>
        </div>

        <Ellipsis size={18} className="text-[#9C9B99]" />
      </div>
    </div>
  );
}
