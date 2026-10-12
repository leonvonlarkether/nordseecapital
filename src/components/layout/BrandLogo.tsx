import React from "react";
import Image from "next/image";
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
  // variant "light" = fondo oscuro (texto blanco del logo original)
  // variant "dark" = fondo claro (texto azul marino contrastado)
  const isDarkBg = variant === "light";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-sm transition-opacity hover:opacity-90 ${className}`}
      aria-label="Nordsee Capital - Inicio"
    >
      <div className="relative h-9 sm:h-10 w-[140px] sm:w-[155px] flex items-center">
        {/* Versión para fondo oscuro (texto blanco oficial) */}
        <Image
          src="/images/logo-nordsee.png"
          alt="Nordsee Capital"
          width={581}
          height={180}
          priority
          className={`h-full w-auto object-contain object-left transition-opacity duration-300 ${
            isDarkBg ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        />
        {/* Versión para fondo claro (texto marino #0B192C de alto contraste) */}
        <Image
          src="/images/logo-nordsee-dark.png"
          alt="Nordsee Capital"
          width={581}
          height={180}
          priority
          className={`h-full w-auto object-contain object-left transition-opacity duration-300 ${
            !isDarkBg ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        />
      </div>

      {withTagline && (
        <span
          className={`text-[9px] font-semibold tracking-[0.22em] uppercase hidden xl:inline-block pl-3.5 border-l ${
            isDarkBg
              ? "text-white/60 border-white/20"
              : "text-[#738094] border-black/10"
          }`}
        >
          Private Wealth &amp; Advisory
        </span>
      )}
    </Link>
  );
}
