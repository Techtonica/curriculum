## React Component Test Suite

A small Gratitude List app with five tests in `src/App.test.jsx`. Some tests are empty, some are wrong, and some fail because the app itself has a bug. Your job is to make all five pass.

### Setup

From the root of the `curriculum` repo:

```bash
cd pair-programming/week-8/react-component-test-suite
npm install
npm test
```

`npm test` starts [Vitest](https://vitest.dev/) in watch mode: it reruns the tests every time you save a file. Press `q` to quit.

At the start you should see `3 failed | 2 passed`. The two "passing" tests are empty, so they pass without checking anything.

### Tasks

Each test in `src/App.test.jsx` has a comment saying what to do.

1. **`renders App component`** — write the test. Render `<App />` and check for something you can see on the page, such as the first list item.
2. **`renders my header component`** — the test is fine; the app is not. Read the error message, then fix the component it points to.
3. **`render the Form component`** — write the test. Render `<Form />` and check that the input is there.
4. **`renders Techtonica title`** — this time the test is wrong. Change it so it matches the heading the app really shows.
5. **`renders add Button`** — decide whether the test or the component should change, and fix one of them.

`npm run dev` fails until task 2 is done, with `"default" is not exported by "src/components/header.jsx"`. That is the same bug the test found.

### Hint

If you get stuck, here is a [good resource](https://www.robinwieruch.de/react-testing-library/).
