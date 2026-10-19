"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { mainNav } from "@/content/navigation";
import { mainNavEn, alternateRouteMap } from "@/content/en/navigation";
import { ChevronDown, ChevronRight, Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isEn = pathname.startsWith("/en");
  const navItems = isEn ? mainNavEn : mainNav;
  const esUrl = isEn ? alternateRouteMap[pathname] || "/" : pathname;
  const enUrl = !isEn ? alternateRouteMap[pathname] || "/en" : pathname;
  const contactHref = isEn ? "/en/contact" : "/contacto";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  // Cerrar menú móvil y dropdowns si cambia la ruta (patrón idiomático React 19)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  // Cerrar menú móvil al presionar tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenus();
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevenir scroll en body al abrir menú móvil
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isDarkHero = (pathname === "/" || pathname === "/en") && !isScrolled && !mobileMenuOpen;

  const headerBgClass = mobileMenuOpen
    ? "bg-[#FAF9F5] text-[#0B192C] border-b border-black/10 shadow-md"
    : isScrolled
    ? "bg-[#FAF9F5]/95 backdrop-blur-md border-b border-black/5 shadow-xs text-[#0B192C]"
    : isDarkHero
    ? "bg-transparent text-white"
    : "bg-[#FAF9F5]/90 backdrop-blur-md border-b border-black/5 text-[#0B192C]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${headerBgClass}`}
    >
      <Container className="flex items-center justify-between h-16 sm:h-20">
        <BrandLogo
          variant={isDarkHero ? "light" : "dark"}
          href={isEn ? "/en" : "/"}
        />

        {/* Navegación Desktop */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label={isEn ? "Main navigation" : "Navegación principal"}
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/" || item.href === "/en"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setServicesDropdownOpen(false);
                  }}
                >
                  <button
                    onClick={() =>
                      setServicesDropdownOpen(!servicesDropdownOpen)
                    }
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:outline-hidden ${
                      isActive
                        ? isDarkHero
                          ? "text-white font-semibold"
                          : "text-[#0B192C] font-semibold"
                        : isDarkHero
                        ? "text-white/85 hover:text-white"
                        : "text-[#323C4D] hover:text-[#0B192C]"
                    }`}
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180" : ""
                      } text-[#C5A059]`}
                    />
                  </button>

                  {/* Mega-menú desplegable de servicios */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px] z-50">
                      <div className="bg-[#FAF9F5] border border-black/10 rounded-2xl p-4 shadow-xl shadow-black/10 backdrop-blur-md text-[#0B192C]">
                        <div className="text-xs font-semibold tracking-wider text-[#738094] uppercase px-3 py-1 mb-2 border-b border-black/5 flex items-center justify-between">
                          <span>{isEn ? "Practice Areas" : "Áreas de Especialización"}</span>
                          <Link
                            href={isEn ? "/en/services" : "/servicios"}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-[#C5A059] hover:underline flex items-center gap-0.5 text-[11px] font-medium focus-visible:ring-1 focus-visible:ring-[#C5A059] rounded-xs"
                          >
                            {isEn ? "View all" : "Ver todos"} <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group flex flex-col px-3 py-2.5 rounded-xl hover:bg-[#F4F2EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:outline-hidden"
                            >
                              <span className="text-sm font-semibold text-[#0B192C] group-hover:text-[#C5A059] transition-colors flex items-center justify-between">
                                {child.label}
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C5A059]" aria-hidden="true" />
                              </span>
                              {child.description && (
                                <span className="text-xs text-[#5D6A7E] mt-0.5 leading-snug">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:outline-hidden ${
                  isActive
                    ? isDarkHero
                      ? "text-white font-semibold"
                      : "text-[#0B192C] font-semibold"
                    : isDarkHero
                    ? "text-white/85 hover:text-white"
                    : "text-[#323C4D] hover:text-[#0B192C]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#C5A059] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Selector de idioma & CTA Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <div
            className={`flex items-center rounded-full p-0.5 border text-xs font-semibold ${
              isDarkHero
                ? "border-white/20 bg-black/40 text-white"
                : "border-black/10 bg-black/5 text-[#0B192C]"
            }`}
            role="group"
            aria-label={isEn ? "Language selection" : "Selección de idioma"}
          >
            <Link
              href={esUrl}
              className={`px-2.5 py-1 rounded-full transition-all text-[11px] tracking-wider font-semibold ${
                !isEn
                  ? "bg-[#C5A059] text-[#07101C] shadow-2xs"
                  : isDarkHero
                  ? "text-white/70 hover:text-white"
                  : "text-[#4B5565] hover:text-[#0B192C]"
              }`}
              aria-current={!isEn ? "true" : undefined}
            >
              ES
            </Link>
            <Link
              href={enUrl}
              className={`px-2.5 py-1 rounded-full transition-all text-[11px] tracking-wider font-semibold ${
                isEn
                  ? "bg-[#C5A059] text-[#07101C] shadow-2xs"
                  : isDarkHero
                  ? "text-white/70 hover:text-white"
                  : "text-[#4B5565] hover:text-[#0B192C]"
              }`}
              aria-current={isEn ? "true" : undefined}
            >
              EN
            </Link>
          </div>

          <Button
            href={contactHref}
            variant={isDarkHero ? "gold" : "primary"}
            size="sm"
          >
            {isEn ? "Contact Us" : "Contactar"}
          </Button>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:outline-hidden ${
            isDarkHero
              ? "text-white hover:bg-white/10"
              : "text-[#0B192C] hover:bg-black/5"
          }`}
          aria-label={mobileMenuOpen ? (isEn ? "Close menu" : "Cerrar menú") : (isEn ? "Open menu" : "Abrir menú")}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </Container>

      {/* Menú desplegable Móvil (Drawer accesible a pantalla completa) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 h-[calc(100dvh-4rem)] bg-[#FAF9F5] z-50 overflow-y-auto px-6 py-6 flex flex-col justify-between border-t border-black/5 shadow-2xl"
        >
          <div className="space-y-4">
            {/* Selector de idioma en móvil */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-black/5 shadow-2xs">
              <span className="text-xs font-semibold text-[#526071]">
                {isEn ? "Language / Idioma:" : "Idioma / Language:"}
              </span>
              <div className="flex items-center rounded-full p-0.5 border border-black/10 bg-black/5 text-xs font-semibold">
                <Link
                  href={esUrl}
                  onClick={closeMenus}
                  className={`px-3 py-1 rounded-full transition-all text-xs font-semibold ${
                    !isEn ? "bg-[#C5A059] text-[#07101C] shadow-xs" : "text-[#4B5565]"
                  }`}
                >
                  ES
                </Link>
                <Link
                  href={enUrl}
                  onClick={closeMenus}
                  className={`px-3 py-1 rounded-full transition-all text-xs font-semibold ${
                    isEn ? "bg-[#C5A059] text-[#07101C] shadow-xs" : "text-[#4B5565]"
                  }`}
                >
                  EN
                </Link>
              </div>
            </div>

            <nav className="flex flex-col divide-y divide-black/5" aria-label={isEn ? "Mobile navigation" : "Navegación móvil"}>
              {navItems.map((item) => {
                const isActive =
                  item.href === "/" || item.href === "/en"
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                if (item.children) {
                  return (
                    <div key={item.label} className="py-3">
                      <div className="flex items-center justify-between py-1">
                        <Link
                          href={item.href}
                          onClick={closeMenus}
                          className={`text-lg font-semibold tracking-tight ${
                            isActive ? "text-[#C5A059]" : "text-[#0B192C]"
                          } hover:text-[#C5A059] flex items-center gap-1.5`}
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                        </Link>
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-[#526071] px-2 py-0.5 rounded-full bg-[#EAE7DC]/60">
                          {isEn ? "6 Areas" : "6 Áreas"}
                        </span>
                      </div>
                      <div className="mt-2 space-y-1 pl-3 border-l-2 border-[#C5A059]/30">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMenus}
                              className={`flex flex-col py-2 px-2.5 rounded-lg transition-colors min-h-[44px] justify-center ${
                                isChildActive
                                  ? "bg-[#EAE7DC]/60 text-[#C5A059] font-semibold"
                                  : "text-[#232B3A] hover:bg-[#F4F2EB] hover:text-[#0B192C]"
                              }`}
                            >
                              <span className="text-sm font-medium flex items-center justify-between">
                                {child.label}
                                <ChevronRight className="w-3.5 h-3.5 text-[#526071]" aria-hidden="true" />
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className={`py-3.5 px-1 text-lg font-medium min-h-[44px] flex items-center justify-between transition-colors ${
                      isActive
                        ? "text-[#C5A059] font-semibold"
                        : "text-[#0B192C] hover:text-[#C5A059]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#526071]" aria-hidden="true" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-black/10 mt-6 space-y-3 shrink-0">
            <Button
              href={contactHref}
              onClick={closeMenus}
              variant="gold"
              size="lg"
              className="w-full justify-center shadow-md font-medium min-h-[48px]"
            >
              {isEn ? "Schedule Confidential Consultation" : "Iniciar Consulta Patrimonial"}
            </Button>
            <div className="text-center text-xs text-[#526071] font-medium tracking-wide">
              {isEn ? "Santiago · Concepción · Global Operations" : "Santiago · Concepción · Operaciones Internacionales"}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
