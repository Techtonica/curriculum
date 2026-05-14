# RTL Testing Fetches

![fetch rtl quiz](https://github.com/user-attachments/assets/51639834-0bae-4659-a529-291bd0189ac6)

### Helpful Tips to Get You Started

##### Setup Commands

```
git clone <repo>
# install dependencies
npm i
# run and view application ui in browser
npm run start
# run and view test output 
npm run test
```

##### Syntax

- `jest.spyOn(global, "fetch")` to mock `fetch` implementation
- `act()`, allows for controlled promises and gives you more precise control over when state updates happen for the React rendering lifecycle. Past syntax has used:
  - `await wait(() ={'>'} getByTestId("my-async-element"))` to wait until element is visible
  - `await wait()` holds until the next tick, e.g. API call or `setTimeout`
- `global.fetch.mockClear` to clear mock after test
- `global.fetch.mock.calls` returns an array of function invocations, which in turn returns an array with the `args` used in each invocation
- `describe` to group API tests and clear mock after each
- `mockImplementationOnce` to have more control over multiple API requests
- Before setting up your test suites, you should use `afterEach(cleanup)` (after imports) in order to unmount any React trees that were mounted with render

### Create a minimum of 2 of 5 Tests for MultipleFetches

1️⃣ [Initial State Test] The first test should verify that component starts without any post.

- Render the component
- Assert that the post element doesn't exist

2️⃣ [Loading State Test] The second test should handle a button click that displays a loading message.

- Render the component
- Emmulate a button click using `fireEvent.click()`
- Assert that loading message is displayed

3️⃣ [Success State Test] The third test should group all API tests together and clear each mock after each test.

- Create controlled Promises for both fetches
- Mock the fetch API for both calls (e.g. `jest.spyOn()`)
- Render the component
- Emmulate a button click using `fireEvent.click()`
- Resolve the first fetch promise (post), but allow the component to process the state update

  ```
  await act(async () => {
    postPromiseResolve.resolve({
      status: 200,
      json: () => Promise.resolve({
        title: "A Really Cool Title"
      })
    });

    await new Promise(....things-here...);
  });
  ```
- Resolve the second fetch promise (comments), but allow the component to process the state update

  ```
  await act(async () => {
    commentsPromiseResolve.resolve({
      status: 200,
      json: () => Promise.resolve([
        { id: #, name: "Daaimah" },
        ....possibly-more-things...
      ])
    });

    await new Promise(....things-here...);
  });
  ```
- Assert that post and comments are displayed (you may need to do some console printing here to test what kind of data you are getting back)
- Check comment authors

4️⃣ [Comments Error Test] The fourth test should handle displaying comment if API fails.
- Create controlled promises for both fetches
- Mock the fetch API for both calls (e.g. `jest.spyOn()`)
- Render the component
- Emmulate a button click using `fireEvent.click()`
- Resolve the first fetch promise (post) with success, but allow the component to process the state update

  ```
  await act(async () => {
    postPromiseResolve.resolve({
      status: ###,
      json: () => Promise.resolve({
        title: "A Really Cool Title"
      })
    });

    await new Promise(....things-here...);
  });
  ```
  
- Resolve the second fetch promise (comments) with error, but allow the component to process the state update

  ```
  await act(async () => {
    commentsPromiseResolve.resolve({
      status: ###
    });

    await new Promise(....things-here...);
  });
  ```
- Assert that post is displayed but comments show error

5️⃣ [Post Error Test] The fifth test should handle displaying post error if API fails.

- Create controlled promises for both fetches
- Mock the fetch API for both calls (e.g. `jest.spyOn()`)
- Render the component
- Emmulate a button click using `fireEvent.click()`
- Resolve the fetch promise with error, but allow component to process the state update
  ```
  await act(async () => {
    postPromiseResolve.resolve({
      status: ###
    });
  
    await new Promise(...things-here...);
  });
  ```
  - Assert that error message is displayed

### Create a minimum of 2 of 4 Tests for Fetch

1️⃣[Initial State Test] The first test should verify that the component starts without any joke.
- Render the component
- Assert that the joke element doesn't exist

2️⃣ [Loading State Test] The second test should handle a button click that displays a loading message.
- Render the component
- Emmulate a button click using `fireEvent.click()`
- Assert that loading message is displayed

3️⃣ [Success State Test] The third test should handle displaying a joke if API succeeds, upon button click.
- Create controlled promises for both fetches
- Mock the fetch API for both calls (e.g. `jest.spyOn()`)
- Render the component
- Emmulate a button click using `fireEvent.click()`
- Resolve the fetch promise with success response, but allow component to process the state update
  ```
  await act(async () => {
    fetchPromiseResolve.resolve({
      status: ###,
      json: () => Promise.resolve({
        value: "Chuck Norris counted to infinity. Twice."
      })
    });
    // Allow component to process the state update
    await new Promise(...things-here...);
  });
  ```

- Assert that joke is displayed
- Verify fetch was called correctly (you may need to do some console printing here to test what kind of data you are getting back)

4️⃣ [Error State Test] The fourth test should handle displaying an error if API fails, upon button click.
- Create controlled promises for both fetches
- Mock the fetch API for both calls (e.g. `jest.spyOn()`)
- Render the component
- Emmulate a button click using `fireEvent.click()`
- Resolve the fetch promise with error response, but allow component to process the state update
  ```
  await act(async () => {
    fetchPromiseResolve.resolve({
      status: ###
    });
    // Allow component to process the state update
    await new Promise(...things-here...);
  });
  ```
- Assert that error message is displayed
- Verify fetch was called correctly (you may need to do some console printing here to test what kind of data you are getting back)

### Warning Suppressions are Independent

Existing suppressed warnings in your `setupTests.js` file:

1. Don't change any test logic or assertions
2. Don't affect how the tests interact with your components
3. Don't modify the mocking strategy or validation approach

They simply prevent certain warnings from appearing in the console during test execution, making your test output cleaner and easier to read. This is not normal -or- best practice, but useful for the purposes of this quiz.
