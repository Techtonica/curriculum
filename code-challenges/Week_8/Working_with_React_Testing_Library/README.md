# Working with React Testing Library (RTL)

Create a simple React component that displays a list of items and supports adding a new one. Then, write tests for this component using React Testing Library (RTL) to ensure it renders correctly and interacts as expected with user input.

1. Create a file named `ItemList.jsx` that takes an array of items as a prop and renders them as a list. Include a text input and an "Add" button that appends a new item to the list.

2. Create a test file named `ItemList.test.jsx` in the same directory. Import `render` and `screen` from React Testing Library, as well as `describe`, `test`, `expect` from "vitest", and write the following tests:

- The first test should check that the component renders each item in the list.
- The second test should check that the component renders no list items when passed an empty array.
- The third test should use `user-event` to type a new item into the input, click the "Add" button, and confirm the new item appears in the list. Keep in mind that `user-event` interactions are asynchronous, so you'll need to `await` them.
- The `screen.getByText()` query is used to check if an item of text is present in the document; this is useful when the visible text itself is what matters. This aligns with the idea of testing components from the user's perspective. Other queries to know about include:
  - `getByRole()` — usually preferred when possible
  - `getByLabelText()` — particularly useful for form controls

1. Install and run your tests using: `npm install` and `npm run test`

## What's in your package.json

- vite - Build tool and dev server
- @vitejs/plugin-react - Enables Vite to process React/JSX
- vitest - Test runner (Vite-native, replaces Jest for this project)
- jsdom - Simulates a browser DOM so components can be rendered and tested in Node
- @testing-library/react - Core RTL package for rendering and querying components
- @testing-library/user-event - Simulates realistic user interactions (typing, clicking)

## A Note on Running Tests

`npm run test` starts Vitest in **watch mode** — it stays running in your terminal and automatically re-runs your tests every time you save a file. This is helpful while you're actively writing code, since you get instant feedback without retyping the command.

If you ever want a single, one-time pass/fail check instead — for example, right before you consider the exercise done — run `npx vitest run` instead. This runs the tests once and exits.

(In a real production project, automated systems like CI pipelines run tests once and stop — you won't need to think about this distinction outside of your own local practice.)
