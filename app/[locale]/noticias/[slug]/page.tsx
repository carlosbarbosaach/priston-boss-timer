import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { noticias, Locale } from "../data";

/* 🔥 GERA PÁGINAS ESTÁTICAS */
export async function generateStaticParams() {
  return noticias.map((n) => ({
    slug: n.slug,
  }));
}

/* 🔥 SEO DINÂMICO POR IDIOMA */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) return {};

  return {
    title: `${noticia.titulo[locale]} | Priston Tale`,
    description: noticia.descricao[locale],
  };
}

/* 🔥 PÁGINA DA NOTÍCIA */
export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}) {
  const { slug, locale } = await params;
  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* VOLTAR */}
        <Link
          href={`/${locale}/noticias`}
          className="text-sm text-amber-400 hover:underline"
        >
          ← Voltar
        </Link>

        {/* TÍTULO */}
        <h1 className="text-4xl font-bold mt-4 mb-2">
          {noticia.titulo[locale]}
        </h1>

        {/* META */}
        <p className="text-zinc-400 mb-8">
          {noticia.tipo} • {noticia.data}
        </p>

        {/* CONTEÚDO */}
        <article className="space-y-8">
          {noticia.conteudo.map((bloco, index) => (
            <section key={index}>
              {bloco.titulo && (
                <h2 className="text-2xl font-semibold mb-2">
                  {bloco.titulo[locale]}
                </h2>
              )}

              <p className="whitespace-pre-line text-zinc-300 leading-relaxed">
                {bloco.texto[locale]}
              </p>
            </section>
          ))}
        </article>

      </div>
    </main>
  );
}
