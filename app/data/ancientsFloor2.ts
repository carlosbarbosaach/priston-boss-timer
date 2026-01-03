export type AncientsQuest = {
  title: string
  questType: 'Monstros' | 'Boss'
  mode: 'Grupo' | 'Solo'
  level: string
  description: string
  mission: string

  rewards: string[]   // garantido
  drops?: string[]    // chance (somente boss)

  bossName?: string
  spawnTimes?: string[]
  isDaily?: boolean
}

export const ancientsFloor2: AncientsQuest[] = [
  {
    title: 'Calabouço dos Anciões – 2º Andar',
    questType: 'Monstros',
    mode: 'Grupo',
    level: '1–119',
    description:
      'Cace 1000 monstros em Calabouço dos Anciões – 2º Andar e conclua o desafio diário.',
    mission: '0/1000 Calabouço dos Anciões 2º Andar',

    rewards: ['500.000 Gold', '920.000.000 Exp'],
    isDaily: true, // 🔔 DESAFIO DIÁRIO
  },
  {
    title: 'Calabouço dos Anciões – 2º Andar',
    questType: 'Monstros',
    mode: 'Grupo',
    level: '1–119',
    description:
      'Cace 600 monstros em Calabouço dos Anciões 2º Andar e conclua o desafio.',
    mission: '0/600 Calabouço dos Anciões 2º Andar',
    rewards: ['120.000.000 Exp'],
  },
  {
    title: 'Calabouço dos Anciões – 2º Andar',
    questType: 'Monstros',
    mode: 'Grupo',
    level: '1–119',
    description:
      'Cace 250 monstros em Calabouço dos Anciões 2º Andar e conclua o desafio.',
    mission: '0/250 Calabouço dos Anciões 2º Andar',
    rewards: ['60.000.000 Exp'],
  },
]
