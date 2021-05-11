# React State

### Projected Time

Total: ~ 2 hours

- Lesson: 45 mins
- Guided Practice: 45 mins
- Independent Practice: 30 mins
- Check for understanding: 5 mins

### Prerequisites

- [Intro to React]()
- [React Props]()
New slides template: https://docs.google.com/presentation/d/1VRJQ8BdwFfRMeXMNYgiWN7SN3If5FosJLkFyCGPmczw/edit?usp=sharing

### Motivation

React allows developers to create large web applications that can change data without reloading the page.

[Facebook](https://www.facebook.com) created React as a framework to create reuseable components, like posts or comments, and allow the user see updates instantly.

### Objectives

**Participants will be able to:**

- Explain some advantages of React state
- Explain the main difference between React props and state
- Become familiar with how state is implemented

### Specific Things to Learn

- What is React state?
- What is the difference between React props and state?
- When to use React props
- When to use React state

### Materials
[Props vs State article by Kent C Dodds (15 min read)](https://kentcdodds.com/blog/props-vs-state)
[React Official Docs: Using the state hook(15 min read)](https://reactjs.org/docs/hooks-state.html)

## Lesson

Plan:
State is the reactive part of react
Light switch code pen example
difference between props and state: external v internal management
manager -> employee, owner -> dog, person -> toaster
assignments, meetings - time management, code creation
food, walks, let in or out - sleep/wake, emotions, running or sitting
toast, start lever, timer - heat up, pop up based on timer, turn off

#### Reading Time
[Props vs State article by Kent C Dodds (15 min read)](https://kentcdodds.com/blog/props-vs-state)
[React Official Docs: Using the state hook (15 min read)](https://reactjs.org/docs/hooks-state.html)

### Common Mistakes / Misconceptions

1. It may take a few days for props v state to sink in - this is normal.  For now, try to remember the basic reasons you would use one instead of the other. No need to memorize the syntax yet.
2. Don't forget that variables in JSX must be enclosed in brackets. Example: `<div className={props.classNames}>Hello {props.name}, your lights are {isLightOn ? "on" : "off"}</div>`

### Guided Practice

We'll create a random quote display using React. The application will display a random quote when a user clicks on button

[Starter Code](https://codepen.io/vegetabill/pen/RwGvOVg?editors=1010)

1. QuoteGenerator - the top-level app
1. QuoteText - displays the quote text and speaker name
1. QuoteButton - user clicks on it to pick a new random quote

#### Test Data

The full set is in the starter code link above.

```js
// Source: https://www.mentalfloss.com/article/53181/inspiring-quotes-10-influential-women-tech
const QUOTES = [
  {
    text:
      'A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.',
    speaker: 'Grace Hopper'
  }
  //...
];

class QuoteGenerator extends React.Component {
  render() {
    return (
      <div>
        <h2>Women in Tech Random Quotes</h2>
        <div>Quote Text</div>
        <button>Quote Button</button>
      </div>
    );
  }
}

ReactDOM.render(<QuoteGenerator />, document.querySelector('#react'));
```

#### Create the components for the quote generator app

You will need to replace the placeholders above with actual `QuoteText` and `QuoteButton` components.

For QuoteText, create a component that takes a `quote` prop that matches the shape of an element in the `QUOTES` array, with a `text` and `speaker` property.

```js
class QuoteText extends React.Component {
  render() {
    return (
      <div>
        <p>“{this.props.quote.text}”</p>
        <h3>{this.props.quote.speaker}</h3>
      </div>
    );
  }
}
```

Now create a QuoteButton that has a button and a prop `onClick` that will be the function called when a user clicks on the button.

[CodePen](https://codepen.io/vegetabill/pen/vYXbbxz)

```js
class QuoteButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>New Quote</button>;
  }
}
```

Now that you have those two pieces, use them in the top-level `QuoteGenerator` component.

#### Create QuoteGenerator, the top-level component

```js
class QuoteGenerator extends React.Component {
  render() {
    return (
      <div>
        <h2>Women in Tech Random Quotes</h2>
        <QuoteText quote={this.state.quote} />
        <QuoteButton onClick={() => this.changeQuote()} />
      </div>
    );
  }
}
```

Now you just have to define the `changeQuote` function. You can do it any way you want, but one way is shown below.

```js
class QuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.getRandomQuote()
    };
    this.changeQuote.bind(this);
    this.getRandomQuote.bind(this);
  }

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
  }

  changeQuote() {
    this.setState({ quote: this.getRandomQuote() });
  }

  render() {
    return (
      <div>
        <h2>Women in Tech Random Quotes</h2>
        <QuoteText quote={this.state.quote} />
        <QuoteButton onClick={() => this.changeQuote()} />
      </div>
    );
  }
}
```

### Independent Practice
For the next 30 minutes, practice accomplishing the task below.  After that, you can peek at the finished codepen.

Instead of random quotes, modify `QuoteButton` so it displays two buttons, `Previous` and `Next` that go through the `QUOTES` array in order.
  - On each new button's onClick method, change the state with `setQuote(*add logic here*)`.
  - When you reach either end of the list, it's up to you if it "wraps around" to the other end or if the Previous or Next button are disabled on the ends.
  - When newly added, the state should be updated to display it as the current quote.

#### Finished Result

This [CodePen](https://codepen.io/vegetabill/pen/vYXbbxz) has an example of a finished result.

### Check for Understanding
  - Explain some advantages of React state.
  - Explain the main difference between React props and state.
  - If you aren't sure about either of these, write them down and figure it out with a peer before moving on.

### Optional Extensions
  - Add a form to the above so the user can add their own quote to the end of the `QUOTES` array.
  - [Build a Pokedex with React ](https://blog.cloudboost.io/lets-build-a-pokedex-with-react-part-1-e1ba0b9387a7)
