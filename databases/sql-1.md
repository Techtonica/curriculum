# SQL (Single table operations)

### Projected Time

About 3.5-4 hours

### Prerequisites

- [Data Modeling Part 1: Single Tables](./data-modeling-1.md)

### Motivation

Most software applications store data of some sort -- user data, content, etc. Databases are used to store data, so software developers should know how to use them. _Relational databases_ are a common type of database that are good for storing many types of data. Most companies use relational databases to store their data.

### Objectives

**Participants will be able to:**

- Interact with PostgreSQL through the command line and through a GUI PostgreSQL client such as [Postico](https://eggerapps.at/postico/)
- Create database tables
- Add, update, and delete data
- Query data
- Design a basic relational database schema fitting a use case

### Specific Things to Learn

- Create a table
- Query data from a table
- Filter and limit
- Insert data into a table
- Update
- Delete

### Materials

- [SQL Slides](https://docs.google.com/presentation/d/1xK7_t_yJcu4RcBkj0Gv-t5uyBCNr0g4cHKqAJSxNwY0/edit)
- [Codecademy SQL Tutorial](https://www.codecademy.com/learn/learn-sql) Sections 1-3
- [SQL Fiddle](http://sqlfiddle.com/) to play with SQL queries

### Lesson

- Read through lesson slides [SQL](https://docs.google.com/presentation/d/1xK7_t_yJcu4RcBkj0Gv-t5uyBCNr0g4cHKqAJSxNwY0/edit)
- Video walkthrough of lesson slides [SQL](https://drive.google.com/file/d/1V0bk3fH_8PsRE3Vz4J3qe3TTiqBClT6y/view)

### Common Mistakes / Misconceptions

- SQL commands are case-insensitive. This is unlike most programming languages! For example, in SQL, these two commands will both do the same thing:
  - `SELECT * FROM food;`
  - `select * From fOOd;`
- Don't forget the semicolons! SQL commands will only run if you put a semicolon at the end of them.

### Independent Practice

#### Section 1: Creating tables and basic querying

1. Work through the [Codecademy SQL Tutorial](https://www.codecademy.com/learn/learn-sql) **Section 1 (Manipulation)**:

2. PostgreSQL is a popular, open-source version of SQL. Try it out:
   - In Terminal, type `psql` to use PostgreSQL.
   - Try adding a table with the command `CREATE TABLE food (id INTEGER, name TEXT, calories INTEGER);`
   - See that the table was created by typing `.\dt` to see the list of all existing tables.
   - Try adding some data: `INSERT INTO food VALUES ("pizza", 500);`
   - See the data: `SELECT * from food;`

3. Using PostgreSQL, try creating tables and adding, updating, deleting, and querying data yourself!

4. Using Postico, try opening the database you just created! Browse the data and get a feel for how to move around. One way to view SQL data is through the command line, and another way is through graphical tools like the Postico.

5. Try writing queries for the following using the `food` table:
   - Add a column to the table called `meal`
   - Update "pizza" to have its meal be "dinner"
   - Insert 4 more rows into the food DB. Be sure to include values for all 4 columns -- `id`, `name`, `calories`, and `meal`
   - Update "pizza" to have a different calories number
   - Select only the names of all the foods
   - Make up a query of your own using another command you've learned

#### Section 2: Queries

1. Work through the [Codecademy SQL Tutorial](https://www.codecademy.com/learn/learn-sql) **Section 2 (Queries)**

2. In PostgreSQL, try writing queries for the following using the `food` table. Add some data to the table that meets the criteria below so you'll have something to query for.
   - Select all foods that have under 100 calories
   - Select the names of all foods that start with the letter "a"
   - Select all foods that start with "a" AND have meal equal to "dinner"
   - Select all foods where meal is "breakfast", sorted by calorie number
   - Make up a query of your own using another command you've learned

#### Section 3: Advanced queries

1. Now do the [Codecademy SQL Tutorial](https://www.codecademy.com/learn/learn-sql) **Section 3 (Aggregate functions)**

2. Try writing queries for the following using the `food` table:
   - Count the number of rows in the food table
   - Find the food with the maximum number of calories
   - Find the average number of calories for breakfast food
   - Make up a query of your own using another command you've learned

### Supplemental Materials

- Another good SQL tutorial: [SQL Teaching](https://www.sqlteaching.com)
- Free SQL Cloud DBs can be created at https://www.elephantsql.com/
- [Continue the SQL Codecademy Tutorial (interactive)](https://www.codecademy.com/learn/learn-sql)
- [Postico for PostgreSQL](https://eggerapps.at/postico/)
- [Khan Academy's introductory SQL(videos)](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql)
- [TutorialsPoint (detailed)](https://www.tutorialspoint.com/sql/)
- [Learn SQL the hard way, textbook](https://learncodethehardway.org/sql/)
- [GalaXQL (interactive, graphical)](http://sol.gfxile.net/galaxql.html)
- [PostgreSQL SQL, technical reference manual](https://www.postgresql.org/docs/current/static/sql.html)
- [SQLZoo](https://sqlzoo.net/wiki/SQL_Tutorial)
- [A RDBMS Comparison](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)
