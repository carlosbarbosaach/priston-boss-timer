import Link from "next/link";
import { noticias, Locale } from "./data";
import { getDictionary } from "@/lib/i18n";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export const dynamic = "force-dynamic";

export default async function NoticiasPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-home-noticia.png')" }}
    >
      <div className="min-h-screen bg-black/75 backdrop-blur-[2px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

          {/* HEADER – MOBILE FIRST */}
          <header className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            
            {/* TEXTO */}
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {t.title}
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto sm:mx-0">
                {t.subtitle}
              </p>
            </div>

            {/* LOGO + IDIOMA */}
            <div className="flex items-center justify-center sm:justify-end gap-4">
              <img
                src="/logoHeader.png"
                alt="Priston Tale"
                className="h-12 sm:h-14 md:h-16 object-contain opacity-95"
              />
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </header>

          {/* LISTA DE NOTÍCIAS */}
          <section className="flex flex-col gap-10">
            {noticias.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/noticias/${item.slug}`}
                className="block"
              >
                <article
                  className={`
                    relative overflow-hidden rounded-2xl border
                    transition-all duration-300
                    active:scale-[0.98] sm:hover:scale-[1.01]
                    ${
                      item.destaque
                        ? "bg-gradient-to-r from-amber-900/40 to-transparent border-amber-600 shadow-xl shadow-amber-900/20"
                        : "bg-zinc-900/80 border-zinc-700 hover:border-zinc-500"
                    }
                  `}
                >
                  {/* CONTEÚDO */}
                  <div className="p-6 sm:p-7 md:p-8">

                    {/* TOPO */}
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                        {item.tipo}
                      </span>
                      <span className="text-xs sm:text-sm text-zinc-400">
                        {item.data}
                      </span>
                    </div>

                    {/* TÍTULO */}
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                      {item.titulo[locale]}
                    </h2>

                    {/* DESCRIÇÃO */}
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-5">
                      {item.descricao[locale]}
                    </p>

                    {/* TAGS (CORRIGIDO) */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags[locale].map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] sm:text-xs px-2.5 py-1 rounded bg-zinc-800 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BARRA DE DESTAQUE */}
                  {item.destaque && (
                    <div className="absolute inset-y-0 left-0 w-1.5 bg-amber-500" />
                  )}
                </article>
              </Link>
            ))}
          </section>

        </div>
      </div>
    </main>
  );
}
