# Working with React Testing Library (RTL)

Create a simple React component that displays a list of items. Then, write tests for this component using React Testing Library to ensure it renders correctly and interacts as expected with user input.

1. Create a file named `ItemList.js` and implement a simple component that renders a list of items.
2. Create a test file named `ItemList.test.js` in the same directory as `ItemList.js`. Here, you'll import the render function from React Testing Library and write tests for the ItemList component.

- The first test should check that the component renders each item in the list.
- The second test should ensure that the component does not display duplicate items, even if duplicates are passed as props.
- The `screen.getByText` query is used to check if an item of text is present in the document. This aligns with the idea of testing components from the user's perspective.

3. Install and run your RTL tests using: `npm install --save-dev @testing-library/react` and `npm run test`

## What's in your package.json

- @testing-library/react - Core RTL package for component testing
- @testing-library/jest-dom - Adds custom DOM element matchers for assertions
- @testing-library/user-event - Provides realistic user interaction simulation
- jest - Testing framework runner
- ts-jest - TypeScript transformer for Jest
- identity-obj-proxy - Handles CSS imports during tests
- jest-transformer-svg - Processes SVG imports during tests

If you were to build on this and utilize each of these dependencies beyond the scope of this exercise, you would also install the following

```
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
npm install --save-dev jest
npm install --save-dev ts-jest
npm install --save-dev identity-obj-proxy
npm install --save-dev jest-transformer-svg

```

-or with a single line command-

`npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest ts-jest identity-obj-proxy jest-transformer-svg`
