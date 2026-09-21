# 茶文化数据导入指南

## 数据内容

`tea-culture.ndjson` 包含：

- **5 个分类**：名优绿茶、新会陈皮、化州橘红、新会柑、礼盒套装
- **4 个品牌**：洞庭山、新会陈皮村、化州橘红、岭南茗韵
- **32 个商品**：碧螺春、陈皮、橘红、新会柑、礼盒等
- **3 篇博客** + 作者 + 博客分类

> 图片需单独上传，见下方「上传商品图片」。

## 导入步骤

### 1. 登录 Sanity CLI

```bash
npx sanity login
```

### 2. 配置写入 Token（可选，CLI 登录后通常不需要）

在 `.env.local` 中添加具有 **Editor** 权限的 Token：

```
SANITY_API_TOKEN=your_write_token
```

### 3. 导入数据

在项目根目录执行：

```bash
npm run seed:import
```

或手动指定：

```bash
npx sanity dataset import sanity/seed/tea-culture.ndjson production
```

如需**覆盖**已有同 ID 文档（会替换旧数据）：

```bash
npx sanity dataset import sanity/seed/tea-culture.ndjson production --replace
```

### 4. 上传商品图片

按**商品名称 + 类目**匹配图片（绿茶→碧螺春图、陈皮→陈皮图、橘红→橘红切片、小青柑/礼盒→专用生成图），写入 Sanity。需已 `sanity login`：

```bash
npx sanity exec sanity/seed/upload-images.mjs --with-user-token
```

或：

```bash
npm run seed:images
```

（`seed:images` 需先在环境变量中设置 `SANITY_AUTH_TOKEN`）

> **重要**：`seed:import --replace` 会覆盖商品文字数据，**不会保留图片**。每次导入后请再执行：
> ```bash
> npm run seed:english && npm run seed:images
> ```
>
> 商品/博客在 Sanity 中以**英文**存储；切换右上角 **EN / 中文** 可显示中文标题与正文（见 `locales/cms/zh.ts`）。

### 5. 验证

- 打开 http://localhost:3000/studio 查看数据与图片
- 刷新首页，各分类 Tab 应显示对应商品及封面图

## 图片匹配规则

| 商品/分类 | 匹配依据 |
|----------|---------|
| 碧螺春系列 | 绿茶干茶 / 礼盒包装图 |
| 陈皮系列 | 陈皮（Tangerine Peel）干皮图 |
| 橘红系列 | 橘红切片 / 干燥柑橘片 |
| 小青柑 / 大红柑 | 专用产品图（`sanity/seed/images/`） |
| 礼盒套装 | 岭南三宝 / 入门套装专用图 |

## 商品 variant 对照

| variant 值   | 首页 Tab | 品类       |
|-------------|---------|-----------|
| `tea`       | 茶叶    | 碧螺春等   |
| `chenpi`    | 陈皮    | 新会/江门陈皮 |
| `juhong`    | 橘红    | 化州橘红   |
| `xinhuiGan` | 新会柑  | 小青柑等   |
| `specialty` | 特产礼盒 | 组合礼盒   |
