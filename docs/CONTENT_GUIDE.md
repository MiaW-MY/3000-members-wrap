# BA Career Meetup — 3,000 Wrap 内容维护手册

> 面向运营团队 | 版本 1.0 | 2026-07-13  
> 用途：查阅各页文案与图片、提交修改需求、避免信息不一致

---

## 1. 页面总览（共 10 屏）

| 编号 | 页面名（英文） | 页面 ID | 上滑顺序 |
|------|----------------|---------|----------|
| **01** | Opening | 开屏 | 1 |
| **02** | Our Journey | 历程 | 2 |
| **03** | By the Numbers | 数据 | 3 |
| **04** | Community Moments | 社区瞬间 | 4 |
| **05** | Thank You — Speakers | 感谢 · 嘉宾 | 5 |
| **06** | Thank You — Partners | 感谢 · 合作方 | 6 |
| **07** | Thank You — Volunteers | 感谢 · 志愿者 | 7 |
| **08** | What's Next | 展望 | 8 |
| **09** | Your Voice | 留言 | 9 |
| **10** | Closing | 结尾 | 10 |

全局：除开屏外，内页顶栏显示 **BA CAREER MEETUP** + Logo。

---

## 2. 逐页文案与图片清单

> 标注说明：  
> - **配置** = 在 `js/content.js` 中修改（运营可填表，技术同事录入）  
> - **代码** = 写在 `js/app.js` 中，修改需开发协助  
> - **素材路径** = 文件放在 `assets/` 下对应文件夹

---

### 01 · Opening（开屏）

| 类型 | 字段 | 当前文案 / 内容 | 维护方式 |
|------|------|-----------------|----------|
| 文案 | 徽章 | WE DID IT TOGETHER! | 配置 `opening.badge` |
| 文案 | 主数字 | 3,000 | 配置 `opening.headline` |
| 文案 | 主标题 | Members | 配置 `opening.headlineScript` |
| 文案 | 副文案 | One growing community. Thank you for being part of our journey. | **代码**（开屏分两行展示，与配置需同步） |
| 文案 | 底部提示 | Swipe up to explore | **代码** |
| 图片 | Logo | `assets/icons/Icon black.png` | 配置 `brand.logoFull` |
| 图片 | 拼贴照片 ×6 | `assets/opening/collage-1.jpg` … `collage-6.jpg` | 配置 `opening.collage` |
| 交互 | 播放按钮 | 仅样式，暂无视频 | — |

**图片要求：** 活动横/竖图均可，建议清晰、有人物；6 张。

---

### 02 · Our Journey（历程）

| 类型 | 字段 | 当前文案 / 内容 | 维护方式 |
|------|------|-----------------|----------|
| 文案 | 标题 | Our Journey | 配置 `journey.title` |
| 文案 | 副标题 | From a small idea in 2023 to 3,000 members today. | 配置 `journey.subtitle` |
| 文案 | 2023 | We started with a simple idea, to support Business Analysts and build a welcoming space. | 配置 `journey.timeline[0].text` |
| 文案 | 2024 | More events, more connections, stronger community across Aotearoa New Zealand. | 配置 `journey.timeline[1].text` |
| 文案 | 2025 | We celebrated 2,000 members and saw the community continue to grow through events, stories and shared support. | 配置 `journey.timeline[2].text` |
| 文案 | 2026（高亮） | Now we're 3,000 strong, and the journey is still growing. | 配置 `journey.timeline[3].text` |
| 文案 | 底部提示 | Swipe up to next | **代码**（通用） |

**一致性注意：** 此处「3,000 members」须与开屏、数据页、结尾页数字一致。

---

### 03 · By the Numbers（数据）

| 类型 | 字段 | 当前文案 / 内容 | 维护方式 |
|------|------|-----------------|----------|
| 文案 | 标题 | By the Numbers | 配置 `stats.title` |
| 文案 | 副标题 | A look back at our impact together. | 配置 `stats.subtitle` |
| 数据 | Members | 3,000+ | 配置 `stats.items[0]` |
| 数据 | Events Hosted | 40+ · Online & in-person | 配置 `stats.items[1]` |
| 数据 | Guest Speakers | 60+ · Sharing their stories | 配置 `stats.items[2]` |
| 数据 | Volunteers | 22+ · Powering our community | 配置 `stats.items[3]` |
| 数据 | Countries | 35+ · Our members come from | 配置 `stats.items[4]` |
| 数据 | Avg. Event Rating | 4.8 / 5 · From 341 feedbacks | 配置 `stats.items[5]` |
| 文案 | 底部感谢语 | Thank you for making these numbers meaningful. | 配置 `stats.note` |

**一致性注意：**  
- 「3,000+ Members」必须与里程碑叙事一致。  
- 评分与 feedback 数量（341）需与真实数据一致，改一处要核对来源。

---

### 04 · Community Moments（社区瞬间）

| 类型 | 字段 | 当前文案 / 内容 | 维护方式 |
|------|------|-----------------|----------|
| 文案 | 标题 | Community / Moments（两行） | **代码** |
| 文案 | 副标题 | Behind every milestone are the people, stories and conversations that brought us here. | **代码** |
| 图片 | 照片 1 | `assets/moments/moment-1.jpg` | 配置 `moments[0]` |
| 图片 | 照片 2 | `assets/moments/moment-2.jpg` | 配置 `moments[1]` |
| 图片 | 照片 3 | `assets/moments/moment-3.jpg` | 配置 `moments[2]` |
| 图片 | 照片 4 | `assets/moments/moment-4.jpg` | 配置 `moments[3]` |
| 图片 | 照片 5 | `assets/moments/moment-5.jpg` | 配置 `moments[4]` |
| 文案 | 图片说明（可选） | Learning together / Networking night / … | 配置 `moments[].caption`（当前页为拼贴展示，caption 主要用于无障碍描述） |

**图片要求：** 5 张，建议横图，活动场景。

---

### 05 · Thank You — Speakers（感谢 · 嘉宾）

| 类型 | 字段 | 当前文案 / 内容 | 维护方式 |
|------|------|-----------------|----------|
| 文案 | 标题 | Our Speakers | 配置 `thankYou.categories.speakers.title` |
| 文案 | 引言 | Thank you for sharing your stories, experience and insights. You helped our community learn, reflect and grow. | 配置 `thankYou.categories.speakers.text` |
| 文案 | 大图标签 | Featured Talk | **代码** |
| 文案 | 引用 1 | Every talk adds a new perspective. | **代码** |
| 文案 | 引用 2 | Ideas shared today, impact tomorrow. | **代码** |
| 图片 | 标题装饰 | `assets/decor/speakers-heart-transparent.png` | **代码** |
| 图片 | 主图 | `assets/thanks/speakers-1.jpg` | **代码** |
| 图片 | 小图 2 | `assets/thanks/speakers-2.jpg` | **代码** |
| 图片 | 小图 3 | `assets/thanks/speakers-3.jpg` | **代码** |

---

### 06 · Thank You — Partners（感谢 · 合作方）

| 类型 | 字段 | 当前文案 / 内容 | 维护方式 |
|------|------|-----------------|----------|
| 文案 | 标题 | Our Partners | 配置 `thankYou.categories.partners.title` |
| 文案 | 引言 | Thank you for supporting our mission and helping create more opportunities for the community. | 配置 `thankYou.categories.partners.text` |
| 文案 | 底部强调 | Stronger together. / Shared goals. Greater impact. | **代码** |
| 图片 | 标题装饰 | `assets/decor/partners-handshake-transparent.png` | **代码** |
| 图片 | Honeycomb（配置有，视页面实现） | `assets/partners/partner-honeycomb.png` | 配置 `thankYou.categories.partners.image` |
| 图片 | 合作方 Logo ×19 | 见下方「合作方 Logo 列表」 | 配置 `thankYou.categories.partners.logos` |

**合作方 Logo 列表（名称须与对外宣传一致）：**

| 序号 | 机构名称 | 文件路径 |
|------|----------|----------|
| 1 | Otago Polytechnic | `assets/partners/logos/otago-polytechnic.png` |
| 2 | IIBA | `assets/partners/logos/iiba.png` |
| 3 | AUT | `assets/partners/logos/aut.png` |
| 4 | redvespa | `assets/partners/logos/redvespa.png` |
| 5 | Victoria University of Wellington | `assets/partners/logos/victoria-wellington.png` |
| 6 | nextwork | `assets/partners/logos/nextwork.png` |
| 7 | Dev Academy Aotearoa | `assets/partners/logos/dev-academy.png` |
| 8 | Potentia | `assets/partners/logos/potentia.png` |
| 9 | Summer of Tech | `assets/partners/logos/summer-of-tech.png` |
| 10 | CITANZ | `assets/partners/logos/citanz.png` |
| 11 | Bridging the Gap | `assets/partners/logos/bridging-the-gap.png` |
| 12 | Kiwibank | `assets/partners/logos/kiwibank.png` |
| 13 | Inside Business Analysis | `assets/partners/logos/inside-ba.png` |
| 14 | Powrsuit | `assets/partners/logos/powsuit.png` |
| 15 | ProductTank | `assets/partners/logos/product-tank.png` |
| 16 | ba&beyond | `assets/partners/logos/ba-beyond.png` |
| 17 | Timmy | `assets/partners/logos/timmy.png` |
| 18 | INSIDE on purpose | `assets/partners/logos/inside-on-purpose.png` |
| 19 | Hudson | `assets/partners/logos/hudson.png` |

**新增合作方：** 同时提供 **官方 Logo 文件** + **对外使用的机构全称**，避免名称与 LinkedIn 不一致。

> **技术说明：** 当前页面最多展示 **12 个** Logo（配置中有 19 个）。若需全部展示或调整顺序，请在提交单中注明，由开发修改。

---

### 07 · Thank You — Volunteers（感谢 · 志愿者）

| 类型 | 字段 | 当前文案 / 内容 | 维护方式 |
|------|------|-----------------|----------|
| 文案 | 标题 | Our Volunteers | 配置 `thankYou.categories.volunteers.title` |
| 文案 | 引言 | Thank you for your time, energy and care behind the scenes. You helped make this community possible. | 配置 `thankYou.categories.volunteers.text` |
| 文案 | 卡片 1 | Planning with care | **代码** |
| 文案 | 卡片 2 | Helping with heart | **代码** |
| 文案 | 底部强调 | Your dedication makes the difference. / Grateful for all you do. | **代码** |
| 图片 | 标题装饰 | `assets/decor/volunteers-heart-hand-transparent.png` | **代码** |
| 图片 | 主图 | `assets/thanks/volunteers-1.jpg` | **代码** |
| 图片 | 小图 2 | `assets/thanks/volunteers-2.jpg` | **代码** |
| 图片 | 小图 3 | `assets/thanks/volunteers-3.jpg` | **代码** |

---

### 08 · What's Next（展望）

| 类型 | 字段 | 当前文案 / 内容 | 维护方式 |
|------|------|-----------------|----------|
| 文案 | 标题 | What's Next | 配置 `whatsNext.title` |
| 文案 | 副标题 | Here's what we hope to keep building together. | 配置 `whatsNext.subtitle` |
| 文案 | 卡片 1 标题 | More practical career support | 配置 `whatsNext.items[0].text` |
| 文案 | 卡片 1 说明 | Guidance, resources and support for BA careers. | 配置 `whatsNext.items[0].detail` |
| 文案 | 卡片 2 标题 | More real-world BA stories | 配置 `whatsNext.items[1].text` |
| 文案 | 卡片 2 说明 | Stories and insights from real BA journeys. | 配置 `whatsNext.items[1].detail` |
| 文案 | 卡片 3 标题 | More opportunities to connect | 配置 `whatsNext.items[2].text` |
| 文案 | 卡片 3 说明 | More ways to learn, meet and grow together. | 配置 `whatsNext.items[2].detail` |
| 文案 | 底部图注 | Still growing, together. ♡ | **代码** |
| 图片 | 卡片图标 1 | `assets/whats-next/icon-career-support-transparent.png` | 配置 `whatsNext.items[0].icon` |
| 图片 | 卡片图标 2 | `assets/whats-next/icon-ba-stories-transparent.png` | 配置 `whatsNext.items[1].icon` |
| 图片 | 卡片图标 3 | `assets/whats-next/icon-connect-transparent.png` | 配置 `whatsNext.items[2].icon` |
| 图片 | 底部合影 | `assets/whats-next/cutted.png` | 配置 `whatsNext.bottomImage` |

---

### 09 · Your Voice（留言）

| 类型 | 字段 | 当前文案 / 内容 | 维护方式 |
|------|------|-----------------|----------|
| 文案 | 标题 | Your Voice | 配置 `feedback.title` |
| 文案 | 标题续 | is part of our story. | 配置 `feedback.subtitle` |
| 文案 | 问题 | What has BA Career meant to you? | 配置 `feedback.question` |
| 文案 | 引导 | Share a memory, a message, or an idea for what you would like to see next. | 配置 `feedback.prompt` |
| 文案 | 输入框占位 | Write your message... | 配置 `feedback.placeholder` |
| 文案 | 字数上限 | 500 | 配置 `feedback.maxLength` |
| 文案 | 提交按钮 | Share your message | **代码** |
| 文案 | 提交成功标题 | Message shared! | 配置 `feedback.successTitle` |
| 文案 | 提交成功说明 | Thank you for adding your voice to our story. | 配置 `feedback.successText` |
| 文案 | 提交后底部说明 | Your message will help us celebrate where we have been and shape what comes next. | 配置 `feedback.note` |
| 图片 | 标题装饰 | `assets/decor/speakers-heart-transparent.png` | **代码** |
| 图片 | 信封插图 | `assets/feedback/envelope-heart.png` | **代码** |
| 配置 | 表单提交 | Formspree 地址（当前为空，仅本地演示） | 配置 `feedback.formspreeEndpoint` |

---

### 10 · Closing（结尾）

| 类型 | 字段 | 当前文案 / 内容 | 维护方式 |
|------|------|-----------------|----------|
| 图片 | 整页视觉 | `assets/ending/ChatGPT Image Jul 13, 2026, 06_41_08 PM.png` | 配置 `closing.image` |

> 当前结尾为 **整图设计稿**（含文案与链接）。若改文案，需 **重新出图** 或改为开发拆分布局。  
> 配置中仍保留 `closing.links` 等字段，供后续改版或 LinkedIn 分享文案参考：

| 链接 | 标签 | URL |
|------|------|-----|
| Meetup | Meetup | https://www.meetup.com/ba-career-meetup-group/ |
| LinkedIn | LinkedIn | https://www.linkedin.com/company/ba-career |
| YouTube | YouTube | https://www.youtube.com/@bacareermeetup |
| Website | Website | https://analysis.nz/ |

---

## 3. 全局品牌与分享

| 项目 | 当前内容 | 维护方式 |
|------|----------|----------|
| 品牌名 | BA CAREER MEETUP | 配置 `brand.name` |
| Tagline | GROW WITH US | 配置 `brand.tagline` |
| 顶栏 / 开屏 Logo | `assets/icons/Icon black.png` | 配置 `brand.logoIcon` / `logoFull` |
| 浏览器标题 | BA Career Meetup — 3,000 Members Celebration | `index.html` |
| LinkedIn 分享标题 | 同上 | `index.html` og:title |
| LinkedIn 分享描述 | A journey from our first meetup to 3,000 members... | `index.html` og:description |
| LinkedIn 预览图 | `assets/og/og-image.jpg`（待提供，当前为 svg 占位） | `index.html` og:image |

---

## 4. 信息一致性规则（必守）

为避免「改了一处、漏了另一处」，以下信息视为 **全局锚点**，任何修改必须 **整站同步核对**：

| 锚点 | 当前值 | 出现位置 |
|------|--------|----------|
| 里程碑人数 | **3,000** / 3,000+ | 01 开屏、02 历程副标题、02 2026 节点、03 Members、10 结尾图 |
| 2025 里程碑 | **2,000 members** | 02 历程 2025 节点 |
| 成立起点 | **2023** | 02 历程 |
| 当前年份节点 | **2026** | 02 历程高亮 |
| 活动场次 | **40+** | 03 数据 |
| 嘉宾人数 | **60+** | 03 数据 |
| 志愿者 | **22+** | 03 数据 |
| 国家数 | **35+** | 03 数据 |
| 活动评分 | **4.8 / 5**（341 feedbacks） | 03 数据 |
| 品牌名 | **BA Career / BA CAREER MEETUP** | 顶栏、分享 meta |
| 外链 URL | Meetup / LinkedIn / YouTube / Website | 10 结尾（图内）、配置 `closing.links` |

**建议：** 运营维护一份 **「主数据表」**（Excel / Google Sheet），网站只从该表抄录，不各自改数字。

---

## 5. 内容更新流程（推荐）

### 5.1 原则

1. **单一信息源**：数字、年份、机构名称以主数据表为准。  
2. **一次提单、整页核对**：改某一屏时，顺带检查「一致性规则」表。  
3. **图片与文案分开标注**：换图用「替换文件」；改字用「字段 + 新文案」。  
4. **不要只发截图**：请标明 **页面编号（01–10）** 和 **字段名**（见上文表格）。

### 5.2 运营提交模板

复制以下模板填写，发给负责同事或开发：

```
【BA Career 3000 Wrap 内容更新】
日期：
提交人：

--- 修改 1 ---
页面编号：例如 03
字段：例如 stats.items[0] — Members 数字
现文案/现值：3000+
新文案/新值：3100+
原因/数据来源：（如 Meetup 后台截图日期）

--- 修改 2 ---
页面编号：例如 06
类型：新增合作方 Logo
机构全称：
Logo 文件：（附件 PNG 透明底）
在列表中的排序：（可选）

--- 修改 3 ---
页面编号：例如 01
类型：替换图片
文件：collage-3.jpg
附件：（图片文件，保持文件名或注明新文件名）
```

### 5.3 图片更新方式

| 方式 | 适用 | 操作 |
|------|------|------|
| **同名覆盖** | 只换图、不改结构 | 用新文件覆盖 `assets/` 下同名文件，刷新网页 |
| **新增文件** | 新 Logo、新拼贴 | 放入对应文件夹 + 在提交单中说明路径 |
| **改文件名** | 批量换图 | 需同步改 `js/content.js` 中路径（开发处理） |

**图片规范简要：**

| 用途 | 格式 | 建议 |
|------|------|------|
| Logo | PNG 透明底 | 机构官方版本 |
| 开屏 / Moments / Thanks 照片 | JPG | 清晰、可辨认人物，单张 &lt; 500KB 为宜 |
| What's Next 图标 | PNG 透明底 | 正方形，与现有三枚风格一致 |
| 结尾 / OG 图 | PNG 或 JPG | 结尾按设计稿；OG 固定 **1200×630** |

### 5.4 修改后验收清单

- [ ] 手机 Chrome / Safari 逐屏滑动检查  
- [ ] 数字与主数据表一致（尤其 3000、40+、60+ 等）  
- [ ] 合作方名称与 Logo 一一对应  
- [ ] 英文拼写、标点（ curly apostrophe `'` vs straight `'` ）统一  
- [ ] 新图片是否被裁切异常（What's Next 底部、开屏拼贴）  
- [ ] LinkedIn 分享预览（标题、描述、og 图）  
- [ ] 留言表单是否可提交（Formspree 接入后）

---

## 6. 配置文件说明（给技术同事）

| 文件 | 作用 |
|------|------|
| `js/content.js` | **主文案与数据配置**（运营改动的第一入口） |
| `js/app.js` | 页面结构与部分硬编码文案 |
| `assets/` | 所有图片素材 |
| `index.html` | 页面标题、LinkedIn 分享 meta |
| `css/main.css` | 样式（一般运营不改） |

**上线流程：** 更新 `content.js` / 图片 → 本地预览 → 提交 Git → Cloudflare Pages 自动部署。

---

## 7. 当前待补素材（运营可优先安排）

| 页面 | 缺失文件 |
|------|----------|
| 01 开屏 | `opening/collage-1.jpg` … `collage-6.jpg` |
| 04 Moments | `moments/moment-1.jpg` … `moment-5.jpg` |
| 05 Speakers | `thanks/speakers-1.jpg` … `speakers-3.jpg` |
| 07 Volunteers | `thanks/volunteers-1.jpg` … `volunteers-3.jpg` |
| 分享 | `og/og-image.jpg`（1200×630） |
| 表单 | Formspree endpoint（上线前配置） |

---

## 8. 附录：配置字段速查（content.js）

```
brand.name / tagline / logoFull / logoIcon
opening.badge / headline / headlineScript / subcopy / collage[]
journey.title / subtitle / timeline[].year / text
stats.title / subtitle / items[] / note
moments[].image / caption
thankYou.categories.speakers|partners|volunteers.title / text / logos[]
whatsNext.title / subtitle / items[].text / detail / icon / bottomImage
feedback.title / subtitle / question / prompt / placeholder / note / formspreeEndpoint
closing.image / links[]
```

---

## 9. 文档修订记录

| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0 | 2026-07-13 | 首版：10 屏文案与图片清单、更新流程、一致性规则 |

**文档维护人：** 与 `js/content.js` 同步更新；页面结构变更时需同步修订本手册。
