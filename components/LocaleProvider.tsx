"use client";

import { useEffect } from "react";
import { useLocaleStore } from "@/store/localeStore";

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const locale = useLocaleStore((state) => state.locale);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return <>{children}</>;
};

export default LocaleProvider;
