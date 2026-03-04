# Sanity Visual Editing Setup

This repo now includes:

- Studio config: `sanity.config.ts`, `sanity.cli.ts`
- Schema: `sanity/schemas/*`
- Preview APIs:
  - `GET /api/preview-mode/enable`
  - `GET /api/preview-mode/disable`
- Content API for frontend: `GET /api/sanity/homepage`
- Frontend overlays + data attributes in `src/pages/Index.tsx`

## 1) Configure environment variables

Use `.env.example` as your template.

Minimum local variables:

```bash
# Sanity project access
VITE_SANITY_PROJECT_ID=...
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-10-01
VITE_SANITY_STUDIO_URL=http://localhost:3333

# Studio runtime
SANITY_STUDIO_PROJECT_ID=...
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_PREVIEW_ORIGIN=http://localhost:8080

# Optional server-side preview + drafts (only needed for cookie-based draft preview mode)
SANITY_PROJECT_ID=...
SANITY_DATASET=production
SANITY_API_VERSION=2024-10-01
SANITY_STUDIO_URL=http://localhost:3333
SANITY_VIEWER_TOKEN=...
SANITY_ENABLE_PREVIEW_MODE=false
```

## 2) Add CORS origins in Sanity project settings

Add:

- `http://localhost:8080`
- `http://127.0.0.1:8080`
- `http://localhost:3333`
- `https://rustic-retreat-weddings.vercel.app`

## 3) Start the site + Studio

For local visual editing (published content with in-page overlays):

Terminal A:

```bash
npm run dev
```

Terminal B:

```bash
npm run sanity:dev
```

Optional: if you want draft-cookie preview mode through API functions, run site with Vercel dev and set `SANITY_ENABLE_PREVIEW_MODE=true`:

```bash
npx vercel@latest dev --listen 8080
```

## 4) Open Studio Presentation tool

- Studio URL: `http://localhost:3333`
- Open **Presentation**
- It will preview `http://localhost:8080/?sanity-preview=1`
- In default local mode, no preview cookie step is required.
- If `SANITY_ENABLE_PREVIEW_MODE=true`, use the **Enable preview** flow.

## 5) Edit homepage content

In Studio, create a `Homepage Content` document and edit:

- Hero fields
- Intro Cards (drag to reorder)
- Homepage Builder array (`Text Block` / `Image Block`) drag to reorder

Changes are reflected in the website preview. When no Sanity document exists, the site falls back to local JSON content.
