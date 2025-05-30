# Routes

We use [Tanstack React Router](https://tanstack.com/router/latest) to create
routes in our app.

## How to create a route

To create a route you will need to create a file in the `routes` folder.

## Example

```tsx
// routes/example.ts
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
// Import the factory created in `queries` folder
import { exampleQueries } from '#app/resources/queries/example.query'

export const Route = createFileRoute('/example')({
	component: Component,
	// To ensure that data is fetched before the route is rendered
	loader: (opts) => {
		void opts.context.queryClient.ensureQueryData(exampleQueries.allLists())
	},
	// We can use a custom loading/error components
	pendingComponent: () => <div>Loading...</div>,
	errorComponent: () => <div>Error</div>,
})

// Example of a Component to be rendered as layout for a route
function Component() {
	/*
    When you want to fetch data from an API,
    use `useSuspenseQuery` from `@tanstack/react-query`
    using the factory imported from `#app/resources/queries/example.query`
  */
	const exampleQuery = useSuspenseQuery(exampleQueries.allLists())

	return (
		<div>
			<h1 className="text-3xl">Users:</h1>
			<ul className="list-inside list-disc">
				{exampleQuery.data.map((user) => (
					<li className="list-item" key={user.id}>
						{user.name}
					</li>
				))}
			</ul>
		</div>
	)
}
```
