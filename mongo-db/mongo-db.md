# MongoDB

### Projected Time
30-45 minutes
- 10 minutes for video walkthrough of slides
- 20 minutes for Independent Practice
- 15 minutes for Check for Understanding

### Prerequisites
- Object Literals
- JSON
- Relational Databases

### Motivation
Not all data can be (or should be) stored in a relational way. In those cases, it is more efficient to use a NoSQL database. MongoDB is one of the most popular NoSQL databases. MongoDB stores data in JSON-like "documents", which is familiar to folks who already know JavaScript.


### Objective
**Students will be able to**
- Set up MongoDB on their laptops
- Create databases and collections in MongoDB
- Add, query, and update documents

### Materials

- [MongoDB University](https://university.mongodb.com/)
- [TutorialsPoint MongoDB Tutorial](http://www.tutorialspoint.com/mongodb/)

### Mini Lesson

[MongodDB (video walkthrough of slides)]

[MongoDB (slides)](https://docs.google.com/presentation/d/1BvO6PrSpulHVSDNOkMaDZM-V7McmheLgm0Lg2PFae7k/edit#slide=id.p)


### Common Mistakes / Misconceptions

- **"I already learned how to use relational databases. I'll just stick with that. They both store data anyway."** The structure of relational databases is set up for relational data. Using a relational databse for non-relational data results in reduced scalability and added cost.

### Independent Practice

Techtonica staff will assign pairs.

**Activity 1: Installation**
1. Check to see if you have Homebrew installed on your laptop. From your Terminal, run the `brew help` command. If you have Homebrew installed, you'll see output from Homebrew appear in your Terminal.  

If no Homebrew-related text appears, you'll need to install Homebrew. Go to the [Homebrew website](https://brew.sh/) and follow the installation instructions. Ask for help from Techtonica staff if you need help.

2. To ensure you have the latest version of MongoDB, run `brew update` in the Terminal. This may take a couple minutes.

3. Install MongoDB using `brew install mongodb` in the Terminal. If you get an error message saying you need to install Xcode from the App Store, follow the instructions to do so and then re-try `brew install mongodb`. Ask for help from Techtonica staff if you need help.

--------------
// Left off here

- Make sure you have the directory /data/db. If not, run `mkdir -p /data/db`.
- Run `whoami` to find your username. For example, your username is "myname", then you will run the following command `sudo chown myname /data/db`. You may need to enter your password.
- If a ~/.bash_profile exist, open it. If not, create one. Enter:
  - `export MONGO_PATH=/usr/local/mongodb`
  - `export PATH=$PATH:$MONGO_PATH/bin`
- Save .bash_profile and restart terminal.
- Open 2 terminal window. On one, run `mongod`. Wait until the following message appear: `[initandlisten] waiting for connections on port 27017`. mongod stands for Mongo Daemon, the host ***process*** for the database. Next, you will open a Mongo shell to ***access*** the database.
- Keep the first window open with `mongod` still running. Switch to second terminal window, run `mongo --host 127.0.0.1:27017`. This is your Mongo shell.

**Activity 2: Working with Database**
- In the shell, run `use techtonica`. Then run `show dbs`, which will list out the list of databases. What database is there? What is missing?

- The newly created database, "techtonica", should be missing. This is because the techtonica database is empty. Insert a document by running `db.classmates.insert({"name": "your_name", "month": your_birthmonth})`. Do it at least two more time with your classmate's name. Remember not to double-quoted the birthmonth to keep it as a digit instead of string.

- MongoDB stores documents in collection. Run `show collections`. What is already there? Can you guess at least where one of the collections came from?

- Run `db.createCollection("teacher")`.

- View what's in each collection by running `db.classmates.find()` and `db.teachers.find()`. What's the difference?

- Fix the empty teacher collection by entering a document: `db.teachers.insert({"teacher": "Erin"})` and `db.teachers.insert({"teacher": "Allard"})`.

- Select a number between your birthmonth and your classmate's birthmonth inside the classmates collections. Run `db.classmates.remove({"month": {$lt: the_number_your_selected}})`. The "$lt" means "less than". What do you think happened to the collections?

- Run `db.classmates.find()`. Were you correct?

- Run `db.teachers.remove({})`, then `db.teachers.find()`. What happened?

- Make sure you are in the techtonica database by running `use techtonica`. Make sure the output is `switched to db techtonica`. Then, you will delete the techtonica database by running `db.dropDatabase()`. The output should be `{ "dropped" : "techtonica", "ok" : 1 }`.

- Exit the shell by running `exit`. Next, go to the terminal window running the Mongo Daemon, mongod. Exit the daemon by entering Ctrl C.

### Challenge

"$lt" was used earlier to filter out which documents you deleted. MongoDB's documentation have a page on [Operators](https://docs.mongodb.com/manual/reference/operator/query/). What type of operator is "$lt"?

Operator can be use to only only filter what you remove, but also what you find. For example, `db.classmated.find({"month": {$lt: 6}})` will output any anyone born before July. You will be testing some of it next.

Open up the MongoDB daemon and shell again, create a database named "filterData". Create a collection named "zoo". Create at least 3 documents in the following format: `{"type": "lion", "name": "Suzy", "age": 10}`. Look at MongoDB's Operator page and find at least one operator other than Comparison Operator (which $lt was), and then test it out in the zoo collection.

### Check for Understanding

List out the steps to store data in MongoDB. Find a classmate. One of you will try to explain the steps by comparing it to organizing books, and the other will compare it to organizing kitchen utensils.
