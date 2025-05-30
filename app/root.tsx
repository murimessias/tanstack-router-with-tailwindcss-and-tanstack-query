import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { queryClient } from '#app/utils/query-client.ts'
import { routeTree } from '../types/route-tree.gen.ts'
import reportWebVitals from './reportWebVitals.ts'
import '#app/styles/tailwind.css'

const router = createRouter({
	routeTree,
	context: {
		queryClient,
	},
	defaultPreload: 'intent',
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

function AppWithProviders() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

const rootElement = document.querySelector('[data-js="root"]')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)
root.render(
	<StrictMode>
		<AppWithProviders />
	</StrictMode>,
)

reportWebVitals()
