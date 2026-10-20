import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { User } from '@supabase/supabase-js';

const DEFAULT_ADMIN_EMAILS = [
  'leonarriagada@gmail.com',
  'contacto@nordseecapital.com',
  'admin@nordseecapital.com',
  'leon@solventia.cl',
];

export function getAllowedAdminEmails(): string[] {
  const envEmails = process.env.ALLOWED_ADMIN_EMAILS;
  if (!envEmails) return DEFAULT_ADMIN_EMAILS;
  return [
    ...DEFAULT_ADMIN_EMAILS,
    ...envEmails.split(',').map((e) => e.trim().toLowerCase()),
  ];
}

export async function createSupabaseAuthServerClient() {
  const cookieStore = await cookies();

  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Called from Server Component
        }
      },
    },
  });
}

/**
 * Validates cryptographically the JWT against Supabase Auth.
 */
export async function getAuthenticatedAdminUser(): Promise<User | null> {
  try {
    const supabase = await createSupabaseAuthServerClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) return null;
    return user;
  } catch {
    return null;
  }
}

/**
 * Checks role-based access control and admin whitelist.
 */
export function isUserAuthorizedAdmin(user: User | null): boolean {
  if (!user) return false;

  // 1. Role-based in app_metadata
  const role = user.app_metadata?.role;
  if (role === 'admin' || role === 'superadmin') return true;

  // 2. Allowed corporate emails
  const email = user.email?.toLowerCase().trim() || '';
  const allowed = getAllowedAdminEmails();
  return allowed.includes(email);
}

export async function verifyAdminAccess(): Promise<{
  authenticated: boolean;
  authorized: boolean;
  user: User | null;
}> {
  const user = await getAuthenticatedAdminUser();
  if (!user) {
    return { authenticated: false, authorized: false, user: null };
  }

  const authorized = isUserAuthorizedAdmin(user);
  return { authenticated: true, authorized, user };
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const { authenticated, authorized } = await verifyAdminAccess();
  return authenticated && authorized;
}

export async function getAdminSessionUser(): Promise<string | null> {
  const user = await getAuthenticatedAdminUser();
  return user?.email || null;
}
