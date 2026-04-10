import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jasonshprintz.com",
  integrations: [
    react(),
    sitemap(),
  ],
  build: {
    assets: "assets",
  },
});
