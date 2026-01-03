import Image from 'next/image'

export default function WeekendEvents() {
  return (
    <section className="mt-20 text-center">
      {/* LOGO */}
      <div className="flex justify-center mb-4">
        <Image
          src="/logoHeader.png"
          alt="Eventos de Final de Semana"
          width={190}
          height={120}
          className="opacity-90"
          priority
        />
      </div>

      {/* TÍTULO */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 tracking-wide">
        Eventos de Final de Semana
      </h2>

      {/* SUBLINHADO */}
      <div className="flex justify-center mt-3">
        <span className="w-24 h-1 bg-yellow-400 rounded-full" />
      </div>

      {/* SUBTEXTO */}
      <p className="mt-4 text-sm text-zinc-400">
        Conteúdo especial disponível aos sábados e domingos
      </p>
    </section>
  )
}
