# SQL

### Projected Time

4 hours

### Prerequisites

- [Data Models](databases/data-models.md)

### Motivation

Most software applications store data of some sort -- user data, content, etc. Databases are used to store data, so software developers should know how to use them. *Relational databases* are a common type of database that are good for storing many types of data.

### Objectives

**Participants will be able to:**

- Interact with SQLite through the command line and through a GUI SQL browser
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
- Free SQL Cloud DBs can be created at https://www.elephantsql.com/
- [SQL Fiddle](http://sqlfiddle.com/)

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

### Challenge

Go to https://www.elephantsql.com/, set up a new database, and use the **browser** section to:
- Create database tables
- Add, update, and delete data
- Query data

Take a quick look at the **details** section. This is where you'd find the URL and everythign else you'll need to request data once you connect your DB to an API you might build as soon as next week.

### Check for Understanding


- In SQLite, create the tables for an app similar to Twitter. Your database should be able to store: user information, tweets, and which users follow each other.
- Compare your table setup with another apprentice's.
- Add data to the tables
- Try writing queries that get data such as:
	- All the tweets by a given user
	- The 10 most recent tweets
	- Use a join to get a user's info along with their tweets
	- Find which user has the most followers
	- Make up your own!

### Supplemental Materials

- [Khan Academy's introductory SQL, videos](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql)
- [W3Schools Tutorial, interactive](http://www.w3schools.com/sql/default.asp)
- [Learn SQL the hard way, textbook](https://learncodethehardway.org/sql/)
- [GalaXQL, interactive, graphical](http://sol.gfxile.net/galaxql.html)
- [PostgreSQL SQL, technical reference manual](https://www.postgresql.org/docs/current/static/sql.html)
- [SQLZoo](https://sqlzoo.net/wiki/SQL_Tutorial)
- [A RDBMS Comparison](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)
