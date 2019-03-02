# SQL

### Projected Time

4 hours

### Prerequisites

- [Data Models](databases/data-models.md)

### Motivation

Most software applications store data of some sort -- user data, content, etc. Databases are used to store data, so software developers should know how to use them. *Relational databases* are a common type of database that are good for storing many types of data.

### Objectives

**Participants will be able to:**

- Interact with SQLite through the command line and through a GUI SQLite browser such as [DB Browser for SQLite](https://sqlitebrowser.org/)
- Create database tables
- Add, update, and delete data
- Query data
- Design a basic relational database schema fitting a use case

### Specific Things To Teach

- Create a table
- Query data from a table
- Filter and limit
- Joins
- Insert data into a table
- Update
- Delete

### Materials

- [Codecademy Tutorial, interactive](https://www.codecademy.com/learn/learn-sql)
- [DB Browser for SQLite](https://sqlitebrowser.org/)
- [SQL Fiddle](http://sqlfiddle.com/) to play with SQL queries

### Lesson

[SQL (video walkthrough of slides)](https://drive.google.com/file/d/1V0bk3fH_8PsRE3Vz4J3qe3TTiqBClT6y/view)

[Slides](https://docs.google.com/presentation/d/1xK7_t_yJcu4RcBkj0Gv-t5uyBCNr0g4cHKqAJSxNwY0/edit)


### Common Mistakes / Misconceptions
- SQL commands are case-insensitive. This is unlike most programming languages! For example, in SQL, these two commands will both do the same thing:
	- `SELECT * FROM food;`
	- `select * From fOOd;`

- Don't forget the semicolons! SQL commands will only run if you put a semicolon at the end of them.


### Independent Practice

1. Work through the Codecademy SQL Tutorial: https://www.codecademy.com/learn/learn-sql

2. SQLite is a version of SQL that comes installed on mac! Try it out:
	- In Terminal, type `sqlite3` to use SQLite.
	- Try adding a table with a command like `CREATE TABLE food (name TEXT, calories INTEGER);`
	- See that the table was created by typing `.tables` to see the list of all existing tables.
	- Try adding some data: `INSERT INTO food VALUES ("pizza", 500);`
	- See the data: `SELECT * from food;`

Try creating tables and adding, updating, deleting, and querying data yourself!

3. Download and install [DB Browser for SQLite](https://sqlitebrowser.org/) via its download page. Try opening the database you just created! Browse the data and get a feel for how to move around  

### Challenge

Note: this segment still has you working with SQL, but not using the SQLite database -- it's using Postgres intead. 

Go to https://www.elephantsql.com/, set up a new database, and use the **browser** section to:

- Create database tables
- Add, update, and delete data
- Query data

Take a quick look at the **details** section. This is where you'd find the URL and everythign else you'll need to request data once you connect your DB to an API you might build as soon as next week.

### Check for Understanding

In SQLite on your own machine, you are going to create the tables for a microblogging platform (an app similar to Twitter). Your database should be able to store user information and posts by specific users. One post must *belong to* exactly one user. One user can have many posts. Later, we'll add the ability for users to follow each other, but not now.

0. With pen(cil) and paper, write out the data for a database with the following spec. Fill in the fields with fake data that you make up. Be sure to link posts to a certain existing user!
	- a table named: `users`
		- which has a text field named: `name`
		- and a text field named: `email`
	- a table named: `posts`
		- which has an integer field named: `user_id`
		- and a text field named: `content`

1. Use the `sqlite3` command in your terminal to enter the SQLite command line program. Once there, use SQL statements to create two tables according to the spec for the two tables in step 0.

2. Once you have your two tables set up, compare your table setup with another apprentice's.

3. Add sample data to the tables yourself (make up some users and posts)

4. Try writing queries that get data such as:
	- All the tweets by a given user
	- The 10 most recent tweets by any user
	- Use a join to get a user's info along with their tweets
	- Make up your own!

5. Now let's perform a database migration. We will add a new column to an existing table in our database. Add a text field named: `bio` to your existing `users` table! 

6. Add some sample data to your new bio fields, but not for every user (leave some of their bios blank). 

7. Try writing queries that get data such as:
	- Just the bios of all users in the databases
	- A list of users that have no bio 
	- Just the names of those users that have no bio
	- Make up your own!

#### CfU Challenge 

If you complete the above, we'll move on to creating a join table.

1. Add a new table named `follows` that has an int field `follower_id` and an int field `followed_id`. Draw a picture for this table.

2. Write some queries that get data such as:
	- All users that user 2 is following 
		- Hint: in `follows`, look for `follower_id` 2, and get all of the user IDs that are in those rows' `followed_id` fields. Then get the users by that set of user IDs.
	- All users that follow user 2 (users that have 2 as the `followed_id`)
		- Hint: in `follows`, look for `followed_id` 2, and get all of the user IDs that are in those rows' `follower_id` fields. Then get those users.
	- Find which user has the most followers
	
### Supplemental Materials

- Free SQL Cloud DBs can be created at https://www.elephantsql.com/ (this services uses postgres, not SQLite)
- [Khan Academy's introductory SQL, videos](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql)
- [TutorialsPoint, detailed](https://www.tutorialspoint.com/sql/)
- [Learn SQL the hard way, textbook](https://learncodethehardway.org/sql/)
- [GalaXQL, interactive, graphical](http://sol.gfxile.net/galaxql.html)
- [PostgreSQL SQL, technical reference manual](https://www.postgresql.org/docs/current/static/sql.html)
- [SQLZoo](https://sqlzoo.net/wiki/SQL_Tutorial)
- [A RDBMS Comparison](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)
