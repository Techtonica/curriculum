# RTL Testing a setTimeout

## Add GIF of expected behavior here!!!

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
- `button` is a DOM node and you can assert any of its attributes such as `disabled`
- `queryByTestId` will return `null` when element is not present
- `jestRunAllTimers` can be used to simulate running all timers
- `jest.useFakeTimers` can be used to enable fake timers
- Before setting up your test suites, you should use `afterEach(cleanup)` (after imports) in order to unmount any React trees that were mounted with render


### Testing a setTimeout
Create two tests for the FocusInput component.

- The first test should handle a button click event that disables the button.
  - Set a rendered `Timeout` to a deconstructed `getByText`.
  - Set the component text "Click to trigger timeout" to a button variable.
  - Verify that the button is presently not disabled.
  - Simulate a click event on the button variable text.
  - Verify that the button is disabled following the click event.

- The second test should handle a button click event that displays a timeout message.
  - Set a rendered `Timeout` to a deconstructed `getByText`, `queryByTestId`, and `getByTestId`.
  - Set the component text "Click to trigger timeout" to a button variable.
  - Verify that the queried element id "timeout-message" does not have content and returns null. 
  - Simulate a click event on the button variable text.
  - Verify that the queried element id "timeout-message" has new content that reads "This will timeout in 5 seconds" following the click event.
  - Simulate running all timers.
  - Verify that the queried element id "timeout-message" has new content that reads "This will timeout in 5 seconds" following all timers being ran.
