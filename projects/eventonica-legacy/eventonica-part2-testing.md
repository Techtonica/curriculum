# [LEGACY] Eventonica - Part 2a - Jasmine Testing

### Primary Goals

- Practice writing tests with Jasmine
- Catch any bugs in your project's object-oriented code

### Overview

Now that you've finished Part 1 and your model classes are complete, you'll write Jasmine tests to ensure your code works as expected.

### Instructions for adding tests

1. Go back to the file where User, Event, and your main Eventonica classes are defined, and refamiliarize yourself with what you did there. We will be adding _Jasmine tests_ for each function defined in the main Eventonica class.
1. Run `npm install jasmine -g` (it will install Jasmine globally)
1. In your project root, run `jasmine init` (it will initialize Jasmine in your project, creates `jasmine.json` with Jasmine settings)
1. In the new `spec` folder created after you ran `jasmine init`, make a new file called `eventonicaSpec.js` and copy the [starter spec code](starter-code/eventonicaSpec.js) into it.
1. In your project root, run `jasmine` (it will start your tests).
1. A lot of them will fail, and your challenge is to fix them. Debug why the tests are failing and update the Jasmine code and/or your classes to make the tests pass. Every time you make a fix, run `jasmine` again to check your tests. This might take a while but is good practice for debugging both your tests and your code.
1. When you get the existing tests working, add tests for other functions you have implemented
1. Add at least one more test of your choice. What else could be useful to test in your code?
