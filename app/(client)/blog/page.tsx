import BlogListGrid from "@/components/BlogListGrid";
import { getAllBlogs } from "@/sanity/queries";
import React from "react";

const BlogPage = async () => {
  const blogs = await getAllBlogs(6);

  return (
    <div className="py-10">
      <BlogListGrid blogs={blogs ?? []} />
    </div>
  );
};

export default BlogPage;
