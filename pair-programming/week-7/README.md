# Week 7 — Pair Programming

This folder covers forms in React, passing data from a child component to its parent, and connecting a React front end to an Express back end.

## Prerequisites

1. Can hold a value in `useState` and wire a controlled input with `value` and `onChange` (Week 5, Counter App and Weather Forecast App).
2. Can call an API with `fetch` and read the JSON body (Week 5).
3. Can write an Express route that responds to a `GET` request (Week 6).
4. Can run `npm install` and `npm run dev` in a Vite project, and `node file.js` for a plain script.

## Motivation

Almost every app you build from here on takes input from a user and sends it somewhere: to another component, to a server, and from there to a database. This week follows that data one step at a time. First from an input into state, then from a child component up to its parent, then from an Express server into React through `/api`. Moving data through a React app is the vital concept; the final project is built on it.

## Learning Objectives

After finishing the exercises, you will be able to:

1. Build a controlled form where every input's value lives in one state object and a single change handler updates it.
2. Handle a form submit with `event.preventDefault()` and read all the submitted values.
3. Use HTML validation attributes such as `required` and `type="number"` to block an incomplete submit.
4. Send data from a child component to its parent by calling a function the parent passed down as a prop.
5. Run a Vite React app and an Express server together, proxy `/api` requests from one to the other, and render the JSON the server returns.
6. Write a recursive function with a base case and a recursive case.

## Sequence and Relation

1. **React Forms** (`react-forms/`)
   - `src/App.jsx` has a Register Your Cat form defined inline and a commented-out `useState` block. The four tasks in the README: move the form into its own component, control it with `useState` (import it — the file does not yet), add HTML validation, and make submit `console.log` the cat. The loose `RegisterYourCatForm.js` at the folder root is outside `src/` and not imported; it is a reference, not part of the app.
2. **React Forms Continued** (`react-forms-continued/`)
   - The same form, already split into `src/Components/form.jsx` and `src/Components/message.jsx`. The README warns the code does not work: the fields will not accept typing until you complete the `set` function. Then finish `handleSubmit` so it passes the values up through the `tochild` prop, and the parent in `App.jsx` swaps the form for a thank-you message. This is the harder of the two form exercises; do it second.
3. **React + Express App** (`react-express-app/`)
   - The longest exercise and the one worth the most time. Follow `react-expressjs.md` to build a project from scratch: an Express server with a `/api` route, a Vite React client, a proxy between them, and a button that fetches the server's message. The Independent Practice adds an `/api/users` route and a list. `starter-code/` is the finished version to compare against, not the place to start.
4. **Activity: Database & Backend Debugging** (`Activity.md`)
   - A 90-minute facilitated session shared between Weeks 7 and 8, run with your cohort. You fix broken SQL queries, broken Express routes, and a full-stack app where "Add Todo" does nothing. It uses PostgreSQL and a broken app your facilitator provides; neither is in this folder.
5. **Factorial with Recursion** (`Factorial_Calculation_Using_Recursion.js`)
   - A short standalone warm-up, unrelated to the rest of the week. Fill in `factorial(n)` and run it with `node Factorial_Calculation_Using_Recursion.js`; `factorial(5)` should return `120`. Safe to do at the start of a session or skip if time is short.

## Relevant Materials

1. [React Routing & Forms](../../react-js/react-routing-forms.md) — sections 2 to 4 cover the forms work here.
2. [React: Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)
3. [React: Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
4. [MDN: Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
5. [Express.js](../../express-js/express.md)
6. [Vite: server.proxy](https://vite.dev/config/server-options#server-proxy)
7. [MDN: Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

## Common Mistakes and Misconceptions

1. `onChange={set("name")}` calls `set` while the component renders and passes whatever it returns to `onChange`. If `set` returns nothing, the field is read-only and the console warns ``You provided a `value` prop to a form field without an `onChange` handler``. `set` has to return a function that takes the event.
2. A single change handler usually does `setValues({ ...values, [event.target.name]: event.target.value })`. Leave out `...values` and every other field is wiped on each keystroke. Each input's `name` must match its key in the state object, or the update lands on a key nothing reads.
3. Without `event.preventDefault()` in the submit handler, the browser reloads the page. Your `console.log` flashes and disappears, and the parent's state resets.
4. `required` does nothing on a `<select>` whose first `<option>` has no `value=""` — the placeholder text itself counts as a chosen value.
5. `fetch("/api")` with no proxy in `vite.config.js` returns Vite's `index.html` instead of JSON, and `res.json()` fails with `Unexpected token '<', "<!DOCTYPE "... is not valid JSON`. With the proxy set but the Express server not running, the request fails with a `500` and the Vite terminal prints `[vite] http proxy error: /api`. The server and the client each need their own terminal, both running.
6. The lesson and starter code run Express on port 8080, not 5000. On macOS, port 5000 belongs to the AirPlay Receiver, and a request to `localhost:5000` comes back `403 Forbidden` from AirPlay rather than from your server. If you change the server's port, change the proxy `target` in `vite.config.js` to match.
7. A recursive function with no base case, or one the input never reaches, fails with `RangeError: Maximum call stack size exceeded`. Decide what `factorial(0)` returns before writing the recursive call.
8. Take turns typing. In the React + Express exercise, switch when you switch terminals: one of you owns the server, the other the client.
