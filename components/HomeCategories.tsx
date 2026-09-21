"use client";

import React from "react";
import Title from "./Title";
import { Category } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useLocalizedCms } from "@/hooks/useLocalizedCms";
import { useTranslation } from "@/hooks/useTranslation";

const HomeCategories = ({ categories }: { categories: Category[] }) => {
  const { t } = useTranslation();
  const cms = useLocalizedCms();

  return (
    <div className="brand-card my-10 md:my-16 p-5 lg:p-8">
      <Title className="border-b border-slate-100 pb-4 mb-1">
        {t.home.popularCategories}
      </Title>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories?.map((category) => (
          <div
            key={category?._id}
            className="bg-slate-50 hover:bg-blue-50/50 p-5 flex items-center gap-3 group rounded-xl hoverEffect"
          >
            {category?.image && (
              <div className="overflow-hidden border border-orange-200 hover:border-orange-400 hoverEffect w-20 h-20 p-1 rounded-lg">
                <Link href={`/category/${category?.slug?.current}`}>
                  <Image
                    src={urlFor(category?.image).url()}
                    alt="categoryImage"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain group-hover:scale-110 hoverEffect"
                  />
                </Link>
              </div>
            )}
            <div className="space-y-1">
              <h3 className="text-base font-semibold">
                {cms.categoryLabel(category?.slug?.current) || category?.title}
              </h3>
              <p className="text-sm text-slate-500">
                <span className="font-bold text-brand-blue">{`(${category?.productCount})`}</span>{" "}
                {t.common.itemsAvailable}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
