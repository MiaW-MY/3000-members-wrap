# BA Career Meetup — 3,000 Members Wrap

Mobile-first H5 celebration page. Swipe through 15 short screens.

## Quick preview

**Easiest — double-click `start.command` in Finder** (macOS).

Or in Terminal:

```bash
cd /Users/miaw/dev/3000-members-wrap
python3 -m http.server 8080
# Open http://localhost:8080
```

> Do **not** open `index.html` directly — use a local server.

## Project structure

```
index.html
css/main.css
js/content.js       ← Copy, stats, links, image paths
js/app.js
assets/             ← Put photos & logos here (see assets/README.md)
docs/PRODUCT_SPEC.md
UI/                 Design reference mockups
```

## Replace images

See **`assets/README.md`** for the full checklist.

Put files in `assets/` subfolders — filenames should match `js/content.js` (e.g. `assets/opening/collage-1.jpg`).

## Formspree (Phase 2)

1. Create a form at [formspree.io](https://formspree.io)
2. Set `feedback.formspreeEndpoint` in `js/content.js`

## Deploy to Cloudflare Pages

Static site — no build step. Upload project root or connect Git with empty build command.

## LinkedIn sharing

Add `assets/og/og-image.jpg` (1200×630) and ensure `og:image` in `index.html` points to it.
