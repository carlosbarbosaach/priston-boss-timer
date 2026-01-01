import { bosses } from '../data/bosses'
import BossCard from './BossCard'

export default function BossGrid() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">
        Agenda dos Bosses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bosses.map(boss => (
          <BossCard key={boss.name} boss={boss} />
        ))}
      </div>
    </section>
  )
}
