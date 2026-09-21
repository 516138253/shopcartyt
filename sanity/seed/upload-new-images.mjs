/**
 * Upload images for the 20 newly added products.
 * Run: npx sanity exec sanity/seed/upload-new-images.mjs --with-user-token
 */
process.env.SEED_ONLY_IDS = [
  "prod-biluochun-yuqian",
  "prod-biluochun-handmade",
  "prod-green-tea-organic",
  "prod-green-tea-wild",
  "prod-chenpi-3y",
  "prod-chenpi-8y",
  "prod-chenpi-shreds",
  "prod-chenpi-15y",
  "prod-juhong-young",
  "prod-juhong-shreds",
  "prod-juhong-blocks",
  "prod-juhong-jar",
  "prod-xiaoqing-single",
  "prod-ganpu-ripe",
  "prod-xiaoqing-jar",
  "prod-chenpi-puer-combo",
  "prod-gift-chenpi-juhong",
  "prod-gift-spring-gan",
  "prod-gift-newyear",
  "prod-gift-business",
].join(",");

await import("./upload-images.mjs");
