"use client";

import { useTranslation } from "@/hooks/useTranslation";

const HeaderPromo = () => {
  const { t } = useTranslation();
  return (
    <div className="brand-gradient text-white text-center text-xs py-1.5 tracking-wide">
      {t.header.promo}
    </div>
  );
};

export default HeaderPromo;
