// my-blog/frontend/astro.config.mjs

import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";

export default defineConfig({
  integrations: [sanity({
    projectId: 'v1kdinau',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: false,
  })]
});