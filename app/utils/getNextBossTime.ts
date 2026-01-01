import { timeToMinutes, getNowInMinutes } from './time'

export function getNextBossTime(times: string[]) {
  const now = getNowInMinutes()

  const futureTimes = times
    .map(t => ({ time: t, minutes: timeToMinutes(t) }))
    .filter(t => t.minutes >= now)

  if (futureTimes.length > 0) {
    return futureTimes[0]
  }

  // se passou todos, pega o primeiro do dia seguinte
  return {
    time: times[0],
    minutes: timeToMinutes(times[0]) + 1440,
  }
}
