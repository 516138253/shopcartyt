import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site";
import Link from "next/link";
import React from "react";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"} className="inline-flex items-center gap-2 group">
      <span className="flex items-center justify-center w-9 h-9 rounded-xl brand-gradient text-white font-black text-sm shadow-md shadow-emerald-700/30 group-hover:scale-105 hoverEffect">
        {siteConfig.shortName}
      </span>
      <h2
        className={cn(
          "text-xl font-bold tracking-tight group-hover:opacity-90 hoverEffect",
          className ?? "text-brand-navy",
          spanDesign
        )}
      >
        {siteConfig.name}
      </h2>
    </Link>
  );
};

export default Logo;
