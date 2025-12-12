# Adding Enzyme Tests to your React project

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD](testing-and-tdd.md)
- [Adding Jasmine Chai/Mocha Tests to your project](jasmine-testing.md)

### Motivation

- As an open source testing tool developed by Airbnb, Enzyme is stable and likely to be used in various projects.
- Enzyme is officially recommended by React and designed to have painless installation and usage when pairing with Jest in React projects.
- On the other hand, Enzyme is a testing utility, not a framework. It is unopinionated and can be pair with a testing framework other than Jest, including Jasmine.
- Enzyme greatly increases the number of methods available, resulting in a simpler and more readable interface for testing.

### Objectives

**Participants will be able to:**

- Install Enzyme in React.
- Understand the differences between different rendering methods.
- Perform basic testing with Enzyme as a way to render and traverse the DOM.

### Specific Things to Learn

- What and why Enzyme and Jest
- Installation and configuration
- Shallow vs Mount vs Render
- Common Enzyme methods for traversing and manipulating the DOM

### Materials

- [Enzyme tests slides](https://docs.google.com/presentation/d/1plJI0Sdx4WiXfSWLHiTVyYxvXaMsa0_HVUGtwpgByEE/edit?usp=sharing)
- Enzyme & Jest testing series by Wasura Wattearachchi
  - [Testing with Jest and Enzyme in React-Part 1 (How to configure and run a test using Jest?) (5 mins read)](https://wasuradananjith.medium.com/testing-with-jest-and-enzyme-in-react-part-1-162ce7466128)
  - [Testing with Jest and Enzyme in React-Part 2 (How to integrate Enzyme with Jest in Testing?) (5 mins read)](https://wasuradananjith.medium.com/testing-with-jest-and-enzyme-in-react-part-2-how-to-integrate-enzyme-with-jest-in-testing-b88917787285)
  - [Testing with Jest and Enzyme in React-Part 3 (Best Practices when testing with Jest and Enzyme) (6 mins read)](https://wasuradananjith.medium.com/testing-with-jest-and-enzyme-in-react-part-3-best-practices-when-testing-with-jest-and-enzyme-ae3fe0c39d06)
  - [Testing with Jest and Enzyme in React-Part 4 (shallow vs. mount in Enzyme) (7 mins read)](https://wasuradananjith.medium.com/testing-with-jest-and-enzyme-in-react-part-4-shallow-vs-mount-in-enzyme-d60cad73f85c)
- [Enzyme Video by JS Playground (10 mins watch)](https://www.youtube.com/watch?v=nvL2ha0XUYo)

### Lesson

- Read through lesson slides [Enzyme tests](https://docs.google.com/presentation/d/1plJI0Sdx4WiXfSWLHiTVyYxvXaMsa0_HVUGtwpgByEE/edit?usp=sharing)
- Watch [Enzyme Tutorial - How to Write Test Code for React (10 mins watch)](https://www.youtube.com/watch?v=nvL2ha0XUYo)
- Work through parts 1, 2, 3 & 4 of the "Testing with Jest & Enzyme in React" series by Wasura Wattearachchi](https://medium.com/@wasuradananjith). This should take about 30 minutes.

#### Supplemental Resource

- [JS Playground&#39;s 5 free videos on React testing](https://www.youtube.com/watch?v=aSQ8v9JH5C8&list=PLGDf0elkI13EfDa45q-q1YpAIMBl5mjab)
- [React Testing with Jest and Enzyme](https://www.udemy.com/course/react-testing-with-jest-and-enzyme/) created by the volunteer [Bonnie Schulkin](https://github.com/bonnie).
- Want to dive deep into learning testing and automation, do check [Test Automation University - Applitools](https://testautomationu.applitools.com/)
- For an overview of how this framework compares to others, see the [General Testing Framework Comparison Chart](<[/testing-and-tdd/compared-testing-frameworks.md#testing-frameworks-overview](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/compared-testing-frameworks.md#testing-frameworks-overview)>).

### Common Mistakes / Misconceptions

- While mount() and render() is more powerful than shallow(), the rendering of nested children will slow down the testing. In unit testing, shallow() is the preferred method for many.
- When testing, remember to test a fail case as well to avoid false-positive results.

### Challenge

Read Jest's tutorial on [Snapshot Testing](https://jestjs.io/docs/en/tutorial-react#snapshot-testing) and try to implement the test on the code created in the lesson done above.

### Check for Understanding

Find a partner, then go to the test file of Airbnb's [Rheostat&#39;s project](https://github.com/airbnb/rheostat/blob/master/test/slider-test.jsx). Pick an it() test statement that contains either shallow or mount, then try to guess what it does and explain it to your partner. Look up Enzyme doc for unfamiliar methods. Note that the test file also uses Sinon and chai. In those cases, the methods may be found in the documentation for Sinon or chai instead.
