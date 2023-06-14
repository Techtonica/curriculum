# Project - Building a REST API with Node and Express in the BackEnd

A RESTful API is an Application Programming Interface (API) that uses HTTP verbs like GET, PUT, POST, and DELETE to operate data—also referred to as RESTful web services.

![Screenshoot](https://raw.githubusercontent.com/Yosolita1978/screenshoots/f2fdebc24a671f11394d8da1a9355a0ed4ce4a29/Week5/Screen%20Shot%202022-08-14%20at%201.58.39%20PM.png)

### Learning Objective:

What you will learn with this project is how to organize the data that comes from your backend using a REST API. At this moment, you don't know how to connect a DB, so for now, we will work with data in a JSON. (see the file [books.js](https://github.com/Yosolita1978/RESTAPI-mybooks/blob/main/restapi/books.js))

Don't be afraid of the terminology. A REST API it's just a way of organizing data according to the CRUD operations
![Screenshoot](https://github.com/Yosolita1978/screenshoots/blob/main/Week5/Screen%20Shot%202022-08-14%20at%201.59.03%20PM.png?raw=true)

## General guidelines for projects:

- In this project, you will build a REST API to manage books with Node.js and Express.
- You will use a simple JSON to store your <your data>. If you want to learn a little about how to use hardcode data in a project (follow this document)[https://docs.google.com/document/d/12MFPDYC0LPKpzrYHZVmfs2NeCUfquNpEKCLKtDkcK4E/edit?usp=sharing]
- Remember to start the project by creating your new branch in your assignments repo. By Friday, you should push your commit up to GitHub and have a PR ready to go for your partner.
- This is a back end project only and there is not a front-end component involved.

### Primary Goals

1. Focus on backend without concern for the frontend of this project
2. Use hardcoded data from a file (not the server file)
3. Create routes for GET, POST, PUT, DELETE
4. Be able to display data either in the browser or using Postman, and understand how to do both
5. Understand how to create a new server

## Specific guidelines for projects:

- Change the information inside the file books.js to have your data (we suggest books, but if you want to use any other data, it's ok)
- Using Node and Express, create a GET router with a response that converts all <your data>using Json()
- Using that endpoint build a list of all your books in the backend(server side).
- Using Node and Express, create a route for each one of the verbs in CRUD operations in the backend. This project does not include the front end. You can test your API requests using Postman.

## Helping Resources:

- You can see how the first task in [Cristina's example](https://github.com/Yosolita1978/RESTAPI-mybooks/tree/main/restapi). This code only does a route for the initial GET for all the books and shows a specific book. It shows in the Frontend, but you are not supposed to build a front end for this project. You are expected to show your API with only code in the backend
- [Here is a good reading tutorial on how to work a REST API for your books](https://levelup.gitconnected.com/creating-a-rest-api-with-node-js-and-express-a-step-by-step-guide-3bd7188fa219)
- [Here is a good video tutorial on how to work a REST API for users](https://www.youtube.com/watch?v=l8WPWK9mS5M&ab_channel=JavaScriptMastery)

# Step by Step instructions - Building this from scratch

### For creating the server (using Express)

1. Make a new directory for your project
2. cd into your new directory
3. create a package.json with the command `npm init y`
4. Make sure that the main file in your package is `index.js`
5. Install all the dependencies with the commands:`npm i express` and `npm i cors`
6. Install the module nodemon in the dev server with the command `npm i nodemon --save-dev`
7. Inside your package.json, change the scripts to:

```
"start": "node index.js",
"server": "nodemon index.js",
```

(doing this, you will delete the test script)

7. Create your index.js file (you can do that with `touch index.js` or directly on your VSCode)
