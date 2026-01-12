import Link from "next/link";
import { noticias } from "./data";

export const metadata = {
  title: "Notícias & Updates | Priston Tale",
  description: "Fique por dentro das últimas novidades do servidor Priston Tale",
};

export default function NoticiasPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-home-noticia.png')" }}
    >
      <div className="min-h-screen bg-black/70 backdrop-blur-[2px]">
        <div className="max-w-6xl mx-auto px-6 py-10">

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Notícias & Updates
            </h1>
            <p className="text-zinc-300 max-w-2xl">
              Fique por dentro das últimas novidades do servidor.
            </p>
          </header>

          <section className="space-y-6">
            {noticias.map((item) => (
              <Link key={item.slug} href={`/noticias/${item.slug}`}>
                <article
                  className={`
                    cursor-pointer relative overflow-hidden rounded-2xl border
                    backdrop-blur-md transition-all duration-300 hover:scale-[1.01]
                    ${
                      item.destaque
                        ? "bg-gradient-to-r from-amber-900/40 to-transparent border-amber-600 shadow-lg shadow-amber-900/20"
                        : "bg-zinc-900/70 border-zinc-700 hover:border-zinc-500"
                    }
                  `}
                >
                  <div className="p-6">

                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                        {item.tipo}
                      </span>
                      <span className="text-sm text-zinc-400">
                        {item.data}
                      </span>
                    </div>

                    <h2 className="text-2xl font-semibold text-white mb-2">
                      {item.titulo}
                    </h2>

                    <p className="text-zinc-300 mb-4">
                      {item.descricao}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {item.destaque && (
                    <div className="absolute inset-y-0 left-0 w-1 bg-amber-500" />
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
