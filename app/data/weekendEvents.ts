export type EventQuest = {
  title: string
  type: 'Grupo' | 'Solo'
  level: string
  description: string
  mission: string
  rewards: string[]
}

export const weekendEvents: EventQuest[] = [
  {
    title: 'Desafio Diário',
    type: 'Grupo',
    level: '1–119',
    description:
      'Cace 2000 monstros em Calabouço dos Anciões 2º Andar e conclua o desafio.',
    mission: '0/1000 Calabouço dos Anciões 2º Andar',
    rewards: ['500.000 Gold', '920.000.000 Exp'],
  },
  {
    title: 'Desafio Diário',
    type: 'Grupo',
    level: '1–119',
    description:
      'Cace 2000 monstros em Calabouço dos Anciões 3º Andar e conclua o desafio.',
    mission: '0/1000 Calabouço dos Anciões 3º Andar',
    rewards: ['500.000 Gold', '920.000.000 Exp'],
  },
  {
    title: 'Quest Solo',
    type: 'Solo',
    level: '1–119',
    description:
      'Cace 250 monstros em Calabouço dos Anciões 2º Andar e conclua o desafio.',
    mission: '0/250 Calabouço dos Anciões 2º Andar',
    rewards: ['60.000.000 Exp'],
  },
  {
    title: 'Quest Solo',
    type: 'Solo',
    level: '1–119',
    description:
      'Cace 250 monstros em Calabouço dos Anciões 3º Andar e conclua o desafio.',
    mission: '0/250 Calabouço dos Anciões 3º Andar',
    rewards: ['60.000.000 Exp'],
  },
]
