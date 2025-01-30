# Jest Unit & Integration Testing

You have been given a simple application consisting of a service module and a controller module, you need to write tests for both files using Jest.

## Application Structure

Imagine we have a simple application that fetches user data from an API and displays it. Our application consists of two parts:

- **Service Module (`userService.js`):** Responsible for fetching user data from an API.
- **Controller Module (`userController.js`):** Uses the service to fetch user data and sends it to the view.

## Create the Following Test Files:

- Create an unit tests for `UserService` to verify that the service correctly fetches user data and handles errors. Simulate a network requests without actually making HTTP calls (`userService.test.js`).
- Create an integration test for `UserController` to verify that the controller correctly delegates the request to the service and passes the response along. This test should ensure that the interaction between the controller and the service works as expected (`userController.test.js`)

## Running Your Tests

You will need to run the following commands: `npm install --save-dev jest` and `npm run test` to run your tests.
