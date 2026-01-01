'use client'

import { bosses } from '../data/bosses'
import { getNowInMinutes, timeToMinutes } from '../utils/time'
import { useEffect, useState } from 'react'

type NextBossItem = {
  boss: string
  map: string
  time: string
  diff: number
}

export default function NextBoss() {
  const [nextBosses, setNextBosses] = useState<NextBossItem[]>([])

  useEffect(() => {
    const update = () => {
      const now = getNowInMinutes()
      let closestDiff: number | null = null
      let result: NextBossItem[] = []

      bosses.forEach(boss => {
        boss.times.forEach(time => {
          let minutes = timeToMinutes(time)
          if (minutes < now) minutes += 1440

          const diff = minutes - now

          if (closestDiff === null || diff < closestDiff) {
            closestDiff = diff
            result = [
              {
                boss: boss.name,
                map: boss.map,
                time,
                diff,
              },
            ]
          } else if (diff === closestDiff) {
            result.push({
              boss: boss.name,
              map: boss.map,
              time,
              diff,
            })
          }
        })
      })

      setNextBosses(result)
    }

    update()
    const interval = setInterval(update, 30000)
    return () => clearInterval(interval)
  }, [])

  if (!nextBosses.length) return null

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-zinc-300">
        🔥 Próximo{nextBosses.length > 1 ? 's' : ''} Boss Global
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {nextBosses.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/30 rounded-xl px-6 py-4 text-center min-w-[240px]"
          >
            <p className="text-lg font-bold text-yellow-400">
              {item.boss}
            </p>
            <p className="text-sm text-zinc-400">
              {item.map}
            </p>
            <p className="text-sm text-zinc-300 mt-1">
              Em {item.diff} min ({item.time})
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
