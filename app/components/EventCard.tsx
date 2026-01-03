type Props = {
  event: {
    title: string
    type: string
    level: string
    description: string
    mission: string
    rewards: string[]
  }
}

export default function EventCard({ event }: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-yellow-400 font-bold">
          [{event.title}]
        </h3>
        <span className="text-xs text-zinc-400">
          Quest {event.type}
        </span>
      </div>

      <p className="text-sm text-red-400">
        Level Requerido: {event.level}
      </p>

      <div>
        <p className="text-sm font-semibold text-zinc-300">Descrição:</p>
        <p className="text-sm text-zinc-400">{event.description}</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-red-400">Missão:</p>
        <p className="text-sm text-zinc-400">{event.mission}</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-yellow-400">Recompensas:</p>
        <ul className="text-sm text-zinc-400 list-disc list-inside">
          {event.rewards.map((reward, index) => (
            <li key={index}>{reward}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
