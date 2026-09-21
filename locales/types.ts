export type Locale = "en" | "zh";

export type TranslationDict = {
  nav: {
    home: string;
    shop: string;
    blog: string;
    deal: string;
  };
  header: {
    promo: string;
    signIn: string;
  };
  hero: {
    slides: Array<{
      badge: string;
      title: string;
      subtitle: string;
      cta: string;
    }>;
  };
  productType: {
    tea: string;
    chenpi: string;
    juhong: string;
    xinhuiGan: string;
    specialty: string;
  };
  common: {
    seeAll: string;
    viewAll: string;
    subscribe: string;
    emailPlaceholder: string;
    loading: string;
    itemsAvailable: string;
    inStock: string;
    outOfStock: string;
    unavailable: string;
    reviews: string;
    sale: string;
    quantity: string;
    subtotal: string;
    addToCart: string;
    addedSuccess: string;
    stockLimit: string;
    rightsReserved: string;
  };
  home: {
    popularCategories: string;
    shopByBrands: string;
    latestBlog: string;
  };
  features: {
    freeDelivery: { title: string; description: string };
    freeReturn: { title: string; description: string };
    customerSupport: { title: string; description: string };
    moneyBack: { title: string; description: string };
  };
  footer: {
    quickLinks: string;
    categories: string;
    newsletter: string;
    newsletterDesc: string;
    visitUs: string;
    callUs: string;
    workingHours: string;
    emailUs: string;
  };
  quickLinks: {
    about: string;
    contact: string;
    terms: string;
    privacy: string;
    faqs: string;
    help: string;
  };
  categories: {
    greenTea: string;
    chenpi: string;
    juhong: string;
    xinhuiGan: string;
    giftSet: string;
  };
  brands: {
    dongting: string;
    xinhuiChenpi: string;
    huazhouJuhong: string;
    lingnanMingyun: string;
  };
  blogCategories: {
    teaCulture: string;
    teaWellness: string;
  };
  blogPage: {
    title: string;
    backToBlog: string;
    sidebarCategories: string;
    sidebarLatest: string;
  };
  product: {
    noProducts: string;
    noProductsDescBefore: string;
    noProductsDescAfter: string;
    restocking: string;
    checkBack: string;
  };
  cart: {
    emptyTitle: string;
    emptyDesc: string;
    discover: string;
  };
  site: {
    tagline: string;
    description: string;
    address: string;
    hours: string;
  };
  language: {
    en: string;
    zh: string;
  };
};
