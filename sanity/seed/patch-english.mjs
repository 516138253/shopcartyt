/**
 * Patch Sanity CMS text fields to English (keeps existing images).
 * Run: npx sanity exec sanity/seed/patch-english.mjs --with-user-token
 */
import { createClient } from "@sanity/client";

let client;
try {
  const { getCliClient } = await import("sanity/cli");
  client = getCliClient({ apiVersion: "2025-03-20" });
} catch {
  const token =
    process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_TOKEN;
  if (!token) {
    throw new Error(
      "Run with: npx sanity exec sanity/seed/patch-english.mjs --with-user-token"
    );
  }
  client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "wro5cgq8",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2025-03-20",
    token,
    useCdn: false,
  });
}

const categories = [
  {
    _id: "cat-green-tea",
    title: "Premium Green Tea",
    description:
      "Classic green teas such as Dongting Biluochun — first spring harvest, fresh and mellow.",
  },
  {
    _id: "cat-chenpi",
    title: "Xinhui Chenpi",
    description:
      "Aged citrus peel from Xinhui and Jiangmen — naturally cured, richer with age.",
  },
  {
    _id: "cat-juhong",
    title: "Huazhou Juhong",
    description:
      "Authentic Huazhou juhong peel — a classic Lingnan wellness ingredient.",
  },
  {
    _id: "cat-xinhui-gan",
    title: "Xinhui Mandarin",
    description:
      "Xiaoqinggan and dahonggan tea — mandarin and pu-erh in harmony.",
  },
  {
    _id: "cat-gift",
    title: "Gift Sets",
    description: "Lingnan specialty gift boxes for holidays and business gifting.",
  },
];

const brands = [
  {
    _id: "brand-dongting",
    title: "Dongting Mountain",
    description: "Origin Biluochun from Dongting, Jiangsu — heritage tea craft.",
  },
  {
    _id: "brand-xinhui",
    title: "Xinhui Chenpi Village",
    description: "Core-region chenpi, sun-dried and naturally aged.",
  },
  {
    _id: "brand-huazhou",
    title: "Huazhou Juhong",
    description: "Geographic indication juhong, traditionally prepared.",
  },
  {
    _id: "brand-lingnan",
    title: "Lingnan Tea Heritage",
    description: "Curated Lingnan specialties — chenpi, juhong, mandarin tea, green tea.",
  },
];

const products = [
  ["prod-biluochun-premium", "Dongting Biluochun Pre-Qingming Premium 250g", "First spring harvest from Dongting — curly silver-tipped leaves, floral aroma, bright liquor."],
  ["prod-biluochun-classic", "Dongshan Biluochun Grade 1 500g", "Everyday spring green tea with one bud and two leaves — high infusability."],
  ["prod-biluochun-gift", "Pre-Qingming Biluochun Spring Gift Box 200g", "Premium gift box with glass gaiwan — ideal spring tea gift."],
  ["prod-chenpi-10y", "Xinhui Chenpi 10-Year Aged 250g", "Ten-year naturally aged peel — thick, aromatic, for tea and cooking."],
  ["prod-chenpi-5y", "Jiangmen Chenpi 5-Year Aged 500g", "Five-year aged peel with intact slices — great value."],
  ["prod-chenpi-original", "Xinhui Quanzhi Chenpi Original Slices 300g", "Hand-sun-dried peel, three-year aging, full oil chambers."],
  ["prod-juhong-premium", "Huazhou Juhong Premium 150g", "Authentic fuzzy juhong slices — clean, balanced brew."],
  ["prod-juhong-slices", "Juhong Tea Slices 200g", "Daily wellness tea slices — pairs well with chenpi."],
  ["prod-xinhui-xiaoqing", "Xinhui Xiaoqinggan Ripe Pu-erh 500g", "Green mandarin filled with ripe pu-erh — one fruit, one cup."],
  ["prod-xinhui-dahong", "Xinhui Dahonggan Tea Gift Box 600g", "Seasonal mandarin stuffed with tea in an elegant gift box."],
  ["prod-gift-lingnan", "Lingnan Treasures Gift Box", "Chenpi, juhong, and xiaoqinggan in one classic Lingnan set."],
  ["prod-gift-starter", "Tea Culture Starter Set", "Biluochun 50g + 3-year chenpi 50g + brewing guide."],
  ["prod-biluochun-yuqian", "Dongting Biluochun Pre-Guyu Grade 2 300g", "Pre-rain harvest — nutty, everyday green tea."],
  ["prod-biluochun-handmade", "Xishan Biluochun Hand-Fired 200g", "Traditional pan-fired spirals with lasting sweet finish."],
  ["prod-green-tea-organic", "Organic Pre-Qingming Green Tea 100g", "Certified organic single-bud spring tea — great for cold brew."],
  ["prod-green-tea-wild", "Dongshan Wild Pre-Qingming Green Tea 150g", "Wild-grown tea with a deep, earthy character."],
  ["prod-chenpi-3y", "Xinhui Chenpi 3-Year Aged 200g", "Light aged citrus aroma — for daily tea and cooking."],
  ["prod-chenpi-8y", "Xinhui Chenpi 8-Year Aged 500g", "Eight-year aged peel with rich aroma and full oil glands."],
  ["prod-chenpi-shreds", "Chenpi Shreds for Tea 150g", "Quick-brew shreds for pu-erh, white tea, or solo infusion."],
  ["prod-chenpi-15y", "Xinhui Aged Chenpi 15-Year 100g", "Collector-grade fifteen-year peel — deep medicinal aroma."],
  ["prod-juhong-young", "Huazhou Juhong Young Fruit Slices 100g", "Young fruit slices with dense fuzz — autumn and winter brew."],
  ["prod-juhong-shreds", "Juhong Instant Shreds 120g", "Fine shreds for fast infusion — optionally with honey."],
  ["prod-juhong-blocks", "Juhong Traditional Blocks 180g", "Whole blocks to break and steep — long-lasting cups."],
  ["prod-juhong-jar", "Huazhou Juhong Premium Jar 250g", "Sealed jar of uniform slices for home and office."],
  ["prod-xiaoqing-single", "Xiaoqinggan Single-Pack 100g", "Individually wrapped — portable, one fruit per brew."],
  ["prod-ganpu-ripe", "Xinhui Ganpu Ripe Tea 300g", "Mandarin and Yunnan ripe pu-erh — smooth and mellow."],
  ["prod-xiaoqing-jar", "Xiaoqinggan Premium Jar 250g", "July harvest mandarin tea in a sealed tin."],
  ["prod-chenpi-puer-combo", "Chenpi & Ganpu Duo 400g", "Chenpi meets mandarin pu-erh — layered, age-worthy blend."],
  ["prod-gift-chenpi-juhong", "Chenpi & Juhong Duo Gift Box", "Wellness gift pairing for all seasons."],
  ["prod-gift-spring-gan", "Spring Tea + Xiaoqinggan Set", "Pre-Qingming green tea with mandarin pu-erh sampler."],
  ["prod-gift-newyear", "Lingnan New Year Gift Basket", "Chenpi, juhong, biluochun, and xiaoqinggan — festive set."],
  ["prod-gift-business", "Business Gift Four-Piece Set", "Premium box with green tea, chenpi, juhong, and gan tea."],
];

const blogs = [
  {
    _id: "blog-chenpi-guide",
    title: "How to Identify Authentic Xinhui Chenpi",
    body: "Authentic Xinhui chenpi starts with quanzhi mandarin — check origin, age, aroma, and oil chambers in four steps.",
  },
  {
    _id: "blog-biluochun-brew",
    title: "Biluochun Brewing Guide: 80°C Water for True Flavor",
    body: "Use the top-drop method: water first, then leaves. Brew at about 80°C for 30 seconds to avoid bitterness.",
  },
  {
    _id: "blog-juhong-benefits",
    title: "Daily Use and Pairings for Huazhou Juhong",
    body: "Steep 3–5 juhong slices in hot water; pair with Xinhui chenpi for a clean, mellow wellness cup year-round.",
  },
];

const blogCategories = [
  { _id: "blogcat-culture", title: "Tea Culture", description: "Brewing, tasting, and Lingnan tea stories." },
  { _id: "blogcat-health", title: "Tea Wellness", description: "Chenpi, juhong, and daily wellness tips." },
];

function block(text) {
  return [
    {
      _key: "b1",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [{ _key: "s1", _type: "span", marks: [], text }],
    },
  ];
}

for (const item of categories) {
  await client.patch(item._id).set({ title: item.title, description: item.description }).commit();
  console.log("category", item._id);
}

for (const item of brands) {
  await client.patch(item._id).set({ title: item.title, description: item.description }).commit();
  console.log("brand", item._id);
}

for (const [id, name, description] of products) {
  await client.patch(id).set({ name, description }).commit();
  console.log("product", id);
}

for (const item of blogCategories) {
  await client.patch(item._id).set({ title: item.title, description: item.description }).commit();
  console.log("blogcat", item._id);
}

await client.patch("author-tea-master").set({ name: "Master Chen" }).commit();
console.log("author author-tea-master");

for (const item of blogs) {
  await client.patch(item._id).set({ title: item.title, body: block(item.body) }).commit();
  console.log("blog", item._id);
}

console.log("\nDone patching English CMS text.");
