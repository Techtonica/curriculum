import { act } from "react"
import MultipleFetches from "../MultipleFetches.js"
import { render, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"

afterEach(cleanup)

test("starts without any post", () => {
  const { queryByTestId } = render(<MultipleFetches />)
  expect(queryByTestId("fetch-post")).toBeNull()
})

test("after clicking on button, displays loading message", () => {
  const { getByTestId, getByText } = render(<MultipleFetches />)
  act(() => {
    fireEvent.click(getByText("Fetch post and comments"))
  })
  expect(getByTestId("fetch-loading-post").textContent).toBe("Loading post...")
})

// Group all API tests together and clear each mock after each test.
describe("API tests", () => {
  afterEach(() => global.fetch.mockClear())

  test("displays post if API succeeds", async () => {
    // Create mock implementations that return promises we can control
    const postPromiseResolve = {}
    const postPromise = new Promise((resolve) => {
      postPromiseResolve.resolve = resolve
    })

    const commentsPromiseResolve = {}
    const commentsPromise = new Promise((resolve) => {
      commentsPromiseResolve.resolve = resolve
    })

    // Set up the mock with our controlled promises
    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(() => postPromise)
      .mockImplementationOnce(() => commentsPromise)

    // Render component inside act
    let component
    await act(async () => {
      component = render(<MultipleFetches />)
    })

    const { getByTestId, getByText, getAllByTestId } = component

    // Click button inside act
    await act(async () => {
      fireEvent.click(getByText("Fetch post and comments"))
    })

    // Resolve first fetch (post) inside act
    await act(async () => {
      postPromiseResolve.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            title: "How to Become a Bad Developer",
          }),
      })
      // Allow component to process the state update
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    // Resolve second fetch (comments) inside act
    await act(async () => {
      commentsPromiseResolve.resolve({
        status: 200,
        json: () =>
          Promise.resolve([
            { id: 1, name: "Rafael" },
            { id: 2, name: "Andressa" },
          ]),
      })
      // Allow component to process the state update
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    // Make assertions after all state updates are complete
    expect(global.fetch).toHaveBeenCalledTimes(2)
    expect(global.fetch.mock.calls[0][0]).toBe("https://jsonplaceholder.typicode.com/posts/1")
    expect(global.fetch.mock.calls[1][0]).toBe("https://jsonplaceholder.typicode.com/posts/1/comments")
    expect(getByTestId("fetch-post").textContent).toBe("How to Become a Bad Developer")
    expect(getByTestId("multiple-fetch-success")).toBeInTheDocument()
    const authors = getAllByTestId("comment-author")
    expect(authors[0].textContent).toBe("Rafael")
    expect(authors[1].textContent).toBe("Andressa")
  })

  test("displays comments error if API fails", async () => {
    // Create mock implementations that return promises we can control
    const postPromiseResolve = {}
    const postPromise = new Promise((resolve) => {
      postPromiseResolve.resolve = resolve
    })

    const commentsPromiseResolve = {}
    const commentsPromise = new Promise((resolve) => {
      commentsPromiseResolve.resolve = resolve
    })

    // Set up the mock with our controlled promises
    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(() => postPromise)
      .mockImplementationOnce(() => commentsPromise)

    // Render component inside act
    let component
    await act(async () => {
      component = render(<MultipleFetches />)
    })

    const { getByTestId, getByText, queryByText } = component

    // Click button inside act
    await act(async () => {
      fireEvent.click(getByText("Fetch post and comments"))
    })

    // Resolve first fetch (post) inside act
    await act(async () => {
      postPromiseResolve.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            title: "How to Become a Bad Developer",
          }),
      })
      // Allow component to process the state update
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    // Resolve second fetch (comments) with error inside act
    await act(async () => {
      commentsPromiseResolve.resolve({
        status: 500,
      })
      // Allow component to process the state update
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    // Make assertions after all state updates are complete
    expect(global.fetch).toHaveBeenCalledTimes(2)
    expect(global.fetch.mock.calls[0][0]).toBe("https://jsonplaceholder.typicode.com/posts/1")
    expect(global.fetch.mock.calls[1][0]).toBe("https://jsonplaceholder.typicode.com/posts/1/comments")
    expect(getByTestId("fetch-post").textContent).toBe("How to Become a Bad Developer")
    expect(getByTestId("fetch-error-comments").textContent).toBe("Failed to fetch")
    expect(queryByText("All fetched!")).toBeNull()
  })

  test("displays post error if API fails", async () => {
    // Create mock implementation that returns a promise we can control
    const postPromiseResolve = {}
    const postPromise = new Promise((resolve) => {
      postPromiseResolve.resolve = resolve
    })

    // Set up the mock with our controlled promise
    jest.spyOn(global, "fetch").mockImplementationOnce(() => postPromise)

    // Render component inside act
    let component
    await act(async () => {
      component = render(<MultipleFetches />)
    })

    const { getByTestId, getByText, queryByText } = component

    // Click button inside act
    await act(async () => {
      fireEvent.click(getByText("Fetch post and comments"))
    })

    // Resolve fetch with error inside act
    await act(async () => {
      postPromiseResolve.resolve({
        status: 500,
      })
      // Allow component to process the state update
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    // Make assertions after all state updates are complete
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch.mock.calls[0][0]).toBe("https://jsonplaceholder.typicode.com/posts/1")
    expect(getByTestId("fetch-error-post").textContent).toBe("Failed to fetch")
    expect(queryByText("All fetched!")).toBeFalsy()
  })
})
