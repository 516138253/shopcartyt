"use client";

import { getDictionary, Locale } from "@/locales";
import { useLocaleStore } from "@/store/localeStore";

export function useTranslation() {
  const locale = useLocaleStore((state) => state.locale);
  const setLocale = useLocaleStore((state) => state.setLocale);
  const toggleLocale = useLocaleStore((state) => state.toggleLocale);
  const t = getDictionary(locale);

  return { t, locale, setLocale, toggleLocale };
}

export function useLocale(): Locale {
  return useLocaleStore((state) => state.locale);
}
