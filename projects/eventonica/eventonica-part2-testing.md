# Eventonica - Part 2 - Jasmine Testing

### Primary Goals

- Practice writing tests with Jasmine
- Catch any bugs in your project's object-oriented code

### Overview

Now that you've finished Part 1 and your Event Recommender class is complete, you'll write Jasmine tests to ensure your code works as expected.

### Instructions for adding tests

1. Go back to your EventRecommender file where User, Event, and EventRecommender classes are defined, and refamiliarize yourself with what you did there. We will be adding _Jasmine tests_ for each function defined in your EventRecommender. At the bottom of that file, add the line: `module.exports = { EventRecommender, User, Event}`
   This line enables other JS files to use the classes you defined.
   If your classes are named differently, update that line to match the classes you wrote.
2. Run `npm install jasmine -g` (it will install Jasmine globally)
3. In your project root, run `jasmine init` (it will initialize Jasmine in your project, creates `jasmine.json` with Jasmine settings)
4. In the new `spec` folder created after you ran `jasmine init`, make a new file called `eventRecommenderSpec.js` and copy the code from [this file](starter-code/eventRecommenderSpec.js) into it.
5. In your project root, run `jasmine` (it will start your tests).
6. A lot of them will fail, and your challenge is to fix them. Debug why the tests are failing and update the Jasmine code and/or your classes to make the tests pass. Every time you make a fix, run `jasmine` again to check your tests. This might take a while but is good practice for debugging both your tests and your code.
7. When you get the existing tests working, add tests for `findEventsByDate` and `findEventsByCategory`
8. Add at least one more test of your choice. What else could be useful to test in your code?
