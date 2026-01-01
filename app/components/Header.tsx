import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="text-center space-y-4">
      {/* LOGO + LINK */}
      <Link
        href="https://www.aoruspristontale.com.br/"
        target="_blank"
        className="flex justify-center"
      >
        <Image
          src="/logoHeader.png"
          alt="Aorus Priston Tale"
          width={180}
          height={80}
          priority
          className="hover:scale-105 transition-transform"
        />
      </Link>

      {/* TITULO */}
      <h1 className="text-4xl font-extrabold text-yellow-400">
        Horários dos Boss
      </h1>

      {/* SUBTITULO */}
      <p className="text-zinc-400 text-sm">
        Horário de Brasília (UTC-3)
      </p>
    </header>
  )
}
