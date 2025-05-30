# Tanstack Router Template with Tailwindcss and Tanstack Query

This is a modern React application leveraging the power of Tanstack Router for
routing and Tanstack Query for data fetching and state management.

## 🚀 Libraries

The project was developed with following libraries:

- **[React](https://reactjs.org/)** is the framework used in this project
- Linting with **[Eslint](https://eslint.org)**
- Code formatting with **[Prettier](https://prettier.io)**
- Git hook with **[Husky](https://github.com/typicode/husky)**
- **[Lint Staged](https://github.com/okonet/lint-staged)** to check staged files
  before commits
- Static Types with **[Typescript](https://www.typescriptlang.org)**
- Tanstack Query for data fetching and state management
  **[React Query](https://tanstack.com/query/latest)**
- Tanstack Router for routing
  **[React Router](https://tanstack.com/router/latest)**
- **[Tailwindcss](https://tailwindcss.com)** for styling

## 🔨 Getting started

1. Clone the repository to your local machine by running the following command
   in your terminal:

```bash
git clone <repository-url>
```

2. Before proceeding further using the command line interface (CLI), create a
   .env.local file in the root directory. You can do this by executing the
   following command:

```bash
cd <project-directory>
cp .env.local.example .env.local
```

After creating the file, make sure to edit the `.env.local` file with the
appropriate values.

3. Install the dependencies by running the following command:

```bash
npm install
```

4. Start the development server on port 3000:

```bash
npm run dev
```

5. Open `http://localhost:3000` in your browser. And you should see the Lihai
   website.

## Requirements

- [Node.js](https://nodejs.org) - v20 or higher
- [npm](https://www.npmjs.com/) - v8 or higher

## 🧞 Commands

Some useful commands to run from the root of the project, from a terminal:

| Command                | Action                                                  |
| :--------------------- | :------------------------------------------------------ |
| `npm install`          | Installs dependencies                                   |
| `npm run build`        | Build your production site using Vite to `./dist/`      |
| `npm run dev`          | Starts local dev server at `localhost:3000`             |
| `npm run format`       | Run Prettier to format code                             |
| `npm run lint`         | Run Eslint to check code style                          |
| `npm run start`        | Starts local builded project server at `localhost:8080` |
| `npm run test`         | Run Vitest to validate tests                            |
| `npm run test:e2e:run` | Run Playwright end-to-end tests                         |

## ✨ Examples

On this repository you can find some examples of how to use the project.

- To create a
  [new query 📡](https://github.com/lihaitech/incentive-platform-panel/blob/main/docs/queries.md)
- To create a
  [new route 🛣️](https://github.com/lihaitech/incentive-platform-panel/blob/main/docs/routes.md)
- To create a
  [new unit test 🧪](https://github.com/lihaitech/incentive-platform-panel/blob/main/docs/unit-tests.md)
