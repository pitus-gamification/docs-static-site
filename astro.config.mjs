// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Геймификация',
			description: 'Документация проекта.',
			social: {
				github: 'https://github.com/pitus-gamification/docs',
			},
			sidebar: [
				{
				  label: 'Проект',
				  autogenerate: { directory: 'common' },
				},
			  ],
		}),
	],
	base: '/docs',
	markdown: {
		rehypePlugins: [rehypeAstroRelativeMarkdownLinks],
	  },
});
