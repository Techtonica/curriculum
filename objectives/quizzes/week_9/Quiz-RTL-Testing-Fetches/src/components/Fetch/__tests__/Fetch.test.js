import { act } from "react"
import Fetch from "../Fetch.js"
import { render, fireEvent, cleanup } from "@testing-library/react"

afterEach(cleanup)

test("starts without any joke", () => {
  const { queryByTestId } = render(<Fetch />)
  expect(queryByTestId("fetch-joke")).toBeNull()
})

test("when clicking on button, displays loading message", () => {
  const { getByTestId, getByText } = render(<Fetch />)
  act(() => {
    fireEvent.click(getByText("Get a Chuck Norris joke"))
  })
  expect(getByTestId("fetch-loading").textContent).toBe("Loading...")
})

test("when clicking on button displays joke if API succeeds", async () => {
  // Mock fetch before rendering component
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      status: 200,
      json: () =>
        Promise.resolve({
          value: "Chuck Norris counted to infinity. Twice.",
        }),
    }),
  )

  // Use act for the entire test including render
  let component
  await act(async () => {
    component = render(<Fetch />)
  })

  const { getByTestId, getByText } = component

  // Use act for the click event and wait for the state update
  await act(async () => {
    fireEvent.click(getByText("Get a Chuck Norris joke"))
    // Wait a bit for the async operation to complete
    await new Promise((resolve) => setTimeout(resolve, 0))
  })

  // Now we can check the results
  expect(getByTestId("fetch-joke").textContent).toBe("Chuck Norris counted to infinity. Twice.")
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/random")

  global.fetch.mockClear()
})

test("when clicking on button displays error if API fails", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      status: 500,
    }),
  )

  // Use act for the entire test including render
  let component
  await act(async () => {
    component = render(<Fetch />)
  })

  const { getByTestId, getByText } = component

  // Use act for the click event and wait for the state update
  await act(async () => {
    fireEvent.click(getByText("Get a Chuck Norris joke"))
    // Wait a bit for the async operation to complete
    await new Promise((resolve) => setTimeout(resolve, 0))
  })

  expect(getByTestId("fetch-error").textContent).toBe("Failed to fetch")
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/random")

  global.fetch.mockClear()
})
