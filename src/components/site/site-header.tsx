import Link from "next/link";
import { locales, type Locale } from "@/i18n";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { cn } from "@/lib/utils";

const localeNames: Record<Locale, string> = { es: "Castellano", gl: "Galego" };

export function SiteHeader({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const links = [
    { href: "#que-pasa", label: dict.nav.problem },
    { href: "#lo-que-hemos-pedido", label: dict.nav.record },
    { href: "#sumate", label: dict.nav.join },
    { href: "#actualidad", label: dict.nav.news },
  ];

  return (
    <header className="bg-monte text-sabana">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-4 sm:px-6">
        <Link href={`/${locale}`} className="font-paint text-3xl leading-none">
          SomosMos
        </Link>
        <nav className="order-last w-full sm:order-none sm:w-auto" aria-label="Secciones">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="underline-offset-4 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="ml-auto" aria-label={dict.nav.language}>
          <ul className="flex gap-1">
            {locales.map((l) => (
              <li key={l}>
                <Link
                  href={`/${l}`}
                  hrefLang={l}
                  lang={l}
                  aria-current={l === locale ? "page" : undefined}
                  className={cn(
                    "rounded-sm px-2.5 py-1 text-sm",
                    l === locale ? "bg-sabana text-pintura font-bold" : "hover:bg-white/10"
                  )}
                >
                  {localeNames[l]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
