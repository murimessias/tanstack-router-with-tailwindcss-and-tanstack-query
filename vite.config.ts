import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const MODE = process.env.NODE_ENV

// https://vitejs.dev/config/
export default defineConfig(() => ({
	build: {
		target: 'es2022',
		cssMinify: MODE === 'production',
	},
	preview: {
		port: 8080,
	},
	server: {
		port: 3000,
	},
	plugins: [
		tailwindcss(),
		TanStackRouterVite({
			autoCodeSplitting: true,
			routesDirectory: './app/routes',
			generatedRouteTree: './types/route-tree.gen.ts',
		}),
		viteReact(),
	],
	test: {
		include: ['./app/**/*.test.{ts,tsx}'],
		setupFiles: ['./tests/setup/setup-test-env.ts'],
		restoreMocks: true,
		coverage: {
			include: ['app/**/*.{ts,tsx}'],
			all: true,
		},
	},
	resolve: {
		alias: {
			'#': resolve(__dirname, './app'),
		},
	},
}))
