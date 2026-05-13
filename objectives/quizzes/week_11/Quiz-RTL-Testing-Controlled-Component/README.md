# RTL Testing a Controlled Component

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
- `queryByText` will return `null` when element is not present
- `getByText` will throw an error when element is not present
- `rerender` can be used to test with different props
- `jest.fn` can be used to mock functions
- `fireEvent.click` can be used to simulate click events
- Before setting up your test suites, you should use `afterEach(cleanup)` (after imports) in order to unmount any React trees that were mounted with render


### Testing a Controlled Component
Set up a default props object containing the button's text and an onClick even with a mock function value.

Create two tests for the Button component. 

- The first test should handle rendering the button with the proper text.
  - Set a rendered `Button` component with all of its available properties to a deconstructed `queryByText` and`rerender`.
  - Ensure that the text "Submit" is present when queried.
  - The third assertion should handle changing the button text property upon rerendering.
  - Verify the changed text is as expected.

- The second test should test that the button calls the correct function upon clicking.
  - Set a variable called `onClick` to the onClick from the default props object.
  - Set a rendered `Button` component with all of its available properties to a deconstructed `getByText`. 
  - Simulate a click event on the button's text as provided in the defaultProps.
  - Evaluate that the `onClick` event occured.
