// TODO: Step 2 - Basic API tests
const request = require("supertest");
const app = require("../server");
const setup = require("../setup");

describe("TODO API Tests", function () {
  describe("GET /", function () {
    it("should return all todos", function (done) {
      // TODO: Implement test for GET route
      // HINT: This test should verify that the API returns the expected todo items

      // Sample expected data structure:
      const todoContents = [
        { id: 1, entry: "Learn supertest" },
        { id: 2, entry: "Learn abstraction patterns" }
      ];
      const expectedResults = JSON.stringify({
        error: false,
        todo: todoContents
      });

      // TODO: Create a mock database function
      const mockGetTodo = function (todoCallback) {
        // YOUR CODE HERE
        // HINT: Call todoCallback with (false, { rows: todoContents })
      };

      // TODO: Use setup.constructRoutes to build routes with mock database
      // YOUR CODE HERE

      // TODO: Use supertest to make HTTP GET request and verify results
      // HINT: request(app).get('/').expect(200, expectedResults, done);

      // YOUR CODE HERE
      done(); // Remove this when you implement the test
    });

    it("should handle database errors", function (done) {
      // TODO: Implement test for database error handling
      // HINT: Mock database function should call callback with error

      // YOUR CODE HERE
      done(); // Remove this when you implement the test
    });
  });

  describe("POST /", function () {
    it("should create a new todo", function (done) {
      // TODO: Implement test for POST route
      // HINT: Test should send JSON data and verify response

      // YOUR CODE HERE
      done(); // Remove this when you implement the test
    });

    it("should validate required fields", function (done) {
      // TODO: Implement test for validation
      // HINT: Send request without 'entry' field and expect error

      // YOUR CODE HERE
      done(); // Remove this when you implement the test
    });
  });
});
