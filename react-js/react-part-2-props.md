# React Props

### Projected Time

Total: 1.5 hour

- Introductions: 5 min
- Guided Practice: 30 min
- JS versus JSX: 20 min
- Independent Practice: 20 min
- Check for understanding: 10 min

### Prerequisites

- [Intro to React](./react-part-1-intro.md)

### Motivation

React makes it easy to update your HTML as data changes and build complex apps out of simple, reusable components.

The reusable components help prevent duplication, but for this reason, React can start to look dense and complicated because you are able to fit more functionality into less code. Don't be overwhelmed - just focus on the fact that you are understanding more with each step.

### Objectives

**Participants will be able to:**

- Explain the purpose of `props` in React components.
- Be able to pass props from one component to another.

### Specific Things to Learn

- Passing props to a component instance
- Accepting and using props
- What props cannot do
- What is JSX?

## Lesson

### Guided Practice

1. Watch this 5 minute video, ["What is 'props'?"](https://youtu.be/KvapOdsFK5A).
1. Spend 5 minutes on this CodePen that shows one prop.  Fork it and try changing rules in the ".box" class, duplicating the line `<Box text="Hello World" />`, and changing the value in `text=""`. https://codepen.io/alodahl/pen/xxgoeMW
1. Spend 5 minutes on this CodePen that passes a prop to 3 instances of the same component.  There is still only one prop called "text". https://codepen.io/alodahl/pen/gOgNyEN.  Try changing the text on just one box.
1. Spend 5 minutes on this CodePen that now has 2 props: "text" and "color": https://codepen.io/alodahl/pen/dyNBLLQ.  Try changing the text colors.
1. What if you wanted to change a whole class of styles?  Spend 5 minutes changing the CSS here: https://codepen.io/alodahl/pen/poRXBmR
1. As you may notice, if you were trying to make a long list of say, 10 boxes, even though this is more efficient thank HTML, it's still a bit repetitive. Spend 5 minutes checking out this `Array.map` version of the boxes list. If you have time, change things like you did in the previous steps.  https://codepen.io/alodahl/pen/LYxwbro

### JS versus JSX
- Read these docs through to the "Specifying Children with JSX" section (15 min read): https://reactjs.org/docs/introducing-jsx.html
- Since JSX is not JS, you need to point out to the JSX that you want to use regular JS.  You can do this with curly braces.  Some examples are:
  - ``<div className={`box ${props.class}`}>`` - since string interpolation is a JS tool, and not JSX, string interpolation has to be inside curly braces.
  - `<p>{props.text}</p>`.  If you forget the braces, your page will render the string "props.text", which is likely not what you want. Try it in one of the CodePens.
  - `style={{color: "blue"}}`, where the first braces are to note "there will be JS in here", while the second set surrounds the style object: `{color: "blue"}`.


### Independent Practice

- Fork one of the React CodePens above, and delete everything in the "JS" section.  Give it a new name, like "Props Independent Practice".  Paste the following code into it, and try to create a mapped list of boxes that accept text as a prop to make 3 boxes that say "one", "two" and "three". Try to get as far as you can on your own before peeking at the previous example.

Stop after 20 minutes. If you finish early, try adding a second prop to each box.
  ```
  import React from 'https://cdn.skypack.dev/react@^17';
  import ReactDOM from 'https://cdn.skypack.dev/react-dom@^17';
  // Don't worry about these imports right now.


  const Box = props =>
      <div>
         This box says:
      </div>;

  const boxData = ["one","two","three"];

  const App = () => {
    return();
  };

  ReactDOM.render(<App />,
  document.getElementById("root"))
  ```

### Check for Understanding

  Make sure you can answer these questions. If you aren't sure about any of these, write them down and figure it out with a peer before moving on.

- [ ] Open [this CodePen example](https://codepen.io/alodahl/pen/LYxwbro). Point out which parts are:
  1. props
  2. JSX
  3. JS
- [ ] Why are props useful?
- [ ] Can you change props once they are in a new component?
