import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Badge } from "./Badge";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export function PageHeader({
  badge,
  title,
  description,
  breadcrumbs,
  variant = "light",
}: PageHeaderProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden border-b ${
        isDark
          ? "bg-[#0B192C] text-[#FAF9F5] border-white/10"
          : "bg-gradient-to-b from-[#F4F2EB] to-[#FAF9F5] text-[#0B192C] border-black/5"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          isDark ? "bg-grid-dark opacity-40" : "bg-grid-subtle opacity-70"
        } pointer-events-none`}
      />

      <Container className="relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-1.5 text-xs text-[#738094] mb-5 font-medium"
          >
            <Link href="/" className="hover:text-[#C5A059] transition-colors">
              Inicio
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-[#A88340]" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={isDark ? "text-[#FAF9F5]" : "text-[#0B192C]"}
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl space-y-4">
          {badge && <Badge variant={isDark ? "dark" : "gold"}>{badge}</Badge>}

          <h1
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] ${
              isDark ? "text-[#FAF9F5]" : "text-[#0B192C]"
            }`}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`text-base sm:text-lg leading-relaxed font-normal ${
                isDark ? "text-[#F8F9FA]/75" : "text-[#4B5565]"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
