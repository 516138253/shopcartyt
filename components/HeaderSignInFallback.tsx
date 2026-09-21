"use client";

import { useTranslation } from "@/hooks/useTranslation";

const HeaderSignInFallback = () => {
  const { t } = useTranslation();
  return (
    <span className="text-xs text-slate-400 font-medium">{t.header.signIn}</span>
  );
};

export default HeaderSignInFallback;
