# Week 5 — Pair Programming

This folder covers data that arrives later: calling an API with `async`/`await`, and holding what comes back in React state.

## Prerequisites

1. Can write a React component and pass it props (Week 4).
2. Have used `useState` at least once (Week 4, React Button Part 2).
3. Can run `npm install` and `npm run dev` in a Vite project.
4. Comfortable with template literals and `forEach` for building HTML strings.
5. A free [OpenWeatherMap](https://openweathermap.org/) account, for the last exercise only. Sign up early — a new API key can take up to two hours to activate.

## Motivation

Everything you have built so far had its data sitting right there in the file. From here on it lives on someone else's server, arrives over a network you do not control, and shows up milliseconds or seconds after you ask for it. `await` is how you write code that waits for it without freezing the page, and state is how the page updates once it lands.

Those two halves are separable, and this folder separates them on purpose. You practice fetching with no React involved, then state with nothing to fetch, then both together. When the weather app misbehaves, knowing which half is broken is most of the debugging.

## Learning Objectives

After finishing the required exercises, you will be able to:

1. Call an API with `fetch` and read its JSON body using `async` and `await`.
2. Hold a changing value in a component with `useState` and update it from a click handler.
3. Capture what a user types with a controlled form input.
4. Fetch data in response to a user action and render the result.
5. Read a failed request in the DevTools Network tab and identify its status code.

## Sequence and Relation

1. **Fetch API** (`fetch-api`)
   - Complete two lines in `index.js` so it fetches cat facts from `catfact.ninja` and logs them. No build step and no framework: open `index.html` in the browser. Start here, because it is `async`/`await` with nothing else in the way. The file does not run until both lines are filled in — the placeholder comments leave it syntactically incomplete.
2. **Counter App** (`Counter_App`)
   - Build a `Counter` component with buttons that increment, decrement, and reset a number, using `useState` and `onClick`. `src/App.jsx` currently renders placeholder text, so you are writing the component from scratch. This is state with no network involved, which is the other half of the week.
3. **Weather Forecast App** (`Weather_Forecast_App`)
   - Both halves at once, and the hardest exercise here. `src/Weather.jsx` gives you a skeleton with `city` and `weatherData` state and three empty functions to fill in: fetch a city's weather from OpenWeatherMap, capture the input, handle the submit. Display description, wind speed, humidity, and temperature.
4. **Activity: API Troubleshooting Workshop** (`Activity.md`)
   - A 75-minute facilitated session, run with your cohort rather than worked through alone, and shared between Weeks 5 and 6. You debug a deliberately broken weather app, build an HTTP status code reference, and write a troubleshooting flowchart. Do it after the weather app, when the failures it covers are ones you have already hit.

## Relevant Materials

1. [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
2. [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
3. [MDN: await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
4. [MDN: HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
5. [React: useState](https://react.dev/reference/react/useState)
6. [React: Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)
7. [OpenWeatherMap: Current Weather Data API](https://openweathermap.org/current)
8. [Chrome DevTools: Network features reference](https://developer.chrome.com/docs/devtools/network)

## Common Mistakes and Misconceptions

1. `fetch` resolves to a `Response` object, not your data. You need two awaits: one for the request, one for `response.json()`. Skipping the second gives you a Promise, and the next line fails with `catFacts.forEach is not a function`.
2. Calling an `async` function without `await` hands you a Promise rather than the value. Reading a property off it gives `undefined` instead of an error, which makes it hard to spot.
3. A React component must return JSX. `return { ... }` returns an object, renders nothing, and produces no error message — check your braces if a component silently disappears.
4. Do not commit your OpenWeatherMap key. Keep it out of the files you push, and never paste it into a shared sandbox link.
5. A brand new OpenWeatherMap key returns `401 Unauthorized` until it activates, which can take up to two hours. If your code looks right and you are still getting 401, wait before rewriting it.
6. A controlled input needs both `value={city}` and `onChange={handleInputChange}`. With only `onChange`, typing appears to work but the state never updates; with only `value`, the field will not accept typing at all.
7. Call `event.preventDefault()` in your submit handler. Without it, the form reloads the page and your fetched data disappears immediately.
8. `useState` replaces the value rather than merging it, and the update is not visible until the next render. Logging state right after calling the setter shows the old value.
9. Take turns typing. Async bugs are easier to spot from the navigator's seat, where you are reading the Network tab instead of the code.
