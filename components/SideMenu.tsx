"use client";
import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerNavItems } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import LanguageSwitcher from "./LanguageSwitcher";
import { useOutsideClick } from "@/hooks";
import { useTranslation } from "@/hooks/useTranslation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-brand-navy h-screen p-10 border-r border-r-brand-blue/30 flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          <button
            onClick={onClose}
            className="hover:text-brand-blue hoverEffect"
          >
            <X />
          </button>
        </div>

        <LanguageSwitcher />

        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerNavItems.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              onClick={onClose}
              className={`hover:text-brand-blue hoverEffect ${
                pathname === item.href && "text-white"
              }`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;
