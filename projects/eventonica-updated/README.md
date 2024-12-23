# Eventonica

You’ll work on this project making a web app to manage events over the course of this week. By the end you'll have built a full-stack web app with React and a database.

### Technologies

React
JavaScript / Node.js
Express
SQL
Postgres

### Primary Goals

1. For the first time connect to a DB and pass that data all the way up to React
2. Getting comfortable creating Express routes for CRUD operations
3. Learn about and use the UseReducer hook
4. By the end of the project, show comfort when:
   - implementing the useState hook
   - creating forms in React
   - parsing and displaying data from a DB in React
5. Stretch goal: Implement favoriting and unfavoriting events (PUT request)

### Requirements

1. Determine if you want to use the [Techtonica Template created with Vite](https://github.com/Techtonica/curriculum/tree/main/projects/2023TemplateWithVite) as the foundation of your project
   - Reasons to Use the Template
     - Time-saving: Using a template can significantly reduce the initial setup time, allowing students to focus on implementing game-specific features sooner.
     - Understanding starter code: Students who grasp the concept of the starter code can easily adapt it to their needs, potentially speeding up their development process.
   - Reasons Not to Use the Template
     - Confusion: Some students might find the template confusing, especially if they don't fully understand how each part interacts with others.
     - Desire for deeper understanding: Students who want to gain a comprehensive knowledge of each technology and how they integrate might prefer to start from scratch.
2. Implement GET (show), POST (add), DELETE requests (PUT or edit for editing is a stretch goal, not required this week)
3. At least 15 commits and 1 PR (every time you make a working change to the code, commit + push at least daily)
4. Customize the look of your page with CSS techniques - this is not a priority, so being minimal is okay
5. Implement some basic tests
6. Create a README
7. Implement the [useReducer hook](https://react.dev/reference/react/useReducer) with a clearly defined reducer function with appropiate actions and states; clearly defined dispatch functions to describe any actions taken to create a new state
8. User can search DB by ONE of the following and return filtered event displayed to page
   - event name string
   - category name string
   - date with a prompted date selection option

### Suggested Schedule

- Monday - Plan components, DB schema, and get template running locally
- Tuesday - Create React forms
- Wednesday - Create all routes and have them send mock data
- Thursday - Connect routes to DB and pass real data back and forth, implement tests
- Friday - Clean up, finish testing, finish README

### useReducer Hook

Reducer: A function that accepts the current state and action. It returns the new state.

[How to use useReducer like a pro](https://devtrium.com/posts/how-to-use-react-usereducer-hook)

Look at [this example](https://codesandbox.io/s/wild-brook-5drvk?file=/src/App.js). Try to identify the main parts of the useReducer.

Note: this example uses the spread operator. To review this concept, you can check out [this article](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab).

Using the spread operator is a common way objects are modified. For example, say if there is a `meal` object and you want to update the dessert field.

const meal = {
"appetizer":"bread",
"entree": "Noodles",
"dessert": "Ice cream"
},

You can say meal.dessert = "pie". Or, you can say meal = {...meal, dessert:"pie"}

### "Nice to Have" or "Stretch Goals"

- User may be prompted with string auto-completion in search bar or from search bar dropdown with result of event names based on input string value in relation to event names.
- Search bar handles edge case input values.
