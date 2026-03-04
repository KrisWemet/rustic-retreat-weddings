import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { presentationTool } from "sanity/presentation";
import path from "path";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || "";
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || "production";
const previewOrigin = process.env.SANITY_STUDIO_PREVIEW_ORIGIN || "http://localhost:8080";
const enablePreviewModeApi = process.env.SANITY_ENABLE_PREVIEW_MODE === "true";

if (!projectId) {
  throw new Error(
    "Missing Sanity project id. Set SANITY_STUDIO_PROJECT_ID (or SANITY_PROJECT_ID / VITE_SANITY_PROJECT_ID) in .env.",
  );
}

export default defineConfig({
  name: "default",
  title: "Rustic Retreat Studio",
  projectId,
  dataset,
  plugins: [
    deskTool(),
    presentationTool({
      previewUrl: {
        origin: previewOrigin,
        preview: "/?sanity-preview=1",
        ...(enablePreviewModeApi
          ? {
              previewMode: {
                enable: "/api/preview-mode/enable",
                disable: "/api/preview-mode/disable",
              },
            }
          : {}),
      },
      allowOrigins: [
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "https://rustic-retreat-weddings.vercel.app",
      ],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
  vite: (viteConfig) => ({
    ...viteConfig,
    resolve: {
      ...(viteConfig.resolve || {}),
      alias: {
        ...((viteConfig.resolve && "alias" in viteConfig.resolve && typeof viteConfig.resolve.alias === "object")
          ? viteConfig.resolve.alias
          : {}),
        "@": path.resolve(process.cwd(), "src"),
      },
    },
  }),
});
