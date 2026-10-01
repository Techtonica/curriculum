# Jest Unit & Integration Testing

You have been given a simple application consisting of a service module and a controller module, you need to write tests for both files using Jest.

## Application Structure

Imagine we have a simple application that fetches user data from an API and displays it. Our application consists of two parts:

- **Service Module (`userService.js`):** Responsible for fetching user data from an API.
- **Controller Module (`userController.js`):** Uses the service to fetch user data and returns it to the caller.

## Create the Following Test Files:

- Create a unit test for `UserService` to verify that the service correctly fetches user data and handles errors. Simulate a network request without actually making HTTP calls (`userService.test.js`).
- Create a unit test for `UserController` to verify that the controller correctly delegates the request to the service and passes the response along, using a mocked `UserService` (`userController.test.js`).

Note: Although this controller currently only delegates to the service, testing the delegation gives us a simple example of mocking a dependency. In a larger application, a controller might also validate input, transform data, or choose how errors are handled.

### Bonus: Integration Test

Once your unit tests pass, try writing a real integration test: use the actual `UserService` (not a mock) together with `UserController`, and confirm the two work correctly together. Since you don't want a test that depends on a live network call, mock only `fetch` itself — that way both real classes still run, and only the true external dependency (the network) is faked.

## Running Your Tests

You will need to run the following commands: `npm install --save-dev jest` and `npm run test` to run your tests.

If you're new to testing, `tryIt.js` runs `getUserData()` directly and prints the result to your terminal, which is useful for seeing what the function returns before you write Jest assertions. It is not a Jest test itself.
