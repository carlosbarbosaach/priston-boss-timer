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
  isRepeatable?: boolean
}

export const ancientsFloor1: AncientsQuest[] = [
  // 🔹 QUESTS DE MONSTROS
  {
    title: 'Calabouço dos Anciões – 1º Andar',
    questType: 'Monstros',
    mode: 'Grupo',
    level: '1–109',
    description:
      'Cace 1000 monstros em Calabouço dos Anciões – 1º Andar e conclua o desafio.',
    mission: '0/1000 Calabouço dos Anciões 1º Andar',
    rewards: ['500.000 Gold', '920.000.000 Exp'],
    isDaily: true,
  },
  {
    title: 'Calabouço dos Anciões – 1º Andar',
    questType: 'Monstros',
    mode: 'Grupo',
    level: '1–109',
    description:
      'Cace 600 monstros em Calabouço dos Anciões – 1º Andar e conclua o desafio.',
    mission: '0/600 Calabouço dos Anciões 1º Andar',
    rewards: ['120.000.000 Exp'],
    isRepeatable: true,
  },
  {
    title: 'Calabouço dos Anciões – 1º Andar',
    questType: 'Monstros',
    mode: 'Solo',
    level: '1–109',
    description:
      'Cace 250 monstros em Calabouço dos Anciões – 1º Andar e conclua o desafio.',
    mission: '0/250 Calabouço dos Anciões 1º Andar',
    rewards: ['60.000.000 Exp'],
    isRepeatable: true,
  },

  // 🔥 QUEST DE BOSS
  {
    title: 'Calabouço dos Anciões – 1º Andar',
    questType: 'Boss',
    mode: 'Grupo',
    bossName: 'Shesep-Ankh',
    level: '1–109',
    description:
      'Shesep-Ankh foi visto no Calabouço dos Anciões – 1º Andar. Elimine o alvo e retorne para receber sua EXP.',
    mission: '0/1 Shesep-Ankh',

    rewards: ['800.000.000 Exp'],
    drops: ['Item Nível 100'],
    spawnTimes: ['12:00', '20:00'],
    isDaily: true,
  }
]
