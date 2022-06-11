# Writing Modular JavaScript

### Projected Time

About 30-45 minutes

- Lesson: 10 min
- Guided Practice: 5 min
- Independent Practice: 20 min
- Check for Understanding: 53 min

### Prerequisites

Here are topics that should be understood before this topic:

- [Require & Import lesson](/javascript/require-and-import-mini-lesson.md)

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

However, React has questioned this paradigm by enabling us to colocate JavaScript, HTML, and CSS all in a single component file, and instead has divide the concerns using the [principle of single responsibility](https://en.wikipedia.org/wiki/Single-responsibility_principle). A good React component encapsulates everything it needs to render itself, which does indeed require HTML and CSS along with JavaScript.

This leads to an application structure that looks more like:

```
.
├── Avatar.jsx
├── Comment.jsx
├── Input.jsx
└── Modal.jsx
```

You will see both of these structures in use in real-world applications, and they can even be combined. 

### Guided Practice

Let's quickly go over what it looks like to create a modular structure. Let's say we have a file called `index.jsx`, and it contains these functions:

```js
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
}

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

Class does this thing themselves with specific additional items. This could be alone, with a partner, or small group; but the idea is that it's less guided, more independent.

### Challenge

Participants can try to do this other thing. Ideally, they will be challenged to connect what they've learned to some previous knowledge or additional research.

### Check for Understanding

Some ideas: have participants summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps them self-assess their understanding. This exercise should help participants determine whether they've met the outline objectives, or if they need to review.ss

### Supplemental Materials

- [example website](https://google.com) - Write a very short description of how to use this optional resource.
- [Other example website](https://google.com) - Write a very short description of how to use this optional resource.
