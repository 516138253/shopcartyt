"use client";

import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { StarIcon } from "@sanity/icons";
import { Flame } from "lucide-react";
import PriceView from "./PriceView";
import Title from "./Title";
import ProductSideMenu from "./ProductSideMenu";
import AddToCartButton from "./AddToCartButton";
import { useTranslation } from "@/hooks/useTranslation";
import { useLocalizedCms } from "@/hooks/useLocalizedCms";

type ProductCategory = string | { title?: string; slug?: string };

const ProductCard = ({ product }: { product: Product }) => {
  const { t } = useTranslation();
  const cms = useLocalizedCms();
  const categories = product.categories as ProductCategory[] | undefined;

  return (
    <div className="text-sm brand-card group overflow-hidden">
      <div className="relative group overflow-hidden bg-slate-50 rounded-t-2xl">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt="productImage"
              width={500}
              height={500}
              priority
              className={`w-full h-64 object-contain overflow-hidden transition-transform bg-slate-50 duration-500 
              ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
            />
          </Link>
        )}
        <ProductSideMenu product={product} />
        {product?.status === "sale" ? (
          <p className="absolute top-2 left-2 z-10 text-xs bg-orange-500 text-white px-3 py-0.5 rounded-full shadow-sm">
            {t.common.sale}
          </p>
        ) : (
          <Link
            href={"/deal"}
            className="absolute top-2 left-2 z-10 bg-white/90 p-1.5 rounded-full shadow-sm hover:scale-110 hoverEffect"
          >
            <Flame
              size={18}
              fill="#fb6c08"
              className="text-orange-400 group-hover:text-orange-500 hoverEffect"
            />
          </Link>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        {categories && (
          <p className="uppercase line-clamp-1 text-xs font-medium text-slate-400">
            {categories
              .map((cat) =>
                typeof cat === "string"
                  ? cat
                  : cms.categoryLabel(cat.slug ?? cat.title)
              )
              .join(", ")}
          </p>
        )}
        <Title className="text-sm line-clamp-1">
          {cms.productName(product._id, product.name)}
        </Title>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={
                  index < 4 ? "text-brand-blue" : " text-slate-300"
                }
                fill={index < 4 ? "#2563eb" : "#cbd5e1"}
              />
            ))}
          </div>
          <p className="text-slate-400 text-xs tracking-wide">
            5 {t.common.reviews}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <p className="font-medium">{t.common.inStock}</p>
          <p
            className={`${product?.stock === 0 ? "text-red-600" : "text-brand-blue font-semibold"}`}
          >
            {(product?.stock as number) > 0
              ? product?.stock
              : t.common.unavailable}
          </p>
        </div>

        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />
        <AddToCartButton product={product} className="w-full" />
      </div>
    </div>
  );
};

export default ProductCard;
