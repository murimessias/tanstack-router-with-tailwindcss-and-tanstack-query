# Unit Tests

We use [Vitest](https://vitest.dev/) to test our code. To run the tests, run the
following command:

## How to create a pure unit test

To create a test you will need to create a file near the tested function with
the name suffix `.test.ts`.

## Example

```tsx
// sum.test.ts
import { test, expect } from 'vitest'
// Import the function to test
import { sum } from './misc'

test('it should sum two numbers properly', () => {
	expect(sum(1, 2)).toBe(3)
})
```

## How to create a UI unit test

To create a test you will need to create a file near the tested function with
the name suffix `.test.tsx` (using `.tsx` instead of `.ts` for React). Also, we
need to add the `@vitest-environment jsdom` to the test to simulate a run in the
browser using `jsdom`.

## Example

```tsx
// button.test.ts
// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
// Import the component to test
import { Button } from './button.tsx'

describe('<Button />', () => {
	it('should render a button properly', () => {
		render(<Button>Button</Button>)
		const buttonEl = screen.getByRole('button')
		expect(buttonEl).toMatchSnapshot()
	})
})
})
```
