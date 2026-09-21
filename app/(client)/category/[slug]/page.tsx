import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { getCategories, getProductsByCategorySlug } from "@/sanity/queries";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const [categories, products] = await Promise.all([
    getCategories(),
    getProductsByCategorySlug(slug),
  ]);

  const currentCategory = categories.find((item) => item.slug?.current === slug);

  return (
    <div className="py-10">
      <Container>
        <Title>
          Products by Category:{" "}
          <span className="font-bold text-green-600 capitalize tracking-wide">
            {currentCategory?.title ?? slug}
          </span>
        </Title>
        <CategoryProducts
          categories={categories}
          slug={slug}
          initialProducts={products}
        />
      </Container>
    </div>
  );
};

export default CategoryPage;
