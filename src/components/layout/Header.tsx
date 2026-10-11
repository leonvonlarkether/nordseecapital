"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { mainNav } from "@/content/navigation";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF9F5]/90 backdrop-blur-md py-3.5 border-b border-black/5 shadow-xs"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <Container className="flex items-center justify-between">
        <BrandLogo variant="dark" />

        {/* Navegación Desktop */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Navegación principal"
        >
          {mainNav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={() =>
                      setServicesDropdownOpen(!servicesDropdownOpen)
                    }
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                      isActive
                        ? "text-[#0B192C] font-semibold"
                        : "text-[#323C4D] hover:text-[#0B192C]"
                    }`}
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mega-menú desplegable de servicios */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px] z-50">
                      <div className="bg-[#FAF9F5] border border-black/10 rounded-2xl p-4 shadow-xl shadow-black/10 backdrop-blur-md">
                        <div className="text-xs font-semibold tracking-wider text-[#738094] uppercase px-3 py-1 mb-2 border-b border-black/5 flex items-center justify-between">
                          <span>Áreas de Especialización</span>
                          <Link
                            href="/servicios"
                            className="text-[#C5A059] hover:underline flex items-center gap-0.5 text-[11px] font-medium"
                          >
                            Ver todos <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group flex flex-col px-3 py-2.5 rounded-xl hover:bg-[#F4F2EB] transition-colors"
                            >
                              <span className="text-sm font-semibold text-[#0B192C] group-hover:text-[#C5A059] transition-colors flex items-center justify-between">
                                {child.label}
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C5A059]" />
                              </span>
                              {child.description && (
                                <span className="text-xs text-[#5D6A7E] mt-0.5 line-clamp-1">
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
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive
                    ? "text-[#0B192C] font-semibold"
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

        {/* CTA Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href="/contacto" variant="primary" size="sm">
            Contactar
          </Button>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#0B192C] hover:bg-black/5 transition-colors"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </Container>

      {/* Menú desplegable Móvil (Drawer accesible) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-[#FAF9F5] z-40 lg:hidden overflow-y-auto px-6 py-8 flex flex-col justify-between border-t border-black/5">
          <div className="space-y-6">
            <nav className="flex flex-col space-y-2">
              {mainNav.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label} className="py-2">
                      <span className="text-xs font-semibold tracking-wider uppercase text-[#738094] px-2 block mb-2">
                        {item.label}
                      </span>
                      <div className="space-y-1 pl-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenus}
                            className="block py-2 text-base font-medium text-[#151B26] hover:text-[#C5A059]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className="py-2.5 px-2 text-lg font-medium text-[#151B26] hover:text-[#C5A059] border-b border-black/5"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-black/10 mt-8 space-y-4">
            <Button
              href="/contacto"
              onClick={closeMenus}
              variant="primary"
              size="lg"
              className="w-full"
            >
              Iniciar Consulta
            </Button>
            <div className="text-center text-xs text-[#5D6A7E]">
              Santiago · Concepción · Operaciones Internacionales
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
