
# Eventonica Project

### Languages
- JavaScript
- SQL

### Frameworks & Libraries
- [Inquirer](https://www.npmjs.com/package/inquirer)
- Working with [Eventful APIs](http://api.eventful.com/)

### Primary Goals
1. Learn to work with Node.js and PostgreSQL in order to set up a working back-end
2. Understand asynchronous functions and their callbacks
3. Understand SQL joins

### Overview
In this project you will create a Command-Line-Interface (CLI) app. 

Phase 1 of the project involves making sure the proper tools are installed.

Phase 2 of the project involves making a basic CLI app that has a
"complete-the-sentence" function in Inquirer.

Phase 3 of the project involves adding an additional feature: the CLI app can
now create additional users and store that information in PostgreSQL.

Phase 4 of the project involves adding an additional feature: using
[eventful-node](https://www.npmjs.com/package/eventful-node) to perform AJAX
requests in order to pull data from the [Eventful API](http://api.eventful.com/),
and giving the user the option to save.

Phase 5 of the project involves adding the final 3 features: matching a user
with an event, reading all the users of a particular event, and reading all
the events of a particular user.

### Context
- You perform all the necessary installations in Phase 1.
- You create a basic CLI app in Phase 2.
- You can create new data entries in MySQL in Phase 3.
- You can use someone else's AJAX package for Eventful to retrieve data from
  the cloud and save it to your own MySQL database in phase 4.
- You can work with an inner join (many-to-many relationship junction) table
  in phase 5.

### Basic Requirements
1. Complete setup.
2. Finish writing out the functions.

## Setup Instructions
1. Install PostgreSQL
    - If you don't already have PostgreSQL installed start with the
      [EnterpriseDB Installer][edb]. This will install PostgreSQL as well as a
      graphical management tool, pgAdmin. (At the time of writing, the most recent version, which we chose to use, was 11.2.1.)
    - The default options are fine. When presented with the components to
      install you may unselect "Stack Builder" but the other 3 should remain.
    - When prompted to provide a password a password you may use whatever you
      like; I'm using `techtonica` for the purposes of this guide.
    - Click "Next" until it begins installation.
    - Once installation is finished do not start Stack Builder if you installed
      it.
2. Configure PostgreSQL
    - Frist let's add the directory which contains the PostgreSQL command line
      tools to our path:
      ```
      $ echo 'export PATH="$PATH:/Library/PostgreSQL/11/bin/"' | cat >> ~/.bash_profile; source ~/.bash_profile
      ```
    - Now add the database we'll be using for this project:
      ```
      $ createdb -h localhost -U postgres eventonica
      ```  
      It should prompt for the password you entered in Step 1.
    - And finally create a user account (`eventonica`) that will be used to
      access this database:
      ```
      $ createuser -h localhost -U postgres -P eventonica
      Enter password for new role:
      Enter it again:
      Password:
      ```  
      The first two passwords are the password that will be associated with
      the account we're creating. The last prompt is the password entered in
      Step 1 above.
  3.  Install your favorite Client app -- the author uses [TablePlus](https://tableplus.io/) (NB: There are a ton of different client tools for database -- all the databases. Find one you like. They all *have* to work mostly the same -- since they're all talking in a very well structured way to the same set of tables.)
  4. Node.js and NPM or Yarn should be installed already.
  5. For developing Node.js apps [Nodemon][nm] is very helpful. It will restart
     your app whenever changes to files are saved. Optionally install it:
     ```
     $ npm install -g nodemon
     ```

[edb]: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
[nm]: https://nodemon.io/

## Lab Instructions 

### Starter Code
Please [fork starter code here](https://github.com/falun/Eventful-API-test-page)

### Lab Exercise 

**Note:** In this project, the instructions to complete the project after the
installation & setup steps will be increasingly vague. This is done
intentionally to get you used to thinking like a software engineer

#### Part 1 - Installation and Setup

1. Each group forks the starter code, and then every apprentice clones the
   forked version to her computer
2. Create a keys.js file in your repo. 
    - go to [Eventful](http://api.eventful.com/) to apply for your own API key
    ```javascipt
    module.exports = {
      "eventful": '<YOUR_OWN_EVENTFUL_API_KEY_HERE>',
      "dbPassword": '<YOUR_EVENTONICA_POSTGRES_PASSWORD_HERE>'
    }
    ```
3. Now uncomment the `dbConnect()` line. You should see the console produce
   some lines about Eventonica, YAY!

> **PAUSE.** Help your group members finish Part 1.


#### Part 2 - Basic CLI App

Try running index.js with Node/Nodemon to see how Inquirer works. Play with it;
once you feel comfortable, start looking at the starter code and also skim
through this [inquirer tutorial](https://www.donsblog.pro/2018/02/node-inquirerjs-tutorial-interactive.html).
If you want to check out something a little more comprehensive, [this tutorial](https://github.com/SBoudrias/Inquirer.js/tree/master/packages/inquirer/examples) has additional examples.

When you're composing your questions think about what infomration the user of the app will have, and how do you make it as easy as possible to "get the answers right".
* Make the questions (requests for data) unambiguous
* Where possible, give the user choices to make, rather than having to enter free-form text
* Validate as much as is reasonable at input time - the sooner you ask people to fix their input data, the less frutsration they'll have with using your app. 

Command Line Interfaces (CLIs) are a great place to use your regex skills to get the data right. 

Now implement the first option: "Complete a sentence."
Use inquirer to ask users for 2 string inputs to console log a complete sentence. 

Examples of a sentence to be completed (feel free to make up one on yourself):
- My favorite color is [COLOR], so my dream is to buy a [COLOR] [ITEM].
- I play [SPORT] professionally, and my position on the team is [POSITION].

So if you choose the first example, and the user enters "red" and "house", you
should see "My favorite color is red, so my dream is to buy a red house."

#### Part 3 - Adding User

Now implement the ability to create new users. 
First create a database in Postgres called "eventonica", and then create a
Users and a Events table.

Switching back to Javascript, using Inquirer, implement code in `app.createNewUser` to ask for a new ficticious users name and age, or some other attribute. Then, display this information and save it to your Postgres database. Look at your console log UI and you should see new users. 

#### Part 4 - Eventful API AJAX

Run the starter code in eventfulAPI.js and read about [eventful-node](https://www.npmjs.com/package/eventful-node) and [Eventful API](http://api.eventful.com/docs/events/search)
Once you feel comfortable about understanding what the code is doing, commenting out the example search code and implement your custom search code in `app.searchEventful`.

Use Inquier to:
1. Ask app user to input a keyword to search on Eventful, example: "dancing", "fashion", etc.
2. Display the first result that comes back from Eventful, and ask app user if he or she would like to save this to the Postgres database.
3. If app user chooses yes, then make that save.
4. If app user chooses no, then go back to step 1 of part 4 

> Look at your console log UI and you should see new events. 

**Examine Program flow**  
Our program is taking the following steps:
- asking user for input =>
    - retrieve data from API =>
        - display data and then ask user whether to save =>
            - saving or go back to step 1

Each of these steps requires the result of the previous. In order to implement
this, you'd have to use either callback chaining OR promises. Promises require
more setup but it creates cleaner-looking code. Part 4 should take the
majority of your project time as there are a lot of steps involved. 

#### Part 5 - Creating and Reading a Junction Table

**Note** This step is shorter but is about leveling up your knowledge of SQL
by giving you experience using a junction table and JOINs. It can be tricky
so watch out for frustration!

Now that we have Users and Events, let's start to add the ability to create
relationships between them. One user can be marked as attending multiple
events, and one event can have multiple users attending it. 
This is called a Many-to-Many relationship. Watch this [tutorial](https://www.youtube.com/watch?v=a-o0d_e9mW8) to learn more about them.

Using a junction (inner-join) table, complete the 3 remaining features/functions:
- app.matchUserWithEvent()
- app.seeEventsOfOneUser()
- app.seeUsersOfOneEvent()

#### Part 6 - Add tests to the Front End and Back End of your app
Make sure each endpoint and function has a simple passing test. Then add as
many as you can!
