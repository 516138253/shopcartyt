"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { siteConfig } from "@/constants/site";
import { useTranslation } from "@/hooks/useTranslation";

const FooterTop = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: t.footer.visitUs,
      subtitle: t.site.address,
      icon: (
        <MapPin className="h-6 w-6 text-brand-blue group-hover:scale-110 hoverEffect" />
      ),
    },
    {
      title: t.footer.callUs,
      subtitle: siteConfig.phone,
      icon: (
        <Phone className="h-6 w-6 text-brand-blue group-hover:scale-110 hoverEffect" />
      ),
    },
    {
      title: t.footer.workingHours,
      subtitle: t.site.hours,
      icon: (
        <Clock className="h-6 w-6 text-brand-blue group-hover:scale-110 hoverEffect" />
      ),
    },
    {
      title: t.footer.emailUs,
      subtitle: siteConfig.email,
      icon: (
        <Mail className="h-6 w-6 text-brand-blue group-hover:scale-110 hoverEffect" />
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-b border-slate-200 pb-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 group p-4 rounded-2xl hover:bg-blue-50/50 hoverEffect"
        >
          <div className="p-2 rounded-xl bg-blue-50">{item.icon}</div>
          <div>
            <h3 className="font-semibold text-brand-navy text-sm">
              {item.title}
            </h3>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
