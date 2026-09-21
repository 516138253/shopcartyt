"use client";
import { productTypeItems } from "@/constants/data";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

interface Props {
  selectedVariant: string;
}

const HomeTabbar = ({ selectedVariant }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center flex-wrap gap-4 justify-between">
      <div className="flex items-center gap-2 flex-wrap">
        {productTypeItems.map((item) => (
          <Link
            href={item.value === productTypeItems[0].value ? "/" : `/?variant=${item.value}`}
            scroll={false}
            key={item.key}
            className={`brand-pill border hoverEffect ${
              selectedVariant === item.value
                ? "brand-gradient text-white border-transparent shadow-md shadow-blue-500/20"
                : "bg-white text-slate-600 border-slate-200 hover:border-brand-blue hover:text-brand-blue"
            }`}
          >
            {t.productType[item.key]}
          </Link>
        ))}
      </div>
      <Link
        href={"/shop"}
        className="brand-pill bg-brand-navy text-white hover:bg-brand-blue hoverEffect"
      >
        {t.common.seeAll}
      </Link>
    </div>
  );
};

export default HomeTabbar;
