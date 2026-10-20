import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Parse .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
const env = {};
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  content.split('\n').forEach((line) => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let val = match[2].trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      env[key] = val;
    }
  });
}

const supabaseUrl =
  env.SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey =
  env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error('Error: Faltan credenciales de Supabase en .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const email = process.argv[2] || 'leonarriagada@gmail.com';
const password = process.argv[3] || 'Nordsee2026!';

async function createOrUpdateAdmin() {
  console.log(`Configurando usuario administrador: ${email}...`);

  const {
    data: { users },
    error: listError,
  } = await supabase.auth.admin.listUsers();

  if (listError) {
    console.error('Error listando usuarios:', listError.message);
    process.exit(1);
  }

  const existingUser = users.find((u) => u.email?.toLowerCase() === email.toLowerCase());

  if (existingUser) {
    console.log(`Usuario encontrado (ID: ${existingUser.id}). Actualizando contraseña y rol...`);
    const { data, error } = await supabase.auth.admin.updateUserById(existingUser.id, {
      password,
      email_confirm: true,
      app_metadata: { role: 'admin' },
    });

    if (error) {
      console.error('Error actualizando usuario:', error.message);
      process.exit(1);
    }

    console.log(`✓ Administrador actualizado correctamente.`);
  } else {
    console.log(`Creando nuevo usuario administrador...`);
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      app_metadata: { role: 'admin' },
      user_metadata: { name: 'Leon Arriagada' },
    });

    if (error) {
      console.error('Error creando usuario:', error.message);
      process.exit(1);
    }

    console.log(`✓ Administrador creado exitosamente (ID: ${data.user.id}).`);
  }

  // Verificar login con anon key
  const anonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (anonKey) {
    const authClient = createClient(supabaseUrl, anonKey);
    const { data: signInData, error: signInError } = await authClient.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      console.error('Error verificando signInWithPassword:', signInError.message);
      process.exit(1);
    }

    console.log(`✓ Verificación de autenticación exitosa para ${signInData.user.email}.`);
  }
}

createOrUpdateAdmin();
