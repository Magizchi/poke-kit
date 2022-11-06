import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { resolve } from 'path';
import postcss from './postcss.config.cjs';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$src: resolve('./src')
		}
	},
	css: {
		postcss
	},
	server: {
		host: true,
		strictPort: true,
		port: 3000,
		watch: {
			usePolling: true,
		},
		},
};

export default config;
