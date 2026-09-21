import BlogArticle from "@/components/BlogArticle";
import Container from "@/components/Container";
import {
  getBlogCategories,
  getOthersBlog,
  getSingleBlog,
} from "@/sanity/queries";
import { notFound } from "next/navigation";
import React from "react";

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  if (!blog) return notFound();

  const [categories, otherBlogs] = await Promise.all([
    getBlogCategories(),
    getOthersBlog(slug, 5),
  ]);

  return (
    <div className="py-10">
      <Container>
        <BlogArticle
          blog={blog}
          sidebarCategories={categories ?? []}
          otherBlogs={otherBlogs ?? []}
        />
      </Container>
    </div>
  );
};

export default SingleBlogPage;
