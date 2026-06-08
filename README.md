# Sankalpa Sovan Samal — Portfolio v2.0

Production-ready portfolio website built with React 18, TypeScript, and Vite.  
Inspired by Linear, Vercel, Framer, and Raycast.

**Live:** https://portfolio-v2-theta-lemon.vercel.app/

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | CSS Modules + CSS Custom Properties |
| Fonts | Bricolage Grotesque + JetBrains Mono |
| Icons | Devicon (CDN) |
| Forms | Formspree |
| GitHub Stats | github-readme-stats + streak-stats |
| Deployment | GitHub Pages (Actions) / Vercel |

---

## Folder Structure

```
portfolio-react-ts/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── 404.html                        ← GitHub Pages SPA fix
│   └── Resume_Sankalpa_Sovan_Samal.pdf ← [ADD YOUR RESUME HERE]
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── GitHubStats.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.module.css
│   │   ├── Hero.module.css
│   │   ├── About.module.css
│   │   ├── Education.module.css
│   │   ├── Projects.module.css
│   │   ├── Research.module.css
│   │   ├── Skills.module.css
│   │   ├── Certifications.module.css
│   │   ├── GitHubStats.module.css
│   │   ├── Contact.module.css
│   │   └── Footer.module.css
│   ├── data/
│   │   └── portfolio.ts                ← ALL content lives here
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Installation

```bash
# 1. Clone your repository
git clone https://github.com/sannskaarr/portfolio-react-ts.git
cd portfolio-react-ts

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Opens at http://localhost:5173/portfolio-react-ts/
```

---

## Before Deploying — Checklist

### 1. Add your Resume PDF
Place your resume at:
```
public/Resume_Sankalpa_Sovan_Samal.pdf
```

### 2. Update LinkedIn URL
In `src/components/Hero.tsx` and `src/components/Contact.tsx`, replace:
```
https://linkedin.com/in/sankalpasovansamal
```
With your actual LinkedIn profile URL.

### 3. Set up Formspree (Contact Form)
1. Go to https://formspree.io and create a free account
2. Create a new form
3. Copy your form ID (looks like `xrgvkpqz`)
4. Open `src/components/Contact.tsx` and replace:
```tsx
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
```
with your actual ID.

### 4. Update GitHub username (if different)
In `src/components/GitHubStats.tsx`:
```tsx
const GITHUB_USER = "sankalpa-dot"; // update if your username changed
```

### 5. Add real project URLs
In `src/data/portfolio.ts`, update `githubUrl` and `liveUrl` for each project.

### 6. Update certificate URLs
In `src/data/portfolio.ts`, update `credentialUrl` for each certification with your actual NPTEL certificate links.

### 7. Update OG image
Add an `og-image.png` (1200×630px) to `public/` for social media previews.

---

## Deployment

### GitHub Pages (Recommended — Free)

#### One-time setup:
1. Push your code to the `main` branch on GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. The `.github/workflows/deploy.yml` handles everything automatically

```bash
git add .
git commit -m "feat: complete portfolio v2.0 rebuild"
git push origin main
```

The site deploys to: `https://sankalpa-dot.github.io/portfolio-react-ts/`

#### Manual deploy (alternative):
```bash
npm run build
npm run deploy
```

---

### Vercel (Fastest — Recommended for Custom Domain)

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"** → Import `portfolio-react-ts`
3. Set these build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Under **Environment Variables**, none required
5. Click **Deploy**

> **Important for Vercel:** In `vite.config.ts`, change `base` from `"/portfolio-react-ts/"` to `"/"`:
> ```ts
> base: "/",
> ```

---

## Updating Content

All portfolio content is centralized in **one file**:

```
src/data/portfolio.ts
```

Edit this file to update:
- Projects (add new projects, update GitHub links)
- Education entries
- Certifications
- Research papers
- Research interests
- Skills and proficiency levels
- Achievement stats

---

## Customization Guide

### Change accent colors
In `src/styles/global.css`, edit CSS variables:
```css
:root {
  --accent: #63b3ed;    /* Primary accent (blue) */
  --accent-2: #76e4bc;  /* Secondary accent (teal) */
}
```

### Change fonts
In `index.html`, replace the Google Fonts link. Then update in `global.css`:
```css
--font-display: 'Your Font', sans-serif;
--font-mono: 'Your Mono Font', monospace;
```

### Add a profile photo
1. Add your photo to `public/profile.webp` (compress to under 100KB using squoosh.app)
2. In `src/components/Hero.tsx`, add an `<img>` tag inside `.inner`

---

## Performance Targets

| Metric | Target |
|---|---|
| Performance | 95+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 95+ |
| First Contentful Paint | < 1.5s |
| Bundle Size | < 200KB gzipped |

To check: Run Lighthouse in Chrome DevTools on the deployed site.

---

## Accessibility Features

- Skip-to-content link
- ARIA labels on all interactive elements
- `aria-current="page"` on active nav links
- `aria-live` regions for form status messages
- `aria-expanded` on accordion toggles
- `role="list"` on semantic list containers
- Full keyboard navigation
- Focus-visible styles (no outline suppression)
- WCAG 2.1 AA color contrast on all text

---

## SEO Features

- Meta title + description
- Open Graph tags (Facebook/WhatsApp)
- Twitter Card tags
- JSON-LD structured data (Person schema)
- Canonical URL
- `robots.txt`
- `sitemap.xml`
- Semantic HTML5 landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`)

---

## Things to Mark `[REPLACE]`

Search for `[REPLACE` in the codebase to find all placeholder items:

| File | Item |
|---|---|
| `src/data/portfolio.ts` | MEDEXA GitHub URL |
| `src/data/portfolio.ts` | IoT project GitHub URL |
| `src/data/portfolio.ts` | NPTEL certificate exact URLs |
| `src/data/portfolio.ts` | Research paper URLs (when published) |
| `src/data/portfolio.ts` | Live demo URLs for projects |
| `src/components/Contact.tsx` | Formspree form ID |
| `public/` | `Resume_Sankalpa_Sovan_Samal.pdf` |
| `public/` | `og-image.png` (1200×630px) |
| `index.html` | LinkedIn URL (update to real profile) |

---

## License

MIT — feel free to adapt this portfolio for your own use

---

*Built by Sankalpa Sovan Samal · June 2026*
