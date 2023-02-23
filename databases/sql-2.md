# SQL 2 (Multiple Tables)

### Week 6 Keywords and Questions

- What are joins?
- What are junction tables?
- What is a query?
- What are the keywords to find, remove, and change data?


### Prerequisites

- [Data Modeling 1](./data-modeling-1.md)
- [SQL 1](./sql-1.md)
- [Data Modeling 2](./data-modeling-2.md)

### Objectives

- Learn how to create multiple SQL tables that are related
- Learn how to query multiple tables using joins

### Materials

[Codecademy SQL Tutorial](https://www.codecademy.com/learn/learn-sql)

### Lesson

1. Go through the "Joining Table Data with SQL" section of https://teamtreehouse.com/library/querying-relational-databases

2. Work through the [Codecademy SQL Tutorial](https://www.codecademy.com/learn/learn-sql) **Section 4 (Multiple Tables)**

### Independent practice

In PostgreSQL on your own machine, you are going to create the tables for a microblogging platform (an app similar to Twitter). Your database should be able to store user information and posts by specific users. One post must _belong to_ exactly one user. One user can have many posts. Later, we'll add the ability for users to follow each other, but not now.

0. With pencil/pen and paper, write out the data for a database with the following spec. Fill in the fields with fake data that you make up. Be sure to link posts to a certain existing user!

Here's a sample schema:

    - a table named: `users`
        - which has a text field named: `name`
        - and a text field named: `email`
    - a table named: `posts`
        - which has an integer field named: `user_id`
        - and a text field named: `content`

1. Now enter the PostgreSQL command line program using the terminal command `psql`. Once there, use SQL statements to create two tables according to the spec for the two tables in step 0.

1.  Once you have your two tables set up, compare your table set-up with someone else's.

1.  Add sample data to the tables yourself (make up some users and posts).

1.  Try writing queries that get data such as:

    - All the tweets by a given user
    - The 10 most recent tweets by any user
    - Use a join to get a user's info along with their tweets
    - Make up your own!

1.  Now let's perform a database migration. We will add a new column to an existing table in our database. Add a text field named: `bio` to your existing `users` table!

1.  Add some sample data to your new `bio` fields, but not for every user (leave some of their bios blank).

1.  Try writing queries that get data such as:
    - Just the bios of all users in the databases
    - A list of users that have no bio
    - Just the names of those users that have no bio
    - Make up your own!

### Extra Challenge

If you complete the above, we'll move on to creating a join table.

1. Add a new table named `follows` that has an int field `follower_id` and an int field `followed_id`. Draw a picture for this table.

2. Write some queries that get data such as:
   - All users that user 2 is following
     - Hint: in `follows`, look for `follower_id` 2, and get all of the user IDs that are in those rows' `followed_id` fields. Then get the users by that set of user IDs.
   - All users that follow user 2 (users that have 2 as the `followed_id`)
     - Hint: in `follows`, look for `followed_id` 2, and get all of the user IDs that are in those rows' `follower_id` fields. Then get those users.
   - Find which user has the most followers

### Supplemental Materials

- Another good SQL tutorial: [SQL Teaching](https://www.sqlteaching.com)
- Free SQL Cloud DBs can be created at https://www.elephantsql.com/
- [SQL Codecademy Tutorial (interactive)](https://www.codecademy.com/learn/learn-sql)
- [Postico for PostgreSQL](https://eggerapps.at/postico/)
- [Khan Academy's introductory SQL(videos)](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql)
- [TutorialsPoint (detailed)](https://www.tutorialspoint.com/sql/)
- [Learn SQL the hard way, textbook](https://learncodethehardway.org/sql/)
- [GalaXQL (interactive, graphical)](http://sol.gfxile.net/galaxql.html)
- [PostgreSQL SQL, technical reference manual](https://www.postgresql.org/docs/current/static/sql.html)
- [SQLZoo](https://sqlzoo.net/wiki/SQL_Tutorial)
- [A RDBMS Comparison](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)
- [Learning SQL with Dunder Mifflin](https://medium.com/@julinvictus/learning-sql-with-dunder-mifflin-693bcd7f5a7) by Juliana Almeida
