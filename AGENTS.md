# Repository Guidelines

## Project Structure & Module Organization
- `src/`: Application source code.
  - `src/pages/`: Route-level pages (e.g., `Index.tsx`, `Venue.tsx`).
  - `src/components/`: Reusable UI components and layout helpers.
  - `src/assets/`: Images and media assets (kebab-case filenames).
  - `src/data/` and `src/types/`: Static content and shared types.
- `public/`: Static files served as-is, including `robots.txt`, `sitemap.xml`, `llms.txt`, `llm.html`, and `prerender/` HTML snapshots for non-JS crawlers.

## Build, Test, and Development Commands
- `npm run dev`: Start the Vite dev server with hot reload.
- `npm run build`: Production build output.
- `npm run build:dev`: Development-mode build (useful for staging checks).
- `npm run preview`: Serve the production build locally.
- `npm run lint`: Run ESLint across the codebase.

## Coding Style & Naming Conventions
- TypeScript + React; new components should be `.tsx` and use PascalCase names.
- Use existing formatting (2-space indentation, double quotes, Tailwind classes inline).
- Prefer `@/` path aliases for imports (e.g., `@/components/SEO`).
- Keep asset filenames descriptive and kebab-case (e.g., `reception-gazebo-evening.avif`).

## Testing Guidelines
- No automated test suite is currently configured.
- Validate changes with `npm run lint` and manual UI checks.
- If you add tests, document the runner and add a script in `package.json`.

## Commit & Pull Request Guidelines
- Commit history is short and descriptive (e.g., “Update package cards UI”). Use concise, imperative subjects.
- PRs should include a summary of changes and screenshots for UI updates.
- Call out SEO or routing changes and update `public/sitemap.xml` and `public/prerender/` when new pages are added.

## SEO & Content Notes
- Page metadata lives in `src/components/SEO.tsx` and is set per page.
- When adding new routes, update `sitemap.xml` and consider adding a `public/prerender/` snapshot for crawler access.
- Keep `llms.txt` and `llm.html` in sync with major content or pricing changes.
- Every indexable route needs a `public/prerender/<route>.html` snapshot that matches the page. Crawlers that do not run JavaScript (including ChatGPT's) only see that snapshot; a route without one shows them the homepage's fallback text instead.
- When FAQ content changes, bump `FAQS_LAST_UPDATED` in `src/content/faqs.ts` and the "Last updated" lines in `public/faqs.txt` and `public/prerender/faqs.html`. In `sitemap.xml`, set a page's `lastmod` to the date its content last changed, not the deploy date.
- Production deploys notify Bing through IndexNow (`.github/workflows/indexnow.yml`, or `npm run indexnow` by hand). Keep the key file `public/<32 hex characters>.txt`.
- Write copy without em dashes or en dashes; use commas, periods, colons or parentheses, and "to" for ranges (June to September, 5 to 15 minutes).
- Run new or edited page copy through the humanizer skill in `.claude/skills/humanizer/` (from github.com/blader/humanizer, MIT) before publishing. Leave quoted customer reviews as written. If FAQ answers change, keep `public/faqs.txt` and `public/prerender/faqs.html` in step with `src/content/faqs.ts`.
