import { en } from "./en";
import { zh } from "./zh";
import { Locale, TranslationDict } from "./types";

const dictionaries: Record<Locale, TranslationDict> = { en, zh };

export function getDictionary(locale: Locale): TranslationDict {
  return dictionaries[locale] ?? dictionaries.en;
}

export type { Locale, TranslationDict };
