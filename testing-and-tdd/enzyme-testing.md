# Adding Enzyme Tests to your React project

### Projected Time
About 1.5 hours

- Lesson:  30-45 min

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD](testing-and-tdd.md)
- [Adding Jasmine Chai/Mocha Tests to your project](jasmine-testing.md)

### Motivation

- As an open source testing tool developed by Airbnb, Enzyme is stable and likely to be use in various projects.
- Enzyme is officially recommended by React and designed to have painless installation and usage when pair with Jest in React projects.
- On the other hand, Enzyme is a testing utility, not a framework. It is unopinionated and can be pair with testing framework other than Jest, including Jasmine.
- Enzyme greatly increases the number of methods available, resulting in a simpler and more readable interface for testing.

### Objectives

**Participants will be able to:**

- Install Enzyme in React.
- Understand the differences between different rendering methods.
- Perform basic testing with Enzyme as a way to render and traverse the DOM.

### Specific Things To Teach

- What and why Enzyme and Jest
- Installation and configuration
- Shallow vs Mount vs Render
- Common Enzyme methods for traversing and manipulating the DOM

### Materials

- [Lecture Slides](https://docs.google.com/presentation/d/1plJI0Sdx4WiXfSWLHiTVyYxvXaMsa0_HVUGtwpgByEE/edit?usp=sharing)
- [Lesson](https://medium.com/@wasuradananjith)
- [Enzyme Video by JS Playground](https://www.youtube.com/watch?v=nvL2ha0XUYo)

### Lesson

Work through parts 1, 2, 3 & 4 of [this "Testing with Jest & Enzyme in React" tutorial by Wasura Wattearachchi](https://medium.com/@wasuradananjith). This should take about 30 minutes.

#### Additional Resource
- [JS Playground's 5 free video on React testing](https://www.youtube.com/watch?v=aSQ8v9JH5C8&list=PLGDf0elkI13EfDa45q-q1YpAIMBl5mjab)
- [Enzyme Tutorial - How to Write Test Code for React](https://www.youtube.com/watch?v=nvL2ha0XUYo)
- [React Testing with Jest and Enzyme](https://www.udemy.com/react-testing-with-jest-and-enzyme/) donated by the awesome Bonnie Schulkin.

### Common Mistakes / Misconceptions

- While mount() and render() is more powerful than shallow(), the rendering of nested children will slow down the testing. In unit testing, shallow() is the perferred method for many.
- When testing, remember to test a fail case as well to avoid false-positive results.

### Challenge

Read Jest's tutorial on [Snapshot Testing](https://jestjs.io/docs/en/tutorial-react#snapshot-testing) and try to implement the test on the code created in the lesson done above.

### Check for Understanding

Find a partner, then go to the test file of Airbnb's [Rheostat's project](https://github.com/airbnb/rheostat/blob/master/test/slider-test.jsx). Pick an it() test statment that contains either shallow or mount, then try to guess what it does and explain it to your partner. Look up Enzyme doc for unfamiliar methods. Note that the test file also uses sinon and chai. In those cases, the methods may be found in the documentation for sinon or chai instead.
