# Testing React Components with Jest and React Testing Library

## Week 8 Keywords and Questions

- What is `RTL`?
- What is `RTL` good for?
- What is the difference between Unit and Integration testing?
- What is an “assertion” in testing?
- What edge cases should I always keep in mind?
- When should you use `Jest` vs when should you use `RTL`?
- When is a `Jest` snapshot helpful?

## Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD](testing-and-tdd.md)
- [Intro to Jest](jest.md)

## Motivation

Learn a commonly used React testing tool.

`Jest` is designed to test JS and React code. `React Testing Library (RTL)` is a great tool to use with `Jest` to test that your component is rendering and behaving as expected from the perspective of the user, as opposed to the perspective of the developer. The idea is that the most critical things that you don't want to break are the experience of the end user - for example, do you want a test for a button to fail when its internal function name changes or gets refactored? It's probably more important that the component renders at all, that it renders with the right styles, and it behaves correctly when clicked.

**Which companies use Jest + RTL testing?**

- [Gap](https://www.gap.com/)
- [Course Hero](https://www.coursehero.com/)
- [Graphy](https://graphyapp.com/)
- [Brightside Health](https://www.brightside.com/)

## Objectives

_Participants will be able to:_

- Create a testing structure with `Jest` + `RTL`
- Create assertion functions
- Generate, display and watch tests
- Become familiar with `Jest` snapshot testing

## Specific Things to Learn

- Write test assertions using `Jest` + `RTL`
- Recognize when to use `RTL`
- The basic difference between unit and integration testing

## Materials

> Note: How to use these links is described in the Lesson section.

- [RTL Official Site](https://testing-library.com/)
- [freeCodeCamp: React Testing Library – Tutorial with JavaScript Code Examples](https://www.freecodecamp.org/news/react-testing-library-tutorial-javascript-example-code/)

## Lesson

### React Testing Library

1. Read these 2 "React Testing Library: Getting Started" pages. (5 min)

- [Getting Started](https://testing-library.com/docs/)
- [Guiding Principles](https://testing-library.com/docs/guiding-principles)

2. Work through this freeCodeCamp tutorial (~30 min): [React Testing Library – Tutorial with JavaScript Code Examples](https://www.freecodecamp.org/news/react-testing-library-tutorial-javascript-example-code/)
3. Follow along with this video series by [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg) (~ 90 min. Each one is 5-15 min. Feel free to take a break at some point between videos.):

- [RTL Tutorial #1 - Introduction (start at 2:00)](https://youtu.be/7dTTFW7yACQ?t=119)
- [RTL Tutorial #2 - The Importance of Testing](https://youtu.be/tit8PecSH70)
- [RTL Tutorial #3 - Types of Test](https://youtu.be/n_sS-GAgZ98)
- [RTL Tutorial #4 - Structure of Tests](https://youtu.be/SppbtlpPZu4)
- [RTL Tutorial #5 - Intro to Query Methods](https://youtu.be/Yghw9FkNGsc)
- [RTL Tutorial #6 - Priority](https://youtu.be/PLL5Pvuk-tw)
- [RTL Tutorial #7 - Using Query Methods](https://youtu.be/l9qr3EuLE_8)
- [RTL Tutorial #8 - Assertions](https://youtu.be/3ugQRXRToFA)
- [RTL Tutorial #9 - Describe Block](https://youtu.be/kVzw_f7TfCE)
- [RTL Tutorial #10 - Fire Events](https://youtu.be/0Y11K7KSC80)
- [RTL Tutorial #11 - Integration Tests](https://youtu.be/6wbnwsKrnYU)

  You'll be using previous methods a lot, while these next ones are likely necessary only a couple times per application.

- [RTL Tutorial #12 - Finding Async Elements with FindBy](https://youtu.be/V2wWLM8VX5k)
- [RTL Tutorial #13 - Mocking Requests](https://youtu.be/TBZy-Rc-xX0) - You should not be testing outside apps. Apps should be testing themselves, and this includes your own backend. You don't want to be testing things you have not control over.
- [RTL Tutorial #14 - Before &amp; After Each](https://youtu.be/MtiQMhzjQrY)

### Jest Snapshots

Follow just these 2 sections about snapshot testing. Use inside any of your practice apps from this outline or the [Jest](jest.md) outline (10 min):

- [Testing React components: getting to know snapshot testing](https://www.valentinog.com/blog/testing-react/#testing-react-components-getting-to-know-snapshot-testing)
- [Demystifying snapshot testing](https://www.valentinog.com/blog/testing-react/#demystifying-snapshot-testing)

Read this, but no need to try it now. This may come in handy later. (2 min): [Effective Snapshot Testing: Snapshot Diff](https://kentcdodds.com/blog/effective-snapshot-testing#snapshot-diff)

**When should I use Jest snapshots?**

- Most of the time you want to test CSS in your component.
- To test the overall structure of your component, and how major variations differ. For example, if you have a component that can switch between a light and a dark theme, you probably want 1 snapshot per theme.
- Breakpoint differences! For example, when mobile layout is different then desktop layout, you should have 2 snapshots.

**When should I not use Jest snapshots?**

- For non-react JS functions, use plain `Jest` instead.
- If you only want to test the logic of just one CSS rule changing, like just the `fontSize` changing if there's a prop called `textSize`, use `React Testing Library`.

  - [How to test a className with Jest and React Testing Library](https://www.semicolonworld.com/question/72512/how-to-test-a-classname-with-jest-and-react-testing-library)
  - [How to test if your element has specific CSS values with `toHaveStyle`](https://github.com/testing-library/jest-dom#tohavestyle)

- If you want to test behavior, like whether text changes on hover, you should use `React Testing Library`.
- [Things to avoid with snapshots (2 min)](https://kentcdodds.com/blog/effective-snapshot-testing#things-to-avoid-with-snapshots)

### Supplemental Materials

- For an overview of how this framework compares to others, see the [General Testing Framework Comparison Chart](<[/testing-and-tdd/compared-testing-frameworks.md#testing-frameworks-overview](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/compared-testing-frameworks.md#testing-frameworks-overview)>).
