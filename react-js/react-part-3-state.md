# React State

## Week 4 Keywords and Questions

- What is React state?
- What is the difference between React props and state? (When should you use each one?)

### Prerequisites

- [Intro to React](./react-part-1-intro.md)
- [React Props](./react-part-2-props.md)

### Motivation

React allows developers to create large web applications that can change data without reloading the page. The changes are managed as the component's _state_. React watches _state_, and only changes parts of the page where the state changes.

[Facebook](https://www.facebook.com) created React as a framework to create reusable components, like posts or comments, and allow the user to see updates instantly. For example, submitting a new comment would add that new data to the _state_. Because the _state_ changed in the post, the comment section would automatically update, while the image or title wouldn't have to update. This takes a lot less computing power, and it is more satisfying than having to refresh the page to notice the change.

### Objectives

**Participants will be able to:**

- Explain some advantages of React state
- Explain the main difference between React props and state
- Become familiar with how state is implemented

### Materials

See Lesson for how to use each.

- [React-State Slides](https://docs.google.com/presentation/d/1rUowQmt-JBKWvyNnoAxdqdUfo2Xs-KtinCTrqgjt5CY/edit#slide=id.g832b659498_0_442)
- [Light Switch CodePen example](https://codepen.io/alodahl/pen/YzZyaKe)
- [Props vs State article by Kent C Dodds (15 min read)](https://kentcdodds.com/blog/props-vs-state)
- [React Official Docs: State: A Component's Memory(15 min read)](https://react.dev/learn/state-a-components-memory)
- [React Official Docs: API Reference](https://react.dev/reference/react/useState)

## Lesson

### React State

State is the reactive part of react.

- Spend 10 minutes looking at this code pen example of a simple toggle state: _checked_ or _unchecked_. If you fork it you can experiment, or delete the comments to see just the code. https://codepen.io/alodahl/pen/YzZyaKe
- Take a minute or two to look at the checkbox html in the inspector. Watch how the attributes change as you check and uncheck the box.

### Props vs State

To put it plainly, the difference between props and state is whether you need _external_ or _internal_ management for your component. **Props** are what the component needs to _receive_ to do its job, while **state** is what it manages _on its own_.

What are some real world examples? If we pretend these are components, this is how it would look:

**Software Employee**

- Props to pass in: assignments, meetings
- State to self-manage: time management, code creation, lunch

**Dog**

- Props: food, water, let in or out
- State: sleep/wake, emotions, running or sitting

**Toaster**

- Props: start lever, timer setting
- State: heat up based on start, pop-up based on timer, turn off after pop-up happens

**Car**

- Props: // add 3 examples yourself - what does the driver control?
- State: // add 3 examples yourself - what does a car control automatically?

Take 3 minutes to come up with examples for "Car".
We'll practice using both props and state in the same component in Guided Practice.

#### Reading Time

- [Props vs State article by Kent C Dodds (15 min read)](https://kentcdodds.com/blog/props-vs-state)
- [React Official Docs: State: A Component's Memory (15 min read)](https://react.dev/learn/state-a-components-memory)
- [React Ofical Docs: API Reference/Hooks/useState](https://react.dev/reference/react/useState)

### Reminders

1. It may take a few days for props v state to sink in - this is normal. For now, try to remember the basic reasons you would use one instead of the other. No need to memorize the syntax yet.
2. Don't forget that JS variables inside JSX must be enclosed in curly braces. Example: `<div className={props.classNames}>Hello {props.name}, your lights are {isLightOn ? "on" : "off"}</div>`

- Note that boolean `isLightOn` is the name of an example _state_.

### Guided Practice

We'll create a random quote display using React. The application will display a random quote when a user clicks on button.

[Starter Code](https://codepen.io/alodahl/pen/RwVbgpQ?editors=1010)

1. QuoteGenerator - the top-level app
1. QuoteText - displays the quote text and speaker name
1. QuoteButton - user clicks on it to pick a new random quote

#### Test Data

The full set is in the starter code link above.

```js
// Source: https://www.mentalfloss.com/article/53181/inspiring-quotes-10-influential-women-tech
const quotes = [
  {
    text: 'A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.',
    source: 'Grace Hopper'
  }
  //...
];

const QuoteGenerator = () => (
  <div>
    <h2>Women in Tech Random Quotes</h2>
    <div>Quote Text</div>
    <button>Quote Button</button>
  </div>
);

ReactDOM.render(<QuoteGenerator />, document.querySelector('#react'));
```

#### Create the components for the quote generator app

You will need to replace the placeholders above with actual `QuoteText` and `QuoteButton` components.

For QuoteText, create a component that takes a `quote` prop that matches the shape of an element in the `quotes` array, with a `text` and `speaker` property.

```js
const QuoteText = (props) => (
  <div>
    <p>{props.quote.text}</p>
    <h3>{props.quote.speaker}</h3>
  </div>
);
```

Now create a QuoteButton that has a button and a prop `onClick` that will be the function called when a user clicks on the button.

[CodePen](https://codepen.io/vegetabill/pen/vYXbbxz)

```js
const QuoteButton (props) => (
  <button onClick={props.onClick}>New Quote</button>;
);
```

Now that you have those two pieces, use them in the top-level `QuoteGenerator` component.

#### Create QuoteGenerator, the top-level component

```js
const QuoteGenerator () => (
  <div>
    <h2>Women in Tech Random Quotes</h2>
    <QuoteText quote={currentQuote} />
    <QuoteButton onClick={() => {}} />
  </div>
);
```

Now you just have to define the `onClick` behavior so it changes the quote.

```js
const QuoteGenerator () => {
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  return (
    <div>
      <h2>Women in Tech Random Quotes</h2>
      <QuoteText quote={currentQuote} />
      <QuoteButton onClick={() => setCurrentQuote(getRandomQuote())} />
    </div>
  );
}
```

One of the most complex parts of this example is that setCurrentQuote manages the state, but it is passed down as a prop to `QuoteButton`. Because the quotes are controlled and displayed in `QuoteGenerator`, quotes have to be managed there. The way `setCurrentQuote` is passed through the `onClick` prop is a _callback_. When `onClick` happens, `QuoteButton` triggers its `onClick` function, but that function, `setCurrentQuote`, is still executed here in `QuoteGenerator`.

### Extended Independent Practice

Instead of random quotes, modify `QuoteButton` so it displays two buttons, `Previous` and `Next` that go through the `quotes` array in order.

- On each new button's onClick method, change the state with `setCurrentQuote(*add logic here*)`.
- When you reach either end of the list, it's up to you if it "wraps around" to the other end or if the Previous or Next button are disabled on the ends.
- When newly added, the state should be updated to display it as the current quote.

#### Finished Result

This [CodePen](https://codepen.io/alodahl/pen/MWmgoEY) has an example of a finished result.

### Extensions (Optional)

- Add a form to the above so the user can add their own quote to the end of the `quotes` array.
- [Build a Pokedex with React ](https://blog.cloudboost.io/lets-build-a-pokedex-with-react-part-1-e1ba0b9387a7)

### Supplemental Materials

- [React Hooks: useState(With Practical Examples)](https://medium.com/@titoadeoye/react-hooks-usestate-with-practical-examples-64abd6df6471) - Medium Article (7 min read time)
