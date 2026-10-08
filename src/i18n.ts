export const locales = ["es", "gl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);

/** Etiqueta BCP 47 para formatear fechas y para <html lang>. */
export const localeTags: Record<Locale, string> = {
  es: "es-ES",
  gl: "gl-ES",
};
