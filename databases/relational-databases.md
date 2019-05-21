# Relational Databases & Postgres

### Projected Time: 5-6 hours

- Materials: 60-70 min
- Lesson: 20 min 
- Guided Practice: 160 min
- Independent Practice: 55 min 
- Check for Understanding: 20 min

### Prerequisites

- [SQL](/databases/sql.md)

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
- The four basic SQL verbs and their use
- Bonus topic for the advanced: foreign key constraints
- Explain different databases with slightly different dialects (MySQL - PostgreSQL)
- Explain existence of other types of non-relational, non-sql databases that will be encountered

### Materials

#### Education

- [Khan Academy's introductory SQL, videos](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql)
- [TutorialsPoint, detailed](https://www.tutorialspoint.com/sql/)
- [Difference between MySQL and PostgreSQL](https://techdifferences.com/difference-between-mysql-and-postgresql.htmls)

#### Tools

- [SQL Fiddle](http://sqlfiddle.com)

### Lesson

- [Slides](https://drive.google.com/open?id=1xK7_t_yJcu4RcBkj0Gv-t5uyBCNr0g4cHKqAJSxNwY0) | [Video Walkthrough of Slides](https://drive.google.com/file/d/1V0bk3fH_8PsRE3Vz4J3qe3TTiqBClT6y/view)

Also briefly review: [LucidChart: What is a Database Model?](https://www.lucidchart.com/pages/database-diagram/database-models). Be sure to read the [Relational Model](https://www.lucidchart.com/pages/database-diagram/database-models?a=1) section, and briefly skim over the rest just so you're aware that there are many types of database models. The only one we're working with here is the relational model, so don't worry about learning the rest yet. 

- Go through the complete tutorial mentioned in the Materials Section. [SQL Fiddle](http://sqlfiddle.com) is the tool where you can implement your sql knowledge. Practically implement creating a database schema and perform operations on it using the tool.

- The specific problems a database solves
  - Persistence of information
  - Centralized information
  - Search stored information
  - Form relationships between sets of information
- Users of databases
  - Front end people should have concepts and write very basic SQL
  - Back end people spend a large amount of time with databases
- [Structure of a relational database](https://www.lucidchart.com/pages/database-diagram/database-design)
- Few basic column types
  - `varchar`
  - `text`
  - `integer`
  - `primary key`, `auto increment`
    - exact type varies depending on database type
- The [four basic SQL verbs](https://blog.sqlauthority.com/2008/05/13/sql-server-four-basic-sql-statements-sql-operations/) and their use
  - `SELECT`
    - The SELECT statement is used to select data from a database.
    - selecting specific columns: \*, specific columns, AS column aliasing. Below are the syntax for the same.
        ```sql
        SELECT * FROM table_name;
        SELECT column1, column2, ...
        FROM table_name;
        ```
    - modifier constraints:
      - `WHERE`
        ```sql
         SELECT column1, column2, ...    
         FROM table_name  
         WHERE condition;
         ```
      - `ORDER BY`
        ```sql
          SELECT column1, column2, ...
          FROM table_name
          ORDER BY column1, column2, ... ASC|DESC;
          ```
      - `LIMIT`
        ```sql
         SELECT * FROM table_name
            LIMIT 3;
         ```
      - `JOIN`
        - A JOIN clause is used to combine rows from two or more tables, based on a related column between them
        - Here are the different types of the JOINs in SQL:
           - (INNER) JOIN: Returns records that have matching values in both tables
           - LEFT (OUTER) JOIN: Return all records from the left table, and the matched records from the right table
           - RIGHT (OUTER) JOIN: Return all records from the right table, and the matched records from the left table
           - FULL (OUTER) JOIN: Return all records when there is a match in either left or right table
  - `INSERT INTO`
    - without modifiers (entire table)
      ```sql
       INSERT INTO table_name
        VALUES (value1, value2, value3, ...);
          ```
    - with modifier constraints (same as `SELECT`)
      ```sql
       INSERT INTO table_name (column1, column2, column3, ...)
        VALUES (value1, value2, value3, ...);
        ```
    - from another table `(INSERT INTO a SELECT x, y, z from b)`
    - from another table with constraints `(INSERT INTO a SELECT x, y, z FROM b WHERE x = 'a thing')`
    - Would be good to demonstrate type mismatch (`INSERT` '1' into an integer column), but if using MySQL
      to teach this doesn't work as MySQL automatically type casts depending on server config
  - `UPDATE...SET`
    - without modifiers (entire table)
      ```sql
       UPDATE table_name
        SET column1 = value1, column2 = value2, ...;
        ```
    - with modifier constraints (same as `SELECT`)
      ```sql
       UPDATE table_name
        SET column1 = value1, column2 = value2, ...
         WHERE condition;
        ```

  - `DELETE FROM`
    - without modifiers (entire table)
      ```sql
      DELETE FROM table_name;
      ```
    - with modifier constraints (same as `SELECT`)
      ```sql
      DELETE FROM table_name WHERE condition;
      ```
- DDL or Data Definition Language actually consists of the SQL commands that can be used to define the database schema. It simply deals with descriptions of the database schema and is used to create and modify the structure of database objects in database.
Examples of DDL commands:
  - CREATE – is used to create the database or its objects (like table, index, function, views, store procedure and triggers).
  - DROP – is used to delete objects from the database.
  - ALTER-is used to alter the structure of the database.
  - TRUNCATE–is used to remove all records from a table, including all spaces allocated for the records are removed.
  - COMMENT –is used to add comments to the data dictionary.
  - RENAME –is used to rename an object existing in the database.

- DDL to create tables
  - `CREATE TABLE`

- Adavntages of Relational Database:
  - Relational databases are critical to moving, sharing and maintaining the integrity of data in the modern workplace where users working with PCs, workstations, and mainframes all need access to the same data. Using an RDBMS offers the following advantages:
     - Speed. True relational databases support client server architecture. Populate times for large ODBC databases will not grow as quickly as populate times for Paradox databases.
     - Structured Query Language (SQL), which is the basis for relational database management systems. SQL is the standard data access language of the American National Standards Institute (ANSI) and the International Standards Organization (ISO). If you are familiar with SQL, you can access any RDBMS.
     - Incremental data storage, which gives you a historical perspective of the data.
     - Client/Server configuration, which lets you run Visualizer on one machine while storing data on another machine.
     - A single interface, which provides integrated data that can be shared across platforms, networks, and devices.
- Describing an ORM:
  - Object-relational mapping (ORM) is a programming technique in which a metadata descriptor is used to connect object code to a relational database. Object code is written in object-oriented programming (OOP) languages such as Java or C#. ORM converts data between type systems that are unable to coexist within relational databases and OOP languages.

- Bonus topic for the advanced: foreign key constraints
  - A FOREIGN KEY is a key used to link two tables together.
  - A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.
  - Below is an example of its usage:
    ```sql
      CREATE TABLE Orders (
      OrderID int NOT NULL,
      OrderNumber int NOT NULL,
      PersonID int,
      PRIMARY KEY (OrderID),
      FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
    ```
The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.
- Other types of non-relational, non-sql databases that will be encountered
  - key-value (redis)
    - Redis is a key-value database (also known as a key-value store) that uses a simple key/value method to store data.
       Strings are the simplest data type in Redis and are simple key/value entries.
  - graph (Neo4j)
    - Neo4j is a graph database management system developed by Neo4j, Inc. Described by its developers as an ACID-compliant transactional database with native graph storage and processing. 
  - document (mongo)
    - MongoDB is a document database: each record in a MongoDB collection is document. Documents are a structure composed of file and value pairs,         similar to JSON objects or other mapping data types.
  - [streaming(cassandra)](https://dzone.com/articles/cassandra-sink-for-spark-structured-streaming)

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

- [Install Postgres](/databases/installing-postgresql.md) locally
- Connect to Postgres with the commandline client, then:
  - Create a _database_
  - Create a _table_
  - Create another table that is different but related, and that shares at least one column with the first table created (i.e. create a table that can be logically `JOIN`ed to the first table)
  - Add rows of data to the new table(s)
  - Execute a few queries to retrieve data, as guided by instructor or volunteers. (While this will likely be review of content from the [SQL](https://github.com/Techtonica/curriculum/blob/master/databases/sql.md) lesson plan, practice will help sharpen these skills.)
- Go through the course [Databases Course: Querying Relational Databases (145 min)](https://teamtreehouse.com/library/querying-relational-databases). In this course the concepts of Set Theory and Database Normalization are introduced. You will also learn about Database Keys and Table Relationships. Without keys, databases would not be able to function. Table Relationship help us to describe the way that one table links or relates to another.   

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

Solve the quizzes mentioned below
- [W3Schools quiz](http://www.w3schools.com/sql/sql_quiz.asp)
- [JavaTPoint sql quiz](https://www.javatpoint.com/sql-quiz)
- [TutorialsPoint quiz](https://www.tutorialspoint.com/sql/sql_online_quiz.htm)

### Check for Understanding

- What do you mean by Relational database?
- What is CRUD in SQL?
- What is DDL?
- How does SELECT command work?
- How does JOIN work?
- What are the advantages of a Relational database?
- What is an ORM?
- How is PostgreSQL different from MySQL?
- How do you model data for relational databases?


### Supplemental Resources

- [Medium: Omar El Gabry's Tutorials on Databases, Modeling, Design Process, & Normalization](https://medium.com/omarelgabrys-blog/database-introduction-part-1-4844fada1fb0)
- [Codecademy Tutorial, interactive](https://www.codecademy.com/learn/learn-sql)
- [Learn SQL the hard way, textbook](https://learncodethehardway.org/sql/)
- [GalaXQL, interactive, graphical](http://sol.gfxile.net/galaxql.html)
- [PostgreSQL SQL, technical reference manual](https://www.postgresql.org/docs/current/static/sql.html)
- [AgileData: Data Modeling 101](http://www.agiledata.org/essays/dataModeling101.html)
- [LucidChart: What is a Database Model?](https://www.lucidchart.com/pages/database-diagram/database-models)
- [EdX: Introduction to Data Modeling](https://www.edx.org/course/introduction-to-data-modeling)
- [Visual Paradigm: What is Entity Relationship Diagram (ERD)?](https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/)
- [ Databases Course: Querying Relational Databases(145min)](https://teamtreehouse.com/library/querying-relational-databases)


### Footnotes

<sup>1</sup>The word [grok](https://en.wikipedia.org/wiki/Grok) means "to understand", usually with a connotation of "to understand deeply and intuitively." It's like a really deep feeling of "oh, I REALLY get it now." People who love tech and sci-fi use this word and it can sometimes be an ingroup marker in programmer circles. 
