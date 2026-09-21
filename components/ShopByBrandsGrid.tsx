"use client";

import React from "react";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";
import { Brand } from "@/sanity.types";
import { useTranslation } from "@/hooks/useTranslation";

const featureIcons = [Truck, GitCompareArrows, Headset, ShieldCheck];

const ShopByBrandsGrid = ({ brands }: { brands: Brand[] }) => {
  const { t } = useTranslation();

  const features = [
    t.features.freeDelivery,
    t.features.freeReturn,
    t.features.customerSupport,
    t.features.moneyBack,
  ];

  return (
    <div className="mb-10 lg:mb-16 brand-card p-5 lg:p-8">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title>{t.home.shopByBrands}</Title>
        <Link
          href={"/shop"}
          className="brand-pill bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white hoverEffect text-sm"
        >
          {t.common.viewAll}
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {brands?.map((brand) => (
          <Link
            key={brand?._id}
            href={{ pathname: "/shop", query: { brand: brand?.slug?.current } }}
            className="bg-white w-34 h-24 flex items-center justify-center rounded-xl overflow-hidden border border-slate-100 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-blue-500/10 hoverEffect"
          >
            {brand?.image && (
              <Image
                src={urlFor(brand?.image).url()}
                alt="brandImage"
                width={250}
                height={250}
                className="w-32 h-20 object-contain"
              />
            )}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 p-4 bg-slate-50 rounded-2xl">
        {features.map((item, index) => {
          const Icon = featureIcons[index];
          return (
            <div
              key={index}
              className="flex items-center gap-3 group text-slate-500 hover:text-brand-blue hoverEffect p-2 rounded-xl"
            >
              <span className="inline-flex scale-100 group-hover:scale-90 hoverEffect">
                <Icon size={45} />
              </span>
              <div className="text-sm">
                <p className="text-slate-800 font-bold capitalize">{item.title}</p>
                <p className="text-slate-500">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByBrandsGrid;
