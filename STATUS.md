# zarant77.github.io — Project Status

Static personal website (landing + CV + portfolio)  
Built with: Node.js + EJS  
Deployment: GitHub Pages (docs/ folder)

---

## 🎯 Project Purpose

Professional landing page for:
- CV (Playable Ads + Backend/Fullstack)
- Selected projects
- Public portfolio
- Clean, serious presentation

Architecture:
JSON → EJS → Static HTML → docs/ → GitHub Pages

Single language: English  
Single version: latest only  

---

## 📁 Current Structure

.
├── docs/                # Generated output (GitHub Pages root)
│   ├── index.html
│   ├── assets/
│   ├── demos/
│   └── cv/
│       ├── playable.html
│       └── backend.html
│
├── src/
│   ├── data/            # Single source of truth
│   │   ├── contacts.json
│   │   ├── cv.json
│   │   ├── projects.json
│   │   └── site.json
│   │
│   └── templates/
│       ├── index.ejs
│       └── cv.ejs
│
├── src-static/          # Static files copied as-is
│   ├── assets/
│   └── demos/
│
├── tools/build/
│   └── build.mjs        # Static site generator
│
├── package.json
└── README.md

---

## 🔧 Build System

Command:

npm run build

Process:

1. Clean docs/
2. Copy src-static/assets → docs/assets
3. Copy src-static/demos → docs/demos
4. Generate index.html from:
   - contacts.json
   - site.json
   - projects.json
   - cv.json (landing blocks)
5. Generate:
   - docs/cv/playable.html
   - docs/cv/backend.html
   from cv.json (page blocks)

Deployment:
GitHub Pages → main branch → /docs

---

## 📄 CV Architecture

cv.json structure:

{
  "playable": {
    "landing": { ... },  // used on homepage
    "page": { ... }      // used for cv.ejs
  },
  "backend": {
    "landing": { ... },
    "page": { ... }
  }
}

Landing:
- title
- badge
- text
- href
- pdf

Page:
- pageTitle
- metaDescription
- titleTagline
- summary
- sections[]

---

## 📦 Static Assets

All static content lives in:

src-static/

Never edit files directly in docs/.

---

## 🧠 Design Philosophy

- Minimalistic
- Serious
- No unnecessary animations
- Clean typography
- Dark theme
- Performance-first
- Data-driven content

---

## 🚀 Next Planned Improvements

- [ ] Auto-generate PDF from HTML (Playwright/Puppeteer)
- [ ] Extract partials (header/footer) in EJS
- [ ] Improve Backend CV content depth
- [ ] Add structured data (JSON-LD for SEO)
- [ ] Add sitemap.xml
- [ ] Improve OG image dynamic generation
- [ ] Add version tag in footer (build timestamp)

---

## ⚠️ Important Rules

- Never manually edit docs/ files
- All changes must happen in:
  - src/data
  - src/templates
  - src-static
- Always rebuild after changes

---

## 🧩 Tech Stack

Node.js (ESM)
EJS
Vanilla CSS
Vanilla JS
GitHub Pages

No frameworks.
No runtime.
Pure static output.

---

## 👤 Owner

Anton Zarubin  
Senior Software Engineer  
Backend / Fullstack · Playable Ads · Performance Engineering

---

End of status.
