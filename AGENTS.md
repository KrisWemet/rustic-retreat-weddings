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
