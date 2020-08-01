# Relational Databases & Postgres

![](https://36d5l8225ig13rrnnc3w4af9-wpengine.netdna-ssl.com/wp-content/uploads/sites/16/2019/06/under-construction-01-768x320.jpg)

This lesson has an [open issue for substantial revisions](https://github.com/Techtonica/curriculum/issues/1202). I would advise not using it until that issue is resolved.

### Projected Time

Total Time: 5-6 hours

- Materials: 60-70 min
- Lesson: 20 min
- Guided Practice: 160 min
- Independent Practice: 55 min
- Check for Understanding: 20 min

### Prerequisites

- [SQL](/databases/sql.md)
- [Data Models](/databases/data-models.md)


### Motivation

To understand, query, and insert information into a relational database, a technology that is commonly used to store data for web and mobile applications. Also relational database model seems very feasible because of its tabular form which makes insertion and querying easy.

### Use cases of SQL vs NoSQL databases

![](https://blog.couchbase.com/wp-content/uploads/2017/04/nosql-vs-sql-overview-1.png)

### Objectives

**Apprentices will be able to:**

- Explain the purpose of a database
- Explain the concept of a relational database and the use of schemas to enforce structure
- Execute basic SQL commands for CRUD with a database
- Perform basic **select** queries to find the requested information
- Understand the existence of other database types
- Consider how to model data for relational databases

### Specific Things to Learn

- The specific problems a database solves
- Structure of a relational database; tables with columns and references to other tables
- Few basic column types
- The four basic SQL operators and their use
- Explain existence of other types of non-relational, non-sql databases that will be encountered

### Materials

#### Education

- [Khan Academy's introductory SQL, videos](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql)
- [four basic SQL operators](https://blog.sqlauthority.com/2008/05/13/sql-server-four-basic-sql-statements-sql-operations/)
- [streaming(cassandra)](https://dzone.com/articles/cassandra-sink-for-spark-structured-streaming)

#### Tools

- [SQL Fiddle](http://sqlfiddle.com)

### Lesson

- [Slides](https://drive.google.com/open?id=1xK7_t_yJcu4RcBkj0Gv-t5uyBCNr0g4cHKqAJSxNwY0) | [Video Walkthrough of Slides](https://drive.google.com/file/d/1V0bk3fH_8PsRE3Vz4J3qe3TTiqBClT6y/view)

- Look through the rest of the links in the Materials Section. [SQL Fiddle](http://sqlfiddle.com) is the tool where you can implement your sql knowledge. Practically implement creating a database schema and perform operations on it using the tool.

#### Relational Database Basics

- The specific problems a database solves
  - Persistence of information
  - Centralized information
  - Search stored information
  - Form relationships between sets of information
  
- Few basic column types
  - `varchar`
  - `text`
  - `integer`
  - `primary key`, `auto increment`
    - exact type varies depending on database type
- The [four basic SQL operators](https://blog.sqlauthority.com/2008/05/13/sql-server-four-basic-sql-statements-sql-operations/) and their use

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
  - `INSERT INTO`

    - without modifiers (entire table)
      ````sql
       INSERT INTO table_name
        VALUES (value1, value2, value3, ...);
      ````
    - from another table `(INSERT INTO a SELECT x, y, z from b)`
    - from another table with constraints `(INSERT INTO a SELECT x, y, z FROM b WHERE x = 'a thing')`

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
    -
    _The above examples are from [w3schools.](https://www.w3schools.com/sql/sql_select.asp)_

- Other types of non-relational, non-sql databases that will be encountered

  - key-value [(redis)](https://www.shellhacks.com/en/redis-set-get-key-value-redis-cli/)
    - Redis is a key-value database (also known as a key-value store) that uses a simple key/value method to store data.
      Strings are the simplest data type in Redis and are simple key/value entries.
  - graph [(Neo4j)](https://github.com/JNOSQL/artemis-demo/tree/master/artemis-demo-java-se/graph-neo4j)
    - Neo4j is a graph database management system developed by Neo4j, Inc. Described by its developers as an ACID-compliant transactional database with native graph storage and processing.
  - document [(mongo)](https://docs.mongodb.com/getting-started/cpp/documents/)
    - MongoDB is a document database: each record in a MongoDB collection is document. Documents are a structure composed of file and value pairs, similar to JSON objects or other mapping data types.
  - [streaming(cassandra)](https://dzone.com/articles/cassandra-sink-for-spark-structured-streaming): Give the read to this article so that you can get idea about cassandra which is another non-sql database. You can even try out the code given in the article later to get complete understanding.

### Guided Practice

- [Install Postgres](/databases/installing-postgresql.md) locally
- Connect to Postgres with the commandline client, then:
  - Create a _database_
  - Create a _table_
  - Create another table that is different but related, and that shares at least one column with the first table created (i.e. create a table that can be logically connected to the first table)
  - Add rows of data to the new table(s)
  - Execute a few queries to retrieve data, as guided by instructor or volunteers. (While this will likely be review of content from the [SQL](./sql.md) lesson plan, practice will help sharpen these skills.)
- Go through the course [Databases Course: Querying Relational Databases (145 min)](https://teamtreehouse.com/library/querying-relational-databases). In this course the concepts of Set Theory and Database Normalization are introduced. You will also learn about Database Keys and Table Relationships. Without keys, databases would not be able to function. Table Relationship help us to describe the way that one table links or relates to another.

### Independent Practice

**(IMP: While working on the following activities you can refer back to the prerequisites at any point of time for better understanding.)**

**Activity #1**

Think of data you'd like to store. Consider how to categorize this data-- these categories can help define tables to create. Also consider relationships among these categories and what you might hope to accomplish using the data.

(i.e. What types of queries would you be most likely to execute? What types of questions would you want answered using the data available?)

**Activity #2**

Design your tables. Create an Entity Relationship diagram either on paper or using free software online. (Skim [Omar El Gabry's Medium post on Database Design](https://medium.com/omarelgabrys-blog/database-database-modeling-conceptual-design-part-4-645545a74a4b) if you haven't already.)

Share your diagram with a peer and briefly explain how you arrived at that design.

**Activity #3**

Create tables based on your data models and diagrams.

**Activity #4**

Query some data. Ask a peer to challenge you with complex questions to query for based on your model -- ideally questions that will require you to `FILTER` or `GROUP BY` by different properties.

### Challenge

Schema design:

- [Splitting data into related tables (Khan Academy)](https://www.khanacademy.org/computing/computer-programming/sql/relational-queries-in-sql/a/splitting-data-into-related-tables)

Solve the quizzes mentioned below

- [W3Schools quiz](http://www.w3schools.com/sql/sql_quiz.asp)
- [JavaTPoint SQL quiz](https://www.javatpoint.com/sql-quiz)
- [TutorialsPoint quiz](https://www.tutorialspoint.com/sql/sql_online_quiz.htm)

### Check for Understanding

- What do you mean by Relational database?
- What is CRUD in SQL?
- How does SELECT command work?
- How do you model data for relational databases?

### Supplemental Resources

- [Medium: Omar El Gabry's Tutorials on Databases, Modeling, Design Process, & Normalization](https://medium.com/omarelgabrys-blog/database-introduction-part-1-4844fada1fb0)
- [TutorialsPoint, detailed](https://www.tutorialspoint.com/sql/)
- [Codecademy Tutorial, interactive](https://www.codecademy.com/learn/learn-sql)
- [Learn SQL the hard way, textbook](https://learncodethehardway.org/sql/)
- [GalaXQL, interactive, graphical](http://sol.gfxile.net/galaxql.html)
- [PostgreSQL SQL, technical reference manual](https://www.postgresql.org/docs/current/static/sql.html)
- [Visual Paradigm: What is Entity Relationship Diagram (ERD)?](https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/)

### Footnotes

<sup>1</sup>The word [grok](https://en.wikipedia.org/wiki/Grok) means "to understand", usually with a connotation of "to understand deeply and intuitively." It's like a really deep feeling of "oh, I REALLY get it now." People who love tech and sci-fi use this word and it can sometimes be an ingroup marker in programmer circles.
