import React from "react";
import { getAllBrands } from "@/sanity/queries";
import ShopByBrandsGrid from "./ShopByBrandsGrid";

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  return <ShopByBrandsGrid brands={brands ?? []} />;
};

export default ShopByBrands;
