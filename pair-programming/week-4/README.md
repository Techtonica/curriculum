# Week 4 — Pair Programming

Welcome to Week 4! This is the week React really starts. You will build your
first components, pass information into them, and then learn how a component can
send information back. There is also one exercise with no React at all, which is
there on purpose. Remember the pair programming rhythm: one person drives (types)
while the other navigates (thinks out loud), and you switch often. React has a lot
of new vocabulary, so saying things out loud while you work matters even more this
week.

## What is in this folder

You will find these exercises this week:

1. **Hello Component** (`hello-component`) is your first React component. You
   write a `<Hello />` component, pass it `firstName` and `lastName`, and render
   "Hello, yourFirstName yourLastName" on the page.
2. **React Button Part 1** (`react-props`) has you build a `ColorButton`
   component that takes a `color` prop to set its background, plus an `onClick`
   prop that runs a function when the button is clicked. You make three buttons
   in different colors.
3. **React Button Part 2** (`passing_props_from_child_to_parent`) continues
   directly from Part 1. This time the button sends a message back up to the
   parent component, and the parent stores it with `useState` and displays it.
4. **Button Component** (`button-component`) is more props practice. You build a
   button that takes a number, make four of them showing 1 through 4, and make a
   button change color when it is clicked and change back when clicked again.
5. **Mini Project: OOP** (`mini-project-OOP`) is the change of pace. No React
   here. You write an `Event` class that can add tickets with a price and a
   ticket type, let someone search by the price they can afford, and then show a
   list of events on an HTML page.

## Why You Will See Some Ideas More Than Once

Two of the React exercises this week ask for something very similar. In React
Button Part 1 you build a button component that takes a prop and reacts to a
click. In Button Component you do that again, with a number instead of a color,
four buttons instead of three, and a color that toggles back and forth.

That repeat is worth doing rather than skipping:

- The **first time** you build a component, you are mostly following the shape of
  the example and hoping it works.
- The **second time**, you already have the picture in your head, so you can focus
  on *understanding why* the prop goes where it goes.

If the second one feels easy and you can explain it to your partner without
looking at the first, that is proof the idea landed. If it still feels shaky, that
tells you exactly what to review.

One thing that is **not** a repeat: React Button Part 1 and Part 2 are two halves
of the same exercise, not the same exercise twice. Part 1 sends information down
into the button. Part 2 sends information back up out of it. Do them in order and
treat Part 2 as the continuation it is.

**The vital concept this week is props.** Props are how a React component
receives information from the outside. Almost everything else this week is a
different angle on that one idea.

## Prerequisites

A few things that will help before you begin:

1. You are comfortable with JavaScript functions, especially arrow functions.
2. You have seen JavaScript array methods like `map` and `filter`.
3. You know how to run `npm install` in a project folder.
4. You are comfortable with DOM manipulation from Week 2, which the mini project
   uses.
5. You have seen JavaScript objects. Classes will be new, and that is fine.

If React feels like a lot of new words at once, that is completely normal.
Everybody feels that way in Week 4. The words settle after you have typed them a
few times.

## Motivation

React is what you will build the rest of the program in, and props are the first
real idea in React. A React app is a set of small components, and props are how
those components talk to each other. Once you can pass a value into a component
and pass a value back out, you can build almost any interface, because everything
bigger is made of those two moves repeated.

The mini project is here so React does not become the only tool you reach for.
Classes and DOM manipulation are plain JavaScript, and they stay useful whether or
not a framework is involved.

## Learning Objectives

After finishing this folder, you will be able to:

1. Write a functional React component and render it inside another component.
2. Pass values into a component with props and use them in what it displays.
3. Pass a function into a component as a prop and call it when a button is clicked.
4. Send information from a child component back up to its parent.
5. Hold a piece of changing information with `useState`.
6. Write a JavaScript class with methods that store and filter data.
7. Display a list of objects on a page using DOM manipulation.

## Sequence and Relation

A gentle order to follow:

1. Hello Component (`hello-component`)
2. React Button Part 1 (`react-props`)
3. React Button Part 2 (`passing_props_from_child_to_parent`)
4. Button Component (`button-component`)
5. Mini Project: OOP (`mini-project-OOP`)

Start with Hello Component, which is props at their simplest: two strings in, one
sentence out. React Button Part 1 adds using a prop to change how something looks
and passing in a function. Part 2 continues that exact project and adds sending
information back up, so do it right after while the code is still familiar.

Button Component comes next as your check-yourself repeat, and by then you have
seen `useState`, which makes the color toggle much easier to think about.

Save the mini project for last. It is the biggest one, and it is a different topic
entirely, so it is a good one to end on.

## Relevant Materials

Keep these open while you work:

1. [React: Your First Component](https://react.dev/learn/your-first-component)
2. [React: Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
3. [React: Responding to Events](https://react.dev/learn/responding-to-events)
4. [React: State — A Component's Memory](https://react.dev/learn/state-a-components-memory)
5. [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
6. [MDN: Array filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
7. [MDN: Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
8. Techtonica's [First JS OOP Project lesson](../../javascript/first-js-oop-project.md)

## Common Mistakes and Misconceptions

A few things that trip people up, so keep an eye out:

1. These folders do not all start the same way. `react-props` and
   `passing_props_from_child_to_parent` use Vite, so you run `npm install` and
   then `npm run dev`. `hello-component` and `button-component` use
   `react-scripts`, so you run `npm install` and then `npm start`. Check the
   `package.json` if you are not sure which one you are in.
2. Component names must start with a capital letter. `<Hello />` works,
   `<hello />` does not, and React will not always tell you clearly why.
3. Props are read-only inside the component that receives them. If you want a
   value that changes, that is what `useState` is for.
4. Passing a function as a prop trips almost everyone up once. `onClick={handleClick}`
   passes the function so React can call it later. `onClick={handleClick()}` calls
   it immediately when the component renders, which is usually not what you want.
   Add the arrow (`onClick={() => handleClick("hi")}`) when you need to pass an
   argument.
5. A component file needs to be exported and then imported where you use it. A
   missing or misspelled import is the most common reason nothing shows up.
6. In the mini project, remember the page does not update itself. After you filter
   your tickets you still have to put the results on the page yourself.
7. Take turns typing. React has a lot of small syntax details, and the person
   watching is often the one who spots the missing bracket.

## A Closer Look: What Props Actually Are

Props are the idea of the week, so let me slow down on them, because the word
sounds more technical than the thing is.

A React component is just a function that returns some markup. A prop is an
argument you pass to that function. That is genuinely all it is. When you write
this:

```jsx
<Hello firstName="Ada" lastName="Lovelace" />
```

React calls your `Hello` function and hands it an object with those values in it:

```jsx
function Hello({ firstName, lastName }) {
  return <h1>Hello, {firstName} {lastName}</h1>;
}
```

That is why props are described as flowing *down*. The parent decides the values,
and the child receives them and displays them. The child cannot reach up and
change what it was given, in the same way a normal function cannot change the
variable you passed into it.

So how does anything ever flow back *up*? That is what React Button Part 2 is
about, and it is the clever part. You cannot send a value up, but the parent can
pass down a *function*, and the child can call it:

```jsx
// Parent: I own the message, and I hand down a way to change it.
const [message, setMessage] = useState("Nothing clicked yet");

const updateMessage = (newMessage) => setMessage(newMessage);

return <ColorButton color="blue" onClick={() => updateMessage("Blue!")} />;
```

The child does not know what that function does. It just calls it when the button
is clicked. The parent is the one that decides what happens. Props still only flow
down. What flowed down was permission to speak.

Once that clicks, most of React makes sense, because nearly every React app is
that pattern repeated: values going down, functions going down so events can come
back up.

### And now the exercise with no React in it

The mini project is the one exercise this week without React, and the contrast is
worth noticing rather than skipping past.

When you filter tickets by price, you will write something like this:

```js
const affordable = tickets.filter((ticket) => ticket.price <= maxPrice);
```

That line has nothing to do with React. It is plain JavaScript, and you would
write the exact same line inside a React component. Array methods like `filter`
and `map` are not React features, and neither are classes. This matters because
after a few weeks of React it is easy to start believing that React is doing the
data work. It is not. You are.

What actually changes is the next step, after you have your filtered array.

In the mini project, you build the page yourself. You create an element, put text
inside it, and attach it to the document:

```js
const li = document.createElement("li");
li.textContent = event.name;
list.appendChild(li);
```

You are responsible for making the screen match the data. If the data changes
later, you have to remember to update the page too.

In React, you hand the array to your JSX and describe what each item should look
like:

```jsx
{affordable.map((ticket) => (
  <li key={ticket.type}>{ticket.type}</li>
))}
```

You never say "create an element" or "append it." You describe what it should look
like, and React works out what to change on the screen.

Same data work, two different ways of getting it onto the screen. React is a layer
built on top of JavaScript, not a replacement for it, and noticing that this week
is one of the more useful things you can take away, because everything underneath
keeps working the way it always did.

Happy coding! Enjoy working together.
