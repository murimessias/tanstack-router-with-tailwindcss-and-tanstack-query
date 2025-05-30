# Routes

We use [Tanstack Query](https://tanstack.com/query/latest) to create queries in
our app. Using [Zod](https://github.com/colinhacks/zod) to validate the
response.

## How to create a query

To create a query you will need to create a file in the `queries` folder with a
suffix of `.query.ts`

## Example

```ts
// queries/example.query.ts
import { queryOptions } from '@tanstack/react-query'
import { z } from 'zod'
import { http } from '#app/resources/axios'
import { ExampleSchema, ExampleWithIdSchema } from '#app/schemas/example.schema'

// Define the base URL to fetch data from.
const EXAMPLE_URL = '/v1/example'

// Function to fetch data from an API using instance of `http`.
async function fetchExamples() {
	const url = EXAMPLE_URL
	const response = await http.get(url)

	// Validate the response within the `ExampleListSchema` safeParse from Zod.
	const parsed = ExampleSchema.safeParse(response.data)
	if (!parsed.success) {
		console.error(parsed.error)
		throw new Error('Invalid response')
	}

	// If the response is valid, return the data to use on the `queryOptions`.
	return {
		examples: parsed.data.data,
	}
}

async function fetchExampleById(id: number) {
	const url = `${EXAMPLE_URL}/${id}`
	const response = await http.get(url)

	const parsed = ExampleWithIdSchema.safeParse(response.data)
	if (!parsed.success) {
		console.error(parsed.error)
		throw new Error('Invalid response')
	}

	return parsed.data
}

// Export the `queries` with the query created to use in our app.
export const exampleQueries = {
	// Get all examples
	all: () => ({
		queryKey: ['example'] as const,
	}),
	allLists: () => ({
		queryKey: [...exampleQueries.all().queryKey, 'list'] as const,
	}),
	list: () =>
		queryOptions({
			queryKey: [...exampleQueries.allLists().queryKey] as const,
			queryFn: fetchExamples,
		}),
	// Get example by id
	allDetails: () => ({
		queryKey: [...exampleQueries.all().queryKey, 'details'] as const,
	}),
	details: (id: string) =>
		queryOptions({
			queryKey: [...exampleQueries.allDetails().queryKey, id] as const,
			queryFn: () => fetchExampleById(id),
			enabled: typeof id === 'string',
		}),
}
```
