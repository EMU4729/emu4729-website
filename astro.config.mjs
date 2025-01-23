import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://first.unsw.edu.au", // TODO: Change to new domain once deployed
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
