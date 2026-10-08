import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "@/i18n";

const dictionaries = {
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  gl: () => import("./dictionaries/gl.json").then((module) => module.default),
} satisfies Record<Locale, unknown>;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["es"]>>;

export async function getLocale(): Promise<Locale> {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return locale;
}

export const getDictionary = async () => dictionaries[await getLocale()]();
