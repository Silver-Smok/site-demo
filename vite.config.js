import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	},
	optimizeDeps: {
		include: [
			'gsap',
			'gsap/ScrollTrigger',
			'gsap/Draggable'
		],
		exclude: [
			'@tabler/icons-svelte',
			'@skeletonlabs/skeleton'
		]
	},
	server: {
		watch: {
			ignored: [
				'**/static/pdf/**',
				'**/static/videos/**',
				'**/.svelte-kit/**',
				'**/node_modules/**'
			]
		},
		fs: {
			strict: true
		}
	},
	ssr: {
		noExternal: ['sveltekit-superforms']
	}
});
