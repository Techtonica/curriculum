# Week 4 — Pair Programming

This folder covers two topics: props, which are how a React component receives information from outside, and one plain-JavaScript project using classes and DOM manipulation.

## Prerequisites

1. Comfortable with JavaScript functions, especially arrow functions.
2. Familiar with array methods like `map` and `filter`.
3. Can run `npm install` in a project folder.
4. Comfortable with DOM manipulation from Week 2, which the mini project uses.
5. Familiar with JavaScript objects. Classes are new this week, and that is fine.

## Motivation

A React app is a set of small components, and props are how those components talk to each other. A parent decides a value and hands it down; the child receives it and displays it. Once you can pass a value into a component and get information back out, you can build most interfaces, because everything larger is those two moves repeated.

Props only travel downward. To send something back up, a parent passes down a *function* and the child calls it — the child never knows what the function does, and the parent stays in control of the value. That asymmetry is the idea worth leaving the week with, and React Button Part 2 is where you build it.

The mini project uses no React at all. Classes, `filter`, and `document.createElement` are plain JavaScript that works the same inside or outside a framework, and doing it by hand first makes it clearer what React is actually doing for you later.

## Learning Objectives

After finishing the required exercises, you will be able to:

1. Write a JavaScript class with methods that store and filter data.
2. Display a list of objects on a page using DOM manipulation.
3. Write a functional React component and render it inside another component.
4. Pass values into a component with props and use them in what it displays.
5. Pass a function into a component as a prop and call it when a button is clicked.
6. Send information from a child component back up to its parent.
7. Hold a piece of changing information with `useState`.

## Sequence and Relation

1. **Mini Project: OOP** (`mini-project-OOP`)
   - No React. Write an `Event` class that adds tickets with a price and a type, lets someone search by what they can afford, and lists the results on an HTML page. It goes first because it builds on the classes and DOM work you already know, before React introduces new vocabulary, and because it keeps the four React exercises together afterwards.
2. **Hello Component** (`hello-component`)
   - Props at their simplest: write a `<Hello />` component, pass it `firstName` and `lastName`, render one sentence. Two strings in, one sentence out.
3. **React Button Part 1** (`react-props`)
   - Build a `ColorButton` that takes a `color` prop for its background and an `onClick` prop that runs a function, then make three buttons in different colors. Adds two new uses of props: changing appearance, and passing in behavior.
4. **React Button Part 2** (`passing_props_from_child_to_parent`)
   - Continues the same project. The button now sends a message back up, and the parent stores it with `useState` and displays it. Do it right after Part 1 while the code is still familiar — this is the second half of one exercise, not a repeat.
5. **Button Component** (`button-component`)
   - More props practice: a button that takes a number, four of them showing 1 through 4, and a color that toggles on click and back again. This one deliberately covers the same ground as Part 1 with different details, so treat it as a check on whether props landed. By now you have seen `useState`, which makes the toggle easier to reason about.

## Relevant Materials

1. [React: Your First Component](https://react.dev/learn/your-first-component)
2. [React: Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
3. [React: Responding to Events](https://react.dev/learn/responding-to-events)
4. [React: State — A Component's Memory](https://react.dev/learn/state-a-components-memory)
5. [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
6. [MDN: Array filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
7. [MDN: Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
8. Techtonica's [First JS OOP Project lesson](../../javascript/first-js-oop-project.md)

## Common Mistakes and Misconceptions

1. All four React projects here use Vite, so you run `npm install` and then `npm run dev`. Older React projects elsewhere in the curriculum, and most tutorials written before 2023, use `react-scripts` from Create React App and start with `npm start` instead. Both serve a React app on localhost; Vite starts faster and is what the React team now points people to. If a project will not start, open its `package.json` and read the `scripts` block rather than guessing which command it wants.
2. A prop (short for "property") is read-only inside the component that receives it. If you need a value that changes, that is what `useState` is for.
3. `onClick={handleClick}` passes the function so React can call it on click. `onClick={handleClick()}` calls it immediately during render, which is usually not what you want. Use `onClick={() => handleClick("hi")}` when you need to pass an argument.
4. Component names must start with a capital letter. `<Hello />` renders your component; `<hello />` is treated as an HTML tag, and React will not always say why nothing appeared.
5. A component file must be exported and imported by name where it is used. A missing or misspelled import is the most common reason a component fails to render.
6. In the mini project the page does not update itself. After filtering your tickets you still have to put the results on the page. React is what removes that step later; plain JavaScript does not.
7. Take turns typing. React has a lot of small syntax details, and the person watching is usually the one who spots the missing bracket.
