# Week 8 — Pair Programming

This folder covers writing user stories and testing React components with Vitest and React Testing Library.

## Prerequisites

1. Can build a controlled form with `useState`, `onChange`, and an `onSubmit` handler (Week 7, React Forms).
2. Can split an app into components and pass props between them (Week 4 onward).
3. Can run `npm install`, `npm run dev`, and `npm test` in a Vite project.

## Motivation

So far you have checked your work by opening the browser and clicking around. A test does that clicking for you, every time you save, and tells you exactly what broke. Teams rely on tests to change code without fear of breaking something they cannot see.

The vital concept this week: a test checks what the user sees and does, not how the code is written. A user story describes a behavior ("when I enter an age of 12, I see an error"). React Testing Library finds elements the way a user would, by role, label, or visible text. The assertion checks the result the user would see. If you rename a variable and the page still works, a good test still passes.

## Learning Objectives

After finishing the exercises, you will be able to:

1. Write a user story in the "As a [user], when I [action], then [result]" format, and turn it into a test case.
2. Run a test suite with `npm test` and use the failure message to decide whether the code or the test is wrong.
3. Render a component with `render` and find elements with `screen.getByRole`, `getByLabelText`, and `getByText`.
4. Simulate typing and submitting with `fireEvent`, then check what appears on the page.
5. Check that something is not on the page with a `queryBy` query.

## Sequence and Relation

1. **Create User Stories** ([`ui-ux-design.md`](../../ui-ux-design/ui-ux-design.md), Activity #3 "Writing User Stories")
   - Pick an app with your partner and write 2–3 stories, then swap and review. Do it first: every story you write is a test waiting to be written, and the form exercise below is where you write one.
2. **React Component Test Suite** (`react-component-test-suite/`)
   - A Gratitude List app with five tests in `src/App.test.jsx`. Two are empty and need writing; the other three fail, and you decide whether the app or the test is at fault. The easier of the two projects, because the tests are already outlined. `npm test` starts at `3 failed | 2 passed`.
3. **Testing a React Form** (`testing-a-react-form/`)
   - The hardest exercise and the one worth the most time. A working registration form with an empty test file: write at least three tests. Try the form in the browser with `npm run dev` first; each behavior you see (an error for an empty field, an error for an age under 18, a success message) is a test.
4. **API testing with Jest** ([Jest: An Async Example](https://jestjs.io/docs/tutorial-async))
   - A stretch reading on testing code that waits for data, and on replacing a real API call with a fake one (a mock). The exercises here use Vitest, which has the same `test` and `expect`; where the docs write `jest.fn()`, Vitest uses `vi.fn()`.
5. **Activity: Database & Backend Debugging** ([`../week-7/Activity.md`](../week-7/Activity.md))
   - The 90-minute cohort session shared between Weeks 7 and 8; see the Week 7 README.

## Relevant Materials

1. [Vitest: Getting Started](https://vitest.dev/guide/)
2. [React Testing Library: Introduction](https://testing-library.com/docs/react-testing-library/intro/)
3. [Testing Library: About Queries](https://testing-library.com/docs/queries/about/) — which query to use, and the difference between `getBy`, `queryBy`, and `findBy`.
4. [React Testing Library tutorial (Robin Wieruch)](https://www.robinwieruch.de/react-testing-library/)
5. [UI/UX Design](../../ui-ux-design/ui-ux-design.md) — the user stories lesson.

## Common Mistakes and Misconceptions

1. `toBeInTheDocument()` fails with `Invalid Chai property: toBeInTheDocument`. It comes from the `@testing-library/jest-dom` package, which these projects do not install, even though most React Testing Library examples use it. A `getBy` query already fails the test when the element is missing, so `expect(screen.getByLabelText("Age")).toBeTruthy()` is enough.
2. To check that something is *not* on the page, use `queryByText`, not `getByText`. `getByText` throws `Unable to find an element with the text` before your `expect` runs; `queryByText` returns `null`, so `expect(screen.queryByText("This field is required")).toBeNull()` works.
3. Regular expressions in a query are case-sensitive. The form's button looks like "SUBMIT" on screen because of CSS, but its accessible name is "Submit", so `{ name: /SUBMIT/ }` fails. Add the `i` flag: `/submit/i`.
4. In a test, clicking Submit on an empty form shows no error messages. The fields have `required`, so the simulated browser blocks the submit before `onSubmit` runs, the same as a real browser does. To test the form's own error messages, type into a field and then clear it with `fireEvent.change`, or call `fireEvent.submit` on the form, which skips the `required` check.
5. An empty test file fails with `No test suite found in file`, and an empty `test(...)` body passes without checking anything. A passing test is only as good as its `expect`.
6. `npm test` runs in watch mode and never exits on its own; it reruns when you save. Press `q` to quit.
7. Take turns typing. A good rhythm for tests: the navigator reads the user story aloud, the driver writes the test that checks it.
