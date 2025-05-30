import { z } from 'zod'

const envSchema = z.object({
	MODE: z.enum(['development', 'production', 'staging', 'test'] as const),
	// API Envs
	VITE_API_URL: z.string().url(),
	// Development Envs
	VITE_MOCKS: z.enum(['true']).optional(),
})

export function init() {
	const parsed = envSchema.safeParse(import.meta.env)

	if (parsed.success === false) {
		// eslint-disable-next-line no-console
		console.error(
			'🚨 Invalid environment variables',
			parsed.error.flatten().fieldErrors,
		)

		throw new Error('Invalid environment variables')
	}
}

export function getEnv() {
	return {
		MODE: import.meta.env.MODE,
	}
}

declare global {
	interface ImportMetaEnv extends z.infer<typeof envSchema> {}

	interface ImportMeta {
		readonly env: ImportMetaEnv
	}
}
