"use client";

import { Product } from "@/sanity.types";
import { useLocalizedCms } from "@/hooks/useLocalizedCms";
import { useTranslation } from "@/hooks/useTranslation";
import React from "react";

const ProductDetailInfo = ({ product }: { product: Product }) => {
  const { t } = useTranslation();
  const cms = useLocalizedCms();

  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-bold">
        {cms.productName(product._id, product.name)}
      </h2>
      <p className="text-sm text-gray-600 tracking-wide">
        {cms.productDescription(product._id, product.description)}
      </p>
      <p
        className={`mt-3 px-4 py-1.5 text-sm text-center inline-block font-semibold rounded-lg ${product?.stock === 0 ? "bg-red-100 text-red-600" : "text-green-600 bg-green-100"}`}
      >
        {(product?.stock as number) > 0 ? t.common.inStock : t.common.outOfStock}
      </p>
    </div>
  );
};

export default ProductDetailInfo;
