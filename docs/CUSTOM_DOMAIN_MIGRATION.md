# 自定义域名迁移指南

把 Wrap 从 `3000-members-wrap-site.pages.dev` 绑到自有域名 **`bacareer-3000-wrapup.easygoat.co.nz`**，用于 LinkedIn 可点击链接卡片、更正式的分享 URL。

---

## 你最关心的问题

### 1. 两个链接可以同时用吗？

**可以。** Cloudflare Pages 绑自定义域名后，**同一个站点、同一份部署**会同时有两个入口：

| 入口 | 示例 | 迁移后 |
|------|------|--------|
| Pages 默认域名 | `https://3000-members-wrap-site.pages.dev/` | ✅ 继续可用 |
| 自定义域名 | `https://bacareer-3000-wrapup.easygoat.co.nz/` | ✅ 新增 |

- 不需要「搬家」或换主机
- 不需要停旧链接
- 改代码 push 一次，**两个域名同步更新**

**对外建议：** LinkedIn / 邮件 / 海报只发**新域名**；旧 `pages.dev` 留给已发出的链接，自然过渡即可。

---

### 2. 两个链接同时可用，后台数据会混在一起吗？

**会进同一个后台，但不算「乱」，而是「汇总到一处」。** 分项说明如下：

#### Google Analytics（`G-VT3J1LFYX7`）

| 项目 | 说明 |
|------|------|
| 是否同一个后台 | ✅ 是，两个域名共用同一个 GA 属性 |
| 会不会分不清来源 | ⚠️ 默认看**总量**；需要时可按 **hostname（主机名）** 筛选 |
| 是否推荐分开 | 一般**不需要**两个 GA 项目；campaign 看总访问 + 按 hostname 拆分即可 |

在 GA4 里查看示例：

- **Reports → Engagement → Pages and screens**，加维度 **Hostname**
- 或探索报告里筛选：
  - `3000-members-wrap-site.pages.dev`
  - `bacareer-3000-wrapup.easygoat.co.nz`

screen_view / wrap_* 事件在两个域名下都会正常上报，**不会丢数据**。

#### Airtable Feedback（`/api/feedback`）

| 项目 | 说明 |
|------|------|
| 是否同一个表 | ✅ 是，两个域名的提交都进同一张 Feedback 表 |
| 会不会混在一起 | ✅ 消息都在一起，**目前 Source 固定为 `3000 Wrap`**，**不区分**从哪个域名提交 |
| 是否有问题 | 对运营来说通常是**好事**（一个 inbox）；若以后要区分域名，见下文「可选增强」 |

Feedback 用的是相对路径 `/api/feedback`，绑新域名后**无需改 API 配置**，Airtable Token 仍是 Pages 环境变量。

#### 浏览器 localStorage（仅影响个别用户体验）

| 项目 | 说明 |
|------|------|
| 是否共享 | ❌ **不共享**（不同域名 = 不同 origin） |
| 实际影响 | 用户在 `pages.dev` 提交过 feedback 后，用新域名打开会**再看一次表单**（不是 bug） |
| 严重程度 | 低；只影响极少数两个链接都点过的人 |

---

### 3. 数据汇总一览

```
                    ┌─────────────────────────┐
  pages.dev ───────►│                         │
                    │   同一份 Wrap 站点       │
  bacareer-3000-wrapup.easygoat.co.nz ───►│   同一次 git deploy      │
                    └───────────┬─────────────┘
                                │
            ┌───────────────────┼───────────────────┐
            ▼                   ▼                   ▼
     Google Analytics      Airtable Feedback    Cloudflare Pages
     （一个属性，可按        （一张表，Source      （一份部署，两个
      hostname 拆分）         = 3000 Wrap）         域名入口）
```

**结论：**

- **不会**出现两套后台、也不会丢数据
- **会**汇总到同一 GA + 同一 Airtable（campaign 统计通常就要这样）
- 若只想看新域名流量：GA 里按 hostname 筛；Airtable 目前需手动或后续加字段区分

---

## 迁移难度与耗时

| 步骤 | 耗时 | 难度 |
|------|------|------|
| Cloudflare 绑域名 | ~5 分钟 | 低 |
| DNS 生效 | 5–30 分钟（偶发 1 小时） | 自动 |
| 改 `index.html` OG 链接 | ~5 分钟 | 低 |
| push 部署 | ~2 分钟 | 低 |
| LinkedIn Post Inspector 刷新 | ~2 分钟 | 低 |

**总计约 30 分钟以内**，无需改 Wrap 业务逻辑、Airtable 或 GA 配置。

---

## 操作步骤

### Step 1 — Cloudflare 绑域名

1. 打开 [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages**
2. 进入项目 **3000-members-wrap**（或 `3000-members-wrap-site`）
3. 打开 **Custom domains** → **Set up a custom domain**
4. 输入子域名，例如：`bacareer-3000-wrapup.easygoat.co.nz`
5. 若 `easygoat.co.nz` 已在同一 Cloudflare 账号，DNS 通常**自动添加**；按提示确认即可
6. 等到状态为 **Active**

### Step 2 — 改代码里的分享链接（OG 标签）

编辑 `index.html`，把所有 `https://3000-members-wrap-site.pages.dev` 换成新域名，例如 `https://bacareer-3000-wrapup.easygoat.co.nz`：

- `og:url`
- `og:image` / `og:image:secure_url`
- `twitter:image`
- `link rel="image_src"`

然后 commit、push，等 Pages 部署完成。

### Step 3 — 验证站点

在新域名打开并检查：

- [ ] 首页 Wrap 正常滑动
- [ ] `https://bacareer-3000-wrapup.easygoat.co.nz/og-image.jpg` 能打开
- [ ] Feedback 提交一条测试，Airtable 能收到
- [ ] 旧链接 `pages.dev` 仍可访问（可选抽查）

### Step 4 — LinkedIn

1. 打开 [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. 粘贴 **`https://bacareer-3000-wrapup.easygoat.co.nz/`**（不要带 `?v=` 参数）
3. 确认 Title / Description / Image 正常
4. 发帖**只用新域名**；Composer 里应出现可点击的 link card

若仍无预览：登录 Cloudflare → 点 **easygoat.co.nz**（域名，不是 Pages 项目）→ **Security → Events**，看 LinkedInBot 是否被拦截；必要时加 WAF 规则 Skip `LinkedInBot`。

---

## 可选增强（非必须）

### A. Airtable 里区分来源域名

若希望 feedback 记录从哪个域名提交，可改 `functions/api/feedback.js`，把 `Source` 改为包含 hostname，或增加一列 **URL / Domain**（需 Airtable 加列）。

### B. 旧域名 301 跳转到新域名

在项目根目录 `_redirects` 增加（**会断开**仍使用旧链接的用户习惯，campaign 期间一般**先不做**）：

```
https://3000-members-wrap-site.pages.dev/* https://bacareer-3000-wrapup.easygoat.co.nz/:splat 301
```

### C. GA 里固定只看新域名

在 GA4 探索报告中保存一个 segment：`Hostname = bacareer-3000-wrapup.easygoat.co.nz`，作为 LinkedIn campaign 主报告。

---

## 常见问题

**Q：绑域名要另外付钱吗？**  
A：Cloudflare Pages 绑自有域名不额外收费；域名年费照常（你已有 `easygoat.co.nz` 即可）。

**Q：Feedback / Analytics 要重新配置吗？**  
A：不用。GA ID 不变；Airtable 环境变量在 Pages 项目上，跟域名无关。

**Q：只发新链接，旧 posts.dev 还会有人点吗？**  
A：若之前已发出旧链接，仍可用；新帖统一用新域名即可。

**Q：子域名用哪个好？**  
A：当前 campaign 使用 **`bacareer-3000-wrapup.easygoat.co.nz`**（BA Career + 3000 wrap-up，托管在 easygoat.co.nz）。

---

## 检查清单（迁移当天）

- [ ] Custom domain 状态 Active
- [ ] `index.html` OG 已改为新域名并已部署
- [ ] 新域名 Wrap + Feedback 测试通过
- [ ] LinkedIn Post Inspector 通过
- [ ] LinkedIn 发帖使用新 URL
- [ ] （可选）GA 加 Hostname 维度备查

---

## 相关文件

| 文件 | 迁移时是否修改 |
|------|----------------|
| `index.html` | ✅ 改 OG / 分享 URL |
| `js/content.js` | ❌ 一般不用（无绝对 URL） |
| `js/app.js` | ❌ 不用 |
| `functions/api/feedback.js` | ❌ 不用（除非要做来源域名区分） |
| Cloudflare Pages 环境变量 | ❌ 不用 |

更多 Feedback 配置见 [AIRTABLE_SETUP.md](./AIRTABLE_SETUP.md)。
