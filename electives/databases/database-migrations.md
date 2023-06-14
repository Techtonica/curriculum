# Database Migrations

### Prerequisites

- [Relational Databases](/databases/relational-databases.md)

### Motivation

Understand how to change the schema of a database table. This includes operations to add, remove, and modify fields.

Making changes to a database is often necessary as an application evolves. While some database changes require creating or deleting tables, others require modifying an existing table (called a database migration).

**Which companies use Database Migration?**

- Many top companies uses database migration for maintaining and operating the database. Some of them are mentioned below along with the description in links:
  - [Facebook](https://mashable.com/2011/12/15/facebook-timeline-mysql/?europe=true)
  - [Twitter](https://blog.twitter.com/engineering/en_us/a/2015/another-look-at-mysql-at-twitter-and-incubating-mysos.html)
  - [YouTube](http://download.nust.na/pub6/mysql/tech-resources/articles/mysqluc-2007.html)

### Objective

**Participants will be able to:**

- Add a field to a table
- Remove a field from a table
- Change the properties of a field (name, data type)
- Change the name of a table
- Know what database transactions are and when to apply them

### Materials

- [SQL Fiddle tool](http://sqlfiddle.com)

### Common Mistakes / Misconceptions

Make sure to backup your database before running a migration. If you've made a mistake in your SQL command (e.g. deleted incorrect field), reverting to a database back-up will allow you to easily get back to the previous state where your data is intact.

To ensure that your migration works correctly, it is a good idea to apply it to a fake dataset first.

Make sure to not slow down the database for other users during a migration. Migrations on large tables can be slow, and when migrations are in-progress, any other changes to modify the table are blocked until the migration finishes. It is a good idea to apply migrations during a low-traffic time, so it is the least disruptive to users.

You should almost always use transactions in a migration. This is especially important when you are doing operations that add or remove columns from the table.

Use transactions only when it's important that separate SQL commands succeed or fail as a unit. If you use transactions when they are not needed, it will add unnecessary complexity to your SQL code and hurt performance.

### Guided Practice

Imagine you built a website to track the user's physical activity. Information about each user is stored in a database table called _account_, and every time a new user signs up from the sign up page, a new row is added to the table.

| id  | name  | email                | pet          |
| --- | ----- | -------------------- | ------------ |
| 1   | Jeff  | abcd@gmail.com       | siberian cat |
| 2   | Sarah | helloworld@gmail.com | russian blue |

On the sign up webpage you want to:

- include a new field for phone number
- remove the field for pet (unnecessary info to collect and many people don't have pets)

To support these changes, you need to modify the way data is stored in the _account_ table. This includes adding a column for **phone** and dropping the **pet** column.

- Write a SQL command to generate the account table, and populate it with the sample data
- Apply a migration to modify the table
- Insert a new user Alexandria with:
  - email orange1777@gmail.com
  - phone number _(515) 525-5151_ (stored as INT)

### Independent Practice

**Activity #1**
Create your own table with at least four columns. One of the columns should be type VARCHAR(5).

Populate the table with three entries.

**Activity #2**
Think about how you want the table to change. Are there additional columns you'd like to add or ones you want to remove?

Run a migration to add one column and delete one column. Also, change the field with type VARCHAR(5) to VARCHAR(50). (Don't forget to run as part of a transaction!)

#### Supplemental Resources

- [TutorialsPoint](https://www.tutorialspoint.com/sql/sql-alter-command.htm)
- [The Bad Tutorials video on youtube](https://www.youtube.com/watch?v=vDr2DZeU5mY)
- [Transactions](https://www.postgresql.org/docs/9.6/static/tutorial-transactions.html)

Further learning: [Database Migrations Done Right](http://www.brunton-spall.co.uk/post/2014/05/06/database-migrations-done-right/)

### Check for Understanding

- [Grasp SQL Quiz](https://www.quia.com/quiz/222978.html?AP_rand=168283296)
