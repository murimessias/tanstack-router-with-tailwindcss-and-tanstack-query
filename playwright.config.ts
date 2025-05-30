import { defineConfig, devices } from '@playwright/test'

const PORT = process.env.PORT ?? '3000'

export default defineConfig({
	forbidOnly: !!process.env.CI,
	fullyParallel: true,
	reporter: 'html',
	retries: process.env.CI ? 3 : 0,
	testDir: './tests/e2e',
	timeout: 15 * 1000,
	use: {
		baseURL: `http://localhost:${PORT}/`,
		trace: 'on-first-retry',
	},
	workers: process.env.CI ? 1 : undefined,
	// Browsers
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
	webServer: {
		command: process.env.CI ? 'npm run dev:mocks' : 'npm run dev',
		env: {
			PORT,
		},
		port: Number(PORT),
		reuseExistingServer: !process.env.CI,
		stderr: 'pipe',
		stdout: 'pipe',
	},
})
