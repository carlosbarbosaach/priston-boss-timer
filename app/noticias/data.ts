export type Noticia = {
  slug: string;
  titulo: string;
  data: string;
  tipo: "Update" | "Evento" | "Patch Notes";
  descricao: string;
  tags: string[];
  destaque?: boolean;

  // 👇 CONTEÚDO COMPLETO DA PÁGINA
  conteudo: {
    titulo?: string;
    texto: string;
  }[];
};

export const noticias: Noticia[] = [
  {
    slug: "balanceamento-janeiro-2026",
    titulo: "Balanceamento – Janeiro 2026",
    data: "12/01/2026",
    tipo: "Update",
    descricao:
      "Ajustes nas classes Cavaleiro, Mecânico, Guerreira, Shaman e outras.",
    tags: ["Balanceamento", "PvP", "PvE"],
    destaque: true,

    conteudo: [
      {
        titulo: "🛡️ Cavaleiro",
        texto:
          "Escudo dos Deuses teve sua redução de dano ajustada de 40% para 20% para equilibrar a resistência da classe.",
      },
      {
        titulo: "⚙️ Mecânico",
        texto:
          "A build com escudo foi fortalecida, enquanto o dano com armas de duas mãos foi reduzido.",
      },
      {
        titulo: "🧙 Mago",
        texto:
          "O dano contra monstros foi aumentado em 50%, tornando o up mais competitivo.",
      },
      {
        titulo: "⚔️ Guerreira",
        texto:
          "A classe recebeu ajustes de dano e velocidade para melhor equilíbrio.",
      },
    ],
  },
];
