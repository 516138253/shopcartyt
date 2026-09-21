"use client";

import React from "react";
import Title from "./Title";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { useLocalizedCms } from "@/hooks/useLocalizedCms";
import { useTranslation } from "@/hooks/useTranslation";

interface BlogItem {
  _id: string;
  title?: string;
  slug?: { current?: string };
  mainImage?: Parameters<typeof urlFor>[0];
  publishedAt?: string;
  blogcategories?: Array<{
    _id?: string;
    title?: string;
    slug?: { current?: string };
  }>;
}

const LatestBlogGrid = ({ blogs }: { blogs: BlogItem[] }) => {
  const { t, locale } = useTranslation();
  const cms = useLocalizedCms();
  dayjs.locale(locale === "zh" ? "zh-cn" : "en");

  return (
    <div className="mb-10 lg:mb-20">
      <Title>{t.home.latestBlog}</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {blogs?.map((blog) => (
          <div key={blog?._id} className="rounded-lg overflow-hidden brand-card">
            {blog?.mainImage && (
              <Link href={`/blog/${blog?.slug?.current}`}>
                <Image
                  src={urlFor(blog?.mainImage).url()}
                  alt="blogImage"
                  width={500}
                  height={500}
                  className="w-full max-h-80 object-cover"
                />
              </Link>
            )}
            <div className="bg-slate-50 p-5">
              <div className="text-xs flex items-center gap-5">
                <div className="flex items-center relative group cursor-pointer">
                  {blog?.blogcategories?.map((item, index) => (
                    <p
                      key={index}
                      className="font-semibold text-brand-blue tracking-wider"
                    >
                      {cms.blogCategoryTitle(
                        item._id,
                        item.title,
                        item.slug?.current
                      )}
                    </p>
                  ))}
                </div>
                <p className="flex items-center gap-1 text-slate-500 hover:text-brand-blue hoverEffect">
                  <Calendar size={15} />
                  {dayjs(blog.publishedAt).format(
                    locale === "zh" ? "YYYY年M月D日" : "MMMM D, YYYY"
                  )}
                </p>
              </div>
              <Link
                href={`/blog/${blog?.slug?.current}`}
                className="text-base font-semibold tracking-wide mt-5 line-clamp-2 hover:text-brand-blue hoverEffect"
              >
                {cms.blogTitle(blog._id, blog.title)}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogGrid;
