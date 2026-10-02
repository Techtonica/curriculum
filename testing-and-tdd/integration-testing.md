# Integration Testing

Integration testing is the process of testing the interaction between different modules or components of an application to ensure they work together as expected. While unit tests focus on isolated functions, integration tests focus on the "glue" between them—such as the connection between your API and your database.

## Specific Things to Learn

- The difference between unit testing and integration testing.
- How to set up a test database or use a mocking library for external services.
- How to write tests that cover the full request-response cycle.
- How to manage test data (seeding and cleaning up).

- **Code samples provided:**  
  We will explore these code samples during Guided Practice:  
  
  - **Step 1:** A snapshot of the TODO app that works but is neither tested nor optimized for testing.  
  - **Step 2:** The TODO app now includes basic unit tests to prevent regressions and demonstrates testing an external service dependency.  
  - **Step 3:** With a final structural update, the app now supports testing database interactions and includes relevant tests.

*(Note: Please refer to the course repository's `examples/integration-testing` folder for the updated code samples for these steps.)*

## Guided Practice

In this section, we will walk through the evolution of a TODO application from an untested state to a fully integrated testing suite.

1. **Analyze Step 1:** Observe how the logic is tightly coupled, making it difficult to test individual components without running the entire app.
2. **Implement Step 2:** Introduce unit tests and see how extracting logic into separate modules allows us to mock external API calls.
3. **Finalize Step 3:** Set up a test database environment and write integration tests that verify the data is correctly persisted and retrieved.

## Summary

Integration testing ensures that your application's components play well together. By moving from unit tests to integration tests, you gain confidence that the system as a whole functions correctly from the user's perspective.
