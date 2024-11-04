// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Геймификация',
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
});
