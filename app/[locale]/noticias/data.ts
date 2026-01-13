export type Locale = "pt" | "es" | "en";

export type Noticia = {
  slug: string;
  data: string;
  tipo: "Update" | "Evento" | "Patch Notes";
  destaque?: boolean;

  titulo: Record<Locale, string>;
  descricao: Record<Locale, string>;
  tags: Record<Locale, string[]>;

  conteudo: {
    titulo?: Record<Locale, string>;
    texto: Record<Locale, string>;
  }[];
};

export const noticias: Noticia[] = [
  {
    slug: "patch-notes-v-1035",
    data: "14/01/2026",
    tipo: "Patch Notes",
    destaque: true,

    titulo: {
      pt: "Patch Notes – v.1035",
      es: "Notas del Parche – v.1035",
      en: "Patch Notes – v.1035",
    },

    descricao: {
      pt: "Remoção de evento, melhorias de segurança, novo sistema de XP/DPS e ajustes econômicos.",
      es: "Eliminación de evento, mejoras de seguridad, nuevo sistema de XP/DPS y ajustes económicos.",
      en: "Event removal, security improvements, new XP/DPS system and economic adjustments.",
    },

    tags: {
      pt: ["Patch Notes", "Sistema", "Economia", "Segurança"],
      es: ["Patch Notes", "Sistema", "Economía", "Seguridad"],
      en: ["Patch Notes", "System", "Economy", "Security"],
    },

    conteudo: [
      {
        titulo: {
          pt: "🔹 Evento Invasão",
          es: "🔹 Evento de Invasión",
          en: "🔹 Invasion Event",
        },
        texto: {
          pt: "O Evento de Invasão foi removido do servidor.",
          es: "El evento de invasión fue eliminado del servidor.",
          en: "The invasion event has been removed from the server.",
        },
      },
      {
        titulo: {
          pt: "🔹 Sistema de XP e DPS",
          es: "🔹 Sistema de XP y DPS",
          en: "🔹 XP and DPS System",
        },
        texto: {
          pt: "Use o comando /xp para abrir o sistema.",
          es: "Usa el comando /xp para abrir el sistema.",
          en: "Use the /xp command to open the system.",
        },
      },
    ],
  },
];
