'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Search,
  Download,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  Trash2,
  X,
  CheckCircle2,
  AlertCircle,
  Save,
  LogOut,
  RefreshCw,
  Clock,
  Building,
  MapPin,
  Video,
  ShieldCheck,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import type { LeadRecord } from '@/types/crm';
import {
  CustomSelect,
  StatusSelect,
  type DropdownOption,
} from './CustomSelect';

const STATUS_FILTER_OPTIONS: DropdownOption[] = [
  { value: 'todos', label: 'Todos los estados' },
  { value: 'NEW', label: 'Fase 1: Nueva Consulta', dotColor: 'bg-blue-500' },
  { value: 'CONTACTED', label: 'Fase 2: Contactado', dotColor: 'bg-amber-500' },
  { value: 'MEETING', label: 'Fase 3: Reunión Agendada', dotColor: 'bg-purple-500' },
  { value: 'OPPORTUNITY', label: 'Fase 4: Propuesta / Oportunidad', dotColor: 'bg-indigo-500' },
  { value: 'INVESTED', label: 'Fase 5: Mandato Cerrado', dotColor: 'bg-emerald-500' },
  { value: 'DISQUALIFIED', label: 'Descartado', dotColor: 'bg-slate-400' },
];

const MODALIDAD_FILTER_OPTIONS: DropdownOption[] = [
  { value: 'todos', label: 'Todas las modalidades' },
  { value: 'santiago', label: 'Santiago (Presencial Las Condes)' },
  { value: 'concepcion', label: 'Concepción (Presencial O\'Higgins)' },
  { value: 'virtual', label: 'Sesión Virtual (Videoconferencia)' },
];

const SORT_ORDER_OPTIONS: DropdownOption[] = [
  { value: 'desc', label: 'Más recientes primero' },
  { value: 'asc', label: 'Más antiguos primero' },
];

interface LeadsDashboardProps {
  currentUser?: string;
}

export default function LeadsDashboard({ currentUser }: LeadsDashboardProps) {
  const router = useRouter();
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');
  const [modalidadFilter, setModalidadFilter] = useState('todos');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [selectedLead, setSelectedLead] = useState<LeadRecord | null>(null);
  const [editingNotes, setEditingNotes] = useState('');
  const [isUpdatingNotes, setIsUpdatingNotes] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);
  const [deletingLeadId, setDeletingLeadId] = useState<string | null>(null);
  const [leadToDelete, setLeadToDelete] = useState<{
    id: string;
    nombre: string;
  } | null>(null);
  const [deleteError, setDeleteError] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    searchInputRef.current?.focus();
    searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const fetchLeads = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/leads');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al cargar las consultas');
      setLeads(data.leads || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setUpdatingStatusId(id);
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, lead_status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al actualizar estado');
      const updated = data.lead || {
        lead_status: newStatus,
        estado: newStatus.toLowerCase(),
      };
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, ...updated } : l))
      );
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead((prev) => (prev ? { ...prev, ...updated } : null));
      }
    } catch {
      alert('No se pudo actualizar el estado.');
    } finally {
      setUpdatingStatusId(null);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    setIsUpdatingNotes(true);
    setSaveError('');
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedLead.id, notas: editingNotes }),
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || 'Error al guardar notas');
      }
      setLeads((prev) =>
        prev.map((l) =>
          l.id === selectedLead.id ? { ...l, notas: editingNotes } : l
        )
      );
      setSelectedLead((prev) =>
        prev ? { ...prev, notas: editingNotes } : null
      );
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch (err: unknown) {
      setSaveError(
        err instanceof Error ? err.message : 'No se pudieron guardar las notas.'
      );
    } finally {
      setIsUpdatingNotes(false);
    }
  };

  const confirmDeleteLead = async () => {
    if (!leadToDelete) return;
    setDeletingLeadId(leadToDelete.id);
    setDeleteError('');
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadToDelete.id }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || 'Error al eliminar el registro');
      }
      setLeads((prev) => prev.filter((l) => l.id !== leadToDelete.id));
      if (selectedLead && selectedLead.id === leadToDelete.id) {
        setSelectedLead(null);
      }
      setLeadToDelete(null);
    } catch (err: unknown) {
      setDeleteError(
        err instanceof Error ? err.message : 'Error eliminando registro'
      );
    } finally {
      setDeletingLeadId(null);
    }
  };

  const openModal = (lead: LeadRecord) => {
    setSelectedLead(lead);
    setEditingNotes(lead.notas || '');
    setSaveSuccess(false);
    setSaveError('');
  };

  const filteredLeads = useMemo(() => {
    return leads
      .filter((lead) => {
        const currentStatus = (
          lead.lead_status ||
          lead.estado ||
          'NEW'
        ).toUpperCase();
        const matchesStatus =
          statusFilter === 'todos' || currentStatus === statusFilter;

        const currentModalidad = (lead.modalidad || '').toLowerCase();
        const matchesModalidad =
          modalidadFilter === 'todos' || currentModalidad === modalidadFilter;

        const q = searchTerm.toLowerCase();
        const matchesSearch =
          !searchTerm ||
          lead.nombre.toLowerCase().includes(q) ||
          lead.email.toLowerCase().includes(q) ||
          lead.telefono.toLowerCase().includes(q) ||
          (lead.organizacion && lead.organizacion.toLowerCase().includes(q)) ||
          (lead.mensaje && lead.mensaje.toLowerCase().includes(q)) ||
          (lead.campaign && lead.campaign.toLowerCase().includes(q)) ||
          (lead.utm_campaign && lead.utm_campaign.toLowerCase().includes(q));

        return matchesStatus && matchesModalidad && matchesSearch;
      })
      .sort((a, b) => {
        const timeA = new Date(a.created_at).getTime();
        const timeB = new Date(b.created_at).getTime();
        return sortOrder === 'desc' ? timeB - timeA : timeA - timeB;
      });
  }, [leads, statusFilter, modalidadFilter, searchTerm, sortOrder]);

  const stats = useMemo(() => {
    const total = leads.length;
    const news = leads.filter(
      (l) => (l.lead_status || l.estado || 'NEW').toUpperCase() === 'NEW'
    ).length;
    const contacted = leads.filter(
      (l) => (l.lead_status || l.estado || '').toUpperCase() === 'CONTACTED'
    ).length;
    const meetingsOrClosed = leads.filter((l) =>
      ['MEETING', 'OPPORTUNITY', 'INVESTED'].includes(
        (l.lead_status || l.estado || '').toUpperCase()
      )
    ).length;

    return { total, news, contacted, meetingsOrClosed };
  }, [leads]);

  const exportToCSV = () => {
    const headers = [
      'Fecha',
      'Nombre',
      'Organización / Cargo',
      'Email',
      'Teléfono',
      'Preferencia Modalidad',
      'Mensaje / Consulta',
      'Estado Funnel',
      'Fuente',
      'Medio',
      'Campaña',
      'fbclid',
      'Meta CAPI Estado',
      'Notas Internas',
    ];
    const rows = filteredLeads.map((l) => [
      `"${new Date(l.created_at).toLocaleString('es-CL')}"`,
      `"${l.nombre.replace(/"/g, '""')}"`,
      `"${(l.organizacion || '').replace(/"/g, '""')}"`,
      `"${l.email}"`,
      `"${l.telefono}"`,
      `"${l.modalidad || 'santiago'}"`,
      `"${(l.mensaje || '').replace(/"/g, '""')}"`,
      `"${(l.lead_status || l.estado || 'NEW').toUpperCase()}"`,
      `"${l.source || l.utm_source || 'direct'}"`,
      `"${l.medium || l.utm_medium || ''}"`,
      `"${l.campaign || l.utm_campaign || ''}"`,
      `"${l.fbclid || ''}"`,
      `"${l.meta_crm_last_status || 'Pendiente'}"`,
      `"${(l.notas || '').replace(/"/g, '""')}"`,
    ]);

    const BOM = '\uFEFF';
    const csvContent =
      BOM + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `consultas_nordsee_capital_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getModalidadBadge = (modalidad?: string | null) => {
    const mod = (modalidad || 'santiago').toLowerCase();
    if (mod === 'concepcion') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F5] text-[#8C6A2E] border border-[#C5A059]/40 text-xs font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Concepción</span>
        </span>
      );
    }
    if (mod === 'virtual') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-medium">
          <Video className="w-3.5 h-3.5 text-blue-500" />
          <span>Videoconferencia</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F5] text-[#0B192C] border border-black/10 text-xs font-medium">
        <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
        <span>Santiago (Piso 21)</span>
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#151B26] flex flex-col selection:bg-[#C5A059]/20 selection:text-[#0B192C]">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white/95 border-b border-black/[0.08] backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="relative h-7 sm:h-8 w-32 sm:w-38 shrink-0">
            <Image
              src="/images/logo-nordsee-dark.png"
              alt="Nordsee Capital"
              fill
              priority
              sizes="160px"
              className="object-contain object-left"
            />
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F5] border border-black/[0.08] text-xs text-[#526071]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">Mesa de Admisión · Consultas de Contacto</span>
          </div>
        </div>

        {/* User profile & actions */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FAF9F5] border border-black/[0.08]">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[#0B192C] font-medium max-w-[150px] truncate">{currentUser || 'Admin'}</span>
          </div>

          <button
            onClick={() => fetchLeads()}
            title="Refrescar lista"
            className="p-2 sm:p-2.5 rounded-xl bg-white hover:bg-[#FAF9F5] border border-black/[0.1] text-[#0B192C] transition-all cursor-pointer shadow-2xs min-h-[38px] min-w-[38px] flex items-center justify-center"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100/80 text-red-700 border border-red-200/80 transition-all cursor-pointer font-semibold shadow-2xs min-h-[38px]"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cerrar Sesión</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3.5 sm:p-6 lg:p-8 pb-24 md:pb-8 space-y-4 sm:space-y-6">
        {/* KPI Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white border border-black/[0.08] rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#738094] font-semibold mb-1">
              Total Consultas
            </div>
            <div className="text-2xl sm:text-4xl font-serif text-[#0B192C] font-normal">
              {stats.total}
            </div>
          </div>

          <div className="bg-white border border-blue-200/80 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-blue-700 font-semibold mb-1 flex items-center gap-1.5 truncate">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <span className="truncate">Nuevas (Por Contactar)</span>
            </div>
            <div className="text-2xl sm:text-4xl font-serif text-blue-700 font-normal">
              {stats.news}
            </div>
          </div>

          <div className="bg-white border border-amber-200/80 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-amber-700 font-semibold mb-1 flex items-center gap-1.5 truncate">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
              <span className="truncate">En Seguimiento</span>
            </div>
            <div className="text-2xl sm:text-4xl font-serif text-amber-700 font-normal">
              {stats.contacted}
            </div>
          </div>

          <div className="bg-white border border-[#C5A059]/40 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#8C6A2E] font-semibold mb-1 flex items-center gap-1.5 truncate">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0" />
              <span className="truncate">Reuniones & Mandatos</span>
            </div>
            <div className="text-2xl sm:text-4xl font-serif text-[#C5A059] font-normal">
              {stats.meetingsOrClosed}
            </div>
          </div>
        </div>

        {/* Toolbar & Filter Bar */}
        <div className="bg-white border border-black/[0.08] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#738094] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Buscar por nombre, organización, correo, teléfono, mensaje..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F5] border border-black/10 focus:border-[#C5A059] focus:bg-white rounded-xl text-[#0B192C] text-xs sm:text-sm placeholder-[#828F9E] outline-none transition-all"
              />
            </div>

            {/* Export & Actions */}
            <div className="flex items-center gap-2 self-stretch sm:self-auto">
              <button
                onClick={exportToCSV}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B192C] hover:bg-[#142A4A] text-white text-xs font-semibold transition-all cursor-pointer shadow-xs min-h-[40px]"
              >
                <Download className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Exportar CSV</span>
              </button>
            </div>
          </div>

          {/* Filter Selectors with Luxury Custom Dropdowns */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3 border-t border-black/[0.06] text-xs">
            {/* Filtro Estado */}
            <div className="flex items-center gap-2">
              <span className="text-[#738094] uppercase tracking-wider text-[10px] sm:text-[11px] font-semibold">
                Estado:
              </span>
              <CustomSelect
                value={statusFilter}
                options={STATUS_FILTER_OPTIONS}
                onChange={setStatusFilter}
              />
            </div>

            {/* Filtro Modalidad */}
            <div className="flex items-center gap-2">
              <span className="text-[#738094] uppercase tracking-wider text-[10px] sm:text-[11px] font-semibold">
                Modalidad:
              </span>
              <CustomSelect
                value={modalidadFilter}
                options={MODALIDAD_FILTER_OPTIONS}
                onChange={setModalidadFilter}
              />
            </div>

            {/* Filtro Orden */}
            <div className="flex items-center gap-2">
              <span className="text-[#738094] uppercase tracking-wider text-[10px] sm:text-[11px] font-semibold">
                Orden:
              </span>
              <CustomSelect
                value={sortOrder}
                options={SORT_ORDER_OPTIONS}
                onChange={(val) => setSortOrder(val as 'desc' | 'asc')}
              />
            </div>

            {(statusFilter !== 'todos' ||
              modalidadFilter !== 'todos' ||
              searchTerm) && (
              <button
                onClick={() => {
                  setStatusFilter('todos');
                  setModalidadFilter('todos');
                  setSearchTerm('');
                }}
                className="text-xs font-semibold text-[#8C6A2E] hover:text-[#C5A059] hover:underline cursor-pointer ml-auto"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Contacts Table Card */}
        <div className="bg-white border border-black/[0.08] rounded-2xl shadow-xs overflow-hidden">
          {error && (
            <div className="p-4 bg-red-50 border-b border-red-100 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          {isLoading ? (
            <div className="py-20 text-center text-[#738094] text-sm">
              <div className="w-8 h-8 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <span>Cargando consultas de contacto...</span>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="py-20 text-center text-[#738094] text-sm space-y-2">
              <MessageSquare className="w-10 h-10 text-black/20 mx-auto" />
              <p className="text-[#0B192C] font-semibold">No hay consultas registradas</p>
              <p className="text-xs text-[#738094]">
                {searchTerm || statusFilter !== 'todos' || modalidadFilter !== 'todos'
                  ? 'Prueba ajustando los filtros de búsqueda.'
                  : 'Cada vez que alguien complete el formulario en /contacto, aparecerá aquí inmediatamente.'}
              </p>
            </div>
          ) : (
            <>
              {/* Desktop & Tablet Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left text-xs text-[#151B26]">
                  <thead className="bg-[#F4F2EB]/90 border-b border-black/[0.08] uppercase tracking-wider text-[11px] text-[#526071] font-semibold">
                    <tr>
                      <th className="py-3.5 px-5">Fecha & Contacto</th>
                      <th className="py-3.5 px-5">Organización / Cargo</th>
                      <th className="py-3.5 px-5">Modalidad</th>
                      <th className="py-3.5 px-5">Mensaje / Consulta</th>
                      <th className="py-3.5 px-5">Estado (Meta CAPI)</th>
                      <th className="py-3.5 px-5 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.05]">
                    {filteredLeads.map((lead) => {
                      const currentStatus = (
                        lead.lead_status ||
                        lead.estado ||
                        'NEW'
                      ).toUpperCase();
                      const cleanPhone = (lead.telefono || '').replace(/[^\d]/g, '');

                      return (
                        <tr
                          key={lead.id}
                          className="hover:bg-[#FAF9F5] transition-colors group cursor-pointer"
                          onClick={() => openModal(lead)}
                        >
                          {/* Fecha & Contacto */}
                          <td className="py-4 px-5 align-top">
                            <div className="font-semibold text-[#0B192C] text-sm">
                              {lead.nombre}
                            </div>
                            <div className="text-[#526071] text-xs mt-0.5">
                              {lead.email}
                            </div>
                            {lead.telefono && (
                              <div className="text-[#8C6A2E] text-xs font-mono font-medium mt-0.5">
                                {lead.telefono}
                              </div>
                            )}
                            <div className="text-[#828F9E] text-[11px] mt-1.5 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#738094]" />
                              <span>
                                {new Date(lead.created_at).toLocaleDateString(
                                  'es-CL',
                                  {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  }
                                )}
                              </span>
                            </div>
                          </td>

                          {/* Organización / Cargo */}
                          <td className="py-4 px-5 align-top">
                            <div className="text-[#0B192C] font-semibold flex items-center gap-1.5">
                              <Building className="w-3.5 h-3.5 text-[#C5A059]" />
                              <span>{lead.organizacion || 'Privado / Particular'}</span>
                            </div>
                            {lead.campaign && (
                              <div className="text-[11px] text-[#738094] mt-1 truncate max-w-[150px]">
                                Campaña: {lead.campaign}
                              </div>
                            )}
                          </td>

                          {/* Modalidad */}
                          <td className="py-4 px-5 align-top">
                            {getModalidadBadge(lead.modalidad)}
                          </td>

                          {/* Mensaje / Consulta */}
                          <td className="py-4 px-5 align-top max-w-xs">
                            <p className="text-[#333E4D] line-clamp-2 text-xs leading-relaxed">
                              {lead.mensaje || 'Sin mensaje adicional'}
                            </p>
                            {lead.fbclid && (
                              <span className="text-[10px] text-[#8C6A2E] bg-[#C5A059]/15 px-2 py-0.5 rounded-md border border-[#C5A059]/30 font-medium inline-block mt-1.5">
                                Meta Ads Lead
                              </span>
                            )}
                          </td>

                          {/* Estado del Funnel & Meta CAPI con Custom StatusSelect */}
                          <td
                            className="py-4 px-5 align-top"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <StatusSelect
                              value={currentStatus}
                              isLoading={updatingStatusId === lead.id}
                              disabled={updatingStatusId === lead.id}
                              onChange={(newVal) =>
                                handleUpdateStatus(lead.id, newVal)
                              }
                              align="left"
                            />

                            {/* Sincronización Meta CAPI */}
                            <div className="mt-1.5 text-[11px] flex items-center gap-1">
                              {lead.meta_crm_last_sent_at ? (
                                <span
                                  className="text-emerald-700 font-semibold"
                                  title={`Sincronizado a Meta: ${lead.meta_crm_last_event_name}`}
                                >
                                  ✓ Meta: {lead.meta_crm_last_event_name}
                                </span>
                              ) : lead.meta_crm_last_error ? (
                                <span
                                  className="text-amber-700 font-medium truncate max-w-[160px]"
                                  title={lead.meta_crm_last_error}
                                >
                                  ⚠️ CAPI Error
                                </span>
                              ) : (
                                <span className="text-[#828F9E]">
                                  En espera de cambio
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Quick Contact & Action Buttons */}
                          <td
                            className="py-4 px-5 align-top text-right"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="flex items-center justify-end gap-1.5">
                              {cleanPhone && (
                                <a
                                  href={`https://wa.me/${cleanPhone}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="Abrir WhatsApp"
                                  className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-all cursor-pointer shadow-2xs"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                </a>
                              )}
                              <a
                                href={`mailto:${lead.email}`}
                                title="Enviar correo"
                                className="p-2 rounded-lg bg-white hover:bg-[#FAF9F5] text-[#0B192C] border border-black/10 transition-all cursor-pointer shadow-2xs"
                              >
                                <Mail className="w-3.5 h-3.5" />
                              </a>
                              <button
                                onClick={() => openModal(lead)}
                                title="Ver detalle de la consulta"
                                className="p-2 rounded-lg bg-white hover:bg-[#FAF9F5] text-[#0B192C] border border-black/10 transition-all cursor-pointer shadow-2xs"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() =>
                                  setLeadToDelete({
                                    id: lead.id,
                                    nombre: lead.nombre,
                                  })
                                }
                                title="Eliminar consulta"
                                className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-all cursor-pointer shadow-2xs"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Stacked Card View (< 768px) */}
              <div className="md:hidden divide-y divide-black/[0.06]">
                {filteredLeads.map((lead) => {
                  const currentStatus = (
                    lead.lead_status ||
                    lead.estado ||
                    'NEW'
                  ).toUpperCase();
                  const cleanPhone = (lead.telefono || '').replace(/[^\d]/g, '');

                  return (
                    <div
                      key={lead.id}
                      className="p-4 hover:bg-[#FAF9F5] transition-colors space-y-3 cursor-pointer"
                      onClick={() => openModal(lead)}
                    >
                      {/* Top: Name & Date */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-[#0B192C] text-sm leading-snug truncate">
                            {lead.nombre}
                          </h3>
                          <div className="text-[#526071] text-xs flex items-center gap-1.5 mt-0.5 truncate">
                            <Building className="w-3 h-3 text-[#C5A059] shrink-0" />
                            <span className="truncate">{lead.organizacion || 'Privado / Particular'}</span>
                          </div>
                        </div>
                        <div className="text-[#828F9E] text-[10px] shrink-0 flex items-center gap-1 bg-[#FAF9F5] px-2 py-1 rounded-md border border-black/5">
                          <Clock className="w-3 h-3 text-[#738094]" />
                          <span>
                            {new Date(lead.created_at).toLocaleDateString('es-CL', {
                              day: '2-digit',
                              month: 'short',
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Badges: Modalidad & Meta Ads */}
                      <div className="flex flex-wrap items-center gap-2">
                        {getModalidadBadge(lead.modalidad)}
                        {lead.fbclid && (
                          <span className="text-[10px] text-[#8C6A2E] bg-[#C5A059]/15 px-2 py-0.5 rounded-md border border-[#C5A059]/30 font-medium">
                            Meta Ads Lead
                          </span>
                        )}
                        {lead.campaign && (
                          <span className="text-[10px] text-[#738094] bg-black/[0.03] px-2 py-0.5 rounded-md border border-black/5 truncate max-w-[140px]">
                            {lead.campaign}
                          </span>
                        )}
                      </div>

                      {/* Contact Info */}
                      <div className="text-xs space-y-1 text-[#526071]">
                        <div className="flex items-center gap-2 truncate">
                          <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                          <span className="truncate">{lead.email}</span>
                        </div>
                        {lead.telefono && (
                          <div className="flex items-center gap-2 font-mono text-[#8C6A2E]">
                            <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                            <span>{lead.telefono}</span>
                          </div>
                        )}
                      </div>

                      {/* Message preview */}
                      {lead.mensaje && (
                        <p className="text-[#333E4D] text-xs line-clamp-2 bg-[#FAF9F5] p-2.5 rounded-xl border border-black/[0.04] leading-relaxed">
                          &ldquo;{lead.mensaje}&rdquo;
                        </p>
                      )}

                      {/* Status Selector & Meta Sync */}
                      <div
                        className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-semibold text-[#738094] uppercase tracking-wider">
                            Estado:
                          </span>
                          <StatusSelect
                            value={currentStatus}
                            isLoading={updatingStatusId === lead.id}
                            disabled={updatingStatusId === lead.id}
                            onChange={(newVal) =>
                              handleUpdateStatus(lead.id, newVal)
                            }
                            align="left"
                          />
                        </div>

                        {/* Meta CAPI sync status indicator */}
                        <div className="text-[11px]">
                          {lead.meta_crm_last_sent_at ? (
                            <span className="text-emerald-700 font-semibold text-[10px]">
                              ✓ Meta: {lead.meta_crm_last_event_name}
                            </span>
                          ) : lead.meta_crm_last_error ? (
                            <span className="text-amber-700 font-medium text-[10px]">
                              ⚠️ CAPI Error
                            </span>
                          ) : null}
                        </div>
                      </div>

                      {/* Action Buttons with comfortable touch targets */}
                      <div
                        className="pt-2 border-t border-black/[0.05] flex items-center justify-between gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center gap-1.5">
                          {cleanPhone && (
                            <a
                              href={`https://wa.me/${cleanPhone}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold shadow-2xs min-h-[38px]"
                            >
                              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                              <span>WhatsApp</span>
                            </a>
                          )}
                          <a
                            href={`mailto:${lead.email}`}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF9F5] hover:bg-white text-[#0B192C] border border-black/10 text-xs font-semibold shadow-2xs min-h-[38px]"
                          >
                            <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                            <span>Email</span>
                          </a>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => openModal(lead)}
                            className="p-2 rounded-xl bg-white hover:bg-[#FAF9F5] text-[#0B192C] border border-black/10 transition-all cursor-pointer shadow-2xs min-h-[38px] min-w-[38px] flex items-center justify-center"
                            title="Ver detalles"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() =>
                              setLeadToDelete({ id: lead.id, nombre: lead.nombre })
                            }
                            className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-all cursor-pointer shadow-2xs min-h-[38px] min-w-[38px] flex items-center justify-center"
                            title="Eliminar"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Modal / Drawer de Detalle de la Consulta */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0B192C]/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white border border-black/10 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-4 sm:p-7 space-y-5 sm:space-y-6 text-[#151B26]">
            {/* Header Modal */}
            <div className="flex items-start justify-between gap-4 border-b border-black/[0.08] pb-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {getModalidadBadge(selectedLead.modalidad)}
                  <span className="text-xs text-[#738094]">
                    Recibido el {new Date(selectedLead.created_at).toLocaleString('es-CL')}
                  </span>
                </div>
                <h2 className="text-2xl font-serif text-[#0B192C] font-normal">
                  {selectedLead.nombre}
                </h2>
                <div className="text-xs text-[#8C6A2E] font-semibold mt-0.5">
                  {selectedLead.organizacion || 'Particular / Inversionista Privado'}
                </div>
              </div>

              <button
                onClick={() => setSelectedLead(null)}
                className="p-2 rounded-full hover:bg-[#FAF9F5] text-[#738094] hover:text-[#0B192C] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              {selectedLead.telefono && (
                <a
                  href={`https://wa.me/${selectedLead.telefono.replace(/[^\d]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp ({selectedLead.telefono})</span>
                </a>
              )}
              <a
                href={`mailto:${selectedLead.email}`}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FAF9F5] hover:bg-white text-[#0B192C] border border-black/10 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
              >
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>Enviar Email ({selectedLead.email})</span>
              </a>
              {selectedLead.telefono && (
                <a
                  href={`tel:${selectedLead.telefono}`}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FAF9F5] hover:bg-white text-[#0B192C] border border-black/10 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Llamar</span>
                </a>
              )}
            </div>

            {/* Mensaje Completo del Formulario */}
            <div className="bg-[#FAF9F5] border border-black/[0.08] rounded-2xl p-5 space-y-2 border-l-4 border-l-[#C5A059]">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C6A2E] flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Mensaje / Detalle de la Consulta</span>
              </span>
              <div className="text-[#0B192C] text-sm leading-relaxed whitespace-pre-wrap font-medium">
                {selectedLead.mensaje || 'No se ingresó mensaje adicional en el formulario.'}
              </div>
            </div>

            {/* Estado del Prospecto & Sincronización Meta CAPI con Custom Select */}
            <div className="bg-[#FAF9F5] border border-black/[0.08] rounded-2xl p-4 space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/[0.06] pb-3">
                <span className="text-[#526071] font-semibold">Estado Comercial en CRM:</span>
                <StatusSelect
                  value={(
                    selectedLead.lead_status ||
                    selectedLead.estado ||
                    'NEW'
                  ).toUpperCase()}
                  isLoading={updatingStatusId === selectedLead.id}
                  disabled={updatingStatusId === selectedLead.id}
                  onChange={(newVal) =>
                    handleUpdateStatus(selectedLead.id, newVal)
                  }
                  align="right"
                />
              </div>

              {/* Atribución y Meta CAPI */}
              <div className="space-y-1.5 pt-1 text-xs">
                <div className="flex items-center gap-2 text-[#526071]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>
                    Origen: <strong className="text-[#0B192C]">{selectedLead.source || selectedLead.utm_source || 'direct'}</strong> ·
                    Campaña: <strong className="text-[#0B192C]">{selectedLead.campaign || selectedLead.utm_campaign || 'none'}</strong>
                  </span>
                </div>
                {selectedLead.meta_crm_last_sent_at ? (
                  <div className="text-emerald-700 flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Sincronizado a Meta: {selectedLead.meta_crm_last_event_name}</span>
                  </div>
                ) : selectedLead.meta_crm_last_error ? (
                  <div className="text-amber-800 font-mono text-xs">
                    ⚠️ Meta CAPI: {selectedLead.meta_crm_last_error}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Notas Internas de Seguimiento */}
            <div className="space-y-2">
              <label
                htmlFor="lead-notes"
                className="block text-xs uppercase tracking-wider font-semibold text-[#0B192C]"
              >
                Notas Internas de Seguimiento
              </label>
              <textarea
                id="lead-notes"
                rows={3}
                value={editingNotes}
                onChange={(e) => setEditingNotes(e.target.value)}
                placeholder="Escribe acuerdos, resumen de llamadas o próximos pasos..."
                className="w-full p-3.5 bg-[#FAF9F5] border border-black/10 focus:border-[#C5A059] focus:bg-white rounded-xl text-[#0B192C] text-xs outline-none transition-all"
              />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div>
                  {saveSuccess && (
                    <span className="text-emerald-700 text-xs font-semibold">
                      ✓ Notas guardadas correctamente
                    </span>
                  )}
                  {saveError && (
                    <span className="text-red-600 text-xs font-semibold">
                      {saveError}
                    </span>
                  )}
                </div>
                <button
                  onClick={handleSaveNotes}
                  disabled={isUpdatingNotes}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0B192C] hover:bg-[#142A4A] text-white text-xs font-semibold transition-all cursor-pointer disabled:opacity-50 shadow-xs min-h-[40px]"
                >
                  <Save className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{isUpdatingNotes ? 'Guardando...' : 'Guardar Notas'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal: Delete Lead */}
      {leadToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B192C]/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white border border-red-200 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl text-[#151B26]">
            <h3 className="text-base font-bold text-red-700 flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-red-600" />
              <span>Confirmar Eliminación</span>
            </h3>
            <p className="text-xs text-[#526071] leading-relaxed">
              ¿Estás seguro de que deseas eliminar permanentemente la consulta de{' '}
              <strong className="text-[#0B192C]">{leadToDelete.nombre}</strong>? Esta
              acción no se puede deshacer.
            </p>

            {deleteError && (
              <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                {deleteError}
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setLeadToDelete(null)}
                className="px-4 py-2 rounded-xl bg-[#FAF9F5] hover:bg-black/5 text-[#0B192C] text-xs font-medium cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDeleteLead}
                disabled={Boolean(deletingLeadId)}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all cursor-pointer disabled:opacity-50 shadow-xs"
              >
                {deletingLeadId ? 'Eliminando...' : 'Sí, Eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Bottom Quick Action Bar (md:hidden) */}
      <nav
        aria-label="Acciones rápidas del CRM en móvil"
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-black/[0.08] shadow-[0_-4px_24px_rgba(0,0,0,0.08)] px-2 py-1.5 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]"
      >
        <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto">
          {/* 1. Todas */}
          <button
            type="button"
            onClick={() => {
              setStatusFilter('todos');
              setModalidadFilter('todos');
              setSearchTerm('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer select-none active:scale-95 ${
              statusFilter === 'todos' && !searchTerm
                ? 'text-[#0B192C] font-bold bg-[#FAF9F5]'
                : 'text-[#738094] hover:text-[#0B192C]'
            }`}
          >
            <div className="relative">
              <MessageSquare className="w-4 h-4" />
              {stats.total > 0 && (
                <span className="absolute -top-1.5 -right-2 px-1 text-[9px] font-bold bg-black/5 text-[#0B192C] rounded-full border border-black/10">
                  {stats.total}
                </span>
              )}
            </div>
            <span className="text-[10px] mt-1 font-medium">Todas</span>
          </button>

          {/* 2. Nuevas (NEW) */}
          <button
            type="button"
            onClick={() => {
              setStatusFilter((prev) => (prev === 'NEW' ? 'todos' : 'NEW'));
            }}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer select-none active:scale-95 ${
              statusFilter === 'NEW'
                ? 'text-blue-700 font-bold bg-blue-50/90 ring-1 ring-blue-200 shadow-2xs'
                : 'text-[#738094] hover:text-[#0B192C]'
            }`}
          >
            <div className="relative">
              <Sparkles className="w-4 h-4 text-blue-600" />
              {stats.news > 0 && (
                <span className="absolute -top-1.5 -right-2 px-1 text-[9px] font-bold bg-blue-600 text-white rounded-full">
                  {stats.news}
                </span>
              )}
            </div>
            <span className="text-[10px] mt-1 font-medium">Nuevas</span>
          </button>

          {/* 3. Buscar */}
          <button
            type="button"
            onClick={handleSearchClick}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer select-none active:scale-95 ${
              searchTerm
                ? 'text-[#8C6A2E] font-bold bg-[#C5A059]/15 ring-1 ring-[#C5A059]/30'
                : 'text-[#738094] hover:text-[#0B192C]'
            }`}
          >
            <Search className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[10px] mt-1 font-medium">Buscar</span>
          </button>

          {/* 4. Actualizar */}
          <button
            type="button"
            onClick={() => fetchLeads()}
            disabled={isLoading}
            className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-[#738094] hover:text-[#0B192C] transition-all cursor-pointer select-none active:scale-95 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-[#C5A059]' : ''}`} />
            <span className="text-[10px] mt-1 font-medium">Actualizar</span>
          </button>

          {/* 5. Exportar CSV */}
          <button
            type="button"
            onClick={exportToCSV}
            className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-[#738094] hover:text-[#0B192C] transition-all cursor-pointer select-none active:scale-95"
          >
            <Download className="w-4 h-4 text-[#738094]" />
            <span className="text-[10px] mt-1 font-medium">CSV</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
