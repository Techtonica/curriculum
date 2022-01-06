# React: Pure Functions and Hooks

### Projected Time

Example: 80-100 minutes

- Lesson: 15-25 min
- Guided Practice: 15-25 min
- Independent Practice: 15-25 min
- Check for Understanding: 15 min

### Prerequisites

- [React JS Part 4](./react-part-4-component-hierarchies.md)

### Motivation

React is one of the most popular frameworks for front-end development. It is important to have a way to store and change component state that is efficient and easy to read. Components can have their own state, or use shared stateful logic. Before hooks, there were many different approaches to sharing stateful logic. Hooks are great because they introduce _one_ common way to reuse code. See [here](https://reactjs.org/docs/hooks-intro.html#complex-components-become-hard-to-understand) for more info

### Objectives

**Participants will be able to:**

- Understand what pure functions and pure components are
- Understand and use the `useState` hook
- Understand and use the `useEffect` hook
- Understand the benefits of using hooks

### Specific Things to Learn

_Pure functions_

- How are pure functions used in React?
- What is a pure component?

_React hooks_

- What versions of react support hooks?
- Why use hooks?
- When to use `useState` hook - How can I store state and change state using `useState`?
- When to use `useEffect` hook - How does a component know when to apply an effect? - How can I use this with state from `useState`?

### Materials

- [Pure functions in React](https://dev.to/keevcodes/pure-functions-in-react-2o7n)
- [Intro to React hooks](https://reactjs.org/docs/hooks-intro.html)
- [React hooks and state](https://reactjs.org/docs/hooks-state.html)

### Lesson

#### What are pure functions?

Look at the functions in the [pure functions article](https://dev.to/keevcodes/pure-functions-in-react-2o7n) (also copied below). Why is `multiply` _not_ a pure function? Why is `multiplyNumber` a pure function?

```js
let globalNumber = 4;
const multiply = (x) => {
 return globalNumber *= x
}
```

```js
const multiplyNumber = (x) => {
 return x * 2;
}
```

Pure components, also called (Stateless)Functional Component, or _(S)FC_ in React, are pure functions - they are components that do not store any internal state, and are pure with respect to their props. For example,

```js
const HeadlineComponent = props => (<h1>{props.headline}</h1>)
```

#### Why were hooks introduced?

Read [Intro to react hooks](https://reactjs.org/docs/hooks-intro.html) (5-10 minutes).

Note: React hooks were introduced in version 16.8. Previous alternatives to hooks include [render props](https://reactjs.org/docs/render-props.html),
[higher-order components](https://reactjs.org/docs/higher-order-components.html) such as the HOC used to connect a component to [the redux store](https://code.likeagirl.io/how-to-create-a-connected-hoc-with-react-and-redux-8631f7b1497).
Right now you don't have to understand all of these alternatives in depth. The main point to note is there were a lot of solutions for the same problem.Hooks introduce _one_ concept that solves these problems.

#### How do I use hooks?

1. Read [Hooks Overview](https://reactjs.org/docs/hooks-overview.html)
2. Walk through the examples on [Using the State Hook](https://reactjs.org/docs/hooks-state.html) to understand the state hook and its Class equivalent (in the counter `Example` component ). Use [this code sandbox](https://codesandbox.io/s/techtonicahooks0-8uy6j), to play around with these two ways of creating the same functionality.

_Discuss with a partner:_
How do hooks achieve the same logic as the class component? Can you see how the code with hooks is cleaner?

### Guided Practice

**Goal: understand how we would use React hooks to implement a simple to-do list.**

A user should be able to:

- Add items (via text input field)
- Press a button 'All done' which will clear all todo items, and a message on the top will say 'Good job!'
- Press a button 'Clear all' which will clear all todo items
- When there are more than 5 items on the list, there should be a status message on the top that says 'Try to complete current tasks before adding new ones! '
  This will walk through one possible approach to solving this using React hooks. Note that there is no one right answer or one right approach!

Please fork [this template](https://codesandbox.io/s/techtonicatodotemplate-conbd) and follow along with this tutorial.

0. **What should the component look like?**
   We can start with a 'sketch' of what our component might look like. This does not need UI or styling. We start with an outline so that we can think about what information and functionality this component will need.

For example,

```js
const TodoApp = () => {
  return (
    <div>
      <b>status here</b>
      <form>
        <label>
          New item:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Add" />

        <div>
          <button> Clear all </button>
          <button> All done </button>
        </div>
      </form>

      <h2> My Todos:</h2>
      <ul>
        <li>item1</li>
        <li>item2</li>
      </ul>
    </div>
  );
};

```

2. **What information do we need? (aka what states do we need?)**

We want to store a list of todos and a status message. We need to store the 'new item' value that the user is typing into the 'Add todo' input field

At the top of the component we can use `useState` to do so:

```js
const TodoApp = () => {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('')
  const [newTodo, setNewTodo] = useState('');

  return (...)
  }
```

3. **When should this information update?**
   We now think about when we want these states to update.

_Adding a Todo_

- When we type in the input field, we should store that value as 'newTodo`
- When we press the button add a todo item, the `items` list should update (that `newTodo` item should be appended to `items`)
- After we add this item, the input field should clear (`newTodo` should be reset to `''`)

_Clearing Todos_

- When a user presses 'all done', `items` should be reset (set to `[]`), and `status` should be updated to be `Good Job!`
- When the user presses 'clear all', `items` should be reset (set to `[]`)

_Too many items_
When `items.length` is more than 5, the message should update to 'Try to complete current tasks before adding new ones!'

This could look like:

```js
const TodoApp = () => {
  const [items, setItems] = useState(["Item one"]);
  const [status, setStatus] = useState("");
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <b>{status}</b>
      <form
        onSubmit={e => {
          e.preventDefault();
          // We want update items to be old items + a new item
          // we do this with setItems
          // We also want to reset the input field value
          setItems([...items, newTodo]);
          setNewTodo("");
        }}
      >
        <label>
          New item:
          <input
            type="text"
            name="name"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
          />
        </label>
        <input type="submit" />

        <div>
          <button
            onClick={e => {
              e.preventDefault();
              setItems([]);
            }}
          >
            Clear all
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              setItems([]);
	      setStatus("Good job!");
            }}
          >
            All done
          </button>
        </div>
      </form>

      <h2> My Todos:</h2>
      <ul>
        {items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
```

**Are there side effects of any actions? We can use `useEffect` for this**
Yes! In this example, every time an item is added we want to check the length of `items`. If there are more than 5 items, we want to update `status` to 'Try to complete current tasks before adding new ones!'

```js
useEffect(()=>{
    if (items.length > 5){
      setStatus('Try to complete current tasks before adding new ones!')
    }
  }, [items])
```

Note the second argument is an optional array. This means that we only want the effect to run when `items` changes. This is because the status does not care about when other states update, such as `newTodo` .

Bonus: Notice that after we press 'All done', the 'Good Job!' status will remain until we change it to 'Try to complete current tasks before adding new ones!' (and vise versa). This UI could be confusing for the user. Why would this be confusing, and how could we fix it? Discuss with a partner.

A sample completed component is [here](https://codesandbox.io/s/techtonicaexercisecompleted-f08z1).

### Common Mistakes & Misconceptions

**Infinite loops with `useEffect`**
With no parameters, `useEffect` will update after every render (every time the state or props have changed).
In some cases, this can lead to infinite loops. See [this example](<[https://medium.com/@andrewmyint/infinite-loop-inside-useeffect-react-hooks-6748de62871](https://medium.com/@andrewmyint/infinite-loop-inside-useeffect-react-hooks-6748de62871)>) where there is an infinite loop when an API is called in `useEffect`.
Calling the API updates the `name`, which triggers a re-render, which triggers `useEffect` to call the API, leading to an infinite loop.

**Unnecessary updating**
It is often unnecessary to call `useEffect` after every re-render. For example, say you have a Yelp-like component.
There is an API `getRestaurants` that you want to call every time the user changes the selected city, `city`. We can specify that we only want to call `getRestaurants` when the city changes with

```js
useEffect(()=>{
getRestaurants(city)
}, [city])
```

See [here](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects) for more info.

**Too many states**
If a component has multiple `states` and/or if the logic to update states becomes complex, it can become difficult to read and bloated.
The [useReducer hook](<[https://reactjs.org/docs/hooks-reference.html#usereducer](https://reactjs.org/docs/hooks-reference.html#usereducer)>).

### Independent Practice

**_Book name generator_**
Goal: A user should be able to enter a phrase, and below will see the Harry Potter title generated from that phrase.
We want the title to be `"Harry Potter and the PHRASE_HERE"`.
For example, if I enter 'Goblet of Code' into the Phrase input, I should see "The National best selling book is called: Harry Potter and the Goblet of Code"

1. Fork [this sandbox](https://codesandbox.io/s/techtonicahpexercise-ezflq).
2. Look at the `App` component, but do _not_ modify it. Look at what props are passed to the `TitleGenerator` component.
3. Edit the `TitleGenerator` so that when the phrase input changes, the Harry Potter title changes and is printed below.

### Challenge

**_useReducer_**
Goal: make a simple grocery price calculator using the [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereduce) hook.
The user can enter an item price, a percentage discount, and select the number of items. They should see below what the final price will be.
For example, if the item price is 10, discount is 50%, and there are 5 items, the final price should be 25 (10 _ .5 _ 5).

1. Fork [this sandbox](https://codesandbox.io/s/techtonicacalculatortemplate-4tlnp).
2. Look at the `reducer` and `initialState`. The logic for updating `state.counter` is already implemented.
3. How will you implement the logic for `itemPrice` and `discount`?
4. How will you implement the logic for `totalPrice`? What actions should trigger `totalPrice` updating?

### Check for Understanding

1. Read [this article](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/).
   Key takeaways:
   - Understand `useEffect` and `useState`, and `useReducer`
   - Understand effects with cleanups and skipping effects
2. Bonus: look at `useContext` example and walk through it with a partner

See [Hooks API doc](<[https://reactjs.org/docs/hooks-reference.html](https://reactjs.org/docs/hooks-reference.html)>) for more info.

### Supplemental Materials

- [Hooks vs Classes](https://betterprogramming.pub/react-hooks-vs-classes-add2676a32f2) - Another similar article comparing hooks to classes (7-12 minutes)
- [Medium article](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) written by members of the React team who created hooks! (10-15 minutes). Includes a [video](https://www.youtube.com/watch?v=dpw9EHDh2bM) of the team introducing the concept at React Conf.

More examples:
_Note_: There are many examples and tutorials around React and React hooks. Feel free to browse the interwebs to find resources that make sense to you!
- [Using hooks to change background color](https://dev.to/jh3y/react-hooks-in-5-minutes-55ic)  
- [Intro to React Hooks](https://www.freecodecamp.org/news/lets-get-hooked-a-quick-introduction-to-react-hooks-9e8bc3fbaeac/)  
- [Intro to useReducer](https://dev.to/changoman/intro-to-react-s-usereducer-hook-b0a)
