// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH are set by the GitHub Pages workflow (from actions/configure-pages),
// so the build matches wherever Pages serves it: the custom domain, or the
// username.github.io/professional-portfolio/ sub-folder before a domain is configured.
export default defineConfig({
  site: process.env.SITE_URL || 'https://ravishankardubey.in',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { inlineStylesheets: 'always' },
});
