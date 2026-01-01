export type Boss = {
  name: string
  map: string
  times: string[]
}

export const bosses: Boss[] = [
  {
    name: 'Babel',
    map: 'Iron 1',
    times: ['06:25', '12:25', '20:25'],
  },
  {
    name: 'Kelvezu',
    map: 'Cav. do Kel',
    times: ['00:25', '08:25', '18:25'],
  },
  {
    name: 'Valento',
    map: 'Vale Galubia',
    times: ['10:25', '14:25', '22:25'],
  },
  {
    name: 'Fúria',
    map: 'ET 1ºA',
    times: ['08:25', '12:25', '20:25'],
  },
  {
    name: 'Mokova',
    map: 'Lost 2',
    times: ['06:25', '14:25', '22:25'],
  },
  {
    name: 'Shy',
    map: 'ET 3ºA',
    times: ['00:25', '10:25', '18:25'],
  },
]
