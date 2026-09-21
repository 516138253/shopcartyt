import { categoryLinkItems } from "@/constants/data";
import { getDictionary, Locale, TranslationDict } from "@/locales";
import { zhCms } from "@/locales/cms/zh";

const BRAND_SLUG_TO_KEY: Record<
  string,
  keyof TranslationDict["brands"]
> = {
  dongting: "dongting",
  "xinhui-chenpi": "xinhuiChenpi",
  "huazhou-juhong": "huazhouJuhong",
  "lingnan-mingyun": "lingnanMingyun",
};

export function getCategoryLabel(
  slug: string | undefined,
  locale: Locale
): string {
  if (!slug) return "";
  const t = getDictionary(locale);
  const item = categoryLinkItems.find((entry) => entry.href === slug);
  return item ? t.categories[item.key] : slug;
}

export function getBrandLabel(
  slug: string | undefined,
  locale: Locale,
  fallback?: string
): string {
  if (!slug) return fallback ?? "";
  const t = getDictionary(locale);
  const key = BRAND_SLUG_TO_KEY[slug];
  return key ? t.brands[key] : fallback ?? slug;
}

export function localizeProductName(
  productId: string | undefined,
  englishName: string | undefined,
  locale: Locale
): string {
  if (locale === "zh" && productId) {
    const zh = zhCms.products[productId as keyof typeof zhCms.products];
    if (zh?.name) return zh.name;
  }
  return englishName ?? "";
}

export function localizeProductDescription(
  productId: string | undefined,
  englishDescription: string | undefined,
  locale: Locale
): string {
  if (locale === "zh" && productId) {
    const zh = zhCms.products[productId as keyof typeof zhCms.products];
    if (zh?.description) return zh.description;
  }
  return englishDescription ?? "";
}

export function localizeBlogTitle(
  blogId: string | undefined,
  englishTitle: string | undefined,
  locale: Locale
): string {
  if (locale === "zh" && blogId) {
    const zh = zhCms.blogs[blogId as keyof typeof zhCms.blogs];
    if (zh?.title) return zh.title;
  }
  return englishTitle ?? "";
}

export function localizeBlogBodyText(
  blogId: string | undefined,
  englishBody: string | undefined,
  locale: Locale
): string {
  if (locale === "zh" && blogId) {
    const zh = zhCms.blogs[blogId as keyof typeof zhCms.blogs];
    if (zh?.body) return zh.body;
  }
  return englishBody ?? "";
}

const BLOG_CAT_SLUG_TO_KEY: Record<
  string,
  keyof TranslationDict["blogCategories"]
> = {
  "tea-culture": "teaCulture",
  "tea-wellness": "teaWellness",
};

export function localizeBlogCategoryTitle(
  categoryId: string | undefined,
  englishTitle: string | undefined,
  locale: Locale,
  slug?: string
): string {
  if (locale === "zh" && categoryId) {
    const zh =
      zhCms.blogCategories[
        categoryId as keyof typeof zhCms.blogCategories
      ];
    if (zh) return zh;
  }
  if (slug) {
    const t = getDictionary(locale);
    const key = BLOG_CAT_SLUG_TO_KEY[slug];
    if (key) return t.blogCategories[key];
  }
  return englishTitle ?? "";
}

export function localizeAuthorName(
  authorId: string | undefined,
  englishName: string | undefined,
  locale: Locale
): string {
  if (locale === "zh" && authorId) {
    const zh = zhCms.authors[authorId as keyof typeof zhCms.authors];
    if (zh) return zh;
  }
  return englishName ?? "";
}

export function extractPlainTextFromBlocks(
  body: Array<{ children?: Array<{ text?: string }> }> | undefined
): string {
  if (!body?.length) return "";
  return body
    .flatMap((block) => block.children?.map((child) => child.text ?? "") ?? [])
    .join("\n\n");
}
