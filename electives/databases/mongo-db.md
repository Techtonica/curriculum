# MongoDB

### Prerequisites

- [Object Literals](/javascript/javascript-6-object-literals.md)
- [JSON](../api/apis-and-json.md)
- [Relational Databases](/databases/relational-databases.md)
- [.env](/command-line/env.md)

### Motivation

Not all data can be or should be stored in a relational way. In those cases, it is more efficient to use a NoSQL database. MongoDB is one of the most popular NoSQL databases. MongoDB stores data in JSON-like "documents," which is familiar to folks who use JavaScript.

### Objectives

**Participants will be able to:**

- Set up MongoDB on their laptops
- Create databases and collections in MongoDB
- Add, query, and update documents

### Materials

- [MongoDB slides](https://docs.google.com/presentation/d/1BvO6PrSpulHVSDNOkMaDZM-V7McmheLgm0Lg2PFae7k/edit#slide=id.p)
- [MongoDB slides video (15 mins watch)](https://drive.google.com/file/d/1022MSkPjfRyGAUQa2I-pQltpUn4Q1NJc/view)
- [MongoDB data Modelling (Tutorialspoint)](https://www.tutorialspoint.com/mongodb/mongodb_data_modeling.htm)
- [MongoDB relationships (Tutorialspoint)](https://www.tutorialspoint.com/mongodb/mongodb_relationships.htm)
- [MongoDB Shell commands reference](https://docs.mongodb.com/manual/reference/mongo-shell/)
- [Homebrew](https://brew.sh/)
- [Build a simple nodejs api using NodeJs, ExpressJs and MongoDb.](https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2)
- [Query and Projection Operators in mongoDB](https://docs.mongodb.com/manual/reference/operator/query/)

### Lesson

- Video walkthrough of lesson slides [MongoDB (15 mins watch)](https://drive.google.com/file/d/1022MSkPjfRyGAUQa2I-pQltpUn4Q1NJc/view)
- Read through lesson slides [MongoDB](https://docs.google.com/presentation/d/1BvO6PrSpulHVSDNOkMaDZM-V7McmheLgm0Lg2PFae7k/edit#slide=id.p)

### Common Mistakes / Misconceptions

- **"I already learned how to use relational databases. I'll just stick with that. They both store data anyway."** The structure of relational databases is set up for relational data. Using a relational database for non-relational data results in reduced scalability and added cost.

### Guided Practice

**Activity 1: Installation**

1. Check to see if you have Homebrew installed on your laptop. From your Terminal, run the `brew help` command. If you have Homebrew installed, you'll see the output from Homebrew appear in your Terminal.
1. If no Homebrew-related text appears, you'll need to install Homebrew. Go to the [Homebrew website](https://brew.sh/) and follow the installation instructions. Ask for help if needed.
1. Mongo DB is no longer in the main Homebrew repo. You need to register an add-on using `brew tap mongodb/brew`
1. Install MongoDB using `brew install mongodb-community@4.2` in the Terminal
1. Start it up as a service with `brew services start mongodb-community@4.2`
1. From a terminal run `mongo` to connect
1. If there is an error, troubleshoot using the [Mongo Community on Mac docs](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

**Activity 2: Working with Database**

- The command `use <db>` sets the current database you'll be working with. In the shell, run `use techtonica`. Then run `show dbs`, which will list out the list of databases. What database is there? What is missing?

- The newly created database, "techtonica", should be missing. This is because the `techtonica` database is empty. Let's insert some data storing people's name (as a string) and birth month (as an integer). Insert a document by running `db.classmates.insert({"name": "your_name", "month": your_birthmonth})`. Do it at least two more times with a friend's name. Remember not to double-quote the birth month to keep it as a digit instead of a string.

- Type `show dbs` again and see that the `techtonica` database now shows up.

- MongoDB stores documents in collections. Run `show collections`. What is already there? Where did it come from?

- Run `db.createCollection("volunteers")`.

- View what's in each collection by running `db.classmates.find()` and `db.volunteers.find()`. What's the difference?

- Fix the empty volunteer collection by entering a document: `db.volunteers.insert({"volunteer": "Adrien"})` and `db.volunteers.insert({"volunteer": "Jamie"})`.

- Now we'll try out the `remove` command. Select a number between your birth month and your pair's birth month inside the classmates collection. Run `db.classmates.remove({"month": {$lt: the_number_your_selected}})`. The "\$lt" means "less than." What do you think happened to the collections?

- Run `db.classmates.find()`. Were you correct?

- Run `db.volunteers.remove({})`, then `db.volunteers.find()`. What happened?

- Make sure you are in the techtonica database by running `use techtonica`. Make sure the output is `switched to db techtonica`. Then, you will delete the techtonica database by running `db.dropDatabase()`. The output should be `{ "dropped" : "techtonica", "ok" : 1 }`.

- Exit the shell by running `exit`. Next, go to the Terminal window running the Mongo Daemon, monogod. Exit the daemon by entering Ctrl C.

### Independent Practice

1. Read through these MongoDB docs from TutorialsPoint. You don't have to memorize it, but think about how MongoDB compares to SQL as you read.

- [Start here and read until the Deployment section.](https://www.tutorialspoint.com/mongodb/mongodb_data_modeling.htm)
- [Start here and read until the Regex section.](https://www.tutorialspoint.com/mongodb/mongodb_relationships.htm)

2. Go through the following tutorial and follow the steps to build a basic API:

- [Build a simple nodejs API using NodeJs, ExpressJs, and MongoDb.](https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2)
- Part of the tutorial requires a mLab account. You can create one [by following these directions.](https://docs.mlab.com/)

  - You can also check out this [intro to mLab video](https://www.youtube.com/watch?v=ZnOko_y1CfI) as an alternative.

- Optionally, you can reference [this video](https://youtu.be/4yqu8YF29cU) which uses the same technologies to build an API.

### Challenge

"$lt" was used earlier to filter out which documents you deleted. MongoDB's documentation has a page on [Operators](https://docs.mongodb.com/manual/reference/operator/query/). What type of operator is "$lt"?

Operators can be used to filter what you want to include and what you want to exclude. For example, `db.classmated.find({"month": {$lt: 6}})` will output anyone born before July (if you set your_birthmonth "July" as 6; because January is 0 in DateTime). You will be testing some of it next.

Open up the MongoDB daemon and shell again, create a database named "filterData". Create a collection named "zoo". Create at least 3 documents in the following format: `{"type": "lion", "name": "Suzy", "age": 10}`. Look at MongoDB's Operator page and find at least one operator other than Comparison Operator (which \$lt was), and then test it out in the zoo collection.

### Check for Understanding

List out the steps to store data in MongoDB. Find a classmate. One of you will try to explain the steps by comparing it to organizing books, and the other will compare it to organizing kitchen utensils.

### A Note About Mongoose

Further practice with Mongoose (one [ORM](https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a) for Mongo) is highly encouraged if you plan on creating a project that includes a Mongo database. If that's the case, be sure to check out the Mongoose materials below.

### Supplemental Materials

- [Mongoose docs on MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)
- [MongoDB Full Tutorial w/ Node.js, Express, and Mongoose](https://youtu.be/4yqu8YF29cU)
