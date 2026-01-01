'use client'

import { Boss } from '../data/bosses'
import { useEffect, useRef, useState } from 'react'
import { getNextBossTime } from '../utils/getNextBossTime'
import { getNowInMinutes } from '../utils/time'
import { motion } from 'framer-motion'

type Props = {
  boss: Boss
}

export default function BossCard({ boss }: Props) {
  const [diff, setDiff] = useState<number>(0)
  const prevStatus = useRef<'normal' | 'soon' | 'live'>('normal')

  useEffect(() => {
    const update = () => {
      const now = getNowInMinutes()
      const next = getNextBossTime(boss.times)
      setDiff(next.minutes - now)
    }

    update()
    const interval = setInterval(update, 30000)
    return () => clearInterval(interval)
  }, [boss.times])

  /* =====================
     STATUS
  ===================== */
  const isLive = diff === 0
  const isSoon = diff > 0 && diff <= 10

  let status: 'normal' | 'soon' | 'live' = 'normal'
  if (isLive) status = 'live'
  else if (isSoon) status = 'soon'

  /* =====================
     ANIMAÇÃO SOMENTE
     NA MUDANÇA DE STATUS
  ===================== */
  const shouldAnimate = prevStatus.current !== status

  useEffect(() => {
    prevStatus.current = status
  }, [status])

  const animation =
    status === 'live'
      ? { scale: [0.96, 1] }
      : status === 'soon'
      ? { y: [10, 0], opacity: [0, 1] }
      : {}

  return (
    <motion.div
      animate={shouldAnimate ? animation : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      className={`
        bg-zinc-900 border rounded-xl p-5
        ${status === 'live' ? 'border-red-500 ring-1 ring-red-500/40' : ''}
        ${status === 'soon' ? 'border-yellow-400 ring-1 ring-yellow-400/30' : ''}
        ${status === 'normal' ? 'border-zinc-800' : ''}
      `}
    >
      {/* TÍTULO */}
      <h3 className="text-lg font-bold text-yellow-400">
        {boss.name}
      </h3>

      {/* MAPA */}
      <p className="text-sm text-zinc-400">{boss.map}</p>

      {/* HORÁRIOS */}
      <div className="flex gap-2 flex-wrap mt-3">
        {boss.times.map(time => (
          <span
            key={time}
            className="text-sm px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700"
          >
            {time}
          </span>
        ))}
      </div>

      {/* STATUS TEXTO */}
      <div className="mt-4 text-sm font-semibold">
        {status === 'live' && (
          <span className="text-red-500">
            🔴 Ao vivo agora!
          </span>
        )}

        {status === 'soon' && (
          <span className="text-yellow-400">
            🟡 Faltam {diff} min
          </span>
        )}

        {status === 'normal' && (
          <span className="text-zinc-400">
            Próximo em {diff} min
          </span>
        )}
      </div>
    </motion.div>
  )
}
