type Props = {
  event: {
    title: string

    questType: 'Monstros' | 'Boss'
    mode: 'Grupo' | 'Solo'

    level: string
    description: string
    mission: string

    rewards: string[]        // recompensa garantida
    drops?: string[]         // drop do boss (chance)

    bossName?: string
    spawnTimes?: string[]    // horários do boss

    isDaily?: boolean        // 🔔 desafio diário
    isRepeatable?: boolean   // 🔁 desafio repetitivo
  }
}

export default function EventCard({ event }: Props) {
  const isBoss = event.questType === 'Boss'

  return (
    <div
      className={`rounded-xl p-5 space-y-3 border ${
        isBoss
          ? 'bg-red-900/20 border-red-500/40'
          : 'bg-zinc-900 border-zinc-800'
      }`}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center gap-2 flex-wrap">
        <h3
          className={`font-bold ${
            isBoss ? 'text-red-400' : 'text-yellow-400'
          }`}
        >
          [{event.title}]
        </h3>

        <div className="flex gap-2 items-center">
          {event.isDaily && (
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 border border-blue-400 text-blue-300">
              DESAFIO DIÁRIO
            </span>
          )}

          {event.isRepeatable && (
            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 border border-green-400 text-green-300">
              DESAFIO REPETITIVO
            </span>
          )}

          <span className="text-xs px-2 py-1 rounded-full border text-zinc-300">
            {isBoss ? 'BOSS' : event.mode}
          </span>
        </div>
      </div>

      {/* TEXTO AUXILIAR */}
      {event.isDaily && (
        <p className="text-xs text-blue-300">
          Disponível apenas uma vez por dia
        </p>
      )}

      {event.isRepeatable && !event.isDaily && (
        <p className="text-xs text-green-300">
          Pode ser repetido quantas vezes quiser
        </p>
      )}

      {/* BOSS NAME */}
      {event.bossName && (
        <p className="text-sm text-red-400 font-semibold">
          Alvo: {event.bossName}
        </p>
      )}

      {/* SPAWN TIMES */}
      {event.spawnTimes && (
        <div>
          <p className="text-sm font-semibold text-cyan-400">
            Horário do Boss:
          </p>
          <div className="flex gap-2 flex-wrap mt-1">
            {event.spawnTimes.map((time, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"
              >
                {time}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* LEVEL */}
      <p className="text-sm text-red-400">
        Level Requerido: {event.level}
      </p>

      {/* DESCRIPTION */}
      <div>
        <p className="text-sm font-semibold text-zinc-300">
          Descrição:
        </p>
        <p className="text-sm text-zinc-400">
          {event.description}
        </p>
      </div>

      {/* MISSION */}
      <div>
        <p className="text-sm font-semibold text-red-400">
          Missão:
        </p>
        <p className="text-sm text-zinc-400">
          {event.mission}
        </p>
      </div>

      {/* REWARD */}
      <div>
        <p className="text-sm font-semibold text-yellow-400">
          Recompensa da Quest:
        </p>
        <ul className="text-sm text-zinc-300 list-disc list-inside">
          {event.rewards.map((reward, index) => (
            <li key={index}>{reward}</li>
          ))}
        </ul>
      </div>

      {/* DROPS */}
      {event.drops && (
        <div>
          <p className="text-sm font-semibold text-purple-400">
            Drop do Boss (chance):
          </p>
          <ul className="text-sm text-zinc-300 list-disc list-inside">
            {event.drops.map((drop, index) => (
              <li
                key={index}
                className={
                  drop.includes('102')
                    ? 'text-purple-400 font-semibold'
                    : ''
                }
              >
                {drop}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
