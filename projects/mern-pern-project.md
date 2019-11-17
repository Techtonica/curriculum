# PERN/MERN Project

### Introduction
You've now learned how to create a full-stack app with a React frontend, Node/Express backend, and Postgres or Mongo database. This project is to practice putting it all together by building a fairly simple app from start to finish using the MERN stack (MongoDB, Express, React, and Node.js) or PERN stack (Postgres, Express, React, and Node.js)

### Instructions/Notes
- For this project, you can reference previous lessons and find your own resources online. This should be good practice finding resources and getting the help you need to make your code work without step-by-step instructions.
- You must use Express and React. You can choose whether to use Postgres or MongoDB for your database. You can choose what other technologies and libraries you want to use as well as part of the project.

### Project
#### Overview
Let’s say you want to make an app to help scientists track sightings of endangered animals. 
This app will store data about different endangered species (e.g. polar bears, tigers). For each species, it should store name (e.g. tiger), scientific name (e.g. Panthera tigris), and number estimated living in the wild (e.g. 3000). 

Scientists track some individual animals of endangered species, so we want to store data about each individual as well -- Let’s say the scientists give each animal an ID (e.g. 7) and a nickname (e.g. Janet). We also want to store which species it is.

When scientists spot an individual they’re tracking, they want to store some information about the sighting in the database: The date and time of the sighting, which individual they saw, the name of the country it was spotted in, and whether the animal seemed healthy or unhealthy.

#### Database
- Design a database that stores the information needed for the app. Create the tables needed in Postgres/Mongo on your computer.
- Use SQL to add some initial data to your database. Add at least 3 animal species, 2 individuals of each species, and at least 5 animal sightings.
- Copy the commands you used to create the tables and add the data and paste them into a file called db.sql

#### Required Features
Your app should be able to:
- Show a list of all individuals, ordered alphabetically by nickname
- Show an individual by ID
- Show a list of all sightings, including the nickname of the individual sighted at each one (use a JOIN query).
- Create a record for a new sighting

Be sure to also:
- Include a README that says how to run your app locally. 
- Include an appropriate gitignore.

#### Optional features
Build at least 2 of the following features:
- Let users search for sightings within a certain date range
- In the list of individuals, add a count of how many times each individual has been sighted
- Be able to store a sighting where multiple individuals were spotted together. This means a sighting record needs to be able to be associated with multiple individuals. What type of data relationship is this? How do you need to change your DB schema to make this work?
- Make a button. When you click the button, the list of sightings should be filtered to only show sightings where the animal is healthy. When you click it again, all sightings should be shown again. (Do this using React only -- don’t change your API calls)
- Use CSS/styling libraries to make your app look good

#### Extras
- If you have more time, keep adding enhancements. You can implement more of the above suggestions or make up your own ideas. Be creative!
