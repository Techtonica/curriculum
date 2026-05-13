import React from 'react';
import Button from '../Button';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

// defaultProps are the values that the button contains (i.e. click event and text)
const defaultProps = { 
  // onClick with a mock function value
  onClick: jest.fn(),
  // text that matches the button string
  text: "Submit" ,
};

test('button renders with correct text', () => {
  // Set a rendered `Button` component with all of its available properties to a deconstructed `queryByText` and`rerender`.
  const { queryByText, rerender } = render(<Button {...defaultProps} />);
  // Ensure that the text "Submit" is present when queried.
  expect(queryByText("Submit")).toBeTruthy(); 
  // The third assertion should handle changing the button text property upon rerendering.
  rerender(<Button {...defaultProps} text="Go" />);
  // Verify the changed text is as expected.
  expect(queryByText("Go")).toBeTruthy(); 
});

test('calls correct function on click', () => {
  // Set a variable called `onClick` to the onClick from the default props object.
  const onClick = defaultProps.onClick;
  // Set a rendered `Button` component with all of its available properties to a deconstructed `getByText`. 
  const { getByText } = render(<Button {...defaultProps} />)
  // Simulate a click event on the button's text as provided in the defaultProps.
  fireEvent.click(getByText(defaultProps.text));
  // Evaluate that the `onClick` event occured.
  expect(onClick).toHaveBeenCalled();
});