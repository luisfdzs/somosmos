import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Escrito } from "@/content/escritos";
import { localeTags, type Locale } from "@/i18n";

/** Registro de escritos presentados al concello, cada uno con su sello. */
export function Expediente({
  dict,
  locale,
  escritos,
}: {
  dict: Dictionary["record"];
  locale: Locale;
  escritos: Escrito[];
}) {
  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(localeTags[locale], { dateStyle: "long" }).format(
      new Date(`${iso}T12:00:00`)
    );

  return (
    <div className="mx-auto grid max-w-3xl gap-6 bg-papel p-5 text-tinta shadow-[0_2px_0_#d5dae0,0_8px_24px_rgb(28_36_48/0.12)] sm:p-10">
      <h2 className="font-heading text-3xl leading-tight font-bold text-balance sm:text-4xl">
        {dict.title}
      </h2>
      <p className="max-w-[60ch] font-heading text-lg text-tinta/80">{dict.lead}</p>

      {escritos.length === 0 ? (
        <p className="border-y border-dashed border-tinta/30 py-6 text-tinta/75">{dict.empty}</p>
      ) : (
        <ol className="border-t border-tinta/20">
          {escritos.map((escrito) => (
            <li
              key={escrito.registro}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-tinta/20 py-4"
            >
              <div className="min-w-0">
                <p className="font-mono text-sm text-boligrafo">
                  {dict.registryLabel} {escrito.registro},{" "}
                  <time dateTime={escrito.fecha}>{formatDate(escrito.fecha)}</time>
                </p>
                <p className="font-heading text-lg">{escrito.asunto[locale]}</p>
              </div>
              {escrito.respuesta ? (
                <span className="sello text-boligrafo">{dict.answered}</span>
              ) : (
                <span className="sello text-sello">{dict.noResponse}</span>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
