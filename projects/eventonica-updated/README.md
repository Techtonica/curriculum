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

1. Use the [Techtonica Template created with Vite](https://github.com/Techtonica/curriculum/tree/main/projects/2023TemplateWithVite) as the foundation of your project
2. Implement GET, POST, and DELETE requests (PUT for editing is a stretch goal, not required)
3. At least 15 commits and 1 PR (every time you make a working change to the code, commit + push at least daily)
4. Obviously customize the look of your page with CSS techniques
5. Implement some basic tests
6. Create a README
7. Implement the [useReducer hook](https://react.dev/reference/react/useReducer)

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
