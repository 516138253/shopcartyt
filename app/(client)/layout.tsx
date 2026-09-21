import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocaleProvider from "@/components/LocaleProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { siteConfig } from "@/constants/site";

const hasClerk = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    process.env.CLERK_SECRET_KEY
);

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} – 岭南茶文化 · 地方特产`,
  },
  description:
    "岭南茗韵：新会陈皮、化州橘红、洞庭碧螺春、新会柑等岭南地道特产与茶文化臻选。",
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <LocaleProvider>
      <div className="flex flex-col min-h-screen bg-brand-surface">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LocaleProvider>
  );

  return hasClerk ? <ClerkProvider>{content}</ClerkProvider> : content;
}
