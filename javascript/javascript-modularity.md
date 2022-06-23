# Writing Modular JavaScript

### Projected Time

About 45-60 minutes

- Lesson: 10 min
- Guided Practice: 5 min
- Independent Practice: 20 min
- Check for Understanding: 10 min

### Prerequisites

Here are topics that should be understood before this topic:

- [Require & Import lesson](./require-and-import-mini-lesson.md)
- [React Intro lesson](../react-js/react-part-1-intro.md)

### Motivation

Writing JavaScript in one file is a good place to start while you're learning, but real-world JavaScript applications are organized into multiple files so it will be useful for you to familiarize yourself with modular application structures.

Why write modular code? Here are some benefits:

- **Readability**: Smaller files with single responsibilities are easier and quicker to read.
- **Collaboration**: A team of developers working on a single file would encounter a lot of [git merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts). A modular file structure reduces the chance for conflicts and improves developer experience.
- **Quality**: One file with a single responsibility is easier to test than an entire application because it can be tested in isolation to create [unit tests](/testing-and-tdd/testing-and-tdd.md#unit-tests).
- **Velocity**: If a file is created in a modular way, it will be easier to reuse later, speeding up the development of new features later on.

### Lesson

The main way an application can be broken up into multiple files is by considering the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). Historically when it comes to web development, this has been interpreted as separation of technologies: HTML, CSS, and JavaScript. In the past it was common to see a structure like this:

```
.
├── index.html
├── index.css
└── index.js
```

However, [React has led us to rethink this paradigm](https://youtu.be/x7cQ3mrcKaY) by enabling us to colocate JavaScript, HTML ([jsx](https://reactjs.org/docs/introducing-jsx.html)), and CSS ([css-in-js](https://css-tricks.com/a-thorough-analysis-of-css-in-js/)) all in a single component file, and instead has divide the concerns using the [principle of single responsibility](https://en.wikipedia.org/wiki/Single-responsibility_principle). A good React component encapsulates everything it needs to render itself, which does indeed require HTML and CSS along with JavaScript.

This leads to an application structure that looks more like:

```
.
├── Avatar.jsx
├── Comment.jsx
├── Input.jsx
└── Modal.jsx
```

You will see both of these structures in use in real-world applications, and you might even see them both used in one application. 

### Guided Practice

Let's quickly go over what it looks like to create a modular structure. Let's say we have a file called `index.jsx`, and it contains this:

```jsx
const App = () => {
	const [userInput, setUserInput] = React.useState(0);
	return (
		<div>
			<input
				onChange={(event) => setUserInput(event.target.value)}
				value={userInput}
				type='number'
			/>
			<div>
				Your value plus one is {userInput + 1}
			</div>
		</div>
	);
};

root.render(<App />);
```

You might think about breaking this up into multiple files by considering the different things your application is doing. Right now, this file is doing three things:

- Rendering the application
- Collecting user input
- Performing a calculation

So given those three things, you could break your application up like this:

```
.
├── App.jsx
├── Input.jsx
└── operations.js
```

`operations.js` would only be concerned with manipulating data:

```js
export function addOne(n) { return n+1; }
```

`Input.jsx` would collect user input:

```jsx
import {addOne} from './operations';

const Input = () => {
	const [userInput, setUserInput] = React.useState(0);
	return (
		<div>
			<input
				onChange={(event) => setUserInput(event.target.value)}
				value={userInput}
				type='number'
			/>
			<div>
				Your value plus one is {addOne(userInput)}
			</div>
		</div>
	);
};

export default Input;
```

`App.jsx` would only be concerned with rendering the application:

```jsx
import Input from './Input';
const App = () => <div><Input /></div>;

root.render(<App />);
```

### Independent Practice

Take some time to explore open-source libraries and see how they are structured.

- [Material UI](https://github.com/mui/material-ui/tree/master/packages/mui-base/src)
- [React](https://github.com/facebook/react/tree/main/packages/react/src)
- [Storybook](https://github.com/storybookjs/storybook/tree/next/lib/components/src)
- [Lodash](https://github.com/lodash/lodash)

### Check for Understanding

- Why are real-world applications organized into modules?
- How can you break your files down into a useful structure?
- What was novel about React that led developers to question the old way of structuring applications?

### Supplemental Materials

- [React: How to apply clean architecture](https://www.youtube.com/watch?v=qOH2X5hciiA&ab_channel=ProgressiveDev) - 20 mins video of how you can start thinking about the architecture of your project on React.
- [Why I chose to modularize the ducks in my React App](https://www.youtube.com/watch?v=4ge2HUG3ixk&ab_channel=StrangeLoopConference) - 50 mins video of how to structure a React app.

### Next to Learn

- [React: Pure Functions and Hooks](../react-js/react-hooks.md)
