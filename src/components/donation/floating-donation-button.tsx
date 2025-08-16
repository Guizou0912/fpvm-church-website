"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const FloatingDonationButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
    router.push("/donation");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        px-4 py-3 md:px-5 md:py-4
        bg-primary/90 backdrop-blur-md
        border border-white/20
        rounded-full
        shadow-lg shadow-primary/20
        text-white font-medium
        font-display
        transition-all duration-300 ease-out
        hover:bg-primary hover:shadow-xl hover:shadow-primary/30
        hover:scale-105 hover:-translate-y-1
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
        ${isHovered ? "animate-pulse" : "animate-bounce"}
        ${isClicked ? "animate-ping" : ""}
        group
      `}
      aria-label="Faire un don à l'église"
      role="button"
      tabIndex={0}
    >
      <Heart
        className={`
          w-4 h-4 md:w-5 md:h-5
          transition-transform duration-200
          ${isHovered ? "scale-110" : ""}
          group-hover:animate-pulse
        `}
        fill="currentColor"
      />
      
      <span className="text-sm md:text-base whitespace-nowrap">
        FAIRE UN DON
      </span>
      
      {/* Subtle glow effect */}
      <div
        className={`
          absolute inset-0 rounded-full
          bg-gradient-to-r from-primary to-primary/80
          opacity-0 transition-opacity duration-300
          ${isHovered ? "opacity-20" : ""}
          -z-10 blur-xl
        `}
      />
    </button>
  );
};