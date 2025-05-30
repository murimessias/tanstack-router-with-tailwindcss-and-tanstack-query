// @ts-ignore
import { default as defaultConfig } from '@epic-web/config/eslint'
import eslintConfigTanstackQuery from '@tanstack/eslint-plugin-query'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'

const customConfigs = [
	{
		files: ['**/tests/**/*.ts'],
		rules: {
			'react-hooks/rules-of-hooks': 'off',
		},
	},
	{
		rules: {
			'no-console': 'warn',
		},
	},
]

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
	...defaultConfig,
	...eslintConfigTanstackQuery.configs['flat/recommended'],
	...customConfigs,
	// INFO: Keep this last
	eslintConfigPrettier,
	globalIgnores([
		'node_modules',
		'dist',
		'build',
		'public',
		'coverage',
		'/playwright-report',
		'**/types/route-tree.gen.ts',
	]),
])
