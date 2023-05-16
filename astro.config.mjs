import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://cvelasquezr8.github.io",
  base: "/equasystems-website-project",
  output: "server",
  adapter: netlify()
});