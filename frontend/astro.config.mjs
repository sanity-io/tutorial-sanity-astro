// my-blog/frontend/astro.config.mjs

import { defineConfig } from 'astro/config';
import sanity from "astro-sanity";

export default defineConfig({
  integrations: [sanity({
    projectId: 'v1kdinau',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: false,
  })]
});