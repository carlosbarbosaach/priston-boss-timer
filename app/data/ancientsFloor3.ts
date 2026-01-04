export type AncientsQuest = {
  title: string
  questType: 'Monstros' | 'Boss'
  mode: 'Grupo' | 'Solo'
  level: string
  description: string
  mission: string

  rewards: string[]   // recompensa garantida
  drops?: string[]    // drop do boss (chance)

  bossName?: string
  spawnTimes?: string[]

  isDaily?: boolean 
  isRepeatable?: boolean
}

export const ancientsFloor3: AncientsQuest[] = [
  // 🔹 QUESTS DE MONSTROS (REPETÍVEIS)
  {
    title: 'Calabouço dos Anciões – 3º Andar',
    questType: 'Monstros',
    mode: 'Grupo',
    level: '1–119',
    description:
      'Cace 1000 monstros em Calabouço dos Anciões – 3º Andar e conclua o desafio.',
    mission: '0/1000 Calabouço dos Anciões 3º Andar',
    rewards: ['500.000 Gold', '920.000.000 Exp'],
    isDaily: true,
  },
  {
    title: 'Calabouço dos Anciões – 3º Andar',
    questType: 'Monstros',
    mode: 'Grupo',
    level: '1–119',
    description:
      'Cace 600 monstros em Calabouço dos Anciões – 3º Andar e conclua o desafio.',
    mission: '0/600 Calabouço dos Anciões 3º Andar',
    rewards: ['120.000.000 Exp'],
    isRepeatable: true,
  },
  {
    title: 'Calabouço dos Anciões – 3º Andar',
    questType: 'Monstros',
    mode: 'Solo',
    level: '1–119',
    description:
      'Cace 250 monstros em Calabouço dos Anciões – 3º Andar e conclua o desafio.',
    mission: '0/250 Calabouço dos Anciões 3º Andar',
    rewards: ['60.000.000 Exp'],
    isRepeatable: true,
  },

  // 🔥 QUEST DE BOSS
  {
    title: 'Calabouço dos Anciões – 3º Andar',
    questType: 'Boss',
    mode: 'Grupo',
    bossName: 'Boss do Calabouço (3º Andar)',
    level: '1–119',
    description:
      'Derrote o boss do Calabouço dos Anciões – 3º Andar.',
    mission: '0/1 Boss do Calabouço',

    rewards: ['800.000.000 Exp'],
    drops: [
      'Item Nível 100',
      'Chance de Item Nível 102',
    ],
    spawnTimes: ['12:00', '20:00'],
    isDaily: true,
  },
]
