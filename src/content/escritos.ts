import type { Locale } from "@/i18n";

/** Un escrito presentado en el registro del Concello de Mos. */
export type Escrito = {
  /** Número de registro de entrada, tal como aparece en el justificante. */
  registro: string;
  /** Fecha de presentación (AAAA-MM-DD). */
  fecha: string;
  asunto: Record<Locale, string>;
  /** Fecha de la respuesta del concello, si la hubo (AAAA-MM-DD). */
  respuesta?: string;
};

// Ordenados del más antiguo al más reciente. Solo datos reales con justificante.
export const escritos: Escrito[] = [];
