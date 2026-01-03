export type AncientsQuest = {
  title: string
  type: 'Grupo' | 'Solo'
  level: string
  description: string
  mission: string
  rewards: string[]
}

export const ancientsFloor1: AncientsQuest[] = [
  {
    title: 'Calabouço dos Anciões – 1º Andar',
    type: 'Grupo',
    level: '1–109',
    description:
      'Cace 2000 monstros em Calabouço dos Anciões 1º Andar e conclua o desafio.',
    mission: '0/1000 Calabouço dos Anciões 1º Andar',
    rewards: ['500.000 Gold', '920.000.000 Exp'],
  },
  {
    title: 'Calabouço dos Anciões – 1º Andar',
    type: 'Grupo',
    level: '1–109',
    description:
      'Cace 600 monstros em Calabouço dos Anciões 1º Andar e conclua o desafio.',
    mission: '0/600 Calabouço dos Anciões 1º Andar',
    rewards: ['120.000.000 Exp'],
  },
  {
    title: 'Calabouço dos Anciões – 1º Andar',
    type: 'Solo',
    level: '1–109',
    description:
      'Cace 250 monstros em Calabouço dos Anciões 1º Andar e conclua o desafio.',
    mission: '0/250 Calabouço dos Anciões 1º Andar',
    rewards: ['60.000.000 Exp'],
  },
]
