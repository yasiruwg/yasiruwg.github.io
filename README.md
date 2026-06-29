# Yasiru Wijenayake — Portfolio

Personal portfolio website for a Unity Game Developer & Software Engineer.

**Stack:** React 19 · Vite 8 · Tailwind CSS v4 · Framer Motion · React Icons

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment — GitHub Pages

### Option 1: Static deploy (recommended)

1. Build the project:
   ```bash
   npm run build
   ```
2. The `dist/` folder contains the static site.
3. Push the `dist/` contents to the `gh-pages` branch, **or** configure GitHub Pages to serve from the `dist/` folder on `main`.

### Option 2: GitHub Actions (automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Customization

| File | What to edit |
|---|---|
| `src/data/index.js` | All content — projects, skills, experience, stats, social links |
| `src/index.css` | Color palette (`--color-*` CSS variables) |
| `public/resume.pdf` | Drop your resume PDF here |
| `public/og-image.png` | Open Graph preview image (1200×630) |
| `index.html` | SEO meta tags, page title |

---

## Project Structure

```
src/
├── App.jsx                    # Root component + loading state
├── main.jsx                   # React entry point
├── index.css                  # Global styles + Tailwind + CSS vars
├── data/
│   └── index.js               # All site content (single source of truth)
├── hooks/
│   ├── useActiveSection.js    # Intersection Observer for nav highlighting
│   ├── useScrollProgress.js   # Scroll progress bar %
│   └── useTheme.js            # Dark/light mode toggle
└── components/
    ├── ui/
    │   ├── BackToTop.jsx
    │   ├── Button.jsx
    │   ├── Loader.jsx
    │   ├── SectionHeading.jsx
    │   ├── SectionWrapper.jsx
    │   └── Tag.jsx
    └── sections/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Stats.jsx
        ├── Education.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
