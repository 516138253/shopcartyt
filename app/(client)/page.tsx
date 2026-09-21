import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import LatestBlog from "@/components/LatestBlog";
import ProductGrid from "@/components/ProductGrid";
import ShopByBrands from "@/components/ShopByBrands";
import { productTypeItems } from "@/constants/data";
import { getCategories, getProductsByVariant } from "@/sanity/queries";

import React from "react";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ variant?: string }>;
}) => {
  const { variant: variantParam } = await searchParams;
  const validVariants = productTypeItems.map((item) => item.value);
  const selectedVariant =
    variantParam && validVariants.includes(variantParam)
      ? variantParam
      : productTypeItems[0].value;

  const [categories, products] = await Promise.all([
    getCategories(6),
    getProductsByVariant(selectedVariant),
  ]);

  return (
    <Container className="py-6 md:py-10 space-y-2">
      <HomeBanner />
      <ProductGrid products={products} selectedVariant={selectedVariant} />
      <HomeCategories categories={categories} />
      <ShopByBrands />
      <LatestBlog />
    </Container>
  );
};

export default Home;
