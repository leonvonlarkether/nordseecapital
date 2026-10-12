import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-[transform,color,background-color,border-color,box-shadow,opacity] duration-200 ease-out will-change-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2.5 min-h-[44px] gap-1.5",
    md: "text-sm px-6 py-3 min-h-[44px] gap-2",
    lg: "text-base px-8 py-4 min-h-[48px] gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#0B192C] text-[#FAF9F5] hover:bg-[#142A4A] hover:-translate-y-0.5 shadow-md shadow-[#0B192C]/15 active:translate-y-0",
    secondary:
      "bg-[#FAF9F5] text-[#0B192C] hover:bg-[#F4F2EB] hover:-translate-y-0.5 border border-black/10 active:translate-y-0",
    gold:
      "bg-[#C5A059] text-[#060D17] font-semibold hover:bg-[#D4B678] hover:-translate-y-0.5 shadow-md shadow-[#C5A059]/20 active:translate-y-0",
    outline:
      "bg-transparent text-[#FAF9F5] border border-white/30 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "bg-transparent text-[#0B192C] border border-[#0B192C]/30 hover:border-[#0B192C] hover:bg-[#0B192C]/5",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
