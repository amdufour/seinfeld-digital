import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/seinfeld-digital/",
	plugins: [sveltekit()],
	build: {
		outDir: 'build' // Ensure this matches what your GitHub Actions uses
	}
});
