import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="grid h-dvh w-full place-content-center">
			<header className="text-center">
				<h1 className="mb-10 text-5xl font-bold">Tanstack React Router</h1>

				<p>
					Edit <code className="bg-zinc-100 p-1">app/routes/index.tsx</code> and
					save to reload.
				</p>

				<div className="mt-4 flex items-center justify-center gap-4">
					<a
						className="inline-flex min-h-10 items-center rounded bg-zinc-600 px-4 text-white"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<a
						className="inline-flex min-h-10 items-center rounded bg-zinc-600 px-4 text-white"
						href="https://tanstack.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn TanStack
					</a>
				</div>
			</header>
		</div>
	)
}
