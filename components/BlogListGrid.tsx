"use client";

import Container from "@/components/Container";
import Title from "@/components/Title";
import { useLocalizedCms } from "@/hooks/useLocalizedCms";
import { useTranslation } from "@/hooks/useTranslation";
import { urlFor } from "@/sanity/lib/image";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogItem {
  _id: string;
  title?: string;
  slug?: { current?: string };
  mainImage?: Parameters<typeof urlFor>[0];
  publishedAt?: string;
  blogcategories?: Array<{ _id?: string; title?: string; slug?: { current?: string } }>;
}

const BlogListGrid = ({ blogs }: { blogs: BlogItem[] }) => {
  const { t, locale } = useTranslation();
  const cms = useLocalizedCms();
  dayjs.locale(locale === "zh" ? "zh-cn" : "en");

  return (
    <Container>
      <Title>{t.blogPage.title}</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-10">
        {blogs?.map((blog) => (
          <div key={blog?._id} className="rounded-md overflow-hidden group">
            {blog?.mainImage && (
              <Image
                src={urlFor(blog?.mainImage).url()}
                alt={cms.blogTitle(blog._id, blog.title)}
                width={500}
                height={500}
                className="w-full max-h-80 object-cover"
              />
            )}
            <div className="bg-gray-100 p-5">
              <div className="text-xs flex items-center gap-5">
                <div className="flex items-center relative group cursor-pointer">
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
                  <Calendar size={15} />
                  {dayjs(blog.publishedAt).format(
                    locale === "zh" ? "YYYY年M月D日" : "MMMM D, YYYY"
                  )}
                </p>
              </div>
              <Link
                href={`/blog/${blog?.slug?.current}`}
                className="text-base font-bold tracking-wide mt-5 line-clamp-2 hover:text-shop_dark_green hoverEffect"
              >
                {cms.blogTitle(blog._id, blog.title)}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BlogListGrid;
