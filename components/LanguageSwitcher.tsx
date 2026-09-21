"use client";

import { cn } from "@/lib/utils";
import { Locale } from "@/locales";
import { useTranslation } from "@/hooks/useTranslation";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { locale, setLocale, t } = useTranslation();

  const options: { value: Locale; label: string }[] = [
    { value: "en", label: t.language.en },
    { value: "zh", label: t.language.zh },
  ];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 text-xs font-semibold",
        className
      )}
      role="group"
      aria-label="Language switcher"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLocale(option.value)}
          className={cn(
            "rounded-full px-2.5 py-1 min-w-[2.25rem] hoverEffect",
            locale === option.value
              ? "brand-gradient text-white shadow-sm"
              : "text-slate-500 hover:text-brand-blue"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
