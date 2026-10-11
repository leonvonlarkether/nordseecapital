import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className = "",
  size = "default",
  ...props
}: ContainerProps) {
  const maxW =
    size === "narrow"
      ? "max-w-4xl"
      : size === "wide"
      ? "max-w-7xl"
      : "max-w-[1240px]";

  return (
    <div
      className={`w-full mx-auto px-5 sm:px-8 md:px-10 ${maxW} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
