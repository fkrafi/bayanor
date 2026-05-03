# BAYANOR — Premium Global Trading Website

> UAE-based premium trading house. Global Trade. Refined.

A luxury Arabic-modern minimalist corporate Jekyll website for **BAYANOR**, a Dubai-based B2B global trading company. Built for GitHub Pages deployment with zero backend dependencies.

---

## Live Site

**https://fkrafi.github.io/bayanor**

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Jekyll (GitHub Pages native)        |
| Markup      | HTML5 + Liquid templates            |
| Styling     | SCSS (compiled by Jekyll)           |
| JavaScript  | Vanilla JS (ES6+, no dependencies)  |
| Fonts       | Google Fonts (Cormorant, Inter, Playfair) |
| Deployment  | GitHub Pages (automatic)            |

---

## Project Structure

```
bayanor/
├── _config.yml              # Jekyll site configuration
├── index.md                 # Homepage (all sections)
├── about.md                 # About page
├── contact.md               # Contact page
│
├── _layouts/
│   ├── default.html         # Base layout (head, navbar, footer)
│   └── page.html            # Inner page layout
│
├── _includes/
│   ├── navbar.html          # Sticky luxury navbar
│   ├── hero.html            # Cinematic hero section
│   └── footer.html          # Minimal luxury footer
│
└── assets/
    ├── css/
    │   └── style.scss       # Complete SCSS stylesheet
    ├── js/
    │   └── script.js        # Vanilla JS interactions
    └── images/
        ├── favicon.svg      # SVG favicon (add your own)
        └── og-image.png     # Open Graph image (add your own)
```

---

## Features

- **Sticky Navbar** — Transparent-to-solid scroll effect with mobile hamburger menu
- **Hero Section** — Cinematic dark luxury with Arabic geometric SVG patterns, gold glow orbs, and animated scroll indicator
- **About Section** — Brand story, value propositions, and animated stat counters
- **Services Grid** — Glassmorphism cards for 5 product categories with gold hover accents
- **Why BAYANOR** — Six-pillar feature grid with animated gold underline effect
- **Global Presence** — SVG world map with animated pulsing location dots
- **Contact Section** — Luxury form with client-side validation + Formspree integration
- **Dark/Light Theme** — Toggle with `localStorage` persistence
- **Scroll Reveal** — IntersectionObserver-based fade and slide animations
- **Animated Counters** — Stats that count up when scrolled into view
- **Back to Top** — Smooth scroll button with visibility transition
- **SEO Ready** — Meta tags, Open Graph, Twitter Card, canonical URLs
- **Fully Responsive** — Mobile-first, tested at 480px / 768px / 1024px / 1280px

---

## Deploy to GitHub Pages

### Option A — Automatic (Recommended)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **`main` branch**, folder **`/ (root)`**
4. GitHub Pages will build and deploy automatically using Jekyll

```bash
git add .
git commit -m "Initial BAYANOR website"
git push origin main
```

Site will be live at: `https://<your-username>.github.io/bayanor`

### Option B — GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Jekyll to Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/jekyll-build-pages@v1
        with:
          source: ./
          destination: ./_site
      - uses: actions/upload-pages-artifact@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

## Local Development

```bash
gem install jekyll bundler

# Create Gemfile
cat > Gemfile << 'EOF'
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
gem "jekyll-seo-tag"
gem "jekyll-sitemap"
EOF

bundle install
bundle exec jekyll serve --livereload
```

Open **http://localhost:4000/bayanor**

---

## Customisation

### Contact form — Formspree
Replace the form action in `index.md` and `contact.md`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### WhatsApp number
Replace `wa.me/971000000000` with your WhatsApp Business number.

### Images to add
- `assets/images/favicon.svg` — SVG favicon
- `assets/images/og-image.png` — 1200×630px Open Graph image

---

## Brand Palette

| Token        | Value       |
|--------------|-------------|
| Matte Black  | `#0F0F0F`   |
| Deep Charcoal| `#1A1A1A`   |
| Metallic Gold| `#C8A96B`   |
| Soft Ivory   | `#F5F1E8`   |

---

© 2025 BAYANOR Trading. Dubai, United Arab Emirates.