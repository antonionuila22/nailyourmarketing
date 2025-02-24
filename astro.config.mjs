// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import db from '@astrojs/db';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';




// https://astro.build/config
export default defineConfig({
  integrations: [react(), db(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});