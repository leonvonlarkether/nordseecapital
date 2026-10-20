import type { LeadPriority, LeadScoringResult } from '@/types/crm';

export interface LeadScoreInput {
  nombre?: string;
  email?: string;
  telefono?: string;
  organizacion?: string | null;
  servicio?: string | null;
  modalidad?: string | null;
  rangoPatrimonio?: string | null;
  mensaje?: string | null;
  capitalDisponible?: string | null;
  objetivoInversion?: string | null;
}

export function calculateLeadScore(lead: LeadScoreInput): LeadScoringResult {
  let score = 20; // Base score for completing contact intake
  let reasons: string[] = [];

  // 1. Contact Quality & Direct Channels (+25 pts)
  if (lead.telefono && lead.telefono.trim().length >= 8) {
    score += 15;
  }
  if (
    lead.email &&
    !lead.email.endsWith('@gmail.com') &&
    !lead.email.endsWith('@hotmail.com') &&
    !lead.email.endsWith('@yahoo.com') &&
    !lead.email.endsWith('@outlook.com')
  ) {
    score += 10;
    reasons.push('Dominio corporativo');
  }

  // 2. Organization / Institutional Relevance (+20 pts)
  if (lead.organizacion && lead.organizacion.trim().length > 2) {
    score += 20;
    reasons.push(`Entidad/Cargo: ${lead.organizacion.trim()}`);
  }

  // 3. Patrimonio / Capital (+25 pts)
  const patrimonio = (lead.rangoPatrimonio || lead.capitalDisponible || '').toLowerCase();
  if (
    patrimonio.includes('1m') ||
    patrimonio.includes('1.000.000') ||
    patrimonio.includes('500') ||
    patrimonio.includes('100') ||
    patrimonio.includes('alto')
  ) {
    score += 25;
    reasons.push('Patrimonio relevante');
  } else if (patrimonio) {
    score += 15;
  }

  // 4. Scope and Message Depth (+20 pts)
  const msg = (lead.mensaje || '').toLowerCase();
  if (
    msg.includes('family office') ||
    msg.includes('patrimonio') ||
    msg.includes('fiduciari') ||
    msg.includes('m&a') ||
    msg.includes('fusio') ||
    msg.includes('deuda privada') ||
    msg.includes('invers') ||
    msg.includes('credito') ||
    msg.includes('capital')
  ) {
    score += 20;
    reasons.push('Intención estratégica');
  } else if (msg.length > 50) {
    score += 10;
  }

  score = Math.min(100, score);

  let priority: LeadPriority = 'COLD';
  if (score >= 65) {
    priority = 'HOT';
  } else if (score >= 40) {
    priority = 'WARM';
  } else {
    priority = 'COLD';
  }

  const reason =
    reasons.length > 0
      ? `Calificación ${priority} (${score}/100): ${reasons.join(', ')}.`
      : `Consulta estándar (${score}/100). Requiere contacto consultivo.`;

  return { score, priority, reason };
}
