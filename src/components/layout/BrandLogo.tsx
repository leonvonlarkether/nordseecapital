import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "dark" | "light";
  className?: string;
  withTagline?: boolean;
}

export function BrandLogo({
  variant = "dark",
  className = "",
  withTagline = false,
}: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-sm ${className}`}
      aria-label="Nordsee Capital - Inicio"
    >
      {/* Símbolo heráldico-arquitectónico nórdico */}
      <div
        className={`w-10 h-10 rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
          isDark
            ? "bg-[#0B192C] text-[#C5A059] border border-[#C5A059]/30 shadow-xs"
            : "bg-white/10 text-[#C5A059] border border-white/20"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          aria-hidden="true"
        >
          {/* Geometría estilizada del monograma N y horizonte marítimo */}
          <path
            d="M8 24V8L24 24V8"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="8" r="1.5" fill="currentColor" />
          <circle cx="24" cy="24" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Logotipo tipográfico */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-tight text-xl leading-none transition-colors ${
            isDark ? "text-[#0B192C]" : "text-[#FAF9F5]"
          }`}
        >
          NORDSEE
        </span>
        <span
          className={`text-[9px] font-semibold tracking-[0.28em] uppercase leading-tight mt-0.5 ${
            isDark ? "text-[#5D6A7E]" : "text-[#C5A059]"
          }`}
        >
          CAPITAL
        </span>
        {withTagline && (
          <span className="text-[10px] text-[#738094] mt-0.5 tracking-wider hidden sm:inline">
            MANAGEMENT
          </span>
        )}
      </div>
    </Link>
  );
}
