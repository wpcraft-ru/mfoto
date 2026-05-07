// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://aiiddqd.github.io',
	base: '/mfoto',
	vite: {
		plugins: [tailwindcss()],
	},
});
