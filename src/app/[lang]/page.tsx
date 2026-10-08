import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/site-header";
import { Expediente } from "@/components/site/expediente";
import { escritos } from "@/content/escritos";
import { getDictionary, getLocale } from "./dictionaries";

export default async function Home() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <>
      <SiteHeader dict={dict} locale={locale} />

      <main className="flex-1">
        {/* La pancarta */}
        <section className="bg-monte bg-[radial-gradient(circle_at_20%_10%,#5f6e55_0,transparent_50%),radial-gradient(circle_at_90%_80%,#3f4a39_0,transparent_55%)] px-4 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-24">
          <div className="mx-auto grid max-w-4xl justify-items-center gap-10">
            <div className="pancarta w-full px-5 py-7 sm:px-12 sm:py-12">
              <h1 className="font-paint leading-[0.95]">
                <span className="block text-[clamp(2.4rem,8vw,5rem)]">{dict.hero.bannerTop}</span>
                <span className="block -rotate-[1.5deg] text-[clamp(2.6rem,9.5vw,6.2rem)] text-balance text-spray">
                  {dict.hero.bannerBottom}
                </span>
              </h1>
            </div>
            <div className="grid justify-items-center gap-6 text-center text-sabana">
              <p className="max-w-[42ch] text-lg sm:text-xl">{dict.hero.lead}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="xl" className="bg-sabana text-pintura hover:bg-white">
                  <a href="#que-pasa">{dict.hero.ctaProblem}</a>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="border-2 border-sabana bg-transparent text-sabana hover:bg-white/10 hover:text-sabana"
                >
                  <a href="#lo-que-hemos-pedido">{dict.hero.ctaRecord}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Qué pasa */}
        <section id="que-pasa" className="scroll-mt-4 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-3xl gap-6">
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {dict.problem.title}
            </h2>
            {dict.problem.body.map((paragraph) => (
              <p key={paragraph} className="max-w-[62ch] text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="border-l-4 border-spray pl-4 text-muted-foreground">
              {dict.problem.photosEmpty}
            </p>
          </div>
        </section>

        {/* El expediente */}
        <section id="lo-que-hemos-pedido" className="scroll-mt-4 bg-mesa px-4 py-16 sm:px-6 sm:py-24">
          <Expediente dict={dict.record} locale={locale} escritos={escritos} />
        </section>

        {/* Súmate y actualidad */}
        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <div id="sumate" className="grid scroll-mt-4 content-start gap-4">
              <h2 className="font-heading text-3xl font-bold">{dict.join.title}</h2>
              <p className="max-w-[48ch] text-lg">{dict.join.body}</p>
            </div>
            <div id="actualidad" className="grid scroll-mt-4 content-start gap-4">
              <h2 className="font-heading text-3xl font-bold">{dict.news.title}</h2>
              <p className="max-w-[48ch] text-lg text-muted-foreground">{dict.news.empty}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pintura px-4 py-10 text-sabana sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4">
          <span className="font-paint text-2xl">SomosMos</span>
          <p className="text-sm text-sabana/80">{dict.footer.about}</p>
        </div>
      </footer>
    </>
  );
}
