/**
 * Prefixes a root-relative path with the site's base path, so links keep working
 * when the site is served from a sub-folder (e.g. GitHub Pages without a custom domain).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
