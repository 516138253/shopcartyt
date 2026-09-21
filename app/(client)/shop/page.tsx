import Shop from "@/components/Shop";
import { getAllBrands, getAllProducts, getCategories } from "@/sanity/queries";
import React from "react";

const ShopPage = async () => {
  const [categories, brands, products] = await Promise.all([
    getCategories(),
    getAllBrands(),
    getAllProducts(),
  ]);

  return (
    <div className="bg-white">
      <Shop categories={categories} brands={brands} products={products} />
    </div>
  );
};

export default ShopPage;
