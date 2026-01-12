import { notFound } from "next/navigation";
import Link from "next/link";
import { noticias } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params;

  const noticia = noticias.find((n) => n.slug === slug);
  if (!noticia) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-10">

        <Link
          href="/noticias"
          className="text-sm text-amber-400 hover:underline"
        >
          ← Voltar para notícias
        </Link>

        <h1 className="text-4xl font-bold mt-4 mb-2">
          {noticia.titulo}
        </h1>

        <p className="text-zinc-400 mb-8">
          {noticia.tipo} • {noticia.data}
        </p>

        <article className="space-y-6">
          {noticia.conteudo.map((bloco, index) => (
            <section key={index}>
              {bloco.titulo && (
                <h2 className="text-2xl font-semibold mb-2">
                  {bloco.titulo}
                </h2>
              )}
              <p className="text-zinc-300">
                {bloco.texto}
              </p>
            </section>
          ))}
        </article>

      </div>
    </main>
  );
}
