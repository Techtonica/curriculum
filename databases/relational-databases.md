# Relational Databases & Postgres

### Projected Time

1 day (or 2 days, time willing)

### Prerequisites

- [SQL](https://github.com/Techtonica/curriculum/blob/master/databases/sql.md)

### Motivation

To understand, query, and insert information into a relational database, a technology that is commonly used to store data for web and mobile applications.

### Objectives

**Apprentices will be able to:**

- Explain the purpose of a database
- Explain the concept of a relational database and the use of schemas to enforce structure
- Execute basic SQL commands for CRUD with a database
- Perform basic selects and joins to find the requested information
- Create tables using DDL
- Understand the existence of different SQL dialects
- Understand the existence of other database types
- Become familiar with ORMs
- Consider how to model data for relational databases

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

- [Medium: Omar El Gabry's Tutorials on Databases, Modeling, Design Process, & Normalization](https://medium.com/omarelgabrys-blog/database-introduction-part-1-4844fada1fb0)
- [Khan Academy's introductory SQL, videos](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql)
- [TutorialsPoint, detailed](https://www.tutorialspoint.com/sql/)
- [Codecademy Tutorial, interactive](https://www.codecademy.com/learn/learn-sql)
- [Learn SQL the hard way, textbook](https://learncodethehardway.org/sql/)
- [GalaXQL, interactive, graphical](http://sol.gfxile.net/galaxql.html)
- [PostgreSQL SQL, technical reference manual](https://www.postgresql.org/docs/current/static/sql.html)
- [AgileData: Data Modeling 101](http://www.agiledata.org/essays/dataModeling101.html)
- [LucidChart: What is a Database Model?](https://www.lucidchart.com/pages/database-diagram/database-models)
- [EdX: Introduction to Data Modeling](https://www.edx.org/course/introduction-to-data-modeling)
- [Visual Paradigm: What is Entity Relationship Diagram (ERD)?](https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/)

#### Tools

- [SQL Fiddle](http://sqlfiddle.com)

### Lesson
- [Slides](https://drive.google.com/open?id=1xK7_t_yJcu4RcBkj0Gv-t5uyBCNr0g4cHKqAJSxNwY0) | [Video Walkthrough of Slides](https://drive.google.com/file/d/1V0bk3fH_8PsRE3Vz4J3qe3TTiqBClT6y/view)

Also briefly review: [LucidChart: What is a Database Model?](https://www.lucidchart.com/pages/database-diagram/database-models). Be sure to read the [Relational Model](https://www.lucidchart.com/pages/database-diagram/database-models?a=1) section, and briefly skim over the rest just so you're aware that there are many types of database models. The only one we're working with here is the relational model, so don't worry about learning the rest yet. 

### Common Mistakes / Misconceptions

SQL is a standard language used with multiple relational databases (Postgres, MySQL, SQLite, SQLServer, etc.).

SQL statements are just text that we send to a database. The database then executes the SQL statements, and sends the results back to us.

Relational databases help ensure data integrity because they enforce a schema, which places restrictions on the data we insert. Designing a schema usually only needs to happen when you have a new type of data that you want to insert into the DB.

Speeding up queries in relational databases requires understanding database indexing and schema design. Typically, relational databases support many types of advanced indexing strategies. Using these  can improve the execution speed of your SQL from (say) hours to milliseconds.

The most prevalent type of database index is a B-Tree, which is a version of a Binary Search Tree optimized for disk access.

Schema design is a deep topic, so it is okay if you don't grok<sup>1</sup> everything at once.

Make sure you don't slow down a database for other users. This can happen if you execute a query that takes up all system resources. (Typically, faster queries use fewer system resources.)

Because you must define a schema to store data in a relational database, some developers think that they are harder to use than "schema-less" databases like MongoDB. However, taking the effort to use a schema for your data can drastically reduce the likelihood of bugs as your project matures, so many developers choose relational DBs.

### Guided Practice
- Install Postgres locally
- Connect to Postgres with the commandline client, then:
  - Create a _database_
  - Create a _table_
  - Create another table that is different but related, and that shares at least one column with the first table created (i.e. create a table that can be logically `JOIN`ed to the first table)
  - Add rows of data to the new table(s)
  - Execute a few queries to retrieve data, as guided by instructor or volunteers. (While this will likely be review of content from the [SQL](https://github.com/Techtonica/curriculum/blob/master/SQL/sql.md) lesson plan, practice will help sharpen these skills.)

### Independent Practice
**Activity #1**

Think of data you'd like to store. Consider how to categorize this data-- these categories can help define tables to create. Also consider relationships among these categories and what you might hope to accomplish using the data.

(i.e. What types of queries would you be most likely to execute?  What types of questions would you want answered using the data available?)

**Activity #2**

Design your tables. Create an Entity Relationship diagram either on paper or using free software online. (Skim [Omar El Gabry's Medium post on Database Design](https://medium.com/omarelgabrys-blog/database-database-modeling-conceptual-design-part-4-645545a74a4b) if you haven't already.)

Share your diagram with a peer and briefly explain how you arrived at that design.

**Activity #3**

Create tables based on your data models and diagrams.

**Activity #4**

Query some data. Ask a peer to challenge you with complex questions to query for based on your model -- ideally questions that will require you to `JOIN` or `FILTER` or `GROUP BY` by different properties.

### Challenge

Schema design:
- [Splitting data into related tables (Khan Academy)](https://www.khanacademy.org/computing/computer-programming/sql/relational-queries-in-sql/a/splitting-data-into-related-tables)

Further learning: Object-Relational Mapping (& ORM libaries)
- [freeCodeCamp: Which JavaScript ORM should you be using in 2018?](https://medium.freecodecamp.org/a-comparison-of-the-top-orms-for-2018-19c4feeaa5f)

### Check for Understanding

- [W3Schools quiz](http://www.w3schools.com/sql/sql_quiz.asp)
- [JavaTPoint sql quiz](https://www.javatpoint.com/sql-quiz)
- [TutorialsPoint quiz](https://www.tutorialspoint.com/sql/sql_online_quiz.htm)

### Footnotes

<sup>1</sup>The word [grok](https://en.wikipedia.org/wiki/Grok) means "to understand", usually with a connotation of "to understand deeply and intuitively." It's like a really deep feeling of "oh, I REALLY get it now." People who love tech and sci-fi use this word and it can sometimes be an ingroup marker in programmer circles. 
