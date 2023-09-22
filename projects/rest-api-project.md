# Project - Building a REST API with Node and Express in the BackEnd and DOM Manipulation in the FrontEnd

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
- This project is focused on the backend. If you don't have anything in the frontend- it's ok. Your frontend could be just the JSON in the file.

## Specific guidelines for projects:

- Change the information inside the file books.js to have your data (we suggest books, but if you want to use any other data, it's ok)
- Using Node and Express, create a GET router with a response that converts all <your data>using Json()
- Using that endpoint build a list of all your books in the backend(server side).
- Using Node and Express, create a route for each one of the verbs in CRUD operations in the backend. You don't need to have a Frontend. You can test your API using Postman.
- Bonus: Using that endpoint build a list of all your books in the Frontend (client side). Note: you will need to make a GET request to bring all your information to the Frontend too

## Helping Resources:

- You can see how the first task in [Cristina's example](https://github.com/Yosolita1978/RESTAPI-mybooks/tree/main/restapi). This code only does a route for the initial GET for all the books and shows a specific book. It shows in the Frontend, but you don't need to get to that point. You can show your API with only code in the backend
- [Here is a good reading tutorial on how to work a REST API for your books](https://levelup.gitconnected.com/creating-a-rest-api-with-node-js-and-express-a-step-by-step-guide-3bd7188fa219)
- [Here is a good video tutorial on how to work a REST API for users](https://www.youtube.com/watch?v=l8WPWK9mS5M&ab_channel=JavaScriptMastery)

## Frequently Asked Questions

We can add common FAQs here. Open a PR if you have any questions.

# Step by Step instructions - Building this from scratch

### For creating the server (using Express)

1. Make a new directory for your project. 
2. cd into your new directory 
3. create a package.json with the command `npm init -y`

4. Make sure that the main file in your package is `index.js`
5. Install all the dependencies with the commands:`npm i express` and `npm i cors`
6. Install the module nodemon in the dev server with the command `npm i nodemon --save-dev`
7. Inside your package.json, change the scripts to: 

   ```
   "start": "node index.js",
   "server": "nodemon index.js",
   ```

   (doing this, you will delete the test script)

8. Add `"type": "module"` before "scripts"
9. Create your index.js file (you can do that with `touch index.js` or directly on your VSCode)
10. Run `npm run start` in your terminal
