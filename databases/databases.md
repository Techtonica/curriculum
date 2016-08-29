# Databases

### Projected Time

1 day, 2 time willing

### Motivation
To understand, query, and insert information into a relational database,
a technology that is commonly used to store data for web and mobile applications.

### Objective

**Students will be able to**
- Explain the purpose of a database
- Explain the concept of a commonly relational database and it's structure
- Execute basic SQL commands for CRUD with a database
- Perform basic selects and joins to find the requested information
- Create tables using DDL
- Understand the existence of different SQL dialects
- Understand the existence of other database types

### Specific Things To Teach

- The specific problems a database solves
  - Persistence of information
  - Centralized information
  - Search stored information
  - Form relationships between sets of information
- Users of databases
  - Front end people should have concepts and write very basic SQL
  - Back end people spend a large amount of time with databases
- Structure of a relational database; tables with columns and references to other tables
- Few basic column types
  - `varchar`
  - `text`
  - `integer`
  - `primary key`, `auto increment`
    - exact type varies depending on database type
- General SQL statement pattern (verb-subject-optional modifiers)
- The four basic SQL verbs and their use
  - `SELECT`
    - without modifiers
    - selecting specific columns: \*, specific columns, AS column aliasing
    - modifier constraints:
      - `WHERE`
      - `ORDER BY`
      - `LIMIT`
      - `JOIN`
        - Should only cover `LEFT INNER/NATURAL/JOINS` with resources pointing to other types
  - `INSERT INTO`
    - without modifiers (entire table)
    - with modifier constraints (same as `SELECT`)
    - from another table `(INSERT INTO a SELECT x, y, z from b)`
    - from another table with constraints `(INSERT INTO a SELECT x, y, z FROM b WHERE x = 'a thing')`
    - Would be good to demonstrate type mismatch (`INSERT` '1' into an integer column), but if using MySQL
      to teach this doesn't work as MySQL automatically type casts depending on server config
  - `UPDATE...SET`
    - without modifiers (entire table)
    - with modifier constraints (same as `SELECT`)
  - `DELETE FROM`
    - without modifiers (entire table)
    - with modifier constraints (same as `SELECT`)
- DDL to create tables
  - `CREATE TABLE`
- Bonus topic for the advanced: foreign key constraints
- Explain different databases with slightly different dialects (MySQL - PostgreSQL)
- Explain existence of other types of non-relational, non-sql databases that will be encountered
  - examples key-value (redis), graph (Neo4j), streaming (cassandra), document (mongo)

### Materials

#### Education

- [Khan Academy's introductory SQL, videos](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql)
- [W3Schools Tutorial, interactive](http://www.w3schools.com/sql/default.asp)
- [Code Academny Tutorial, interactive](https://www.codecademy.com/learn/learn-sql)
- [Learn SQL the hard way, textbook](https://learncodethehardway.org/sql/)
- [GalaXQL, interactive, graphical](http://sol.gfxile.net/galaxql.html)
- [PostgreSQL SQL, technical reference manual](https://www.postgresql.org/docs/current/static/sql.html)

#### Tools

- [SQL Fiddle](http://sqlfiddle.com)

### Mini Lesson

Here's text about introducing something and how it works.

Build on the first information. Have students guess things, do an activity, etc.

Make sure to mention these things:
- Things
	- This is a sub-thing
- More things
- Even more things
- Even more things

### Common Mistakes / Misconceptions

This is something that students might not realize or might assume at first.

Make sure they avoid this: thing


### Guided Practice

Have the students work with you as you do something.


### Independent Practice

Class does this thing themselves with specific additional items.


### Challenge

Students can try to do this other thing.


### Check for Understanding

- [W3Schools quiz](http://www.w3schools.com/sql/sql_quiz.asp)
