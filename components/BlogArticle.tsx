"use client";

import Title from "@/components/Title";
import { useLocalizedCms } from "@/hooks/useLocalizedCms";
import { useTranslation } from "@/hooks/useTranslation";
import { urlFor } from "@/sanity/lib/image";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { Calendar, ChevronLeftIcon, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogArticleProps {
  blog: {
    _id: string;
    title?: string;
    slug?: { current?: string };
    mainImage?: Parameters<typeof urlFor>[0];
    publishedAt?: string;
    body?: Array<{ children?: Array<{ text?: string }> }>;
    author?: { _id?: string; name?: string };
    blogcategories?: Array<{
      _id?: string;
      title?: string;
      slug?: { current?: string };
    }>;
  };
  sidebarCategories: Array<{
    blogcategories?: Array<{ _id?: string; title?: string; slug?: { current?: string } }>;
  }>;
  otherBlogs: Array<{
    _id: string;
    title?: string;
    slug?: { current?: string };
    mainImage?: Parameters<typeof urlFor>[0];
  }>;
}

const BlogArticle = ({
  blog,
  sidebarCategories,
  otherBlogs,
}: BlogArticleProps) => {
  const { t, locale } = useTranslation();
  const cms = useLocalizedCms();
  dayjs.locale(locale === "zh" ? "zh-cn" : "en");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
      <div className="md:col-span-3">
        {blog?.mainImage && (
          <Image
            src={urlFor(blog?.mainImage).url()}
            alt={cms.blogTitle(blog._id, blog.title)}
            width={800}
            height={800}
            className="w-full max-h-[500px] object-cover rounded-lg"
          />
        )}
        <div className="text-xs flex items-center gap-5 my-7">
          <div className="flex items-center gap-2">
            {blog?.blogcategories?.map((item, index) => (
              <p
                key={index}
                className="font-semibold text-shop_dark_green tracking-wider"
              >
                {cms.blogCategoryTitle(
                  item._id,
                  item.title,
                  item.slug?.current
                )}
              </p>
            ))}
          </div>
          <p className="flex items-center gap-1 text-lightColor">
            <Pencil size={15} />
            {cms.authorName(blog.author?._id, blog.author?.name)}
          </p>
          <p className="flex items-center gap-1 text-lightColor">
            <Calendar size={15} />
            {dayjs(blog.publishedAt).format(
              locale === "zh" ? "YYYY年M月D日" : "MMMM D, YYYY"
            )}
          </p>
        </div>
        <h2 className="text-2xl font-bold my-5">
          {cms.blogTitle(blog._id, blog.title)}
        </h2>
        <p className="text-base/8 text-lightColor whitespace-pre-line">
          {cms.blogBodyFromBlocks(blog._id, blog.body)}
        </p>
        <div className="mt-10">
          <Link href="/blog" className="flex items-center gap-1">
            <ChevronLeftIcon className="size-5" />
            <span className="text-sm font-semibold">{t.blogPage.backToBlog}</span>
          </Link>
        </div>
      </div>
      <div>
        <div className="border border-lightColor p-5 rounded-md">
          <Title className="text-base">{t.blogPage.sidebarCategories}</Title>
          <div className="space-y-2 mt-2">
            {sidebarCategories?.map(({ blogcategories }, index) => (
              <div
                key={index}
                className="text-lightColor flex items-center justify-between text-sm font-medium"
              >
                <p>
                  {cms.blogCategoryTitle(
                    blogcategories?.[0]?._id,
                    blogcategories?.[0]?.title,
                    blogcategories?.[0]?.slug?.current
                  )}
                </p>
                <p className="text-darkColor font-semibold">(1)</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-lightColor p-5 rounded-md mt-10">
          <Title className="text-base">{t.blogPage.sidebarLatest}</Title>
          <div className="space-y-4 mt-4">
            {otherBlogs?.map((item) => (
              <Link
                href={`/blog/${item?.slug?.current}`}
                key={item._id}
                className="flex items-center gap-2 group"
              >
                {item?.mainImage && (
                  <Image
                    src={urlFor(item?.mainImage).url()}
                    alt={cms.blogTitle(item._id, item.title)}
                    width={100}
                    height={100}
                    className="w-16 h-16 rounded-full object-cover border-[1px] border-shop_dark_green/10 group-hover:border-shop_dark_green hoverEffect"
                  />
                )}
                <p className="line-clamp-2 text-sm text-lightColor group-hover:text-shop_dark_green hoverEffect">
                  {cms.blogTitle(item._id, item.title)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
