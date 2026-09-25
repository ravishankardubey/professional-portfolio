# Ravi Shankar Dubey — portfolio

Source for [ravishankardubey.in](https://ravishankardubey.in). It's a fully static site built with [Astro](https://astro.build), TypeScript and SCSS.

The same content is shown in two designs:

| Route | Design | Default theme |
| --- | --- | --- |
| `/` | **Editorial**: serif display type, warm paper, terracotta accent | Follows the OS setting |
| `/console/` | **Console**: grotesk + mono type, code-card hero, amber accent | Dark |

Both have a light/dark toggle (saved per browser), a mobile menu, and links to each other in the footer.

## Editing content

**All content lives in [`src/data/profile.ts`](src/data/profile.ts).** That covers the bio, experience, projects, skills, education, contact details and each page's SEO title, description and social image. It's typed, so `npm run build` catches a missing or misspelled field.

- "N+ years" is calculated automatically from the career start date at the top of the file.
- Projects marked `featured: true` get the large cards in the Editorial design.
- Section order and nav labels are in [`src/data/sections.ts`](src/data/sections.ts).

If you change your name, role or headline, regenerate the social-preview images:

```sh
npm run og   # writes public/og/*.png and public/apple-touch-icon.png (needs Chromium; set CHROMIUM_PATH if it isn't found)
```

## Development

Requires Node 22.12+ (see `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check, then build static HTML into dist/
npm run preview   # serve dist/ locally
```

## What's included

- **Static output**: every route is prerendered HTML. The only JavaScript is a tiny inline theme script plus about 1 KB for the toggle and menu.
- **SEO**: a per-page `<title>`, meta description, canonical URL, Open Graph and Twitter card tags, JSON-LD `Person` data, `sitemap-index.xml` and `robots.txt`.
- **Accessibility**: a skip link, landmarks, one `h1` per page, visible focus rings, 44px touch targets, `aria-pressed`/`aria-expanded` on the toggles, reduced-motion support, and colour contrast that meets WCAG AA in both themes. axe-core reports zero violations on every page, in both themes, at 1440px and 390px.
- **Performance**: self-hosted variable fonts (`@fontsource-variable`) and inlined CSS. Lighthouse (mobile and desktop) scores 99–100 in Performance, Accessibility, Best Practices and SEO on both designs.

## Project layout

```
src/
  data/profile.ts        ← all content
  data/sections.ts       ← section ids + nav labels
  layouts/Base.astro     ← <html>, theme bootstrap, toggle/menu script
  components/            ← Seo, Icon, ThemeToggle
  pages/index.astro      ← Editorial design
  pages/console/         ← Console design
  pages/404.astro
  styles/                ← base.scss, editorial.scss, console.scss, _mixins.scss
public/                  ← favicon, OG images, robots.txt
scripts/generate-og.mjs  ← renders the OG images
design/                  ← design mockups (reference only, never deployed)
```

## Deploying

`npm run build` outputs a plain static site in `dist/`, which works on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). The canonical domain is set by `site` in `astro.config.mjs` and in `public/robots.txt`.
