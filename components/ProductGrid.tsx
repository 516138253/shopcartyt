"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "motion/react";
import NoProductAvailable from "./NoProductAvailable";
import Container from "./Container";
import HomeTabbar from "./HomeTabbar";
import { productTypeItems } from "@/constants/data";
import { Product } from "@/sanity.types";
import { useTranslation } from "@/hooks/useTranslation";

interface ProductGridProps {
  products: Product[];
  selectedVariant: string;
}

const ProductGrid = ({ products, selectedVariant }: ProductGridProps) => {
  const { t } = useTranslation();

  const selectedItem = productTypeItems.find(
    (item) => item.value === selectedVariant
  );
  const selectedLabel = selectedItem
    ? t.productType[selectedItem.key]
    : selectedVariant;

  return (
    <Container className="flex flex-col lg:px-0 my-10">
      <HomeTabbar selectedVariant={selectedVariant} />
      {products?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          {products.map((product) => (
            <AnimatePresence key={product?._id}>
              <motion.div
                layout
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProductCard product={product} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedLabel} />
      )}
    </Container>
  );
};

export default ProductGrid;
