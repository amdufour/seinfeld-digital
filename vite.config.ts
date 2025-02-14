import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/seinfeld-digital/",
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$data: '/src/data'
		}
	},
	build: {
		outDir: 'build' // Ensure this matches what your GitHub Actions uses
	}
});
