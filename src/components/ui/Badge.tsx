import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "gold";
  className?: string;
}

export function Badge({
  children,
  variant = "light",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    light:
      "bg-white/80 text-[#0B192C] border-black/10 shadow-xs backdrop-blur-xs",
    dark:
      "bg-white/5 text-[#D4B678] border-[#C5A059]/30 backdrop-blur-xs",
    gold:
      "bg-[#C5A059]/10 text-[#A88340] border-[#C5A059]/30",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1 text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase rounded-full border transition-colors ${variantStyles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
      {children}
    </span>
  );
}
