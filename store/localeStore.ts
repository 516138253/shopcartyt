import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Locale } from "@/locales";

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set, get) => ({
      locale: "en",
      setLocale: (locale) => set({ locale }),
      toggleLocale: () =>
        set({ locale: get().locale === "en" ? "zh" : "en" }),
    }),
    { name: "gz-locale" }
  )
);
