# Databases

### Projected Time

1 day, 2 time willing

### Prerequisites


### Motivation
To understand, query, and insert information into a relational database,
a technology that is commonly used to store data for web and mobile applications.

### Objective

**Students will be able to**
- Explain the purpose of a database
- Explain the concept of a relational database and the use of schemas to enforce structure
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

SQL is a standard language used with multiple relational databases (Postgres, MySQL, SQLite, SQLServer, etc.).

SQL statements are just text that we send to a database. The database then executes the SQL statements, and sends the results back to us.

Relational databases help ensure data integrity because they enforce a schema, which places restrictions on the data we insert. Designing a schema usually only needs to happen when you have a new type of data that you want to insert into the DB.

Speeding up queries in relational databases requires understanding database indexing and schema design. Typically, relational databases support many types of advanced indexing strategies. Using these  can improve the execution speed of your SQL from (say) hours to milliseconds.

The most prevalent type of database index is a B-Tree, which is a version of a Binary Search Tree optimized for disk access.

Schema design is a deep topic, so it is okay if you don't grok everything at once.

Make sure you don't slow down a database for other users. This can happen if you execute a query that takes up all system resources. (Typically, faster queries use fewer system resources.)

Because you must define a schema to store data in a relational database, some developers think that they are harder to use than "schema-less" databases like MongoDB. However, taking the effort to use a schema for your data can drastically reduce the likelihood of bugs as your project matures, so many developers choose relational DBs.

### Guided Practice

- Install Postgres locally
- Connect to Postgres with the commandline client, then:
  - Create a _database_
  - Create a _table_
  
  
Have the students work with you as you do something.


### Independent Practice

Class does this thing themselves with specific additional items.


### Challenge

Students can try to do this other thing.

Schema design:
- [Splitting data into related tables (Khan Academy)](https://www.khanacademy.org/computing/computer-programming/sql/relational-queries-in-sql/a/splitting-data-into-related-tables)


### Check for Understanding

- [W3Schools quiz](http://www.w3schools.com/sql/sql_quiz.asp)
