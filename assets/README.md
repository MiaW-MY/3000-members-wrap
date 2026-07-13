# Assets — 素材文件夹

把图片放进对应子文件夹，然后在 `js/content.js` 里填文件名即可（或改路径）。

## 目录说明

| 文件夹 | 用途 | 建议规格 |
|--------|------|----------|
| `logo/` | 品牌 Logo | `logo-full.png` 完整版；`logo-icon.png` 顶栏小图标（透明底） |
| `opening/` | 开屏照片拼贴 | 6 张，`collage-1.jpg` … `collage-6.jpg`，横图/竖图都可 |
| `journey/` | 历程配图（可选） | `2023.jpg` … `2026.jpg` |
| `moments/` | 社区瞬间轮播 | 4–6 张，`moment-1.jpg` … 横图 |
| `thanks/` | 感谢页配图（可选） | `members.jpg` `speakers.jpg` `volunteers.jpg` |
| `partners/` | 合作方 Logo | PNG 透明底，如 `aut.png` `iiba-nz.png` |
| `whats-next/` | 展望页素材 | `icon-career-support.png` 等 3 张卡片图标 + `group-photo.jpg` 底部合影 |
| `og/` | LinkedIn 分享预览图 | `og-image.jpg`，**1200×630** |
| `icons/` | 自定义图标（可选） | 一般不需要，暂用 UI 内置样式 |

## 当前状态

### ✅ 已有

- `icons/Icon black.png` — **当前 Logo**（黑底完整版，首页 + 顶栏临时使用）
- `logo/logo-full.svg` / `logo/logo-icon.svg` — 加载失败时的备用

### ⬜ 待替换（你提供后我改配置）

1. **`logo/logo-icon.png`** — 透明底金色树形小图标（替换顶栏临时图）
2. **`logo/logo-full.png`** — 完整 Logo 高清版（可选，替换首页）

**建议有：**

1. **`opening/collage-1.jpg` ~ `opening/collage-6.jpg`** — 首页拼贴照片
2. **`moments/moment-1.jpg` ~ `moment-4.jpg`** — 轮播活动照 + 可在 content.js 写 caption
3. **`partners/*.png`** — 合作方 Logo（没有就先显示名称文字）

**可选：**

1. `thanks/members.jpg` 等感谢页配图
2. `journey/2023.jpg` 等历程配图
3. `whats-next/illustration.png`
4. `og/og-image.jpg` — LinkedIn 发帖预览图

## 替换后

保存文件 → 刷新浏览器（`Cmd+Shift+R`）即可，无需改代码（文件名与 content.js 一致时）。

若用新文件名，改 `js/content.js` 里对应路径。
