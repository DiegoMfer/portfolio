import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import github from '@astrojs/github';

export default defineConfig({
	site: 'https://DiegoMfer.github.io',
	output: 'static',
	integrations: [mdx(), sitemap(), github()],
});
