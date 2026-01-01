export function getNowInMinutes() {
  const now = new Date()
  const br = new Date(
    now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' })
  )
  return br.getHours() * 60 + br.getMinutes()
}

export function timeToMinutes(time: string) {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}
