import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import { verifyAdminAccess } from '@/lib/adminAuth';
import LeadsDashboard from '@/components/admin/LeadsDashboard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Panel de Administración CRM | Nordsee Capital',
  robots: {
    index: false,
    follow: false,
  },
};

function AdminLoading() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#0B192C] flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm font-semibold text-[#0B192C]">
          Cargando panel CRM de Nordsee Capital...
        </p>
      </div>
    </div>
  );
}

async function AdminContent() {
  // Indicar a Next.js 16 que esta ruta evalúa datos dinámicos en tiempo de solicitud
  // evitando el prerenderizado estático de tokens de sesión y Date.now() de Supabase
  await connection();

  const { authenticated, authorized, user } = await verifyAdminAccess();

  if (!authenticated) {
    redirect('/admin/login');
  }

  if (!authorized) {
    redirect('/admin/login?error=unauthorized');
  }

  return <LeadsDashboard currentUser={user?.email || undefined} />;
}

export default function AdminPage() {
  return (
    <Suspense fallback={<AdminLoading />}>
      <AdminContent />
    </Suspense>
  );
}
