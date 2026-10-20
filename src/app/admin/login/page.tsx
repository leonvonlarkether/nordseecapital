'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ShieldCheck, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Credenciales incorrectas');
      }

      router.push('/admin');
      router.refresh();
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Error al iniciar sesión'
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#151B26] flex flex-col justify-center items-center px-4 selection:bg-[#C5A059]/20 selection:text-[#0B192C] relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11, 25, 44, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 25, 44, 0.035) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="relative h-12 w-48 mx-auto mb-5">
            <Image
              src="/images/logo-nordsee-dark.png"
              alt="Nordsee Capital"
              fill
              priority
              sizes="200px"
              className="object-contain"
            />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C5A059]/40 text-xs font-semibold text-[#8C6A2E] shadow-2xs mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Mesa de Admisión · Portal Privado</span>
          </div>
          <h1 className="text-2xl font-serif font-normal text-[#0B192C] tracking-tight">
            Panel de Administración CRM
          </h1>
          <p className="text-xs text-[#526071] mt-1.5 leading-relaxed">
            Gestión de Consultas & Sincronización Meta Conversions API
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-black/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-9 shadow-xl shadow-black/[0.03]">
          <form onSubmit={handleLogin} className="space-y-4">
            {status === 'error' && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs text-center font-medium">
                {errorMessage}
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="block text-xs font-semibold text-[#0B192C] uppercase tracking-wider mb-2 flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                Correo corporativo
              </label>
              <input
                id="username"
                type="email"
                required
                autoComplete="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="contacto@nordseecapital.com"
                className="w-full py-3 px-3.5 bg-[#FAF9F5] border border-black/10 focus:border-[#C5A059] focus:bg-white rounded-xl text-[#0B192C] placeholder-[#828F9E] text-sm outline-none transition-all"
              />
              <p className="text-[11px] text-[#738094] mt-1">
                Acceso habilitado para contacto@nordseecapital.com o leonarriagada@gmail.com
              </p>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-[#0B192C] uppercase tracking-wider mb-2 flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full py-3 px-3.5 bg-[#FAF9F5] border border-black/10 focus:border-[#C5A059] focus:bg-white rounded-xl text-[#0B192C] placeholder-[#828F9E] text-sm outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full mt-3 py-3.5 px-4 bg-[#0B192C] hover:bg-[#142A4A] text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px]"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#C5A059]" />
                  <span>Verificando acceso...</span>
                </>
              ) : (
                <>
                  <span>Ingresar al CRM</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-xs text-[#738094]">
          © 2026 Nordsee Capital · Todos los derechos reservados · Acceso restringido
        </div>
      </div>
    </div>
  );
}
