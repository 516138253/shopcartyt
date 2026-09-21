import React from "react";
import { getLatestBlogs } from "@/sanity/queries";
import LatestBlogGrid from "./LatestBlogGrid";

const LatestBlog = async () => {
  const blogs = await getLatestBlogs();
  return <LatestBlogGrid blogs={blogs ?? []} />;
};

export default LatestBlog;
