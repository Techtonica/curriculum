
# Project 4.5 - Eventonica 

### Languages
- JavaScript
- SQL query

### Frameworks & Libraries
- inquirer
- working with Eventful API

### Primary Goals
1. Linking to Bootstrap within a project
2. Adding Bootstrap components to a project
3. Receiving and incorporating constructive feedback on a project

### Overview
In this project you will create a Command-Line-Interface (CLI) app that 

Phase 1 of the project involves making sure the proper tools are installed

Phase 2 of the project involves making a basic CLI app that has a "complete-the-sentence" function in Inquirer

Phase 3 of the project involves adding an additional feature: the CLI app can now create additional users and store that information in MySQL  

Phase 4 of the project involves adding an additional feature: using eventful-node to perform Ajax requests in order to pull data from the Eventful API, and giving the user the option to save 

Phase 5 of the project involves adding the final 3 features: matching a user with an event, reading all the users of a particular event,  and reading all the events of a particular user

### Context
- You perform all the necessary installations in Phase 1
- You create a basic CLI app in Phase 2
- You can create new data entries in MySQL in Phase 3
- You can use someone else's AJAX package for Eventful to retrieve data from the cloud and save it to your own MySQL database in phase 4
- You can working with a many-to-many relationship junction (inner-join) table in phase 5

### Basic Requirements
1. Complete setup
2. Finish writing out the functions

## Setup Instructions
1. install [MySQL](https://dev.mysql.com/doc/refman/5.6/en/osx-installation-pkg.html)
- leave username as 'root' but create your own password (or you can just use 'password')
2. Also install [Sequel Pro](http://www.sequelpro.com/), which is similar to SQLfiddle 
####Note: these MySQL installation can actually take a bit of time to setup properly
3. You should already have Node.js and either NPM/Yarn installed. 
4. For developing Node.js apps, I find Nodemon very helpful, as it restarts my Node app whenever I save new changes.  
`npm i -g nodemon` 

## Lab Instructions  

### Starter Code
Please fork starter code [here](https://github.com/chulinguy/Eventful-API-test-page)

### Lab Exercise  

#### In this project, the instructions to complete the project after the installation & setup steps will be increasingly more vague.  This is done intentionally to get you used to thinking like a software engineer

#### Part 1 - Installation and setup

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
4. While Sequel Pro running, now uncomment the "mySqlConnect()" line.  You should see the console logs about Eventonica, YAY!

> **PAUSE.** Help your group members finish Part 1 .


#### Part 2 - Basic CLI App

Try running index.js with Node/Nodemon to see how Inquirer work.  Play with it; once you feel comfortable, start looking at the starter code and also skim through this [inquirer tutorial](http://simiansblog.com/2015/05/06/Using-Inquirer-js/)

Now implment the first option: "Complete a sentece".
Use inquirer to ask users for 2 string inputs to console log a complete sentence. 

Examples of a sentence to be completed (feel free to make up one on yourself):
- My favorite color is <COLOR>, so my dream is to buy a <COLOR> <ITEM>.
- I play <SPORT> professionally, and my position on the team is <POSITION>.

So if you chose the first example, and the user enters "red" and "house", you should see "My favorite color is red, so my dream is to buy a red house." in terminal  

#### Part 3 - Adding user

Now implement the ability to create new users.  
First create a database in MySQL called "eventonica", and then create a Users and a Events table

Switching back to Javascrupt, using Inquirer, implement code in "app.completeSentence" to ask for a new fiticious user's name and age (or some other attribute), display this information and then save it to your MySQL database.  Look at your Sequel Pro UI and you should see new users  

#### Part 4 - Eventful API AJAX

Run the starter code in eventfulAPI.js and read about [eventful-node](https://www.npmjs.com/package/eventful-node) and [Eventful API](http://api.eventful.com/docs/events/search)
Once you feel comfortable about understanding what the code is doing, commenting out the exampel search code and implement your custom search code in "app.searchEventful".  Use inquier to:
1. Ask app user to input a keyword to search on Eventful, example: "dancing", "fashion", etc
2. Display the first result that comes back from Eventful, and ask app user if he or she would like to save this to the MySQL database
3. If app user chooses yes, then make that save.
4. If app user chooses no, then go back to step 1 of part 4    

Look at your Sequel Pro UI and you should see new events.  
#### Notice the behavior of {asking user for input => {retrieve data from API => {display data and then ask user whether to save} => {saving or go back to step 1} ... to implement this, you'd have to do either callback chaining OR promises.  Promises require more setup but it creates cleaner-looking code.  Part 4 should take the majority of your project time as there are a lot of steps involved.   

#### Part 5 - Creating and reading off a junction table

#### Part 5 can be difficult as it dives in deeper into SQL, but actually there are less steps than Part 4
Now that we have Users and Events, lets start to add the ability to create relationship between them.  
One user can be marked as attending to multiple events, and one event can have multiple users attending it.  
This is called a Many-to-Many relationship.  Watch this [tutorial](https://www.youtube.com/watch?v=a-o0d_e9mW8)

Using a junction (inner-join) table, complete the 3 remaining features/functions:
- app.matchUserWithEvent()
- app.seeEventsOfOneUser()
- app.seeUsersOfOneEvent()



-----

### Questions to Consider



    
