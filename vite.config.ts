import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import postcss from './postcss.config.cjs';

const config: UserConfig = {
	plugins: [sveltekit()],
	css: {
		postcss
	}
};

export default config;
