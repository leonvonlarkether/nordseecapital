"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay en milisegundos
  duration?: number; // Duración en milisegundos (default: 1200ms para máxima elegancia)
  direction?: "up" | "left" | "right" | "none";
  threshold?: number;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1200,
  direction = "up",
  threshold = 0.12,
  as: Component = "div",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [threshold]);

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return isVisible ? "translate-y-0" : "translate-y-10";
      case "left":
        return isVisible ? "translate-x-0" : "-translate-x-10";
      case "right":
        return isVisible ? "translate-x-0" : "translate-x-10";
      case "none":
      default:
        return "";
    }
  };

  return (
    <Component
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all ${
        isVisible
          ? "opacity-100"
          : "opacity-0 motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:translate-x-0"
      } ${getDirectionClasses()} ${className}`}
    >
      {children}
    </Component>
  );
}
