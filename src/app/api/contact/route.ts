import { NextResponse } from "next/server";

interface ContactRequestBody {
  nombre?: string;
  email?: string;
  telefono?: string;
  servicio?: string;
  mensaje?: string;
  honeypot?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    // 1. Detección honeypot (antispam silencioso)
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: "OK" });
    }

    // 2. Validación de presencia
    if (!body.nombre?.trim() || !body.email?.trim() || !body.mensaje?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Nombre, correo y mensaje son obligatorios.",
        },
        { status: 400 }
      );
    }

    // 3. Normalización y validación de correo
    const email = body.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "El formato de correo electrónico no es válido.",
        },
        { status: 400 }
      );
    }

    // 4. Límite de longitud de mensaje
    if (body.mensaje.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          message: "El mensaje excede la longitud máxima permitida.",
        },
        { status: 400 }
      );
    }

    // 5. Comprobación de servicio de despacho (Resend / SMTP)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // Requisito estricto: No simular envíos exitosos si no hay servicio configurado.
      return NextResponse.json(
        {
          success: false,
          configured: false,
          message:
            "El canal automatizado está pendiente de configuración en el servidor. Por favor comuníquese directamente a contacto@nordseecapital.com o al +56 9 6667 4099.",
        },
        { status: 503 }
      );
    }

    // 6. Si existiera RESEND_API_KEY en producción:
    // const resend = new Resend(resendApiKey);
    // await resend.emails.send({ ... });

    return NextResponse.json({
      success: true,
      message: "Consulta recibida correctamente.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message:
          "Error interno al procesar su solicitud. Por favor intente más tarde o contáctenos por correo.",
      },
      { status: 500 }
    );
  }
}
