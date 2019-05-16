# Databases

### Projected Time: 105-115 min

- Materials: 60-70 min
- Lessons: 20 min
- Independent practice: 15 min
- Check for Understanding: 10 min

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
- Users of databases
- Structure of a relational database; tables with columns and references to other tables
- Few basic column types
- General SQL statement pattern (verb-subject-optional modifiers)
- The four basic SQL verbs and their use
- DDL to create tables
- Bonus topic for the advanced: foreign key constraints
- Explain different databases with slightly different dialects (MySQL - PostgreSQL)
- Explain existence of other types of non-relational, non-sql databases that will be encountered

### Materials

#### Education

- [Khan Academy's introductory SQL, videos](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql)
- [W3Schools Tutorial, interactive](http://www.w3schools.com/sql/default.asp)
- [PostgreSQL SQL, technical reference manual](https://www.postgresql.org/docs/current/static/sql.html)

#### Tools

- [SQL Fiddle](http://sqlfiddle.com)

### Lesson
- [Slides](https://drive.google.com/open?id=1xK7_t_yJcu4RcBkj0Gv-t5uyBCNr0g4cHKqAJSxNwY0) | [Video Walkthrough of Slides](https://drive.google.com/file/d/1V0bk3fH_8PsRE3Vz4J3qe3TTiqBClT6y/view)

Also be sure to review: [LucidChart: What is a Database Model?](https://www.lucidchart.com/pages/database-diagram/database-models)

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

### Supplemental Resources

- [Medium: Omar El Gabry's Tutorials on Databases, Modeling, Design Process, & Normalization](https://medium.com/omarelgabrys-blog/database-introduction-part-1-4844fada1fb0)
- [Learn SQL the hard way, textbook](https://learncodethehardway.org/sql/)
- [GalaXQL, interactive, graphical](http://sol.gfxile.net/galaxql.html)
- [AgileData: Data Modeling 101](http://www.agiledata.org/essays/dataModeling101.html)
- [LucidChart: What is a Database Model?](https://www.lucidchart.com/pages/database-diagram/database-models)
- [EdX: Introduction to Data Modeling](https://www.edx.org/course/introduction-to-data-modeling)
- [Visual Paradigm: What is Entity Relationship Diagram (ERD)?](https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/)




 
