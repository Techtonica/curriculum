# Eventonica

You’ll work on this project making a web app to manage events over the course of this week. By the end you'll have built a full-stack web app with React and a database.

### Technologies

React
JavaScript / Node.js
Express
SQL
Postgres

### Primary Goals
1. Connect to a database and parse and display the data from it in React
2. Get comfortable creating Express routes for CRUD operations
3. Get comfortable creating forms in React
4. Learn about and use the `useReducer` hook
5. Learn about and use the `useState` hook
6. Implement favoriting and unfavoriting events with a PUT request
7. Implement tests across your frontend, backend, and API
8. Sort or filter events using `.filter()` or `.map()`

### Requirements

1. Determine if you want to use the [Techtonica Template created with Vite](https://github.com/Techtonica/curriculum/tree/main/projects/2023TemplateWithVite) as the foundation of your project
   - Reasons to Use the Template
     - Time-saving: Using a template can significantly reduce the initial setup time, allowing students to focus on implementing game-specific features sooner.
     - Understanding starter code: Students who grasp the concept of the starter code can easily adapt it to their needs, potentially speeding up their development process.
   - Reasons Not to Use the Template
     - Confusion: Some students might find the template confusing, especially if they don't fully understand how each part interacts with others.
     - Desire for deeper understanding: Students who want to gain a comprehensive knowledge of each technology and how they integrate might prefer to start from scratch.
2. Implement GET (show), POST (add), DELETE requests, PUT (edit)
3. At least 50 commits for the project week and 1 PR (every time you make a working change to the code, commit + push at least daily)
4. Customize the look of your page with CSS techniques - this is not a priority, so being minimal is okay. You don’t have to go all out on the design of the project, but you should implement some CSS techniques that you’ve learned so that you are practicing the skill. 
5. Implement tests across your frontend, backend, and API
   - See the [jest](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/jest.md), [vitest](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/vitest.md), and [RTL](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/react-testing-jest-and-RTL.md) topic outlines for more context.
6. Create a README. Your README should have clear instructions for how someone could run your app and tests from start to finish on their local machine. Be sure to include visuals that capture your functionality.
7. Implement the [useReducer hook](https://react.dev/reference/react/useReducer) with a clearly defined reducer function with appropriate actions and states; clearly defined dispatch functions to describe any actions taken to create a new state
8. User can search the database for events using ONE of the following and return filtered event displayed to page: 1. event name string, 2. category name string, or 3. date with a prompted date selection option. Previously, your data was stored in memory in Express, so it would disappear if the application restarted. For production applications, data must be stored in a more permanent way. Move your data to a Postgres database and connect to that database in your Express APIs. You can modify the initial database provided with the template in any way you please.

### Suggested Schedule

- Monday - Plan components, DB schema, and get template running locally
- Tuesday - Create React forms
- Wednesday - Create all routes and have them send mock data
- Thursday - Connect routes to DB and pass real data back and forth, implement tests
- Friday - Clean up, finish testing, finish README

### useReducer Hook
Reducer: A function that accepts the current state and action. It returns the new state. There are 3 main parts of a reducer: **Store**, or state: the information you want to store and update. Yours will have all of the event fields. Actions: how state is updated For a state like `[users, setUsers] = React.useState([]), setUsers` is the only function that can mutate `users`. Similarly, the `dispatch` function can "send" specific actions, which are the only way to update the state. Actions typically have a type and a payload. Try to identify the main parts of the useReducer.
- [How to use useReducer like a pro](https://devtrium.com/posts/how-to-use-react-usereducer-hook).
- Look at [this example](https://codesandbox.io/p/sandbox/wild-brook-5drvk).
- Read this [article](https://blog.logrocket.com/guide-to-react-usereducer-hook/) about the reducer concept. 

### "Nice to Have" or "Stretch Goals"
- User may be prompted with string auto-completion in search bar or from search bar dropdown with result of event names based on input string value in relation to event names.
- Search bar handles edge case input values.

---

Full Time Program Week 9: Eventonica App Part 1 of 1
