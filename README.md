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
  pages/404.astro, robots.txt.ts
  styles/                ← base.scss, editorial.scss, console.scss, _mixins.scss
public/                  ← favicon, OG images
scripts/generate-og.mjs  ← renders the OG images
design/                  ← design mockups (reference only, never deployed)
```

## Deploying (GitHub Pages)

`.github/workflows/deploy.yml` builds the site on every pull request (as a check) and deploys it to GitHub Pages on every push to `main`. It asks Pages for its public URL and builds to match, so links, canonical URLs, the sitemap and `robots.txt` stay correct whether the site is served from the custom domain or from `https://ravishankardubey.github.io/professional-portfolio/`.

### One-time setup

1. **Turn on Pages:** go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
2. **Run the first deploy:** go to **Actions → Build and deploy to GitHub Pages → Run workflow** (or push to `main`). The site goes live at `https://ravishankardubey.github.io/professional-portfolio/`.
3. **Point `ravishankardubey.in` at it (optional).**
   1. At your domain registrar, replace the existing records for the apex domain `ravishankardubey.in` with these four `A` records (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Optionally add `AAAA` records `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153` and `2606:50c0:8003::153`.
   2. Add a `CNAME` record for `www` pointing to `ravishankardubey.github.io`.
   3. In **Settings → Pages → Custom domain**, enter `ravishankardubey.in` and save. Once the DNS check passes, tick **Enforce HTTPS**.
   4. Re-run the workflow so the build picks up the domain.

   It's worth verifying the domain first under **GitHub → Settings (your account) → Pages → Verified domains**, which stops anyone else from claiming it on GitHub.

`npm run build` also works locally or on any other static host (Netlify, Vercel, Cloudflare Pages). Set `SITE_URL` and `BASE_PATH` if the site isn't served from the root of `ravishankardubey.in`.
