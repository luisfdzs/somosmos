import type { Metadata } from "next";
import {
  Atkinson_Hyperlegible,
  Courier_Prime,
  Mansalva,
  Source_Serif_4,
} from "next/font/google";
import { locales, localeTags } from "@/i18n";
import { getDictionary, getLocale } from "./dictionaries";
import "../globals.css";

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mansalva = Mansalva({
  variable: "--font-mansalva",
  subsets: ["latin"],
  weight: "400",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [localeTags[locale], `/${locale}`])
      ),
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();

  return (
    <html
      lang={localeTags[locale]}
      className={`${atkinson.variable} ${sourceSerif.variable} ${courierPrime.variable} ${mansalva.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
