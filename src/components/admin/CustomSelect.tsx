'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Loader2 } from 'lucide-react';

export interface DropdownOption {
  value: string;
  label: string;
  dotColor?: string;
  badgeClass?: string;
  description?: string;
}

interface CustomSelectProps {
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  align?: 'left' | 'right';
  variant?: 'filter' | 'badge';
  placeholder?: string;
}

export function CustomSelect({
  value,
  options,
  onChange,
  disabled = false,
  className = '',
  buttonClassName = '',
  menuClassName = '',
  align = 'left',
  variant = 'filter',
  placeholder = 'Seleccionar...',
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block text-left ${className}`}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`group inline-flex items-center justify-between gap-2 text-xs font-semibold rounded-xl outline-none transition-all cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed ${
          variant === 'badge'
            ? `px-3 py-1.5 border shadow-2xs ${
                selectedOption?.badgeClass ||
                'bg-white text-[#0B192C] border-black/15'
              } hover:brightness-95`
            : `px-3 py-2 bg-[#FAF9F5] hover:bg-white text-[#0B192C] border border-black/15 hover:border-[#C5A059] focus:border-[#C5A059] shadow-2xs`
        } ${buttonClassName}`}
      >
        <span className="flex items-center gap-2 truncate">
          {selectedOption?.dotColor && (
            <span
              className={`w-2 h-2 rounded-full shrink-0 ${selectedOption.dotColor}`}
            />
          )}
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 opacity-60 group-hover:opacity-100 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className={`absolute z-50 mt-1.5 min-w-[210px] w-max max-w-[calc(100vw-2rem)] sm:max-w-[320px] bg-white rounded-2xl border border-black/10 shadow-xl shadow-black/10 py-1.5 focus:outline-none animate-in fade-in zoom-in-95 duration-100 ${
            align === 'right' ? 'right-0' : 'left-0'
          } ${menuClassName}`}
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option.value)}
                className={`w-full flex items-center justify-between gap-3 px-3.5 py-2 text-xs text-left transition-colors cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#C5A059]/10 text-[#0B192C] font-semibold'
                    : 'text-[#333E4D] hover:bg-[#FAF9F5] hover:text-[#0B192C]'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {option.dotColor && (
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${option.dotColor}`}
                    />
                  )}
                  <div className="min-w-0">
                    <span className="block truncate">{option.label}</span>
                    {option.description && (
                      <span className="block text-[10px] text-[#738094] truncate">
                        {option.description}
                      </span>
                    )}
                  </div>
                </div>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

interface StatusSelectProps {
  value: string;
  onChange: (value: string) => void;
  isLoading?: boolean;
  disabled?: boolean;
  align?: 'left' | 'right';
  className?: string;
}

export const STATUS_CONFIG: Record<
  string,
  {
    label: string;
    dotColor: string;
    badgeClass: string;
    description: string;
  }
> = {
  NEW: {
    label: 'Fase 1: Nueva Consulta',
    dotColor: 'bg-blue-500 ring-2 ring-blue-200',
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-200 font-semibold',
    description: 'Lead captado · Sincronizado como QualifiedLead',
  },
  CONTACTED: {
    label: 'Fase 2: Contactado',
    dotColor: 'bg-amber-500 ring-2 ring-amber-200',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200 font-semibold',
    description: 'Primer contacto telefónico / email',
  },
  MEETING: {
    label: 'Fase 3: Reunión Agendada',
    dotColor: 'bg-purple-500 ring-2 ring-purple-200',
    badgeClass: 'bg-purple-50 text-purple-800 border-purple-200 font-semibold',
    description: 'Comité de admisión / videoconferencia agendada',
  },
  OPPORTUNITY: {
    label: 'Fase 4: Propuesta / Oportunidad',
    dotColor: 'bg-indigo-500 ring-2 ring-indigo-200',
    badgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200 font-semibold',
    description: 'Estructuración fiduciaria en curso',
  },
  INVESTED: {
    label: 'Fase 5: Mandato Cerrado',
    dotColor: 'bg-emerald-500 ring-2 ring-emerald-200',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold',
    description: 'Mandato o colocación formalizada',
  },
  DISQUALIFIED: {
    label: 'Descartado',
    dotColor: 'bg-slate-400 ring-2 ring-slate-200',
    badgeClass: 'bg-slate-100 text-slate-600 border-slate-200 font-medium',
    description: 'No cumple perfil / spam / cancelado',
  },
};

export function StatusSelect({
  value,
  onChange,
  isLoading = false,
  disabled = false,
  align = 'left',
  className = '',
}: StatusSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const normalizedVal = (value || 'NEW').toUpperCase();
  const currentConfig = STATUS_CONFIG[normalizedVal] || STATUS_CONFIG.NEW;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (statusKey: string) => {
    if (statusKey !== normalizedVal) {
      onChange(statusKey);
    }
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-block text-left ${className}`}
    >
      <button
        type="button"
        disabled={disabled || isLoading}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`group inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl border text-xs outline-none transition-all cursor-pointer select-none shadow-2xs hover:shadow-xs active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed ${currentConfig.badgeClass}`}
      >
        <span className="flex items-center gap-2 truncate">
          {isLoading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin text-current shrink-0" />
          ) : (
            <span
              className={`w-2 h-2 rounded-full shrink-0 ${currentConfig.dotColor}`}
            />
          )}
          <span className="truncate">{currentConfig.label}</span>
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 opacity-70 group-hover:opacity-100 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          onClick={(e) => e.stopPropagation()}
          className={`absolute z-50 mt-1.5 w-64 max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-black/10 shadow-2xl shadow-black/10 py-1.5 focus:outline-none animate-in fade-in zoom-in-95 duration-100 ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          <div className="px-3.5 py-1.5 border-b border-black/[0.06] mb-1">
            <span className="text-[10px] font-semibold text-[#738094] uppercase tracking-wider block">
              Cambiar Estado del Lead
            </span>
          </div>

          {Object.entries(STATUS_CONFIG).map(([key, config]) => {
            const isSelected = key === normalizedVal;
            return (
              <button
                key={key}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(key)}
                className={`w-full flex items-center justify-between gap-2.5 px-3.5 py-2 text-xs text-left transition-colors cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#C5A059]/10 text-[#0B192C] font-semibold'
                    : 'text-[#333E4D] hover:bg-[#FAF9F5] hover:text-[#0B192C]'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${config.dotColor}`}
                  />
                  <div className="min-w-0">
                    <span className="block truncate">{config.label}</span>
                    <span className="block text-[10px] text-[#738094] truncate">
                      {config.description}
                    </span>
                  </div>
                </div>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
