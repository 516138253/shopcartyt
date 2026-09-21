"use client";
import { headerNavItems } from "@/constants/data";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center justify-center gap-2">
      {headerNavItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.key}
            href={item.href}
            className={`brand-pill text-sm capitalize font-medium hoverEffect ${
              isActive
                ? "brand-gradient text-white shadow-md shadow-blue-500/20"
                : "text-slate-600 hover:text-brand-blue hover:bg-blue-50"
            }`}
          >
            {t.nav[item.key]}
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
