// Lint Staged config
const config = {
	'*.{css,scss,json,mdx,mdoc}': ['prettier --write --ignore-unknown'],
	'*.{js,jsx,ts,tsx}': [
		'prettier --write --ignore-unknown',
		'eslint --report-unused-disable-directives --max-warnings=0 --no-warn-ignored',
		'vitest --run --passWithNoTests',
	],
}

export default config
