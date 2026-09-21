"use client";

import {
  extractPlainTextFromBlocks,
  getBrandLabel,
  getCategoryLabel,
  localizeAuthorName,
  localizeBlogBodyText,
  localizeBlogCategoryTitle,
  localizeBlogTitle,
  localizeProductDescription,
  localizeProductName,
} from "@/lib/localizeCms";
import { useTranslation } from "@/hooks/useTranslation";

export function useLocalizedCms() {
  const { locale } = useTranslation();

  return {
    locale,
    categoryLabel: (slug?: string) => getCategoryLabel(slug, locale),
    brandLabel: (slug?: string, fallback?: string) =>
      getBrandLabel(slug, locale, fallback),
    productName: (id?: string, name?: string) =>
      localizeProductName(id, name, locale),
    productDescription: (id?: string, description?: string) =>
      localizeProductDescription(id, description, locale),
    blogTitle: (id?: string, title?: string) =>
      localizeBlogTitle(id, title, locale),
    blogBody: (id?: string, body?: string) =>
      localizeBlogBodyText(id, body, locale),
    blogBodyFromBlocks: (
      id?: string,
      blocks?: Array<{ children?: Array<{ text?: string }> }>
    ) =>
      localizeBlogBodyText(
        id,
        extractPlainTextFromBlocks(blocks),
        locale
      ),
    blogCategoryTitle: (id?: string, title?: string, slug?: string) =>
      localizeBlogCategoryTitle(id, title, locale, slug),
    authorName: (id?: string, name?: string) =>
      localizeAuthorName(id, name, locale),
  };
}
