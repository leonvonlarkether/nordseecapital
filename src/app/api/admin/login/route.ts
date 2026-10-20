import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { getAllowedAdminEmails } from '@/lib/adminAuth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawEmail = body.username || body.email;
    const password = body.password;

    if (!rawEmail || !password) {
      return NextResponse.json(
        { error: 'Debes ingresar tu correo y contraseña.' },
        { status: 400 }
      );
    }

    const email = String(rawEmail).trim().toLowerCase();

    // Check against allowed emails before or after auth
    const allowed = getAllowedAdminEmails();
    const isAllowedEmail = allowed.includes(email);

    const cookieStore = await cookies();
    const response = NextResponse.json({ ok: true });

    const supabase = createServerClient(
      process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
              response.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.user) {
      return NextResponse.json(
        { error: 'Credenciales inválidas en Supabase. Verifica correo y contraseña.' },
        { status: 401 }
      );
    }

    const role = data.user.app_metadata?.role;
    const isRoleAdmin = role === 'admin' || role === 'superadmin';

    if (!isRoleAdmin && !isAllowedEmail) {
      // User is authenticated in Supabase but not authorized as admin
      await supabase.auth.signOut();
      return NextResponse.json(
        { error: 'Acceso denegado: este correo no tiene permisos de administrador.' },
        { status: 403 }
      );
    }

    return response;
  } catch (error: any) {
    console.error('Error en Supabase login:', error);
    return NextResponse.json(
      { error: 'Error al comunicarse con Supabase Auth.' },
      { status: 500 }
    );
  }
}
