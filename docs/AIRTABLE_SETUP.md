# Airtable Feedback Setup

User stays on the Wrap page. Messages are saved to your Airtable base via a Cloudflare Pages Function (`/api/feedback`). The Airtable token never goes in the browser.

## 1. Create the Airtable table

1. Open [airtable.com](https://airtable.com) and create a base (e.g. **BA Career Wrap**).
2. Create a table named **`Feedback`** (or note your table name for step 4).
3. Add columns:

| Column name | Field type | Notes |
|-------------|------------|--------|
| **Message** | Long text | Required — user message |
| **Source** | Single line text | Auto-filled as `3000 Wrap` |
| **Created** | Created time | Optional — Airtable auto timestamp |

4. Copy the **Base ID** from the URL: `https://airtable.com/appXXXXXXXXXXXXXX/...` → `appXXXXXXXXXXXXXX`

## 2. Create a Personal Access Token

1. [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Name: `BA Career 3000 Wrap`
3. Scopes: **`data.records:write`** (and **`data.records:read`** if you want to verify in scripts)
4. Access: limit to your base only
5. Create token and copy it (shown once)

## 3. Add secrets on Cloudflare Pages

In your Pages project → **Settings** → **Environment variables** (Production + Preview):

| Variable | Example |
|----------|---------|
| `AIRTABLE_TOKEN` | `patXXXXXXXX....` |
| `AIRTABLE_BASE_ID` | `appXXXXXXXXXXXXXX` |
| `AIRTABLE_TABLE_NAME` | `Feedback` |

Redeploy after saving variables.

## 4. Frontend config

In `js/content.js`:

```javascript
submitEndpoint: '/api/feedback',
```

Leave `formspreeEndpoint` empty unless you switch back to Formspree.

## 5. Test

1. Deploy to Cloudflare Pages (Functions in `/functions` deploy automatically).
2. Open the live site → **Your Voice** screen.
3. Submit a test message.
4. Check the **Feedback** table in Airtable.

**Local `python -m http.server`:** `/api/feedback` will not run. Use deployed Pages URL, or install Wrangler and run `npx wrangler pages dev .`

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 503 Not configured | Set all three env vars on Cloudflare and redeploy |
| 502 Could not save | Check token scopes, base access, column names (`Message`, `Source`) |
| Success UI but no row | Wrong `AIRTABLE_BASE_ID` or table name |
| CORS errors | Should not happen — same-origin `/api/feedback` |

## Export / ops

- Filter and view messages in Airtable
- **Download CSV** from Airtable anytime
- Optional: add columns `Status`, `Featured` for moderation
