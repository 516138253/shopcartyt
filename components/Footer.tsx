"use client";

import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { categoryLinkItems, quickLinkItems } from "@/constants/data";
import { siteConfig } from "@/constants/site";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-slate-200 mt-10">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>{t.site.description}</SubText>
            <SocialMedia
              className="text-slate-500"
              iconClassName="border-slate-300 hover:border-brand-blue hover:text-brand-blue hover:bg-blue-50"
              tooltipClassName="bg-brand-navy text-white"
            />
          </div>
          <div>
            <SubTitle>{t.footer.quickLinks}</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinkItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-brand-blue hoverEffect text-sm font-medium"
                  >
                    {t.quickLinks[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>{t.footer.categories}</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoryLinkItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/category/${item.href}`}
                    className="text-slate-600 hover:text-brand-blue hoverEffect text-sm font-medium"
                  >
                    {t.categories[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>{t.footer.newsletter}</SubTitle>
            <SubText>{t.footer.newsletterDesc}</SubText>
            <form className="space-y-3">
              <Input
                placeholder={t.common.emailPlaceholder}
                type="email"
                required
                className="rounded-full border-slate-200 focus-visible:ring-brand-blue"
              />
              <Button className="w-full" variant="coral">
                {t.common.subscribe}
              </Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t border-slate-200 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. {t.common.rightsReserved}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
