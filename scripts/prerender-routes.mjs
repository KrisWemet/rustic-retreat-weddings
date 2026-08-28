/**
 * Post-build step: give every public route its own HTML file.
 *
 * The SPA rewrite means crawlers that do not run JavaScript receive
 * dist/index.html for every URL, so every page advertises the homepage's
 * canonical, title and description. Google was told to ignore the interior
 * pages and credit "/" instead.
 *
 * This clones the built shell per route and rewrites the head tags to that
 * route's real values, taken from the page's own <SEO /> props so there is a
 * single source of truth. Where a public/prerender snapshot exists, its body
 * text is placed in <noscript> so non-JS crawlers get real content. The script
 * tags are untouched, so browsers still boot the full React app.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const PAGES = path.join(ROOT, "src/pages");
const BASE = "https://www.rusticretreatalberta.ca";
const SUFFIX = " | Rustic Retreat Weddings";

// Routes deliberately excluded:
//   /                      already correct in dist/index.html
//   /booking-2026, -2027   noindex booking forms
//   /real-weddings         placeholder stories, kept out of crawler surfaces
//   /real-weddings/:slug   dynamic
const SKIP = new Set(["", "/real-weddings"]);

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Pull title/description/path/noindex out of a page's <SEO /> element. */
function readSeo(file) {
  const src = fs.readFileSync(file, "utf8");
  const m = src.match(/<SEO\b[\s\S]*?\/>/);
  if (!m) return null;
  const blk = m[0];
  if (/noindex=\{true\}/.test(blk)) return null;

  const grab = (k) => {
    const r = new RegExp(`${k}="([^"]*)"`).exec(blk);
    return r ? r[1] : null;
  };
  const routePath = grab("path");
  const title = grab("title");
  const description = grab("description");
  if (routePath === null || !title || !description) return null;
  return { path: routePath, title, description };
}

/** Body text from a public/prerender snapshot, for the <noscript> block. */
function snapshotBody(routePath) {
  const f = path.join(ROOT, "public/prerender", `${routePath.replace(/^\//, "")}.html`);
  if (!fs.existsSync(f)) return null;
  const html = fs.readFileSync(f, "utf8");
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return m ? m[1].trim() : null;
}

const shell = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

const routes = fs
  .readdirSync(PAGES)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => readSeo(path.join(PAGES, f)))
  .filter(Boolean)
  .filter((r) => !SKIP.has(r.path));

let written = 0;
for (const r of routes) {
  const url = `${BASE}${r.path}`;
  const fullTitle = r.path === "" ? r.title : `${r.title}${SUFFIX}`;
  const t = esc(fullTitle);
  const d = esc(r.description);

  let html = shell
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(/<meta name="description"[\s\S]*?\/>/, `<meta name="description" content="${d}" />`)
    .replace(/<link rel="canonical"[\s\S]*?\/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${t}" />`)
    .replace(/<meta property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${d}" />`)
    .replace(/<meta property="og:url"[\s\S]*?\/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title"[\s\S]*?\/>/, `<meta name="twitter:title" content="${t}" />`)
    .replace(/<meta name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${d}" />`);

  const body = snapshotBody(r.path);
  if (body) {
    html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript>\n${body}\n</noscript>`);
  }

  const outDir = path.join(DIST, r.path.replace(/^\//, ""));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  written++;
  console.log(`  ${r.path.padEnd(28)} -> dist${r.path}/index.html${body ? "  (+noscript)" : ""}`);
}

console.log(`prerender-routes: wrote ${written} route files`);
if (written === 0) {
  console.error("prerender-routes: no routes written - refusing to pass silently");
  process.exit(1);
}
