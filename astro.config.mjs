// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: 'devramx.github.io',
	site: 'https://devramx.com',
	integrations: [mdx(), sitemap()],
});
