import pt from "./translations/pt-BR";
import es from "./translations/es-ES";
import en from "./translations/en-US";

export function getDictionary(locale: string) {
  switch (locale) {
    case "es":
      return es;
    case "en":
      return en;
    default:
      return pt;
  }
}
