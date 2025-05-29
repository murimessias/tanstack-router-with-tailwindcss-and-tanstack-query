import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { routeTree } from '../types/route-tree.gen.ts'
import reportWebVitals from './reportWebVitals.ts'

import '#app/styles/global.css'

const router = createRouter({
	routeTree,
	context: {},
	defaultPreload: 'intent',
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const rootElement = document.querySelector('[data-js="root"]')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)

reportWebVitals()
