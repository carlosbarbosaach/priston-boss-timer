'use client'

import { useEffect, useRef } from 'react'
import { bosses } from '../data/bosses'
import { getNowInMinutes, timeToMinutes } from '../utils/time'

export function useFiveMinuteAlert() {
  const sentAlerts = useRef<Set<string>>(new Set())

  useEffect(() => {
    // pedir permissão ao carregar
    if (Notification.permission !== 'granted') {
      Notification.requestPermission()
    }

    const interval = setInterval(() => {
      const now = getNowInMinutes()

      bosses.forEach(boss => {
        boss.times.forEach(time => {
          let eventMinutes = timeToMinutes(time)
          if (eventMinutes < now) eventMinutes += 1440

          const diff = eventMinutes - now

          // 🔔 ALERTA APENAS 5 MIN ANTES
          if (diff === 5) {
            const key = `${boss.name}-${time}`

            if (!sentAlerts.current.has(key)) {
              new Notification('⏰ Boss em 5 minutos!', {
                body: `${boss.name} (${boss.map}) às ${time}`,
              })

              sentAlerts.current.add(key)
            }
          }
        })
      })
    }, 30000)

    return () => clearInterval(interval)
  }, [])
}
