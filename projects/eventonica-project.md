
# Eventonica Project

### Languages
- JavaScript
- SQL query

### Frameworks & Libraries
- [Inquirer](https://www.npmjs.com/package/inquirer)
- Working with [Eventful APIs](http://api.eventful.com/)

### Primary Goals
1. Learn to work with Node.js and mySQL in order to set up a working back-end
2. Understand asynchronous functions and their callbacks
3. Understand SQL joints

### Overview
In this project you will create a Command-Line-Interface (CLI) app. 

Phase 1 of the project involves making sure the proper tools are installed.

Phase 2 of the project involves making a basic CLI app that has a "complete-the-sentence" function in Inquirer.

Phase 3 of the project involves adding an additional feature: the CLI app can now create additional users and store that information in MySQL.

Phase 4 of the project involves adding an additional feature: using [eventful-node](https://www.npmjs.com/package/eventful-node) to perform AJAX requests in order to pull data from the [Eventful API](http://api.eventful.com/), and giving the user the option to save.

Phase 5 of the project involves adding the final 3 features: matching a user with an event, reading all the users of a particular event, and reading all the events of a particular user.

### Context
- You perform all the necessary installations in Phase 1.
- You create a basic CLI app in Phase 2.
- You can create new data entries in MySQL in Phase 3.
- You can use someone else's AJAX package for Eventful to retrieve data from the cloud and save it to your own MySQL database in phase 4.
- You can work with an inner join (many-to-many relationship junction) table in phase 5.

### Basic Requirements
1. Complete setup.
2. Finish writing out the functions.

## Setup Instructions
1. Install MySQL
  - If you have `brew` installed, install using `brew install mysql`, then start with `brew services start mysql`

  - If you don't use `brew`, you can download [MySQL](https://dev.mysql.com/doc/refman/5.6/en/osx-installation-pkg.html)
    - leave username as 'root' but create your own password (or you can just use 'password')
    - After it is installed, start your MySQL server with the following command: `sudo /usr/local/mysql/support-files/mysql.server start`

2. Also install [Sequel Pro](http://www.sequelpro.com/), which is similar to SQLfiddle 
  - use 127.0.0.1 to connect
3. You should already have Node.js and either NPM/Yarn installed. 
4. For developing Node.js apps, Nodemon is very helpful, as it restarts Node apps whenever changes are saved. 
`npm i -g nodemon` 

## Lab Instructions 

### Starter Code
Please [fork starter code here](https://github.com/chulinguy/Eventful-API-test-page)

### Lab Exercise 

#### In this project, the instructions to complete the project after the installation & setup steps will be increasingly vague. This is done intentionally to get you used to thinking like a software engineer

#### Part 1 - Installation and Setup

1. Make sure Sequel Pro is installed properly by creating a test table and query all of its entries
2. Each group forks the starter code, and then every apprentice clones the forked version to her computer
3. Create a keys.js file in your repo. 
- go to [Eventful](http://api.eventful.com/) to apply for your own API key
```javascipt
module.exports = {
  "eventful": <YOUR_OWN_EVENTFUL_API_KEY_HERE>, 
  "mySql": <YOUR_MYSQL_PASSWORD_HERE>'
}
```
4. While Sequel Pro is running, now uncomment the "mySqlConnect()" line. You should see the console logs about Eventonica, YAY!

> **PAUSE.** Help your group members finish Part 1.


#### Part 2 - Basic CLI App

Try running index.js with Node/Nodemon to see how Inquirer works. Play with it; once you feel comfortable, start looking at the starter code and also skim through this [inquirer tutorial](http://simiansblog.com/2015/05/06/Using-Inquirer-js/)

Now implment the first option: "Complete a sentence."
Use inquirer to ask users for 2 string inputs to console log a complete sentence. 

Examples of a sentence to be completed (feel free to make up one on yourself):
- My favorite color is [COLOR], so my dream is to buy a [COLOR] [ITEM].
- I play [SPORT] professionally, and my position on the team is [POSITION].

So if you choose the first example, and the user enters "red" and "house", you should see "My favorite color is red, so my dream is to buy a red house."

#### Part 3 - Adding User

Now implement the ability to create new users. 
First create a database in MySQL called "eventonica", and then create a Users and a Events table.

Switching back to Javascript, using Inquirer, implement code in "app.createNewUser" to ask for a new ficticious users name and age,or some other attribute. Then, display this information and save it to your MySQL database. Look at your Sequel Pro UI and you should see new users. 

#### Part 4 - Eventful API AJAX

Run the starter code in eventfulAPI.js and read about [eventful-node](https://www.npmjs.com/package/eventful-node) and [Eventful API](http://api.eventful.com/docs/events/search)
Once you feel comfortable about understanding what the code is doing, commenting out the example search code and implement your custom search code in "app.searchEventful". 

Use Inquier to:
1. Ask app user to input a keyword to search on Eventful, example: "dancing", "fashion", etc.
2. Display the first result that comes back from Eventful, and ask app user if he or she would like to save this to the MySQL database.
3. If app user chooses yes, then make that save.
4. If app user chooses no, then go back to step 1 of part 4 

Look at your Sequel Pro UI and you should see new events. 
#### Notice the behavior of {asking user for input => {retrieve data from API => {display data and then ask user whether to save} => {saving or go back to step 1} ... to implement this, you'd have to use either callback chaining OR promises. Promises require more setup but it creates cleaner-looking code. Part 4 should take the majority of your project time as there are a lot of steps involved. 

#### Part 5 - Creating and Reading a Junction Table

#### Part 5 can be difficult as it dives in deeper into SQL, but actually there are less steps than Part 4
Now that we have Users and Events, let's start to add the ability to create relationships between them. 
One user can be marked as attending multiple events, and one event can have multiple users attending it. 
This is called a Many-to-Many relationship. Watch this [tutorial](https://www.youtube.com/watch?v=a-o0d_e9mW8)

Using a junction (inner-join) table, complete the 3 remaining features/functions:
- app.matchUserWithEvent()
- app.seeEventsOfOneUser()
- app.seeUsersOfOneEvent()

#### Part 6 - Add tests to the Front End and Back End of your app
Make sure each endpoint and function has a simple passing test. Then add as many as you can!
