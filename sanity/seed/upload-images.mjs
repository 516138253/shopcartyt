/**
 * Upload product/category/brand images matched to item names & categories.
 *
 * Run: npx sanity exec sanity/seed/upload-images.mjs --with-user-token
 */
import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedImagesDir = path.join(__dirname, "images");

let client;

try {
  const { getCliClient } = await import("sanity/cli");
  client = getCliClient({ apiVersion: "2025-03-20" });
} catch {
  const token =
    process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_TOKEN;

  if (!token) {
    throw new Error(
      "Missing auth. Run: npx sanity exec sanity/seed/upload-images.mjs --with-user-token"
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

/** @type {Record<string, { name: string; category: string; source: string }>} */
const IMAGE_CATALOG = {
  products: {
    "prod-biluochun-premium": {
      name: "洞庭碧螺春 明前特级 250g",
      category: "名优绿茶",
      source:
        "https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?w=900&q=80",
    },
    "prod-biluochun-classic": {
      name: "东山碧螺春 一级 500g",
      category: "名优绿茶",
      source:
        "https://images.unsplash.com/photo-1760074057745-9eaa5d50bc74?w=900&q=80",
    },
    "prod-biluochun-gift": {
      name: "明前碧螺春 春茶礼盒 200g",
      category: "名优绿茶 / 礼盒",
      source:
        "https://images.unsplash.com/photo-1679667049239-0a5e1d073244?w=900&q=80",
    },
    "prod-chenpi-10y": {
      name: "新会陈皮 十年陈 250g",
      category: "新会陈皮",
      source:
        "https://images.unsplash.com/photo-1681696629981-944fbd4ac550?w=900&q=80",
    },
    "prod-chenpi-5y": {
      name: "江门陈皮 五年陈 500g",
      category: "新会陈皮",
      source:
        "https://images.unsplash.com/photo-1769425158355-86d35ad889a7?w=900&q=80",
    },
    "prod-chenpi-original": {
      name: "新会圈枝陈皮 原片 300g",
      category: "新会陈皮",
      source:
        "https://images.unsplash.com/photo-1769425158339-654cdc206fd7?w=900&q=80",
    },
    "prod-juhong-premium": {
      name: "化州橘红 正毛胎 150g",
      category: "化州橘红",
      source:
        "https://images.pexels.com/photos/12809556/pexels-photo-12809556.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    "prod-juhong-slices": {
      name: "橘红切片 养生泡茶 200g",
      category: "化州橘红",
      source:
        "https://images.unsplash.com/photo-1771371000713-ee0dd2089f64?w=900&q=80",
    },
    "prod-xinhui-xiaoqing": {
      name: "新会小青柑 普洱熟茶 500g",
      category: "新会柑",
      source: path.join(seedImagesDir, "prod-xinhui-xiaoqing.png"),
    },
    "prod-xinhui-dahong": {
      name: "新会大红柑 填茶 礼盒 600g",
      category: "新会柑 / 礼盒",
      source: path.join(seedImagesDir, "prod-xinhui-dahong.png"),
    },
    "prod-gift-lingnan": {
      name: "岭南三宝礼盒 陈皮+橘红+柑茶",
      category: "礼盒套装",
      source: path.join(seedImagesDir, "prod-gift-lingnan.png"),
    },
    "prod-gift-starter": {
      name: "茶文化入门套装 碧螺春+陈皮",
      category: "礼盒套装",
      source: path.join(seedImagesDir, "prod-gift-starter.png"),
    },
    "prod-biluochun-yuqian": {
      name: "洞庭碧螺春 雨前二级 300g",
      category: "名优绿茶",
      source:
        "https://images.unsplash.com/photo-1760074057731-83e375873eb5?w=900&q=80",
    },
    "prod-biluochun-handmade": {
      name: "西山碧螺春 手工炒青 200g",
      category: "名优绿茶",
      source:
        "https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?w=900&q=80",
    },
    "prod-green-tea-organic": {
      name: "明前有机绿茶 100g",
      category: "名优绿茶",
      source:
        "https://images.unsplash.com/photo-1711449534869-e85ceec39908?w=900&q=80",
    },
    "prod-green-tea-wild": {
      name: "东山野茶 明前绿茶 150g",
      category: "名优绿茶",
      source:
        "https://images.unsplash.com/photo-1760074057745-9eaa5d50bc74?w=900&q=80",
    },
    "prod-chenpi-3y": {
      name: "新会陈皮 三年陈 200g",
      category: "新会陈皮",
      source:
        "https://images.unsplash.com/photo-1769425158339-654cdc206fd7?w=900&q=80",
    },
    "prod-chenpi-8y": {
      name: "新会陈皮 八年陈 500g",
      category: "新会陈皮",
      source:
        "https://images.unsplash.com/photo-1681696629981-944fbd4ac550?w=900&q=80",
    },
    "prod-chenpi-shreds": {
      name: "陈皮丝 泡茶专用 150g",
      category: "新会陈皮",
      source:
        "https://images.unsplash.com/photo-1769425158355-86d35ad889a7?w=900&q=80",
    },
    "prod-chenpi-15y": {
      name: "新会老陈皮 十五年陈 100g",
      category: "新会陈皮",
      source:
        "https://images.unsplash.com/photo-1681696629981-944fbd4ac550?w=900&q=80",
    },
    "prod-juhong-young": {
      name: "化州橘红 幼果片 100g",
      category: "化州橘红",
      source:
        "https://images.pexels.com/photos/12809556/pexels-photo-12809556.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    "prod-juhong-shreds": {
      name: "橘红丝 即泡即饮 120g",
      category: "化州橘红",
      source:
        "https://images.unsplash.com/photo-1771371000713-ee0dd2089f64?w=900&q=80",
    },
    "prod-juhong-blocks": {
      name: "橘红块 传统炮制 180g",
      category: "化州橘红",
      source:
        "https://images.unsplash.com/photo-1771371000713-ee0dd2089f64?w=900&q=80",
    },
    "prod-juhong-jar": {
      name: "化州橘红 精品罐装 250g",
      category: "化州橘红",
      source:
        "https://images.pexels.com/photos/12809556/pexels-photo-12809556.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    "prod-xiaoqing-single": {
      name: "小青柑 单颗装 100g",
      category: "新会柑",
      source: path.join(seedImagesDir, "prod-xinhui-xiaoqing.png"),
    },
    "prod-ganpu-ripe": {
      name: "新会柑普茶 熟茶 300g",
      category: "新会柑",
      source: path.join(seedImagesDir, "prod-xinhui-xiaoqing.png"),
    },
    "prod-xiaoqing-jar": {
      name: "小青柑 精品罐装 250g",
      category: "新会柑",
      source: path.join(seedImagesDir, "prod-xinhui-xiaoqing.png"),
    },
    "prod-chenpi-puer-combo": {
      name: "陈皮普洱 双柑合一 400g",
      category: "新会柑",
      source: path.join(seedImagesDir, "prod-xinhui-dahong.png"),
    },
    "prod-gift-chenpi-juhong": {
      name: "陈皮橘红 双拼礼盒",
      category: "礼盒套装",
      source: path.join(seedImagesDir, "prod-gift-lingnan.png"),
    },
    "prod-gift-spring-gan": {
      name: "春茶+小青柑 组合装",
      category: "礼盒套装",
      source: path.join(seedImagesDir, "prod-gift-starter.png"),
    },
    "prod-gift-newyear": {
      name: "年货大礼篮 岭南特产",
      category: "礼盒套装",
      source: path.join(seedImagesDir, "prod-gift-lingnan.png"),
    },
    "prod-gift-business": {
      name: "商务伴手礼 精选四件套",
      category: "礼盒套装",
      source: path.join(seedImagesDir, "prod-gift-lingnan.png"),
    },
  },
  categories: {
    "cat-green-tea": {
      name: "名优绿茶",
      category: "分类",
      source:
        "https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?w=600&q=80",
    },
    "cat-chenpi": {
      name: "新会陈皮",
      category: "分类",
      source:
        "https://images.unsplash.com/photo-1681696629981-944fbd4ac550?w=600&q=80",
    },
    "cat-juhong": {
      name: "化州橘红",
      category: "分类",
      source:
        "https://images.unsplash.com/photo-1771371000713-ee0dd2089f64?w=600&q=80",
    },
    "cat-xinhui-gan": {
      name: "新会柑",
      category: "分类",
      source: path.join(seedImagesDir, "prod-xinhui-xiaoqing.png"),
    },
    "cat-gift": {
      name: "礼盒套装",
      category: "分类",
      source: path.join(seedImagesDir, "prod-gift-lingnan.png"),
    },
  },
  brands: {
    "brand-dongting": {
      name: "洞庭山",
      category: "品牌 / 碧螺春",
      source:
        "https://images.unsplash.com/photo-1760074057731-83e375873eb5?w=400&q=80",
    },
    "brand-xinhui": {
      name: "新会陈皮村",
      category: "品牌 / 陈皮",
      source:
        "https://images.unsplash.com/photo-1681696629981-944fbd4ac550?w=400&q=80",
    },
    "brand-huazhou": {
      name: "化州橘红",
      category: "品牌 / 橘红",
      source:
        "https://images.unsplash.com/photo-1771371000713-ee0dd2089f64?w=400&q=80",
    },
    "brand-lingnan": {
      name: "岭南茗韵",
      category: "品牌 / 综合特产",
      source: path.join(seedImagesDir, "prod-gift-lingnan.png"),
    },
  },
};

async function loadImageBuffer(source, filename) {
  if (source.startsWith("http://") || source.startsWith("https://")) {
    const res = await fetch(source);
    if (!res.ok) throw new Error(`Fetch failed ${source}: ${res.status}`);
    return Buffer.from(await res.arrayBuffer());
  }

  return readFile(source);
}

async function uploadSource(source, filename) {
  const buffer = await loadImageBuffer(source, filename);
  return client.assets.upload("image", buffer, { filename });
}

async function setProductImages(id, assetId) {
  await client
    .patch(id)
    .set({
      images: [
        {
          _type: "image",
          _key: "main",
          asset: { _type: "reference", _ref: assetId },
        },
      ],
    })
    .commit();
}

async function setSingleImage(id, assetId) {
  await client
    .patch(id)
    .set({
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: assetId },
      },
    })
    .commit();
}

async function runGroup(label, entries, handler) {
  console.log(`\n=== ${label} ===`);
  for (const [docId, meta] of Object.entries(entries)) {
    try {
      console.log(`[${meta.category}] ${meta.name} (${docId})`);
      const asset = await uploadSource(meta.source, `${docId}.jpg`);
      await handler(docId, asset._id);
      console.log(`OK ${docId}`);
    } catch (err) {
      console.error(`FAIL ${docId}:`, err.message);
    }
  }
}

const onlyIds = process.env.SEED_ONLY_IDS?.split(",").filter(Boolean);

const productEntries = onlyIds?.length
  ? Object.fromEntries(
      Object.entries(IMAGE_CATALOG.products).filter(([id]) =>
        onlyIds.includes(id)
      )
    )
  : IMAGE_CATALOG.products;

await runGroup("Products", productEntries, setProductImages);

if (!onlyIds?.length) {
  await runGroup("Categories", IMAGE_CATALOG.categories, setSingleImage);
  await runGroup("Brands", IMAGE_CATALOG.brands, setSingleImage);
}

console.log("\nDone uploading matched images.");
