# Full-Stack PERN Project: Animal Sighting Tracker

### Introduction

You've now learned how to create a full-stack app with a React frontend, Node/Express backend, and Postgres database (PERN). This project is to practice putting it all together by building a fairly simple app from start to finish.

### Instructions/Notes

- For this project, you can reference previous lessons and find your own resources online. This should be good practice finding resources and getting the help you need to make your code work without step-by-step instructions.
- You must use Express, React, and Postgres. You can choose what other technologies and libraries you want to use as well as part of the project.
- All code should be your own or _become your own_, i.e. you should understand what it's doing, even if it's a snippet from StackOverflow. If you get an idea from somewhere or someone, please add an attribution note in a comment.
- If you're stuck on something, please post in the cohort or #tech-help channel rather than in a DM or private channel for help! That way everyone has access to the same answers.
- **Styling/CSS is not important for this assignment**, but once the behavior is working, please feel free to make it look nice.

### Primary Goals

1. Create multiple tables and join them
2. Get comfortable using routes to create CRUD operations on data from DB
3. Get comfortable using .map() to display data
4. Get comfortable using props and callback functions to pass data from child to parent
5. Get comfortable making forms in React and managing component state with useState

### Requirements

- Decide if you want to use the [Techtonica Template created with Vite](https://github.com/Techtonica/curriculum/tree/main/projects/2023TemplateWithVite)
- A top-level `README.md` that says how to run your app locally including all steps after cloning the repo
- Use pg_dump or another method to create a file called `db.sql` that allows someone else to recreate your DB
- Use SQL to add some initial data to your database. Add at least 3 animal species, 2 individuals of each species, and at least 5 animal sightings.
- The front end should display some data from 2 tables joined with SQL
- Commit at least 50 times for this project and PR must be clean and only include files related to this project
- Include an appropriate .gitignore (don't commit **node_modules**!)
- Testing
  - Write unit tests using Jest for at least one component. For example, how can you test the creation form?
  - API test for your sightings API (GET, POST/PUT, DELETE)
  - See the [jest](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/jest.md), [vitest](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/vitest.md), and [RTL](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/react-testing-jest-and-RTL.md) topic outlines for more context.

### Data

#### Species

This app will store data about different endangered species (e.g. polar bears, tigers). (Note: You can use fake data, you do not need to find the real numbers). For each species, it should be able to store:

- Integer primary key
- the common name (e.g. tiger)
- scientific name (e.g. _Procyon lotor_)
- number estimated living in the wild (e.g. 3000)
- conservation status code (e.g. CR, EN, LC)
- Record creation timestamp

It is up to you to decide which records are optional in your database.

#### Individuals

Scientists track some individual animals of endangered species, so we want to store data about each individual as well

- Integer primary key
- Nickname (e.g. "Prickly Petunia")
- Species
- Record creation timestamp

#### Sightings

When scientists spot an individual they’re tracking, they want to store some information about the sighting in the database:

- Integer primary key
- The date and time of the sighting (the scientist might enter the data when they get back to their lab so it could be in the past)
- The individual that was seen
- Location of sighting - the data type should be text so the scientist can be as specific as they want: "37.791278, -122.394680", "Yellowstone North Gate" or just "California"
- A boolean for whether the animal appeared healthy or not (obviously this just an educated guess, but good for tracking of injuries or serious illness)
- Email address of sighter in case researchers need more info
- (Optional) Record creation timestamp

### Suggested Features

Example features:

- Show a list of all sightings, including the nickname of the individual sighted at each one (using a JOIN query).
- Form to add a new sighting record
- Form to add new individuals

### Submission

- Include a top-level `README.md` that says how to run your app locally including all steps after cloning the repo
- Use [pg_dump](https://stackoverflow.com/questions/37984733/postgresql-database-export-to-sql-file) or another method to create a file called `db.sql` that allows someone else to recreate your DB
  - Use SQL to add some initial data to your database. Add at least 3 animal species, 2 individuals of each species, and at least 5 animal sightings.
- PR must be clean and only include files related to this project
  - Include an appropriate .gitignore (don't commit **node_modules**!)

### Implement One Bonus Feature

Once you finish the core requirements, you should choose at least one of the below and implement it. If you were caught up on Eventonica, it is expected you will do more than one of these in your initial PR by the deadline.

**Note: before starting any of these, create a new branch for the feature, so in case you run of time in the middle you can always go back to your completed main project**

#### Feature: Individual Detail Page

Click on an individual to bring up its details. Add some more database columns to make the view more interesting.

- the link to its Wikipedia page
- representative photo URL

#### Group Sightings

Especially with social species, storing which individuals were spotted together is vital for research.

- Be able to store a sighting where multiple individuals were spotted together. This means a sighting record needs to be able to be associated with multiple individuals. What type of data relationship is this? How do you need to change your DB schema to make this work?

#### Filtering

Add a "Healthy" filter checkbox

- The list of sightings should be filtered to only show sightings where the animal is healthy
- When unchecked, all sightings should be shown again
- Do this using React only -- don’t change your API calls

#### Other Features

- Error handling
  - Your form should use HTML input attributes to validate input and make entering data fast and easy
  - Have your API validate the incoming data
  - Show a user-visible error message to indicate what's wrong and how the user can fix it
- Add API endpoints for all data so you can add it from Postman rather than SQL
- Let users search for sightings within a certain date range
- In the list of individuals
  - Add a count of how many times each individual has been sighted
  - Show the first sighting and most recent sighting date
- Use CSS/styling libraries to make your app look good

#### Extras

- If you have more time, keep adding enhancements. You can implement more of the above suggestions or make up your own ideas. Be creative!

### I'm having trouble starting...

- Do you need help with the [Techtonica Template](https://github.com/Techtonica/curriculum/tree/main/projects/Template2023Projects) running locally on your machine
- Add a `GET` route for `/sightings` that will respond with all the records in your sightings DB table
  - You will need to talk to the database
  - See the [pg-promise instructions](https://expressjs.com/en/guide/database-integration.html#postgresql) for an idea of how to do that
- Test this API using Postman
- Once it is working, make the React app
  - Make a simple component that will show all the sightings
  - Use fetch to retrieve data from `/sightings`
- Make sure this basic end-to-end flow is working. If not, get help!
- From there add more data and functionality

---

Full Time Program Week 10: Endangered Animal Sighting App Part 1 of 1
