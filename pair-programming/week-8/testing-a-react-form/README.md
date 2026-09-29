## Testing a React Form

You're receiving a fully working registration form: email, name, and age, with an error message under each field and a success message after a valid submit. Please create at least 3 tests inside `src/App.test.jsx`.

### Setup

From the root of the `curriculum` repo:

```bash
cd pair-programming/week-8/testing-a-react-form
npm install
npm run dev
```

Open the URL Vite prints and try the form yourself first: leave fields empty, type an age of 12, then submit a valid entry. Every behavior you see is something you can test.

Then stop the server with `Ctrl+C` and start the tests:

```bash
npm test
```

`npm test` starts [Vitest](https://vitest.dev/) in watch mode: it reruns the tests every time you save a file. Press `q` to quit.

Until you write your first test, Vitest reports `No test suite found in file`. That is expected.

### Tasks

Write at least three tests. Some ideas, from easiest to hardest:

1. The form shows the Email, Name, and Age fields.
2. Typing an age below 18 shows `You should be between 18 and 99 years old to register in our form.`
3. Submitting a valid email, name, and age replaces the form with the success message.

### Hints

- `render`, `screen`, and `fireEvent` all come from `@testing-library/react`.
- To type into a field, use `fireEvent.change(input, { target: { value: "30" } })`.
- Find fields the way a user would: `screen.getByLabelText("Age")` or `screen.getByPlaceholderText("Age")`.

If you get stuck, here is a [good resource](https://www.robinwieruch.de/react-testing-library/).
