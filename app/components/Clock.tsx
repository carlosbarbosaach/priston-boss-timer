'use client'

import { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
        })
      )
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-8 py-4 text-green-400 text-3xl font-mono">
        {time}
      </div>
    </div>
  )
}
