import { render, screen } from "@testing-library/react";

import App from "./App";
import Form from "./components/Form";
import HeaderComponent from "./components/header";

// First Test - Fix it to Pass
describe("App", () => {
  test("renders App component", () => {});
});

// Can you fix the project so we pass this test?  Hint: Don't only change this test!
describe("HeaderComponent", () => {
  test("renders my header component", () => {
    render(<HeaderComponent />);
  });
});

// //Third Test - Fix it to Pass
describe("Form", () => {
  test("render the Form component", () => {});
});

// Can you fix the test so we pass it?  Hint: Change this test!
test("renders Techtonica title", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /Daaimah/,
    })
  );
  // expect(screen.getByText(/Techtonica/i));
});

// Can you fix the project so we pass this test?  Hint: Don't only change this test!
test("renders add Button", () => {
  render(<Form />);
  screen.getByRole("button", {
    name: /click here/,
  });
});

// Resources: https://www.robinwieruch.de/react-testing-library/
