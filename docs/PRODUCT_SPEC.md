# BA Career Meetup — 3,000 Members Wrap H5

> Product specification v1.1  
> Last updated: 2026-07-08

---

## 1. Project Overview

### 1.1 Background

BA Career Meetup 的 Meetup 订阅人数达到 **3,000**。需要做一个移动端 H5「Wrap」式回顾页面，用于庆祝里程碑、展示社群数据与成果、感谢相关方，并收集用户反馈。

### 1.2 Goals

| Goal | Description |
|------|-------------|
| **Celebrate** | 以有仪式感的方式呈现 3,000 members 里程碑 |
| **Reflect** | 回顾社群历程、关键数据与社区瞬间 |
| **Thank** | 感谢成员、嘉宾、合作方、志愿者 |
| **Engage** | 收集用户建议与留言 |
| **Distribute** | 通过 LinkedIn post 分享链接，引导用户访问与传播 |

### 1.3 Non-Goals (v1)

- 不需要自定义域名（首版使用平台免费子域名）
- 不需要完整 CMS 后台（首版用配置文件 + 文件夹换图）
- 不需要照抄去年 LinkedIn 庆祝长文（仅作内容量级参考）
- 留言表单首版仅 UI + Toast；上线前接入 **Formspree**（见 §5.7）

### 1.4 Language

**全英文**（页面文案、UI、分享 meta 均为英文）

---

## 2. Target Audience & Distribution

### 2.1 Audience

- BA Career Meetup 现有及潜在成员
- 嘉宾、合作方、志愿者
- LinkedIn 上关注 BA / 职业社群的人群

### 2.2 Distribution Channel

- 主要发布于 **LinkedIn post**，帖文中附带 H5 链接
- 用户通过手机浏览器打开，竖屏全屏浏览

### 2.3 Hosting

| Item | Decision |
|------|----------|
| Platform | **Cloudflare Pages**（已有账号） |
| URL | `https://<project-name>.pages.dev`（免费子域名） |
| Custom domain | 暂不需要，后续可在 Cloudflare 绑定 |
| Build output | Static site (`dist/`) |

---

## 3. Design References

### 3.1 Primary UI Reference

以 **新版 8 屏 UI 稿** 为主要视觉与结构参考（紫色主题、手写体点缀、顶栏、波浪底边、胶囊徽章等）。

设计稿关键特征：

- 顶栏：左侧 Logo + `BA CAREER MEETUP`，右侧音乐开关
- 主色：紫色系 + 金色点缀
- 装饰：爱心、星星、手写体（如 *Members*、*Grow with us*）
- 交互提示：*Swipe up to explore*、轮播箭头、点击卡片等

### 3.2 Logo

使用团队上传的官方 Logo：

- 完整版：黑底 + 金色树形图标 + `BA CAREER` + `GROW WITH US`
- **开屏 / 结尾**：使用完整 Logo
- **内页顶栏**：精简版（金色图标 + `BA CAREER MEETUP` 文字，无黑底方块）

Logo 源文件路径（开发时放入）：

```
public/images/logo/logo-full.png
public/images/logo/logo-icon.png
```

### 3.3 Design Adjustments vs. UI Mockup

| Area | UI Mockup | Agreed Adjustment |
|------|-----------|-------------------|
| Screen length | 每屏内容偏多 | **拆分为短屏**，约 15 屏，避免屏内滚动 |
| Journey | 单屏竖向时间线 | 拆为 **3 屏**（概览 + 详情分页） |
| By the Numbers | 单屏 5 张卡片 | 拆为 **2 屏**（3 + 2） |
| Thank You | 单屏 4 按钮 | 扩展为 **5 屏**（入口 + 4 类详情），支持配图 |
| Logo | 占位方块 | 替换为官方 Logo |
| Copy | 设计稿示例文案 | 可配置，逐页迭代优化 |

---

## 4. Information Architecture

### 4.1 Screen Map (~15 screens)

```
01  Opening              庆典开屏 + 照片拼贴
02  Journey Intro        时间线概览（2023–2026）
03  Journey 2023–2024    早期里程碑详情
04  Journey 2025–2026    近期里程碑（2026 高亮 3,000）
05  Numbers (1/2)        3,000 Members · 40+ Events · 60+ Speakers
06  Numbers (2/2)        22+ Volunteers · 35+ Countries
07  Community Moments    照片轮播
08  Thank You — Hub      四类入口卡片
09  Thank You — Members
10  Thank You — Speakers
11  Thank You — Partners  （Logo 横滑）
12  Thank You — Volunteers
13  What's Next          未来展望
14  Your Voice           留言收集
15  Closing              社交链接 + 结尾标语
```

### 4.2 Navigation Model

- **主流程**：纵向全屏滑动（`scroll-snap`），一屏一故事
- **禁止屏内滚动**（留言输入框聚焦时例外）
- **子流程**（Thank You 详情）：点击卡片进入对应屏，继续上滑回到主流程
- **轮播**（Moments、Partners logos）：屏内横向滑动，不跳出主流程
- 底部：**进度指示点** + 滑动提示文案

---

## 5. Screen Specifications

### 5.1 Screen 01 — Opening

**Purpose:** 建立仪式感，呈现 3,000 里程碑

| Element | Content |
|---------|---------|
| Badge | `WE DID IT TOGETHER!` |
| Headline | `3,000` + *Members*（手写体） |
| Subcopy | `One growing community. Thank you for being part of our journey.` |
| Visual | 照片拼贴（4–6 张，可重叠排列） |
| Optional | 拼贴中心播放按钮（首版可为装饰，后续可接短视频） |
| Logo | 完整官方 Logo |
| CTA | `Swipe up to explore` |

**Images (configurable):**

```
public/images/opening/collage-1.jpg … collage-N.jpg
```

---

### 5.2 Screens 02–04 — Our Journey

**Purpose:** 讲述 2023 至今的社群历程

#### Screen 02 — Journey Intro

| Element | Content |
|---------|---------|
| Title | `Our Journey` |
| Subtitle | `From a small idea in 2023 to 3,000 members today.` |
| Visual | 简化横向时间线：`2023 — 2024 — 2025 — 2026` + 图标 |
| Copy | **仅年份与图标，无长文案** |

#### Screen 03 — Journey 2023–2024

| Year | Draft Content |
|------|---------------|
| 2023 | Started with a simple idea to support Business Analysts in the community. |
| 2024 | Grew across New Zealand with more events, speakers, and connections. |

- 每年：图标 + 标题 + **最多 2 行**描述
- 可选配图：`journey/2023.jpg`、`journey/2024.jpg`

#### Screen 04 — Journey 2025–2026

| Year | Draft Content |
|------|---------------|
| 2025 | Reached 2,000 members. Stronger events and deeper community support. |
| 2026 | **3,000 members!** — *And this is just the beginning.*（紫色高亮卡片） |

- 可选配图：`journey/2025.jpg`、`journey/2026.jpg`

> 以上文案为占位草稿，上线前在 `content.json` 中逐页优化。

---

### 5.3 Screens 05–06 — By the Numbers

**Purpose:** 数据高光，进入视口时 count-up 动画

#### Screen 05 — Core Stats

| Stat | Value | Icon Color |
|------|-------|------------|
| Members | 3,000+ | Purple |
| Events Hosted | 40+ | Orange |
| Guest Speakers | 60+ | Green |

#### Screen 06 — Community Stats

| Stat | Value | Icon Color |
|------|-------|------------|
| Volunteers | 22+ | Blue |
| Countries | 35+ | Purple |

- 标题：`By the Numbers`
- 副标题：`A look back at our impact together.`
- 所有数字与标签通过配置修改，无需改代码

---

### 5.4 Screen 07 — Community Moments

**Purpose:** 展示活动照片与社区氛围

| Element | Content |
|---------|---------|
| Title | `Community Moments` |
| Layout | 大图轮播，圆角卡片 |
| Overlay | Caption（如 `Learning together`） |
| Controls | 左右箭头、`1/N` 计数、底部分页点 |
| Hint | `Swipe left or right` |

**Images (configurable):**

```json
"moments": [
  { "image": "moments/moment-1.jpg", "caption": "Learning together" },
  { "image": "moments/moment-2.jpg", "caption": "..." }
]
```

建议准备 **4–6 张**活动照片。

---

### 5.5 Screens 08–12 — Thank You

**Purpose:** 感谢成员、嘉宾、合作方、志愿者。内容比 UI 稿略丰富，支持配图，但**每屏保持简短**。

#### Screen 08 — Hub

| Element | Content |
|---------|---------|
| Title | `Thank You` |
| Subtitle | `Tap a card to see our thanks` |
| Cards | Members · Speakers · Partners · Volunteers（2×2 圆形卡片） |

#### Screens 09–12 — Category Detail

每类详情 **1 屏**，结构统一：

```
[分类标题]
[2–3 句英文感谢文案]
[可选：1 张配图 或 Logo 横滑条]
[Continue → 上滑继续]
```

| Category | Image Type | Draft Copy (placeholder) |
|----------|------------|--------------------------|
| **Members** | 可选活动合影 | To everyone who followed, attended, or shared — this milestone is yours. Your curiosity keeps this community growing. |
| **Speakers** | 可选嘉宾/讲台照 | Thank you for sharing your stories and real-world experience. You've made BA learning more human and accessible. |
| **Partners** | **Logo 横滑**（多张） | To the organisations who offered venues, co-hosted events, and believed in us along the way. |
| **Volunteers** | 可选志愿者合影 | From planning to welcoming attendees — you power every event. Thank you to every volunteer, past and present. |

**Partners 配置示例：**

```json
"partners": {
  "logos": [
    { "name": "AUT", "logo": "partners/aut.png" },
    { "name": "IIBA NZ", "logo": "partners/iiba.png" }
  ]
}
```

- 有 Logo 显示 Logo；无 Logo 显示名称卡片
- 参考去年 [2000 Followers 庆祝文](https://www.linkedin.com/pulse/celebrating-2000-followers-milestone-we-built-together-ba-career-bxvdf) 的合作方规模，但**不照抄全文**

---

### 5.6 Screen 13 — What's Next

**Purpose:** 展望未来

| Item | Draft Content |
|------|---------------|
| Title | `What's Next` |
| Subtitle | `We're excited about what's ahead.` |
| Items | More practical career support · More real-world BA stories · More opportunities to connect |
| Visual | 底部插图或照片（可配置） |

每项 **一行**，控制屏高。

---

### 5.7 Screen 14 — Your Voice

**Purpose:** 收集用户对社群的建议与留言

| Element | Content |
|---------|---------|
| Title | `Your Voice is part of our story.` |
| Input | 多行文本框，placeholder: `Write your message...` |
| Limit | **500 characters** |
| Button | `Share your message` |
| Note | `Messages may be featured anonymously.` |
| Phase 1 Submit | UI 提交 + Toast 感谢（不接后端） |
| Phase 2 Submit | POST 至 **Formspree**，邮件通知 + 后台查看 |

#### Form Submission — Formspree（已确定）

**数据落在哪里：** [Formspree](https://formspree.io) 后台 + 配置的通知邮箱；可导出 CSV。

**为什么选 Formspree：** 静态 H5 无需自建后端，保留自定义 UI，免费档 50 条/月（庆典活动足够）。

**接入步骤：**

1. 注册 Formspree，创建 Form，获取 endpoint：`https://formspree.io/f/<form-id>`
2. 将 endpoint 写入 `content.json`（或环境变量 `VITE_FORMSPREE_ENDPOINT`）
3. 前端提交示例：

```json
POST https://formspree.io/f/<form-id>
Content-Type: application/json

{
  "message": "用户留言内容",
  "_subject": "BA Career 3000 Wrap — New Message"
}
```

4. 在 Formspree 后台配置通知邮箱
5. 提交成功 → Toast：*`Thank you for your message!`*；失败 → Toast 提示稍后重试

**配置示例（`content.json`）：**

```json
"feedback": {
  "maxLength": 500,
  "placeholder": "Write your message...",
  "formspreeEndpoint": "https://formspree.io/f/xxxxxxxx"
}
```

> `formspreeEndpoint` 留空时，Phase 1 行为：仅 Toast，不发送请求。

---

### 5.8 Screen 15 — Closing

**Purpose:** 收尾、引导关注、强化品牌

| Element | Content |
|---------|---------|
| Headline | `Here's to 3,000 Members and many more to come!` |
| Subcopy | `Stay connected with us` |
| Links | Meetup · LinkedIn · YouTube · Website（宽按钮 + 图标） |
| Footer | 完整 Logo + *Grow with us. We grow together.* |
| Tagline | `See you at the next meetup!` |

**Links (configurable):**

```json
"links": {
  "meetup": "https://www.meetup.com/ba-career-meetup-group/",
  "linkedin": "https://www.linkedin.com/company/ba-career",
  "youtube": "https://www.youtube.com/@bacareermeetup",
  "website": "https://analysis.nz/"
}
```

---

## 6. Global UI Elements

### 6.1 Top Bar（内页屏 02–15）

| Position | Element |
|----------|---------|
| Left | Logo 图标 + `BA CAREER MEETUP` |
| Right | 音乐开关按钮（首版可为 UI 占位，BGM 后续添加） |

开屏（Screen 01）使用完整 Logo，不使用标准顶栏。

### 6.2 Decorative Elements

- 手写体标题（*Members*、*Grow with us* 等）
- 爱心、星星、confetti 粒子（开屏 / 里程碑）
- 底部波浪形过渡
- 紫色胶囊徽章（如 `WE DID IT TOGETHER!`）

### 6.3 Animations

| Animation | Where |
|-----------|-------|
| Count-up | By the Numbers |
| Fade + slide up | 屏间切换 |
| Confetti / sparkles | Opening、2026 milestone |
| Carousel slide | Moments、Partner logos |
| Stagger reveal | 时间线节点、统计卡片 |

### 6.4 Layout Constraints

- 视口高度：`100dvh`（适配移动端地址栏）
- 主标题：≤ 2 行
- 正文：≤ 3–4 行 / 屏
- **避免屏内滚动**

---

## 7. Visual Design Tokens

```css
/* Brand — adjust during implementation to match logo gold */
--gold-primary:   #C9A227;
--gold-light:     #E8D48B;
--purple-deep:    #5B3A8C;
--purple-main:    #6B4E9B;
--purple-soft:    #9B7EC8;
--purple-bg:      #F3EEFA;
--black-brand:    #0A0A0A;
--white:          #FFFFFF;

/* Typography */
--font-sans:      system / Inter / similar;
--font-script:    handwriting style for emphasis words;
```

---

## 8. Content & Asset Management

### 8.1 Principle

**所有文案、数字、图片路径、外链均通过配置文件管理**，换内容不改组件代码。

### 8.2 Config File

```
src/content.json   (or content.config.ts)
```

### 8.3 Image Directory Structure

```
public/images/
├── logo/
│   ├── logo-full.png
│   └── logo-icon.png
├── opening/
│   └── collage-*.jpg
├── journey/
│   └── 2023.jpg … 2026.jpg
├── moments/
│   └── moment-*.jpg
├── thanks/
│   ├── members.jpg
│   ├── speakers.jpg
│   └── volunteers.jpg
├── partners/
│   └── *.png
├── whats-next/
│   └── illustration.png
└── og/
    └── og-image.jpg          # LinkedIn 分享预览图 1200×630
```

### 8.4 How to Update Content

1. 将图片放入对应文件夹（同名覆盖或更新配置中的文件名）
2. 修改 `content.json` 中的文案、数字、链接
3. 重新部署到 Cloudflare Pages

---

## 9. Technical Stack

| Layer | Choice |
|-------|--------|
| Framework | **Vite + React + TypeScript** |
| Styling | CSS Modules 或 Tailwind（实现时选定） |
| Animation | CSS transitions + 轻量 JS（count-up、confetti） |
| Carousel | Embla Carousel 或纯 CSS scroll-snap |
| Form | **Formspree**（Phase 2 接入） |
| Build | `npm run build` → `dist/` |
| Deploy | Cloudflare Pages（Git 连动或上传 dist） |

### 9.1 Cloudflare Pages Settings

```
Build command:    npm run build
Build output:     dist
Node version:     18+ (or 20)
```

### 9.2 Project Structure (planned)

```
3000-members-wrap/
├── docs/
│   └── PRODUCT_SPEC.md        ← 本文档
├── public/
│   └── images/                ← 所有可替换图片
├── src/
│   ├── content.json           ← 文案与配置
│   ├── components/            ← 各屏组件
│   ├── hooks/                 ← 滑动、动画
│   ├── App.tsx
│   └── main.tsx
├── index.html                 ← OG meta tags
├── package.json
└── README.md                  ← 部署与换图指南
```

---

## 10. LinkedIn Sharing

### 10.1 Open Graph Meta

```html
<meta property="og:title" content="BA Career Meetup — 3,000 Members Celebration" />
<meta property="og:description" content="A journey from our first meetup to 3,000 members. Thank you to everyone who made this community possible." />
<meta property="og:image" content="https://<your-domain>/images/og/og-image.jpg" />
<meta property="og:url" content="https://<your-domain>.pages.dev" />
<meta property="og:type" content="website" />
```

### 10.2 OG Image

- 尺寸：**1200 × 630 px**
- 建议内容：黑/紫金背景 + 完整 Logo + `3,000 Members`

### 10.3 Suggested LinkedIn Post Copy (draft)

```
We're celebrating 3,000 members on Meetup! 🎉

Swipe through our journey — the events, the people, and the community we built together.

Leave a message and help us shape what's next.

🔗 <link>
```

---

## 11. Development Phases

### Phase 1 — Skeleton (v1.0)

- [ ] 项目脚手架（Vite + React + TS）
- [ ] ~15 屏布局与纵向滑动
- [ ] `content.json` 配置系统
- [ ] 所有图片位 + 占位图
- [ ] 官方 Logo 替换
- [ ] 基础动效（count-up、屏间过渡、轮播）
- [ ] Thank You 点击跳转子屏
- [ ] 留言表单 UI（Toast 提交）
- [ ] OG meta + `og-image` 占位
- [ ] Cloudflare Pages 部署说明（README）

### Phase 2 — Content & Polish (v1.x)

- [ ] 逐页替换真实文案（优先 Journey、Thanks）
- [ ] 上传真实照片与 Partner logos
- [ ] 润色英文文案
- [ ] 微调动效与间距
- [ ] 制作正式 OG 预览图
- [ ] **留言表单接入 Formspree**（注册 Form、配置 endpoint 与通知邮箱）

### Phase 3 — Enhancements (v2)

- [ ] 开屏播放按钮接入短视频（可选）
- [ ] 背景音乐（顶栏音乐按钮）
- [ ] 自定义域名（可选）
- [ ] 分享按钮 / 统计（可选）

---

## 12. Content Checklist（待填充）

| Item | Status | Notes |
|------|--------|-------|
| Logo 完整版 + 图标版 | ✅ 已提供 | 需导出 `logo-icon.png` |
| 开屏拼贴照片 4–6 张 | ⬜ 待提供 | |
| Journey 各年配图 0–4 张 | ⬜ 待提供 | 可选 |
| 数据最终数字核对 | ⬜ 待确认 | 3000/40+/60+/22+/35+ |
| Community Moments 4–6 张 | ⬜ 待提供 | 含 caption |
| Thanks 配图 0–3 张 | ⬜ 待提供 | members/speakers/volunteers |
| Partner logos | ⬜ 待提供 | 有则上传，无则名称卡片 |
| What's Next 插图 | ⬜ 待提供 | 可用设计稿占位 |
| OG 预览图 | ⬜ 待制作 | 1200×630 |
| 社交链接 URL 最终版 | ⬜ 待确认 | |
| Formspree 账号 + Form endpoint | ⬜ 待提供 | Phase 2 上线前配置 |

---

## 13. Open Questions

| # | Question | Default if no answer |
|---|----------|----------------------|
| 1 | 开屏播放按钮：装饰 or 接视频？ | v1 装饰 |
| 2 | 顶栏音乐按钮：v1 是否播放 BGM？ | v1 仅 UI |
| 3 | Partners 最终名单与分组？ | 配置列表，后续追加 |
| 4 | 留言数据存哪里？ | ✅ **Formspree**（Phase 2 接入） |
| 5 | 今年是否有新增合作方？ | 配置中追加 |

---

## 14. Reference Links

- 去年庆祝文案（内容量级参考，不照抄）：  
  [Celebrating 2000 Followers — A Milestone We Built Together](https://www.linkedin.com/pulse/celebrating-2000-followers-milestone-we-built-together-ba-career-bxvdf)
- Newsletter 入口：  
  [BA Career Insights](https://www.linkedin.com/newsletters/ba-career-insights-7202237064682090496/)
- Meetup：  
  https://www.meetup.com/ba-career-meetup-group/
- LinkedIn：  
  https://www.linkedin.com/company/ba-career
- YouTube：  
  https://www.youtube.com/@bacareermeetup
- Website：  
  https://analysis.nz/

---

## 15. Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-07-08 | Initial spec — consolidated from planning discussions |
| 1.1 | 2026-07-08 | Form submission: Formspree (Phase 2) |
